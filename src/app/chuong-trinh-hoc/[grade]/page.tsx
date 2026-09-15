import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, SectionHeading } from "@/components/ui/Badge";
import { SubjectCard } from "@/components/SubjectCard";
import { grades, subjects, getGrade } from "@/content/subjects";
import { getSubjectCurriculum, countLessons } from "@/content/curriculum";

export function generateStaticParams() {
  return grades.map((g) => ({ grade: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ grade: string }>;
}): Promise<Metadata> {
  const { grade: gradeSlug } = await params;
  const grade = getGrade(gradeSlug);
  if (!grade) return {};
  return {
    title: `Chương trình học ${grade.name}`,
    description: `Toàn bộ môn học và bài học của ${grade.name} theo chương trình GDPT 2018.`,
  };
}

export default async function GradePage({ params }: { params: Promise<{ grade: string }> }) {
  const { grade: gradeSlug } = await params;
  const grade = getGrade(gradeSlug);
  if (!grade) notFound();

  return (
    <Container className="py-12">
      <SectionHeading
        eyebrow={grade.name}
        title={`Môn học dành cho ${grade.name}`}
        description={grade.tagline}
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((s) => {
          const sc = getSubjectCurriculum(s.slug, grade.number);
          return (
            <SubjectCard
              key={s.slug}
              subject={s}
              gradeSlug={grade.slug}
              lessonCount={sc ? countLessons(sc) : 0}
            />
          );
        })}
      </div>
    </Container>
  );
}
