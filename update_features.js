const fs = require('fs');

let file = 'src/components/landing/FeaturesGrid.tsx';
let content = fs.readFileSync(file, 'utf8');

const newFeaturesArray = `const FEATURES = [
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
    eyebrow: "History sprint",
    title: "ChronoScroll",
    desc: "Revise timelines and events in a scrollable, memory-first study format.",
    icon: Clock3,
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
    eyebrow: "PYQ practice",
    title: "Previous Year Questions",
    desc: "Practice actual CBSE questions from past years, organized by topic and difficulty.",
    icon: FileQuestion,
    tone: "blue",
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
    title: "Notes & Flashcards",
    eyebrow: "Revision vault",
    desc: "Turn messy notes into cleaner revision material and quick flashcards for last-mile recall.",
    icon: NotebookTabs,
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
    eyebrow: "Deep work",
    title: "Focus Mode",
    desc: "Run timed study blocks with breaks, task intent, and completion tracking.",
    icon: Focus,
    tone: "green",
    size: "normal",
  }
];`;

content = content.replace(/const FEATURES = \[[\s\S]*?\];/m, newFeaturesArray);

const newFooterText = `        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem', fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 600, color: 'var(--text-secondary)' }}>
          + many more!
        </div>

      </div>
    </section>`;

content = content.replace(/        <\/div>\s*<\/div>\s*<\/section>/m, newFooterText);

fs.writeFileSync(file, content);
console.log('Success');
