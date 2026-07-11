import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { TRPCProvider } from "@/lib/trpc/client";
import { ConsoleWelcome } from "@/components/ConsoleWelcome";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://padhai.toppersclan.com"),
  title: {
    template: "%s | padh.ai by ToppersClan",
    default: "padhai | padh.ai by ToppersClan - Best AI Tool for CBSE",
  },
  description: "padh.ai is the best AI tool for CBSE board prep by Gaurav Suthar from ToppersClan.",
  keywords: ["padhai", "padh.ai", "padhai by toppersclan", "topperclan", "gaurav suthar"],
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
