import Link from "next/link";
import { Lesson } from "@/lib/types";
import { AccentColor, colorClasses } from "@/lib/colors";
import { IconCheck, IconClock, IconGamepad, IconLock } from "@/components/icons";

export function LessonCard({
  lesson,
  href,
  color,
  index,
}: {
  lesson: Lesson;
  href: string;
  color: AccentColor;
  index: number;
}) {
  const c = colorClasses[color];
  const isReady = lesson.status === "ready";

  const content = (
    <div
      className={`clay-sm flex items-center gap-4 p-4 sm:p-5 transition-transform ${
        isReady ? "clay-float bg-card" : "bg-muted opacity-80"
      }`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display font-bold text-white ${c.bg}`}
      >
        {index}
      </span>
      <div className="min-w-0 flex-1">
        <h4 className="font-display font-bold text-foreground truncate">{lesson.title}</h4>
        <p className="text-sm text-muted-foreground line-clamp-1">{lesson.summary}</p>
      </div>
      <div className="hidden sm:flex items-center gap-3 text-sm text-muted-foreground shrink-0">
        <span className="inline-flex items-center gap-1">
          <IconClock className="h-4 w-4" />
          {lesson.durationMinutes} phút
        </span>
        {lesson.gameSlug && (
          <span className={`inline-flex items-center gap-1 font-semibold ${c.text}`}>
            <IconGamepad className="h-4 w-4" />
            Có trò chơi
          </span>
        )}
      </div>
      <span className="shrink-0">
        {isReady ? (
          <IconCheck className="h-5 w-5 text-success" />
        ) : (
          <IconLock className="h-5 w-5 text-muted-foreground" />
        )}
      </span>
    </div>
  );

  if (!isReady) {
    return <div className="cursor-not-allowed">{content}</div>;
  }

  return (
    <Link href={href} className="block">
      {content}
    </Link>
  );
}
