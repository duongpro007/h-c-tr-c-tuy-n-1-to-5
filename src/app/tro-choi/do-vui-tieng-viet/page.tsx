import type { Metadata } from "next";
import { Container } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { WordPuzzleGame } from "@/components/games/WordPuzzleGame";
import { IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Đố Vui Tiếng Việt",
  description: "Sắp xếp chữ cái thành từ đúng dựa vào gợi ý — rèn luyện chính tả và vốn từ tiếng Việt.",
};

export default function WordGamePage() {
  return (
    <Container className="py-12 max-w-3xl">
      <nav className="text-sm text-muted-foreground">
        <a href="/tro-choi" className="hover:text-primary">
          Trò chơi
        </a>{" "}
        / <span className="text-foreground font-semibold">Đố Vui Tiếng Việt</span>
      </nav>
      <h1 className="mt-3 font-display text-3xl font-extrabold">Đố Vui Tiếng Việt</h1>
      <p className="mt-2 text-muted-foreground">
        Đọc gợi ý rồi bấm chọn từng chữ cái theo đúng thứ tự để ghép thành từ hoàn chỉnh.
      </p>
      <div className="mt-8">
        <WordPuzzleGame />
      </div>
      <div className="mt-8">
        <LinkButton href="/tro-choi" variant="outline" icon={<IconArrowRight className="h-4 w-4" />}>
          Trò chơi khác
        </LinkButton>
      </div>
    </Container>
  );
}
