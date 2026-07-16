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
     * Get current session - User is now fetched fresh from DB by createTRPCContext on every request,
     * driven by Clerk auth.
     */
    getSession: publicProcedure.query(({ ctx }) => {
        return { user: ctx.user };
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
