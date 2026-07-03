import type { Metadata } from "next";
import LandingPage from "./LandingPage";

export const metadata: Metadata = {
  title: "PADH.AI — Your AI-powered board prep workspace",
  description:
    "AI-powered tools built end to end for CBSE Class 10 board prep. Doubt solver, smart planner, PYQ tests, focus mode and more. Start free.",
  openGraph: {
    title: "PADH.AI — Your AI-powered board prep workspace",
    description:
      "AI-powered tools built end to end for CBSE Class 10 board prep. Start free.",
    url: "https://padh.ai",
    siteName: "PADH.AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PADH.AI — Your AI-powered board prep workspace",
    description:
      "AI-powered tools built end to end for CBSE Class 10 board prep. Start free.",
  },
};

/**
 * Public landing page at `/`.
 *
 * The middleware redirects authenticated users away before this renders:
 *   - onboarded   → /dashboard
 *   - mid-onboard → /onboarding
 * So this only ever reaches logged-out visitors. No client-side redirect,
 * no flash of landing for returning users.
 */
export default function HomePage() {
  return <LandingPage />;
}
