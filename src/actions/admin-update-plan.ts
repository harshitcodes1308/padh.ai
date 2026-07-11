"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

type PlanAction = "FREE" | "MONTHLY" | "YEARLY";

/**
 * Admin-only action: Update a user's subscription plan.
 * Sets all relevant fields (isPaid, planType, subscriptionStatus, subscriptionExpiry)
 * in a single atomic operation.
 *
 * @param customExpiryDays - Optional: override the default expiry days (30 for monthly, 365 for yearly)
 */
export async function adminUpdateUserPlan(userId: string, plan: PlanAction, customExpiryDays?: number) {
    // Auth: Only admins can do this
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
        return { success: false, error: "Unauthorized" };
    }

    try {
        if (plan === "FREE") {
            await prisma.user.update({
                where: { id: userId },
                data: {
                    isPaid: false,
                    planType: "FREE",
                    subscriptionStatus: "ACTIVE",
                    subscriptionExpiry: null,
                },
            });
        } else if (plan === "MONTHLY") {
            const days = customExpiryDays ?? 30;
            const expiry = new Date();
            expiry.setDate(expiry.getDate() + days);

            await prisma.user.update({
                where: { id: userId },
                data: {
                    isPaid: true,
                    planType: "MONTHLY",
                    subscriptionStatus: "ACTIVE",
                    subscriptionExpiry: expiry,
                },
            });
        } else if (plan === "YEARLY") {
            const days = customExpiryDays ?? 365;
            const expiry = new Date();
            expiry.setDate(expiry.getDate() + days);

            await prisma.user.update({
                where: { id: userId },
                data: {
                    isPaid: true,
                    planType: "YEARLY",
                    subscriptionStatus: "ACTIVE",
                    subscriptionExpiry: expiry,
                },
            });
        }

        revalidatePath("/admin/users");
        return { success: true };
    } catch (error) {
        console.error("Admin plan update error:", error);
        return { success: false, error: "Failed to update plan" };
    }
}
