"use client";

import { useRef, useState, type CSSProperties } from "react";
import { motion, useReducedMotion } from "motion/react";
import MagneticButton from "./MagneticButton";
import { brandStats } from "../../config/brand-stats";

function ElegantShape({
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  color = "rgba(45, 129, 247, 0.14)",
  border = "rgba(45, 129, 247, 0.18)",
  style,
}: {
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  color?: string;
  border?: string;
  style: CSSProperties;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      initial={reducedMotion ? false : { opacity: 0, y: -72, rotate: rotate - 8 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 1.8,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      style={{
        position: "absolute",
        pointerEvents: "none",
        ...style,
      }}
    >
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, 12, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 999,
            background: `linear-gradient(90deg, ${color}, rgba(255,255,255,0))`,
            border: `1px solid ${border}`,
            boxShadow: "0 8px 28px rgba(45, 129, 247, 0.06)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.18 + index * 0.12,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

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
        padding: "140px 24px 76px",
        overflow: "hidden",
        background: "var(--bg-base)", // Pure base - adapts to dark mode
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--bg-base) 92%, transparent) 0%, color-mix(in srgb, var(--bg-base) 40%, transparent) 42%, var(--bg-base) 100%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <ElegantShape
          delay={0.16}
          width={620}
          height={118}
          rotate={10}
          color="rgba(45, 129, 247, 0.12)"
          border="rgba(45, 129, 247, 0.16)"
          style={{ left: "-14%", top: "18%" }}
        />
        <ElegantShape
          delay={0.28}
          width={520}
          height={104}
          rotate={-14}
          color="rgba(8, 189, 128, 0.12)"
          border="rgba(8, 189, 128, 0.15)"
          style={{ right: "-9%", top: "63%" }}
        />
        <ElegantShape
          delay={0.38}
          width={260}
          height={64}
          rotate={-8}
          color="rgba(45, 129, 247, 0.10)"
          border="rgba(45, 129, 247, 0.13)"
          style={{ left: "12%", bottom: "15%" }}
        />
        <ElegantShape
          delay={0.46}
          width={190}
          height={48}
          rotate={18}
          color="rgba(8, 189, 128, 0.10)"
          border="rgba(8, 189, 128, 0.13)"
          style={{ right: "18%", top: "15%" }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 760, width: "100%" }}>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 12px",
            borderRadius: 999,
            background: "var(--bg-base)",
            border: "1px solid var(--border)",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 26,
            boxShadow: "0 4px 14px rgba(45, 50, 54, 0.04)",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--brand-green)",
              display: "inline-block",
            }}
          />
          CBSE Class 10 board prep
        </motion.div>

        {/* Main headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: 76,
            lineHeight: 0.96,
            letterSpacing: 0,
            color: "var(--text-primary)",
            margin: "0 0 22px",
            textWrap: "balance",
          }}
        >
          PADH<span style={{ color: "var(--brand-blue)" }}>.AI</span>
        </motion.h1>

        {/* Sub line */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(17px, 2.2vw, 21px)",
            color: "var(--text-secondary)",
            margin: "0 auto 34px",
            maxWidth: 620,
            lineHeight: 1.62,
            textWrap: "pretty",
          }}
        >
          Board prep built around Gaurav Sir&apos;s topper playbook, focused AI tools, and the strategy behind {brandStats.boardScore10th} in 10th and {brandStats.boardScore12th} in 12th.
        </motion.p>

        {/* Inline Action */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            maxWidth: 520,
            margin: "0 auto 28px",
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
              height: 52,
              padding: "0 20px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              background: "var(--bg-base)",
              fontFamily: "var(--font-body)",
              fontSize: 16,
              outline: "none",
              color: "var(--text-primary)",
              boxShadow: "0 4px 16px rgba(45, 50, 54, 0.04)",
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
              padding: "0 32px", 
              textDecoration: "none", 
              whiteSpace: "nowrap",
              height: 52,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            ariaLabel="Start for free"
          >
            Start for free
          </MagneticButton>
        </motion.div>

        {/* YouTube Callout */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8 }}
        >
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
            Watch Gaurav Sir teach on YouTube
          </a>
        </motion.div>
      </div>
    </section>
  );
}
