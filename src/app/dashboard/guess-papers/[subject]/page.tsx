"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { getSubjectById, READING_TIME_MINUTES, formatTime } from "@/data/tyq-config";
import { getRandomPaper, getAnswerKey, TYQPaper, TYQAnswerKey } from "@/data/tyq-papers";

type Phase = "intro" | "reading" | "transition" | "exam" | "answers" | "questions";

export default function TYQExamPage() {
  const params = useParams();
  const router = useRouter();
  const subjectId = params.subject as string;
  const subject = getSubjectById(subjectId);

  const [phase, setPhase] = useState<Phase>("intro");
  const [paper, setPaper] = useState<TYQPaper | null>(null);
  const [answerKey, setAnswerKey] = useState<TYQAnswerKey | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Load random paper on mount
  useEffect(() => {
    if (subjectId) {
      const randomPaper = getRandomPaper(subjectId);
      if (randomPaper) {
        setPaper(randomPaper);
        const answers = getAnswerKey(subjectId, randomPaper.paperNumber);
        setAnswerKey(answers);
      }
    }
  }, [subjectId]);

  // Timer logic
  useEffect(() => {
    if (isTimerRunning && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (isTimerRunning && timeLeft === 0) {
      setIsTimerRunning(false);
      if (phase === "reading") {
        setPhase("transition");
      } else if (phase === "exam") {
        setPhase("answers");
      }
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isTimerRunning, timeLeft, phase]);

  const startReadingTime = useCallback(() => {
    setTimeLeft(READING_TIME_MINUTES * 60);
    setIsTimerRunning(true);
    setPhase("reading");
  }, []);

  const skipReadingTime = useCallback(() => {
    setIsTimerRunning(false);
    setPhase("transition");
  }, []);

  const startExam = useCallback(() => {
    if (!subject) return;
    setTimeLeft(subject.examDuration * 60);
    setIsTimerRunning(true);
    setPhase("exam");
  }, [subject]);

  const endExamEarly = useCallback(() => {
    if (window.confirm("Are you sure you want to end the exam? The answer key will be shown.")) {
      setIsTimerRunning(false);
      setPhase("answers");
    }
  }, []);

  const startNewTest = useCallback(() => {
    const randomPaper = getRandomPaper(subjectId);
    if (randomPaper) {
      setPaper(randomPaper);
      const answers = getAnswerKey(subjectId, randomPaper.paperNumber);
      setAnswerKey(answers);
    }
    setPhase("intro");
  }, [subjectId]);

  if (!subject) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h2 style={{ color: "#EF4444" }}>Subject not found</h2>
        <button onClick={() => router.push("/dashboard/guess-papers")}
          style={{ marginTop: 16, padding: "12px 24px", background: "var(--brand-green)", color: "var(--text-primary)", border: "none", borderRadius: 12, cursor: "pointer" }}>
          ← Back to Guess Papers
        </button>
      </div>
    );
  }

  // =============================================
  // PHASE 1: INTRO
  // =============================================
  if (phase === "intro") {
    return (
      <div style={{ padding: "32px 24px", maxWidth: 700, margin: "0 auto" }}>
        <button onClick={() => router.push("/dashboard/guess-papers")}
          style={{
            background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer",
            fontSize: 14, marginBottom: 24, display: "flex", alignItems: "center", gap: 6,
          }}>
          ← Back to Subjects
        </button>

        <div style={{
          background: "linear-gradient(135deg, rgba(8,189,128,0.10), rgba(45,129,247,0.05))",
          border: "1px solid rgba(8,189,128,0.12)",
          borderRadius: 20,
          padding: "48px 36px",
          textAlign: "center",
        }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>{subject.icon}</div>
          <h1 style={{
            fontSize: 28, fontWeight: 800, color: "var(--text-primary)", marginBottom: 8,
          }}>
            {subject.name}
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 32 }}>
            CBSE 2026 Specimen Paper Practice
          </p>

          {/* Exam Info Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32, maxWidth: 400, margin: "0 auto 32px" }}>
            <div style={{
              background: "rgba(0,0,0,0.3)", borderRadius: 12, padding: "16px 12px",
            }}>
              <div style={{ fontSize: 11, color: "var(--text-secondary)", marginBottom: 4 }}>Reading Time</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "var(--brand-green)" }}>{READING_TIME_MINUTES} min</div>
            </div>
            <div style={{
              background: "rgba(0,0,0,0.3)", borderRadius: 12, padding: "16px 12px",
            }}>
              <div style={{ fontSize: 11, color: "var(--text-secondary)", marginBottom: 4 }}>Exam Duration</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#2D81F7" }}>
                {subject.examDuration === 180 ? "3 Hours" : "2h 30m"}
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div style={{
            background: "rgba(0,0,0,0.2)", borderRadius: 14, padding: "20px 24px",
            textAlign: "left", marginBottom: 32,
          }}>
            <h3 style={{ color: "#E5E7EB", fontSize: 14, fontWeight: 700, marginBottom: 12 }}>
              📋 Instructions
            </h3>
            <ul style={{ color: "var(--text-muted)", fontSize: 13, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
              <li>You will be given <strong style={{ color: "var(--brand-green)" }}>{READING_TIME_MINUTES} minutes</strong> to read the question paper.</li>
              <li>Do <strong style={{ color: "#EF4444" }}>not</strong> start writing during reading time.</li>
              <li>After reading time, you have <strong style={{ color: "#2D81F7" }}>
                {subject.examDuration === 180 ? "3 hours" : "2 hours 30 minutes"}
              </strong> to complete the exam.</li>
              <li>Write your answers on <strong style={{ color: "#F59E0B" }}>paper</strong> — this is a display-only mode.</li>
              <li>The answer key will be shown after the exam timer ends.</li>
            </ul>
          </div>

          {/* Start Button */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={startReadingTime}
              style={{
                padding: "16px 48px",
                background: "linear-gradient(135deg, #08BD80, #08BD80)",
                color: "var(--text-primary)",
                border: "none",
                borderRadius: 14,
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(8,189,128,0.24)",
                transition: "all 0.3s",
              }}
            >
              👀 Start Reading Time
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =============================================
  // PHASE 2: READING TIME (15 min)
  // =============================================
  if (phase === "reading") {
    return (
      <div style={{ padding: "0 24px 40px", maxWidth: 900, margin: "0 auto" }}>
        {/* Sticky Timer Bar */}
        <div style={{
          position: "sticky", top: 0, zIndex: 50,
          background: "linear-gradient(135deg, #FFFFFF, #F1F5F4)",
          borderBottom: "1px solid rgba(8,189,128,0.24)",
          padding: "16px 24px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginBottom: 24, borderRadius: "0 0 16px 16px",
          backdropFilter: "blur(12px)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              background: "rgba(8,189,128,0.12)", padding: "4px 12px",
              borderRadius: 8, fontSize: 12, fontWeight: 600, color: "var(--brand-green)",
            }}>
              📖 READING TIME
            </span>
            <span style={{ color: "var(--text-muted)", fontSize: 13 }}>{subject.name}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{
              fontSize: 28, fontWeight: 800, fontFamily: "monospace",
              color: timeLeft <= 60 ? "#EF4444" : "var(--brand-green)",
              textShadow: timeLeft <= 60 ? "0 0 12px rgba(239,68,68,0.5)" : "none",
              animation: timeLeft <= 60 ? "pulse 1s infinite" : "none",
            }}>
              {formatTime(timeLeft)}
            </div>
            <button
              onClick={skipReadingTime}
              style={{
                padding: "8px 14px", background: "rgba(8,189,128,0.10)",
                border: "1px solid rgba(8,189,128,0.24)", borderRadius: 8,
                color: "var(--brand-green)", fontSize: 12, fontWeight: 600, cursor: "pointer",
              }}
            >
              Skip →
            </button>
          </div>
        </div>

        {/* Paper Content */}
        {paper && <PaperDisplay paper={paper} />}

        {/* Pulse animation */}
        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }
        `}</style>
      </div>
    );
  }

  // =============================================
  // PHASE 3: TRANSITION POPUP
  // =============================================
  if (phase === "transition") {
    return (
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 1000,
      }}>
        <div style={{
          background: "linear-gradient(135deg, #FFFFFF, #F7F9FA)",
          border: "1px solid rgba(8,189,128,0.24)",
          borderRadius: 24, padding: "48px 40px",
          textAlign: "center", maxWidth: 480, width: "90%",
          boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
        }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>⏰</div>
          <h2 style={{
            fontSize: 28, fontWeight: 800, color: "var(--text-primary)", marginBottom: 8,
          }}>
            Reading Time Over!
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: 8 }}>
            Your {READING_TIME_MINUTES}-minute reading period has ended.
          </p>
          <p style={{ color: "#E5E7EB", fontSize: 16, fontWeight: 600, marginBottom: 32 }}>
            You have{" "}
            <span style={{ color: "#2D81F7" }}>
              {subject.examDuration === 180 ? "3 hours" : "2 hours 30 minutes"}
            </span>{" "}
            to complete the exam.
          </p>

          <button
            onClick={startExam}
            style={{
              padding: "18px 56px",
              background: "linear-gradient(135deg, #2D81F7, #08BD80)",
              color: "var(--text-primary)",
              border: "none",
              borderRadius: 14,
              fontSize: 18,
              fontWeight: 800,
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(45,129,247,0.18)",
              transition: "all 0.3s",
              letterSpacing: 0.5,
            }}
          >
            🚀 Let&apos;s Start!
          </button>
        </div>
      </div>
    );
  }

  // =============================================
  // PHASE 4: EXAM MODE
  // =============================================
  if (phase === "exam") {
    const isLowTime = timeLeft <= 600; // 10 minutes
    const isCriticalTime = timeLeft <= 120; // 2 minutes

    return (
      <div style={{ padding: "0 24px 40px", maxWidth: 900, margin: "0 auto" }}>
        {/* Sticky Timer Bar */}
        <div style={{
          position: "sticky", top: 0, zIndex: 50,
          background: isCriticalTime
            ? "linear-gradient(135deg, #3B1111, #2A0A0A)"
            : isLowTime
            ? "linear-gradient(135deg, #2A1A0A, #1A1A0A)"
            : "linear-gradient(135deg, #FFFFFF, #F1F5F4)",
          borderBottom: `1px solid ${isCriticalTime ? "rgba(239,68,68,0.5)" : isLowTime ? "rgba(245,158,11,0.3)" : "rgba(45,129,247,0.18)"}`,
          padding: "16px 24px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginBottom: 24, borderRadius: "0 0 16px 16px",
          backdropFilter: "blur(12px)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              background: isCriticalTime ? "rgba(239,68,68,0.2)" : "rgba(45,129,247,0.14)",
              padding: "4px 12px",
              borderRadius: 8, fontSize: 12, fontWeight: 600,
              color: isCriticalTime ? "#EF4444" : "#2D81F7",
            }}>
              ✍️ EXAM IN PROGRESS
            </span>
            <span style={{ color: "var(--text-muted)", fontSize: 13 }}>{subject.name}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{
              fontSize: 28, fontWeight: 800, fontFamily: "monospace",
              color: isCriticalTime ? "#EF4444" : isLowTime ? "#F59E0B" : "#2D81F7",
              textShadow: isCriticalTime ? "0 0 12px rgba(239,68,68,0.5)" : "none",
              animation: isCriticalTime ? "pulse 1s infinite" : "none",
            }}>
              {formatTime(timeLeft)}
            </div>
            <button
              onClick={endExamEarly}
              style={{
                padding: "8px 16px", background: "rgba(239,68,68,0.15)",
                border: "1px solid rgba(239,68,68,0.3)", borderRadius: 8,
                color: "#EF4444", fontSize: 12, fontWeight: 600, cursor: "pointer",
              }}
            >
              End Exam
            </button>
          </div>
        </div>

        {/* Paper Content */}
        {paper && <PaperDisplay paper={paper} />}

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }
        `}</style>
      </div>
    );
  }

  // =============================================
  // PHASE 5: ANSWER KEY
  // =============================================
  if (phase === "answers") {
    return (
      <div style={{ padding: "32px 24px", maxWidth: 900, margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))",
          border: "1px solid rgba(16,185,129,0.2)",
          borderRadius: 20, padding: "32px 28px",
          textAlign: "center", marginBottom: 32,
        }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>
            Exam Complete — Answer Key
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 16 }}>
            {subject.name} • Specimen Paper {paper?.paperNumber}
          </p>
          <button
            onClick={() => setPhase("questions")}
            style={{
              padding: "10px 24px",
              background: "rgba(8,189,128,0.12)",
              color: "var(--brand-green)", border: "1px solid rgba(8,189,128,0.18)", borderRadius: 10,
              fontSize: 13, fontWeight: 700, cursor: "pointer",
            }}
          >
            📄 View Question Paper
          </button>
        </div>

        {/* Answer Key Display */}
        {answerKey && (
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 16, overflow: "hidden",
          }}>
            {/* Table Header */}
            <div style={{
              display: "grid", gridTemplateColumns: "80px 1fr 2fr",
              padding: "14px 20px",
              background: "rgba(8,189,128,0.08)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--brand-green)", textTransform: "uppercase" }}>Q. No.</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--brand-green)", textTransform: "uppercase" }}>Answer</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--brand-green)", textTransform: "uppercase" }}>Explanation</div>
            </div>

            {/* Answer Rows */}
            {answerKey.answers.map((answer, idx) => (
              <div key={idx} style={{
                display: "grid", gridTemplateColumns: "80px 1fr 2fr",
                padding: "14px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                background: idx % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
              }}>
                <div style={{
                  fontSize: 14, fontWeight: 700, color: "#E5E7EB",
                  display: "flex", alignItems: "flex-start",
                }}>
                  {answer.questionNumber}
                </div>
                <div style={{
                  fontSize: 14, fontWeight: 600, color: "#10B981",
                  display: "flex", alignItems: "flex-start",
                }}>
                  {answer.answer}
                </div>
                <div style={{
                  fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5,
                }}>
                  {answer.explanation}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
          <button
            onClick={() => setPhase("questions")}
            style={{
              padding: "14px 36px",
              background: "rgba(8,189,128,0.12)",
              color: "var(--brand-green)", border: "1px solid rgba(8,189,128,0.18)", borderRadius: 12,
              fontSize: 14, fontWeight: 700, cursor: "pointer",
            }}
          >
            📄 View Question Paper
          </button>
          <button
            onClick={() => router.push("/dashboard/guess-papers")}
            style={{
              padding: "14px 36px",
              background: "linear-gradient(135deg, #2D81F7, #08BD80)",
              color: "var(--text-primary)", border: "none", borderRadius: 12,
              fontSize: 14, fontWeight: 700, cursor: "pointer",
              boxShadow: "0 8px 24px rgba(45,129,247,0.14)",
            }}
          >
            🔄 Start New Test
          </button>
        </div>
      </div>
    );
  }

  // =============================================
  // PHASE 6: QUESTION PAPER REFERENCE (from answers)
  // =============================================
  if (phase === "questions") {
    return (
      <div style={{ padding: "32px 24px", maxWidth: 900, margin: "0 auto" }}>
        {/* Header with Back to Answers */}
        <div style={{
          position: "sticky", top: 0, zIndex: 50,
          background: "linear-gradient(135deg, #FFFFFF, #F1F5F4)",
          borderBottom: "1px solid rgba(8,189,128,0.24)",
          padding: "16px 24px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginBottom: 24, borderRadius: "0 0 16px 16px",
          backdropFilter: "blur(12px)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              background: "rgba(8,189,128,0.12)", padding: "4px 12px",
              borderRadius: 8, fontSize: 12, fontWeight: 600, color: "var(--brand-green)",
            }}>
              📄 QUESTION PAPER
            </span>
            <span style={{ color: "var(--text-muted)", fontSize: 13 }}>
              {subject.name} • Paper {paper?.paperNumber}
            </span>
          </div>
          <button
            onClick={() => setPhase("answers")}
            style={{
              padding: "8px 18px", background: "rgba(16,185,129,0.15)",
              border: "1px solid rgba(16,185,129,0.3)", borderRadius: 8,
              color: "#10B981", fontSize: 12, fontWeight: 600, cursor: "pointer",
            }}
          >
            ← Back to Answers
          </button>
        </div>

        {/* Paper Content */}
        {paper && <PaperDisplay paper={paper} />}

        {/* Bottom Back Button */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <button
            onClick={() => setPhase("answers")}
            style={{
              padding: "14px 36px",
              background: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.1))",
              color: "#10B981", border: "1px solid rgba(16,185,129,0.25)", borderRadius: 12,
              fontSize: 14, fontWeight: 700, cursor: "pointer",
            }}
          >
            ✅ Back to Answer Key
          </button>
        </div>
      </div>
    );
  }

  return null;
}

// ==========================================
// QUESTION PAPER DISPLAY COMPONENT
// ==========================================
function PaperDisplay({ paper }: { paper: TYQPaper }) {
  return (
    <div>
      {/* Paper Header */}
      <div style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16, padding: "28px 24px",
        textAlign: "center", marginBottom: 24,
      }}>
        <div style={{ fontSize: 11, color: "var(--text-secondary)", letterSpacing: 2, marginBottom: 8, textTransform: "uppercase" }}>
          Indian Certificate of Secondary Education Examination
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 4 }}>
          {paper.subject}
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: 13, margin: 0 }}>
          Specimen Paper {paper.paperNumber} • {paper.year}
        </p>
        <div style={{
          display: "flex", justifyContent: "center", gap: 24, marginTop: 16,
          fontSize: 13, color: "var(--text-secondary)",
        }}>
          <span>Maximum Marks: <strong style={{ color: "#E5E7EB" }}>{paper.totalMarks}</strong></span>
        </div>
      </div>

      {/* Sections */}
      {paper.sections.map((section, sIdx) => (
        <div key={sIdx} style={{ marginBottom: 32 }}>
          {/* Section Header */}
          <div style={{
            background: "rgba(8,189,128,0.08)",
            border: "1px solid rgba(8,189,128,0.10)",
            borderRadius: 12, padding: "14px 20px",
            marginBottom: 16,
          }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--brand-green)", margin: 0 }}>
              {section.name}
            </h3>
            <p style={{ fontSize: 12, color: "var(--text-muted)", margin: "4px 0 0" }}>
              {section.instructions}
            </p>
          </div>

          {/* Questions */}
          {section.questions.map((question, qIdx) => (
            <div key={qIdx} style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 14, padding: "20px 24px",
              marginBottom: 12,
            }}>
              {/* Question Header */}
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                marginBottom: question.text ? 12 : 0,
              }}>
                <div style={{ display: "flex", gap: 8, flex: 1 }}>
                  <span style={{
                    background: "rgba(8,189,128,0.10)", color: "var(--brand-green)",
                    padding: "2px 10px", borderRadius: 6,
                    fontSize: 13, fontWeight: 700, flexShrink: 0,
                  }}>
                    Q{question.number}
                  </span>
                  {question.text && (
                    <span style={{ fontSize: 14, color: "#E5E7EB", lineHeight: 1.6 }}>
                      {question.text}
                    </span>
                  )}
                </div>
                <span style={{
                  fontSize: 11, color: "var(--text-secondary)", flexShrink: 0, marginLeft: 8,
                  background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: 4,
                }}>
                  [{question.marks}]
                </span>
              </div>

              {/* Options (for MCQ main question) */}
              {question.options && (
                <div style={{ marginTop: 12, paddingLeft: 36 }}>
                  {question.options.map((opt, oIdx) => (
                    <div key={oIdx} style={{
                      padding: "8px 14px", marginBottom: 6,
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.04)",
                      borderRadius: 8, fontSize: 13, color: "var(--text-secondary)",
                    }}>
                      {String.fromCharCode(65 + oIdx)}. {opt}
                    </div>
                  ))}
                </div>
              )}

              {/* Sub-Questions */}
              {question.subQuestions && question.subQuestions.map((sub, sIdx) => (
                <div key={sIdx} style={{
                  padding: "12px 16px", marginTop: 8, marginLeft: 24,
                  background: "rgba(255,255,255,0.01)",
                  borderLeft: "2px solid rgba(8,189,128,0.10)",
                  borderRadius: "0 8px 8px 0",
                }}>
                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "flex-start", marginBottom: sub.options ? 10 : 0,
                  }}>
                    <div style={{ display: "flex", gap: 8, flex: 1 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: "var(--brand-green)", flexShrink: 0 }}>
                        {sub.number}
                      </span>
                      <span style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>
                        {sub.text}
                      </span>
                    </div>
                    <span style={{
                      fontSize: 10, color: "var(--text-secondary)", flexShrink: 0, marginLeft: 8,
                    }}>
                      [{sub.marks}]
                    </span>
                  </div>

                  {/* Sub-question options */}
                  {sub.options && (
                    <div style={{ marginTop: 8, paddingLeft: 28 }}>
                      {sub.options.map((opt, oIdx) => (
                        <div key={oIdx} style={{
                          padding: "6px 12px", marginBottom: 4,
                          background: "rgba(255,255,255,0.02)",
                          borderRadius: 6, fontSize: 12, color: "var(--text-muted)",
                        }}>
                          ({String.fromCharCode(97 + oIdx)}) {opt}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
