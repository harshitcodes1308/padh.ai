"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { trpc } from "@/lib/trpc/client";
import { useResponsive } from "@/hooks/useResponsive";
import dynamic from "next/dynamic";

const AnimatedGlassyPricing = dynamic(() => import("@/components/ui/animated-glassy-pricing"), { ssr: false });

export default function PricingPage() {
    const router = useRouter();
    const { isMobile } = useResponsive();
    const { data: session } = trpc.auth.getSession.useQuery();
    const userName = (session?.user as any)?.name || "";
    const userEmail = (session?.user as any)?.email || "";

    const [submitting, setSubmitting] = useState(false);

    async function handleFreePlan() {
        setSubmitting(true);
        try {
            await fetch("/api/auth/set-plan", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ planType: "FREE" }),
            });
            router.push("/dashboard");
        } catch {
            setSubmitting(false);
        }
    }

    async function handlePaidPlan(planKey: "MONTHLY" | "YEARLY") {
        setSubmitting(true);
        // Load Razorpay SDK
        const loaded = await new Promise((resolve) => {
            if (window.Razorpay) { resolve(true); return; }
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });

        if (!loaded) {
            alert("Razorpay SDK failed to load. Are you online?");
            setSubmitting(false);
            return;
        }

        const commonHandler = async (response: any) => {
            try {
                const { verifyPaymentAction } = await import("@/actions/verify-payment");
                const result = await verifyPaymentAction(response);
                if (result.success) {
                    router.push("/dashboard");
                } else {
                    alert("Payment verification failed: " + result.error);
                }
            } catch {
                alert("Verification failed. Please contact support if money was deducted.");
            }
            setSubmitting(false);
        };

        const prefill = { name: userName, email: userEmail };
        const themeColor = "#2D81F7";
        const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";

        try {
            if (planKey === "MONTHLY") {
                const subRes = await fetch("/api/create-subscription", { method: "POST" });
                const subData = await subRes.json();

                if (!subData.success) {
                    alert(`Subscription Error: ${subData.error || "Failed to create subscription"}`);
                    setSubmitting(false);
                    return;
                }

                const options = {
                    key,
                    name: "PADH.AI",
                    description: "Monthly Access - ₹199/month",
                    subscription_id: subData.subscription.id,
                    handler: commonHandler,
                    prefill,
                    theme: { color: themeColor },
                };

                const paymentObject = new (window as any).Razorpay(options);
                paymentObject.open();
                paymentObject.on('payment.failed', function () {
                    setSubmitting(false);
                });
            } else {
                const orderRes = await fetch("/api/create-order", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ type: "PRO_YEARLY" }),
                });
                const orderData = await orderRes.json();

                if (!orderData.success) {
                    alert(`Payment Error: ${orderData.error}`);
                    setSubmitting(false);
                    return;
                }

                const options = {
                    key,
                    amount: orderData.order.amount,
                    currency: orderData.order.currency,
                    name: "PADH.AI",
                    description: "Yearly Access - ₹599/year",
                    order_id: orderData.order.id,
                    handler: commonHandler,
                    prefill,
                    theme: { color: themeColor },
                };

                const paymentObject = new (window as any).Razorpay(options);
                paymentObject.open();
                paymentObject.on('payment.failed', function () {
                    setSubmitting(false);
                });
            }
        } catch {
            alert("Payment failed. Please try again.");
            setSubmitting(false);
        }
    }

    async function handleDomin8Activate(code: string) {
        setSubmitting(true);
        try {
            const res = await fetch("/api/auth/activate-domin8", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code }),
            });
            if (!res.ok) throw new Error("Activation failed");
            router.push("/dashboard");
        } catch {
            alert("Activation failed. Please try again.");
            setSubmitting(false);
        }
    }

    function handlePlanSelect(plan: "FREE" | "MONTHLY" | "YEARLY" | "DOMIN8", domin8Code?: string) {
        if (submitting) return;
        if (plan === "FREE") {
            handleFreePlan();
        } else if (plan === "DOMIN8") {
            handleDomin8Activate(domin8Code || "");
        } else {
            handlePaidPlan(plan);
        }
    }

    return (
        <div data-theme="light" style={{ width: "100vw", height: "100vh", position: "relative" }}>
            <AnimatedGlassyPricing
                isMobile={isMobile}
                onSelectPlan={handlePlanSelect}
                userName={userName}
            />
        </div>
    );
}
