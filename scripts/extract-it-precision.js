const fs = require("fs");
const path = require("path");
const { PDFParse } = require("pdf-parse");

const PDF_PATH = "/Users/harshitsingh/Documents/padhai-cbse/public/pdfs/competency/IT/IT All Years.pdf";
const OUTPUT_PATH = "/Users/harshitsingh/Documents/padhai-cbse/src/data/precision-it.ts";

async function main() {
  if (!fs.existsSync(PDF_PATH)) {
    console.error(`PDF not found at: ${PDF_PATH}`);
    process.exit(1);
  }

  const dataBuffer = new Uint8Array(fs.readFileSync(PDF_PATH));
  const parser = new PDFParse(dataBuffer);
  await parser.load();
  const result = await parser.getText();
  const text = result.text || result.pages?.join("\n") || "";

  const blocks = text.split("---");
  const questions = [];

  for (const block of blocks) {
    if (!block.includes("QUESTION:") || !block.includes("OPTIONS:")) continue;
    
    try {
      const yearMatch = block.match(/YEAR:\s*(\d+)/);
      const chapterMatch = block.match(/CHAPTER:\s*(.+)/);
      const marksMatch = block.match(/ORIGINAL_MARKS:\s*(\d+)/);
      const questionMatch = block.match(/QUESTION:\s*([\s\S]+?)(?=OPTIONS:)/);
      const optionsMatch = block.match(/OPTIONS:\s*([\s\S]+?)(?=ANSWER:)/);
      const answerMatch = block.match(/ANSWER:\s*(.+)/);

      if (!questionMatch || !optionsMatch || !answerMatch) continue;

      const rawQuestion = questionMatch[1].trim();
      const rawOptions = optionsMatch[1].trim();
      const rawAnswer = answerMatch[1].trim();

      let optA = "", optB = "", optC = "", optD = "";
      const matchA = rawOptions.match(/\(A\)([\s\S]+?)(?=\(B\))/);
      const matchB = rawOptions.match(/\(B\)([\s\S]+?)(?=\(C\))/);
      const matchC = rawOptions.match(/\(C\)([\s\S]+?)(?=\(D\))/);
      const matchD = rawOptions.match(/\(D\)([\s\S]+)$/);

      if (matchA && matchB && matchC && matchD) {
        optA = matchA[1].trim();
        optB = matchB[1].trim();
        optC = matchC[1].trim();
        optD = matchD[1].trim();
      } else {
        continue;
      }

      let correctIdx = -1;
      if (rawAnswer.includes("(A)") || rawAnswer.startsWith("A")) correctIdx = 0;
      else if (rawAnswer.includes("(B)") || rawAnswer.startsWith("B")) correctIdx = 1;
      else if (rawAnswer.includes("(C)") || rawAnswer.startsWith("C")) correctIdx = 2;
      else if (rawAnswer.includes("(D)") || rawAnswer.startsWith("D")) correctIdx = 3;

      if (correctIdx === -1) continue;

      let chapterStr = chapterMatch ? chapterMatch[1].trim() : "Unknown";
      chapterStr = chapterStr.replace(/[*#]/g, "").trim();

      let marks = marksMatch ? parseInt(marksMatch[1]) : 1;
      if (isNaN(marks) || marks < 1 || marks > 4) {
        marks = 4;
      }

      questions.push({
        year: yearMatch ? parseInt(yearMatch[1]) : 2024,
        chapter: chapterStr,
        marks: marks,
        question: rawQuestion,
        options: [optA, optB, optC, optD],
        correctAnswer: correctIdx
      });
    } catch (e) {
      console.error("Failed to parse block:", e);
    }
  }

  // Deduplicate
  const seen = new Set();
  const unique = [];
  for (const q of questions) {
    const key = q.question?.trim().toLowerCase();
    if (key && !seen.has(key)) {
      seen.add(key);
      unique.push(q);
    }
  }

  // Re-index IDs
  unique.forEach((q, i) => {
    q.id = `it-q-${i + 1}`;
    q.subject = "Information Technology";
  });

  console.log(`Successfully parsed ${unique.length} unique questions.`);

  const tsContent = `// Auto-generated Information Technology Precision Questions
import { PrecisionQuestion } from "./precision-config";

export const itQuestions: PrecisionQuestion[] = ${JSON.stringify(unique, null, 2)};
`;

  fs.writeFileSync(OUTPUT_PATH, tsContent, "utf-8");
  console.log(`Saved output to ${OUTPUT_PATH}`);
}

main().catch(console.error);
