"use client";

import { Award, BookOpen } from "lucide-react";
import { brandStats } from "../../config/brand-stats";

export default function StatStrip() {
  const stats = [
    {
      value: brandStats.boardScore10th,
      label: "in 10th CBSE Boards",
      icon: Award
    },
    {
      value: brandStats.boardScore12th,
      label: "in 12th CBSE Boards",
      icon: BookOpen
    }
  ];

  const visibleStats = stats.filter(stat => stat.value !== null);

  if (visibleStats.length === 0) return null;

  return (
    <section
      style={{
        padding: "64px 24px",
        background: "var(--bg-surface)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 40,
        }}
      >
        {visibleStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div style={{ color: "var(--brand-blue)" }}>
              <Icon size={30} strokeWidth={1.9} aria-hidden="true" />
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 700,
                color: "var(--text-primary)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--text-secondary)",
              }}
            >
              {stat.label}
            </div>
          </div>
        )})}
      </div>
    </section>
  );
}
