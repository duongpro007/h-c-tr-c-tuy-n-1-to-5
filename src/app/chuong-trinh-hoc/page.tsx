import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/Badge";
import { GradeCard } from "@/components/GradeCard";
import { SubjectCard } from "@/components/SubjectCard";
import { grades, subjects } from "@/content/subjects";

export const metadata: Metadata = {
  title: "Chương trình học Tiểu học lớp 1 - lớp 5",
  description:
    "Giáo trình đầy đủ 6 môn học từ lớp 1 đến lớp 5 theo chương trình GDPT 2018: Toán, Tiếng Việt, Tiếng Anh, Khám Phá, Đạo Đức, Tin Học.",
};

export default function CurriculumPage() {
  return (
    <Container className="py-12">
      <SectionHeading
        eyebrow="Chương trình học"
        title="Chọn khối lớp để bắt đầu"
        description="Giáo trình được biên soạn bám sát chương trình GDPT 2018, chia theo khối lớp và môn học rõ ràng."
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {grades.map((g) => (
          <GradeCard key={g.slug} grade={g} />
        ))}
      </div>

      <div className="mt-16">
        <SectionHeading eyebrow="Hoặc" title="Xem theo môn học" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s) => (
            <SubjectCard key={s.slug} subject={s} />
          ))}
        </div>
      </div>
    </Container>
  );
}
