const fs = require('fs');
let file = 'src/components/landing/FeaturesGrid.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace('"use client";', '"use client";\n\nimport { useEffect, useRef } from "react";');

fs.writeFileSync(file, content);
console.log('Fixed react import');
