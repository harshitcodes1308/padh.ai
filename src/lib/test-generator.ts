import { physicsQuestions } from "@/data/precision-physics";
import { mathsBasicQuestions } from "@/data/precision-maths-basic";
import { mathsStandardQuestions } from "@/data/precision-maths-standard";
import { chemistryQuestions } from "@/data/precision-chemistry";
import { PRECISION_BIOLOGY } from "@/data/precision-biology";
import { itQuestions } from "@/data/precision-it";
import { englishQuestions } from "@/data/precision-english";
import { aiQuestions } from "@/data/precision-ai";
import { socialScienceQuestions } from "@/data/precision-social-science";

import { normalizeChapterName, getChapterSubSubject } from "./chapter-normalizer";

export interface MCQ {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-3 index
  explanation: string;
  chapter: string;
  difficulty: "easy" | "medium" | "hard";
}

const SUBJECT_QUESTIONS: Record<string, any[]> = {
  "Mathematics Basic": mathsBasicQuestions,
  "Mathematics Standard": mathsStandardQuestions,
  Science: [
    ...physicsQuestions,
    ...chemistryQuestions,
    ...PRECISION_BIOLOGY,
  ],
  Physics: physicsQuestions,
  Chemistry: chemistryQuestions,
  Biology: PRECISION_BIOLOGY,
  "Social Science": socialScienceQuestions,
  History: socialScienceQuestions,
  Geography: socialScienceQuestions,
  "Political Science": socialScienceQuestions,
  Economics: socialScienceQuestions,
  English: englishQuestions,
  "Information Technology": itQuestions,
  "Artificial Intelligence": aiQuestions,
};

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Generate CBSE Class 10 MCQs from local Competency PDFs database
 */
export async function generateMCQs(params: {
  subject: string;
  chapters: string[];
  count: number;
  perChapter?: Record<string, number>;
}): Promise<MCQ[]> {
  const { subject, chapters, count } = params;

  console.log(`Generating test for ${subject} with chapters:`, chapters);

  // Get questions list for the subject
  let allQuestions = SUBJECT_QUESTIONS[subject] || [];

  // Filter Social Science sub-subjects to their respective disciplines
  if (["History", "Geography", "Political Science", "Economics"].includes(subject)) {
    allQuestions = allQuestions.filter((q) => getChapterSubSubject(q.chapter) === subject);
  }

  if (allQuestions.length === 0) {
    console.warn(`No questions found for subject: ${subject}. Returning mock questions.`);
    return Array.from({ length: Math.min(count, 5) }, (_, i) => ({
      id: `q-${i + 1}`,
      question: `Sample ${subject} question ${i + 1}. Please upload competency PDFs for this subject to generate real questions.`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: i % 4,
      explanation: "This is a placeholder question because no competency PDF questions were loaded.",
      chapter: chapters[0] || "General",
      difficulty: "medium",
    }));
  }

  // Filter questions belonging to selected chapters
  let filtered = allQuestions.filter((q) =>
    chapters.some((ch) => normalizeChapterName(q.chapter) === normalizeChapterName(ch))
  );

  // Fallback to all subject questions if no chapter matched
  if (filtered.length === 0) {
    console.warn(`No questions matched the selected chapters. Falling back to all questions of subject.`);
    filtered = allQuestions;
  }

  // Shuffle and slice to the requested count
  const selected = shuffle(filtered).slice(0, count);

  return selected.map((q, idx) => ({
    id: `q-${idx + 1}`,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation || `The correct option is: ${q.options[q.correctAnswer]}.`,
    chapter: q.chapter,
    difficulty: "hard",
  }));
}

/**
 * Evaluate test answers and calculate analytics
 */
export function evaluateTest(
  questions: MCQ[],
  answers: Record<string, number>
) {
  let correct = 0;
  let incorrect = 0;
  let unattempted = 0;

  const chapterPerformance: Record<string, { correct: number; total: number }> = {};

  questions.forEach((q) => {
    const userAnswer = answers[q.id];

    // Initialize chapter tracking
    if (!chapterPerformance[q.chapter]) {
      chapterPerformance[q.chapter] = { correct: 0, total: 0 };
    }
    chapterPerformance[q.chapter].total++;

    if (userAnswer === undefined || userAnswer === null) {
      unattempted++;
    } else if (userAnswer === q.correctAnswer) {
      correct++;
      chapterPerformance[q.chapter].correct++;
    } else {
      incorrect++;
    }
  });

  const attempted = correct + incorrect;
  const accuracy = attempted > 0 ? (correct / attempted) * 100 : 0;

  // Identify strong chapters (>=70% accuracy)
  const strongChapters = Object.entries(chapterPerformance)
    .filter(([_, perf]) => perf.total > 0 && perf.correct / perf.total >= 0.7)
    .map(([chapter]) => chapter);

  // Identify weak chapters (<50% accuracy)
  const weakChapters = Object.entries(chapterPerformance)
    .filter(([_, perf]) => perf.total > 0 && perf.correct / perf.total < 0.5)
    .map(([chapter]) => chapter);

  return {
    correct,
    incorrect,
    unattempted,
    attempted,
    accuracy,
    strongChapters,
    weakChapters,
    chapterPerformance,
  };
}
