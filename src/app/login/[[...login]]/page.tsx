"use client";

import { useRef, useEffect } from "react";
import { useResponsive } from "@/hooks/useResponsive";
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  const { isMobile } = useResponsive();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div
      data-theme="light"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        background: "#FFFFFF",
        colorScheme: "light",
      }}
    >

      {/* ── LEFT VIDEO PANEL ── */}
      {!isMobile && (
          <div style={{
            width: "55%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            background: "linear-gradient(160deg, #FFFFFF 0%, #F0F4F7 50%, #DFEAF5 100%)",
            borderRight: "1px solid #DFE8F4",
          }}>
          <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 420, padding: "0 48px" }}>
            <div style={{ marginBottom: 20, display: "flex", justifyContent: "center", alignItems: "center", gap: 14 }}>
              <img
                src="/logo_nobg.png"
                alt="Padh.ai Logo"
                style={{ width: 48, height: 48, objectFit: "contain" }}
              />
              <span style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                PADH<span style={{ color: "var(--brand-blue)" }}>.AI</span>
              </span>
            </div>
            <div style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              fontWeight: 900,
              letterSpacing: "0.25em",
              background: "linear-gradient(135deg, var(--brand-blue), var(--brand-green))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textTransform: "uppercase",
              marginBottom: 32,
              display: "inline-block",
            }}>
              PADH.AI
            </div>
            <div style={{
              fontFamily: "var(--font-tagline)",
              fontSize: 28,
              letterSpacing: "-0.01em",
              lineHeight: 1.35,
              color: "var(--text-primary)",
              fontWeight: 600,
              fontStyle: "italic",
            }}>
              "Every great board result starts with one decision."
            </div>
          </div>
        </div>
      )}

      {/* ── RIGHT FORM PANEL ── */}
      <div style={{
        width: isMobile ? "100%" : "45%",
        minHeight: "100vh",
        background: "#FFFFFF",
        borderLeft: isMobile ? "none" : "1px solid #DFE8F4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: isMobile ? "40px 24px" : "60px 52px",
        overflowY: "auto",
        position: "relative",
        zIndex: 2,
      }}>

        {/* Mobile logo */}
        {isMobile && (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, marginBottom: 36 }}>
            <img
              src="/logo_nobg.png"
              alt="Padh.ai Logo"
              style={{ width: 36, height: 36, objectFit: "contain" }}
            />
            <span style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              PADH<span style={{ color: "var(--brand-blue)" }}>.AI</span>
            </span>
          </div>
        )}

        <div style={{ maxWidth: 380, width: "100%", margin: "0 auto", display: "flex", justifyContent: "center" }}>
          <SignIn path="/login" routing="path" signUpUrl="/signup" forceRedirectUrl="/dashboard" />
        </div>
      </div>
    </div>
  );
}
