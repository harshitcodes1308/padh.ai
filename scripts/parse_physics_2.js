const fs = require('fs');

const md = fs.readFileSync('public/pdfs/physics mastery/Physics_Guide_GoogleDocs_Ready.md', 'utf-8');

const lines = md.split('\n');

let chapters = [];
let currentChapter = null;
let currentTopic = null;
let currentPYQ = null;

let state = 'NONE'; // NONE, FORMULA, EXPLANATION, SOLUTION

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  if (line.startsWith('# CHAPTER')) {
    const nameMatch = line.match(/# CHAPTER \d+: (.*)/);
    if (nameMatch) {
      currentChapter = {
        id: nameMatch[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
        name: nameMatch[1],
        icon: nameMatch[1].includes('LIGHT') ? '☀️' : nameMatch[1].includes('ELECTRIC') ? '⚡' : '🧲',
        color: nameMatch[1].includes('LIGHT') ? '#F59E0B' : nameMatch[1].includes('ELECTRIC') ? '#3B82F6' : '#8B5CF6',
        topics: []
      };
      chapters.push(currentChapter);
    }
  } else if (line.startsWith('## TOPIC')) {
    const nameMatch = line.match(/## TOPIC \d+\.\d+: (.*)/);
    if (nameMatch && currentChapter) {
      currentTopic = {
        id: nameMatch[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
        name: nameMatch[1],
        formula: '',
        formulaDescription: '',
        solvedExample: { question: '', steps: [], finalAnswer: '' },
        pyqs: [],
        aiTip: 'Remember to check units and sign conventions carefully!'
      };
      currentChapter.topics.push(currentTopic);
    }
  } else if (line === '**Formula:**') {
    state = 'FORMULA';
  } else if (line === '**Brief Explanation:**') {
    state = 'EXPLANATION';
  } else if (line.startsWith('### PYQ')) {
    currentPYQ = {
      year: 2024,
      question: '',
      steps: [],
      finalAnswer: ''
    };
    const yearMatch = line.match(/\((\d{4})/);
    if (yearMatch) {
      currentPYQ.year = parseInt(yearMatch[1]);
    }
    if (currentTopic) currentTopic.pyqs.push(currentPYQ);
    state = 'NONE';
  } else if (line.startsWith('**Question:**')) {
    const q = line.replace('**Question:**', '').trim();
    if (currentPYQ) currentPYQ.question = q;
    else if (currentTopic && !currentTopic.solvedExample.question) currentTopic.solvedExample.question = q;
  } else if (line.startsWith('**Solution:**')) {
    state = 'SOLUTION';
  } else if (line.startsWith('**Answer:**')) {
    const a = line.replace('**Answer:**', '').trim();
    if (currentPYQ) currentPYQ.finalAnswer = a;
    else if (currentTopic) currentTopic.solvedExample.finalAnswer = a;
    state = 'NONE';
  } else if (line.startsWith('**Source:**')) {
    // ignore
  } else {
    if (state === 'FORMULA' && currentTopic) {
      if (line !== '```latex' && line !== '```' && line !== '') {
        currentTopic.formula += line + ' ';
      }
    } else if (state === 'EXPLANATION' && currentTopic) {
      if (line !== '') {
        currentTopic.formulaDescription += line + ' ';
      }
    } else if (state === 'SOLUTION') {
      if (line !== '') {
        let stepLine = line;
        if (line === '```latex' || line === '```') continue;
        if (currentPYQ) {
          currentPYQ.steps.push(stepLine);
        } else if (currentTopic) {
          currentTopic.solvedExample.steps.push(stepLine);
        }
      }
    }
  }
}

// Clean up trailing spaces
chapters.forEach(c => {
  c.topics.forEach(t => {
    t.formula = t.formula.trim();
    if (!t.formula) t.formula = "Refer to description";
    t.formulaDescription = t.formulaDescription.trim();
    if (!t.formulaDescription) t.formulaDescription = "Formula application";
    if (!t.solvedExample.question && t.pyqs.length > 0) {
      t.solvedExample = t.pyqs.shift();
    }
  });
});

const fileContent = `// ⚡ Physics Numerical Mastery - Real Data from PDF
// Structure: Chapter → Topic → Formula → Solved Example → PYQ
// Source: "Physics_Guide_GoogleDocs_Ready.md" - CBSE PYQs

export interface SolvedExample {
  question: string;
  steps: string[];
  finalAnswer: string;
}

export interface PYQQuestion {
  year: number;
  question: string;
  steps: string[];
  finalAnswer: string;
}

export interface NumericalTopic {
  id: string;
  name: string;
  formula: string;
  formulaDescription: string;
  solvedExample: SolvedExample;
  pyqs: PYQQuestion[];
  aiTip?: string;
}

export interface NumericalChapter {
  id: string;
  name: string;
  icon: string;
  color: string;
  topics: NumericalTopic[];
}

export const NUMERICAL_MASTERY_DATA: NumericalChapter[] = ${JSON.stringify(chapters, null, 2)};
`;

fs.writeFileSync('src/data/numerical-mastery-data.ts', fileContent);
console.log('Successfully generated src/data/numerical-mastery-data.ts');
