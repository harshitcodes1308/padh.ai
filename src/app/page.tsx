import type { Metadata } from "next";
import LandingPage from "./LandingPage";

export const metadata: Metadata = {
  title: "padhai | padh.ai by ToppersClan - Best AI Tool for CBSE",
  description:
    "padh.ai is the best AI tool for CBSE board prep by Gaurav Suthar from ToppersClan. padhai made easy with AI doubt solver, smart planner, and PYQ tests. Start free.",
  keywords: [
    "padhai",
    "padh.ai",
    "padhai by toppersclan",
    "topperclan",
    "gaurav suthar",
    "padh.ai by toppers clan",
    "best tool for cbse",
    "best ai for cbse",
    "ai tool for cbse"
  ],
  openGraph: {
    title: "padhai | padh.ai by ToppersClan - Best AI Tool for CBSE",
    description:
      "padh.ai is the best AI tool for CBSE board prep by Gaurav Suthar from ToppersClan. Start free.",
    url: "https://padhai.toppersclan.com",
    siteName: "padh.ai by ToppersClan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "padhai | padh.ai by ToppersClan - Best AI Tool for CBSE",
    description:
      "padh.ai is the best AI tool for CBSE board prep by Gaurav Suthar from ToppersClan. Start free.",
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
