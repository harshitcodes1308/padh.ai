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
        style={{ 
          maxWidth: 700, 
          margin: "0 auto", 
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <h2 
          style={{ 
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 800,
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
            margin: 0
          }}
        >
          Why I built PADH.AI
        </h2>
        
        <div style={{
          fontFamily: "var(--font-body)",
          fontSize: 18,
          color: "var(--text-secondary)",
          lineHeight: 1.6,
          display: "flex",
          flexDirection: "column",
          gap: 16
        }}>
          <p style={{ margin: 0 }}>
            Hi, I'm Gaurav. When I was in Class 10, I didn't have access to expensive coaching or private tutors. I had to figure out the CBSE pattern, the marking scheme, and the right way to write answers completely on my own. It worked out—I scored a perfect 100%—but it shouldn't have been that hard.
          </p>
          <p style={{ margin: 0 }}>
            That's why I built PADH.AI. I wanted to take everything I learned about cracking the boards and put it into a tool that's actually helpful, not just another generic question bank. 
          </p>
          <p style={{ margin: 0 }}>
            Here, you'll find the exact strategies I used, powered by AI that understands the CBSE syllabus inside out. Whether you're aiming to pass or trying to get that perfect 100, we're going to do it together.
          </p>
        </div>
        
        <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 16 }}>
          <img 
            src="https://ui-avatars.com/api/?name=Gaurav+Suthar&background=08BD80&color=fff&size=100" 
            alt="Gaurav Suthar" 
            style={{ width: 48, height: 48, borderRadius: "50%" }}
          />
          <div>
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "var(--text-primary)" }}>Gaurav Suthar</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)" }}>100% in 10th CBSE Boards</div>
          </div>
        </div>
      </div>
    </section>
  );
}
