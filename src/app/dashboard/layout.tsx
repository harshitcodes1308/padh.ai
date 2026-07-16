"use client";

import { trpc } from "@/lib/trpc/client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemedDashboardContent } from "@/components/providers/themed-dashboard";
import { UpgradePrompt } from "@/components/UpgradePrompt";
import { isLockedRoute, getFeatureInfo } from "@/lib/tier-config";
import type { SessionUser } from "@/lib/auth";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data: profile } = trpc.dashboard.getProfile.useQuery();
    const { data: session } = trpc.auth.getSession.useQuery();
    const pathname = usePathname();

    const user = session?.user as SessionUser | undefined;
    const router = useRouter();

    useEffect(() => {
        if (profile && profile.onboardingComplete === false) {
            router.push("/onboarding");
        }
    }, [profile, router]);

    // Paid if legacy isPaid flag OR active subscription
    // Use profile (DB-fresh) for paid check, fall back to JWT session
    const paidSource = profile ?? user;
    const isPaid = !!(
        paidSource?.isPaid ||
        ((paidSource?.planType === "MONTHLY" || paidSource?.planType === "YEARLY") &&
            paidSource?.subscriptionStatus === "ACTIVE")
    );

    // Client-side locked route gating (replaces old middleware redirect)
    const showUpgrade = !isPaid && isLockedRoute(pathname);
    const featureInfo = showUpgrade ? getFeatureInfo(pathname) : null;

    return (
        <ThemeProvider>
            <ThemedDashboardContent
                userName={profile?.name}
                userEmail={profile?.email}
                isPaid={isPaid}
                planType={(paidSource?.planType as string) ?? "FREE"}
            >
                {showUpgrade ? (
                    <UpgradePrompt
                        featureName={featureInfo?.name ?? "Pro Feature"}
                        description={featureInfo?.description ?? "This feature requires an active subscription."}
                    />
                ) : children}
            </ThemedDashboardContent>
        </ThemeProvider>
    );
}
