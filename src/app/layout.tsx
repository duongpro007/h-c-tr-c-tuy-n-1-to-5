import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hocmachoi.vn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Học Mà Chơi, Chơi Mà Học — Nền tảng học trực tuyến Tiểu học",
    template: "%s | Học Mà Chơi, Chơi Mà Học",
  },
  description:
    "Nền tảng học trực tuyến dành cho học sinh Tiểu học Việt Nam: giáo trình Toán, Tiếng Việt, Tiếng Anh, Khám Phá, Đạo Đức, Tin Học từ lớp 1 đến lớp 5, kết hợp trò chơi vui nhộn giúp bé học dễ hiểu, nhớ lâu.",
  keywords: [
    "học mà chơi chơi mà học",
    "học trực tuyến tiểu học",
    "giáo trình tiểu học",
    "toán tiếng việt tiếng anh tiểu học",
    "trò chơi học tập cho bé",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Học Mà Chơi, Chơi Mà Học",
    title: "Học Mà Chơi, Chơi Mà Học — Nền tảng học trực tuyến Tiểu học",
    description:
      "Giáo trình đầy đủ từ lớp 1 đến lớp 5, học kết hợp trò chơi vui nhộn cho học sinh Tiểu học Việt Nam.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${baloo.variable} ${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
