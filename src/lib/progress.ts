const STORAGE_KEY = "hmc:progress:v1";

interface ProgressState {
  completedLessons: string[];
  gameScores: Record<string, number>;
}

function readState(): ProgressState {
  if (typeof window === "undefined") return { completedLessons: [], gameScores: {} };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completedLessons: [], gameScores: {} };
    const parsed = JSON.parse(raw);
    return {
      completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
      gameScores: typeof parsed.gameScores === "object" && parsed.gameScores ? parsed.gameScores : {},
    };
  } catch {
    return { completedLessons: [], gameScores: {} };
  }
}

function writeState(state: ProgressState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable (private mode, blocked) — silently ignore
  }
}

export function isLessonCompleted(lessonKey: string): boolean {
  return readState().completedLessons.includes(lessonKey);
}

export function markLessonCompleted(lessonKey: string) {
  const state = readState();
  if (!state.completedLessons.includes(lessonKey)) {
    state.completedLessons.push(lessonKey);
    writeState(state);
  }
}

export function getBestScore(gameSlug: string): number {
  return readState().gameScores[gameSlug] ?? 0;
}

export function saveBestScore(gameSlug: string, score: number) {
  const state = readState();
  if (!state.gameScores[gameSlug] || score > state.gameScores[gameSlug]) {
    state.gameScores[gameSlug] = score;
    writeState(state);
  }
}

export function getCompletedCount(): number {
  return readState().completedLessons.length;
}
