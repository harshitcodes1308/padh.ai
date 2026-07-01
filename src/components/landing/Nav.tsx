"use client";

import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sa-nav ${scrolled ? "scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "12px 24px" : "20px 24px",
          transition: "padding 0.3s ease",
        }}
      >
        {/* Wordmark */}
        <a
          href="#top"
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
        >
          {/* Logo mark — blue square with P */}
          <div style={{
            width: 28,
            height: 28,
            borderRadius: 7,
            background: "var(--brand-blue)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <span style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 15,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}>P</span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 16,
              letterSpacing: "-0.01em",
              color: "var(--text-primary)",
              fontWeight: 700,
            }}
          >
            PADH.AI
          </span>
        </a>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <a
            href="/login"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              color: "var(--text-secondary)",
              textDecoration: "none",
              letterSpacing: "0.01em",
              fontWeight: 500,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-blue)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Log in
          </a>
          <MagneticButton
            href="/signup"
            className="btn-primary"
            style={{
              fontSize: 14,
              padding: "10px 24px",
              borderRadius: "100px", /* Pill shape */
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
            strength={0.25}
            ariaLabel="Join for free"
          >
            Join for free
          </MagneticButton>
        </div>
      </div>
    </nav>
  );
}
