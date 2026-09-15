export type SubjectSlug =
  | "toan"
  | "tieng-viet"
  | "tieng-anh"
  | "kham-pha"
  | "dao-duc"
  | "tin-hoc";

export type LessonStatus = "ready" | "coming-soon";

export interface Lesson {
  slug: string;
  title: string;
  summary: string;
  durationMinutes: number;
  status: LessonStatus;
  gameSlug?: GameSlug;
}

export interface Chapter {
  slug: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface SubjectCurriculum {
  subject: SubjectSlug;
  grade: number;
  intro: string;
  chapters: Chapter[];
}

export interface Subject {
  slug: SubjectSlug;
  name: string;
  shortName: string;
  color: "blue" | "amber" | "pink" | "green" | "purple" | "cyan";
  icon: SubjectSlug;
  description: string;
}

export interface Grade {
  number: number;
  slug: string;
  name: string;
  ageRange: string;
  tagline: string;
  color: "blue" | "amber" | "pink" | "green" | "purple";
}

export type GameSlug = "do-vui-toan-hoc" | "ghep-tu-vung" | "do-vui-tieng-viet";

export interface GameDef {
  slug: GameSlug;
  title: string;
  subject: SubjectSlug;
  description: string;
  minGrade: number;
  maxGrade: number;
  color: "blue" | "amber" | "pink" | "green" | "purple" | "cyan";
}
