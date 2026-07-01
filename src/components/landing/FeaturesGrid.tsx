"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "./useScrollReveal";

const FEATURES = [
  {
    title: "AI Doubt Solver",
    desc: "Snap a photo of your doubt. Get a step-by-step explanation tailored to the CBSE syllabus in seconds.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brand-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h4l3-9 5 18 3-9h5"/>
      </svg>
    )
  },
  {
    title: "Smart Study Planner",
    desc: "A personalized schedule that adapts to your pace, ensuring you cover every chapter before the boards.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brand-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    )
  },
  {
    title: "Previous Year Questions",
    desc: "Practice with actual CBSE board questions from the last 10 years, categorized by topic and difficulty.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brand-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
        <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/>
      </svg>
    )
  }
];

export default function FeaturesTrio() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !gridRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current!.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "120px 24px", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        
        <div 
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "64px 40px",
            textAlign: "center"
          }}
        >
          {FEATURES.map((feat, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
              <div 
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(8, 189, 128, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {feat.icon}
              </div>
              <div>
                <h3 
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                    marginBottom: 12
                  }}
                >
                  {feat.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
