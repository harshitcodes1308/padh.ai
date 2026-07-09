const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/ai-assistant/page.tsx', 'utf-8');

content = content.replace('{mode === "chat" && (\n                        \n                    )}', '');

fs.writeFileSync('src/app/dashboard/ai-assistant/page.tsx', content);
