import type { Metadata } from "next";
import { Container } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { MathQuizGame } from "@/components/games/MathQuizGame";
import { IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Đố Vui Toán Học",
  description: "Trả lời nhanh các phép tính cộng, trừ, nhân, chia phù hợp từng khối lớp Tiểu học.",
};

export default function MathGamePage() {
  return (
    <Container className="py-12 max-w-3xl">
      <nav className="text-sm text-muted-foreground">
        <a href="/tro-choi" className="hover:text-primary">
          Trò chơi
        </a>{" "}
        / <span className="text-foreground font-semibold">Đố Vui Toán Học</span>
      </nav>
      <h1 className="mt-3 font-display text-3xl font-extrabold">Đố Vui Toán Học</h1>
      <p className="mt-2 text-muted-foreground">
        Chọn khối lớp phù hợp và trả lời thật nhanh các phép tính trước khi hết giờ.
      </p>
      <div className="mt-8">
        <MathQuizGame />
      </div>
      <div className="mt-8">
        <LinkButton href="/tro-choi" variant="outline" icon={<IconArrowRight className="h-4 w-4" />}>
          Trò chơi khác
        </LinkButton>
      </div>
    </Container>
  );
}
