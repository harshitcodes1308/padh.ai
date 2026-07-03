const fs = require("fs");
const path = require("path");
const { PDFParse } = require("pdf-parse");

const BASIC_DIR = "/Users/harshitsingh/Documents/padhai-cbse/public/pdfs/competency/mathematics-basic";
const STANDARD_DIR = "/Users/harshitsingh/Documents/padhai-cbse/public/pdfs/competency/mathematics-standard";

const BASIC_OUT = "/Users/harshitsingh/Documents/padhai-cbse/src/data/precision-maths-basic.ts";
const STANDARD_OUT = "/Users/harshitsingh/Documents/padhai-cbse/src/data/precision-maths-standard.ts";

function cleanChapter(raw) {
  let clean = raw.replace(/[*#]/g, "").replace(/^\d+[\s\.-]*/, "").trim().toLowerCase();
  
  if (clean.includes("real number")) return "Real Numbers";
  if (clean.includes("polynomial")) return "Polynomials";
  if (clean.includes("linear equation") || clean.includes("pair of linear")) return "Pair of Linear Equations in Two Variables";
  if (clean.includes("quadratic")) return "Quadratic Equations";
  if (clean.includes("arithmetic progression") || clean === "ap") return "Arithmetic Progressions";
  if (clean.includes("triangle")) return "Triangles";
  if (clean.includes("coordinate")) return "Coordinate Geometry";
  if (clean.includes("introduction to trigonometry") || clean.includes("intro to trigonometry") || clean.includes("trigonometric identities") || clean.includes("trigonometry")) return "Introduction to Trigonometry";
  if (clean.includes("application of trigonometry") || clean.includes("heights and distances") || clean.includes("some applications of trigonometry")) return "Some Applications of Trigonometry";
  if (clean === "circle" || clean === "circles") return "Circles";
  if (clean.includes("area related to circle") || clean.includes("areas related to circles")) return "Areas Related to Circles";
  if (clean.includes("surface area") || clean.includes("volume") || clean.includes("mensuration")) return "Surface Areas and Volumes";
  if (clean.includes("statistic")) return "Statistics";
  if (clean.includes("probability")) return "Probability";

  return raw.replace(/[*#]/g, "").trim();
}

async function parsePdfFile(fpath, defaultYear, subjectName) {
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

async function runDir(dirPath, outputPath, subjectName) {
  if (!fs.existsSync(dirPath)) {
    console.error(`Directory not found: ${dirPath}`);
    return;
  }

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith(".pdf"));
  console.log(`\n📂 Processing ${subjectName} folder: found ${files.length} PDFs...`);

  let allQuestions = [];
  for (const file of files) {
    const fpath = path.join(dirPath, file);
    // extract year from filename e.g. "Maths Basic 2024.pdf" -> 2024
    const yearMatch = file.match(/(\d{4})/);
    const year = yearMatch ? parseInt(yearMatch[1]) : 2024;
    
    console.log(`📄 Parsing ${file} (Year ${year})...`);
    const qList = await parsePdfFile(fpath, year, subjectName);
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
    q.id = `${subjectName === "Mathematics Basic" ? "math-b" : "math-s"}-q-${i + 1}`;
    q.subject = subjectName;
  });

  console.log(`✅ Total unique questions for ${subjectName}: ${unique.length}`);

  // Print chapter summary
  const chapters = [...new Set(unique.map(q => q.chapter))];
  chapters.sort().forEach(c => {
    const count = unique.filter(q => q.chapter === c).length;
    console.log(`   - ${c}: ${count} questions`);
  });

  const tsContent = `// Auto-generated ${subjectName} Precision Questions
import { PrecisionQuestion } from "./precision-config";

export const ${subjectName === "Mathematics Basic" ? "mathsBasicQuestions" : "mathsStandardQuestions"}: PrecisionQuestion[] = ${JSON.stringify(unique, null, 2)};
`;

  fs.writeFileSync(outputPath, tsContent, "utf-8");
  console.log(`💾 Saved questions array to ${outputPath}`);
}

async function main() {
  await runDir(BASIC_DIR, BASIC_OUT, "Mathematics Basic");
  await runDir(STANDARD_DIR, STANDARD_OUT, "Mathematics Standard");
}

main().catch(console.error);
