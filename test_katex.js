const katex = require('katex');
const text = "\\textbf{Unit:}\\ Dioptre\\ (D)";
try {
  console.log(katex.renderToString(text));
  console.log("SUCCESS");
} catch (e) {
  console.error(e);
}
