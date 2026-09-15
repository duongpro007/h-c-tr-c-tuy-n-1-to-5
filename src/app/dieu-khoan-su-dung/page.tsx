import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng",
  description: "Điều khoản sử dụng nền tảng Học Mà Chơi, Chơi Mà Học.",
};

export default function TermsPage() {
  return (
    <Container className="py-12 max-w-3xl">
      <SectionHeading eyebrow="Pháp lý" title="Điều khoản sử dụng" />
      <div className="mt-8 clay bg-card p-6 sm:p-8 space-y-6 text-foreground/85 leading-relaxed">
        <section>
          <h2 className="font-display text-lg font-bold">1. Đối tượng sử dụng</h2>
          <p className="mt-2">
            Nền tảng được xây dựng dành cho học sinh Tiểu học tại Việt Nam (lớp 1 đến lớp 5) và phụ
            huynh, giáo viên đồng hành cùng các em trong quá trình học tập.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold">2. Nội dung học tập</h2>
          <p className="mt-2">
            Nội dung được biên soạn tham khảo chương trình Giáo dục phổ thông 2018 (GDPT 2018) và
            được cập nhật liên tục. Nội dung mang tính chất hỗ trợ học tập, không thay thế hoàn
            toàn chương trình giảng dạy chính khoá tại trường.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold">3. Sử dụng miễn phí</h2>
          <p className="mt-2">
            Các bài học và trò chơi hiện tại được cung cấp miễn phí, không quảng cáo. Chúng tôi có
            thể bổ sung, chỉnh sửa nội dung theo thời gian để nâng cao chất lượng trải nghiệm.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold">4. Quyền sở hữu trí tuệ</h2>
          <p className="mt-2">
            Toàn bộ nội dung, hình ảnh, mã nguồn thuộc bản quyền của Học Mà Chơi, Chơi Mà Học. Nghiêm
            cấm sao chép, phân phối lại vì mục đích thương mại khi chưa được sự cho phép.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold">5. Thay đổi điều khoản</h2>
          <p className="mt-2">
            Điều khoản sử dụng có thể được cập nhật để phù hợp với thực tế vận hành. Phiên bản mới
            nhất luôn được đăng tải công khai tại trang này.
          </p>
        </section>
      </div>
    </Container>
  );
}
