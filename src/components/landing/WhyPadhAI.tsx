"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "./useScrollReveal";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Image from "next/image";

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
        background: "var(--bg-surface)", // Alternating surface
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
            border: "1px solid var(--border)",
            position: "relative",
            overflow: "hidden",
            background: "var(--bg-base)"
          }}
          aria-hidden="true"
        >
          <Image 
            src="/gaurav-sir-students.jpg"
            alt="Gaurav Sir with students"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.6) 100%)",
            pointerEvents: "none"
          }} />
          <div style={{ 
            position: "absolute", 
            top: 24, 
            left: 24,
            fontFamily: "var(--font-body)", 
            fontSize: 13, 
            fontWeight: 700, 
            color: "#fff",
            background: "rgba(0,0,0,0.3)",
            padding: "6px 14px",
            borderRadius: 100,
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)"
          }}>
            Founder note
          </div>
          <div style={{
             position: "absolute",
             bottom: 24,
             left: 24,
             right: 24,
          }}>
             <div style={{ 
               color: "#fff", 
               fontWeight: 600, 
               fontSize: 16, 
               fontFamily: "var(--font-body)", 
               textShadow: "0 2px 12px rgba(0,0,0,0.6)" 
             }}>
               Celebrating results with students
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
            Why I built{" "}
            <PointerHighlight>
              <span style={{ color: "var(--brand-green)" }}>PADH.AI</span>
            </PointerHighlight>
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
              <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: "var(--text-primary)" }}>Gaurav Sir</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)" }}>100% in 10th CBSE Boards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
