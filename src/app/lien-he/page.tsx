import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/Badge";
import { ContactForm } from "@/components/ContactForm";
import { IconClock, IconMail, IconMapPin, IconPhone } from "@/components/icons";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ với đội ngũ Học Mà Chơi, Chơi Mà Học để được hỗ trợ hoặc góp ý về nền tảng.",
};

const infoItems = [
  { icon: IconMail, label: "Email", value: "duongpro007@gmail.com" },
  { icon: IconPhone, label: "Hotline", value: "0988 737 878" },
  { icon: IconMapPin, label: "Địa chỉ", value: "Kim Giang, Hà Nội, Việt Nam" },
  { icon: IconClock, label: "Giờ hỗ trợ", value: "9h30 - 22h, tất cả các ngày trong tuần" },
];

export default function ContactPage() {
  return (
    <Container className="py-12">
      <SectionHeading
        eyebrow="Liên hệ"
        title="Chúng tôi luôn sẵn sàng lắng nghe"
        description="Có góp ý về bài học, phát hiện lỗi, hoặc cần hỗ trợ? Hãy gửi tin nhắn cho chúng tôi."
      />
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {infoItems.map((item) => (
            <div key={item.label} className="clay-sm bg-card flex items-start gap-3 p-5">
              <item.icon className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="font-display font-bold text-sm">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
        <ContactForm />
      </div>
    </Container>
  );
}
