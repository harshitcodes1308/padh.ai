"use client";

import { useScrollReveal } from "./useScrollReveal";
import VerticalMarquee from "./VerticalMarquee";

interface Review {
  name: string;
  handle: string;
  body: string;
  subject: string;
  color: string;
}

const REVIEWS: Review[] = [
  { name: "Aarav S.", handle: "Class X · 92%", body: "Gaurav Sir explains in the exact way the question will be asked in boards. Nothing extra, nothing missing.", subject: "All subjects", color: "#2D81F7" },
  { name: "Diya M.", handle: "Class X · 88%", body: "I wasn't prepared and boards were coming. The AI Doubt Solver made me productive and I didn't waste a single day.", subject: "Smart Planner", color: "#2D81F7" },
  { name: "Kabir R.", handle: "Class X · 90%", body: "The Flip the Question tool gave me twisted questions which helped me tackle the same topics in a much harder way. That's what prepared me.", subject: "Flip the Question", color: "#F97316" },
  { name: "Ananya P.", handle: "Class X · 95%", body: "Helped me ace all my competency-based questions and MCQs. That section used to scare me.", subject: "Competency Test", color: "#08BD80" },
  { name: "Vivaan T.", handle: "Class X · 87%", body: "They cleared all my doubts. Ask what didn't they help with instead. The AI is incredibly accurate for CBSE.", subject: "AI Doubt Solver", color: "#2D81F7" },
  { name: "Sara K.", handle: "Class X · 91%", body: "The best part is the price with so many features. The only platform that thought about what students actually need.", subject: "Whole platform", color: "#8B5CF6" },
];

function ReviewCard({ r }: { r: Review }) {
  return (
    <div
      data-cursor="hover"
      style={{
        width: "100%",
        padding: "18px 20px",
        borderRadius: 12,
        background: "#FFFFFF",
        border: "1px solid var(--border)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `${r.color}14`,
            border: `1px solid ${r.color}30`,
            color: r.color,
            fontFamily: "var(--font-display)",
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          {r.name[0]}
        </div>
        <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
            {r.name}
          </span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--text-muted)" }}>
            {r.handle}
          </span>
        </div>
      </div>

      <p style={{ margin: "12px 0 12px", fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.6, color: "var(--text-secondary)" }}>
        {r.body}
      </p>

      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          color: r.color,
          background: `${r.color}10`,
          border: `1px solid ${r.color}25`,
          padding: "2px 7px",
          borderRadius: 5,
          fontWeight: 500,
        }}
      >
        #{r.subject.replace(/\s+/g, "")}
      </span>
    </div>
  );
}

export default function Testimonials() {
  const ref = useScrollReveal<HTMLElement>(".sa-reveal", { y: 30, stagger: 0.07 });

  const cards = REVIEWS.map((r) => <ReviewCard key={r.handle} r={r} />);

  return (
    <section ref={ref} style={{ padding: "clamp(80px, 12vw, 130px) 0 clamp(32px, 5vw, 56px)", position: "relative", overflow: "hidden", background: "var(--bg-surface)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 48, maxWidth: 720 }}>
          <div className="sa-eyebrow sa-reveal" style={{ marginBottom: 18 }}>Student reviews</div>
          <h2
            className="sa-reveal"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 5.5vw, 58px)",
              letterSpacing: "-0.03em",
              margin: 0,
              lineHeight: 1.05,
              fontWeight: 800,
              color: "var(--text-primary)",
            }}
          >
            What students actually said.
          </h2>
        </div>
      </div>

      {/* Marquee wall */}
      <div
        className="sa-reveal"
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(440px, 60vh, 600px)",
          marginBottom: 0,
          overflow: "hidden",
          perspective: "1400px",
        }}
      >
        <div
          className="sa-tmwall"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 14,
            width: "100%",
            height: "100%",
            padding: "0 clamp(16px, 4vw, 56px)",
            boxSizing: "border-box",
            transform: "rotateX(6deg) rotateZ(-1.5deg) scale(1.02)",
            transformOrigin: "center 40%",
          }}
        >
          <VerticalMarquee repeat={4} durationSec={46}>{cards}</VerticalMarquee>
          <VerticalMarquee reverse repeat={4} durationSec={52}>{cards}</VerticalMarquee>
          <VerticalMarquee repeat={4} durationSec={44}>{cards}</VerticalMarquee>
          <VerticalMarquee reverse repeat={4} durationSec={50} className="sa-hide-md">{cards}</VerticalMarquee>
          <VerticalMarquee repeat={4} durationSec={48} className="sa-hide-sm">{cards}</VerticalMarquee>
        </div>

        {/* edge fades */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(to bottom, var(--bg-surface), transparent 16%, transparent 84%, var(--bg-surface))" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(to right, var(--bg-surface), transparent 10%, transparent 90%, var(--bg-surface))" }} />
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .sa-tmwall { grid-template-columns: repeat(4, 1fr) !important; }
          .sa-tmwall .sa-hide-sm { display: none !important; }
        }
        @media (max-width: 820px) {
          .sa-tmwall { grid-template-columns: repeat(3, 1fr) !important; }
          .sa-tmwall .sa-hide-md { display: none !important; }
        }
        @media (max-width: 560px) {
          .sa-tmwall { grid-template-columns: repeat(2, 1fr) !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
