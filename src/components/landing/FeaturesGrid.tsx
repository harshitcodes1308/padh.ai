"use client";

import { useEffect, useRef } from "react";
import {
  Bot,
  CalendarCheck,
  FileQuestion,
  Focus,
  NotebookTabs,
  TimerReset,
} from "lucide-react";
import { gsap, prefersReducedMotion } from "./useScrollReveal";

const FEATURES = [
  {
    title: "AI Doubt Solver",
    desc: "Snap a photo of your doubt. Get a step-by-step explanation tailored to the CBSE syllabus in seconds.",
    icon: Bot,
  },
  {
    title: "Smart Study Planner",
    desc: "A personalized schedule that adapts to your pace, ensuring you cover every chapter before the boards.",
    icon: CalendarCheck,
  },
  {
    title: "Previous Year Questions",
    desc: "Practice with actual CBSE board questions from the last 10 years, categorized by topic and difficulty.",
    icon: FileQuestion,
  },
  {
    title: "Focus Mode",
    desc: "Run timed study sessions with breaks, task intent, and completion tracking so revision stays deliberate.",
    icon: Focus,
  },
  {
    title: "Notes & Flashcards",
    desc: "Turn messy class notes into cleaner revision material and quick flashcards for last-mile recall.",
    icon: NotebookTabs,
  },
  {
    title: "Exam Timer Practice",
    desc: "Practice under board-style time pressure, mark tricky questions, and review where time actually went.",
    icon: TimerReset,
  }
];

export default function FeaturesTrio() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !gridRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current!.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "120px 24px", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ maxWidth: 760, margin: "0 auto 44px", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 5vw, 44px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
              lineHeight: 1.12,
              margin: 0,
            }}
          >
            The Toolkit
          </h2>
        </div>
        
        <div 
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
          }}
        >
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon;
            return (
            <div
              key={i}
              className="sa-bento"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 18,
                minHeight: 230,
                padding: 24,
                background: "var(--bg-surface)",
              }}
            >
              <div 
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "rgba(8, 189, 128, 0.08)",
                  color: "var(--brand-green)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon size={25} strokeWidth={1.9} aria-hidden="true" />
              </div>
              <div>
                <h3 
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                    marginBottom: 10
                  }}
                >
                  {feat.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {feat.desc}
                </p>
              </div>
            </div>
          )})}
        </div>

      </div>
    </section>
  );
}
