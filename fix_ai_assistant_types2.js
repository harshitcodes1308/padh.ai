const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/ai-assistant/page.tsx', 'utf-8');

content = content.replace('const subChapters = s.chapters.map(c => c.name);', 'const subChapters = (s as any).chapters.map((c: any) => c.name);');
content = content.replace('setSelectedChapters(selectedChapters.filter(c => !subChapters.includes(c)));', 'setSelectedChapters(selectedChapters.filter((c: any) => !subChapters.includes(c)));');
content = content.replace('{SUBJECTS.map((s: any) => (', '{(SUBJECTS as any[]).map((s: any) => (');
content = content.replace('{SUBJECTS.map(s => (', '{(SUBJECTS as any[]).map((s: any) => (');

fs.writeFileSync('src/app/dashboard/ai-assistant/page.tsx', content);
