"use client";

import { useEffect, useMemo, useState } from "react";
import { colorClasses } from "@/lib/colors";
import { getBestScore, saveBestScore } from "@/lib/progress";
import { IconArrowRight, IconClock, IconRefresh, IconStar, IconTrophy } from "@/components/icons";

const GAME_SLUG = "do-vui-tieng-viet";
const ROUNDS = 6;
const c = colorClasses.amber;

const WORD_BANK: { word: string; hint: string }[] = [
  { word: "sách", hint: "Vật dùng để đọc, có nhiều trang giấy in chữ." },
  { word: "bút", hint: "Dùng để viết chữ vào vở." },
  { word: "trường", hint: "Nơi em đến học mỗi ngày." },
  { word: "hoa", hint: "Có nhiều màu sắc, thường mọc trên cây." },
  { word: "mèo", hint: "Con vật nuôi hay kêu 'meo meo'." },
  { word: "sao", hint: "Xuất hiện lấp lánh trên bầu trời đêm." },
  { word: "biển", hint: "Nơi có rất nhiều nước mặn và sóng." },
  { word: "trăng", hint: "Tròn và sáng trên bầu trời đêm rằm." },
  { word: "sông", hint: "Dòng nước chảy dài từ núi ra biển." },
  { word: "nhà", hint: "Nơi gia đình em sinh sống." },
  { word: "bạn", hint: "Người cùng chơi, cùng học với em." },
  { word: "chim", hint: "Loài vật biết bay và có lông vũ." },
];

function shuffleLetters(word: string): string[] {
  const letters = Array.from(word);
  const shuffled = [...letters];
  let attempts = 0;
  do {
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    attempts++;
  } while (shuffled.join("") === word && attempts < 10);
  return shuffled;
}

function pickRound(usedIndexes: Set<number>) {
  const available = WORD_BANK.map((_, i) => i).filter((i) => !usedIndexes.has(i));
  const pool = available.length > 0 ? available : WORD_BANK.map((_, i) => i);
  const idx = pool[Math.floor(Math.random() * pool.length)];
  return { idx, item: WORD_BANK[idx], tiles: shuffleLetters(WORD_BANK[idx].word) };
}

export function WordPuzzleGame() {
  const [status, setStatus] = useState<"idle" | "playing" | "over">("idle");
  const [round, setRound] = useState(0);
  const [used, setUsed] = useState<Set<number>>(new Set());
  const [current, setCurrent] = useState<ReturnType<typeof pickRound> | null>(null);
  const [answer, setAnswer] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps -- recompute after a round ends so the saved best score shows up
  const best = useMemo(() => (typeof window !== "undefined" ? getBestScore(GAME_SLUG) : 0), [status]);

  useEffect(() => {
    if (status !== "playing") return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [status]);

  function start() {
    const first = pickRound(new Set());
    setUsed(new Set([first.idx]));
    setCurrent(first);
    setAnswer([]);
    setRound(1);
    setScore(0);
    setSeconds(0);
    setFeedback(null);
    setStatus("playing");
  }

  function selectTile(tileIndex: number) {
    if (feedback || !current) return;
    if (answer.includes(tileIndex)) return;
    const nextAnswer = [...answer, tileIndex];
    setAnswer(nextAnswer);

    if (nextAnswer.length === current.tiles.length) {
      const built = nextAnswer.map((i) => current.tiles[i]).join("");
      if (built === current.item.word) {
        setFeedback("correct");
        setScore((s) => s + 15);
        setTimeout(() => {
          if (round >= ROUNDS) {
            saveBestScore(GAME_SLUG, score + 15);
            setStatus("over");
          } else {
            const nextRound = pickRound(used);
            setUsed((prev) => new Set(prev).add(nextRound.idx));
            setCurrent(nextRound);
            setAnswer([]);
            setFeedback(null);
            setRound((r) => r + 1);
          }
        }, 700);
      } else {
        setFeedback("wrong");
        setTimeout(() => {
          setAnswer([]);
          setFeedback(null);
        }, 700);
      }
    }
  }

  function undo() {
    if (feedback) return;
    setAnswer((a) => a.slice(0, -1));
  }

  if (status === "idle") {
    return (
      <div className="clay bg-card p-6 sm:p-10 text-center">
        <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-white ${c.bg}`}>
          <IconStar className="h-8 w-8" />
        </span>
        <h2 className="mt-4 font-display text-2xl font-bold">Sắp xếp chữ cái thành từ đúng</h2>
        <p className="mt-2 text-muted-foreground">
          Đọc gợi ý và bấm chọn từng chữ cái theo đúng thứ tự để ghép thành từ. Có {ROUNDS} từ cho mỗi lượt chơi.
        </p>
        <button
          onClick={start}
          className={`clay-btn mt-6 cursor-pointer rounded-full px-8 py-3 font-display font-bold text-white ${c.bg}`}
        >
          Bắt đầu chơi
        </button>
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
        <h2 className="mt-4 font-display text-2xl font-bold">Xuất sắc!</h2>
        <p className="mt-2 text-muted-foreground">
          Bạn đạt <strong className={c.text}>{score}</strong> điểm sau {seconds}s.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={start}
            className={`clay-btn cursor-pointer inline-flex items-center gap-2 rounded-full px-6 py-3 font-display font-semibold text-white ${c.bg}`}
          >
            <IconRefresh className="h-4 w-4" /> Chơi lại
          </button>
          <a
            href="/tro-choi"
            className="clay-btn cursor-pointer inline-flex items-center gap-2 rounded-full bg-muted px-6 py-3 font-display font-semibold"
          >
            Trò chơi khác <IconArrowRight className="h-4 w-4" />
          </a>
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
          <IconClock className="h-4 w-4" /> {seconds}s
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 font-display font-bold">
          Từ {round}/{ROUNDS}
        </span>
      </div>

      <p className="mt-6 text-center text-muted-foreground">Gợi ý: {current?.item.hint}</p>

      <div
        className={`mt-4 flex min-h-16 flex-wrap justify-center gap-2 rounded-2xl border-3 border-dashed p-4 transition-colors ${
          feedback === "correct"
            ? "border-success bg-success/10"
            : feedback === "wrong"
            ? "border-destructive bg-destructive/10"
            : "border-border"
        }`}
      >
        {answer.length === 0 && <span className="text-muted-foreground">Bấm chọn chữ cái bên dưới</span>}
        {answer.map((tileIndex, i) => (
          <span
            key={i}
            className={`flex h-12 w-12 items-center justify-center rounded-xl font-display text-xl font-bold text-white ${c.bg}`}
          >
            {current?.tiles[tileIndex]}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {current?.tiles.map((letter, i) => (
          <button
            key={i}
            onClick={() => selectTile(i)}
            disabled={answer.includes(i) || !!feedback}
            className={`clay-sm cursor-pointer flex h-12 w-12 items-center justify-center font-display text-xl font-bold transition-opacity ${
              answer.includes(i) ? "opacity-25" : `${c.bgSoft} ${c.text}`
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={undo}
          disabled={answer.length === 0 || !!feedback}
          className="cursor-pointer font-display text-sm font-semibold text-muted-foreground hover:text-primary disabled:opacity-40"
        >
          Xoá chữ cuối
        </button>
      </div>
    </div>
  );
}
