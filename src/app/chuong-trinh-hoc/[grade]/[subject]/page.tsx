import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Badge";
import { LessonCard } from "@/components/LessonCard";
import { grades, subjects, getGrade, getSubject } from "@/content/subjects";
import { getSubjectCurriculum, countLessons, countReadyLessons } from "@/content/curriculum";
import { colorClasses } from "@/lib/colors";
import { subjectIcons, IconBook } from "@/components/icons";

export function generateStaticParams() {
  const params: { grade: string; subject: string }[] = [];
  for (const g of grades) {
    for (const s of subjects) {
      params.push({ grade: g.slug, subject: s.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ grade: string; subject: string }>;
}): Promise<Metadata> {
  const { grade: gradeSlug, subject: subjectSlug } = await params;
  const grade = getGrade(gradeSlug);
  const subject = getSubject(subjectSlug);
  if (!grade || !subject) return {};
  return {
    title: `${subject.name} ${grade.name}`,
    description: `Giáo trình ${subject.name} ${grade.name}: đầy đủ chủ đề, bài học và trò chơi thực hành.`,
  };
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ grade: string; subject: string }>;
}) {
  const { grade: gradeSlug, subject: subjectSlug } = await params;
  const grade = getGrade(gradeSlug);
  const subject = getSubject(subjectSlug);
  if (!grade || !subject) notFound();

  const sc = getSubjectCurriculum(subject.slug, grade.number);
  if (!sc) notFound();

  const c = colorClasses[subject.color];
  const Icon = subjectIcons[subject.slug];
  const total = countLessons(sc);
  const ready = countReadyLessons(sc);

  return (
    <Container className="py-12">
      <div className="clay bg-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
        <span className={`inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-white ${c.bg}`}>
          <Icon className="h-8 w-8" />
        </span>
        <div>
          <p className={`font-display font-bold ${c.text}`}>{grade.name}</p>
          <h1 className="font-display text-3xl font-extrabold">{subject.name}</h1>
          <p className="mt-1 text-muted-foreground max-w-2xl">{sc.intro}</p>
        </div>
        <div className="sm:ml-auto flex gap-3">
          <div className="clay-sm bg-muted px-4 py-3 text-center">
            <p className="font-display text-xl font-extrabold">{total}</p>
            <p className="text-xs text-muted-foreground">Bài học</p>
          </div>
          <div className="clay-sm bg-muted px-4 py-3 text-center">
            <p className="font-display text-xl font-extrabold text-success">{ready}</p>
            <p className="text-xs text-muted-foreground">Sẵn sàng học</p>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-10">
        {sc.chapters.map((chapter, ci) => (
          <div key={chapter.slug}>
            <div className="flex items-center gap-3">
              <span className={`flex h-8 w-8 items-center justify-center rounded-full font-display font-bold text-white ${c.bg}`}>
                {ci + 1}
              </span>
              <div>
                <h2 className="font-display text-xl font-bold">{chapter.title}</h2>
                <p className="text-sm text-muted-foreground">{chapter.description}</p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {chapter.lessons.map((lesson, li) => (
                <LessonCard
                  key={lesson.slug}
                  lesson={lesson}
                  color={subject.color}
                  index={li + 1}
                  href={`/chuong-trinh-hoc/${grade.slug}/${subject.slug}/${lesson.slug}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 clay-sm bg-muted p-5 flex items-start gap-3 text-sm text-muted-foreground">
        <IconBook className="h-5 w-5 shrink-0 text-primary" />
        <p>
          Các bài học được đánh dấu khoá đang được đội ngũ biên soạn hoàn thiện nội dung và trò
          chơi đi kèm, sẽ lần lượt mở khoá trong thời gian tới.
        </p>
      </div>
    </Container>
  );
}
