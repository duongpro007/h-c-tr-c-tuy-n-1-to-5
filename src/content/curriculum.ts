import { Chapter, Lesson, SubjectCurriculum } from "@/lib/types";

function slugify(input: string): string {
  let s = input.replace(/đ/g, "d").replace(/Đ/g, "D");
  s = s.normalize("NFD").replace(/[̀-ͯ]/g, "");
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface LessonOpts {
  ready?: boolean;
  gameSlug?: Lesson["gameSlug"];
  duration?: number;
}

function L(title: string, summary: string, opts: LessonOpts = {}): Lesson {
  return {
    slug: slugify(title),
    title,
    summary,
    durationMinutes: opts.duration ?? 15,
    status: opts.ready ? "ready" : "coming-soon",
    gameSlug: opts.gameSlug,
  };
}

function C(title: string, description: string, lessons: Lesson[]): Chapter {
  return { slug: slugify(title), title, description, lessons };
}

// ─────────────────────────── Sinh 30 bài/môn/lớp: 15 bài học lõi + 15 bài thực hành ───────────────────────────
interface Topic {
  title: string;
  summary: string;
  opts?: LessonOpts;
}

function topic(title: string, summary: string, opts?: LessonOpts): Topic {
  return { title, summary, opts };
}

// Mỗi bài học lõi có một bài thực hành/luyện tập đi kèm ngay sau, luân phiên 5 kiểu khác nhau
// để nội dung thực hành không lặp lại một cách máy móc.
const PRACTICE_VERBS = ["Thực hành", "Luyện tập", "Vận dụng", "Trò chơi ôn tập", "Thử thách nhỏ"] as const;
const PRACTICE_TEXT: Record<(typeof PRACTICE_VERBS)[number], string> = {
  "Thực hành": "Làm bài tập thực hành để củng cố kiến thức vừa học.",
  "Luyện tập": "Luyện tập thêm với các dạng bài đa dạng, tăng dần độ khó.",
  "Vận dụng": "Vận dụng kiến thức vào tình huống thực tế gần gũi với em.",
  "Trò chơi ôn tập": "Ôn lại nội dung bài học qua một trò chơi ngắn, vui nhộn.",
  "Thử thách nhỏ": "Thử sức với một thử thách nhỏ để kiểm tra mức độ hiểu bài.",
};

function unit(chapterTitle: string, chapterDescription: string, topics: Topic[]): Chapter {
  const lessons: Lesson[] = [];
  topics.forEach((t, i) => {
    lessons.push(L(t.title, t.summary, t.opts));
    const verb = PRACTICE_VERBS[i % PRACTICE_VERBS.length];
    lessons.push(L(`${verb}: ${t.title}`, PRACTICE_TEXT[verb]));
  });
  return C(chapterTitle, chapterDescription, lessons);
}

// Ghép 15 chủ đề lõi thành 3 chương (5 chủ đề/chương); mỗi chương sau khi ghép thực hành có 10 bài,
// tổng 3 chương = 30 bài/môn/lớp.
function grade30(chapterDefs: [string, string][], topics: Topic[]): Chapter[] {
  const chunks = [topics.slice(0, 5), topics.slice(5, 10), topics.slice(10, 15)];
  return chapterDefs.map(([title, description], i) => unit(title, description, chunks[i]));
}

const TOAN_CHAPTERS: [string, string][] = [
  ["Nền tảng", "Các khái niệm và kỹ năng tính toán cơ bản mở đầu chương trình."],
  ["Mở rộng", "Mở rộng kiến thức số học, hình học và rèn luyện kỹ năng tính toán."],
  ["Nâng cao & Ôn tập", "Vận dụng kiến thức vào bài toán nâng cao và ôn tập tổng hợp."],
];
const TV_CHAPTERS: [string, string][] = [
  ["Nền tảng ngôn ngữ", "Từ vựng, ngữ pháp và kỹ năng đọc, viết cơ bản."],
  ["Mở rộng kỹ năng", "Mở rộng vốn từ, rèn luyện đọc hiểu và diễn đạt."],
  ["Nâng cao & Ôn tập", "Luyện viết nâng cao và ôn tập tổng hợp cuối chương trình."],
];
const TA_CHAPTERS: [string, string][] = [
  ["Getting Started", "Từ vựng và mẫu câu giao tiếp cơ bản."],
  ["Expanding Vocabulary", "Mở rộng vốn từ và tình huống giao tiếp quen thuộc."],
  ["Practice & Review", "Luyện tập nâng cao và ôn tập tổng hợp."],
];
const KP_CHAPTERS: [string, string][] = [
  ["Nền tảng", "Khám phá gia đình, trường học và những điều gần gũi quanh em."],
  ["Mở rộng", "Mở rộng hiểu biết về cộng đồng, tự nhiên và xã hội."],
  ["Nâng cao & Ôn tập", "Tìm hiểu sâu hơn và ôn tập tổng hợp."],
];
const DD_CHAPTERS: [string, string][] = [
  ["Nền tảng", "Những giá trị sống và cách ứng xử cơ bản trong gia đình, nhà trường."],
  ["Mở rộng", "Mở rộng kỹ năng ứng xử với cộng đồng và xã hội."],
  ["Nâng cao & Ôn tập", "Rèn luyện phẩm chất nâng cao và ôn tập tổng hợp."],
];
const TH_CHAPTERS: [string, string][] = [
  ["Làm quen", "Làm quen máy tính và các thao tác cơ bản."],
  ["Thực hành kỹ năng", "Thực hành các kỹ năng số cơ bản."],
  ["Nâng cao & Ôn tập", "Kỹ năng số nâng cao và ôn tập tổng hợp."],
];

// ═══════════════════════════════ TOÁN ═══════════════════════════════
const toan1Topics: Topic[] = [
  topic("Các số đến 10", "Nhận biết, đọc, viết và đếm các số từ 0 đến 10.", {
    ready: true,
    gameSlug: "do-vui-toan-hoc",
    duration: 20,
  }),
  topic("So sánh số trong phạm vi 10", "So sánh hai số, sắp xếp thứ tự các số đã học."),
  topic("Các số đến 20", "Đếm, đọc và viết các số từ 11 đến 20."),
  topic("Phép cộng trong phạm vi 10", "Thực hiện phép cộng hai số có tổng không quá 10."),
  topic("Phép trừ trong phạm vi 10", "Thực hiện phép trừ trong phạm vi 10 qua hình ảnh trực quan."),
  topic("Ôn tập phép cộng, phép trừ", "Luyện tập tổng hợp cộng trừ và giải bài toán có lời văn ngắn."),
  topic("Hình vuông, hình tròn, hình tam giác", "Nhận diện và phân loại các hình cơ bản trong cuộc sống."),
  topic("Đo độ dài", "Làm quen đơn vị đo độ dài cm và ước lượng độ dài đồ vật."),
  topic("Xem đồng hồ", "Đọc giờ đúng trên đồng hồ kim."),
  topic("Đếm đến 100", "Đếm, đọc, viết các số tròn chục và các số đến 100."),
  topic("Cộng trừ không nhớ trong phạm vi 100", "Thực hiện phép cộng, trừ không nhớ hai chữ số."),
  topic("Giải toán có lời văn", "Phân tích đề bài và trình bày lời giải bài toán đơn giản."),
  topic("Khối hộp chữ nhật, khối lập phương", "Nhận biết một số hình khối quen thuộc trong thực tế."),
  topic("Phép cộng, trừ trong phạm vi 20", "Mở rộng kỹ năng cộng trừ sang phạm vi 20."),
  topic("Ôn tập cuối năm học", "Hệ thống lại toàn bộ kiến thức Toán lớp 1 đã học."),
];
const toan2Topics: Topic[] = [
  topic("Phép cộng có nhớ", "Thực hiện phép cộng hai chữ số có nhớ sang hàng chục."),
  topic("Phép trừ có nhớ", "Thực hiện phép trừ hai chữ số có nhớ."),
  topic("Bài toán về nhiều hơn, ít hơn", "Vận dụng cộng trừ để giải bài toán so sánh."),
  topic("Bảng nhân 2 và bảng nhân 5", "Học thuộc và vận dụng bảng nhân 2, 5."),
  topic("Bảng nhân 3 và bảng nhân 4", "Học thuộc và vận dụng bảng nhân 3, 4."),
  topic("Bảng chia 2, 3, 4, 5", "Làm quen phép chia là phép tính ngược của phép nhân."),
  topic("Đường thẳng, đường gấp khúc", "Nhận biết và vẽ đường thẳng, đường gấp khúc."),
  topic("Mét, ki-lô-mét", "Làm quen đơn vị đo độ dài mét và ki-lô-mét."),
  topic("Xem lịch, xem giờ", "Đọc thông tin trên lịch và đồng hồ trong tình huống thực tế."),
  topic("Các số tròn trăm, tròn chục", "Đếm và nhận biết cấu tạo số tròn trăm, tròn chục."),
  topic("So sánh các số đến 1000", "So sánh và sắp xếp các số có ba chữ số."),
  topic("Phép cộng, trừ các số có ba chữ số", "Thực hiện cộng trừ với số có ba chữ số."),
  topic("Hình tứ giác, hình chữ nhật", "Nhận biết đặc điểm hình tứ giác, hình chữ nhật."),
  topic("Ki-lô-gam, lít", "Làm quen đơn vị đo khối lượng và dung tích."),
  topic("Ôn tập cuối năm học", "Hệ thống lại toàn bộ kiến thức Toán lớp 2 đã học."),
];
const toan3Topics: Topic[] = [
  topic("Ôn tập các số đến 1000", "Ôn tập đọc, viết, so sánh số có ba chữ số."),
  topic("Cộng, trừ các số trong phạm vi 1000", "Thực hành cộng trừ có nhớ với số có ba chữ số."),
  topic("Bảng nhân 6, 7, 8, 9", "Học thuộc và vận dụng các bảng nhân còn lại."),
  topic("Bảng chia 6, 7, 8, 9", "Học thuộc và vận dụng các bảng chia còn lại."),
  topic("Nhân, chia số có hai, ba chữ số", "Thực hiện phép nhân, chia với số có nhiều chữ số cho số có một chữ số."),
  topic("Góc vuông, góc không vuông", "Nhận biết góc vuông bằng ê-ke."),
  topic("Chu vi hình chữ nhật, hình vuông", "Tính chu vi các hình đã học."),
  topic("Làm quen với phân số", "Nhận biết phân số qua hình ảnh chia phần bằng nhau."),
  topic("Các số đến 10 000, 100 000", "Đọc, viết, so sánh các số có nhiều chữ số."),
  topic("Diện tích hình chữ nhật, hình vuông", "Tính diện tích qua công thức đơn giản."),
  topic("Gam, mi-li-lít", "Làm quen thêm đơn vị đo khối lượng và dung tích nhỏ."),
  topic("Bài toán liên quan đến rút về đơn vị", "Giải bài toán bằng cách rút về đơn vị."),
  topic("Nhân, chia số có bốn, năm chữ số cho số có một chữ số", "Mở rộng kỹ năng nhân chia với số lớn hơn."),
  topic("Làm quen với dữ liệu, bảng số liệu", "Đọc và nhận xét thông tin từ bảng số liệu đơn giản."),
  topic("Ôn tập cuối năm học", "Hệ thống lại toàn bộ kiến thức Toán lớp 3 đã học."),
];
const toan4Topics: Topic[] = [
  topic("Đọc, viết số đến lớp triệu", "Nắm cấu tạo hàng, lớp của số tự nhiên lớn."),
  topic("So sánh và xếp thứ tự các số tự nhiên", "So sánh các số có nhiều chữ số."),
  topic("Cộng, trừ số có nhiều chữ số", "Thực hiện phép cộng, trừ với số lớn."),
  topic("Nhân với số có hai, ba chữ số", "Kỹ thuật đặt tính nhân số lớn."),
  topic("Chia cho số có hai chữ số", "Kỹ thuật chia số lớn cho số có hai chữ số."),
  topic("Khái niệm phân số", "Hiểu phân số và cách đọc, viết phân số."),
  topic("Rút gọn và quy đồng mẫu số", "So sánh và quy đồng các phân số."),
  topic("Cộng, trừ, nhân, chia phân số", "Thực hiện bốn phép tính với phân số."),
  topic("Góc nhọn, góc tù, góc bẹt", "Phân biệt các loại góc."),
  topic("Diện tích hình bình hành, hình thoi", "Tính diện tích qua công thức."),
  topic("Hai đường thẳng vuông góc, song song", "Nhận biết và vẽ hai đường thẳng vuông góc, song song."),
  topic("Tính chất giao hoán, kết hợp của phép cộng, phép nhân", "Vận dụng tính chất để tính nhanh."),
  topic("Biểu đồ cột", "Đọc và nhận xét thông tin trên biểu đồ cột."),
  topic("Bài toán tìm hai số khi biết tổng và hiệu", "Giải dạng toán tổng - hiệu quen thuộc."),
  topic("Ôn tập cuối năm học", "Hệ thống lại toàn bộ kiến thức Toán lớp 4 đã học."),
];
const toan5Topics: Topic[] = [
  topic("Ôn tập phân số", "Củng cố các phép tính với phân số."),
  topic("Khái niệm số thập phân", "Đọc, viết và so sánh số thập phân."),
  topic("Cộng, trừ số thập phân", "Thực hiện phép cộng, trừ số thập phân."),
  topic("Nhân, chia số thập phân", "Thực hiện phép nhân, chia số thập phân."),
  topic("Hình hộp chữ nhật, hình lập phương", "Nhận biết đặc điểm và tính diện tích xung quanh."),
  topic("Thể tích hình hộp chữ nhật, hình lập phương", "Tính thể tích qua công thức."),
  topic("Tỉ số phần trăm", "Tính tỉ số phần trăm và vận dụng vào bài toán thực tế."),
  topic("Toán chuyển động đều", "Giải bài toán quãng đường, vận tốc, thời gian."),
  topic("Hình tam giác, diện tích hình tam giác", "Nhận biết và tính diện tích hình tam giác."),
  topic("Hình thang, diện tích hình thang", "Nhận biết và tính diện tích hình thang."),
  topic("Hình tròn, chu vi và diện tích hình tròn", "Tính chu vi, diện tích hình tròn qua số Pi."),
  topic("Bài toán về tỉ lệ thuận, tỉ lệ nghịch", "Nhận biết và giải bài toán tỉ lệ."),
  topic("Biểu đồ hình quạt", "Đọc và nhận xét thông tin trên biểu đồ hình quạt."),
  topic("Vận tốc, quãng đường, thời gian nâng cao", "Giải các dạng toán chuyển động nâng cao hơn."),
  topic("Ôn tập cuối cấp Tiểu học", "Hệ thống lại kiến thức Toán trọng tâm bậc Tiểu học."),
];

// ═══════════════════════════════ TIẾNG VIỆT ═══════════════════════════════
const tv1Topics: Topic[] = [
  topic("Âm và chữ cái", "Nhận biết mặt chữ và phát âm 29 chữ cái tiếng Việt.", {
    ready: true,
    gameSlug: "do-vui-tieng-viet",
    duration: 20,
  }),
  topic("Ghép vần", "Ghép âm đầu, vần và thanh điệu thành tiếng."),
  topic("Dấu thanh", "Nhận biết và sử dụng 6 thanh điệu tiếng Việt."),
  topic("Đọc trơn câu ngắn", "Luyện đọc thành tiếng các câu, đoạn ngắn."),
  topic("Luyện viết chữ thường", "Viết đúng mẫu chữ và khoảng cách con chữ."),
  topic("Kể chuyện theo tranh", "Quan sát tranh và kể lại nội dung câu chuyện."),
  topic("Nghe hiểu và trả lời câu hỏi", "Luyện kỹ năng nghe và phản hồi phù hợp."),
  topic("Vần có âm cuối", "Ghép và đọc các vần có âm cuối thường gặp."),
  topic("Luyện viết chữ hoa", "Viết đúng mẫu các chữ cái viết hoa."),
  topic("Đọc hiểu đoạn văn ngắn", "Đọc và trả lời câu hỏi về nội dung đoạn văn ngắn."),
  topic("Nói lời chào, lời cảm ơn, xin lỗi", "Luyện nói các câu giao tiếp lễ phép hàng ngày."),
  topic("Từ ngữ chỉ đồ vật quen thuộc", "Mở rộng vốn từ về đồ vật quen thuộc quanh em."),
  topic("Chính tả nghe - viết", "Nghe và viết đúng chính tả các câu ngắn."),
  topic("Kể lại một việc em đã làm", "Luyện nói, kể lại một việc đơn giản đã trải qua."),
  topic("Ôn tập cuối năm học", "Hệ thống lại toàn bộ kiến thức Tiếng Việt lớp 1 đã học."),
];
const tv2Topics: Topic[] = [
  topic("Từ chỉ sự vật, hoạt động, đặc điểm", "Nhận biết và sử dụng ba loại từ cơ bản."),
  topic("Từ ngữ về gia đình, trường học", "Mở rộng vốn từ theo chủ điểm quen thuộc."),
  topic("Quy tắc chính tả cơ bản", "Phân biệt các trường hợp chính tả dễ nhầm lẫn."),
  topic("Dấu câu và đặt câu", "Sử dụng dấu chấm, dấu phẩy khi viết câu."),
  topic("Viết đoạn văn kể về gia đình", "Viết 3-5 câu giới thiệu về gia đình em."),
  topic("Viết đoạn văn kể về bạn bè", "Viết đoạn văn ngắn kể về người bạn thân."),
  topic("Từ ngữ về quê hương, đất nước", "Mở rộng vốn từ theo chủ điểm quê hương."),
  topic("So sánh sự vật", "Làm quen biện pháp so sánh đơn giản trong câu văn."),
  topic("Đọc hiểu truyện ngắn", "Đọc và trả lời câu hỏi về nội dung truyện ngắn."),
  topic("Đọc hiểu bài thơ", "Cảm nhận nội dung và vần điệu bài thơ ngắn."),
  topic("Viết đoạn văn tả đồ vật", "Miêu tả đặc điểm nổi bật của một đồ vật quen thuộc."),
  topic("Viết đoạn văn tả con vật nuôi", "Miêu tả đặc điểm một con vật nuôi trong nhà."),
  topic("Viết thiệp chúc mừng, lời nhắn", "Luyện viết các văn bản ngắn thường dùng."),
  topic("Câu hỏi Ai là gì? Ai làm gì? Ai thế nào?", "Nhận biết và đặt các kiểu câu quen thuộc."),
  topic("Ôn tập cuối năm học", "Hệ thống lại toàn bộ kiến thức Tiếng Việt lớp 2 đã học."),
];
const tv3Topics: Topic[] = [
  topic("Từ loại: danh từ, động từ, tính từ", "Phân biệt ba loại từ cơ bản trong câu."),
  topic("Câu kể, câu hỏi, câu cảm", "Nhận biết và đặt các kiểu câu theo mục đích nói."),
  topic("Đọc hiểu truyện thiếu nhi", "Đọc và trả lời câu hỏi về nội dung truyện."),
  topic("Đọc hiểu thơ thiếu nhi", "Cảm nhận vần điệu và nội dung bài thơ."),
  topic("Viết thư cho người thân", "Viết một bức thư ngắn đúng thể thức."),
  topic("Tả đồ vật quen thuộc", "Miêu tả đặc điểm nổi bật của một đồ vật."),
  topic("So sánh, nhân hoá trong câu văn", "Nhận biết biện pháp so sánh, nhân hoá."),
  topic("Câu khiến", "Nhận biết và đặt câu khiến phù hợp tình huống."),
  topic("Đọc hiểu văn bản thông tin đơn giản", "Khai thác thông tin từ văn bản ngắn."),
  topic("Tả cây cối", "Miêu tả một loài cây quen thuộc."),
  topic("Tả con vật", "Miêu tả đặc điểm và hoạt động của một con vật."),
  topic("Kể lại một câu chuyện đã đọc, đã nghe", "Luyện kể lại nội dung câu chuyện đã biết."),
  topic("Viết đoạn văn nêu tình cảm, cảm xúc", "Bày tỏ tình cảm với người thân, sự vật quen thuộc."),
  topic("Mở rộng vốn từ theo chủ điểm quê hương", "Mở rộng vốn từ về quê hương, đất nước."),
  topic("Ôn tập cuối năm học", "Hệ thống lại toàn bộ kiến thức Tiếng Việt lớp 3 đã học."),
];
const tv4Topics: Topic[] = [
  topic("Danh từ, động từ, tính từ nâng cao", "Sử dụng linh hoạt các từ loại trong câu văn."),
  topic("Câu ghép", "Nhận biết và đặt câu ghép có quan hệ từ."),
  topic("Cảm thụ thơ", "Phân tích hình ảnh và cảm xúc trong bài thơ."),
  topic("Cảm thụ văn miêu tả", "Nhận diện các chi tiết miêu tả đặc sắc."),
  topic("Văn tả cây cối", "Miêu tả một loài cây theo trình tự hợp lý."),
  topic("Văn tả con vật", "Miêu tả đặc điểm và hoạt động của con vật yêu thích."),
  topic("Kể chuyện sáng tạo", "Xây dựng câu chuyện dựa trên trí tưởng tượng."),
  topic("Trạng ngữ trong câu", "Nhận biết và sử dụng trạng ngữ chỉ thời gian, nơi chốn."),
  topic("Dấu gạch ngang, dấu ngoặc kép", "Sử dụng đúng hai loại dấu câu này khi viết."),
  topic("Đọc hiểu văn bản nghị luận đơn giản", "Làm quen với văn bản nêu ý kiến, lí lẽ đơn giản."),
  topic("Văn tả cảnh", "Miêu tả một cảnh quen thuộc theo trình tự hợp lý."),
  topic("Viết đoạn văn nêu ý kiến, lí do", "Trình bày ý kiến cá nhân kèm lí do thuyết phục."),
  topic("Mở rộng vốn từ về ước mơ, tài năng", "Mở rộng vốn từ theo chủ điểm ước mơ, tài năng."),
  topic("Tóm tắt câu chuyện", "Luyện kỹ năng tóm tắt nội dung chính của câu chuyện."),
  topic("Ôn tập cuối năm học", "Hệ thống lại toàn bộ kiến thức Tiếng Việt lớp 4 đã học."),
];
const tv5Topics: Topic[] = [
  topic("Câu ghép nâng cao", "Sử dụng các quan hệ từ nối vế câu ghép."),
  topic("Liên kết câu trong đoạn văn", "Sử dụng phép lặp, phép thế để liên kết câu."),
  topic("Đọc hiểu văn bản nghệ thuật", "Phân tích chủ đề, nhân vật trong văn bản."),
  topic("Đọc hiểu văn bản thông tin", "Khai thác thông tin từ văn bản khoa học, báo chí."),
  topic("Văn tả người", "Miêu tả ngoại hình và tính cách một người thân quen."),
  topic("Thuyết trình, báo cáo ngắn", "Trình bày một chủ đề trước lớp một cách mạch lạc."),
  topic("Biện pháp tu từ: so sánh, nhân hoá, điệp ngữ", "Nhận biết tác dụng của các biện pháp tu từ."),
  topic("Câu ghép có cặp quan hệ từ", "Sử dụng cặp quan hệ từ nguyên nhân - kết quả, tương phản."),
  topic("Đọc hiểu văn bản nghị luận", "Nhận biết ý kiến, lí lẽ, dẫn chứng trong văn bản."),
  topic("Viết bài văn tả cảnh sinh hoạt", "Miêu tả một hoạt động, cảnh sinh hoạt quen thuộc."),
  topic("Viết đoạn văn thể hiện quan điểm cá nhân", "Trình bày và bảo vệ quan điểm cá nhân."),
  topic("Viết báo cáo công việc đơn giản", "Làm quen cách trình bày báo cáo ngắn gọn."),
  topic("Mở rộng vốn từ về công dân, quyền và bổn phận", "Mở rộng vốn từ theo chủ điểm công dân."),
  topic("Ôn tập cách viết đoạn kết bài, mở bài", "Rèn kỹ năng viết mở bài, kết bài ấn tượng."),
  topic("Ôn tập cuối cấp Tiểu học", "Hệ thống lại kiến thức Tiếng Việt trọng tâm bậc Tiểu học."),
];

// ═══════════════════════════════ TIẾNG ANH ═══════════════════════════════
const ta1Topics: Topic[] = [
  topic("Hello! Chào hỏi cơ bản", "Học các mẫu câu chào hỏi và giới thiệu tên."),
  topic("The Alphabet", "Làm quen 26 chữ cái tiếng Anh qua bài hát."),
  topic("Colours", "Học tên các màu sắc cơ bản."),
  topic("Animals", "Học tên các con vật nuôi và con vật hoang dã quen thuộc."),
  topic("Classroom Objects", "Học tên đồ dùng học tập trong lớp."),
  topic("Numbers 1-10", "Đếm và nhận biết số từ 1 đến 10 bằng tiếng Anh."),
  topic("My Body", "Học từ vựng về các bộ phận cơ thể."),
  topic("My Family", "Học từ vựng về các thành viên trong gia đình."),
  topic("Fruits", "Học tên các loại trái cây quen thuộc."),
  topic("Shapes", "Học tên các hình cơ bản bằng tiếng Anh."),
  topic("Toys", "Học từ vựng về các loại đồ chơi quen thuộc."),
  topic("Weather", "Học từ vựng đơn giản về thời tiết."),
  topic("Feelings", "Học từ vựng diễn tả cảm xúc: vui, buồn, mệt..."),
  topic("Actions", "Học các từ chỉ hành động đơn giản: đứng, ngồi, chạy..."),
  topic("Review: My First Words", "Ôn tập tổng hợp từ vựng đã học trong năm."),
];
const ta2Topics: Topic[] = [
  topic("My Name Is...", "Giới thiệu tên và tuổi của bản thân."),
  topic("My Family", "Học từ vựng về các thành viên trong gia đình."),
  topic("Numbers 1-20", "Đếm và nhận biết số từ 1 đến 20 bằng tiếng Anh."),
  topic("My Toys", "Học từ vựng về các loại đồ chơi quen thuộc."),
  topic("My School Bag", "Học từ vựng về đồ dùng trong cặp sách."),
  topic("Days of the Week", "Học tên các ngày trong tuần."),
  topic("My House", "Học từ vựng về các phòng trong nhà."),
  topic("Food I Like", "Nói về món ăn yêu thích đơn giản."),
  topic("Animals at the Zoo", "Học từ vựng về các con vật ở sở thú."),
  topic("Clothes", "Học từ vựng về quần áo thường mặc."),
  topic("Sports", "Học từ vựng về một số môn thể thao quen thuộc."),
  topic("Colours and Shapes Review", "Ôn tập từ vựng về màu sắc và hình dạng."),
  topic("My Classroom", "Học từ vựng mô tả lớp học của em."),
  topic("What Can You Do?", "Học mẫu câu hỏi và trả lời về khả năng đơn giản."),
  topic("Review: All About Me", "Ôn tập tổng hợp từ vựng và mẫu câu đã học."),
];
const ta3Topics: Topic[] = [
  topic("Hello - Chào hỏi và giới thiệu", "Thực hành mẫu câu chào hỏi và giới thiệu bản thân.", {
    ready: true,
    gameSlug: "ghep-tu-vung",
    duration: 20,
  }),
  topic("My School", "Học từ vựng về trường lớp và các môn học."),
  topic("This Is My House", "Giới thiệu về ngôi nhà của em."),
  topic("In My Room", "Học từ vựng về đồ đạc trong phòng."),
  topic("My Hobbies", "Nói về sở thích của bản thân và bạn bè."),
  topic("Weather and Seasons", "Học từ vựng về thời tiết và bốn mùa."),
  topic("My Friends", "Giới thiệu về bạn bè của em."),
  topic("Numbers and Time", "Học số đếm và cách nói giờ đơn giản."),
  topic("My Daily Activities", "Nói về các hoạt động hàng ngày đơn giản."),
  topic("At the Zoo", "Học từ vựng và mẫu câu khi nói về sở thú."),
  topic("My Favourite Food", "Nói về món ăn yêu thích và khẩu vị."),
  topic("In the Classroom", "Học mẫu câu giao tiếp trong lớp học."),
  topic("Places in My Neighbourhood", "Học từ vựng về các địa điểm quen thuộc."),
  topic("My Birthday", "Nói về sinh nhật của em."),
  topic("Review: My World", "Ôn tập tổng hợp từ vựng và mẫu câu đã học."),
];
const ta4Topics: Topic[] = [
  topic("Describing People", "Miêu tả ngoại hình của người thân."),
  topic("My Best Friend", "Giới thiệu về người bạn thân của em."),
  topic("Daily Routine", "Nói về các hoạt động hàng ngày."),
  topic("Telling the Time", "Học cách nói giờ bằng tiếng Anh."),
  topic("My Favourite Food", "Nói về món ăn yêu thích và khẩu vị."),
  topic("At the Market", "Từ vựng mua sắm thực phẩm cơ bản."),
  topic("Jobs and Occupations", "Học từ vựng về các nghề nghiệp."),
  topic("Means of Transport", "Học từ vựng về phương tiện giao thông."),
  topic("My School Subjects", "Nói về các môn học ở trường."),
  topic("Free Time Activities", "Nói về hoạt động giải trí ngoài giờ học."),
  topic("My Neighbourhood", "Miêu tả khu phố nơi em sống."),
  topic("Animals and Habitats", "Học từ vựng về môi trường sống của động vật."),
  topic("Shopping for Clothes", "Từ vựng và mẫu câu khi mua quần áo."),
  topic("Special Occasions", "Nói về các dịp lễ đặc biệt trong năm."),
  topic("Review: My Life", "Ôn tập tổng hợp từ vựng và mẫu câu đã học."),
];
const ta5Topics: Topic[] = [
  topic("Places in Town", "Học từ vựng về các địa điểm công cộng."),
  topic("Giving Directions", "Học cách hỏi và chỉ đường đơn giản."),
  topic("Healthy Habits", "Nói về thói quen sống khoẻ mạnh."),
  topic("My Free Time Activities", "Mô tả các hoạt động giải trí yêu thích."),
  topic("The Environment", "Từ vựng về thiên nhiên và môi trường."),
  topic("Protecting Our Planet", "Nói về hành động bảo vệ môi trường."),
  topic("Countries and Nationalities", "Học tên một số quốc gia và quốc tịch."),
  topic("Famous Landmarks", "Học từ vựng về các địa danh nổi tiếng."),
  topic("My Future Job", "Nói về ước mơ nghề nghiệp trong tương lai."),
  topic("Rules and Responsibilities", "Nói về nội quy và trách nhiệm bản thân."),
  topic("Technology in Our Life", "Từ vựng về công nghệ trong đời sống."),
  topic("Travel and Transport", "Nói về các phương tiện và chuyến đi."),
  topic("Review: My Journey", "Ôn tập tổng hợp từ vựng và mẫu câu đã học."),
  topic("Getting Ready for Secondary School", "Làm quen từ vựng, tình huống bậc THCS."),
  topic("Review: Looking Back", "Ôn tập tổng hợp toàn bộ chương trình Tiếng Anh Tiểu học."),
];

// ═══════════════════════════════ KHÁM PHÁ TỰ NHIÊN & XÃ HỘI ═══════════════════════════════
const kp1Topics: Topic[] = [
  topic("Gia đình em", "Giới thiệu các thành viên và hoạt động trong gia đình."),
  topic("Trường học của em", "Khám phá lớp học, sân trường và bạn bè."),
  topic("Nơi em sống", "Tìm hiểu về xóm làng, khu phố nơi em ở."),
  topic("An toàn khi ở nhà", "Nhận biết và phòng tránh nguy hiểm trong nhà."),
  topic("Cây xanh quanh em", "Quan sát và gọi tên một số loại cây quen thuộc."),
  topic("Con vật quanh em", "Quan sát và gọi tên một số con vật quen thuộc."),
  topic("Các thành viên trong gia đình", "Tìm hiểu vai trò của từng thành viên trong gia đình."),
  topic("Đồ dùng trong gia đình", "Nhận biết công dụng của một số đồ dùng quen thuộc."),
  topic("Lớp học của em", "Tìm hiểu nội quy và các hoạt động trong lớp học."),
  topic("An toàn khi tham gia giao thông", "Nhận biết một số quy tắc an toàn giao thông cơ bản."),
  topic("Thời tiết quanh em", "Quan sát và mô tả thời tiết hàng ngày."),
  topic("Ngày và đêm", "Nhận biết sự khác nhau giữa ngày và đêm."),
  topic("Giữ gìn vệ sinh cơ thể", "Rèn thói quen vệ sinh cá nhân hàng ngày."),
  topic("Ăn uống có lợi cho sức khoẻ", "Nhận biết các thực phẩm tốt cho sức khoẻ."),
  topic("Ôn tập cuối năm học", "Hệ thống lại kiến thức Khám Phá lớp 1 đã học."),
];
const kp2Topics: Topic[] = [
  topic("Giữ an toàn ở trường", "Nhận biết các tình huống nguy hiểm ở trường học."),
  topic("Các hoạt động ở trường", "Tìm hiểu các hoạt động học tập, vui chơi ở trường."),
  topic("Nghề nghiệp quanh em", "Tìm hiểu một số nghề nghiệp phổ biến trong cộng đồng."),
  topic("Cơ quan vận động", "Tìm hiểu vai trò của xương và cơ."),
  topic("Cơ quan tiêu hoá", "Tìm hiểu đường đi của thức ăn trong cơ thể."),
  topic("Ban ngày và ban đêm", "Giải thích hiện tượng ngày và đêm."),
  topic("Bốn mùa trong năm", "Tìm hiểu đặc điểm bốn mùa trong năm.", { ready: true, duration: 18 }),
  topic("Phòng tránh té ngã, bỏng", "Nhận biết và phòng tránh một số tai nạn thường gặp."),
  topic("Họ hàng nội, ngoại", "Tìm hiểu mối quan hệ họ hàng trong gia đình."),
  topic("Phòng tránh bị lạc", "Nhận biết cách xử lý khi bị lạc đường."),
  topic("Cây xanh và môi trường sống", "Tìm hiểu vai trò của cây xanh với môi trường."),
  topic("Con vật có ích, con vật có hại", "Phân biệt lợi ích và tác hại của một số con vật."),
  topic("Giữ vệ sinh môi trường xung quanh", "Rèn ý thức giữ gìn môi trường sống sạch đẹp."),
  topic("Bầu trời ban đêm", "Quan sát và tìm hiểu về trăng, sao trên bầu trời."),
  topic("Ôn tập cuối năm học", "Hệ thống lại kiến thức Khám Phá lớp 2 đã học."),
];
const kp3Topics: Topic[] = [
  topic("Họ hàng nội, ngoại", "Tìm hiểu mối quan hệ họ hàng trong gia đình."),
  topic("Phòng tránh hoả hoạn", "Nhận biết nguy cơ và cách phòng tránh cháy nổ."),
  topic("Hoạt động kết nối cộng đồng", "Tìm hiểu các hoạt động ngoại khoá ở trường."),
  topic("Truyền thống nhà trường", "Tìm hiểu lịch sử và truyền thống của trường."),
  topic("Hoạt động sản xuất", "Tìm hiểu các hoạt động sản xuất ở địa phương."),
  topic("Di tích lịch sử - văn hoá", "Tìm hiểu một số di tích tiêu biểu gần nơi em sống."),
  topic("Các bộ phận của thực vật", "Tìm hiểu rễ, thân, lá, hoa, quả và chức năng."),
  topic("Bảo vệ môi trường sống", "Đề xuất hành động bảo vệ môi trường sống của sinh vật."),
  topic("Ngày kỉ niệm của gia đình", "Tìm hiểu ý nghĩa của các ngày kỉ niệm gia đình."),
  topic("Vệ sinh trường học", "Rèn ý thức giữ gìn vệ sinh trường lớp."),
  topic("Một số nghề truyền thống ở địa phương", "Tìm hiểu nghề truyền thống gắn với quê hương."),
  topic("Cơ quan hô hấp", "Tìm hiểu chức năng của cơ quan hô hấp."),
  topic("Cơ quan bài tiết nước tiểu", "Tìm hiểu chức năng cơ bản của cơ quan bài tiết."),
  topic("Phòng tránh đuối nước", "Nhận biết nguy cơ và cách phòng tránh đuối nước."),
  topic("Ôn tập cuối năm học", "Hệ thống lại kiến thức Khám Phá lớp 3 đã học."),
];
const kp4Topics: Topic[] = [
  topic("Nước và vòng tuần hoàn của nước", "Tìm hiểu tính chất của nước và vòng tuần hoàn."),
  topic("Không khí xung quanh ta", "Tìm hiểu thành phần và vai trò của không khí."),
  topic("Ánh sáng và âm thanh", "Tìm hiểu sự truyền ánh sáng và âm thanh."),
  topic("Dinh dưỡng cân đối", "Tìm hiểu các nhóm chất dinh dưỡng cần thiết."),
  topic("Phòng một số bệnh thường gặp", "Tìm hiểu nguyên nhân và cách phòng bệnh."),
  topic("Nước Văn Lang - Vua Hùng", "Tìm hiểu về nhà nước đầu tiên của người Việt."),
  topic("Nước Âu Lạc", "Tìm hiểu về An Dương Vương và thành Cổ Loa."),
  topic("Miền núi và trung du Bắc Bộ", "Tìm hiểu đặc điểm tự nhiên và dân cư."),
  topic("Đồng bằng Bắc Bộ và Nam Bộ", "Tìm hiểu đặc điểm tự nhiên và hoạt động sản xuất."),
  topic("Nhiệt độ và sự truyền nhiệt", "Tìm hiểu hiện tượng nóng, lạnh và sự truyền nhiệt."),
  topic("Nấm và vi khuẩn", "Tìm hiểu vai trò của nấm và vi khuẩn trong đời sống."),
  topic("Nhà Trần và cuộc kháng chiến chống quân Mông - Nguyên", "Tìm hiểu một mốc son lịch sử dân tộc."),
  topic("Duyên hải miền Trung", "Tìm hiểu đặc điểm tự nhiên vùng duyên hải miền Trung."),
  topic("Tây Nguyên", "Tìm hiểu đặc điểm tự nhiên và văn hoá Tây Nguyên."),
  topic("Ôn tập cuối năm học", "Hệ thống lại kiến thức Khám Phá lớp 4 đã học."),
];
const kp5Topics: Topic[] = [
  topic("Sự sinh sản ở thực vật, động vật", "Tìm hiểu các hình thức sinh sản trong tự nhiên."),
  topic("Môi trường và tài nguyên thiên nhiên", "Tìm hiểu vai trò và cách bảo vệ tài nguyên."),
  topic("Năng lượng mặt trời, gió, nước", "Tìm hiểu các nguồn năng lượng tái tạo."),
  topic("Sử dụng năng lượng tiết kiệm", "Đề xuất biện pháp sử dụng năng lượng hiệu quả."),
  topic("Phong trào chống thực dân Pháp", "Tìm hiểu các phong trào yêu nước tiêu biểu."),
  topic("Cách mạng tháng Tám năm 1945", "Tìm hiểu diễn biến và ý nghĩa lịch sử."),
  topic("Các châu lục và đại dương", "Tìm hiểu vị trí các châu lục trên bản đồ thế giới."),
  topic("Đọc bản đồ và biểu đồ", "Rèn kỹ năng khai thác thông tin từ bản đồ, biểu đồ."),
  topic("Chiến dịch Điện Biên Phủ", "Tìm hiểu về chiến thắng lịch sử Điện Biên Phủ."),
  topic("Đất nước thống nhất 30/4/1975", "Tìm hiểu về sự kiện thống nhất đất nước."),
  topic("Biển, đảo Việt Nam", "Tìm hiểu vị trí và tầm quan trọng của biển, đảo."),
  topic("Các nước láng giềng của Việt Nam", "Tìm hiểu về các quốc gia có chung biên giới."),
  topic("Vai trò của sinh vật trong tự nhiên", "Tìm hiểu mối quan hệ giữa các sinh vật trong tự nhiên."),
  topic("Biến đổi khí hậu và ứng phó", "Tìm hiểu nguyên nhân và cách ứng phó biến đổi khí hậu."),
  topic("Ôn tập cuối cấp Tiểu học", "Hệ thống lại kiến thức Khám Phá trọng tâm bậc Tiểu học."),
];

// ═══════════════════════════════ ĐẠO ĐỨC ═══════════════════════════════
const dd1Topics: Topic[] = [
  topic("Kính trọng ông bà, cha mẹ", "Thể hiện sự kính trọng và lễ phép với người lớn.", {
    ready: true,
    duration: 15,
  }),
  topic("Yêu thương anh chị em", "Biết quan tâm, nhường nhịn anh chị em trong nhà."),
  topic("Tự chăm sóc bản thân", "Rèn thói quen vệ sinh cá nhân và tự lập."),
  topic("Thật thà", "Hiểu vì sao cần trung thực và biết nhận lỗi."),
  topic("Gọn gàng, ngăn nắp", "Rèn thói quen sắp xếp đồ dùng gọn gàng."),
  topic("Lễ phép, vâng lời thầy cô", "Thể hiện sự lễ phép với thầy cô giáo."),
  topic("Yêu quý bạn bè", "Biết chia sẻ, giúp đỡ bạn bè xung quanh."),
  topic("Sinh hoạt nền nếp", "Rèn thói quen sinh hoạt đúng giờ giấc."),
  topic("An toàn khi vui chơi", "Nhận biết một số quy tắc an toàn khi vui chơi."),
  topic("Nhận và sửa lỗi", "Biết nhận ra lỗi sai và sửa chữa kịp thời."),
  topic("Yêu thương gia đình", "Thể hiện tình cảm với các thành viên trong gia đình."),
  topic("Kính trọng thầy cô giáo", "Thể hiện sự biết ơn và kính trọng thầy cô."),
  topic("Giữ vệ sinh trường lớp", "Rèn ý thức giữ gìn trường lớp sạch đẹp."),
  topic("Tự giác học tập", "Rèn thói quen tự giác trong học tập."),
  topic("Ôn tập cuối năm học", "Hệ thống lại các bài học Đạo Đức lớp 1."),
];
const dd2Topics: Topic[] = [
  topic("Quý trọng thời gian", "Rèn thói quen sắp xếp thời gian học tập hợp lý."),
  topic("Kính trọng thầy cô giáo", "Thể hiện sự lễ phép và biết ơn thầy cô."),
  topic("Yêu quý bạn bè", "Biết chia sẻ, giúp đỡ bạn bè trong học tập."),
  topic("Nhận lỗi và sửa lỗi", "Biết nhận ra lỗi sai và sửa chữa kịp thời."),
  topic("Chăm chỉ học tập", "Rèn tinh thần chăm chỉ, chủ động trong học tập."),
  topic("Bảo quản đồ dùng cá nhân", "Rèn ý thức giữ gìn đồ dùng học tập."),
  topic("Quan tâm, giúp đỡ người khác", "Biết quan tâm, giúp đỡ người xung quanh."),
  topic("Kính trọng người lớn tuổi", "Thể hiện sự lễ phép với người lớn tuổi."),
  topic("Trung thực trong học tập", "Rèn tính trung thực khi làm bài, kiểm tra."),
  topic("Yêu quý trường lớp", "Thể hiện tình cảm gắn bó với trường lớp."),
  topic("Đoàn kết với bạn bè", "Rèn tinh thần đoàn kết, hợp tác với bạn."),
  topic("Không tự ý lấy đồ của người khác", "Hiểu và tôn trọng tài sản của người khác."),
  topic("Nói lời hay, làm việc tốt", "Rèn thói quen nói lời hay, làm việc tốt hàng ngày."),
  topic("Tự giác làm việc nhà", "Rèn ý thức tự giác giúp đỡ việc nhà vừa sức."),
  topic("Ôn tập cuối năm học", "Hệ thống lại các bài học Đạo Đức lớp 2."),
];
const dd3Topics: Topic[] = [
  topic("Tự hào truyền thống quê hương", "Tìm hiểu và tự hào về nét đẹp quê hương."),
  topic("Ham học hỏi", "Rèn tinh thần ham học và khám phá điều mới."),
  topic("Quan tâm hàng xóm láng giềng", "Thể hiện sự quan tâm, giúp đỡ hàng xóm."),
  topic("Giữ lời hứa", "Hiểu ý nghĩa và rèn thói quen giữ lời hứa."),
  topic("Phòng tránh tai nạn thương tích", "Nhận biết và phòng tránh các tình huống nguy hiểm."),
  topic("Ứng phó với tình huống bất an", "Rèn kỹ năng xử lý khi gặp tình huống không an toàn."),
  topic("Yêu quý và bảo vệ môi trường", "Rèn ý thức bảo vệ môi trường sống xung quanh."),
  topic("Tích cực hoàn thành nhiệm vụ", "Rèn tinh thần trách nhiệm khi được giao việc."),
  topic("Tôn trọng người khuyết tật", "Rèn thái độ tôn trọng, cảm thông với người khuyết tật."),
  topic("Chia sẻ với bạn có hoàn cảnh khó khăn", "Rèn tinh thần sẻ chia, giúp đỡ bạn bè."),
  topic("Ứng xử nơi công cộng", "Rèn thói quen ứng xử văn minh nơi công cộng."),
  topic("Tiết kiệm thời gian", "Rèn thói quen sử dụng thời gian hợp lý."),
  topic("Bảo vệ của công", "Rèn ý thức giữ gìn tài sản chung."),
  topic("Kính già, yêu trẻ", "Rèn thái độ kính trọng người già, yêu thương trẻ nhỏ."),
  topic("Ôn tập cuối năm học", "Hệ thống lại các bài học Đạo Đức lớp 3."),
];
const dd4Topics: Topic[] = [
  topic("Biết ơn người lao động", "Trân trọng công sức của người lao động."),
  topic("Trung thực trong học tập", "Rèn tính trung thực khi làm bài và kiểm tra."),
  topic("Quý trọng đồng tiền", "Hiểu giá trị lao động và cách chi tiêu hợp lý."),
  topic("Bảo vệ của công", "Có ý thức giữ gìn tài sản chung."),
  topic("Tôn trọng sự khác biệt", "Tôn trọng đặc điểm riêng của mỗi người."),
  topic("Hợp tác với bạn bè", "Rèn kỹ năng làm việc nhóm hiệu quả."),
  topic("Vượt khó trong học tập", "Rèn nghị lực vượt qua khó khăn trong học tập."),
  topic("Yêu lao động", "Rèn thái độ tích cực với lao động."),
  topic("Giữ gìn truyền thống gia đình, dòng họ", "Tìm hiểu và tự hào về truyền thống gia đình."),
  topic("Tôn trọng luật giao thông", "Rèn ý thức chấp hành luật giao thông."),
  topic("Bảo vệ môi trường sống", "Rèn ý thức bảo vệ môi trường xung quanh."),
  topic("Kính trọng người cao tuổi", "Rèn thái độ kính trọng, quan tâm người cao tuổi."),
  topic("Ứng xử văn minh nơi công cộng", "Rèn thói quen ứng xử văn minh, lịch sự."),
  topic("Tinh thần tự lập", "Rèn tính tự lập trong học tập và sinh hoạt."),
  topic("Ôn tập cuối năm học", "Hệ thống lại các bài học Đạo Đức lớp 4."),
];
const dd5Topics: Topic[] = [
  topic("Trách nhiệm với bản thân", "Tự giác trong học tập và sinh hoạt hàng ngày."),
  topic("Trách nhiệm với việc chung", "Có ý thức đóng góp cho tập thể lớp, trường."),
  topic("Bảo vệ lẽ phải", "Dũng cảm bảo vệ điều đúng đắn."),
  topic("Phòng, chống xâm hại trẻ em", "Nhận biết và biết cách phòng tránh nguy cơ xâm hại."),
  topic("Lập kế hoạch cá nhân", "Rèn kỹ năng đặt mục tiêu và lập kế hoạch."),
  topic("Sẵn sàng lên lớp 6", "Chuẩn bị tâm thế và kỹ năng cho bậc học mới."),
  topic("Tôn trọng pháp luật", "Hiểu và tôn trọng các quy định chung của xã hội."),
  topic("Bảo vệ môi trường vì tương lai", "Rèn ý thức bảo vệ môi trường lâu dài."),
  topic("Tinh thần đoàn kết quốc tế", "Tìm hiểu về tình hữu nghị giữa các quốc gia."),
  topic("Ứng xử với sự khác biệt văn hoá", "Rèn thái độ tôn trọng sự đa dạng văn hoá."),
  topic("Quản lý thời gian hiệu quả", "Rèn kỹ năng sắp xếp thời gian hợp lý."),
  topic("Tự bảo vệ trên không gian mạng", "Nhận biết và phòng tránh rủi ro trên mạng."),
  topic("Biết ơn và đền ơn đáp nghĩa", "Rèn tinh thần biết ơn với các thế hệ đi trước."),
  topic("Tôn trọng tài sản chung", "Rèn ý thức giữ gìn tài sản chung của cộng đồng."),
  topic("Ôn tập cuối cấp Tiểu học", "Hệ thống lại các bài học Đạo Đức trọng tâm bậc Tiểu học."),
];

// ═══════════════════════════════ TIN HỌC ═══════════════════════════════
const th1Topics: Topic[] = [
  topic("Các bộ phận của máy tính", "Nhận biết màn hình, bàn phím, chuột và thân máy."),
  topic("Bật, tắt máy tính an toàn", "Thực hành các thao tác cơ bản với máy tính."),
  topic("Làm quen phần mềm vẽ", "Sử dụng công cụ vẽ hình, tô màu cơ bản."),
  topic("Nhận biết màn hình, loa, bàn phím, chuột", "Gọi tên và nêu chức năng các thiết bị cơ bản."),
  topic("Cầm và di chuyển chuột đúng cách", "Rèn thao tác cầm và di chuyển chuột chính xác."),
  topic("Nhấp chuột trái, chuột phải", "Phân biệt và thực hành nháy chuột trái, phải."),
  topic("Vẽ hình đơn giản bằng phần mềm vẽ", "Thực hành vẽ các hình cơ bản trên máy tính."),
  topic("Tô màu bức tranh trên máy tính", "Thực hành tô màu một bức tranh đơn giản."),
  topic("Ngồi đúng tư thế khi dùng máy tính", "Rèn tư thế ngồi đúng, bảo vệ sức khoẻ."),
  topic("Trò chuyện cùng trợ lý giọng nói thông minh", "Làm quen khái niệm máy tính có thể \"lắng nghe\" và trả lời qua trợ lý giọng nói."),
  topic("Mở và đóng một phần mềm", "Thực hành thao tác mở, đóng ứng dụng đơn giản."),
  topic("Lưu bài vẽ của em", "Thực hành lưu lại sản phẩm đã làm."),
  topic("Trò chơi rèn luyện thao tác chuột", "Chơi trò chơi giúp rèn luyện thao tác chuột."),
  topic("Sử dụng máy tính có sự hướng dẫn của người lớn", "Rèn thói quen sử dụng máy tính an toàn."),
  topic("Ôn tập cuối năm học", "Hệ thống lại kiến thức Tin Học lớp 1 đã học."),
];
const th2Topics: Topic[] = [
  topic("Sử dụng chuột máy tính", "Rèn kỹ năng di chuyển, nháy chuột chính xác."),
  topic("Làm quen bàn phím", "Nhận biết các hàng phím và gõ chữ cơ bản."),
  topic("Thư mục và tệp tin cơ bản", "Nhận biết cách tổ chức thư mục, tệp tin."),
  topic("Các hàng phím trên bàn phím", "Nhận biết vị trí các hàng phím chính."),
  topic("Gõ chữ cái, chữ số đơn giản", "Thực hành gõ chữ cái, chữ số cơ bản."),
  topic("Tạo thư mục mới", "Thực hành tạo thư mục để lưu trữ dữ liệu."),
  topic("Đặt tên tệp tin, thư mục", "Rèn kỹ năng đặt tên hợp lý cho tệp tin."),
  topic("Mở, xem nội dung thư mục", "Thực hành thao tác mở và xem nội dung thư mục."),
  topic("Sao chép, di chuyển tệp tin đơn giản", "Thực hành sao chép, di chuyển tệp tin cơ bản."),
  topic("Sử dụng phần mềm vẽ nâng cao hơn", "Thực hành các công cụ vẽ nâng cao hơn."),
  topic("Làm quen ứng dụng học tập thông minh", "Khám phá một số ứng dụng học tập có tính năng gợi ý thông minh."),
  topic("Giữ gìn máy tính sạch sẽ, an toàn", "Rèn ý thức bảo quản thiết bị máy tính."),
  topic("Trò chơi luyện gõ bàn phím", "Chơi trò chơi giúp rèn luyện kỹ năng gõ phím."),
  topic("Sử dụng máy tính đúng thời gian quy định", "Rèn thói quen sử dụng máy tính điều độ."),
  topic("Ôn tập cuối năm học", "Hệ thống lại kiến thức Tin Học lớp 2 đã học."),
];
const th3Topics: Topic[] = [
  topic("Thông tin và xử lí thông tin", "Tìm hiểu các dạng thông tin và vai trò của máy tính.", {
    ready: true,
    duration: 15,
  }),
  topic("Gõ văn bản đơn giản", "Thực hành gõ và định dạng văn bản cơ bản."),
  topic("Tư thế ngồi và an toàn khi dùng máy tính", "Rèn thói quen sử dụng máy tính đúng cách."),
  topic("Các dạng thông tin: chữ, âm thanh, hình ảnh", "Phân biệt các dạng thông tin thường gặp."),
  topic("Máy tính giúp xử lí thông tin như thế nào", "Tìm hiểu các bước xử lí thông tin của máy tính."),
  topic("Làm quen phần mềm soạn thảo văn bản", "Làm quen giao diện phần mềm soạn thảo cơ bản."),
  topic("Gõ chữ có dấu tiếng Việt", "Thực hành gõ văn bản tiếng Việt có dấu."),
  topic("Định dạng chữ đậm, chữ nghiêng", "Thực hành định dạng chữ cơ bản."),
  topic("Chèn hình ảnh vào văn bản", "Thực hành chèn hình ảnh minh hoạ vào văn bản."),
  topic("Lưu và mở lại tệp văn bản", "Thực hành lưu và mở lại tệp đã soạn thảo."),
  topic("Nhận biết thông tin trên Internet có sự hỗ trợ", "Làm quen tìm kiếm thông tin cơ bản có hướng dẫn."),
  topic("Trí tuệ nhân tạo (AI) là gì?", "Làm quen khái niệm AI qua các ví dụ gần gũi như trợ lý ảo, gợi ý video."),
  topic("Bảo vệ mắt khi dùng thiết bị điện tử", "Rèn thói quen sử dụng thiết bị điện tử hợp lý."),
  topic("Trò chơi rèn tư duy logic trên máy tính", "Chơi trò chơi giúp rèn tư duy logic."),
  topic("Ôn tập cuối năm học", "Hệ thống lại kiến thức Tin Học lớp 3 đã học."),
];
const th4Topics: Topic[] = [
  topic("Internet là gì?", "Tìm hiểu khái niệm mạng Internet và lợi ích."),
  topic("Tìm kiếm thông tin an toàn", "Rèn kỹ năng tìm kiếm thông tin có chọn lọc."),
  topic("Định dạng văn bản", "Thực hành căn chỉnh, định dạng chữ và đoạn văn."),
  topic("Làm quen giao diện Scratch", "Khám phá giao diện và khối lệnh cơ bản."),
  topic("Tạo chương trình đơn giản", "Lắp ghép khối lệnh để tạo chuyển động cho nhân vật."),
  topic("Thư điện tử (email) là gì?", "Tìm hiểu khái niệm và cách hoạt động của email."),
  topic("Trình bày văn bản: căn lề, giãn dòng", "Thực hành trình bày văn bản đúng chuẩn."),
  topic("AI trong đời sống hàng ngày", "Tìm hiểu một số ứng dụng AI quen thuộc: nhận diện giọng nói, gợi ý nội dung."),
  topic("Khối lệnh chuyển động trong Scratch", "Sử dụng khối lệnh điều khiển chuyển động."),
  topic("Khối lệnh âm thanh trong Scratch", "Sử dụng khối lệnh thêm âm thanh cho chương trình."),
  topic("Tạo nhân vật và bối cảnh trong Scratch", "Thực hành thêm nhân vật, phông nền cho dự án."),
  topic("Lưu và chia sẻ sản phẩm Scratch", "Thực hành lưu và chia sẻ dự án đã tạo."),
  topic("Quy tắc an toàn khi sử dụng Internet", "Nhận biết các quy tắc an toàn cơ bản trên mạng."),
  topic("Nhận biết thông tin sai lệch đơn giản", "Rèn kỹ năng nhận biết thông tin không chính xác."),
  topic("Ôn tập cuối năm học", "Hệ thống lại kiến thức Tin Học lớp 4 đã học."),
];
const th5Topics: Topic[] = [
  topic("Tìm kiếm thông tin trên Internet", "Rèn kỹ năng tìm kiếm và chọn lọc thông tin."),
  topic("Đánh giá độ tin cậy thông tin", "Nhận biết thông tin sai lệch trên mạng."),
  topic("Vòng lặp trong Scratch", "Sử dụng khối lệnh lặp để tối ưu chương trình."),
  topic("Cấu trúc điều kiện", "Sử dụng khối lệnh điều kiện để tạo tương tác."),
  topic("Ứng xử văn minh trên mạng", "Rèn ý thức sử dụng mạng an toàn, lành mạnh."),
  topic("Sử dụng công cụ tìm kiếm hiệu quả", "Rèn kỹ năng đặt từ khoá tìm kiếm phù hợp."),
  topic("Trích dẫn nguồn thông tin", "Làm quen cách ghi nguồn khi sử dụng thông tin."),
  topic("Biến trong Scratch", "Sử dụng biến để lưu trữ và thay đổi giá trị."),
  topic("Tạo trò chơi đơn giản bằng Scratch", "Thực hành tạo một trò chơi nhỏ bằng Scratch."),
  topic("Chia sẻ và giới thiệu sản phẩm lập trình", "Thực hành trình bày sản phẩm đã tạo."),
  topic("Bảo vệ thông tin cá nhân trên mạng", "Rèn ý thức bảo vệ thông tin cá nhân."),
  topic("Nhận biết và phòng tránh bắt nạt trên mạng", "Nhận biết dấu hiệu và cách phòng tránh bắt nạt mạng."),
  topic("Tư duy phản biện với nội dung do AI tạo ra", "Nhận biết nội dung có thể do AI tạo ra và rèn tư duy đánh giá."),
  topic("Sử dụng công cụ AI có trách nhiệm", "Tìm hiểu cách sử dụng công cụ AI một cách trung thực, đúng mực."),
  topic("Ôn tập cuối cấp Tiểu học", "Hệ thống lại kiến thức Tin Học trọng tâm bậc Tiểu học."),
];

// ─────────────────────────── TỔNG HỢP ───────────────────────────
export const curriculum: SubjectCurriculum[] = [
  { subject: "toan", grade: 1, intro: "Làm quen số đếm, hình học và phép tính đầu tiên qua trò chơi trực quan.", chapters: grade30(TOAN_CHAPTERS, toan1Topics) },
  { subject: "toan", grade: 2, intro: "Củng cố phép cộng trừ có nhớ, làm quen phép nhân, phép chia.", chapters: grade30(TOAN_CHAPTERS, toan2Topics) },
  { subject: "toan", grade: 3, intro: "Hoàn thiện bảng nhân chia, làm quen phân số và số lớn.", chapters: grade30(TOAN_CHAPTERS, toan3Topics) },
  { subject: "toan", grade: 4, intro: "Số tự nhiên lớn, phân số và hình học nâng cao.", chapters: grade30(TOAN_CHAPTERS, toan4Topics) },
  { subject: "toan", grade: 5, intro: "Số thập phân, hình học không gian và toán chuyển động.", chapters: grade30(TOAN_CHAPTERS, toan5Topics) },

  { subject: "tieng-viet", grade: 1, intro: "Học vần, tập đọc, tập viết những nét chữ đầu tiên.", chapters: grade30(TV_CHAPTERS, tv1Topics) },
  { subject: "tieng-viet", grade: 2, intro: "Mở rộng vốn từ, luyện chính tả và viết đoạn văn ngắn.", chapters: grade30(TV_CHAPTERS, tv2Topics) },
  { subject: "tieng-viet", grade: 3, intro: "Từ loại, đọc hiểu văn bản và tập làm văn cơ bản.", chapters: grade30(TV_CHAPTERS, tv3Topics) },
  { subject: "tieng-viet", grade: 4, intro: "Luyện từ câu nâng cao, cảm thụ văn học và văn miêu tả.", chapters: grade30(TV_CHAPTERS, tv4Topics) },
  { subject: "tieng-viet", grade: 5, intro: "Câu ghép nâng cao, đọc hiểu văn bản và văn tả người.", chapters: grade30(TV_CHAPTERS, tv5Topics) },

  { subject: "tieng-anh", grade: 1, intro: "Làm quen tiếng Anh qua chào hỏi, bảng chữ cái, màu sắc.", chapters: grade30(TA_CHAPTERS, ta1Topics) },
  { subject: "tieng-anh", grade: 2, intro: "Giới thiệu bản thân, gia đình, số đếm và đồ chơi.", chapters: grade30(TA_CHAPTERS, ta2Topics) },
  { subject: "tieng-anh", grade: 3, intro: "Giao tiếp cơ bản về trường học, ngôi nhà và sở thích.", chapters: grade30(TA_CHAPTERS, ta3Topics) },
  { subject: "tieng-anh", grade: 4, intro: "Mô tả người thân, hoạt động hàng ngày, món ăn và nghề nghiệp.", chapters: grade30(TA_CHAPTERS, ta4Topics) },
  { subject: "tieng-anh", grade: 5, intro: "Cộng đồng, sức khoẻ, môi trường và chuẩn bị lên lớp 6.", chapters: grade30(TA_CHAPTERS, ta5Topics) },

  { subject: "kham-pha", grade: 1, intro: "Khám phá gia đình, trường học và thiên nhiên quanh em.", chapters: grade30(KP_CHAPTERS, kp1Topics) },
  { subject: "kham-pha", grade: 2, intro: "Tìm hiểu trường học, cộng đồng, cơ thể người và bầu trời.", chapters: grade30(KP_CHAPTERS, kp2Topics) },
  { subject: "kham-pha", grade: 3, intro: "Mở rộng hiểu biết về gia đình, cộng đồng và thế giới tự nhiên.", chapters: grade30(KP_CHAPTERS, kp3Topics) },
  { subject: "kham-pha", grade: 4, intro: "Khoa học về chất, sức khoẻ; lịch sử dựng nước và địa lí Việt Nam.", chapters: grade30(KP_CHAPTERS, kp4Topics) },
  { subject: "kham-pha", grade: 5, intro: "Khoa học sự sống, năng lượng; lịch sử cận đại và địa lí thế giới.", chapters: grade30(KP_CHAPTERS, kp5Topics) },

  { subject: "dao-duc", grade: 1, intro: "Tình cảm gia đình và những giá trị sống đầu tiên.", chapters: grade30(DD_CHAPTERS, dd1Topics) },
  { subject: "dao-duc", grade: 2, intro: "Ứng xử ở trường học và trong cộng đồng nhỏ.", chapters: grade30(DD_CHAPTERS, dd2Topics) },
  { subject: "dao-duc", grade: 3, intro: "Tình yêu Tổ quốc, ứng xử với mọi người và tự bảo vệ bản thân.", chapters: grade30(DD_CHAPTERS, dd3Topics) },
  { subject: "dao-duc", grade: 4, intro: "Lòng biết ơn, tính trung thực, yêu lao động và hợp tác.", chapters: grade30(DD_CHAPTERS, dd4Topics) },
  { subject: "dao-duc", grade: 5, intro: "Tinh thần trách nhiệm, bảo vệ lẽ phải và định hướng tương lai.", chapters: grade30(DD_CHAPTERS, dd5Topics) },

  { subject: "tin-hoc", grade: 1, intro: "Làm quen máy tính và phần mềm vẽ đơn giản.", chapters: grade30(TH_CHAPTERS, th1Topics) },
  { subject: "tin-hoc", grade: 2, intro: "Sử dụng chuột, bàn phím và quản lý tệp tin cơ bản.", chapters: grade30(TH_CHAPTERS, th2Topics) },
  { subject: "tin-hoc", grade: 3, intro: "Thông tin, soạn thảo văn bản và an toàn khi dùng máy tính.", chapters: grade30(TH_CHAPTERS, th3Topics) },
  { subject: "tin-hoc", grade: 4, intro: "Internet, soạn thảo nâng cao và lập trình kéo-thả Scratch.", chapters: grade30(TH_CHAPTERS, th4Topics) },
  { subject: "tin-hoc", grade: 5, intro: "Kỹ năng tìm kiếm thông tin, lập trình Scratch nâng cao và văn hoá số.", chapters: grade30(TH_CHAPTERS, th5Topics) },
];

export function getSubjectCurriculum(subject: string, grade: number) {
  return curriculum.find((c) => c.subject === subject && c.grade === grade);
}

export function getLessonBySlug(subject: string, grade: number, lessonSlug: string) {
  const sc = getSubjectCurriculum(subject, grade);
  if (!sc) return undefined;
  for (const chapter of sc.chapters) {
    const lesson = chapter.lessons.find((l) => l.slug === lessonSlug);
    if (lesson) return { lesson, chapter };
  }
  return undefined;
}

export function countLessons(sc: SubjectCurriculum) {
  return sc.chapters.reduce((sum, c) => sum + c.lessons.length, 0);
}

export function countReadyLessons(sc: SubjectCurriculum) {
  return sc.chapters.reduce(
    (sum, c) => sum + c.lessons.filter((l) => l.status === "ready").length,
    0
  );
}

export const totalLessonCount = curriculum.reduce((sum, sc) => sum + countLessons(sc), 0);
