import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Badge";
import { games } from "@/content/subjects";
import { colorClasses } from "@/lib/colors";
import { IconArrowRight, IconGamepad } from "@/components/icons";

export const metadata: Metadata = {
  title: "Trò chơi học tập",
  description: "Ba trò chơi tương tác giúp học sinh Tiểu học ôn luyện Toán, Tiếng Việt, Tiếng Anh một cách vui nhộn.",
};

export default function GamesPage() {
  return (
    <Container className="py-12">
      <SectionHeading
        eyebrow="Học mà chơi"
        title="Trò chơi tương tác"
        description="Vừa chơi vừa ôn luyện kiến thức đã học — không cần đăng nhập, chơi ngay trên trình duyệt."
      />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => {
          const c = colorClasses[game.color];
          return (
            <Link key={game.slug} href={`/tro-choi/${game.slug}`} className="clay clay-float p-7 flex flex-col gap-4">
              <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white ${c.bg}`}>
                <IconGamepad className="h-7 w-7" />
              </span>
              <div>
                <h2 className="font-display text-xl font-bold">{game.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{game.description}</p>
              </div>
              <span className={`mt-auto inline-flex items-center gap-1 font-display font-semibold ${c.text}`}>
                Chơi ngay <IconArrowRight className="h-4 w-4" />
              </span>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
