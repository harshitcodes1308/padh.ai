"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "./useScrollReveal";
import MagneticButton from "./MagneticButton";
import { brandStats } from "../../config/brand-stats";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const reduced = prefersReducedMotion();
    if (reduced || !contentRef.current) {
      if (contentRef.current) {
        contentRef.current.style.opacity = "1";
        contentRef.current.style.transform = "none";
      }
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(contentRef.current!.children, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "160px 24px 80px",
        overflow: "hidden",
        background: "#FFFFFF", // Unacademy restraint - pure white hero
      }}
    >
      <div ref={contentRef} style={{ position: "relative", zIndex: 1, maxWidth: 840, width: "100%" }}>
        
        {/* Main headline */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(40px, 8vw, 72px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            margin: "0 0 24px",
          }}
        >
          Crack your Class 10 Boards with Gaurav Suthar
        </h1>

        {/* Sub line */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(16px, 2.5vw, 22px)",
            color: "var(--text-secondary)",
            margin: "0 auto 40px",
            maxWidth: 680,
            lineHeight: 1.5,
          }}
        >
          Learn directly from the CBSE Topper who scored {brandStats.boardScore10th} in 10th and {brandStats.boardScore12th} in 12th. Get the exact strategies, notes, and AI tools you need to succeed.
        </p>

        {/* Inline Action */}
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            maxWidth: 500,
            margin: "0 auto 32px",
            flexWrap: "wrap",
          }}
        >
          <input 
            type="email"
            placeholder="Enter your email to start free"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: "1 1 240px",
              padding: "16px 20px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              fontFamily: "var(--font-body)",
              fontSize: 16,
              outline: "none",
              color: "var(--text-primary)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
              transition: "border-color 0.2s ease, box-shadow 0.2s ease",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--brand-green)";
              e.currentTarget.style.boxShadow = "0 0 0 4px rgba(8, 189, 128, 0.1)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.02)";
            }}
          />
          <MagneticButton
            href={`/signup?email=${encodeURIComponent(email)}`}
            className="btn-primary"
            style={{ 
              fontSize: 16, 
              padding: "16px 32px", 
              textDecoration: "none", 
              whiteSpace: "nowrap",
              height: 52,
            }}
            ariaLabel="Start for free"
          >
            Start for free
          </MagneticButton>
        </div>

        {/* YouTube Callout */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.58 6.4c-.23-.86-.91-1.54-1.77-1.77C18.25 4.2 12 4.2 12 4.2s-6.25 0-7.81.43c-.86.23-1.54.91-1.77 1.77C2 7.97 2 12 2 12s0 4.03.42 5.6c.23.86.91 1.54 1.77 1.77 1.56.43 7.81.43 7.81.43s6.25 0 7.81-.43c.86-.23 1.54-.91 1.77-1.77.42-1.57.42-5.6.42-5.6s0-4.03-.42-5.6z" fill="#FF0000"/>
            <path d="M9.75 15.02l6.75-3.81-6.75-3.81v7.62z" fill="white"/>
          </svg>
          <a 
            href="https://youtube.com/@GauravSuthar"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "color 0.2s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}
          >
            Watch Gaurav teach on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
