'use client';

import { useState, useEffect, useRef } from 'react';
import DashboardSidebar from '@/components/layout/dashboard-sidebar';
import type { CSSProperties, ReactNode } from 'react';
import { useTheme } from '@/components/providers/theme-provider';

const dashboardThemeVars = {
    '--brand-green': '#08BD80',
    '--brand-blue': '#2D81F7',
    '--bg-base': '#F6FAFF',
    '--bg-surface': '#FFFFFF',
    '--bg-elevated': '#EEF5FF',
    '--border': '#DFE8F4',
    '--bg-border': '#D7E3F2',
    '--bg-border-light': '#EEF5FF',
    '--text-primary': '#1F2A33',
    '--text-secondary': '#53606B',
    '--text-muted': '#7E8A96',
    '--text-disabled': '#B7C0C9',
    '--text-dark-alt': '#111827',
    '--accent-gold': '#2D81F7',
    '--accent-gold-dim': '#1F6FE5',
    '--accent-gold-glow': 'rgba(45, 129, 247, 0.09)',
    '--accent-gold-border': 'rgba(45, 129, 247, 0.28)',
    '--status-green': '#08BD80',
    '--status-red': '#EF4444',
    '--status-blue': '#2D81F7',
    '--status-orange': '#F59E0B',
    '--shadow-card': '0 1px 2px rgba(31, 42, 51, 0.05)',
    '--shadow-card-hover': '0 8px 24px rgba(45, 129, 247, 0.10)',
    '--shadow-gold': '0 8px 18px rgba(45, 129, 247, 0.16)',
} as CSSProperties & Record<`--${string}`, string>;

const dashboardDarkThemeVars = {
    '--brand-green': '#08BD80',
    '--brand-blue': '#2D81F7',
    '--bg-base': '#080C10',
    '--bg-surface': '#101720',
    '--bg-elevated': '#172230',
    '--border': '#1E293B',
    '--bg-border': '#273549',
    '--bg-border-light': '#1A2433',
    '--text-primary': '#F8FAFC',
    '--text-secondary': '#94A3B8',
    '--text-muted': '#64748B',
    '--text-disabled': '#475569',
    '--text-dark-alt': '#FFFFFF',
    '--accent-gold': '#2D81F7',
    '--accent-gold-dim': '#1F6FE5',
    '--accent-gold-glow': 'rgba(45, 129, 247, 0.15)',
    '--accent-gold-border': 'rgba(45, 129, 247, 0.38)',
    '--status-green': '#08BD80',
    '--status-red': '#EF4444',
    '--status-blue': '#2D81F7',
    '--status-orange': '#F59E0B',
    '--shadow-card': '0 4px 20px rgba(0, 0, 0, 0.35)',
    '--shadow-card-hover': '0 8px 30px rgba(45, 129, 247, 0.15)',
    '--shadow-gold': '0 8px 18px rgba(45, 129, 247, 0.20)',
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
    const { theme } = useTheme();

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

    const currentThemeVars = theme === 'dark' ? dashboardDarkThemeVars : dashboardThemeVars;

    return (
        <div
            className="dashboard-theme"
            style={{
                ...currentThemeVars,
                minHeight: '100vh',
                position: 'relative',
                color: 'var(--text-primary)',
                colorScheme: theme === 'dark' ? 'dark' : 'light',
                transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease',
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

            {/* Sidebar - above video */}
            <DashboardSidebar
                userName={userName}
                userEmail={userEmail}
                isPaid={isPaid}
                planType={planType}
            />

            {/* Main content - above video, with transparent bg override */}
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
