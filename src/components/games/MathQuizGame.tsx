"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { colorClasses } from "@/lib/colors";
import { getBestScore, saveBestScore } from "@/lib/progress";
import { IconArrowRight, IconClock, IconRefresh, IconSparkles, IconStar, IconTrophy } from "@/components/icons";

const GAME_SLUG = "do-vui-toan-hoc";
const ROUND_SECONDS = 60;
const c = colorClasses.blue;

interface Question {
  text: string;
  answer: number;
  options: number[];
}

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildOptions(answer: number, spread: number): number[] {
  const set = new Set<number>([answer]);
  while (set.size < 4) {
    const delta = randInt(-spread, spread) || 1;
    const candidate = answer + delta;
    if (candidate >= 0) set.add(candidate);
  }
  const arr = Array.from(set);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function generateQuestion(level: number): Question {
  if (level <= 2) {
    const max = level === 1 ? 10 : 50;
    const a = randInt(1, max);
    const b = randInt(1, max);
    const isAdd = Math.random() > 0.4;
    if (isAdd) {
      return { text: `${a} + ${b} = ?`, answer: a + b, options: buildOptions(a + b, 6) };
    }
    const big = Math.max(a, b);
    const small = Math.min(a, b);
    return { text: `${big} - ${small} = ?`, answer: big - small, options: buildOptions(big - small, 6) };
  }
  if (level === 3) {
    const a = randInt(2, 9);
    const b = randInt(2, 9);
    if (Math.random() > 0.5) {
      return { text: `${a} × ${b} = ?`, answer: a * b, options: buildOptions(a * b, 10) };
    }
    const product = a * b;
    return { text: `${product} : ${a} = ?`, answer: b, options: buildOptions(b, 4) };
  }
  // level 4-5
  const a = randInt(10, level === 4 ? 200 : 999);
  const b = randInt(10, level === 4 ? 99 : 200);
  const op = Math.random();
  if (op < 0.4) return { text: `${a} + ${b} = ?`, answer: a + b, options: buildOptions(a + b, 20) };
  if (op < 0.75) {
    const big = Math.max(a, b);
    const small = Math.min(a, b);
    return { text: `${big} - ${small} = ?`, answer: big - small, options: buildOptions(big - small, 20) };
  }
  const m = randInt(2, 9);
  const n = randInt(2, level === 4 ? 20 : 50);
  return { text: `${n} × ${m} = ?`, answer: n * m, options: buildOptions(n * m, 15) };
}

export function MathQuizGame() {
  const [level, setLevel] = useState<number | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [status, setStatus] = useState<"idle" | "playing" | "over">("idle");
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps -- recompute after a round ends so the saved best score shows up
  const best = useMemo(() => (typeof window !== "undefined" ? getBestScore(GAME_SLUG) : 0), [status]);

  const nextQuestion = useCallback((lvl: number) => {
    setQuestion(generateQuestion(lvl));
    setFeedback(null);
  }, []);

  function start(lvl: number) {
    setLevel(lvl);
    setScore(0);
    setStreak(0);
    setTimeLeft(ROUND_SECONDS);
    setStatus("playing");
    nextQuestion(lvl);
  }

  useEffect(() => {
    if (status !== "playing") return;
    if (timeLeft <= 0) {
      // Countdown reaching zero ends the round; this is the natural place to react to that.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStatus("over");
      saveBestScore(GAME_SLUG, score);
      return;
    }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [status, timeLeft, score]);

  function answer(value: number) {
    if (!question || feedback) return;
    if (value === question.answer) {
      setFeedback("correct");
      setScore((s) => s + 10 + Math.min(streak, 5) * 2);
      setStreak((s) => s + 1);
    } else {
      setFeedback("wrong");
      setStreak(0);
    }
    setTimeout(() => level && nextQuestion(level), 550);
  }

  if (status === "idle") {
    return (
      <div className="clay bg-card p-6 sm:p-10 text-center">
        <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-white ${c.bg}`}>
          <IconStar className="h-8 w-8" />
        </span>
        <h2 className="mt-4 font-display text-2xl font-bold">Chọn cấp độ để bắt đầu</h2>
        <p className="mt-2 text-muted-foreground">
          Trả lời càng nhiều câu đúng càng tốt trong {ROUND_SECONDS} giây!
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5 max-w-lg mx-auto">
          {[1, 2, 3, 4, 5].map((lvl) => (
            <button
              key={lvl}
              onClick={() => start(lvl)}
              className={`clay-btn cursor-pointer rounded-2xl py-4 font-display font-bold text-white ${c.bg}`}
            >
              Lớp {lvl}
            </button>
          ))}
        </div>
        {best > 0 && (
          <p className="mt-6 text-sm text-muted-foreground">
            Điểm cao nhất của bạn: <strong className={c.text}>{best}</strong>
          </p>
        )}
      </div>
    );
  }

  if (status === "over") {
    return (
      <div className="clay bg-card p-8 sm:p-10 text-center">
        <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-white ${c.bg}`}>
          <IconTrophy className="h-8 w-8" />
        </span>
        <h2 className="mt-4 font-display text-2xl font-bold">Hết giờ!</h2>
        <p className="mt-2 text-muted-foreground">
          Bạn đạt <strong className={c.text}>{score}</strong> điểm.{" "}
          {score >= best && score > 0 ? "Kỷ lục mới!" : `Điểm cao nhất: ${Math.max(best, score)}`}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => level && start(level)}
            className={`clay-btn cursor-pointer inline-flex items-center gap-2 rounded-full px-6 py-3 font-display font-semibold text-white ${c.bg}`}
          >
            <IconRefresh className="h-4 w-4" /> Chơi lại
          </button>
          <button
            onClick={() => setStatus("idle")}
            className="clay-btn cursor-pointer inline-flex items-center gap-2 rounded-full bg-muted px-6 py-3 font-display font-semibold"
          >
            Đổi cấp độ <IconArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="clay bg-card p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-display font-bold text-white ${c.bg}`}>
          <IconStar className="h-4 w-4" /> {score} điểm
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 font-display font-bold">
          <IconClock className="h-4 w-4" /> {timeLeft}s
        </span>
        {streak >= 2 && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/20 px-3 py-1.5 font-display font-bold text-secondary">
            <IconSparkles className="h-4 w-4" /> Chuỗi {streak}
          </span>
        )}
      </div>

      <div className="mt-8 text-center">
        <p className="font-display text-4xl sm:text-5xl font-extrabold text-balance">{question?.text}</p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
        {question?.options.map((opt) => {
          let stateClass = "border-border bg-background hover:border-primary/50";
          if (feedback && opt === question.answer) stateClass = "border-success bg-success/10";
          else if (feedback === "wrong" && opt !== question.answer) stateClass = "opacity-50";
          return (
            <button
              key={opt}
              onClick={() => answer(opt)}
              disabled={!!feedback}
              className={`clay-sm cursor-pointer border-3 py-4 font-display text-2xl font-bold transition-colors ${stateClass}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
