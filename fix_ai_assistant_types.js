const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/ai-assistant/page.tsx', 'utf-8');

// Replace map(s => with map((s: any) =>
content = content.replace('{SUBJECTS.map(s => (', '{SUBJECTS.map((s: any) => (');

content = content.replace('{SUBJECTS.filter(s => selectedSubjects.includes(s.id)).flatMap(s => s.chapters).map((c, i) => (', '{SUBJECTS.filter((s: any) => selectedSubjects.includes(s.id)).flatMap((s: any) => s.chapters).map((c: any, i: number) => (');

fs.writeFileSync('src/app/dashboard/ai-assistant/page.tsx', content);
