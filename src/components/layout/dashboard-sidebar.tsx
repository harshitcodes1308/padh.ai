"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FEATURE_FLAGS } from "@/lib/featureFlags";
import { isLockedRoute, getFeatureInfo } from "@/lib/tier-config";
import { UpgradePrompt } from "@/components/UpgradePrompt";

const ROUTE_FLAG_MAP: Partial<Record<string, keyof typeof FEATURE_FLAGS>> = {
  "/dashboard/study-flow": "studyFlow",
  "/dashboard/webinar": "webinar",
  "/dashboard/video-lectures": "videoLectures",
  "/dashboard/ai-assistant": "aiDoubtSolver",
  "/dashboard/planner": "smartPlanner",
  "/dashboard/tests": "customiseTest",
  "/dashboard/precision-practice": "competencyTest",
  "/dashboard/flip-the-question": "flipTheQuestion",
  "/dashboard/focus": "focusMode",
  "/dashboard/numerical-mastery": "numericalMastery",
  "/dashboard/guess-papers": "guessPapers",
  "/dashboard/strategy": "strategyAI",
  "/dashboard/last-night-before": "lastNightBefore",
  "/dashboard/chronoscroll": "chronoScroll",
  "/dashboard/date-battle": "dateBattleArena",
  "/dashboard/notes": "notesFlashcards",
};

function isVisible(href: string): boolean {
  const flag = ROUTE_FLAG_MAP[href];
  if (!flag) return true;
  return FEATURE_FLAGS[flag] === true;
}

// PADH.AI logo mark — clean blue square with P
const PadhLogo = ({ size = 28 }: { size?: number }) => (
  <div style={{
    width: size,
    height: size,
    borderRadius: Math.round(size * 0.25),
    background: "var(--brand-blue)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  }}>
    <span style={{
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: Math.round(size * 0.55),
      color: "#FFFFFF",
      lineHeight: 1,
      letterSpacing: "-0.02em",
    }}>P</span>
  </div>
);

type NavItem = { icon: string; label: string; href: string };
type NavGroup = { label: string; items: NavItem[] };

const ACCOUNT_GROUP: NavGroup = {
  label: "ACCOUNT",
  items: [
    { icon: "○", label: "Profile",  href: "/dashboard/profile" },
    { icon: "○", label: "Policies", href: "/dashboard/policies" },
  ],
};

// ── Free users ──────────────────────────────────────────────────────────────
const FREE_NAV_GROUPS: NavGroup[] = [
  {
    label: "HOME",
    items: [{ icon: "⊞", label: "Dashboard", href: "/dashboard" }],
  },
  {
    label: "FREE",
    items: [
      { icon: "◎", label: "Smart Planner",    href: "/dashboard/planner" },
      { icon: "○", label: "Monthly Mission",  href: "/dashboard/todo" },
      { icon: "▶", label: "Study Flow",       href: "/dashboard/study-flow" },
      { icon: "▷", label: "Video Lectures",   href: "/dashboard/video-lectures" },
      { icon: "◈", label: "Live Webinar",     href: "/dashboard/webinar" },
    ],
  },
  {
    label: "STUDY",
    items: [
      { icon: "◈", label: "AI Doubt Solver",   href: "/dashboard/ai-assistant" },
      { icon: "◎", label: "ChronoScroll",      href: "/dashboard/chronoscroll" },
      { icon: "◈", label: "Numerical Mastery", href: "/dashboard/numerical-mastery" },
      { icon: "◉", label: "Focus Mode",        href: "/dashboard/focus" },
    ],
  },
  {
    label: "PRACTICE",
    items: [
      { icon: "◉", label: "Competency Test",   href: "/dashboard/precision-practice" },
      { icon: "◈", label: "Customise Test",    href: "/dashboard/tests" },
      { icon: "⇌", label: "Flip the Question", href: "/dashboard/flip-the-question" },
      { icon: "◉", label: "Date Battle Arena", href: "/dashboard/date-battle" },
    ],
  },
  ACCOUNT_GROUP,
];

// ── Paid users ──────────────────────────────────────────────────────────────
const PAID_NAV_GROUPS: NavGroup[] = [
  {
    label: "HOME",
    items: [{ icon: "⊞", label: "Dashboard", href: "/dashboard" }],
  },
  {
    label: "PLAN",
    items: [
      { icon: "◎", label: "Smart Planner",   href: "/dashboard/planner" },
      { icon: "○", label: "Monthly Mission", href: "/dashboard/todo" },
      { icon: "◈", label: "Live Webinar",    href: "/dashboard/webinar" },
    ],
  },
  {
    label: "STUDY",
    items: [
      { icon: "▶", label: "Study Flow",        href: "/dashboard/study-flow" },
      { icon: "▷", label: "Video Lectures",    href: "/dashboard/video-lectures" },
      { icon: "◈", label: "AI Doubt Solver",   href: "/dashboard/ai-assistant" },
      { icon: "◎", label: "ChronoScroll",      href: "/dashboard/chronoscroll" },
      { icon: "◈", label: "Numerical Mastery", href: "/dashboard/numerical-mastery" },
      { icon: "◉", label: "Focus Mode",        href: "/dashboard/focus" },
    ],
  },
  {
    label: "PRACTICE",
    items: [
      { icon: "◉", label: "Competency Test",   href: "/dashboard/precision-practice" },
      { icon: "◈", label: "Customise Test",    href: "/dashboard/tests" },
      { icon: "⇌", label: "Flip the Question", href: "/dashboard/flip-the-question" },
      { icon: "◉", label: "Date Battle Arena", href: "/dashboard/date-battle" },
    ],
  },
  ACCOUNT_GROUP,
];

// Mobile bottom tab bar items
const MOBILE_TABS = [
  { icon: "⊞", label: "Home", href: "/dashboard" },
  { icon: "◈", label: "Study", href: "/dashboard/ai-assistant" },
  { icon: "◉", label: "Practice", href: "/dashboard/precision-practice" },
  { icon: "◎", label: "Focus", href: "/dashboard/focus" },
  { icon: "○", label: "Account", href: "/dashboard/profile" },
];

export default function DashboardSidebar({
  userName,
  userEmail,
  isPaid = true,
  planType = "FREE",
}: {
  userName?: string;
  userEmail?: string;
  isPaid?: boolean;
  planType?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [upgradeFeature, setUpgradeFeature] = useState<{ name: string; description: string } | null>(null);

  const initials = userName
    ? userName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "U";

  const planLabel =
    planType === "MONTHLY" ? "Monthly Plan" :
    planType === "YEARLY" ? "Yearly Plan" :
    isPaid ? "Pro Plan" :
    "Free Plan";

  const handleNavigation = (href: string) => {
    if (!isPaid && isLockedRoute(href)) {
      const info = getFeatureInfo(href);
      if (info) {
        setUpgradeFeature(info);
        setIsOpen(false);
        return;
      }
    }
    setIsOpen(false);
    router.push(href);
  };

  // IMPORTANT: JSX variable, not a component — prevents remount on re-render
  const sidebarJSX = (
    <aside style={{
      width: 240,
      height: "100vh",
      background: "#FFFFFF",
      borderRight: "1px solid var(--border)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}>
      {/* Scoped CSS for hover effects */}
      <style>{`
        .sb-nav-item { transition: all 0.15s ease; }
        .sb-nav-item:hover:not(.sb-nav-active) {
          background: rgba(0,0,0,0.03) !important;
          color: var(--text-primary) !important;
        }
      `}</style>

      {/* Logo */}
      <div style={{
        padding: "18px 20px 14px",
        borderBottom: "1px solid var(--border)",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}>
        <PadhLogo size={28} />
        <div>
          <div style={{
            fontFamily: "var(--font-display)",
            fontSize: 15,
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
          }}>
            PADH.AI
          </div>
          <div style={{
            fontFamily: "var(--font-body)",
            fontSize: 9,
            fontWeight: 500,
            color: "var(--text-muted)",
            marginTop: 2,
            letterSpacing: "0.04em",
          }}>
            CBSE Board Prep
          </div>
        </div>
      </div>

      {/* User section */}
      <div style={{
        padding: "10px 12px",
        margin: "10px 10px 0",
        borderRadius: 10,
        background: "var(--bg-surface)",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        gap: 10,
        flexShrink: 0,
      }}>
        <div style={{
          width: 34, height: 34, minWidth: 34,
          borderRadius: 8,
          background: "rgba(45, 129, 247, 0.10)",
          border: "1px solid rgba(45, 129, 247, 0.20)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-body)",
          fontSize: 12, fontWeight: 700,
          color: "var(--brand-blue)",
          flexShrink: 0,
        }}>
          {initials}
        </div>
        <div style={{ flex: 1, overflow: "hidden" }}>
          <div style={{
            fontFamily: "var(--font-body)",
            fontSize: 13, fontWeight: 600,
            color: "var(--text-primary)",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            letterSpacing: "-0.01em",
          }}>
            {userName || "Student"}
          </div>
          <div style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            color: "var(--text-muted)",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {userEmail || ""}
          </div>
        </div>
        {/* Online dot */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "#22c55e",
          }} />
          <div style={{
            position: "absolute", inset: -3,
            borderRadius: "50%",
            background: "rgba(34,197,94,0.20)",
            animation: "pulse 2s ease-in-out infinite",
          }} />
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "8px 10px 12px" }}>
        {(isPaid ? PAID_NAV_GROUPS : FREE_NAV_GROUPS).map((group) => {
          const visibleItems = group.items.filter(item => isVisible(item.href));
          if (visibleItems.length === 0) return null;
          return (
            <div key={group.label} style={{ marginBottom: 4 }}>
              <div style={{
                padding: "10px 10px 4px",
                fontFamily: "var(--font-body)",
                fontSize: 9, fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                opacity: 0.6,
              }}>
                {group.label}
              </div>
              {visibleItems.map((item) => {
                const isActive = pathname === item.href ||
                  (item.href !== "/dashboard" && item.href.split("?")[0] !== "/dashboard" && pathname.startsWith(item.href.split("?")[0]));
                return (
                  <button
                    key={item.href}
                    className={`sb-nav-item${isActive ? " sb-nav-active" : ""}`}
                    onClick={() => handleNavigation(item.href)}
                    style={{
                      display: "flex", alignItems: "center", gap: 9,
                      width: "100%",
                      padding: "8px 10px",
                      marginBottom: 1,
                      borderRadius: 8,
                      background: isActive ? "rgba(45, 129, 247, 0.08)" : "transparent",
                      color: isActive ? "var(--brand-blue)" : "var(--text-secondary)",
                      border: "none",
                      borderLeft: isActive ? "2px solid var(--brand-blue)" : "2px solid transparent",
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      fontWeight: isActive ? 600 : 400,
                      letterSpacing: "-0.01em",
                      paddingLeft: isActive ? 8 : 10,
                    }}
                  >
                    <span style={{
                      fontSize: 13,
                      color: isActive ? "var(--brand-blue)" : "var(--text-muted)",
                      minWidth: 16,
                      textAlign: "center",
                      opacity: isActive ? 1 : 0.55,
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </span>
                    <span style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {item.label}
                    </span>
                    {!isPaid && isLockedRoute(item.href) && (
                      <span style={{ fontSize: 10, opacity: 0.35, flexShrink: 0 }}>⌁</span>
                    )}
                  </button>
                );
              })}
            </div>
          );
        })}
      </nav>

      {/* Bottom plan badge */}
      <div style={{
        padding: "12px 14px",
        borderTop: "1px solid var(--border)",
        flexShrink: 0,
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 12px",
          borderRadius: 8,
          background: isPaid
            ? "rgba(45, 129, 247, 0.06)"
            : "var(--bg-surface)",
          border: isPaid
            ? "1px solid rgba(45, 129, 247, 0.18)"
            : "1px solid var(--border)",
        }}>
          <div>
            <div style={{
              fontFamily: "var(--font-body)",
              fontSize: 11, fontWeight: 600,
              color: isPaid ? "var(--brand-blue)" : "var(--text-muted)",
              letterSpacing: "0.02em",
            }}>
              {planLabel}
            </div>
            {!isPaid && (
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: 10,
                color: "var(--text-muted)",
                marginTop: 1,
              }}>
                Upgrade for full access
              </div>
            )}
          </div>
          {isPaid ? (
            <span style={{ fontSize: 14, color: "var(--brand-blue)" }}>◈</span>
          ) : (
            <button
              onClick={() => router.push("/dashboard/profile")}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 10, fontWeight: 600,
                color: "#FFFFFF",
                background: "var(--brand-blue)",
                border: "none",
                borderRadius: 6,
                padding: "4px 10px",
                cursor: "pointer",
                letterSpacing: "0.02em",
              }}
            >
              Upgrade
            </button>
          )}
        </div>
        {/* PADH.AI tagline */}
        <div style={{
          fontFamily: "var(--font-body)",
          fontSize: 9,
          fontWeight: 400,
          color: "var(--text-muted)",
          textAlign: "center",
          marginTop: 10,
          letterSpacing: "0.03em",
          opacity: 0.6,
        }}>
          PADH.AI · CBSE Board Prep by Gaurav Suthar
        </div>
      </div>
    </aside>
  );

  return (
    <>
      {/* ── DESKTOP SIDEBAR ── */}
      <div
        className="desktop-only"
        style={{
          position: "fixed",
          top: 0, left: 0,
          height: "100vh",
          zIndex: 150,
        }}
      >
        {sidebarJSX}
      </div>

      {/* ── MOBILE HAMBURGER ── */}
      <button
        className="mobile-only"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          top: 14, left: 14, zIndex: 200,
          width: 42, height: 42,
          background: isOpen ? "var(--brand-blue)" : "#FFFFFF",
          border: `1px solid ${isOpen ? "var(--brand-blue)" : "var(--border)"}`,
          borderRadius: 10,
          display: "flex",
          alignItems: "center", justifyContent: "center",
          cursor: "pointer",
          color: isOpen ? "#FFFFFF" : "var(--text-primary)",
          fontSize: 16,
          transition: "all 0.2s ease",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* ── MOBILE OVERLAY ── */}
      {isOpen && (
        <div
          className="mobile-only"
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.40)",
            zIndex: 140,
          }}
        />
      )}

      {/* ── MOBILE DRAWER ── */}
      <div
        className="mobile-only"
        style={{
          position: "fixed",
          top: 0, left: 0,
          height: "100vh",
          zIndex: 150,
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {sidebarJSX}
      </div>

      {/* ── MOBILE BOTTOM TAB BAR ── */}
      <nav
        className="mobile-only"
        style={{
          position: "fixed",
          bottom: 0, left: 0, right: 0,
          height: 64,
          background: "rgba(255, 255, 255, 0.96)",
          borderTop: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          zIndex: 130,
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        {MOBILE_TABS.map((tab) => {
          const isActive = pathname === tab.href ||
            (tab.href !== "/dashboard" && pathname.startsWith(tab.href));
          return (
            <button
              key={tab.href}
              onClick={() => handleNavigation(tab.href)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                padding: "8px 12px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: isActive ? "var(--brand-blue)" : "var(--text-muted)",
                transition: "color 0.15s ease",
                position: "relative",
              }}
            >
              <span style={{ fontSize: 18, lineHeight: 1 }}>{tab.icon}</span>
              <span style={{
                fontFamily: "var(--font-body)",
                fontSize: 9,
                fontWeight: isActive ? 600 : 400,
                letterSpacing: "0.04em",
              }}>
                {tab.label}
              </span>
              {isActive && (
                <div style={{
                  position: "absolute",
                  bottom: -1,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 4, height: 4,
                  borderRadius: "50%",
                  background: "var(--brand-blue)",
                }} />
              )}
            </button>
          );
        })}
      </nav>

      {upgradeFeature && (
        <UpgradePrompt
          featureName={upgradeFeature.name}
          description={upgradeFeature.description}
          onClose={() => setUpgradeFeature(null)}
        />
      )}
    </>
  );
}
