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

// ─────────────────────────── TOÁN ───────────────────────────
const toan1 = C(
  "Làm quen với số",
  "Nhận biết, đếm và so sánh các số trong phạm vi 20.",
  [
    L("Các số đến 10", "Nhận biết, đọc, viết và đếm các số từ 0 đến 10.", {
      ready: true,
      gameSlug: "do-vui-toan-hoc",
      duration: 20,
    }),
    L("So sánh số trong phạm vi 10", "So sánh hai số, sắp xếp thứ tự các số đã học."),
    L("Các số đến 20", "Đếm, đọc và viết các số từ 11 đến 20."),
  ]
);
const toan2 = C(
  "Phép cộng, phép trừ trong phạm vi 10",
  "Làm quen phép tính cộng, trừ và giải toán đơn giản.",
  [
    L("Phép cộng trong phạm vi 10", "Thực hiện phép cộng hai số có tổng không quá 10."),
    L("Phép trừ trong phạm vi 10", "Thực hiện phép trừ trong phạm vi 10 qua hình ảnh trực quan."),
    L("Ôn tập phép cộng, phép trừ", "Luyện tập tổng hợp cộng trừ và giải bài toán có lời văn ngắn."),
  ]
);
const toan3 = C(
  "Hình học và đo lường",
  "Nhận biết hình khối cơ bản, đo độ dài và xem giờ.",
  [
    L("Hình vuông, hình tròn, hình tam giác", "Nhận diện và phân loại các hình cơ bản trong cuộc sống."),
    L("Đo độ dài", "Làm quen đơn vị đo độ dài cm và ước lượng độ dài đồ vật."),
    L("Xem đồng hồ", "Đọc giờ đúng trên đồng hồ kim."),
  ]
);
const toan4c = C(
  "Các số đến 100",
  "Mở rộng phạm vi số và giải toán có lời văn.",
  [
    L("Đếm đến 100", "Đếm, đọc, viết các số tròn chục và các số đến 100."),
    L("Cộng trừ không nhớ trong phạm vi 100", "Thực hiện phép cộng, trừ không nhớ hai chữ số."),
    L("Giải toán có lời văn", "Phân tích đề bài và trình bày lời giải bài toán đơn giản."),
  ]
);

const toan_lop2_1 = C(
  "Cộng, trừ có nhớ trong phạm vi 100",
  "Kỹ thuật cộng, trừ có nhớ và vận dụng vào bài toán thực tế.",
  [
    L("Phép cộng có nhớ", "Thực hiện phép cộng hai chữ số có nhớ sang hàng chục."),
    L("Phép trừ có nhớ", "Thực hiện phép trừ hai chữ số có nhớ."),
    L("Bài toán về nhiều hơn, ít hơn", "Vận dụng cộng trừ để giải bài toán so sánh."),
  ]
);
const toan_lop2_2 = C(
  "Phép nhân, phép chia",
  "Làm quen bảng nhân, bảng chia 2, 3, 4, 5.",
  [
    L("Bảng nhân 2 và bảng nhân 5", "Học thuộc và vận dụng bảng nhân 2, 5."),
    L("Bảng nhân 3 và bảng nhân 4", "Học thuộc và vận dụng bảng nhân 3, 4."),
    L("Bảng chia 2, 3, 4, 5", "Làm quen phép chia là phép tính ngược của phép nhân."),
  ]
);
const toan_lop2_3 = C(
  "Hình học và đo lường",
  "Đường thẳng, đường gấp khúc, đơn vị đo và xem lịch.",
  [
    L("Đường thẳng, đường gấp khúc", "Nhận biết và vẽ đường thẳng, đường gấp khúc."),
    L("Mét, ki-lô-mét", "Làm quen đơn vị đo độ dài mét và ki-lô-mét."),
    L("Xem lịch, xem giờ", "Đọc thông tin trên lịch và đồng hồ trong tình huống thực tế."),
  ]
);
const toan_lop2_4 = C("Các số đến 1000", "Đọc, viết, so sánh các số có ba chữ số.", [
  L("Các số tròn trăm, tròn chục", "Đếm và nhận biết cấu tạo số tròn trăm, tròn chục."),
  L("So sánh các số đến 1000", "So sánh và sắp xếp các số có ba chữ số."),
]);

const toan_lop3_1 = C("Ôn tập và bổ sung", "Củng cố các số đến 1000 và phép cộng trừ.", [
  L("Ôn tập các số đến 1000", "Ôn tập đọc, viết, so sánh số có ba chữ số."),
  L("Cộng, trừ các số trong phạm vi 1000", "Thực hành cộng trừ có nhớ với số có ba chữ số."),
]);
const toan_lop3_2 = C(
  "Bảng nhân, bảng chia",
  "Hoàn thiện bảng nhân chia và nhân chia số có nhiều chữ số.",
  [
    L("Bảng nhân 6, 7, 8, 9", "Học thuộc và vận dụng các bảng nhân còn lại."),
    L("Bảng chia 6, 7, 8, 9", "Học thuộc và vận dụng các bảng chia còn lại."),
    L("Nhân, chia số có hai, ba chữ số", "Thực hiện phép nhân, chia với số có nhiều chữ số cho số có một chữ số."),
  ]
);
const toan_lop3_3 = C("Hình học", "Góc, chu vi và diện tích các hình cơ bản.", [
  L("Góc vuông, góc không vuông", "Nhận biết góc vuông bằng ê-ke."),
  L("Chu vi hình chữ nhật, hình vuông", "Tính chu vi các hình đã học."),
]);
const toan_lop3_4 = C("Phân số và số lớn", "Làm quen phân số và các số đến 100 000.", [
  L("Làm quen với phân số", "Nhận biết phân số qua hình ảnh chia phần bằng nhau."),
  L("Các số đến 10 000, 100 000", "Đọc, viết, so sánh các số có nhiều chữ số."),
]);

const toan_lop4_1 = C("Số tự nhiên lớn", "Đọc, viết và so sánh số có nhiều chữ số.", [
  L("Đọc, viết số đến lớp triệu", "Nắm cấu tạo hàng, lớp của số tự nhiên lớn."),
  L("So sánh và xếp thứ tự các số tự nhiên", "So sánh các số có nhiều chữ số."),
]);
const toan_lop4_2 = C("Bốn phép tính với số tự nhiên", "Cộng, trừ, nhân, chia số có nhiều chữ số.", [
  L("Cộng, trừ số có nhiều chữ số", "Thực hiện phép cộng, trừ với số lớn."),
  L("Nhân với số có hai, ba chữ số", "Kỹ thuật đặt tính nhân số lớn."),
  L("Chia cho số có hai chữ số", "Kỹ thuật chia số lớn cho số có hai chữ số."),
]);
const toan_lop4_3 = C("Phân số", "Khái niệm, rút gọn, quy đồng và tính toán với phân số.", [
  L("Khái niệm phân số", "Hiểu phân số và cách đọc, viết phân số."),
  L("Rút gọn và quy đồng mẫu số", "So sánh và quy đồng các phân số."),
  L("Cộng, trừ, nhân, chia phân số", "Thực hiện bốn phép tính với phân số."),
]);
const toan_lop4_4 = C("Hình học và đo lường", "Góc, hình bình hành, hình thoi.", [
  L("Góc nhọn, góc tù, góc bẹt", "Phân biệt các loại góc."),
  L("Diện tích hình bình hành, hình thoi", "Tính diện tích qua công thức."),
]);

const toan_lop5_1 = C("Phân số và số thập phân", "Ôn tập phân số, làm quen số thập phân.", [
  L("Ôn tập phân số", "Củng cố các phép tính với phân số."),
  L("Khái niệm số thập phân", "Đọc, viết và so sánh số thập phân."),
]);
const toan_lop5_2 = C("Bốn phép tính với số thập phân", "Cộng, trừ, nhân, chia số thập phân.", [
  L("Cộng, trừ số thập phân", "Thực hiện phép cộng, trừ số thập phân."),
  L("Nhân, chia số thập phân", "Thực hiện phép nhân, chia số thập phân."),
]);
const toan_lop5_3 = C("Hình học không gian", "Hình hộp chữ nhật, hình lập phương và thể tích.", [
  L("Hình hộp chữ nhật, hình lập phương", "Nhận biết đặc điểm và tính diện tích xung quanh."),
  L("Thể tích hình hộp chữ nhật, hình lập phương", "Tính thể tích qua công thức."),
]);
const toan_lop5_4 = C("Tỉ số phần trăm và toán chuyển động", "Vận dụng kiến thức vào bài toán thực tế nâng cao.", [
  L("Tỉ số phần trăm", "Tính tỉ số phần trăm và vận dụng vào bài toán thực tế."),
  L("Toán chuyển động đều", "Giải bài toán quãng đường, vận tốc, thời gian."),
]);

// ─────────────────────────── TIẾNG VIỆT ───────────────────────────
const tv1 = C("Học vần", "Làm quen âm, chữ cái và cách ghép vần.", [
  L("Âm và chữ cái", "Nhận biết mặt chữ và phát âm 29 chữ cái tiếng Việt.", {
    ready: true,
    gameSlug: "do-vui-tieng-viet",
    duration: 20,
  }),
  L("Ghép vần", "Ghép âm đầu, vần và thanh điệu thành tiếng."),
  L("Dấu thanh", "Nhận biết và sử dụng 6 thanh điệu tiếng Việt."),
]);
const tv2 = C("Tập đọc — Tập viết", "Luyện đọc trơn câu ngắn và viết chữ đúng mẫu.", [
  L("Đọc trơn câu ngắn", "Luyện đọc thành tiếng các câu, đoạn ngắn."),
  L("Luyện viết chữ thường", "Viết đúng mẫu chữ và khoảng cách con chữ."),
]);
const tv3 = C("Kể chuyện & Nói – nghe", "Rèn kỹ năng nghe hiểu và diễn đạt.", [
  L("Kể chuyện theo tranh", "Quan sát tranh và kể lại nội dung câu chuyện."),
  L("Nghe hiểu và trả lời câu hỏi", "Luyện kỹ năng nghe và phản hồi phù hợp."),
]);

const tv_lop2_1 = C("Mở rộng vốn từ", "Làm giàu vốn từ theo chủ điểm gần gũi.", [
  L("Từ chỉ sự vật, hoạt động, đặc điểm", "Nhận biết và sử dụng ba loại từ cơ bản."),
  L("Từ ngữ về gia đình, trường học", "Mở rộng vốn từ theo chủ điểm quen thuộc."),
]);
const tv_lop2_2 = C("Chính tả & Luyện từ và câu", "Quy tắc chính tả và cách đặt câu đúng.", [
  L("Quy tắc chính tả cơ bản", "Phân biệt các trường hợp chính tả dễ nhầm lẫn."),
  L("Dấu câu và đặt câu", "Sử dụng dấu chấm, dấu phẩy khi viết câu."),
]);
const tv_lop2_3 = C("Tập làm văn", "Viết đoạn văn ngắn theo chủ đề quen thuộc.", [
  L("Viết đoạn văn kể về gia đình", "Viết 3-5 câu giới thiệu về gia đình em."),
  L("Viết đoạn văn kể về bạn bè", "Viết đoạn văn ngắn kể về người bạn thân."),
]);

const tv_lop3_1 = C("Từ và câu", "Nhận biết từ loại và các kiểu câu cơ bản.", [
  L("Từ loại: danh từ, động từ, tính từ", "Phân biệt ba loại từ cơ bản trong câu."),
  L("Câu kể, câu hỏi, câu cảm", "Nhận biết và đặt các kiểu câu theo mục đích nói."),
]);
const tv_lop3_2 = C("Đọc hiểu văn bản", "Cảm thụ truyện và thơ thiếu nhi.", [
  L("Đọc hiểu truyện thiếu nhi", "Đọc và trả lời câu hỏi về nội dung truyện."),
  L("Đọc hiểu thơ thiếu nhi", "Cảm nhận vần điệu và nội dung bài thơ."),
]);
const tv_lop3_3 = C("Tập làm văn", "Viết thư, tả đồ vật và kể lại sự việc.", [
  L("Viết thư cho người thân", "Viết một bức thư ngắn đúng thể thức."),
  L("Tả đồ vật quen thuộc", "Miêu tả đặc điểm nổi bật của một đồ vật."),
]);

const tv_lop4_1 = C("Luyện từ và câu nâng cao", "Từ loại và câu ghép.", [
  L("Danh từ, động từ, tính từ nâng cao", "Sử dụng linh hoạt các từ loại trong câu văn."),
  L("Câu ghép", "Nhận biết và đặt câu ghép có quan hệ từ."),
]);
const tv_lop4_2 = C("Tập đọc — Cảm thụ văn học", "Đọc hiểu thơ, truyện, văn miêu tả.", [
  L("Cảm thụ thơ", "Phân tích hình ảnh và cảm xúc trong bài thơ."),
  L("Cảm thụ văn miêu tả", "Nhận diện các chi tiết miêu tả đặc sắc."),
]);
const tv_lop4_3 = C("Tập làm văn", "Văn miêu tả và kể chuyện sáng tạo.", [
  L("Văn tả cây cối", "Miêu tả một loài cây theo trình tự hợp lý."),
  L("Văn tả con vật", "Miêu tả đặc điểm và hoạt động của con vật yêu thích."),
  L("Kể chuyện sáng tạo", "Xây dựng câu chuyện dựa trên trí tưởng tượng."),
]);

const tv_lop5_1 = C("Từ loại & Câu nâng cao", "Câu ghép và liên kết câu trong đoạn văn.", [
  L("Câu ghép nâng cao", "Sử dụng các quan hệ từ nối vế câu ghép."),
  L("Liên kết câu trong đoạn văn", "Sử dụng phép lặp, phép thế để liên kết câu."),
]);
const tv_lop5_2 = C("Đọc hiểu văn bản nâng cao", "Văn bản nghệ thuật và văn bản thông tin.", [
  L("Đọc hiểu văn bản nghệ thuật", "Phân tích chủ đề, nhân vật trong văn bản."),
  L("Đọc hiểu văn bản thông tin", "Khai thác thông tin từ văn bản khoa học, báo chí."),
]);
const tv_lop5_3 = C("Tập làm văn", "Văn tả người và thuyết trình.", [
  L("Văn tả người", "Miêu tả ngoại hình và tính cách một người thân quen."),
  L("Thuyết trình, báo cáo ngắn", "Trình bày một chủ đề trước lớp một cách mạch lạc."),
]);

// ─────────────────────────── TIẾNG ANH ───────────────────────────
const ta1 = C("Getting Started", "Chào hỏi, bảng chữ cái và màu sắc.", [
  L("Hello! Chào hỏi cơ bản", "Học các mẫu câu chào hỏi và giới thiệu tên."),
  L("The Alphabet", "Làm quen 26 chữ cái tiếng Anh qua bài hát."),
  L("Colours", "Học tên các màu sắc cơ bản."),
]);
const ta2 = C("Around Me", "Từ vựng về con vật và đồ vật quen thuộc.", [
  L("Animals", "Học tên các con vật nuôi và con vật hoang dã quen thuộc."),
  L("Classroom Objects", "Học tên đồ dùng học tập trong lớp."),
]);

const ta_lop2_1 = C("Family and Friends", "Giới thiệu bản thân và gia đình.", [
  L("My Name Is...", "Giới thiệu tên và tuổi của bản thân."),
  L("My Family", "Học từ vựng về các thành viên trong gia đình."),
]);
const ta_lop2_2 = C("Numbers and Toys", "Số đếm và đồ chơi.", [
  L("Numbers 1-20", "Đếm và nhận biết số từ 1 đến 20 bằng tiếng Anh."),
  L("My Toys", "Học từ vựng về các loại đồ chơi quen thuộc."),
]);

const ta_lop3_1 = C("Hello", "Chào hỏi, giới thiệu và trường học.", [
  L("Hello - Chào hỏi và giới thiệu", "Thực hành mẫu câu chào hỏi và giới thiệu bản thân.", {
    ready: true,
    gameSlug: "ghep-tu-vung",
    duration: 20,
  }),
  L("My School", "Học từ vựng về trường lớp và các môn học."),
]);
const ta_lop3_2 = C("My House", "Ngôi nhà và các phòng trong nhà.", [
  L("This Is My House", "Giới thiệu về ngôi nhà của em."),
  L("In My Room", "Học từ vựng về đồ đạc trong phòng."),
]);
const ta_lop3_3 = C("Free Time", "Sở thích, thời tiết và các mùa.", [
  L("My Hobbies", "Nói về sở thích của bản thân và bạn bè."),
  L("Weather and Seasons", "Học từ vựng về thời tiết và bốn mùa."),
]);

const ta_lop4_1 = C("My Family and Friends", "Mô tả gia đình và bạn bè chi tiết hơn.", [
  L("Describing People", "Miêu tả ngoại hình của người thân."),
  L("My Best Friend", "Giới thiệu về người bạn thân của em."),
]);
const ta_lop4_2 = C("My Day", "Hoạt động và giờ giấc hàng ngày.", [
  L("Daily Routine", "Nói về các hoạt động hàng ngày."),
  L("Telling the Time", "Học cách nói giờ bằng tiếng Anh."),
]);
const ta_lop4_3 = C("Food and Drinks", "Từ vựng về món ăn và thức uống.", [
  L("My Favourite Food", "Nói về món ăn yêu thích và khẩu vị."),
  L("At the Market", "Từ vựng mua sắm thực phẩm cơ bản."),
]);
const ta_lop4_4 = C("Around Me", "Nghề nghiệp và phương tiện giao thông.", [
  L("Jobs and Occupations", "Học từ vựng về các nghề nghiệp."),
  L("Means of Transport", "Học từ vựng về phương tiện giao thông."),
]);

const ta_lop5_1 = C("Our Community", "Cộng đồng và các địa điểm quen thuộc.", [
  L("Places in Town", "Học từ vựng về các địa điểm công cộng."),
  L("Giving Directions", "Học cách hỏi và chỉ đường đơn giản."),
]);
const ta_lop5_2 = C("Health and Hobbies", "Sức khoẻ và sở thích cá nhân.", [
  L("Healthy Habits", "Nói về thói quen sống khoẻ mạnh."),
  L("My Free Time Activities", "Mô tả các hoạt động giải trí yêu thích."),
]);
const ta_lop5_3 = C("Nature and Environment", "Thiên nhiên và bảo vệ môi trường.", [
  L("The Environment", "Từ vựng về thiên nhiên và môi trường."),
  L("Protecting Our Planet", "Nói về hành động bảo vệ môi trường."),
]);
const ta_lop5_4 = C("Looking Back, Moving Forward", "Ôn tập và chuẩn bị lên lớp 6.", [
  L("Review: My Journey", "Ôn tập tổng hợp từ vựng và mẫu câu đã học."),
  L("Getting Ready for Secondary School", "Làm quen từ vựng, tình huống bậc THCS."),
]);

// ─────────────────────────── KHÁM PHÁ TỰ NHIÊN & XÃ HỘI ───────────────────────────
const kp1 = C("Gia đình và nhà trường", "Tìm hiểu về gia đình và ngôi trường của em.", [
  L("Gia đình em", "Giới thiệu các thành viên và hoạt động trong gia đình."),
  L("Trường học của em", "Khám phá lớp học, sân trường và bạn bè."),
]);
const kp2 = C("Cộng đồng địa phương", "Nơi em sống và cách giữ an toàn.", [
  L("Nơi em sống", "Tìm hiểu về xóm làng, khu phố nơi em ở."),
  L("An toàn khi ở nhà", "Nhận biết và phòng tránh nguy hiểm trong nhà."),
]);
const kp3 = C("Thực vật và động vật", "Quan sát cây xanh và con vật quanh em.", [
  L("Cây xanh quanh em", "Quan sát và gọi tên một số loại cây quen thuộc."),
  L("Con vật quanh em", "Quan sát và gọi tên một số con vật quen thuộc."),
]);

const kp_lop2_1 = C("Trường học", "An toàn và các hoạt động ở trường.", [
  L("Giữ an toàn ở trường", "Nhận biết các tình huống nguy hiểm ở trường học."),
  L("Các hoạt động ở trường", "Tìm hiểu các hoạt động học tập, vui chơi ở trường."),
]);
const kp_lop2_2 = C("Cộng đồng địa phương", "Nghề nghiệp trong cộng đồng.", [
  L("Nghề nghiệp quanh em", "Tìm hiểu một số nghề nghiệp phổ biến trong cộng đồng."),
]);
const kp_lop2_3 = C("Con người và sức khoẻ", "Cơ quan vận động và tiêu hoá.", [
  L("Cơ quan vận động", "Tìm hiểu vai trò của xương và cơ."),
  L("Cơ quan tiêu hoá", "Tìm hiểu đường đi của thức ăn trong cơ thể."),
]);
const kp_lop2_4 = C("Trái Đất và bầu trời", "Ngày đêm và bốn mùa.", [
  L("Ban ngày và ban đêm", "Giải thích hiện tượng ngày và đêm."),
  L("Bốn mùa trong năm", "Tìm hiểu đặc điểm bốn mùa trong năm.", { ready: true, duration: 18 }),
]);

const kp_lop3_1 = C("Gia đình", "Họ hàng và phòng tránh hoả hoạn.", [
  L("Họ hàng nội, ngoại", "Tìm hiểu mối quan hệ họ hàng trong gia đình."),
  L("Phòng tránh hoả hoạn", "Nhận biết nguy cơ và cách phòng tránh cháy nổ."),
]);
const kp_lop3_2 = C("Trường học", "Hoạt động và truyền thống nhà trường.", [
  L("Hoạt động kết nối cộng đồng", "Tìm hiểu các hoạt động ngoại khoá ở trường."),
  L("Truyền thống nhà trường", "Tìm hiểu lịch sử và truyền thống của trường."),
]);
const kp_lop3_3 = C("Cộng đồng địa phương", "Hoạt động sản xuất và di tích lịch sử.", [
  L("Hoạt động sản xuất", "Tìm hiểu các hoạt động sản xuất ở địa phương."),
  L("Di tích lịch sử - văn hoá", "Tìm hiểu một số di tích tiêu biểu gần nơi em sống."),
]);
const kp_lop3_4 = C("Thực vật và động vật", "Bộ phận của cây và bảo vệ môi trường sống.", [
  L("Các bộ phận của thực vật", "Tìm hiểu rễ, thân, lá, hoa, quả và chức năng."),
  L("Bảo vệ môi trường sống", "Đề xuất hành động bảo vệ môi trường sống của sinh vật."),
]);

const kp_lop4_1 = C("Khoa học: Chất", "Nước, không khí, ánh sáng và âm thanh.", [
  L("Nước và vòng tuần hoàn của nước", "Tìm hiểu tính chất của nước và vòng tuần hoàn."),
  L("Không khí xung quanh ta", "Tìm hiểu thành phần và vai trò của không khí."),
  L("Ánh sáng và âm thanh", "Tìm hiểu sự truyền ánh sáng và âm thanh."),
]);
const kp_lop4_2 = C("Khoa học: Con người và sức khoẻ", "Dinh dưỡng và phòng bệnh.", [
  L("Dinh dưỡng cân đối", "Tìm hiểu các nhóm chất dinh dưỡng cần thiết."),
  L("Phòng một số bệnh thường gặp", "Tìm hiểu nguyên nhân và cách phòng bệnh."),
]);
const kp_lop4_3 = C("Lịch sử: Buổi đầu dựng nước", "Thời kỳ Vua Hùng và Âu Lạc.", [
  L("Nước Văn Lang - Vua Hùng", "Tìm hiểu về nhà nước đầu tiên của người Việt."),
  L("Nước Âu Lạc", "Tìm hiểu về An Dương Vương và thành Cổ Loa."),
]);
const kp_lop4_4 = C("Địa lí: Thiên nhiên Việt Nam", "Miền núi, trung du và đồng bằng.", [
  L("Miền núi và trung du Bắc Bộ", "Tìm hiểu đặc điểm tự nhiên và dân cư."),
  L("Đồng bằng Bắc Bộ và Nam Bộ", "Tìm hiểu đặc điểm tự nhiên và hoạt động sản xuất."),
]);

const kp_lop5_1 = C("Khoa học: Sự sống", "Sự sinh sản và môi trường sống.", [
  L("Sự sinh sản ở thực vật, động vật", "Tìm hiểu các hình thức sinh sản trong tự nhiên."),
  L("Môi trường và tài nguyên thiên nhiên", "Tìm hiểu vai trò và cách bảo vệ tài nguyên."),
]);
const kp_lop5_2 = C("Khoa học: Năng lượng", "Các nguồn năng lượng và sử dụng tiết kiệm.", [
  L("Năng lượng mặt trời, gió, nước", "Tìm hiểu các nguồn năng lượng tái tạo."),
  L("Sử dụng năng lượng tiết kiệm", "Đề xuất biện pháp sử dụng năng lượng hiệu quả."),
]);
const kp_lop5_3 = C("Lịch sử: Việt Nam thời cận đại", "Đấu tranh giành độc lập dân tộc.", [
  L("Phong trào chống thực dân Pháp", "Tìm hiểu các phong trào yêu nước tiêu biểu."),
  L("Cách mạng tháng Tám năm 1945", "Tìm hiểu diễn biến và ý nghĩa lịch sử."),
]);
const kp_lop5_4 = C("Địa lí: Việt Nam và Thế giới", "Các châu lục, bản đồ và biểu đồ.", [
  L("Các châu lục và đại dương", "Tìm hiểu vị trí các châu lục trên bản đồ thế giới."),
  L("Đọc bản đồ và biểu đồ", "Rèn kỹ năng khai thác thông tin từ bản đồ, biểu đồ."),
]);

// ─────────────────────────── ĐẠO ĐỨC ───────────────────────────
const dd1 = C("Em yêu gia đình", "Tình cảm và trách nhiệm trong gia đình.", [
  L("Kính trọng ông bà, cha mẹ", "Thể hiện sự kính trọng và lễ phép với người lớn.", {
    ready: true,
    duration: 15,
  }),
  L("Yêu thương anh chị em", "Biết quan tâm, nhường nhịn anh chị em trong nhà."),
]);
const dd2 = C("Em với bản thân", "Tự chăm sóc bản thân và tính thật thà.", [
  L("Tự chăm sóc bản thân", "Rèn thói quen vệ sinh cá nhân và tự lập."),
  L("Thật thà", "Hiểu vì sao cần trung thực và biết nhận lỗi."),
]);

const dd_lop2_1 = C("Em với trường học", "Quý trọng thời gian và kính trọng thầy cô.", [
  L("Quý trọng thời gian", "Rèn thói quen sắp xếp thời gian học tập hợp lý."),
  L("Kính trọng thầy cô giáo", "Thể hiện sự lễ phép và biết ơn thầy cô."),
]);
const dd_lop2_2 = C("Em với cộng đồng", "Tình bạn và biết nhận lỗi.", [
  L("Yêu quý bạn bè", "Biết chia sẻ, giúp đỡ bạn bè trong học tập."),
  L("Nhận lỗi và sửa lỗi", "Biết nhận ra lỗi sai và sửa chữa kịp thời."),
]);

const dd_lop3_1 = C("Em yêu Tổ quốc", "Tự hào truyền thống và ham học hỏi.", [
  L("Tự hào truyền thống quê hương", "Tìm hiểu và tự hào về nét đẹp quê hương."),
  L("Ham học hỏi", "Rèn tinh thần ham học và khám phá điều mới."),
]);
const dd_lop3_2 = C("Em với mọi người", "Quan tâm hàng xóm và giữ lời hứa.", [
  L("Quan tâm hàng xóm láng giềng", "Thể hiện sự quan tâm, giúp đỡ hàng xóm."),
  L("Giữ lời hứa", "Hiểu ý nghĩa và rèn thói quen giữ lời hứa."),
]);
const dd_lop3_3 = C("Em tự bảo vệ mình", "Phòng tránh tai nạn và ứng phó bất an.", [
  L("Phòng tránh tai nạn thương tích", "Nhận biết và phòng tránh các tình huống nguy hiểm."),
  L("Ứng phó với tình huống bất an", "Rèn kỹ năng xử lý khi gặp tình huống không an toàn."),
]);

const dd_lop4_1 = C("Biết ơn và trung thực", "Biết ơn người lao động và trung thực trong học tập.", [
  L("Biết ơn người lao động", "Trân trọng công sức của người lao động."),
  L("Trung thực trong học tập", "Rèn tính trung thực khi làm bài và kiểm tra."),
]);
const dd_lop4_2 = C("Yêu lao động", "Quý trọng đồng tiền và bảo vệ của công.", [
  L("Quý trọng đồng tiền", "Hiểu giá trị lao động và cách chi tiêu hợp lý."),
  L("Bảo vệ của công", "Có ý thức giữ gìn tài sản chung."),
]);
const dd_lop4_3 = C("Tôn trọng và hợp tác", "Tôn trọng sự khác biệt và hợp tác với bạn.", [
  L("Tôn trọng sự khác biệt", "Tôn trọng đặc điểm riêng của mỗi người."),
  L("Hợp tác với bạn bè", "Rèn kỹ năng làm việc nhóm hiệu quả."),
]);

const dd_lop5_1 = C("Có trách nhiệm", "Trách nhiệm với bản thân và việc chung.", [
  L("Trách nhiệm với bản thân", "Tự giác trong học tập và sinh hoạt hàng ngày."),
  L("Trách nhiệm với việc chung", "Có ý thức đóng góp cho tập thể lớp, trường."),
]);
const dd_lop5_2 = C("Bảo vệ cái đúng", "Bảo vệ lẽ phải và phòng chống xâm hại.", [
  L("Bảo vệ lẽ phải", "Dũng cảm bảo vệ điều đúng đắn."),
  L("Phòng, chống xâm hại trẻ em", "Nhận biết và biết cách phòng tránh nguy cơ xâm hại."),
]);
const dd_lop5_3 = C("Hướng tới tương lai", "Lập kế hoạch cá nhân và sẵn sàng lên lớp 6.", [
  L("Lập kế hoạch cá nhân", "Rèn kỹ năng đặt mục tiêu và lập kế hoạch."),
  L("Sẵn sàng lên lớp 6", "Chuẩn bị tâm thế và kỹ năng cho bậc học mới."),
]);

// ─────────────────────────── TIN HỌC ───────────────────────────
const th1 = C("Làm quen máy tính", "Các bộ phận và cách sử dụng máy tính an toàn.", [
  L("Các bộ phận của máy tính", "Nhận biết màn hình, bàn phím, chuột và thân máy."),
  L("Bật, tắt máy tính an toàn", "Thực hành các thao tác cơ bản với máy tính."),
]);
const th2 = C("Em tập vẽ", "Sử dụng phần mềm vẽ đơn giản.", [
  L("Làm quen phần mềm vẽ", "Sử dụng công cụ vẽ hình, tô màu cơ bản."),
]);

const th_lop2_1 = C("Sử dụng chuột và bàn phím", "Thao tác cơ bản với thiết bị nhập.", [
  L("Sử dụng chuột máy tính", "Rèn kỹ năng di chuyển, nháy chuột chính xác."),
  L("Làm quen bàn phím", "Nhận biết các hàng phím và gõ chữ cơ bản."),
]);
const th_lop2_2 = C("Thư mục và tệp tin", "Quản lý dữ liệu cơ bản trên máy tính.", [
  L("Thư mục và tệp tin cơ bản", "Nhận biết cách tổ chức thư mục, tệp tin."),
]);

const th_lop3_1 = C("Thông tin và xử lý thông tin", "Khái niệm cơ bản về thông tin.", [
  L("Thông tin và xử lí thông tin", "Tìm hiểu các dạng thông tin và vai trò của máy tính.", {
    ready: true,
    duration: 15,
  }),
]);
const th_lop3_2 = C("Soạn thảo văn bản cơ bản", "Làm quen phần mềm soạn thảo.", [
  L("Gõ văn bản đơn giản", "Thực hành gõ và định dạng văn bản cơ bản."),
]);
const th_lop3_3 = C("An toàn khi dùng máy tính", "Sử dụng máy tính đúng cách và an toàn.", [
  L("Tư thế ngồi và an toàn khi dùng máy tính", "Rèn thói quen sử dụng máy tính đúng cách."),
]);

const th_lop4_1 = C("Mạng máy tính và Internet", "Khái niệm cơ bản về Internet.", [
  L("Internet là gì?", "Tìm hiểu khái niệm mạng Internet và lợi ích."),
  L("Tìm kiếm thông tin an toàn", "Rèn kỹ năng tìm kiếm thông tin có chọn lọc."),
]);
const th_lop4_2 = C("Soạn thảo văn bản nâng cao", "Định dạng và trình bày văn bản.", [
  L("Định dạng văn bản", "Thực hành căn chỉnh, định dạng chữ và đoạn văn."),
]);
const th_lop4_3 = C("Làm quen lập trình kéo-thả", "Tư duy lập trình cơ bản với Scratch.", [
  L("Làm quen giao diện Scratch", "Khám phá giao diện và khối lệnh cơ bản."),
  L("Tạo chương trình đơn giản", "Lắp ghép khối lệnh để tạo chuyển động cho nhân vật."),
]);

const th_lop5_1 = C("Tìm kiếm và đánh giá thông tin", "Kỹ năng số an toàn và hiệu quả.", [
  L("Tìm kiếm thông tin trên Internet", "Rèn kỹ năng tìm kiếm và chọn lọc thông tin."),
  L("Đánh giá độ tin cậy thông tin", "Nhận biết thông tin sai lệch trên mạng."),
]);
const th_lop5_2 = C("Lập trình Scratch nâng cao", "Vòng lặp và cấu trúc điều kiện.", [
  L("Vòng lặp trong Scratch", "Sử dụng khối lệnh lặp để tối ưu chương trình."),
  L("Cấu trúc điều kiện", "Sử dụng khối lệnh điều kiện để tạo tương tác."),
]);
const th_lop5_3 = C("Đạo đức và văn hoá số", "Ứng xử văn minh trên môi trường mạng.", [
  L("Ứng xử văn minh trên mạng", "Rèn ý thức sử dụng mạng an toàn, lành mạnh."),
]);

// ─────────────────────────── TỔNG HỢP ───────────────────────────
export const curriculum: SubjectCurriculum[] = [
  { subject: "toan", grade: 1, intro: "Làm quen số đếm, hình học và phép tính đầu tiên qua trò chơi trực quan.", chapters: [toan1, toan2, toan3, toan4c] },
  { subject: "toan", grade: 2, intro: "Củng cố phép cộng trừ có nhớ, làm quen phép nhân, phép chia.", chapters: [toan_lop2_1, toan_lop2_2, toan_lop2_3, toan_lop2_4] },
  { subject: "toan", grade: 3, intro: "Hoàn thiện bảng nhân chia, làm quen phân số và số lớn.", chapters: [toan_lop3_1, toan_lop3_2, toan_lop3_3, toan_lop3_4] },
  { subject: "toan", grade: 4, intro: "Số tự nhiên lớn, phân số và hình học nâng cao.", chapters: [toan_lop4_1, toan_lop4_2, toan_lop4_3, toan_lop4_4] },
  { subject: "toan", grade: 5, intro: "Số thập phân, hình học không gian và toán chuyển động.", chapters: [toan_lop5_1, toan_lop5_2, toan_lop5_3, toan_lop5_4] },

  { subject: "tieng-viet", grade: 1, intro: "Học vần, tập đọc, tập viết những nét chữ đầu tiên.", chapters: [tv1, tv2, tv3] },
  { subject: "tieng-viet", grade: 2, intro: "Mở rộng vốn từ, luyện chính tả và viết đoạn văn ngắn.", chapters: [tv_lop2_1, tv_lop2_2, tv_lop2_3] },
  { subject: "tieng-viet", grade: 3, intro: "Từ loại, đọc hiểu văn bản và tập làm văn cơ bản.", chapters: [tv_lop3_1, tv_lop3_2, tv_lop3_3] },
  { subject: "tieng-viet", grade: 4, intro: "Luyện từ câu nâng cao, cảm thụ văn học và văn miêu tả.", chapters: [tv_lop4_1, tv_lop4_2, tv_lop4_3] },
  { subject: "tieng-viet", grade: 5, intro: "Câu ghép nâng cao, đọc hiểu văn bản và văn tả người.", chapters: [tv_lop5_1, tv_lop5_2, tv_lop5_3] },

  { subject: "tieng-anh", grade: 1, intro: "Làm quen tiếng Anh qua chào hỏi, bảng chữ cái, màu sắc.", chapters: [ta1, ta2] },
  { subject: "tieng-anh", grade: 2, intro: "Giới thiệu bản thân, gia đình, số đếm và đồ chơi.", chapters: [ta_lop2_1, ta_lop2_2] },
  { subject: "tieng-anh", grade: 3, intro: "Giao tiếp cơ bản về trường học, ngôi nhà và sở thích.", chapters: [ta_lop3_1, ta_lop3_2, ta_lop3_3] },
  { subject: "tieng-anh", grade: 4, intro: "Mô tả người thân, hoạt động hàng ngày, món ăn và nghề nghiệp.", chapters: [ta_lop4_1, ta_lop4_2, ta_lop4_3, ta_lop4_4] },
  { subject: "tieng-anh", grade: 5, intro: "Cộng đồng, sức khoẻ, môi trường và chuẩn bị lên lớp 6.", chapters: [ta_lop5_1, ta_lop5_2, ta_lop5_3, ta_lop5_4] },

  { subject: "kham-pha", grade: 1, intro: "Khám phá gia đình, trường học và thiên nhiên quanh em.", chapters: [kp1, kp2, kp3] },
  { subject: "kham-pha", grade: 2, intro: "Tìm hiểu trường học, cộng đồng, cơ thể người và bầu trời.", chapters: [kp_lop2_1, kp_lop2_2, kp_lop2_3, kp_lop2_4] },
  { subject: "kham-pha", grade: 3, intro: "Mở rộng hiểu biết về gia đình, cộng đồng và thế giới tự nhiên.", chapters: [kp_lop3_1, kp_lop3_2, kp_lop3_3, kp_lop3_4] },
  { subject: "kham-pha", grade: 4, intro: "Khoa học về chất, sức khoẻ; lịch sử dựng nước và địa lí Việt Nam.", chapters: [kp_lop4_1, kp_lop4_2, kp_lop4_3, kp_lop4_4] },
  { subject: "kham-pha", grade: 5, intro: "Khoa học sự sống, năng lượng; lịch sử cận đại và địa lí thế giới.", chapters: [kp_lop5_1, kp_lop5_2, kp_lop5_3, kp_lop5_4] },

  { subject: "dao-duc", grade: 1, intro: "Tình cảm gia đình và những giá trị sống đầu tiên.", chapters: [dd1, dd2] },
  { subject: "dao-duc", grade: 2, intro: "Ứng xử ở trường học và trong cộng đồng nhỏ.", chapters: [dd_lop2_1, dd_lop2_2] },
  { subject: "dao-duc", grade: 3, intro: "Tình yêu Tổ quốc, ứng xử với mọi người và tự bảo vệ bản thân.", chapters: [dd_lop3_1, dd_lop3_2, dd_lop3_3] },
  { subject: "dao-duc", grade: 4, intro: "Lòng biết ơn, tính trung thực, yêu lao động và hợp tác.", chapters: [dd_lop4_1, dd_lop4_2, dd_lop4_3] },
  { subject: "dao-duc", grade: 5, intro: "Tinh thần trách nhiệm, bảo vệ lẽ phải và định hướng tương lai.", chapters: [dd_lop5_1, dd_lop5_2, dd_lop5_3] },

  { subject: "tin-hoc", grade: 1, intro: "Làm quen máy tính và phần mềm vẽ đơn giản.", chapters: [th1, th2] },
  { subject: "tin-hoc", grade: 2, intro: "Sử dụng chuột, bàn phím và quản lý tệp tin cơ bản.", chapters: [th_lop2_1, th_lop2_2] },
  { subject: "tin-hoc", grade: 3, intro: "Thông tin, soạn thảo văn bản và an toàn khi dùng máy tính.", chapters: [th_lop3_1, th_lop3_2, th_lop3_3] },
  { subject: "tin-hoc", grade: 4, intro: "Internet, soạn thảo nâng cao và lập trình kéo-thả Scratch.", chapters: [th_lop4_1, th_lop4_2, th_lop4_3] },
  { subject: "tin-hoc", grade: 5, intro: "Kỹ năng tìm kiếm thông tin, lập trình Scratch nâng cao và văn hoá số.", chapters: [th_lop5_1, th_lop5_2, th_lop5_3] },
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
