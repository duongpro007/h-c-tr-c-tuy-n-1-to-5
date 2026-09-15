import { Container } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { Mascot } from "@/components/Mascot";
import { IconArrowRight, IconGamepad, IconSparkles, IconStar } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 sm:pt-16">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="bounce-in">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-display font-bold text-accent">
            <IconSparkles className="h-4 w-4" />
            Giáo trình Tiểu học lớp 1 - lớp 5 · Năm học 2025 - 2026
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-balance">
            <span className="text-primary">Học Mà Chơi,</span>
            <br />
            <span className="text-accent">Chơi Mà Học</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Nền tảng học trực tuyến giúp học sinh Tiểu học Việt Nam chinh phục Toán, Tiếng Việt,
            Tiếng Anh và nhiều môn học khác qua bài giảng sinh động và trò chơi vui nhộn — dễ hiểu,
            nhớ lâu, yêu thích mỗi ngày.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <LinkButton href="/chuong-trinh-hoc" size="lg" icon={<IconArrowRight className="h-5 w-5" />}>
              Khám phá giáo trình
            </LinkButton>
            <LinkButton href="/tro-choi" variant="outline" size="lg" icon={<IconGamepad className="h-5 w-5" />}>
              Chơi thử ngay
            </LinkButton>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex -space-x-1 text-secondary">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-5 w-5 fill-secondary" fill="currentColor" />
              ))}
            </div>
            <span>Miễn phí trải nghiệm — không cần tài khoản</span>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="clay bg-card p-8 sm:p-10 bounce-in" style={{ animationDelay: "120ms" }}>
            <Mascot className="h-56 w-56 sm:h-72 sm:w-72" />
          </div>
          <div className="clay-sm absolute -left-4 top-6 hidden sm:flex items-center gap-2 bg-card px-4 py-2 font-display font-bold text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-success" /> 6 môn học
          </div>
          <div className="clay-sm absolute -right-2 bottom-10 hidden sm:flex items-center gap-2 bg-card px-4 py-2 font-display font-bold text-sm">
            <IconGamepad className="h-4 w-4 text-accent" /> Trò chơi tương tác
          </div>
        </div>
      </Container>
    </section>
  );
}
