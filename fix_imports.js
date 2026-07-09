const fs = require('fs');
let file = 'src/components/landing/FeaturesGrid.tsx';
let content = fs.readFileSync(file, 'utf8');

const imports = `import {
  Bot,
  Route,
  Clock3,
  Target,
  FileQuestion,
  CalendarCheck,
  NotebookTabs,
  SlidersHorizontal,
  Focus
} from "lucide-react";`;

content = content.replace(/import \{[\s\S]*?\} from "lucide-react";/m, imports);

fs.writeFileSync(file, content);
console.log('Fixed imports');
