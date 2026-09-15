import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/Badge";
import { FeatureCard, StatBadge } from "@/components/FeatureCard";
import { Mascot } from "@/components/Mascot";
import { totalLessonCount } from "@/content/curriculum";
import { IconBook, IconGamepad, IconHeart, IconShield, IconSparkles, IconUsers } from "@/components/icons";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Học Mà Chơi, Chơi Mà Học là nền tảng học trực tuyến dành cho học sinh Tiểu học Việt Nam, kết hợp giáo trình bài bản với trò chơi vui nhộn.",
};

export default function AboutPage() {
  return (
    <Container className="py-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Về chúng tôi"
            title="Học Mà Chơi, Chơi Mà Học"
            description="Chúng tôi tin rằng trẻ em học tốt nhất khi được vui chơi. Vì vậy, mỗi bài học trên nền tảng đều được thiết kế để vừa truyền tải kiến thức chuẩn chương trình GDPT 2018, vừa mang lại niềm vui qua các trò chơi tương tác."
          />
          <p className="mt-4 text-foreground/80 leading-relaxed">
            Với hơn {totalLessonCount} bài học trải dài từ lớp 1 đến lớp 5, thuộc 6 môn học cốt lõi,
            nền tảng giúp học sinh Tiểu học tiếp cận kiến thức một cách trực quan, dễ hiểu và dễ nhớ —
            hoàn toàn miễn phí, không cần đăng ký tài khoản.
          </p>
        </div>
        <div className="clay bg-card p-10 flex justify-center">
          <Mascot className="h-56 w-56" />
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatBadge value="5" label="Khối lớp" color="blue" />
        <StatBadge value="6" label="Môn học" color="pink" />
        <StatBadge value={`${totalLessonCount}+`} label="Bài học" color="amber" />
        <StatBadge value="100%" label="Miễn phí" color="green" />
      </div>

      <div className="mt-16">
        <SectionHeading eyebrow="Sứ mệnh" title="Điều chúng tôi hướng tới" center />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<IconBook className="h-6 w-6" />}
            title="Kiến thức chuẩn hoá"
            description="Nội dung bám sát chương trình GDPT 2018, cập nhật liên tục theo sách giáo khoa mới nhất."
            color="blue"
          />
          <FeatureCard
            icon={<IconGamepad className="h-6 w-6" />}
            title="Học qua trải nghiệm"
            description="Trò chơi và bài tập tương tác giúp trẻ ghi nhớ kiến thức tự nhiên, không gò ép."
            color="pink"
          />
          <FeatureCard
            icon={<IconHeart className="h-6 w-6" />}
            title="Yêu thích việc học"
            description="Thiết kế thân thiện, màu sắc tươi vui giúp trẻ hào hứng quay lại học mỗi ngày."
            color="amber"
          />
          <FeatureCard
            icon={<IconShield className="h-6 w-6" />}
            title="An toàn cho trẻ em"
            description="Không quảng cáo, không thu thập thông tin cá nhân, không yêu cầu tài khoản."
            color="green"
          />
          <FeatureCard
            icon={<IconUsers className="h-6 w-6" />}
            title="Dành cho mọi gia đình"
            description="Phụ huynh có thể đồng hành cùng con học tập mọi lúc, mọi nơi, trên mọi thiết bị."
            color="purple"
          />
          <FeatureCard
            icon={<IconSparkles className="h-6 w-6" />}
            title="Không ngừng mở rộng"
            description="Nội dung và trò chơi mới được bổ sung đều đặn theo phản hồi từ học sinh, phụ huynh."
            color="cyan"
          />
        </div>
      </div>
    </Container>
  );
}
