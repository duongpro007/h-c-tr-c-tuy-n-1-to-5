"use client";

import { useState } from "react";
import { QuizQuestion } from "@/content/lessons";
import { AccentColor, colorClasses } from "@/lib/colors";
import { markLessonCompleted } from "@/lib/progress";
import { IconCheck, IconClose, IconRefresh, IconTrophy } from "@/components/icons";

export function LessonQuiz({
  questions,
  color,
  lessonKey,
}: {
  questions: QuizQuestion[];
  color: AccentColor;
  lessonKey: string;
}) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const c = colorClasses[color];
  const q = questions[step];

  function choose(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.correctIndex) setScore((s) => s + 1);
  }

  function next() {
    if (step + 1 < questions.length) {
      setStep((s) => s + 1);
      setSelected(null);
    } else {
      setFinished(true);
      markLessonCompleted(lessonKey);
    }
  }

  function restart() {
    setStep(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="clay bg-card p-8 text-center" role="status">
        <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-white ${c.bg}`}>
          <IconTrophy className="h-8 w-8" />
        </span>
        <h3 className="mt-4 font-display text-2xl font-bold">Hoàn thành bài kiểm tra!</h3>
        <p className="mt-2 text-muted-foreground">
          Bé trả lời đúng <strong className={c.text}>{score}/{questions.length}</strong> câu hỏi.
        </p>
        <button
          onClick={restart}
          className="clay-btn mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-muted px-5 py-2.5 font-display font-semibold"
        >
          <IconRefresh className="h-4 w-4" />
          Làm lại
        </button>
      </div>
    );
  }

  return (
    <div className="clay bg-card p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <p className="font-display text-sm font-bold text-muted-foreground">
          Câu {step + 1}/{questions.length}
        </p>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-6 rounded-full ${i <= step ? c.bg : "bg-muted"}`}
            />
          ))}
        </div>
      </div>
      <h3 className="mt-4 font-display text-xl font-bold text-balance">{q.question}</h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {q.options.map((opt, i) => {
          const isCorrect = i === q.correctIndex;
          const isSelected = i === selected;
          let stateClass = "border-border bg-background hover:border-primary/50";
          if (selected !== null) {
            if (isCorrect) stateClass = "border-success bg-success/10";
            else if (isSelected) stateClass = "border-destructive bg-destructive/10";
          }
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={selected !== null}
              className={`clay-sm cursor-pointer flex items-center justify-between gap-2 border-3 px-4 py-3 text-left font-display font-semibold transition-colors ${stateClass}`}
            >
              {opt}
              {selected !== null && isCorrect && <IconCheck className="h-5 w-5 text-success shrink-0" />}
              {selected !== null && isSelected && !isCorrect && (
                <IconClose className="h-5 w-5 text-destructive shrink-0" />
              )}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div className="mt-4 clay-sm bg-muted p-4 text-sm text-foreground/80 bounce-in">
          {q.explanation}
        </div>
      )}
      {selected !== null && (
        <button
          onClick={next}
          className={`clay-btn mt-5 cursor-pointer inline-flex items-center gap-2 rounded-full px-6 py-3 font-display font-semibold text-white ${c.bg}`}
        >
          {step + 1 < questions.length ? "Câu tiếp theo" : "Xem kết quả"}
        </button>
      )}
    </div>
  );
}
