'use client';

import { useState, useEffect, useRef } from 'react';
import DashboardSidebar from '@/components/layout/dashboard-sidebar';
import type { CSSProperties, ReactNode } from 'react';

const dashboardThemeVars = {
    '--brand-green': '#08BD80',
    '--brand-blue': '#2D81F7',
    '--bg-base': '#0D0D1A',
    '--bg-surface': '#13131F',
    '--bg-elevated': '#1A1A2E',
    '--border': '#252538',
    '--bg-border': '#252538',
    '--bg-border-light': '#353552',
    '--text-primary': '#F5F0E8',
    '--text-secondary': '#B0AABA',
    '--text-muted': '#6B6B80',
    '--text-disabled': '#3D3D50',
    '--text-dark-alt': '#FFFFFF',
    '--accent-gold': '#08BD80',
    '--accent-gold-dim': '#06A36D',
    '--accent-gold-glow': 'rgba(8, 189, 128, 0.10)',
    '--accent-gold-border': 'rgba(8, 189, 128, 0.30)',
    '--status-green': '#3ECF8E',
    '--status-red': '#F87171',
    '--status-blue': '#60A5FA',
    '--status-orange': '#FB923C',
    '--shadow-card': '0 4px 24px rgba(0, 0, 0, 0.5)',
    '--shadow-card-hover': '0 10px 34px rgba(0, 0, 0, 0.42)',
    '--shadow-gold': '0 0 20px rgba(8, 189, 128, 0.18)',
} as CSSProperties & Record<`--${string}`, string>;

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
        <div
            className="dashboard-theme"
            style={{
                ...dashboardThemeVars,
                minHeight: '100vh',
                position: 'relative',
                color: 'var(--text-primary)',
                colorScheme: 'dark',
            }}
        >
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
