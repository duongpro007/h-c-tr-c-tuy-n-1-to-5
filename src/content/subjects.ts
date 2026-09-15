import { Subject, Grade, GameDef } from "@/lib/types";

export const subjects: Subject[] = [
  {
    slug: "toan",
    name: "Toán học",
    shortName: "Toán",
    color: "blue",
    icon: "toan",
    description:
      "Số học, hình học, đo lường và tư duy logic qua các trò chơi và bài tập trực quan.",
  },
  {
    slug: "tieng-viet",
    name: "Tiếng Việt",
    shortName: "Tiếng Việt",
    color: "amber",
    icon: "tieng-viet",
    description:
      "Đọc, viết, chính tả và cảm thụ văn học — nền tảng ngôn ngữ mẹ đẻ vững chắc.",
  },
  {
    slug: "tieng-anh",
    name: "Tiếng Anh",
    shortName: "Tiếng Anh",
    color: "purple",
    icon: "tieng-anh",
    description:
      "Từ vựng, phát âm và giao tiếp cơ bản thông qua bài hát, thẻ hình và trò chơi.",
  },
  {
    slug: "kham-pha",
    name: "Khám Phá Tự Nhiên & Xã Hội",
    shortName: "Khám Phá",
    color: "green",
    icon: "kham-pha",
    description:
      "Tự nhiên và Xã hội (lớp 1-3), Khoa học và Lịch sử & Địa lí (lớp 4-5) theo chương trình GDPT 2018.",
  },
  {
    slug: "dao-duc",
    name: "Đạo Đức & Kỹ Năng Sống",
    shortName: "Đạo Đức",
    color: "pink",
    icon: "dao-duc",
    description:
      "Những giá trị sống, ứng xử và kỹ năng cần thiết cho học sinh tiểu học.",
  },
  {
    slug: "tin-hoc",
    name: "Tin Học",
    shortName: "Tin Học",
    color: "cyan",
    icon: "tin-hoc",
    description:
      "Làm quen máy tính, tư duy lập trình cơ bản và kỹ năng số an toàn.",
  },
];

export const grades: Grade[] = [
  {
    number: 1,
    slug: "lop-1",
    name: "Lớp 1",
    ageRange: "6 tuổi",
    tagline: "Những bước chân đầu tiên đến trường",
    color: "pink",
  },
  {
    number: 2,
    slug: "lop-2",
    name: "Lớp 2",
    ageRange: "7 tuổi",
    tagline: "Tự tin đọc, viết và tính toán",
    color: "amber",
  },
  {
    number: 3,
    slug: "lop-3",
    name: "Lớp 3",
    ageRange: "8 tuổi",
    tagline: "Mở rộng kiến thức, làm quen Tin học",
    color: "green",
  },
  {
    number: 4,
    slug: "lop-4",
    name: "Lớp 4",
    ageRange: "9 tuổi",
    tagline: "Tư duy logic và khám phá sâu hơn",
    color: "blue",
  },
  {
    number: 5,
    slug: "lop-5",
    name: "Lớp 5",
    ageRange: "10 tuổi",
    tagline: "Sẵn sàng cho hành trình THCS",
    color: "purple",
  },
];

export const games: GameDef[] = [
  {
    slug: "do-vui-toan-hoc",
    title: "Đố Vui Toán Học",
    subject: "toan",
    description:
      "Trả lời nhanh các phép tính, ghi điểm và leo hạng trước khi hết giờ!",
    minGrade: 1,
    maxGrade: 5,
    color: "blue",
  },
  {
    slug: "ghep-tu-vung",
    title: "Ghép Từ Vựng Tiếng Anh",
    subject: "tieng-anh",
    description:
      "Lật thẻ, ghép từ tiếng Anh với hình ảnh đúng để rèn trí nhớ và từ vựng.",
    minGrade: 1,
    maxGrade: 5,
    color: "purple",
  },
  {
    slug: "do-vui-tieng-viet",
    title: "Đố Vui Tiếng Việt",
    subject: "tieng-viet",
    description: "Điền từ còn thiếu, sắp xếp câu và chinh phục thử thách chính tả.",
    minGrade: 1,
    maxGrade: 5,
    color: "amber",
  },
];

export function getSubject(slug: string) {
  return subjects.find((s) => s.slug === slug);
}

export function getGrade(slug: string) {
  return grades.find((g) => g.slug === slug);
}

export function getGame(slug: string) {
  return games.find((g) => g.slug === slug);
}
