"use client";

export default function AppDownloadStrip() {
  return (
    <section style={{ padding: "48px 24px", background: "#FFFFFF", borderTop: "1px solid var(--border)" }}>
      <div
        className="sa-app-download"
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        <div style={{ maxWidth: 460, textAlign: "left" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.01em", margin: "0 0 8px" }}>
            Download the PADH.AI app
          </h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-secondary)", margin: 0 }}>
            Study anywhere, anytime. App coming soon to iOS and Android.
          </p>
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {/* Placeholder App Store Buttons */}
          <div style={{ width: 140, height: 44, background: "var(--bg-surface)", borderRadius: 8, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontSize: 12, fontWeight: 600 }}>
            App Store
          </div>
          <div style={{ width: 140, height: 44, background: "var(--bg-surface)", borderRadius: 8, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontSize: 12, fontWeight: 600 }}>
            Google Play
          </div>
        </div>
      </div>
    </section>
  );
}
