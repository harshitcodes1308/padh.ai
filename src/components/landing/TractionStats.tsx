"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "./useScrollReveal";

interface Stat {
  value: number;
  display: (n: number) => string;
  label: string;
  accent: string;
}

const STATS: Stat[] = [
  { 
    value: 100, 
    display: (n) => Math.round(n) + "%", 
    label: "Gaurav Sir's Class 10 Percentage",
    accent: "var(--brand-blue)"
  },
  { 
    value: 98.6, 
    display: (n) => (n === 98.6 ? "98.6%" : n.toFixed(1) + "%"), 
    label: "Gaurav Sir's Class 12 Percentage",
    accent: "var(--brand-green)"
  },
];

export default function TractionStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    if (reduced) {
      STATS.forEach((s, i) => {
        const el = numRefs.current[i];
        if (el) el.textContent = s.display(s.value);
      });
      return;
    }

    const ctx = gsap.context(() => {
      STATS.forEach((s, i) => {
        const el = numRefs.current[i];
        if (!el) return;
        const counter = { v: 0 };
        gsap.to(counter, {
          v: s.value,
          duration: 2.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => { el.textContent = s.display(counter.v); },
        });
      });
      gsap.fromTo(
        ".sa-stat-grid",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        }
      );
    }, sectionRef);

    return () => { ctx.revert(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ position: "relative", zIndex: 1, padding: "clamp(100px, 14vw, 160px) 24px", background: "var(--bg-base)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 64, maxWidth: 800, textAlign: "center", margin: "0 auto 64px" }}>
          <div className="sa-eyebrow" style={{ marginBottom: 20, justifyContent: "center" }}>The proof is in the results</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 6vw, 64px)",
              letterSpacing: "-0.03em",
              margin: "0 0 20px",
              lineHeight: 1.05,
              fontWeight: 800,
              color: "var(--text-primary)",
            }}
          >
            Learn from someone who has{" "}
            <span style={{ color: "var(--brand-blue)" }}>actually done it.</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(16px, 2.5vw, 20px)",
              color: "var(--text-secondary)",
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            No fluff. No generic advice. Just the exact strategies and patterns that Gaurav Sir used to completely crack the CBSE Board Exams.
          </p>
        </div>

        {/* Stat cards */}
        <div
          className="sa-stat-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
            marginBottom: 40,
            alignItems: "stretch",
          }}
        >
          {STATS.map((s, i) => {
            return (
              <div
                key={i}
                className="sa-bento sa-stat-card"
                style={{ 
                  padding: "48px 32px", 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  justifyContent: "center",
                  textAlign: "center",
                  background: "var(--bg-surface)",
                  border: "1.5px solid var(--bg-border)",
                  borderRadius: 24,
                }}
              >
                <div
                  ref={(el) => { numRefs.current[i] = el; }}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(72px, 10vw, 140px)",
                    color: s.accent,
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    marginBottom: 20,
                  }}
                >
                  0%
                </div>
                <div
                  className="sa-stat-label"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(20px, 3vw, 26px)",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                    fontWeight: 700,
                  }}
                >
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust strip */}
        <div
          className="sa-bento"
          style={{
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
            textAlign: "center",
            maxWidth: 800,
            margin: "0 auto",
            borderRadius: 100,
          }}
        >
          <span style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6 }}>
            Join 1M+ students who trust{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>youtube.com/@GauravSuthar</span>
            {" "}for their Board Prep.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sa-stat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
