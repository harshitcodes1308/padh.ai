import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/onboarding(.*)']);
const isPublicRoute = createRouteMatcher(['/login(.*)', '/signup(.*)', '/']);

export default clerkMiddleware(async (auth, req) => {
    const { pathname } = req.nextUrl;

    // ── Creator Portal Protection ──
    if (pathname.startsWith('/creator/dashboard')) {
        const creatorToken = req.cookies.get('creator-token')?.value;
        if (!creatorToken) {
            return NextResponse.redirect(new URL('/creator/login', req.url));
        }
        try {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET + "-creator-panel");
            const { payload } = await jwtVerify(creatorToken, secret);
            if (!payload || payload.role !== 'creator') {
                throw new Error("Invalid payload");
            }
        } catch {
            const res = NextResponse.redirect(new URL('/creator/login', req.url));
            res.cookies.delete('creator-token');
            return res;
        }
    }

    if (pathname === '/creator/login') {
        const creatorToken = req.cookies.get('creator-token')?.value;
        if (creatorToken) {
            try {
                const secret = new TextEncoder().encode(process.env.JWT_SECRET + "-creator-panel");
                const { payload } = await jwtVerify(creatorToken, secret);
                if (payload && payload.role === 'creator') {
                    return NextResponse.redirect(new URL('/creator/dashboard', req.url));
                }
            } catch {
                // Ignore, let them log in
            }
        }
    }

    // Protect dashboard and onboarding routes
    if (isProtectedRoute(req)) {
        await auth.protect();
    }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    '/__clerk/:path*',
  ],
};
