import Link from "next/link";
import { Subject } from "@/lib/types";
import { colorClasses } from "@/lib/colors";
import { subjectIcons } from "@/components/icons";
import { IconArrowRight } from "@/components/icons";

export function SubjectCard({
  subject,
  gradeSlug,
  lessonCount,
}: {
  subject: Subject;
  gradeSlug?: string;
  lessonCount?: number;
}) {
  const c = colorClasses[subject.color];
  const Icon = subjectIcons[subject.slug];
  const href = `/chuong-trinh-hoc/${gradeSlug ?? "lop-1"}/${subject.slug}`;

  return (
    <Link href={href} className="clay clay-float group flex flex-col gap-4 p-6 h-full">
      <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white ${c.bg}`}>
        <Icon className="h-7 w-7" />
      </span>
      <div>
        <h3 className="font-display text-lg font-bold">{subject.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{subject.description}</p>
      </div>
      <div className="mt-auto flex items-center justify-between">
        {typeof lessonCount === "number" && (
          <span className={`text-sm font-semibold ${c.text}`}>{lessonCount} bài học</span>
        )}
        <span className={`inline-flex items-center gap-1 font-display text-sm font-semibold ${c.text}`}>
          Xem chi tiết
          <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
