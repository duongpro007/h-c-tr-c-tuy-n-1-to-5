import Link from "next/link";
import { Container } from "@/components/ui/Badge";
import { IconGamepad, IconMail, IconMapPin, IconPhone } from "@/components/icons";
import { grades, subjects } from "@/content/subjects";

export default function Footer() {
  return (
    <footer className="mt-24 border-t-3 border-border bg-card">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display font-extrabold text-lg">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground clay-sm">
                <IconGamepad className="h-5 w-5" />
              </span>
              <span className="text-primary">Học Mà Chơi</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Nền tảng học trực tuyến dành cho học sinh Tiểu học Việt Nam — kiến thức bài bản kết
              hợp trò chơi vui nhộn, giúp bé yêu thích việc học mỗi ngày.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-foreground">Môn học</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {subjects.map((s) => (
                <li key={s.slug}>
                  <Link href={`/chuong-trinh-hoc/lop-1/${s.slug}`} className="text-muted-foreground hover:text-primary">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-foreground">Khối lớp</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {grades.map((g) => (
                <li key={g.slug}>
                  <Link href={`/chuong-trinh-hoc/${g.slug}`} className="text-muted-foreground hover:text-primary">
                    {g.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/tro-choi" className="text-muted-foreground hover:text-primary">
                  Trò chơi học tập
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-foreground">Liên hệ</h3>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <IconMail className="h-5 w-5 shrink-0 text-primary" />
                <span>hoccungbe@hocmachoi.vn</span>
              </li>
              <li className="flex items-start gap-2">
                <IconPhone className="h-5 w-5 shrink-0 text-primary" />
                <span>1900 6868 (7:30 - 21:00)</span>
              </li>
              <li className="flex items-start gap-2">
                <IconMapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>Quận 1, TP. Hồ Chí Minh, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Học Mà Chơi, Chơi Mà Học. Bản quyền thuộc về chúng tôi.</p>
          <div className="flex gap-4">
            <Link href="/chinh-sach-bao-mat" className="hover:text-primary">
              Chính sách bảo mật
            </Link>
            <Link href="/dieu-khoan-su-dung" className="hover:text-primary">
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
