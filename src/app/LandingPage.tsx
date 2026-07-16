"use client";

import "./landing.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SmoothScrollProvider from "@/components/landing/SmoothScrollProvider";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import CreatorGallery from "@/components/landing/CreatorGallery";
import StudentVoices from "@/components/landing/StudentVoices";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import TractionStats from "@/components/landing/TractionStats";
import WhyPadhAI from "@/components/landing/WhyPadhAI";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <main className="landing-shell" style={{ background: "var(--bg-base)", position: "relative", overflowX: "hidden" }}>
          <Nav />
          <Hero />
          <FeaturesGrid />
          <TractionStats />
          <CreatorGallery />
          <StudentVoices />
          <WhyPadhAI />
          <Footer />
        </main>
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
