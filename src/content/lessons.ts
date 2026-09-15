export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonContent {
  objectives: string[];
  sections: { heading: string; body: string[] }[];
  quiz: QuizQuestion[];
  funFact: string;
}

export const lessonContent: Record<string, LessonContent> = {
  "toan:1:cac-so-den-10": {
    objectives: [
      "Đếm và đọc đúng các số từ 0 đến 10.",
      "Viết đúng chữ số từ 0 đến 10.",
      "Nhận biết số lượng đồ vật tương ứng với mỗi số.",
    ],
    sections: [
      {
        heading: "1. Đếm đồ vật quanh em",
        body: [
          "Khi đếm, em chỉ tay vào từng đồ vật và đọc số theo thứ tự: một, hai, ba... Ví dụ: có 5 quả táo, em đếm 'một, hai, ba, bốn, năm' — vậy có tất cả 5 quả táo.",
          "Số 0 dùng để chỉ 'không có gì cả'. Ví dụ: đĩa không có quả táo nào thì ta nói có 0 quả táo.",
        ],
      },
      {
        heading: "2. Đọc và viết chữ số",
        body: [
          "Mỗi số có một cách viết riêng: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Số 10 là số có hai chữ số đầu tiên em học, gồm chữ số 1 và chữ số 0 đứng cạnh nhau.",
          "Em hãy luyện viết mỗi số 3 lần vào vở ô li để nhớ nét chữ thật chuẩn nhé!",
        ],
      },
      {
        heading: "3. So sánh nhiều — ít",
        body: [
          "Khi có hai nhóm đồ vật, nhóm nào đếm được số lớn hơn thì nhóm đó có nhiều hơn. Ví dụ: 7 quả cam nhiều hơn 4 quả cam vì 7 lớn hơn 4.",
        ],
      },
    ],
    quiz: [
      {
        question: "Trên bàn có 6 chiếc bút chì. Số 6 được viết như thế nào?",
        options: ["9", "6", "8", "3"],
        correctIndex: 1,
        explanation: "Số 6 có hình dạng một vòng tròn phía dưới với một nét cong phía trên.",
      },
      {
        question: "Đếm số ngôi sao: ⭐⭐⭐⭐ — có tất cả bao nhiêu ngôi sao?",
        options: ["3", "5", "4", "6"],
        correctIndex: 2,
        explanation: "Đếm lần lượt: một, hai, ba, bốn — có 4 ngôi sao.",
      },
      {
        question: "Số nào đứng liền sau số 7 khi đếm xuôi?",
        options: ["6", "9", "8", "10"],
        correctIndex: 2,
        explanation: "Khi đếm xuôi: 6, 7, 8, 9, 10 — số liền sau 7 là 8.",
      },
    ],
    funFact: "Bạn có biết? Người Ai Cập cổ đại đã biết đếm số từ hơn 5000 năm trước bằng các ký hiệu khắc trên đá!",
  },

  "tieng-viet:1:am-va-chu-cai": {
    objectives: [
      "Nhận biết mặt 29 chữ cái trong bảng chữ cái tiếng Việt.",
      "Phát âm đúng các âm cơ bản.",
      "Phân biệt nguyên âm và phụ âm.",
    ],
    sections: [
      {
        heading: "1. Bảng chữ cái tiếng Việt",
        body: [
          "Tiếng Việt có 29 chữ cái: a, ă, â, b, c, d, đ, e, ê, g, h, i, k, l, m, n, o, ô, ơ, p, q, r, s, t, u, ư, v, x, y.",
          "Mỗi chữ cái có một cách phát âm riêng. Em hãy đọc to từng chữ cái theo cô giáo hoặc video hướng dẫn nhé!",
        ],
      },
      {
        heading: "2. Nguyên âm và phụ âm",
        body: [
          "Nguyên âm là những âm phát ra tự do, không bị cản: a, ă, â, e, ê, i, o, ô, ơ, u, ư, y.",
          "Phụ âm là những âm khi phát ra bị cản một phần: b, c, d, đ, g, h, k, l, m, n, p, q, r, s, t, v, x.",
        ],
      },
      {
        heading: "3. Luyện phát âm",
        body: [
          "Em hãy thử ghép âm 'b' với âm 'a' để tạo thành tiếng 'ba'. Đây là bước đầu tiên để học ghép vần ở bài học tiếp theo.",
        ],
      },
    ],
    quiz: [
      {
        question: "Chữ cái nào sau đây là nguyên âm?",
        options: ["b", "e", "t", "m"],
        correctIndex: 1,
        explanation: "'e' là nguyên âm vì âm phát ra tự do, không bị cản.",
      },
      {
        question: "Ghép âm 'm' với âm 'e' ta được tiếng gì?",
        options: ["me", "em", "ma", "mo"],
        correctIndex: 0,
        explanation: "Ghép phụ âm 'm' đứng trước, nguyên âm 'e' đứng sau ta được tiếng 'me'.",
      },
      {
        question: "Chữ cái nào có dấu mũ (^) trên đầu?",
        options: ["a", "â", "u", "i"],
        correctIndex: 1,
        explanation: "Chữ 'â' có dấu mũ trên đầu chữ 'a'.",
      },
    ],
    funFact: "Bạn có biết? Chữ Quốc ngữ (chữ viết tiếng Việt hiện nay) ra đời từ thế kỷ 17, dựa trên chữ cái La-tinh!",
  },

  "tieng-anh:3:hello-chao-hoi-va-gioi-thieu": {
    objectives: [
      "Sử dụng được các mẫu câu chào hỏi cơ bản.",
      "Giới thiệu được tên của bản thân bằng tiếng Anh.",
      "Hỏi và trả lời về tên của người khác.",
    ],
    sections: [
      {
        heading: "1. Greetings — Lời chào",
        body: [
          "Hello! / Hi! nghĩa là 'Xin chào!'. Em dùng câu này khi gặp bạn bè, thầy cô vào buổi sáng.",
          "Good morning! (Chào buổi sáng) — Good afternoon! (Chào buổi chiều) — Good bye! (Tạm biệt).",
        ],
      },
      {
        heading: "2. Giới thiệu tên",
        body: [
          "Để giới thiệu tên, em nói: 'Hello, my name is (tên của em).' Ví dụ: 'Hello, my name is Linh.'",
          "Để hỏi tên bạn khác, em hỏi: 'What is your name?' — Bạn sẽ trả lời: 'My name is...' (tên của bạn).",
        ],
      },
      {
        heading: "3. Thực hành hội thoại",
        body: [
          "A: Hello! What is your name?",
          "B: Hi! My name is Nam. What is your name?",
          "A: My name is Mai. Nice to meet you!",
        ],
      },
    ],
    quiz: [
      {
        question: "Muốn nói 'Xin chào' bằng tiếng Anh, em nói:",
        options: ["Goodbye", "Hello", "Sorry", "Thank you"],
        correctIndex: 1,
        explanation: "'Hello' nghĩa là 'Xin chào' trong tiếng Anh.",
      },
      {
        question: "Câu nào dùng để hỏi tên người khác?",
        options: [
          "How old are you?",
          "What is your name?",
          "Where do you live?",
          "How are you?",
        ],
        correctIndex: 1,
        explanation: "'What is your name?' nghĩa là 'Tên bạn là gì?'.",
      },
      {
        question: "'My name is Mai.' nghĩa là gì?",
        options: ["Tôi 8 tuổi", "Tôi tên là Mai", "Tôi thích Mai", "Đây là Mai"],
        correctIndex: 1,
        explanation: "'My name is...' nghĩa là 'Tên tôi là...'.",
      },
    ],
    funFact: "Fun fact: Tiếng Anh là ngôn ngữ được sử dụng nhiều nhất trên Internet toàn thế giới!",
  },

  "kham-pha:2:bon-mua-trong-nam": {
    objectives: [
      "Kể tên được bốn mùa trong năm.",
      "Nêu được đặc điểm thời tiết đặc trưng của mỗi mùa.",
      "Biết cách ăn mặc phù hợp với từng mùa.",
    ],
    sections: [
      {
        heading: "1. Bốn mùa trong năm",
        body: [
          "Một năm có bốn mùa: mùa xuân, mùa hạ (mùa hè), mùa thu và mùa đông. Ở miền Bắc nước ta, bốn mùa thể hiện rõ rệt; ở miền Nam thời tiết chia thành mùa mưa và mùa khô.",
        ],
      },
      {
        heading: "2. Đặc điểm từng mùa",
        body: [
          "Mùa xuân: thời tiết ấm áp, cây cối đâm chồi nảy lộc, hoa nở rộ.",
          "Mùa hạ: thời tiết nóng bức, nhiều nắng, thích hợp đi biển, nghỉ hè.",
          "Mùa thu: thời tiết mát mẻ, lá cây chuyển vàng và rụng.",
          "Mùa đông: thời tiết lạnh, có nơi có sương muối hoặc tuyết rơi.",
        ],
      },
      {
        heading: "3. Trang phục theo mùa",
        body: [
          "Mùa hè em mặc quần áo mỏng, thoáng mát; mùa đông em cần mặc áo ấm, khăn quàng cổ để giữ ấm cơ thể.",
        ],
      },
    ],
    quiz: [
      {
        question: "Một năm có mấy mùa?",
        options: ["2", "3", "4", "5"],
        correctIndex: 2,
        explanation: "Một năm có 4 mùa: xuân, hạ, thu, đông.",
      },
      {
        question: "Mùa nào thời tiết nóng bức nhất?",
        options: ["Mùa xuân", "Mùa hạ", "Mùa thu", "Mùa đông"],
        correctIndex: 1,
        explanation: "Mùa hạ (mùa hè) có thời tiết nóng bức, nhiều nắng nhất trong năm.",
      },
      {
        question: "Mùa nào cây cối thường đâm chồi nảy lộc, hoa nở rộ?",
        options: ["Mùa đông", "Mùa hạ", "Mùa xuân", "Mùa thu"],
        correctIndex: 2,
        explanation: "Mùa xuân với thời tiết ấm áp là lúc cây cối đâm chồi, hoa nở rộ.",
      },
    ],
    funFact: "Bạn có biết? Ở Nam Cực chỉ có 2 mùa trong năm là mùa hè và mùa đông, mỗi mùa kéo dài khoảng 6 tháng!",
  },

  "dao-duc:1:kinh-trong-ong-ba-cha-me": {
    objectives: [
      "Hiểu được vì sao cần kính trọng ông bà, cha mẹ.",
      "Biết thể hiện sự lễ phép qua lời nói, cử chỉ hàng ngày.",
      "Thực hiện được những việc làm nhỏ thể hiện lòng hiếu thảo.",
    ],
    sections: [
      {
        heading: "1. Vì sao cần kính trọng ông bà, cha mẹ?",
        body: [
          "Ông bà, cha mẹ là người sinh thành, nuôi dưỡng và dạy dỗ em nên người. Kính trọng ông bà, cha mẹ là truyền thống tốt đẹp của dân tộc Việt Nam.",
        ],
      },
      {
        heading: "2. Những việc làm thể hiện sự kính trọng",
        body: [
          "Chào hỏi lễ phép khi gặp và khi đi học về.",
          "Nghe lời dạy bảo của ông bà, cha mẹ.",
          "Giúp đỡ ông bà, cha mẹ những việc vừa sức như lấy nước, dọn dẹp đồ chơi.",
          "Không nói leo, không cãi lại khi ông bà, cha mẹ đang nói chuyện.",
        ],
      },
      {
        heading: "3. Tình huống thực hành",
        body: [
          "Khi đi học về, em nên: chào ông bà, cha mẹ trước khi cất cặp sách đi chơi hay khoanh tay chào rồi mới đi chơi?",
        ],
      },
    ],
    quiz: [
      {
        question: "Khi đi học về đến nhà, em nên làm gì trước tiên?",
        options: [
          "Chạy đi chơi ngay",
          "Chào ông bà, cha mẹ",
          "Bật ti vi xem hoạt hình",
          "Vào phòng đóng cửa",
        ],
        correctIndex: 1,
        explanation: "Chào hỏi lễ phép khi về nhà là cách thể hiện sự kính trọng ông bà, cha mẹ.",
      },
      {
        question: "Việc làm nào dưới đây KHÔNG thể hiện sự kính trọng ông bà, cha mẹ?",
        options: [
          "Nghe lời dạy bảo",
          "Cãi lại khi bị nhắc nhở",
          "Giúp đỡ việc nhà vừa sức",
          "Chào hỏi lễ phép",
        ],
        correctIndex: 1,
        explanation: "Cãi lại khi được nhắc nhở là hành vi chưa lễ phép, không nên làm.",
      },
    ],
    funFact: "Bạn có biết? Ngày lễ Vu Lan (rằm tháng 7 âm lịch) là dịp đặc biệt để con cháu bày tỏ lòng hiếu thảo với ông bà, cha mẹ!",
  },

  "tin-hoc:3:thong-tin-va-xu-li-thong-tin": {
    objectives: [
      "Hiểu khái niệm 'thông tin' trong đời sống hàng ngày.",
      "Phân biệt được các dạng thông tin: chữ viết, âm thanh, hình ảnh.",
      "Biết máy tính là công cụ giúp xử lí thông tin.",
    ],
    sections: [
      {
        heading: "1. Thông tin là gì?",
        body: [
          "Thông tin là những gì đem lại hiểu biết cho con người. Ví dụ: tiếng trống trường báo hiệu giờ vào học, đèn đỏ báo hiệu phải dừng lại.",
        ],
      },
      {
        heading: "2. Các dạng thông tin",
        body: [
          "Dạng chữ viết: sách, báo, biển hiệu.",
          "Dạng âm thanh: tiếng nói, tiếng chuông, tiếng nhạc.",
          "Dạng hình ảnh: tranh vẽ, ảnh chụp, biển báo giao thông.",
        ],
      },
      {
        heading: "3. Máy tính xử lí thông tin như thế nào?",
        body: [
          "Máy tính nhận thông tin đầu vào (ví dụ: em gõ chữ trên bàn phím), xử lí thông tin đó, rồi đưa ra kết quả trên màn hình. Đây gọi là quá trình xử lí thông tin.",
        ],
      },
    ],
    quiz: [
      {
        question: "Tiếng trống trường vang lên vào giờ ra chơi là thông tin dạng gì?",
        options: ["Chữ viết", "Âm thanh", "Hình ảnh", "Không phải thông tin"],
        correctIndex: 1,
        explanation: "Tiếng trống là âm thanh, giúp học sinh biết đã đến giờ ra chơi.",
      },
      {
        question: "Biển báo giao thông là thông tin dạng nào?",
        options: ["Âm thanh", "Hình ảnh", "Mùi vị", "Không có dạng nào"],
        correctIndex: 1,
        explanation: "Biển báo giao thông truyền tải thông tin bằng hình ảnh, ký hiệu.",
      },
      {
        question: "Bộ phận nào của máy tính dùng để nhập chữ vào máy tính?",
        options: ["Màn hình", "Loa", "Bàn phím", "Vỏ máy"],
        correctIndex: 2,
        explanation: "Bàn phím (keyboard) là thiết bị dùng để nhập chữ, số vào máy tính.",
      },
    ],
    funFact: "Bạn có biết? Chiếc máy tính điện tử đầu tiên trên thế giới có kích thước bằng cả một căn phòng lớn!",
  },
};

export function getLessonContent(subject: string, grade: number, lessonSlug: string) {
  return lessonContent[`${subject}:${grade}:${lessonSlug}`];
}
