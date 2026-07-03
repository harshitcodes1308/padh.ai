"use client";

import "./landing.css";
import SmoothScrollProvider from "@/components/landing/SmoothScrollProvider";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import StatStrip from "@/components/landing/StatStrip";
import CreatorGallery from "@/components/landing/CreatorGallery";
import StudentVoices from "@/components/landing/StudentVoices";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import WhyPadhAI from "@/components/landing/WhyPadhAI";

import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <SmoothScrollProvider>
      <main className="landing-shell" style={{ background: "#FFFFFF", position: "relative", overflowX: "hidden" }}>
        <Nav />
        <Hero />
        <FeaturesGrid />
        <StatStrip />
        <CreatorGallery />
        <StudentVoices />
        <WhyPadhAI />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
