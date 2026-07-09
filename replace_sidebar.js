const fs = require('fs');
let file = 'src/components/layout/dashboard-sidebar.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/<PadhLogo size=\{28\} \/>\s*<div>\s*<div style=\{\{[\s\S]*?PADH\.AI\s*<\/div>\s*<div style=\{\{[\s\S]*?Beta\s*<\/div>\s*<\/div>/, "<img src=\"/logo.png\" alt=\"PADH.AI\" style={{ height: 40, width: 'auto' }} />");

fs.writeFileSync(file, content);
console.log('Success');
