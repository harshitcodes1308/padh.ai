const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/ai-assistant/page.tsx', 'utf-8');

content = content.replace('SUBJECTS.find((s: any)', '(SUBJECTS as any[]).find((s: any)');
content = content.replace('.map((c, i)', '.map((c: any, i: number)');

fs.writeFileSync('src/app/dashboard/ai-assistant/page.tsx', content);
