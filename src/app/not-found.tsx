import { Container } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { Mascot } from "@/components/Mascot";
import { IconArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <Container className="py-20 text-center">
      <div className="mx-auto max-w-md">
        <Mascot className="mx-auto h-40 w-40" />
        <h1 className="mt-6 font-display text-3xl font-extrabold">Trang không tồn tại</h1>
        <p className="mt-2 text-muted-foreground">
          Có vẻ như trang bạn tìm không có ở đây. Hãy quay lại trang chủ để tiếp tục học nhé!
        </p>
        <div className="mt-6">
          <LinkButton href="/" icon={<IconArrowRight className="h-4 w-4" />}>
            Về trang chủ
          </LinkButton>
        </div>
      </div>
    </Container>
  );
}
