import type { Metadata } from "next";
import { Container } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { VocabMatchGame } from "@/components/games/VocabMatchGame";
import { IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Ghép Từ Vựng Tiếng Anh",
  description: "Lật thẻ và ghép từ tiếng Anh với nghĩa tiếng Việt tương ứng để rèn luyện trí nhớ và từ vựng.",
};

export default function VocabGamePage() {
  return (
    <Container className="py-12 max-w-3xl">
      <nav className="text-sm text-muted-foreground">
        <a href="/tro-choi" className="hover:text-primary">
          Trò chơi
        </a>{" "}
        / <span className="text-foreground font-semibold">Ghép Từ Vựng Tiếng Anh</span>
      </nav>
      <h1 className="mt-3 font-display text-3xl font-extrabold">Ghép Từ Vựng Tiếng Anh</h1>
      <p className="mt-2 text-muted-foreground">
        Lật hai thẻ mỗi lượt để tìm cặp từ tiếng Anh và nghĩa tiếng Việt trùng khớp.
      </p>
      <div className="mt-8">
        <VocabMatchGame />
      </div>
      <div className="mt-8">
        <LinkButton href="/tro-choi" variant="outline" icon={<IconArrowRight className="h-4 w-4" />}>
          Trò chơi khác
        </LinkButton>
      </div>
    </Container>
  );
}
