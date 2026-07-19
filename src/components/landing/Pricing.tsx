"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useScrollReveal } from "./useScrollReveal";
import MagneticButton from "./MagneticButton";

interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  href: string;
  originalPrice?: string;
}

const PLANS: Plan[] = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    href: "/signup",
    features: ["Dashboard", "Smart Planner", "Monthly Mission", "Video Lectures", "Study Flow", "Subjects", "Webinar"],
  },
  {
    name: "Yearly",
    price: "₹599",
    originalPrice: "₹999",
    period: "/year",
    popular: true,
    href: "/signup",
    features: ["Everything in Free", "AI Doubt Solver", "Competency Test", "Customise Test", "Flip the Question", "Focus Mode", "Numerical Mastery", "ChronoScroll", "Date Battle Arena", "Priority support", "Best value for boards"],
  },
  {
    name: "Monthly",
    price: "₹199",
    originalPrice: "₹349",
    period: "/month",
    href: "/signup",
    features: ["Everything in Free", "AI Doubt Solver", "Competency Test", "Customise Test", "Flip the Question", "Focus Mode", "Numerical Mastery", "ChronoScroll", "Date Battle Arena"],
  },
];

function PriceCard({
  plan,
  index,
  progress,
  fan,
}: {
  plan: Plan;
  index: number;
  progress: MotionValue<number>;
  fan: boolean;
}) {
  const isLeft = index === 0;
  const isRight = index === 2;
  const isCenter = index === 1;

  const x = useTransform(progress, [0, 1], [0, isLeft ? 28 : isRight ? -28 : 0]);
  const y = useTransform(progress, [0, 1], [44, isCenter ? -24 : 0]);
  const scale = useTransform(progress, [0, 1], [0.95, isCenter ? 1.05 : 0.93]);
  const rotateY = useTransform(progress, [0, 1], [0, isLeft ? 11 : isRight ? -11 : 0]);
  const opacity = useTransform(progress, [0, 0.35], [0, 1]);

  const motionStyle = fan
    ? { x, y, scale, rotateY, opacity, transformOrigin: isLeft ? "right center" : isRight ? "left center" : "center", zIndex: isCenter ? 2 : 1 }
    : { opacity };

  return (
    <motion.div
      style={{
        ...motionStyle,
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        borderRadius: "var(--radius-lg)",
        background: "var(--bg-base)",
        border: plan.popular ? "2px solid var(--brand-blue)" : "1px solid var(--border)",
        boxShadow: plan.popular
          ? "0 8px 32px rgba(45, 129, 247, 0.12)"
          : "0 2px 8px rgba(0, 0, 0, 0.04)",
        willChange: "transform",
      }}
    >
      {plan.popular && (
        <span
          className="chip-gold"
          style={{
            position: "absolute",
            top: -12,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 10,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Best value
        </span>
      )}

      <div style={{ fontFamily: "var(--font-body)", fontSize: 12, letterSpacing: "0.10em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 12, fontWeight: 600 }}>
        {plan.name}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 5, marginBottom: 22, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 44, color: "var(--text-primary)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em" }}>
          {plan.price}
        </span>
        {plan.originalPrice && (
          <span style={{ fontFamily: "var(--font-body)", fontSize: 24, color: "var(--brand-green)", fontWeight: 700, textDecoration: "line-through", marginLeft: 4 }}>
            {plan.originalPrice}
          </span>
        )}
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}>{plan.period}</span>
      </div>

      <div style={{ borderTop: "1px solid var(--border)", margin: "0 0 18px" }} />

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        {plan.features.map((f) => (
          <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)", fontWeight: 400 }}>
            <span style={{ color: "var(--brand-green)", flexShrink: 0, marginTop: 1, fontWeight: 700 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <MagneticButton
        href={plan.href}
        className={plan.popular ? "btn-primary" : "btn-ghost"}
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: 14,
          padding: "12px 24px",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        ariaLabel={`Choose ${plan.name}`}
      >
        {plan.name === "Free" ? "Start Free" : `Get ${plan.name}`} →
      </MagneticButton>
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useScrollReveal<HTMLElement>(".sa-reveal", { y: 36, stagger: 0.1 });
  const gridRef = useRef<HTMLDivElement>(null);
  const [fan, setFan] = useState(false);

  useEffect(() => {
    const check = () =>
      setFan(
        window.matchMedia("(min-width: 820px)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "center center"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 64, damping: 22, mass: 0.5 });

  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(80px, 12vw, 140px) 24px",
        position: "relative",
        zIndex: 1,
        background: "var(--bg-surface)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 56, maxWidth: 720 }}>
          <div className="sa-eyebrow sa-reveal" style={{ marginBottom: 18 }}>The plans</div>
          <h2
            className="sa-reveal"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 5.5vw, 58px)",
              letterSpacing: "-0.03em",
              margin: "0 0 14px",
              lineHeight: 1.05,
              fontWeight: 800,
              color: "var(--text-primary)",
            }}
          >
            Proven.{" "}
            <span style={{ color: "var(--brand-blue)" }}>Affordable.</span>
          </h2>
          <p
            className="sa-reveal"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 2.2vw, 19px)",
              color: "var(--text-secondary)",
              margin: 0,
              fontWeight: 400,
            }}
          >
            Start free. Upgrade when you&apos;re ready to go all in.
          </p>
        </div>

        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: 18,
            alignItems: "start",
            perspective: 1200,
          }}
        >
          {PLANS.map((plan, i) => (
            <PriceCard key={plan.name} plan={plan} index={i} progress={progress} fan={fan} />
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 36, fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-muted)", opacity: 0.7, fontWeight: 400 }}>
          Secure payment via Razorpay. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
