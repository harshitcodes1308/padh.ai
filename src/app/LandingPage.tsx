"use client";

import "./landing.css";
import SmoothScrollProvider from "@/components/landing/SmoothScrollProvider";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import StatStrip from "@/components/landing/StatStrip";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import WhyPadhAI from "@/components/landing/WhyPadhAI";
import AppDownloadStrip from "@/components/landing/AppDownloadStrip";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <SmoothScrollProvider>
      <main style={{ background: "#FFFFFF", position: "relative", overflowX: "hidden" }}>
        <Nav />
        <Hero />
        <StatStrip />
        <FeaturesGrid />
        <WhyPadhAI />
        <AppDownloadStrip />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
