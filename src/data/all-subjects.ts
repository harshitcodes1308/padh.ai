import { PrecisionSubject, PrecisionQuestion } from "@/data/precision-config";
import { physicsQuestions } from "@/data/precision-physics";
import { mathsBasicQuestions } from "@/data/precision-maths-basic";
import { mathsStandardQuestions } from "@/data/precision-maths-standard";
import { chemistryQuestions } from "@/data/precision-chemistry";
import { PRECISION_BIOLOGY } from "@/data/precision-biology";
import { itQuestions } from "@/data/precision-it";
import { englishQuestions } from "@/data/precision-english";
import { aiQuestions } from "@/data/precision-ai";
import { socialScienceQuestions } from "@/data/precision-social-science";

export const ALL_QUESTIONS: Record<string, PrecisionQuestion[]> = {
  "Mathematics Basic": mathsBasicQuestions.map((q, idx) => ({ ...q, id: (q as any).id || `mb-${idx}`, subject: "Mathematics Basic", marks: q.marks as any })),
  "Mathematics Standard": mathsStandardQuestions.map((q, idx) => ({ ...q, id: (q as any).id || `ms-${idx}`, subject: "Mathematics Standard", marks: q.marks as any })),
  Science: [
    ...physicsQuestions.map((q, idx) => ({ ...q, id: q.id || `phy-${idx}`, subject: "Science", marks: q.marks as any })),
    ...chemistryQuestions.map((q, idx) => ({ ...q, id: q.id || `chem-${idx}`, subject: "Science", marks: q.marks as any })),
    ...PRECISION_BIOLOGY.map((q, idx) => ({ ...q, id: q.id || `bio-${idx}`, subject: "Science", marks: q.marks as any })),
  ],
  "Social Science": socialScienceQuestions.map((q, idx) => ({ ...q, id: `ss-${idx}`, subject: "Social Science", marks: q.marks as any })),
  English: englishQuestions.map((q, idx) => ({ ...q, id: `eng-${idx}`, subject: "English", marks: q.marks as any })),
  "Information Technology": itQuestions.map((q, idx) => ({ ...q, id: `it-${idx}`, subject: "Information Technology", marks: q.marks as any })),
  "Artificial Intelligence": aiQuestions.map((q, idx) => ({ ...q, id: `ai-${idx}`, subject: "Artificial Intelligence", marks: q.marks as any })),
};


export const SUBJECTS: PrecisionSubject[] = [
  {
    id: "Science",
    name: "Science",
    icon: "🔬",
    color: "#10B981",
    chapters: [
      // Physics chapters (5)
      { id: "Light - Reflection and Refraction", name: "Light - Reflection and Refraction", subSubject: "Physics" },
      { id: "The Human Eye and the Colourful World", name: "The Human Eye and the Colourful World", subSubject: "Physics" },
      { id: "Electricity", name: "Electricity", subSubject: "Physics" },
      { id: "Magnetic Effects of Electric Current", name: "Magnetic Effects of Electric Current", subSubject: "Physics" },
      { id: "Sources of Energy", name: "Sources of Energy", subSubject: "Physics" },
      // Chemistry chapters (4)
      { id: "Chemical Reactions and Equations", name: "Chemical Reactions and Equations", subSubject: "Chemistry" },
      { id: "Acids, Bases and Salts", name: "Acids, Bases and Salts", subSubject: "Chemistry" },
      { id: "Metals and Non-metals", name: "Metals and Non-metals", subSubject: "Chemistry" },
      { id: "Carbon and its Compounds", name: "Carbon and its Compounds", subSubject: "Chemistry" },
      // Biology chapters (4)
      { id: "Life Processes", name: "Life Processes", subSubject: "Biology" },
      { id: "Control and Coordination", name: "Control and Coordination", subSubject: "Biology" },
      { id: "How do Organisms Reproduce?", name: "How do Organisms Reproduce?", subSubject: "Biology" },
      { id: "Heredity and Evolution", name: "Heredity and Evolution", subSubject: "Biology" }
    ],
  },
  {
    id: "Mathematics Basic",
    name: "Mathematics Basic",
    icon: "🔢",
    color: "#3B82F6",
    chapters: [
      { id: "Real Numbers", name: "Real Numbers" },
      { id: "Polynomials", name: "Polynomials" },
      { id: "Pair of Linear Equations in Two Variables", name: "Pair of Linear Equations in Two Variables" },
      { id: "Quadratic Equations", name: "Quadratic Equations" },
      { id: "Arithmetic Progressions", name: "Arithmetic Progressions" },
      { id: "Triangles", name: "Triangles" },
      { id: "Coordinate Geometry", name: "Coordinate Geometry" },
      { id: "Introduction to Trigonometry", name: "Introduction to Trigonometry" },
      { id: "Some Applications of Trigonometry", name: "Some Applications of Trigonometry" },
      { id: "Circles", name: "Circles" },
      { id: "Areas Related to Circles", name: "Areas Related to Circles" },
      { id: "Surface Areas and Volumes", name: "Surface Areas and Volumes" },
      { id: "Statistics", name: "Statistics" },
      { id: "Probability", name: "Probability" },
    ],
  },
  {
    id: "Mathematics Standard",
    name: "Mathematics Standard",
    icon: "📐",
    color: "#8B5CF6",
    chapters: [
      { id: "Real Numbers", name: "Real Numbers" },
      { id: "Polynomials", name: "Polynomials" },
      { id: "Pair of Linear Equations in Two Variables", name: "Pair of Linear Equations in Two Variables" },
      { id: "Quadratic Equations", name: "Quadratic Equations" },
      { id: "Arithmetic Progressions", name: "Arithmetic Progressions" },
      { id: "Triangles", name: "Triangles" },
      { id: "Coordinate Geometry", name: "Coordinate Geometry" },
      { id: "Introduction to Trigonometry", name: "Introduction to Trigonometry" },
      { id: "Some Applications of Trigonometry", name: "Some Applications of Trigonometry" },
      { id: "Circles", name: "Circles" },
      { id: "Areas Related to Circles", name: "Areas Related to Circles" },
      { id: "Surface Areas and Volumes", name: "Surface Areas and Volumes" },
      { id: "Statistics", name: "Statistics" },
      { id: "Probability", name: "Probability" },
    ],
  },
  {
    id: "Social Science",
    name: "Social Science",
    icon: "🌍",
    color: "#EF4444",
    chapters: [
      // History
      { id: "The Rise of Nationalism in Europe", name: "The Rise of Nationalism in Europe", subSubject: "History" },
      { id: "Nationalism in India", name: "Nationalism in India", subSubject: "History" },
      { id: "The Making of a Global World", name: "The Making of a Global World", subSubject: "History" },
      { id: "Print Culture and the Modern World", name: "Print Culture and the Modern World", subSubject: "History" },
      { id: "Map Pointing - History", name: "Map Pointing - History", subSubject: "History" },
      // Geography
      { id: "Resources and Development", name: "Resources and Development", subSubject: "Geography" },
      { id: "Forest and Wildlife Resources", name: "Forest and Wildlife Resources", subSubject: "Geography" },
      { id: "Water Resources", name: "Water Resources", subSubject: "Geography" },
      { id: "Agriculture", name: "Agriculture", subSubject: "Geography" },
      { id: "Minerals and Energy Resources", name: "Minerals and Energy Resources", subSubject: "Geography" },
      { id: "Manufacturing Industries", name: "Manufacturing Industries", subSubject: "Geography" },
      { id: "Lifelines of National Economy", name: "Lifelines of National Economy", subSubject: "Geography" },
      { id: "Map Pointing - Geography", name: "Map Pointing - Geography", subSubject: "Geography" },
      // Civics
      { id: "Power-sharing", name: "Power-sharing", subSubject: "Civics" },
      { id: "Federalism", name: "Federalism", subSubject: "Civics" },
      { id: "Gender, Religion and Caste", name: "Gender, Religion and Caste", subSubject: "Civics" },
      { id: "Political Parties", name: "Political Parties", subSubject: "Civics" },
      { id: "Outcomes of Democracy", name: "Outcomes of Democracy", subSubject: "Civics" },
      // Economics
      { id: "Development", name: "Development", subSubject: "Economics" },
      { id: "Sectors of the Indian Economy", name: "Sectors of the Indian Economy", subSubject: "Economics" },
      { id: "Money and Credit", name: "Money and Credit", subSubject: "Economics" },
      { id: "Globalisation and the Indian Economy", name: "Globalisation and the Indian Economy", subSubject: "Economics" },
      { id: "Consumer Rights", name: "Consumer Rights", subSubject: "Economics" },
    ],
  },
  {
    id: "English",
    name: "English",
    icon: "📖",
    color: "#EC4899",
    chapters: [
      { id: "A Letter to God", name: "A Letter to God" },
      { id: "Nelson Mandela - Long Walk to Freedom", name: "Nelson Mandela - Long Walk to Freedom" },
      { id: "Stories About Flying", name: "Stories About Flying" },
      { id: "From the Diary of Anne Frank", name: "From the Diary of Anne Frank" },
      { id: "Glimpses of India", name: "Glimpses of India" },
      { id: "Mijbil the Otter", name: "Mijbil the Otter" },
      { id: "Madam Rides the Bus", name: "Madam Rides the Bus" },
      { id: "The Sermon at Benares", name: "The Sermon at Benares" },
      { id: "The Proposal", name: "The Proposal" },
      { id: "Dust of Snow", name: "Dust of Snow" },
      { id: "Fire and Ice", name: "Fire and Ice" },
      { id: "A Tiger in the Zoo", name: "A Tiger in the Zoo" },
      { id: "The Ball Poem", name: "The Ball Poem" },
      { id: "Amanda!", name: "Amanda!" },
      { id: "The Tale of Custard the Dragon", name: "The Tale of Custard the Dragon" },
      { id: "For Anne Gregory", name: "For Anne Gregory" },
      { id: "A Triumph of Surgery", name: "A Triumph of Surgery" },
      { id: "The Thief's Story", name: "The Thief's Story" },
      { id: "The Midnight Visitor", name: "The Midnight Visitor" },
      { id: "A Question of Trust", name: "A Question of Trust" },
      { id: "Footprints Without Feet", name: "Footprints Without Feet" },
      { id: "The Making of a Scientist", name: "The Making of a Scientist" },
      { id: "The Necklace", name: "The Necklace" },
      { id: "Bholi", name: "Bholi" },
      { id: "The Book that Saved the Earth", name: "The Book that Saved the Earth" },
      { id: "Grammar - Determiners", name: "Grammar - Determiners" },
      { id: "Grammar - Editing", name: "Grammar - Editing" },
      { id: "Grammar - Gap Filling", name: "Grammar - Gap Filling" },
      { id: "Grammar - Modals", name: "Grammar - Modals" },
      { id: "Grammar - Phrasal Verbs", name: "Grammar - Phrasal Verbs" },
      { id: "Grammar - Punctuation", name: "Grammar - Punctuation" },
      { id: "Grammar - Reported Speech", name: "Grammar - Reported Speech" },
      { id: "Grammar - Subject-Verb Concord", name: "Grammar - Subject-Verb Concord" },
      { id: "Grammar - Tenses", name: "Grammar - Tenses" },
      { id: "Grammar - Transformation", name: "Grammar - Transformation" },
    ],
  },
  {
    id: "Information Technology",
    name: "Information Technology",
    icon: "💻",
    color: "#6366F1",
    chapters: [
      { id: "Digital Documentation (Writer)", name: "Digital Documentation (Writer)" },
      { id: "Electronic Spreadsheet (Calc)", name: "Electronic Spreadsheet (Calc)" },
      { id: "Database Management System (Base)", name: "Database Management System (Base)" },
      { id: "Internet and Workplace Safety", name: "Internet & Workplace Safety" },
    ],
  },
  {
    id: "Artificial Intelligence",
    name: "Artificial Intelligence",
    icon: "🤖",
    color: "#F59E0B",
    chapters: [
      { id: "Revisiting AI Project Cycle & Ethical Frameworks for AI", name: "Revisiting AI Project Cycle & Ethical Frameworks for AI" },
      { id: "Natural Language Processing", name: "Natural Language Processing" },
      { id: "Computer Vision", name: "Computer Vision" },
      { id: "Evaluating Models", name: "Evaluating Models" },
      { id: "Advanced Concepts of Modeling in AI", name: "Advanced Concepts of Modeling in AI" },
      { id: "Statistical Data", name: "Statistical Data" },
      { id: "Employability Skills - Communication Skills", name: "Employability Skills - Communication Skills" },
      { id: "Employability Skills - Self-management Skills", name: "Employability Skills - Self-management Skills" },
      { id: "Employability Skills - ICT Skills", name: "Employability Skills - ICT Skills" },
      { id: "Employability Skills - Entrepreneurial Skills", name: "Employability Skills - Entrepreneurial Skills" },
      { id: "Employability Skills - Green Skills", name: "Employability Skills - Green Skills" },
    ],
  },
];

