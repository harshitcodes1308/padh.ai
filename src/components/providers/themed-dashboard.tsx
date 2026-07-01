'use client';

import { useState, useEffect, useRef } from 'react';
import DashboardSidebar from '@/components/layout/dashboard-sidebar';
import { ReactNode } from 'react';

const VIDEO_URL = "https://res.cloudinary.com/dv0w2nfnw/video/upload/v1774898701/videoplayback_tgdakw.mp4";

export function ThemedDashboardContent({
    children,
    userName,
    userEmail,
    isPaid,
    planType,
}: {
    children: ReactNode;
    userName?: string;
    userEmail?: string;
    isPaid?: boolean;
    planType?: string;
}) {
    const [isMobile, setIsMobile] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 1024);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75;
            videoRef.current.play().catch(() => {});
        }
    }, []);

    return (
        <div style={{ minHeight: '100vh', position: 'relative' }}>
            {/* ── Dashboard Background ── */}
            <div style={{
                position: 'fixed',
                inset: 0,
                background: 'var(--bg-base)',
                zIndex: 0,
                pointerEvents: 'none',
            }} />

            {/* Sidebar — above video */}
            <DashboardSidebar
                userName={userName}
                userEmail={userEmail}
                isPaid={isPaid}
                planType={planType}
            />

            {/* Main content — above video, with transparent bg override */}
            <main
                className="dashboard-main"
                style={{
                    marginLeft: isMobile ? 0 : 240,
                    minHeight: '100vh',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
                    paddingTop: isMobile ? 64 : 0,
                    paddingBottom: isMobile ? 64 : 0,
                }}
            >
                {children}
            </main>
        </div>
    );
}
