const fs = require('fs');

let file = 'src/components/landing/CreatorGallery.tsx';
let content = fs.readFileSync(file, 'utf8');

const newPhotos = `  {
    src: "/landing/creators/popular-1.jpg",
    alt: "Gaurav Sir with a popular creator",
    ratio: "4 / 5",
  },
  {
    src: "/landing/creators/popular-2.jpg",
    alt: "Gaurav Sir with a popular creator",
    ratio: "4 / 5",
  },
  {
    src: "/landing/creators/popular-3.jpg",
    alt: "Gaurav Sir with a popular creator",
    ratio: "4 / 5",
  },
  {
    src: "/landing/creators/popular-4.png",
    alt: "Gaurav Sir with a popular creator",
    ratio: "4 / 5",
  },
];`;

content = content.replace(/];\s*const getPhoto/, newPhotos + '\n\nconst getPhoto');

const newColumns = `const columns = [
  {
    photos: [getPhoto(0), getPhoto(5), getPhoto(8), getPhoto(3)],
    duration: 38,
    reverse: false,
  },
  {
    photos: [getPhoto(11), getPhoto(12), getPhoto(13), getPhoto(14)],
    duration: 44,
    reverse: true,
  },
  {
    photos: [getPhoto(2), getPhoto(7), getPhoto(10), getPhoto(5)],
    duration: 41,
    reverse: false,
  },
];`;

content = content.replace(/const columns = \[[\s\S]*?\];/, newColumns);

fs.writeFileSync(file, content);
console.log('Success');
