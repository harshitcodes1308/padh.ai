"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-base)", padding: "80px 24px 40px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 64 }}>
        
        {/* Top: Multi-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>
          
          {/* Column 1: Logo & Tagline */}
          <div className="sa-footer-brand" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
              <img src="/logo_nobg.png" alt="PADH.AI Logo" style={{ height: 44, width: 'auto', objectFit: "contain" }} />
              <span style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                PADH<span style={{ color: "var(--brand-blue)" }}>.AI</span>
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.5, margin: 0, maxWidth: 300 }}>
              Your ultimate academic OS for CBSE success. Built by the topper, for the next toppers.
            </p>
          </div>

          {/* Column 2: Company */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h4 style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Link href="/pricing" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>Pricing</Link>
              <Link href="/policies/privacy-policy" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>Privacy Policy</Link>
              <Link href="/policies/terms-and-conditions" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>Terms & Conditions</Link>
            </div>
          </div>

          {/* Column 3: Help & Support */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h4 style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>Help & Support</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Link href="/policies/contact-us" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>Contact Us</Link>
              <Link href="/policies/refund-policy" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>Refund Policy</Link>
              <Link href="/policies/delivery-policy" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>Delivery Policy</Link>
            </div>
          </div>

          {/* Column 4: Popular Categories */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h4 style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>Popular Categories</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="#" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>CBSE Class 10</a>
              <a href="#" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>Math Notes</a>
              <a href="#" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>Science Notes</a>
              <a href="#" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>Previous Year Papers</a>
            </div>
          </div>
        </div>

        {/* Bottom: Socials and Copyright */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} PADH.AI. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <a 
              href="https://youtube.com/@GauravSuthar" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube"
              style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#FF0000"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.58 6.4c-.23-.86-.91-1.54-1.77-1.77C18.25 4.2 12 4.2 12 4.2s-6.25 0-7.81.43c-.86.23-1.54.91-1.77 1.77C2 7.97 2 12 2 12s0 4.03.42 5.6c.23.86.91 1.54 1.77 1.77 1.56.43 7.81.43 7.81.43s6.25 0 7.81-.43c.86-.23 1.54-.91 1.77-1.77.42-1.57.42-5.6.42-5.6s0-4.03-.42-5.6zM9.75 15.02v-7.62l6.75 3.81-6.75 3.81z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
