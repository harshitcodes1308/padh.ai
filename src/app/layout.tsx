import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { TRPCProvider } from "@/lib/trpc/client";
import { ConsoleWelcome } from "@/components/ConsoleWelcome";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "ICSE Saviours – AI Student OS",
  description: "Your AI-powered academic OS for ICSE success",
};

// CRITICAL: Viewport configuration for mobile responsiveness
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ConsoleWelcome />
          <TRPCProvider>
            {children}
          </TRPCProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
