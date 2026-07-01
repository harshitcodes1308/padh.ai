"use client";

import { useScrollReveal } from "./useScrollReveal";
import MagneticButton from "./MagneticButton";

export default function FinalCTA() {
  const ref = useScrollReveal<HTMLElement>(".sa-reveal", { y: 24, stagger: 0.12 });

  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(110px, 18vw, 200px) 24px",
        background: "var(--bg-elevated)",
        borderTop: "1px solid var(--border)",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ position: "relative", zIndex: 1, maxWidth: 760, margin: "0 auto" }}>
        <p
          className="sa-reveal"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(24px, 5vw, 48px)",
            lineHeight: 1.2,
            color: "var(--text-primary)",
            margin: "0 0 36px",
            letterSpacing: "-0.02em",
          }}
        >
          Boards don&apos;t wait.{" "}
          <span style={{ color: "var(--brand-blue)" }}>Neither should your prep.</span>
        </p>
        <div className="sa-reveal">
          <MagneticButton
            href="/signup"
            className="btn-primary"
            style={{
              fontSize: 16,
              padding: "17px 40px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
            strength={0.4}
            ariaLabel="Start free"
          >
            Start Free →
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
