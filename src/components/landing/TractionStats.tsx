"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./useScrollReveal";

interface Stat {
  value: number;
  display: (n: number) => string;
  label: string;
}

// Updated for Gaurav Sir / PADH.AI context
const STATS: Stat[] = [
  { value: 1000000, display: (n) => (n >= 1000000 ? "1M+" : Math.round(n / 1000) + "K+"), label: "YouTube subscribers" },
  { value: 500, display: (n) => Math.round(n) + "+", label: "Videos published" },
  { value: 100, display: (n) => Math.round(n) + "%", label: "Scored in 10th CBSE boards" },
  { value: 10, display: (n) => Math.round(n) + "+", label: "Years teaching CBSE" },
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
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
          onUpdate: () => { el.textContent = s.display(counter.v); },
        });
      });
      gsap.fromTo(
        ".sa-stat-grid",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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
      style={{ position: "relative", zIndex: 1, padding: "clamp(80px, 12vw, 140px) 24px", background: "var(--bg-base)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 56, maxWidth: 720 }}>
          <div className="sa-eyebrow" style={{ marginBottom: 18 }}>The proof</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 5.5vw, 58px)",
              letterSpacing: "-0.03em",
              margin: "0 0 14px",
              lineHeight: 1.05,
              fontWeight: 800,
              color: "var(--text-primary)",
            }}
          >
            Built by a real{" "}
            <span style={{ color: "var(--brand-blue)" }}>CBSE topper.</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 2.2vw, 19px)",
              color: "var(--text-secondary)",
              maxWidth: 580,
              margin: 0,
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            Gaurav Sir scored 100% in his 10th CBSE boards and has spent years teaching what actually works - not theory, real board strategy.
          </p>
        </div>

        {/* Stat cards */}
        <div
          className="sa-stat-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 14,
            marginBottom: 28,
            alignItems: "stretch",
          }}
        >
          {STATS.map((s, i) => {
            const featured = i === 2; // 100% score - headline stat
            return (
              <div
                key={i}
                className={`sa-bento sa-stat-card${featured ? " sa-stat-featured" : ""}`}
                style={{ padding: "28px 24px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}
              >
                <div
                  ref={(el) => { numRefs.current[i] = el; }}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(34px, 4.5vw, 50px)",
                    color: "var(--brand-blue)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  0
                </div>
                <div
                  className="sa-stat-label"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    letterSpacing: "0.01em",
                    fontWeight: 500,
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
            padding: "20px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
            Gaurav Sir runs{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>youtube.com/@GauravSuthar</span>
            {" "}- one of India's most trusted CBSE channels.{" "}
            <span className="chip-green" style={{ fontSize: 12, fontWeight: 600 }}>100% in boards</span>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .sa-stat-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 440px) {
          .sa-stat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
