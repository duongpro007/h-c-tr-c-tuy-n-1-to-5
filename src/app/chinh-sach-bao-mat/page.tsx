import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Chính sách bảo mật",
  description: "Chính sách bảo mật của Học Mà Chơi, Chơi Mà Học.",
};

export default function PrivacyPage() {
  return (
    <Container className="py-12 max-w-3xl">
      <SectionHeading eyebrow="Pháp lý" title="Chính sách bảo mật" />
      <div className="mt-8 clay bg-card p-6 sm:p-8 space-y-6 text-foreground/85 leading-relaxed">
        <section>
          <h2 className="font-display text-lg font-bold">1. Không yêu cầu tài khoản</h2>
          <p className="mt-2">
            Học Mà Chơi, Chơi Mà Học không yêu cầu đăng ký tài khoản để sử dụng nội dung học tập và
            trò chơi. Chúng tôi không thu thập họ tên, email hay bất kỳ thông tin định danh cá nhân
            nào của học sinh khi các em học bài hoặc chơi trò chơi trên nền tảng.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold">2. Dữ liệu lưu trên trình duyệt</h2>
          <p className="mt-2">
            Tiến độ học tập và điểm số trò chơi được lưu cục bộ trên trình duyệt của thiết bị bạn
            đang sử dụng (localStorage), không được gửi về máy chủ và không đồng bộ giữa các thiết
            bị. Bạn có thể xoá dữ liệu này bất cứ lúc nào bằng cách xoá dữ liệu trình duyệt.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold">3. Thông tin qua biểu mẫu liên hệ</h2>
          <p className="mt-2">
            Khi bạn chủ động gửi thông tin qua biểu mẫu liên hệ (họ tên, email, nội dung), chúng tôi
            chỉ sử dụng thông tin này để phản hồi yêu cầu của bạn và không chia sẻ cho bên thứ ba vì
            mục đích thương mại.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold">4. Cookie</h2>
          <p className="mt-2">
            Nền tảng không sử dụng cookie theo dõi quảng cáo. Một số cookie kỹ thuật có thể được sử
            dụng để đảm bảo trang web hoạt động ổn định.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold">5. Liên hệ</h2>
          <p className="mt-2">
            Nếu có thắc mắc về chính sách bảo mật, vui lòng liên hệ qua trang{" "}
            <a href="/lien-he" className="text-primary underline">
              Liên hệ
            </a>
            .
          </p>
        </section>
      </div>
    </Container>
  );
}
