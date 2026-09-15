import { Hero } from "@/components/Hero";
import { Container, SectionHeading } from "@/components/ui/Badge";
import { StatBadge, FeatureCard } from "@/components/FeatureCard";
import { SubjectCard } from "@/components/SubjectCard";
import { GradeCard } from "@/components/GradeCard";
import { LinkButton } from "@/components/ui/Button";
import { subjects, grades, games } from "@/content/subjects";
import { totalLessonCount } from "@/content/curriculum";
import { colorClasses } from "@/lib/colors";
import {
  IconArrowRight,
  IconBook,
  IconGamepad,
  IconShield,
  IconSparkles,
  IconUsers,
} from "@/components/icons";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-8">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatBadge value="5" label="Khối lớp Tiểu học" color="blue" />
            <StatBadge value="6" label="Môn học chính" color="pink" />
            <StatBadge value={`${totalLessonCount}+`} label="Bài học trong giáo trình" color="amber" />
            <StatBadge value="3" label="Trò chơi tương tác" color="purple" />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Giáo trình đầy đủ"
            title="6 môn học theo chương trình GDPT 2018"
            description="Kiến thức được biên soạn bám sát chương trình giáo dục phổ thông mới nhất, chia nhỏ theo từng chủ đề dễ tiếp thu."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((s) => (
              <SubjectCard key={s.slug} subject={s} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-card border-y-3 border-border">
        <Container>
          <SectionHeading
            eyebrow="Chọn khối lớp"
            title="Đồng hành cùng bé từ lớp 1 đến lớp 5"
            description="Mỗi khối lớp có lộ trình riêng, phù hợp với độ tuổi và năng lực tiếp thu."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {grades.map((g) => (
              <GradeCard key={g.slug} grade={g} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Vì sao chọn chúng tôi"
            title="Học vui, hiểu sâu, nhớ lâu"
            center
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<IconBook className="h-6 w-6" />}
              title="Giáo trình bài bản"
              description="Bám sát chương trình GDPT 2018, cập nhật theo năm học 2025 - 2026."
              color="blue"
            />
            <FeatureCard
              icon={<IconGamepad className="h-6 w-6" />}
              title="Học qua trò chơi"
              description="Mỗi bài học đi kèm trò chơi thực hành sinh động, gắn kết kiến thức."
              color="pink"
            />
            <FeatureCard
              icon={<IconUsers className="h-6 w-6" />}
              title="Phù hợp mọi bé"
              description="Nội dung chia nhỏ theo từng chủ đề, dễ tiếp cận với mọi tốc độ học."
              color="amber"
            />
            <FeatureCard
              icon={<IconShield className="h-6 w-6" />}
              title="An toàn, không quảng cáo"
              description="Không cần đăng nhập, không thu thập dữ liệu cá nhân của trẻ."
              color="green"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 bg-card border-y-3 border-border">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Vừa học vừa chơi"
              title="Trò chơi giúp bé ôn luyện dễ dàng"
              description="Ba trò chơi tương tác giúp bé thực hành kiến thức đã học một cách hào hứng."
            />
            <LinkButton href="/tro-choi" variant="outline" icon={<IconArrowRight className="h-4 w-4" />}>
              Xem tất cả
            </LinkButton>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {games.map((game) => {
              const c = colorClasses[game.color];
              return (
                <a
                  key={game.slug}
                  href={`/tro-choi/${game.slug}`}
                  className="clay clay-float p-6 flex flex-col gap-3"
                >
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white ${c.bg}`}>
                    <IconGamepad className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold">{game.title}</h3>
                  <p className="text-sm text-muted-foreground">{game.description}</p>
                  <span className={`mt-auto inline-flex items-center gap-1 font-display font-semibold ${c.text}`}>
                    Chơi ngay <IconArrowRight className="h-4 w-4" />
                  </span>
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="clay bg-gradient-to-br from-primary to-purple text-white p-10 sm:p-14 text-center flex flex-col items-center">
            <IconSparkles className="h-10 w-10" />
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-balance">
              Sẵn sàng cho bé bắt đầu hành trình học vui?
            </h2>
            <p className="mt-3 max-w-xl text-white/90">
              Hoàn toàn miễn phí trải nghiệm, không cần đăng ký tài khoản. Chọn khối lớp và bắt đầu
              ngay hôm nay!
            </p>
            <LinkButton href="/chuong-trinh-hoc" variant="secondary" size="lg" className="mt-6">
              Bắt đầu học ngay
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
