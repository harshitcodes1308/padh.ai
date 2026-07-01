"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "./useScrollReveal";

const SUBJECTS = [
  { label: "Mathematics", icon: "📐" },
  { label: "Science", icon: "🔬" },
  { label: "Social Science", icon: "🌍" },
  { label: "English", icon: "📚" },
  { label: "Hindi", icon: "अ" },
  { label: "Computer App", icon: "💻" },
];

export default function SubjectsGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !gridRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current!.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "80px 24px", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h2 
          style={{ 
            fontFamily: "var(--font-display)",
            fontSize: "clamp(24px, 4vw, 32px)",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            marginBottom: 32,
            textAlign: "center"
          }}
        >
          Select your subject
        </h2>
        
        <div 
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 16,
          }}
        >
          {SUBJECTS.map((subject, i) => (
            <div 
              key={i}
              className="sa-bento"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                padding: "24px 16px",
                cursor: "pointer",
                background: "var(--bg-surface)",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: 32 }}>{subject.icon}</div>
              <div 
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--text-primary)"
                }}
              >
                {subject.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
