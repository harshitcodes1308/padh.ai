import re
import json

fpath = "/Users/harshitsingh/Documents/padhai-cbse/scripts/extracted/History_Chronoscroll.txt"
with open(fpath, "r") as f:
    lines = f.readlines()

events = []
current_event = None
state = "FIND_YEAR"

colors = [
    "rgba(139,92,246,0.15)",
    "rgba(220,38,38,0.15)",
    "rgba(245,158,11,0.15)",
    "rgba(16,185,129,0.15)",
    "rgba(59,130,246,0.15)"
]

for idx, line in enumerate(lines):
    line = line.strip()
    if not line:
        continue
    
    if line.startswith("--- PAGE"):
        continue
        
    if line.startswith("### "):
        if current_event:
            events.append(current_event)
        year = line.replace("###", "").strip()
        current_event = {
            "id": f"ev_pdf_{len(events) + 1}",
            "year": year,
            "title": "",
            "bullets": [],
            "importance": "",
            "recall_question": {
                "question": "",
                "options": [],
                "correct_index": 0
            },
            "status": "unviewed",
            "eraColor": colors[len(events) % len(colors)]
        }
        state = "BODY"
        continue
        
    if not current_event:
        continue
        
    if state == "BODY":
        if line.startswith("**Title:"):
            title = line.replace("**Title:", "").replace("**", "").strip()
            current_event["title"] = title
        elif line.startswith("- "):
            bullet = line.replace("- ", "").strip()
            current_event["bullets"].append(bullet)
        elif "Why This Matters" in line:
            state = "WHY_MATTERS_CONTENT"
        continue
        
    if state == "WHY_MATTERS_CONTENT":
        current_event["importance"] = line.strip()
        state = "FIND_RECALL"
        continue
        
    if state == "FIND_RECALL":
        if "Recall" in line:
            state = "RECALL_QUESTION"
        continue
        
    if state == "RECALL_QUESTION":
        current_event["recall_question"]["question"] = line.strip()
        state = "OPTIONS"
        continue
        
    if state == "OPTIONS":
        m = re.match(r"^A\)\s*(.+?)\s+B\)\s*(.+?)\s+C\)\s*(.+?)\s+D\)\s*(.+)$", line)
        if m:
            opts = [m.group(1).strip(), m.group(2).strip(), m.group(3).strip(), m.group(4).strip()]
            current_event["recall_question"]["options"] = opts
        else:
            parts = re.split(r"[A-D]\)", line)
            opts = [p.strip() for p in parts if p.strip()]
            current_event["recall_question"]["options"] = opts
        state = "ANSWER"
        continue
        
    if state == "ANSWER":
        if "Answer:" in line:
            m = re.search(r"Answer:\s*([A-D])", line)
            if m:
                ans_letter = m.group(1).strip()
                current_event["recall_question"]["correct_index"] = ord(ans_letter) - ord('A')
            state = "FIND_YEAR"
        continue

if current_event:
    events.append(current_event)

print(f"Total events parsed: {len(events)}")
print(json.dumps(events[:3], indent=4))
