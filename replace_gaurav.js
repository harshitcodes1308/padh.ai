const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // Ignore youtube.com/@GauravSuthar
    const IGNORE_YOUTUBE = 'YOUTUBE_URL_PLACEHOLDER';
    content = content.replace(/youtube\.com\/@GauravSuthar/g, IGNORE_YOUTUBE);

    // Skip Youtube queries by keeping 'Gaurav Suthar' in youtube.ts intact
    if (filePath.includes('youtube.ts') || filePath.includes('study-flow')) {
       // do nothing for youtube.ts queries if we want them to stay effective, but let's see. 
       // User said "in the landing page or in the dashboard wherever".
    } else {
       content = content.replace(/Gaurav Suthar/g, "Gaurav Sir");
    }

    content = content.replace(/Gaurav Bhaiya/gi, "Gaurav Sir");
    content = content.replace(/Gaurav bhaiya/gi, "Gaurav Sir");
    content = content.replace(/Gaurav sir/g, "Gaurav Sir");
    
    // "Gaurav has" -> "Gaurav Sir has"
    content = content.replace(/Gaurav has /g, "Gaurav Sir has ");
    // "Gaurav runs" -> "Gaurav Sir runs"
    content = content.replace(/Gaurav runs/g, "Gaurav Sir runs");
    // "Gaurav teach" -> "Gaurav Sir teach"
    content = content.replace(/Gaurav teach/g, "Gaurav Sir teach");
    // "I'm Gaurav." -> "I'm Gaurav Sir."
    content = content.replace(/I'm Gaurav\./g, "I'm Gaurav Sir.");
    
    // For specific Board-Prep caps:
    if (filePath.includes('FeaturesGrid.tsx')) {
        content = content.replace(/The board-prep system/g, "The Board-Prep system");
    }
    if (filePath.includes('StudentVoices.tsx')) {
        content = content.replace(/board-prep/g, "Board-Prep");
    }
    if (filePath.includes('CreatorGallery.tsx')) {
        content = content.replace(/board-prep/g, "Board-Prep");
    }
    if (filePath.includes('login/page.tsx')) {
        content = content.replace(/board-prep/g, "Board-Prep");
    }

    // Restore Youtube URL
    content = content.replace(new RegExp(IGNORE_YOUTUBE, 'g'), 'youtube.com/@GauravSuthar');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log('Updated', filePath);
    }
  }
});
