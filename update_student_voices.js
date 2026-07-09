const fs = require('fs');

let file = 'src/components/landing/StudentVoices.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace StudentComment type
content = content.replace(/type StudentComment = {[\s\S]*?};/, `type StudentComment = {
  src: string;
};`);

// Replace comments array
content = content.replace(/const comments: StudentComment\[\] = \[[\s\S]*?\];/, `const comments: StudentComment[] = Array.from({ length: 10 }, (_, i) => ({
  src: \`/landing/student-voices/comment-\${i + 1}.jpeg\`,
}));`);

// Replace CommentCard
content = content.replace(/function CommentCard\(\{ comment, hidden \}: \{ comment: StudentComment; hidden\?: boolean \}\) \{[\s\S]*?return \([\s\S]*?<article className="sa-student-comment-card" aria-hidden=\{hidden\}>[\s\S]*?<\/article>\s*\);\s*\}/, `function CommentCard({ comment, hidden }: { comment: StudentComment; hidden?: boolean }) {
  return (
    <article className="sa-student-comment-card" aria-hidden={hidden} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <img src={comment.src} alt="Student Voice" style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
    </article>
  );
}`);

// Change unused icons import
content = content.replace(/import { MessageCircle, ThumbsUp, Volume2, VolumeX } from "lucide-react";/, 'import { Volume2, VolumeX } from "lucide-react";');

fs.writeFileSync(file, content);
console.log('Success');
