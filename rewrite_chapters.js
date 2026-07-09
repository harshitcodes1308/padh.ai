const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    'src/lib/chapter-normalizer.ts',
    'src/data/precision-social-science.ts',
    'src/lib/cbse-data.ts',
    'src/lib/test-generator.ts',
    'src/app/dashboard/precision-practice/page.tsx'
];

for (const file of filesToUpdate) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        content = content.replace(/Political Science/g, 'Civics');
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated ${file}`);
    }
}
