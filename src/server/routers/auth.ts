import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "@/server/trpc";
import {
    createToken,
    setSessionCookie,
    clearSessionCookie,
} from "@/lib/auth";
import { TRPCError } from "@trpc/server";
import { checkRateLimit, AUTH_RATE_LIMIT } from "@/lib/api-rate-limit";

export const authRouter = createTRPCRouter({


    /**
     * Get current session - re-validates plan data from DB on every call.
     * If the JWT is stale (e.g. admin changed plan directly in Neon),
     * it auto-refreshes the cookie so middleware picks up the new values.
     */
    getSession: publicProcedure.query(async ({ ctx }) => {
        if (!ctx.session?.user) return ctx.session;
        if (!process.env.DATABASE_URL && process.env.NODE_ENV !== "production") {
            return ctx.session;
        }

        // Re-read the user's current plan data from the database
        const freshUser = await ctx.prisma.user.findUnique({
            where: { id: ctx.session.user.id },
            select: {
                isPaid: true,
                planType: true,
                subscriptionStatus: true,
                subscriptionExpiry: true,
                onboardingComplete: true,
                name: true,
                role: true,
                lnbChemistryUnlocked: true,
            },
        });

        if (!freshUser) return ctx.session;

        const jwt = ctx.session.user;

        // Detect drift between the JWT snapshot and the live DB
        const hasDrift =
            jwt.isPaid !== freshUser.isPaid ||
            jwt.planType !== freshUser.planType ||
            jwt.subscriptionStatus !== freshUser.subscriptionStatus ||
            jwt.onboardingComplete !== freshUser.onboardingComplete;

        if (hasDrift) {
            // Build an updated SessionUser from the DB values
            const updatedUser = {
                ...jwt,
                isPaid: freshUser.isPaid,
                planType: freshUser.planType,
                subscriptionStatus: freshUser.subscriptionStatus,
                subscriptionExpiry: freshUser.subscriptionExpiry?.toISOString() ?? null,
                onboardingComplete: freshUser.onboardingComplete,
                name: freshUser.name,
                role: freshUser.role,
                lnbChemistryUnlocked: freshUser.lnbChemistryUnlocked,
            };

            // Mint a fresh JWT and set the cookie so middleware sees the update
            const newToken = await createToken(updatedUser);
            await setSessionCookie(newToken, false, ctx.resHeaders);

            return { user: updatedUser };
        }

        return ctx.session;
    }),

    /**
     * Get current user profile
     */
    getProfile: protectedProcedure.query(async ({ ctx }) => {
        const user = await ctx.prisma.user.findUnique({
            where: { id: ctx.user.id },
            include: {
                studentProfile: true,
                teacherProfile: true,
            },
        });

        return user;
    }),
});
