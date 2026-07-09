"use client";

import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";
import { useTheme } from "@/components/providers/theme-provider";
import { Sun, Moon } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    setAnimKey((k) => k + 1); // bump key → forces icon re-mount → replays CSS animation
    toggleTheme(e);
  };

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
          aria-label="PADH.AI home"
          style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}
        >
          <img src="/logo.png" alt="PADH.AI Logo" style={{ height: 70, width: 'auto' }} />
        </a>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* Theme Toggle */}
          <button
            onClick={handleToggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 38,
              height: 38,
              borderRadius: "50%",
              border: "1px solid var(--border)",
              background: "var(--bg-surface)",
              color: "var(--text-primary)",
              cursor: "pointer",
              transition: "background 0.2s ease, border-color 0.2s ease, transform 0.15s ease",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--brand-blue)";
              e.currentTarget.style.background = "var(--bg-elevated)";
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.background = "var(--bg-surface)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {/* key forces re-mount → CSS spin animation replays on every toggle */}
            {theme === "dark" ? (
              <Sun key={`sun-${animKey}`} size={17} strokeWidth={2} className="theme-toggle-icon" />
            ) : (
              <Moon key={`moon-${animKey}`} size={17} strokeWidth={2} className="theme-toggle-icon" />
            )}
          </button>

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
              borderRadius: "100px",
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
