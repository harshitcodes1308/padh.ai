const fs = require('fs');

const cbseChapters = {
  "physics": [
    "Light - Reflection and Refraction",
    "The Human Eye and the Colourful World",
    "Electricity",
    "Magnetic Effects of Electric Current"
  ],
  "chemistry": [
    "Chemical Reactions and Equations",
    "Acids, Bases and Salts",
    "Metals and Non-metals",
    "Carbon and its Compounds"
  ],
  "biology": [
    "Life Processes",
    "Control and Coordination",
    "How do Organisms Reproduce?",
    "Heredity",
    "Our Environment"
  ],
  "mathematics": [
    "Real Numbers",
    "Polynomials",
    "Pair of Linear Equations in Two Variables",
    "Quadratic Equations",
    "Arithmetic Progressions",
    "Triangles",
    "Coordinate Geometry",
    "Introduction to Trigonometry",
    "Some Applications of Trigonometry",
    "Circles",
    "Areas Related to Circles",
    "Surface Areas and Volumes",
    "Statistics",
    "Probability"
  ],
  "history": [
    "The Rise of Nationalism in Europe",
    "Nationalism in India",
    "The Making of a Global World",
    "Print Culture and the Modern World",
    "Map Pointing - History"
  ],
  "geography": [
    "Resources and Development",
    "Forest and Wildlife Resources",
    "Water Resources",
    "Agriculture",
    "Minerals and Energy Resources",
    "Manufacturing Industries",
    "Lifelines of National Economy",
    "Map Pointing - Geography"
  ],
  "civics": [
    "Power-sharing",
    "Federalism",
    "Gender, Religion and Caste",
    "Political Parties",
    "Outcomes of Democracy"
  ],
  "economics": [
    "Development",
    "Sectors of the Indian Economy",
    "Money and Credit",
    "Globalisation and the Indian Economy",
    "Consumer Rights"
  ],
  "english": [
    "A Letter to God",
    "Nelson Mandela - Long Walk to Freedom",
    "Stories About Flying",
    "From the Diary of Anne Frank",
    "Glimpses of India",
    "Mijbil the Otter",
    "Madam Rides the Bus",
    "The Sermon at Benares",
    "The Proposal",
    "Dust of Snow",
    "Fire and Ice",
    "A Tiger in the Zoo",
    "The Ball Poem",
    "Amanda!",
    "The Tale of Custard the Dragon",
    "For Anne Gregory",
    "A Triumph of Surgery",
    "The Thief's Story",
    "The Midnight Visitor",
    "A Question of Trust",
    "Footprints Without Feet",
    "The Making of a Scientist",
    "The Necklace",
    "Bholi",
    "The Book that Saved the Earth",
    "Grammar Section"
  ],
  "computer": [
    "Digital Documentation (Writer)",
    "Electronic Spreadsheet (Calc)",
    "Database Management System (Base)",
    "Internet and Workplace Safety",
    "AI Project Cycle & Ethical Frameworks",
    "Natural Language Processing",
    "Computer Vision"
  ]
};

const output = `/**
 * Study Flow - Data Structure
 * 
 * Updated with CBSE Class 10 Syllabus
 * Each subject contains chapters with 3 steps: Watch → Revise → Practice.
 */

export interface StudyFlowQuestion {
  question: string;
  answer: string;
}

export interface StudyFlowChapter {
  id: string;
  title: string;
  watch: { videoUrl: string; title: string };
  revise: { summary: string; bullets: string[] };
  practice: StudyFlowQuestion[];
}

export interface StudyFlowSubject {
  chapters: StudyFlowChapter[];
}

export type SubjectKey = "physics" | "chemistry" | "biology" | "mathematics" | "history" | "civics" | "geography" | "economics" | "english" | "computer";

export type StudyFlowData = Record<SubjectKey, StudyFlowSubject>;

/** Subject display metadata */
export const SUBJECT_META: Record<SubjectKey, { label: string; icon: string; color: string }> = {
  physics:          { label: "Physics",          icon: "⚡", color: "#60A5FA" },
  chemistry:        { label: "Chemistry",        icon: "🧪", color: "#3ECF8E" },
  biology:          { label: "Biology",          icon: "🧬", color: "#FB923C" },
  mathematics:      { label: "Mathematics",      icon: "📐", color: "#A78BFA" },
  history:          { label: "History",          icon: "📜", color: "#F87171" },
  civics:           { label: "Civics",           icon: "🏛️", color: "#F59E0B" },
  geography:        { label: "Geography",        icon: "🌍", color: "#10B981" },
  economics:        { label: "Economics",        icon: "📈", color: "#8B5CF6" },
  english:          { label: "English",          icon: "📝", color: "#94A3B8" },
  computer:         { label: "Computer / IT",    icon: "💻", color: "#38BDF8" }
};

/** All valid subject keys */
export const SUBJECT_KEYS: SubjectKey[] = ["physics", "chemistry", "biology", "mathematics", "history", "civics", "geography", "economics", "english", "computer"];

/** Subjects that are coming soon */
export const COMING_SOON_SUBJECTS = [] as const;

export const STUDY_FLOW_DATA: StudyFlowData = {
${Object.entries(cbseChapters).map(([subjectKey, chapters]) => `
  ${subjectKey}: {
    chapters: [
${chapters.map((ch, idx) => `
      {
        id: "${subjectKey}-ch${idx+1}",
        title: "${ch}",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "${ch} - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of ${ch}. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to ${ch}",
            "Key concept 2 related to ${ch}",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of ${ch}.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },`).join('')}
    ]
  },`).join('')}
};
`;

fs.writeFileSync('src/data/studyFlowData.ts', output);
console.log('Successfully updated src/data/studyFlowData.ts');
