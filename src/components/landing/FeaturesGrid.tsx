"use client";

import { useEffect, useRef } from "react";
import {
  Bot,
  BrainCircuit,
  CalendarCheck,
  CalendarDays,
  Calculator,
  ClipboardList,
  Clock3,
  FileQuestion,
  Flame,
  Focus,
  NotebookTabs,
  PlayCircle,
  Radio,
  Repeat2,
  Route,
  SlidersHorizontal,
  Swords,
  Target,
  TimerReset,
  Video,
} from "lucide-react";
import { gsap, prefersReducedMotion } from "./useScrollReveal";

const FEATURES = [
  {
    eyebrow: "AI companion",
    title: "AI Doubt Solver",
    desc: "Ask or snap a doubt and get a clean step-by-step explanation mapped to your syllabus.",
    icon: Bot,
    tone: "blue",
    size: "tall",
  },
  {
    eyebrow: "Learning path",
    title: "Study Flow",
    desc: "Watch, revise, and practice each chapter through a guided sequence built for board prep.",
    icon: Route,
    tone: "green",
    size: "wide",
  },
  {
    eyebrow: "Daily planning",
    title: "Smart Study Planner",
    desc: "A personal plan that adapts to your pace, pending chapters, and exam deadline.",
    icon: CalendarCheck,
    tone: "green",
    size: "normal",
  },
  {
    eyebrow: "Video library",
    title: "Video Lectures",
    desc: "Jump into focused lessons and revision videos without searching across platforms.",
    icon: Video,
    tone: "blue",
    size: "normal",
  },
  {
    eyebrow: "Live support",
    title: "Live Webinar",
    desc: "Join scheduled revision and strategy sessions when the class needs a final push.",
    icon: Radio,
    tone: "green",
    size: "normal",
  },
  {
    eyebrow: "PYQ practice",
    title: "Previous Year Questions",
    desc: "Practice actual CBSE questions from past years, organized by topic and difficulty.",
    icon: FileQuestion,
    tone: "blue",
    size: "wide",
  },
  {
    eyebrow: "Deep work",
    title: "Focus Mode",
    desc: "Run timed study blocks with breaks, task intent, and completion tracking.",
    icon: Focus,
    tone: "green",
    size: "normal",
  },
  {
    title: "Notes & Flashcards",
    eyebrow: "Revision vault",
    desc: "Turn messy notes into cleaner revision material and quick flashcards for last-mile recall.",
    icon: NotebookTabs,
    tone: "blue",
    size: "normal",
  },
  {
    eyebrow: "Monthly target",
    title: "Monthly Mission",
    desc: "Break the syllabus into visible milestones so you know exactly what needs attention.",
    icon: CalendarDays,
    tone: "green",
    size: "normal",
  },
  {
    eyebrow: "Timed tests",
    title: "Competency Test",
    desc: "PYQ-based timed practice that shows which concepts are actually exam-ready.",
    icon: Target,
    tone: "blue",
    size: "normal",
  },
  {
    eyebrow: "Build your test",
    title: "Customise Test",
    desc: "Create your own MCQ set by subject, chapter, and difficulty for targeted revision.",
    icon: SlidersHorizontal,
    tone: "green",
    size: "normal",
  },
  {
    eyebrow: "Reverse practice",
    title: "Flip the Question",
    desc: "Start from the answer and reverse-engineer the thinking behind the question.",
    icon: Repeat2,
    tone: "blue",
    size: "normal",
  },
  {
    eyebrow: "History sprint",
    title: "ChronoScroll",
    desc: "Revise timelines and events in a scrollable, memory-first study format.",
    icon: Clock3,
    tone: "green",
    size: "normal",
  },
  {
    eyebrow: "Math drills",
    title: "Numerical Mastery",
    desc: "Practice calculations and formulas until the steps become automatic.",
    icon: Calculator,
    tone: "blue",
    size: "normal",
  },
  {
    eyebrow: "Competitive mode",
    title: "Date Battle Arena",
    desc: "Turn memorization into quick-fire practice for dates, facts, and recall speed.",
    icon: Swords,
    tone: "green",
    size: "normal",
  },
  {
    eyebrow: "Final stretch",
    title: "Last Night Before",
    desc: "A compact revision mode for formulas, definitions, and the highest-impact topics.",
    icon: Flame,
    tone: "blue",
    size: "wide",
  },
  {
    eyebrow: "Exam timing",
    title: "Exam Timer Practice",
    desc: "Practice under board-style time pressure and review where your time actually went.",
    icon: TimerReset,
    tone: "green",
    size: "normal",
  },
  {
    eyebrow: "Board strategy",
    title: "Strategy AI",
    desc: "Get practical exam plans, priority chapters, and a calmer way to approach the paper.",
    icon: BrainCircuit,
    tone: "blue",
    size: "normal",
  },
  {
    eyebrow: "Paper sets",
    title: "Guess Papers",
    desc: "Work through likely paper patterns and complete sets before the real exam day.",
    icon: ClipboardList,
    tone: "green",
    size: "normal",
  },
  {
    eyebrow: "Lessons",
    title: "One-Shot Revision",
    desc: "Use focused chapter runs when you need clarity fast and time is tight.",
    icon: PlayCircle,
    tone: "blue",
    size: "normal",
  }
];

export default function FeaturesTrio() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="sa-toolkit-section">
      <div className="sa-toolkit-inner">
        <div className="sa-toolkit-header">
          <div>
            <span className="sa-toolkit-kicker">Toolkit</span>
            <h2>The Board-Prep system inside PADH.AI</h2>
          </div>
          <p>
            Everything from planning and lectures to doubt solving, tests, focus sessions, and
            final-night revision sits in one clean study workspace.
          </p>
        </div>
        
        <div 
          ref={gridRef}
          className="sa-toolkit-bento"
        >
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
            <article
              key={feat.title}
              className={`sa-toolkit-card sa-toolkit-card-${feat.size} tone-${feat.tone}`}
            >
              <div className="sa-toolkit-icon">
                <Icon size={25} strokeWidth={1.9} aria-hidden="true" />
              </div>
              <div className="sa-toolkit-copy">
                <span>{feat.eyebrow}</span>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            </article>
          )})}
        </div>

      </div>
    </section>
  );
}
