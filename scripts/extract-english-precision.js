const fs = require("fs");
const path = require("path");
const { PDFParse } = require("pdf-parse");

const ENGLISH_DIR = "/Users/harshitsingh/Documents/padhai-cbse/public/pdfs/competency/english";
const ENGLISH_OUT = "/Users/harshitsingh/Documents/padhai-cbse/src/data/precision-english.ts";

function cleanChapter(raw) {
  // Strip numbers/symbols from chapter name
  return raw.replace(/[*#]/g, "").replace(/^\d+[\s\.-]*/, "").trim();
}

async function parsePdfFile(fpath, defaultYear) {
  const dataBuffer = new Uint8Array(fs.readFileSync(fpath));
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

      let rawQuestion = questionMatch[1].trim();
      const rawOptions = optionsMatch[1].trim();
      const rawAnswer = answerMatch[1].trim();

      // Check if extract field is present
      const extractMatch = block.match(/EXTRACT:\s*([\s\S]+?)(?=QUESTION:)/);
      if (extractMatch) {
        let extractVal = extractMatch[1].trim();
        if (extractVal.startsWith('"') && extractVal.endsWith('"')) {
          extractVal = extractVal.slice(1, -1).trim();
        }
        if (extractVal) {
          rawQuestion = `[Extract]\n"${extractVal}"\n\nQuestion:\n${rawQuestion}`;
        }
      }

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
      chapterStr = cleanChapter(chapterStr);

      let marks = marksMatch ? parseInt(marksMatch[1]) : 1;
      if (isNaN(marks) || marks < 1 || marks > 4) {
        marks = 4;
      }

      questions.push({
        year: yearMatch ? parseInt(yearMatch[1]) : defaultYear,
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

  return questions;
}

async function main() {
  if (!fs.existsSync(ENGLISH_DIR)) {
    console.error(`English directory not found: ${ENGLISH_DIR}`);
    return;
  }

  const files = fs.readdirSync(ENGLISH_DIR).filter(f => f.endsWith(".pdf"));
  console.log(`📂 Processing English folder: found ${files.length} PDFs...`);

  let allQuestions = [];
  for (const file of files) {
    const fpath = path.join(ENGLISH_DIR, file);
    const yearMatch = file.match(/(\d{4})/);
    const year = yearMatch ? parseInt(yearMatch[1]) : 2024;
    
    console.log(`📄 Parsing ${file} (Year ${year})...`);
    const qList = await parsePdfFile(fpath, year);
    console.log(`   → Extracted ${qList.length} questions`);
    allQuestions.push(...qList);
  }

  // Deduplicate by question text
  const seen = new Set();
  const unique = [];
  for (const q of allQuestions) {
    const key = q.question?.trim().toLowerCase();
    if (key && !seen.has(key)) {
      seen.add(key);
      unique.push(q);
    }
  }

  // Re-index IDs
  unique.forEach((q, i) => {
    q.id = `eng-q-${i + 1}`;
    q.subject = "English";
  });

  console.log(`✅ Total unique English questions: ${unique.length}`);
  const chapters = [...new Set(unique.map(q => q.chapter))];
  chapters.sort().forEach(c => {
    const count = unique.filter(q => q.chapter === c).length;
    console.log(`   - ${c}: ${count} questions`);
  });

  const tsContent = `// Auto-generated English Precision Questions
import { PrecisionQuestion } from "./precision-config";

export const englishQuestions: PrecisionQuestion[] = ${JSON.stringify(unique, null, 2)};
`;

  fs.writeFileSync(ENGLISH_OUT, tsContent, "utf-8");
  console.log(`💾 Saved questions to ${ENGLISH_OUT}`);
}

main().catch(console.error);
