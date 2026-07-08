import fitz
import sys

fpath = "/Users/harshitsingh/Documents/padhai-cbse/public/pdfs/chronoscroll/History Chronoscroll.pdf"
try:
    doc = fitz.open(fpath)
    text = ""
    for i, page in enumerate(doc):
        text += f"--- PAGE {i+1} ---\n"
        text += page.get_text() + "\n"
    print(text)
except Exception as e:
    print(f"Error: {e}", file=sys.stderr)
