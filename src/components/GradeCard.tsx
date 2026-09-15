import Link from "next/link";
import { Grade } from "@/lib/types";
import { colorClasses } from "@/lib/colors";
import { IconArrowRight } from "@/components/icons";

export function GradeCard({ grade }: { grade: Grade }) {
  const c = colorClasses[grade.color];
  return (
    <Link
      href={`/chuong-trinh-hoc/${grade.slug}`}
      className="clay clay-float group flex flex-col justify-between p-6 h-full"
    >
      <div>
        <span
          className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl font-display text-2xl font-extrabold text-white ${c.bg}`}
        >
          {grade.number}
        </span>
        <h3 className="mt-4 font-display text-xl font-bold">{grade.name}</h3>
        <p className="text-sm text-muted-foreground">{grade.ageRange}</p>
        <p className="mt-2 text-sm text-foreground/80">{grade.tagline}</p>
      </div>
      <span className={`mt-5 inline-flex items-center gap-1 font-display font-semibold ${c.text}`}>
        Khám phá ngay
        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
