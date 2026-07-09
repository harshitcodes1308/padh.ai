import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

export function formatMathString(text: string): React.ReactNode {
  if (!text) return text;

  // Replace single newlines with spaces, but keep double newlines (or more) intact.
  // We use a regex that matches a newline not preceded or followed by another newline.
  const normalizedText = text.replace(/(?<!\n)\n(?!\n)/g, ' ');

  // Split text by lines to preserve them
  const lines = normalizedText.split('\n');

  return (
    <>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {formatMathLine(line)}
          {i < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}

function formatMathLine(line: string): React.ReactNode {
  let parts: React.ReactNode[] = [];
  let currentString = line;

  currentString = currentString
    .replace(/\^2/g, '²')
    .replace(/\^3/g, '³')
    .replace(/\^0/g, '⁰')
    .replace(/\^1/g, '¹')
    .replace(/\^4/g, '⁴')
    .replace(/\^5/g, '⁵')
    .replace(/\^6/g, '⁶')
    .replace(/\^7/g, '⁷')
    .replace(/\^8/g, '⁸')
    .replace(/\^9/g, '⁹')
    .replace(/\^-1/g, '⁻¹')
    .replace(/\^-2/g, '⁻²')
    .replace(/\^-3/g, '⁻³')
    .replace(/\^-4/g, '⁻⁴')
    .replace(/\^-5/g, '⁻⁵')
    .replace(/\^-6/g, '⁻⁶')
    .replace(/\^-7/g, '⁻⁷')
    .replace(/\^-8/g, '⁻⁸')
    .replace(/\^-9/g, '⁻⁹')
    .replace(/\^\+1/g, '⁺¹')
    .replace(/\^\+2/g, '⁺²')
    .replace(/sqrt/g, '√');

  const genericPowerRegex = /\^([a-zA-Z0-9\-]+|\([^)]+\))/g;
  let lastIndex = 0;
  let match;
  
  while ((match = genericPowerRegex.exec(currentString)) !== null) {
    if (match.index > lastIndex) {
      parts.push(currentString.substring(lastIndex, match.index));
    }
    let powerContent = match[1];
    if (powerContent.startsWith('(') && powerContent.endsWith(')')) {
      powerContent = powerContent.substring(1, powerContent.length - 1);
    }
    parts.push(<sup key={match.index}>{powerContent}</sup>);
    lastIndex = match.index + match[0].length;
  }
  
  if (lastIndex < currentString.length) {
    parts.push(currentString.substring(lastIndex));
  }
  
  return <>{parts}</>;
}

interface FormatMathTextProps {
  text: string;
  className?: string;
  useLatex?: boolean;
}

export function FormatMathText({ text, className, useLatex = false }: FormatMathTextProps) {
  if (useLatex) {
    let latexText = text;
    // If the text does not contain any latex delimiters, we assume it's raw latex text
    if (!latexText.includes('$')) {
      // 1. Convert markdown bold **...** to \textbf{...}
      latexText = latexText.replace(/\*\*(.*?)\*\*/g, '\\textbf{$1}');
      // 2. Convert spaces to latex spaces (\ ) so they aren't squished in math mode
      latexText = latexText.replace(/ /g, '\\ ');
      // 3. Wrap in block math delimiters
      latexText = `$$${latexText}$$`;
    }

    return (
      <div className={className}>
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {latexText}
        </ReactMarkdown>
      </div>
    );
  }

  return (
    <span className={className}>
      {formatMathString(text)}
    </span>
  );
}
