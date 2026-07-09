const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/ai-assistant/page.tsx', 'utf-8');

// 1. Add imports
content = content.replace('import { canAccess, getUserPlan, AI_DOUBT_FREE_LIMIT } from "@/lib/planAccess";',
`import { canAccess, getUserPlan, AI_DOUBT_FREE_LIMIT } from "@/lib/planAccess";
import { ALL_QUESTIONS, SUBJECTS } from "@/data/all-subjects";`);

// 2. Remove subject state, add selectedSubjects and selectedChapters
content = content.replace('const [subject, setSubject] = useState("");',
`const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
    const [selectedChapters, setSelectedChapters] = useState<string[]>([]);`);

// 3. Remove select from header
content = content.replace(/<select[\s\S]*?<\/select>/, '');

// 4. Update askMutation
content = content.replace('subject: subject || undefined', 'subject: undefined');

// 5. Replace trpc.ai.generateFlashcards.useMutation with local function
const trpcHookStr = `const generateFlashcards = trpc.ai.generateFlashcards.useMutation({
        onSuccess: (data) => {
            if (data.flashcards && data.flashcards.length > 0) {
                setFlashcards(data.flashcards);
                setMode("flashcards_active");
                setCurrentCardIndex(0);
                setScore(0);
                setAttempts(0);
                setFeedbackState("idle");
                setSelectedOption(null);
                setFlashcardInput("");
            }
        },
    });`;

const trpcHookReplacement = `const [isGeneratingFlashcards, setIsGeneratingFlashcards] = useState(false);
    
    const generateFlashcards = () => {
        setIsGeneratingFlashcards(true);
        setTimeout(() => {
            const allAvailable = [];
            for (const sub of selectedSubjects) {
                const subData = SUBJECTS.find(s => s.id === sub);
                if (subData) {
                    let subQ = ALL_QUESTIONS[subData.name] || [];
                    if (selectedChapters.length > 0) {
                        subQ = subQ.filter(q => selectedChapters.includes(q.chapter));
                    }
                    allAvailable.push(...subQ);
                }
            }
            
            // Randomly pick up to 10
            const shuffled = allAvailable.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 10);
            
            if (selected.length === 0) {
                setIsGeneratingFlashcards(false);
                alert("No questions found for the selected subjects/chapters.");
                return;
            }
            
            const cards = selected.map(q => ({
                question: q.question,
                options: q.options,
                correctAnswer: q.options[q.correctAnswer],
                explanation: (q as any).explanation || "No further explanation available for this question."
            }));
            
            setFlashcards(cards);
            setMode("flashcards_active");
            setCurrentCardIndex(0);
            setScore(0);
            setAttempts(0);
            setFeedbackState("idle");
            setSelectedOption(null);
            setIsGeneratingFlashcards(false);
        }, 800); // fake delay for UX
    };`;

content = content.replace(trpcHookStr, trpcHookReplacement);

// 6. Replace flashcards_setup UI block
const flashcardsSetupStartStr = `{mode === "flashcards_setup" && (`;
const flashcardsSetupEndStr = `)}

            {/* ── Flashcard Active ── */}`;

const startIndex = content.indexOf(flashcardsSetupStartStr);
const endIndex = content.indexOf(flashcardsSetupEndStr);

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find flashcards setup block");
    process.exit(1);
}

const replacementSetupBlock = `{mode === "flashcards_setup" && (
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center" }}>
                    <div style={{
                        background: "var(--bg-surface)",
                        border: "1px solid var(--bg-border)",
                        borderRadius: 20,
                        padding: "32px",
                        maxWidth: 440,
                        width: "100%",
                    }}>
                        <div style={{
                            width: 48, height: 48, borderRadius: 14,
                            background: "rgba(37,99,235,0.1)", color: "#3B82F6",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 24, marginBottom: 20
                        }}>
                            ⚡
                        </div>
                        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em", marginBottom: 8 }}>
                            Quick Review
                        </h2>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)", marginBottom: 24, lineHeight: 1.5 }}>
                            Select subjects and chapters to generate a quick practice session.
                        </p>
                        
                        <div style={{ marginBottom: 16 }}>
                            <label style={{ display: "block", marginBottom: 8, fontSize: 13, fontWeight: 600 }}>Subjects</label>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                {SUBJECTS.map(s => (
                                    <button
                                        key={s.id}
                                        onClick={() => {
                                            if (selectedSubjects.includes(s.id)) {
                                                setSelectedSubjects(selectedSubjects.filter(id => id !== s.id));
                                                // Remove chapters of this subject
                                                const subChapters = s.chapters.map(c => c.name);
                                                setSelectedChapters(selectedChapters.filter(c => !subChapters.includes(c)));
                                            } else {
                                                setSelectedSubjects([...selectedSubjects, s.id]);
                                            }
                                        }}
                                        style={{
                                            padding: "6px 12px",
                                            borderRadius: "20px",
                                            border: \`1px solid \${selectedSubjects.includes(s.id) ? s.color : "var(--bg-border)"}\`,
                                            background: selectedSubjects.includes(s.id) ? \`\${s.color}22\` : "var(--bg-base)",
                                            color: selectedSubjects.includes(s.id) ? s.color : "var(--text-secondary)",
                                            fontSize: 12,
                                            fontWeight: 600,
                                            cursor: "pointer"
                                        }}
                                    >
                                        {s.icon} {s.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {selectedSubjects.length > 0 && (
                            <div style={{ marginBottom: 24 }}>
                                <label style={{ display: "block", marginBottom: 8, fontSize: 13, fontWeight: 600 }}>Chapters (Optional)</label>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, maxHeight: 150, overflowY: "auto", padding: "4px" }}>
                                    {SUBJECTS.filter(s => selectedSubjects.includes(s.id)).flatMap(s => s.chapters).map((c, i) => (
                                        <button
                                            key={c.id + i}
                                            onClick={() => {
                                                if (selectedChapters.includes(c.name)) {
                                                    setSelectedChapters(selectedChapters.filter(name => name !== c.name));
                                                } else {
                                                    setSelectedChapters([...selectedChapters, c.name]);
                                                }
                                            }}
                                            style={{
                                                padding: "4px 10px",
                                                borderRadius: "16px",
                                                border: \`1px solid \${selectedChapters.includes(c.name) ? "var(--brand-blue)" : "var(--bg-border)"}\`,
                                                background: selectedChapters.includes(c.name) ? "rgba(37,99,235,0.1)" : "var(--bg-base)",
                                                color: selectedChapters.includes(c.name) ? "var(--brand-blue)" : "var(--text-secondary)",
                                                fontSize: 11,
                                                cursor: "pointer"
                                            }}
                                        >
                                            {c.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <button
                            onClick={generateFlashcards}
                            disabled={isGeneratingFlashcards || selectedSubjects.length === 0}
                            className="btn-primary"
                            style={{
                                width: "100%",
                                padding: "14px",
                                fontSize: 14,
                                opacity: (isGeneratingFlashcards || selectedSubjects.length === 0) ? 0.5 : 1,
                                cursor: (isGeneratingFlashcards || selectedSubjects.length === 0) ? "not-allowed" : "pointer",
                            }}
                        >
                            {isGeneratingFlashcards ? "Generating..." : "Generate Questions →"}
                        </button>
                    </div>
                </div>
            `;

content = content.substring(0, startIndex) + replacementSetupBlock + content.substring(endIndex);

// Also replace generateFlashcards.isPending with isGeneratingFlashcards
content = content.replace(/generateFlashcards\.isPending/g, 'isGeneratingFlashcards');

fs.writeFileSync('src/app/dashboard/ai-assistant/page.tsx', content);
