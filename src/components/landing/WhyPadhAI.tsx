"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "./useScrollReveal";

export default function WhyPadhAI() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !contentRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current!.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      style={{ 
        padding: "100px 24px", 
        background: "#F8F9FA", // Light off-white surface for contrast
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div 
        ref={contentRef}
        className="sa-founder-grid"
        style={{ 
          maxWidth: 1060, 
          margin: "0 auto", 
          display: "grid",
          gridTemplateColumns: "minmax(260px, 0.72fr) minmax(0, 1.28fr)",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div
          style={{
            minHeight: 430,
            borderRadius: "var(--radius-xl)",
            background: "linear-gradient(145deg, rgba(45, 129, 247, 0.12), rgba(8, 189, 128, 0.10))",
            border: "1px solid rgba(45, 129, 247, 0.14)",
            padding: 28,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
          }}
          aria-hidden="true"
        >
          <div
            style={{
              position: "absolute",
              inset: "auto -70px -90px auto",
              width: 230,
              height: 230,
              borderRadius: "50%",
              background: "rgba(8, 189, 128, 0.16)",
            }}
          />
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700, color: "var(--brand-blue)" }}>
            Founder note
          </div>
          <div
            style={{
              width: 164,
              height: 164,
              borderRadius: "50%",
              background: "#FFFFFF",
              border: "1px solid var(--border)",
              boxShadow: "0 10px 28px rgba(45, 129, 247, 0.10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--brand-green)",
              fontFamily: "var(--font-display)",
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: "-0.06em",
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            GS
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 34,
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              100%
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--text-secondary)",
                marginTop: 6,
              }}
            >
              in 10th CBSE Boards
            </div>
          </div>
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 24,
          textAlign: "left",
        }}>
          <h2 
            style={{ 
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 5vw, 44px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
              lineHeight: 1.12,
              margin: 0
            }}
          >
            Why I built PADH.AI
          </h2>
          
          <div style={{
            fontFamily: "var(--font-body)",
            fontSize: 18,
            color: "var(--text-secondary)",
            lineHeight: 1.68,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            maxWidth: 660,
          }}>
            <p style={{ margin: 0 }}>
              Hi, I&apos;m Gaurav. When I was in Class 10, I didn&apos;t have access to expensive coaching or private tutors. I had to figure out the CBSE pattern, the marking scheme, and the right way to write answers completely on my own.
            </p>
            <p style={{ margin: 0 }}>
              It worked out. I scored a perfect 100%, but it shouldn&apos;t have been that hard. PADH.AI takes everything I learned about cracking boards and turns it into a tool that&apos;s useful every day, not just another generic question bank.
            </p>
            <p style={{ margin: 0 }}>
              You&apos;ll find the exact strategies I used, powered by AI that understands the CBSE syllabus inside out. Whether you&apos;re aiming to pass or trying to get that perfect 100, we&apos;re going to do it together.
            </p>
          </div>
          
          <div style={{ marginTop: 4, display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "var(--brand-green)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontSize: 15,
                fontWeight: 800,
                letterSpacing: "-0.04em",
              }}
            >
              GS
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: "var(--text-primary)" }}>Gaurav Suthar</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)" }}>100% in 10th CBSE Boards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
