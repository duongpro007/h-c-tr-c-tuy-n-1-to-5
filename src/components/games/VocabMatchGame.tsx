"use client";

import { useEffect, useMemo, useState } from "react";
import { colorClasses } from "@/lib/colors";
import { getBestScore, saveBestScore } from "@/lib/progress";
import { IconArrowRight, IconCheck, IconClock, IconRefresh, IconTrophy } from "@/components/icons";

const GAME_SLUG = "ghep-tu-vung";
const c = colorClasses.purple;

const WORD_BANK: { en: string; vi: string }[] = [
  { en: "Cat", vi: "Con mèo" },
  { en: "Dog", vi: "Con chó" },
  { en: "Apple", vi: "Quả táo" },
  { en: "School", vi: "Trường học" },
  { en: "Book", vi: "Quyển sách" },
  { en: "Friend", vi: "Bạn bè" },
  { en: "Family", vi: "Gia đình" },
  { en: "Sun", vi: "Mặt trời" },
  { en: "Water", vi: "Nước" },
  { en: "House", vi: "Ngôi nhà" },
  { en: "Happy", vi: "Vui vẻ" },
  { en: "Red", vi: "Màu đỏ" },
];

interface Card {
  id: string;
  pairId: number;
  label: string;
  lang: "en" | "vi";
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildDeck(pairCount: number): Card[] {
  const chosen = shuffle(WORD_BANK).slice(0, pairCount);
  const cards: Card[] = [];
  chosen.forEach((pair, i) => {
    cards.push({ id: `en-${i}`, pairId: i, label: pair.en, lang: "en" });
    cards.push({ id: `vi-${i}`, pairId: i, label: pair.vi, lang: "vi" });
  });
  return shuffle(cards);
}

export function VocabMatchGame() {
  const [pairCount, setPairCount] = useState<number | null>(null);
  const [deck, setDeck] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [status, setStatus] = useState<"idle" | "playing" | "over">("idle");
  // eslint-disable-next-line react-hooks/exhaustive-deps -- recompute after a round ends so the saved best score shows up
  const best = useMemo(() => (typeof window !== "undefined" ? getBestScore(GAME_SLUG) : 0), [status]);

  useEffect(() => {
    if (status !== "playing") return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [status]);

  function start(count: number) {
    setPairCount(count);
    setDeck(buildDeck(count));
    setFlipped([]);
    setMatched(new Set());
    setMoves(0);
    setSeconds(0);
    setStatus("playing");
  }

  function flip(card: Card) {
    if (flipped.length === 2 || flipped.includes(card.id) || matched.has(card.pairId)) return;
    const nextFlipped = [...flipped, card.id];
    setFlipped(nextFlipped);

    if (nextFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [firstId, secondId] = nextFlipped;
      const first = deck.find((c) => c.id === firstId)!;
      const second = deck.find((c) => c.id === secondId)!;
      if (first.pairId === second.pairId) {
        const nextMatched = new Set(matched).add(first.pairId);
        setTimeout(() => {
          setMatched(nextMatched);
          setFlipped([]);
          if (pairCount && nextMatched.size === pairCount) {
            const score = Math.max(10, pairCount * 30 - moves * 3 - seconds);
            saveBestScore(GAME_SLUG, score);
            setStatus("over");
          }
        }, 500);
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
    }
  }

  if (status === "idle") {
    return (
      <div className="clay bg-card p-6 sm:p-10 text-center">
        <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-white ${c.bg}`}>
          <IconCheck className="h-8 w-8" />
        </span>
        <h2 className="mt-4 font-display text-2xl font-bold">Chọn số lượng thẻ</h2>
        <p className="mt-2 text-muted-foreground">Lật thẻ và ghép từ tiếng Anh với nghĩa tiếng Việt tương ứng.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {[6, 8, 10].map((count) => (
            <button
              key={count}
              onClick={() => start(count)}
              className={`clay-btn cursor-pointer rounded-2xl px-6 py-4 font-display font-bold text-white ${c.bg}`}
            >
              {count} cặp thẻ
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
    const score = Math.max(10, (pairCount ?? 0) * 30 - moves * 3 - seconds);
    return (
      <div className="clay bg-card p-8 sm:p-10 text-center">
        <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-white ${c.bg}`}>
          <IconTrophy className="h-8 w-8" />
        </span>
        <h2 className="mt-4 font-display text-2xl font-bold">Hoàn thành!</h2>
        <p className="mt-2 text-muted-foreground">
          {moves} lượt lật · {seconds}s · <strong className={c.text}>{score}</strong> điểm
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => pairCount && start(pairCount)}
            className={`clay-btn cursor-pointer inline-flex items-center gap-2 rounded-full px-6 py-3 font-display font-semibold text-white ${c.bg}`}
          >
            <IconRefresh className="h-4 w-4" /> Chơi lại
          </button>
          <button
            onClick={() => setStatus("idle")}
            className="clay-btn cursor-pointer inline-flex items-center gap-2 rounded-full bg-muted px-6 py-3 font-display font-semibold"
          >
            Đổi số thẻ <IconArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="clay bg-card p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 font-display font-bold">
          Lượt lật: {moves}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 font-display font-bold">
          <IconClock className="h-4 w-4" /> {seconds}s
        </span>
        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-display font-bold text-white ${c.bg}`}>
          {matched.size}/{pairCount} cặp
        </span>
      </div>

      <div
        className="mt-6 grid gap-3"
        style={{ gridTemplateColumns: `repeat(${(pairCount ?? 6) >= 10 ? 5 : 4}, minmax(0, 1fr))` }}
      >
        {deck.map((card) => {
          const isFlipped = flipped.includes(card.id) || matched.has(card.pairId);
          return (
            <button
              key={card.id}
              onClick={() => flip(card)}
              disabled={matched.has(card.pairId)}
              className={`clay-sm cursor-pointer flex h-16 sm:h-20 items-center justify-center px-2 text-center font-display text-sm sm:text-base font-bold transition-colors ${
                matched.has(card.pairId)
                  ? "bg-success/15 text-success border-success"
                  : isFlipped
                  ? `${c.bgSoft} ${c.text}`
                  : `${c.bg} text-white`
              }`}
            >
              {isFlipped ? card.label : "?"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
