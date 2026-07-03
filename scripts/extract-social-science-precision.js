const fs = require("fs");
const path = require("path");
const { PDFParse } = require("pdf-parse");

const SOCIAL_SCIENCE_DIR = "/Users/harshitsingh/Documents/padhai-cbse/public/pdfs/competency/Social science";
const SOCIAL_SCIENCE_OUT = "/Users/harshitsingh/Documents/padhai-cbse/src/data/precision-social-science.ts";

function cleanChapter(raw) {
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
  if (!fs.existsSync(SOCIAL_SCIENCE_DIR)) {
    console.error("Directory not found:", SOCIAL_SCIENCE_DIR);
    process.exit(1);
  }

  const files = fs.readdirSync(SOCIAL_SCIENCE_DIR).filter(f => f.endsWith(".pdf"));
  console.log(`Found ${files.length} Social Science PDFs:`, files);

  let allQuestions = [];
  for (const file of files) {
    const fpath = path.join(SOCIAL_SCIENCE_DIR, file);
    const matchYear = file.match(/(\d{4})/);
    const defaultYear = matchYear ? parseInt(matchYear[1]) : 2026;
    console.log(`Parsing ${file} with default year ${defaultYear}...`);
    const qs = await parsePdfFile(fpath, defaultYear);
    console.log(`Extracted ${qs.length} questions from ${file}.`);
    allQuestions = allQuestions.concat(qs);
  }

  // Deduplicate by question text
  const seen = new Set();
  const uniqueQuestions = [];
  for (const q of allQuestions) {
    const key = q.question.trim().toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      uniqueQuestions.push(q);
    }
  }

  console.log(`Total questions: ${allQuestions.length}`);
  console.log(`Unique questions: ${uniqueQuestions.length}`);

  // Count by chapter
  const chaptersCount = {};
  for (const q of uniqueQuestions) {
    chaptersCount[q.chapter] = (chaptersCount[q.chapter] || 0) + 1;
  }
  console.log("Chapters found:", chaptersCount);

  // Write TS file
  const tsContent = `export const socialScienceQuestions = ${JSON.stringify(uniqueQuestions, null, 2)};`;
  fs.writeFileSync(SOCIAL_SCIENCE_OUT, tsContent);
  console.log(`Wrote unique questions to ${SOCIAL_SCIENCE_OUT}`);
}

main().catch(console.error);
