/**
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

  physics: {
    chapters: [

      {
        id: "physics-ch1",
        title: "Light - Reflection and Refraction",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Light - Reflection and Refraction - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Light - Reflection and Refraction. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Light - Reflection and Refraction",
            "Key concept 2 related to Light - Reflection and Refraction",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Light - Reflection and Refraction.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "physics-ch2",
        title: "The Human Eye and the Colourful World",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Human Eye and the Colourful World - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Human Eye and the Colourful World. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Human Eye and the Colourful World",
            "Key concept 2 related to The Human Eye and the Colourful World",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Human Eye and the Colourful World.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "physics-ch3",
        title: "Electricity",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Electricity - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Electricity. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Electricity",
            "Key concept 2 related to Electricity",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Electricity.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "physics-ch4",
        title: "Magnetic Effects of Electric Current",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Magnetic Effects of Electric Current - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Magnetic Effects of Electric Current. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Magnetic Effects of Electric Current",
            "Key concept 2 related to Magnetic Effects of Electric Current",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Magnetic Effects of Electric Current.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
    ]
  },
  chemistry: {
    chapters: [

      {
        id: "chemistry-ch1",
        title: "Chemical Reactions and Equations",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Chemical Reactions and Equations - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Chemical Reactions and Equations. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Chemical Reactions and Equations",
            "Key concept 2 related to Chemical Reactions and Equations",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Chemical Reactions and Equations.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "chemistry-ch2",
        title: "Acids, Bases and Salts",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Acids, Bases and Salts - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Acids, Bases and Salts. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Acids, Bases and Salts",
            "Key concept 2 related to Acids, Bases and Salts",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Acids, Bases and Salts.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "chemistry-ch3",
        title: "Metals and Non-metals",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Metals and Non-metals - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Metals and Non-metals. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Metals and Non-metals",
            "Key concept 2 related to Metals and Non-metals",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Metals and Non-metals.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "chemistry-ch4",
        title: "Carbon and its Compounds",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Carbon and its Compounds - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Carbon and its Compounds. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Carbon and its Compounds",
            "Key concept 2 related to Carbon and its Compounds",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Carbon and its Compounds.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
    ]
  },
  biology: {
    chapters: [

      {
        id: "biology-ch1",
        title: "Life Processes",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Life Processes - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Life Processes. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Life Processes",
            "Key concept 2 related to Life Processes",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Life Processes.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "biology-ch2",
        title: "Control and Coordination",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Control and Coordination - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Control and Coordination. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Control and Coordination",
            "Key concept 2 related to Control and Coordination",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Control and Coordination.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "biology-ch3",
        title: "How do Organisms Reproduce?",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "How do Organisms Reproduce? - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of How do Organisms Reproduce?. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to How do Organisms Reproduce?",
            "Key concept 2 related to How do Organisms Reproduce?",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of How do Organisms Reproduce?.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "biology-ch4",
        title: "Heredity",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Heredity - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Heredity. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Heredity",
            "Key concept 2 related to Heredity",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Heredity.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "biology-ch5",
        title: "Our Environment",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Our Environment - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Our Environment. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Our Environment",
            "Key concept 2 related to Our Environment",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Our Environment.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
    ]
  },
  mathematics: {
    chapters: [

      {
        id: "mathematics-ch1",
        title: "Real Numbers",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Real Numbers - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Real Numbers. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Real Numbers",
            "Key concept 2 related to Real Numbers",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Real Numbers.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch2",
        title: "Polynomials",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Polynomials - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Polynomials. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Polynomials",
            "Key concept 2 related to Polynomials",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Polynomials.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch3",
        title: "Pair of Linear Equations in Two Variables",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Pair of Linear Equations in Two Variables - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Pair of Linear Equations in Two Variables. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Pair of Linear Equations in Two Variables",
            "Key concept 2 related to Pair of Linear Equations in Two Variables",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Pair of Linear Equations in Two Variables.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch4",
        title: "Quadratic Equations",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Quadratic Equations - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Quadratic Equations. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Quadratic Equations",
            "Key concept 2 related to Quadratic Equations",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Quadratic Equations.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch5",
        title: "Arithmetic Progressions",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Arithmetic Progressions - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Arithmetic Progressions. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Arithmetic Progressions",
            "Key concept 2 related to Arithmetic Progressions",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Arithmetic Progressions.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch6",
        title: "Triangles",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Triangles - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Triangles. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Triangles",
            "Key concept 2 related to Triangles",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Triangles.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch7",
        title: "Coordinate Geometry",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Coordinate Geometry - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Coordinate Geometry. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Coordinate Geometry",
            "Key concept 2 related to Coordinate Geometry",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Coordinate Geometry.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch8",
        title: "Introduction to Trigonometry",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Introduction to Trigonometry - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Introduction to Trigonometry. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Introduction to Trigonometry",
            "Key concept 2 related to Introduction to Trigonometry",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Introduction to Trigonometry.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch9",
        title: "Some Applications of Trigonometry",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Some Applications of Trigonometry - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Some Applications of Trigonometry. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Some Applications of Trigonometry",
            "Key concept 2 related to Some Applications of Trigonometry",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Some Applications of Trigonometry.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch10",
        title: "Circles",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Circles - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Circles. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Circles",
            "Key concept 2 related to Circles",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Circles.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch11",
        title: "Areas Related to Circles",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Areas Related to Circles - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Areas Related to Circles. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Areas Related to Circles",
            "Key concept 2 related to Areas Related to Circles",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Areas Related to Circles.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch12",
        title: "Surface Areas and Volumes",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Surface Areas and Volumes - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Surface Areas and Volumes. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Surface Areas and Volumes",
            "Key concept 2 related to Surface Areas and Volumes",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Surface Areas and Volumes.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch13",
        title: "Statistics",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Statistics - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Statistics. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Statistics",
            "Key concept 2 related to Statistics",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Statistics.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch14",
        title: "Probability",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Probability - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Probability. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Probability",
            "Key concept 2 related to Probability",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Probability.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
    ]
  },
  history: {
    chapters: [

      {
        id: "history-ch1",
        title: "The Rise of Nationalism in Europe",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Rise of Nationalism in Europe - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Rise of Nationalism in Europe. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Rise of Nationalism in Europe",
            "Key concept 2 related to The Rise of Nationalism in Europe",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Rise of Nationalism in Europe.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "history-ch2",
        title: "Nationalism in India",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Nationalism in India - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Nationalism in India. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Nationalism in India",
            "Key concept 2 related to Nationalism in India",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Nationalism in India.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "history-ch3",
        title: "The Making of a Global World",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Making of a Global World - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Making of a Global World. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Making of a Global World",
            "Key concept 2 related to The Making of a Global World",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Making of a Global World.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "history-ch4",
        title: "Print Culture and the Modern World",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Print Culture and the Modern World - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Print Culture and the Modern World. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Print Culture and the Modern World",
            "Key concept 2 related to Print Culture and the Modern World",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Print Culture and the Modern World.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "history-ch5",
        title: "Map Pointing - History",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Map Pointing - History - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Map Pointing - History. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Map Pointing - History",
            "Key concept 2 related to Map Pointing - History",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Map Pointing - History.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
    ]
  },
  geography: {
    chapters: [

      {
        id: "geography-ch1",
        title: "Resources and Development",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Resources and Development - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Resources and Development. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Resources and Development",
            "Key concept 2 related to Resources and Development",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Resources and Development.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "geography-ch2",
        title: "Forest and Wildlife Resources",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Forest and Wildlife Resources - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Forest and Wildlife Resources. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Forest and Wildlife Resources",
            "Key concept 2 related to Forest and Wildlife Resources",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Forest and Wildlife Resources.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "geography-ch3",
        title: "Water Resources",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Water Resources - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Water Resources. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Water Resources",
            "Key concept 2 related to Water Resources",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Water Resources.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "geography-ch4",
        title: "Agriculture",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Agriculture - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Agriculture. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Agriculture",
            "Key concept 2 related to Agriculture",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Agriculture.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "geography-ch5",
        title: "Minerals and Energy Resources",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Minerals and Energy Resources - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Minerals and Energy Resources. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Minerals and Energy Resources",
            "Key concept 2 related to Minerals and Energy Resources",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Minerals and Energy Resources.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "geography-ch6",
        title: "Manufacturing Industries",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Manufacturing Industries - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Manufacturing Industries. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Manufacturing Industries",
            "Key concept 2 related to Manufacturing Industries",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Manufacturing Industries.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "geography-ch7",
        title: "Lifelines of National Economy",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Lifelines of National Economy - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Lifelines of National Economy. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Lifelines of National Economy",
            "Key concept 2 related to Lifelines of National Economy",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Lifelines of National Economy.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "geography-ch8",
        title: "Map Pointing - Geography",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Map Pointing - Geography - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Map Pointing - Geography. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Map Pointing - Geography",
            "Key concept 2 related to Map Pointing - Geography",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Map Pointing - Geography.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
    ]
  },
  civics: {
    chapters: [

      {
        id: "civics-ch1",
        title: "Power-sharing",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Power-sharing - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Power-sharing. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Power-sharing",
            "Key concept 2 related to Power-sharing",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Power-sharing.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "civics-ch2",
        title: "Federalism",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Federalism - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Federalism. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Federalism",
            "Key concept 2 related to Federalism",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Federalism.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "civics-ch3",
        title: "Gender, Religion and Caste",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Gender, Religion and Caste - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Gender, Religion and Caste. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Gender, Religion and Caste",
            "Key concept 2 related to Gender, Religion and Caste",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Gender, Religion and Caste.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "civics-ch4",
        title: "Political Parties",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Political Parties - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Political Parties. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Political Parties",
            "Key concept 2 related to Political Parties",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Political Parties.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "civics-ch5",
        title: "Outcomes of Democracy",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Outcomes of Democracy - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Outcomes of Democracy. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Outcomes of Democracy",
            "Key concept 2 related to Outcomes of Democracy",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Outcomes of Democracy.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
    ]
  },
  economics: {
    chapters: [

      {
        id: "economics-ch1",
        title: "Development",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Development - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Development. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Development",
            "Key concept 2 related to Development",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Development.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "economics-ch2",
        title: "Sectors of the Indian Economy",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Sectors of the Indian Economy - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Sectors of the Indian Economy. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Sectors of the Indian Economy",
            "Key concept 2 related to Sectors of the Indian Economy",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Sectors of the Indian Economy.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "economics-ch3",
        title: "Money and Credit",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Money and Credit - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Money and Credit. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Money and Credit",
            "Key concept 2 related to Money and Credit",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Money and Credit.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "economics-ch4",
        title: "Globalisation and the Indian Economy",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Globalisation and the Indian Economy - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Globalisation and the Indian Economy. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Globalisation and the Indian Economy",
            "Key concept 2 related to Globalisation and the Indian Economy",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Globalisation and the Indian Economy.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "economics-ch5",
        title: "Consumer Rights",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Consumer Rights - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Consumer Rights. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Consumer Rights",
            "Key concept 2 related to Consumer Rights",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Consumer Rights.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
    ]
  },
  english: {
    chapters: [

      {
        id: "english-ch1",
        title: "A Letter to God",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "A Letter to God - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of A Letter to God. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to A Letter to God",
            "Key concept 2 related to A Letter to God",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of A Letter to God.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch2",
        title: "Nelson Mandela - Long Walk to Freedom",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Nelson Mandela - Long Walk to Freedom - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Nelson Mandela - Long Walk to Freedom. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Nelson Mandela - Long Walk to Freedom",
            "Key concept 2 related to Nelson Mandela - Long Walk to Freedom",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Nelson Mandela - Long Walk to Freedom.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch3",
        title: "Stories About Flying",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Stories About Flying - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Stories About Flying. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Stories About Flying",
            "Key concept 2 related to Stories About Flying",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Stories About Flying.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch4",
        title: "From the Diary of Anne Frank",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "From the Diary of Anne Frank - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of From the Diary of Anne Frank. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to From the Diary of Anne Frank",
            "Key concept 2 related to From the Diary of Anne Frank",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of From the Diary of Anne Frank.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch5",
        title: "Glimpses of India",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Glimpses of India - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Glimpses of India. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Glimpses of India",
            "Key concept 2 related to Glimpses of India",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Glimpses of India.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch6",
        title: "Mijbil the Otter",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Mijbil the Otter - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Mijbil the Otter. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Mijbil the Otter",
            "Key concept 2 related to Mijbil the Otter",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Mijbil the Otter.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch7",
        title: "Madam Rides the Bus",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Madam Rides the Bus - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Madam Rides the Bus. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Madam Rides the Bus",
            "Key concept 2 related to Madam Rides the Bus",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Madam Rides the Bus.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch8",
        title: "The Sermon at Benares",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Sermon at Benares - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Sermon at Benares. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Sermon at Benares",
            "Key concept 2 related to The Sermon at Benares",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Sermon at Benares.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch9",
        title: "The Proposal",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Proposal - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Proposal. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Proposal",
            "Key concept 2 related to The Proposal",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Proposal.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch10",
        title: "Dust of Snow",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Dust of Snow - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Dust of Snow. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Dust of Snow",
            "Key concept 2 related to Dust of Snow",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Dust of Snow.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch11",
        title: "Fire and Ice",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Fire and Ice - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Fire and Ice. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Fire and Ice",
            "Key concept 2 related to Fire and Ice",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Fire and Ice.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch12",
        title: "A Tiger in the Zoo",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "A Tiger in the Zoo - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of A Tiger in the Zoo. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to A Tiger in the Zoo",
            "Key concept 2 related to A Tiger in the Zoo",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of A Tiger in the Zoo.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch13",
        title: "The Ball Poem",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Ball Poem - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Ball Poem. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Ball Poem",
            "Key concept 2 related to The Ball Poem",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Ball Poem.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch14",
        title: "Amanda!",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Amanda! - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Amanda!. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Amanda!",
            "Key concept 2 related to Amanda!",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Amanda!.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch15",
        title: "The Tale of Custard the Dragon",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Tale of Custard the Dragon - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Tale of Custard the Dragon. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Tale of Custard the Dragon",
            "Key concept 2 related to The Tale of Custard the Dragon",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Tale of Custard the Dragon.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch16",
        title: "For Anne Gregory",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "For Anne Gregory - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of For Anne Gregory. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to For Anne Gregory",
            "Key concept 2 related to For Anne Gregory",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of For Anne Gregory.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch17",
        title: "A Triumph of Surgery",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "A Triumph of Surgery - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of A Triumph of Surgery. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to A Triumph of Surgery",
            "Key concept 2 related to A Triumph of Surgery",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of A Triumph of Surgery.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch18",
        title: "The Thief's Story",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Thief's Story - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Thief's Story. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Thief's Story",
            "Key concept 2 related to The Thief's Story",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Thief's Story.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch19",
        title: "The Midnight Visitor",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Midnight Visitor - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Midnight Visitor. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Midnight Visitor",
            "Key concept 2 related to The Midnight Visitor",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Midnight Visitor.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch20",
        title: "A Question of Trust",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "A Question of Trust - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of A Question of Trust. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to A Question of Trust",
            "Key concept 2 related to A Question of Trust",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of A Question of Trust.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch21",
        title: "Footprints Without Feet",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Footprints Without Feet - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Footprints Without Feet. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Footprints Without Feet",
            "Key concept 2 related to Footprints Without Feet",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Footprints Without Feet.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch22",
        title: "The Making of a Scientist",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Making of a Scientist - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Making of a Scientist. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Making of a Scientist",
            "Key concept 2 related to The Making of a Scientist",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Making of a Scientist.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch23",
        title: "The Necklace",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Necklace - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Necklace. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Necklace",
            "Key concept 2 related to The Necklace",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Necklace.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch24",
        title: "Bholi",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Bholi - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Bholi. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Bholi",
            "Key concept 2 related to Bholi",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Bholi.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch25",
        title: "The Book that Saved the Earth",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Book that Saved the Earth - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Book that Saved the Earth. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Book that Saved the Earth",
            "Key concept 2 related to The Book that Saved the Earth",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Book that Saved the Earth.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch26",
        title: "Grammar Section",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Grammar Section - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Grammar Section. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Grammar Section",
            "Key concept 2 related to Grammar Section",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Grammar Section.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
    ]
  },
  computer: {
    chapters: [

      {
        id: "computer-ch1",
        title: "Digital Documentation (Writer)",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Digital Documentation (Writer) - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Digital Documentation (Writer). Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Digital Documentation (Writer)",
            "Key concept 2 related to Digital Documentation (Writer)",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Digital Documentation (Writer).",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "computer-ch2",
        title: "Electronic Spreadsheet (Calc)",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Electronic Spreadsheet (Calc) - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Electronic Spreadsheet (Calc). Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Electronic Spreadsheet (Calc)",
            "Key concept 2 related to Electronic Spreadsheet (Calc)",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Electronic Spreadsheet (Calc).",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "computer-ch3",
        title: "Database Management System (Base)",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Database Management System (Base) - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Database Management System (Base). Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Database Management System (Base)",
            "Key concept 2 related to Database Management System (Base)",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Database Management System (Base).",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "computer-ch4",
        title: "Internet and Workplace Safety",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Internet and Workplace Safety - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Internet and Workplace Safety. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Internet and Workplace Safety",
            "Key concept 2 related to Internet and Workplace Safety",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Internet and Workplace Safety.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "computer-ch5",
        title: "AI Project Cycle & Ethical Frameworks",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "AI Project Cycle & Ethical Frameworks - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of AI Project Cycle & Ethical Frameworks. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to AI Project Cycle & Ethical Frameworks",
            "Key concept 2 related to AI Project Cycle & Ethical Frameworks",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of AI Project Cycle & Ethical Frameworks.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "computer-ch6",
        title: "Natural Language Processing",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Natural Language Processing - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Natural Language Processing. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Natural Language Processing",
            "Key concept 2 related to Natural Language Processing",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Natural Language Processing.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "computer-ch7",
        title: "Computer Vision",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Computer Vision - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Computer Vision. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Computer Vision",
            "Key concept 2 related to Computer Vision",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Computer Vision.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
    ]
  },
};
