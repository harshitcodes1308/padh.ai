const fs = require('fs');
const content = fs.readFileSync('src/app/dashboard/precision-practice/page.tsx', 'utf-8');

const regexAllQuestions = /const ALL_QUESTIONS: Record<string, PrecisionQuestion\[\]> = \{[\s\S]*?\n\};\n/m;
const regexSubjects = /const SUBJECTS: PrecisionSubject\[\] = \[[\s\S]*?\n\];\n/m;

const allQuestionsMatch = content.match(regexAllQuestions);
const subjectsMatch = content.match(regexSubjects);

if (!allQuestionsMatch || !subjectsMatch) {
    console.error("Failed to match");
    process.exit(1);
}

const newFileContent = `import { PrecisionSubject, PrecisionQuestion } from "@/data/precision-config";
import { physicsQuestions } from "@/data/precision-physics";
import { mathsBasicQuestions } from "@/data/precision-maths-basic";
import { mathsStandardQuestions } from "@/data/precision-maths-standard";
import { chemistryQuestions } from "@/data/precision-chemistry";
import { PRECISION_BIOLOGY } from "@/data/precision-biology";
import { itQuestions } from "@/data/precision-it";
import { englishQuestions } from "@/data/precision-english";
import { aiQuestions } from "@/data/precision-ai";
import { socialScienceQuestions } from "@/data/precision-social-science";

export ${allQuestionsMatch[0]}

export ${subjectsMatch[0]}
`;

fs.writeFileSync('src/data/all-subjects.ts', newFileContent);

// Also remove them from precision-practice/page.tsx
const newPageContent = content.replace(regexAllQuestions, "import { ALL_QUESTIONS, SUBJECTS } from '@/data/all-subjects';\n").replace(regexSubjects, '');
fs.writeFileSync('src/app/dashboard/precision-practice/page.tsx', newPageContent);
