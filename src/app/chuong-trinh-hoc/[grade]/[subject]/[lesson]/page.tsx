import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { LessonQuiz } from "@/components/LessonQuiz";
import { grades, getGrade, getSubject, getGame } from "@/content/subjects";
import { curriculum, getLessonBySlug } from "@/content/curriculum";
import { getLessonContent } from "@/content/lessons";
import { colorClasses } from "@/lib/colors";
import { subjectIcons, IconArrowRight, IconClock, IconGamepad, IconSparkles } from "@/components/icons";

export function generateStaticParams() {
  const params: { grade: string; subject: string; lesson: string }[] = [];
  for (const sc of curriculum) {
    const grade = grades.find((g) => g.number === sc.grade);
    if (!grade) continue;
    for (const chapter of sc.chapters) {
      for (const lesson of chapter.lessons) {
        params.push({ grade: grade.slug, subject: sc.subject, lesson: lesson.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ grade: string; subject: string; lesson: string }>;
}): Promise<Metadata> {
  const { grade: gradeSlug, subject: subjectSlug, lesson: lessonSlug } = await params;
  const grade = getGrade(gradeSlug);
  const subject = getSubject(subjectSlug);
  if (!grade || !subject) return {};
  const found = getLessonBySlug(subject.slug, grade.number, lessonSlug);
  if (!found) return {};
  return {
    title: `${found.lesson.title} — ${subject.name} ${grade.name}`,
    description: found.lesson.summary,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ grade: string; subject: string; lesson: string }>;
}) {
  const { grade: gradeSlug, subject: subjectSlug, lesson: lessonSlug } = await params;
  const grade = getGrade(gradeSlug);
  const subject = getSubject(subjectSlug);
  if (!grade || !subject) notFound();

  const found = getLessonBySlug(subject.slug, grade.number, lessonSlug);
  if (!found) notFound();
  const { lesson, chapter } = found;

  const c = colorClasses[subject.color];
  const Icon = subjectIcons[subject.slug];
  const subjectHref = `/chuong-trinh-hoc/${grade.slug}/${subject.slug}`;
  const game = lesson.gameSlug ? getGame(lesson.gameSlug) : undefined;

  const breadcrumb = (
    <nav className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground" aria-label="Breadcrumb">
      <Link href="/chuong-trinh-hoc" className="hover:text-primary">
        Chương trình học
      </Link>
      <span>/</span>
      <Link href={`/chuong-trinh-hoc/${grade.slug}`} className="hover:text-primary">
        {grade.name}
      </Link>
      <span>/</span>
      <Link href={subjectHref} className={`hover:text-primary ${c.text}`}>
        {subject.name}
      </Link>
      <span>/</span>
      <span className="text-foreground font-semibold">{lesson.title}</span>
    </nav>
  );

  if (lesson.status !== "ready") {
    return (
      <Container className="py-12">
        {breadcrumb}
        <div className="clay bg-card mt-6 p-10 text-center">
          <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-white ${c.bg}`}>
            <Icon className="h-8 w-8" />
          </span>
          <h1 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-balance">{lesson.title}</h1>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">{lesson.summary}</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-display font-semibold text-muted-foreground">
            Nội dung đang được đội ngũ biên soạn — sắp ra mắt
          </p>
          <div className="mt-6">
            <LinkButton href={subjectHref} variant="outline" icon={<IconArrowRight className="h-4 w-4" />}>
              Quay lại {subject.name}
            </LinkButton>
          </div>
        </div>
      </Container>
    );
  }

  const content = getLessonContent(subject.slug, grade.number, lesson.slug);
  const lessonKey = `${subject.slug}:${grade.number}:${lesson.slug}`;

  return (
    <Container className="py-12">
      {breadcrumb}

      <div className="clay bg-card mt-6 p-6 sm:p-8">
        <p className={`font-display text-sm font-bold ${c.text}`}>{chapter.title}</p>
        <h1 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-balance">{lesson.title}</h1>
        <p className="mt-2 text-muted-foreground">{lesson.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <IconClock className="h-4 w-4" /> {lesson.durationMinutes} phút
          </span>
          {game && (
            <LinkButton href={`/tro-choi/${game.slug}`} size="sm" variant="accent" icon={<IconGamepad className="h-4 w-4" />}>
              Chơi trò chơi: {game.title}
            </LinkButton>
          )}
        </div>
      </div>

      {content && (
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <div className={`clay-sm p-5 ${c.bgSoft}`}>
              <h2 className="font-display font-bold">Mục tiêu bài học</h2>
              <ul className="mt-2 space-y-1.5 text-sm">
                {content.objectives.map((o, i) => (
                  <li key={i} className="flex gap-2">
                    <span className={`font-display font-bold ${c.text}`}>{i + 1}.</span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-8">
              {content.sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="font-display text-lg font-bold">{section.heading}</h3>
                  <div className="mt-2 space-y-2 text-foreground/85 leading-relaxed">
                    {section.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 clay-sm bg-secondary/10 p-5 flex gap-3">
              <IconSparkles className="h-6 w-6 shrink-0 text-secondary" />
              <div>
                <h3 className="font-display font-bold">Bạn có biết?</h3>
                <p className="mt-1 text-sm text-foreground/80">{content.funFact}</p>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            <h2 className="font-display text-lg font-bold mb-3">Kiểm tra nhanh</h2>
            <LessonQuiz questions={content.quiz} color={subject.color} lessonKey={lessonKey} />
          </div>
        </div>
      )}

      <div className="mt-12 flex justify-between">
        <LinkButton href={subjectHref} variant="outline" icon={<IconArrowRight className="h-4 w-4 rotate-180" />}>
          Quay lại {subject.name}
        </LinkButton>
      </div>
    </Container>
  );
}
