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

// Mục tiêu và mẹo nhỏ dùng chung cho các bài "Thực hành / Luyện tập / Vận dụng /
// Trò chơi ôn tập / Thử thách nhỏ" tự sinh theo từng chủ đề lõi — phần khác biệt
// giữa các bài cùng chủ đề nằm ở nội dung ôn lại và bộ câu hỏi quiz riêng.
const PRACTICE_OBJECTIVES: Record<string, string[]> = {
  "Thực hành": [
    "Củng cố kiến thức vừa học ở bài trước qua bài tập thực hành.",
    "Làm đúng và nhanh các dạng bài tương tự bài đã học.",
  ],
  "Luyện tập": [
    "Luyện tập thêm với nhiều dạng bài đa dạng, tăng dần độ khó.",
    "Rèn kỹ năng làm bài chính xác và tự tin hơn.",
  ],
  "Vận dụng": [
    "Vận dụng kiến thức đã học vào tình huống cụ thể, gần gũi.",
    "Rèn khả năng áp dụng linh hoạt kiến thức vào thực tế.",
  ],
  "Trò chơi ôn tập": [
    "Ôn lại kiến thức đã học qua hình thức trò chơi vui nhộn.",
    "Tạo hứng thú, giảm áp lực khi ôn tập kiến thức cũ.",
  ],
  "Thử thách nhỏ": [
    "Thử sức với các câu hỏi có độ khó tăng dần.",
    "Tự đánh giá mức độ hiểu bài của bản thân sau khi học.",
  ],
};

const PRACTICE_FUNFACT: Record<string, string> = {
  "Thực hành": "Mẹo nhỏ: Làm bài tập thực hành ngay sau khi học sẽ giúp em nhớ bài lâu hơn rất nhiều!",
  "Luyện tập": "Mẹo nhỏ: Luyện tập đều đặn mỗi ngày, dù chỉ vài phút, cũng giúp em tiến bộ rõ rệt!",
  "Vận dụng": "Mẹo nhỏ: Thử liên hệ kiến thức với những điều em gặp hằng ngày để nhớ bài lâu hơn!",
  "Trò chơi ôn tập": "Mẹo nhỏ: Học qua trò chơi giúp não bộ ghi nhớ kiến thức một cách tự nhiên và thú vị hơn!",
  "Thử thách nhỏ": "Mẹo nhỏ: Đừng ngại sai — mỗi lần thử thách là một cơ hội để em tiến bộ hơn!",
};

function practiceContent(
  verb: keyof typeof PRACTICE_OBJECTIVES,
  coreTitle: string,
  recap: string,
  quiz: QuizQuestion[]
): LessonContent {
  return {
    objectives: PRACTICE_OBJECTIVES[verb],
    sections: [
      {
        heading: "Ôn lại kiến thức",
        body: [
          `Bài này giúp em ôn luyện lại nội dung của bài "${coreTitle}". ${recap}`,
          "Hãy vận dụng những gì đã học để hoàn thành các câu hỏi dưới đây nhé!",
        ],
      },
    ],
    quiz,
    funFact: PRACTICE_FUNFACT[verb],
  };
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
  // ═══════════════════════════════ TOÁN — LỚP 3 ═══════════════════════════════
  "toan:3:on-tap-cac-so-den-1000": {
    objectives: [
      "Đọc, viết đúng các số có ba chữ số.",
      "Nêu được số đó gồm mấy trăm, mấy chục, mấy đơn vị.",
      "So sánh và sắp xếp thứ tự các số trong phạm vi 1000.",
    ],
    sections: [
      {
        heading: "1. Cấu tạo số có ba chữ số",
        body: [
          "Một số có ba chữ số gồm hàng trăm, hàng chục và hàng đơn vị. Ví dụ số 348 gồm 3 trăm, 4 chục và 8 đơn vị, viết là 348 = 300 + 40 + 8.",
        ],
      },
      {
        heading: "2. So sánh các số trong phạm vi 1000",
        body: [
          "Để so sánh hai số có ba chữ số, em so sánh lần lượt từ hàng trăm: số nào có hàng trăm lớn hơn thì lớn hơn. Nếu bằng nhau thì so sánh tiếp hàng chục, rồi hàng đơn vị.",
          "Ví dụ: 512 và 521 đều có hàng trăm là 5, hàng chục 1 = 2, vậy so sánh hàng chục: 1 < 2 nên 512 < 521.",
        ],
      },
      {
        heading: "3. Sắp xếp thứ tự các số",
        body: [
          "Khi sắp xếp nhiều số theo thứ tự tăng dần hoặc giảm dần, em nên so sánh từng cặp số một, bắt đầu từ hàng trăm.",
        ],
      },
    ],
    quiz: [
      {
        question: "Số 348 gồm mấy trăm, mấy chục, mấy đơn vị?",
        options: ["3 trăm, 4 chục, 8 đơn vị", "4 trăm, 3 chục, 8 đơn vị", "3 trăm, 8 chục, 4 đơn vị", "8 trăm, 4 chục, 3 đơn vị"],
        correctIndex: 0,
        explanation: "348 = 300 + 40 + 8, tức 3 trăm, 4 chục, 8 đơn vị.",
      },
      {
        question: "Số nào lớn hơn: 512 hay 521?",
        options: ["512", "521", "Bằng nhau", "Không so sánh được"],
        correctIndex: 1,
        explanation: "Hàng trăm bằng nhau (5), so hàng chục: 1 < 2 nên 521 lớn hơn.",
      },
      {
        question: "Sắp xếp các số 205, 250, 502 theo thứ tự tăng dần, số nào đứng đầu?",
        options: ["205", "250", "502", "Không xác định được"],
        correctIndex: 0,
        explanation: "So sánh hàng trăm: 2 < 2 < 5, hai số đầu bằng hàng trăm nên so hàng chục: 0 < 5, vậy 205 nhỏ nhất.",
      },
    ],
    funFact: "Bạn có biết? Hệ đếm thập phân (dùng 10 chữ số từ 0 đến 9) mà em đang học có nguồn gốc từ việc con người đếm bằng 10 ngón tay!",
  },

  "toan:3:cong-tru-cac-so-trong-pham-vi-1000": {
    objectives: [
      "Thực hiện được phép cộng, trừ các số có ba chữ số có nhớ.",
      "Đặt tính đúng và tính chính xác.",
      "Vận dụng vào giải bài toán có lời văn đơn giản.",
    ],
    sections: [
      {
        heading: "1. Đặt tính cộng, trừ",
        body: [
          "Khi đặt tính, em viết các chữ số cùng hàng thẳng cột với nhau (hàng trăm thẳng hàng trăm, hàng chục thẳng hàng chục...), rồi thực hiện phép tính từ phải sang trái, bắt đầu từ hàng đơn vị.",
        ],
      },
      {
        heading: "2. Phép cộng có nhớ",
        body: [
          "Khi cộng hai chữ số ở một hàng mà kết quả từ 10 trở lên, em viết chữ số hàng đơn vị của kết quả và nhớ 1 sang hàng liền trước.",
        ],
      },
      {
        heading: "3. Phép trừ có nhớ",
        body: [
          "Khi số bị trừ ở một hàng nhỏ hơn số trừ, em phải mượn 1 đơn vị từ hàng liền trước (mượn 1 chục = 10 đơn vị) rồi mới trừ.",
        ],
      },
    ],
    quiz: [
      {
        question: "Kết quả của phép tính 356 + 278 là bao nhiêu?",
        options: ["634", "624", "534", "644"],
        correctIndex: 0,
        explanation: "356 + 278 = 634 (6+8=14 viết 4 nhớ 1; 5+7+1=13 viết 3 nhớ 1; 3+2+1=6).",
      },
      {
        question: "Kết quả của phép tính 604 - 168 là bao nhiêu?",
        options: ["446", "436", "536", "456"],
        correctIndex: 1,
        explanation: "604 - 168 = 436.",
      },
      {
        question: "Lớp 3A có 245 quyển sách, lớp 3B có nhiều hơn 3A là 32 quyển. Hỏi 3B có bao nhiêu quyển sách?",
        options: ["213", "267", "277", "287"],
        correctIndex: 2,
        explanation: "Số sách lớp 3B = 245 + 32 = 277 quyển.",
      },
    ],
    funFact: "Bạn có biết? Phép cộng có nhớ đã được người Ấn Độ cổ đại phát minh ra cách đây hơn 1000 năm để tính toán thuận tiện hơn!",
  },

  "toan:3:bang-nhan-6-7-8-9": {
    objectives: [
      "Học thuộc bảng nhân 6, 7, 8, 9.",
      "Vận dụng bảng nhân để tính nhẩm nhanh.",
      "Giải được bài toán có liên quan đến phép nhân.",
    ],
    sections: [
      {
        heading: "1. Cách lập bảng nhân",
        body: [
          "Bảng nhân 6 được lập bằng cách cộng liên tiếp 6 đơn vị: 6, 6+6=12, 12+6=18... Tương tự, bảng nhân 7, 8, 9 cũng được lập bằng cách cộng thêm 7, 8, 9 mỗi lần.",
        ],
      },
      {
        heading: "2. Mẹo ghi nhớ",
        body: [
          "Em có thể học thuộc bảng nhân bằng cách đọc to nhiều lần, hoặc nhận ra quy luật: tích của bảng nhân sau luôn hơn tích tương ứng của bảng nhân trước một số bằng thừa số còn lại.",
        ],
      },
      {
        heading: "3. Vận dụng vào bài toán",
        body: [
          "Khi bài toán có các nhóm đồ vật giống nhau, em dùng phép nhân để tính nhanh tổng số lượng thay vì cộng nhiều lần.",
        ],
      },
    ],
    quiz: [
      {
        question: "7 × 8 = ?",
        options: ["54", "56", "64", "48"],
        correctIndex: 1,
        explanation: "7 × 8 = 56.",
      },
      {
        question: "9 × 6 = ?",
        options: ["45", "63", "54", "56"],
        correctIndex: 2,
        explanation: "9 × 6 = 54.",
      },
      {
        question: "Mỗi hộp có 8 chiếc bút. Hỏi 6 hộp như vậy có bao nhiêu chiếc bút?",
        options: ["42", "46", "48", "56"],
        correctIndex: 2,
        explanation: "6 hộp × 8 bút = 48 chiếc bút.",
      },
    ],
    funFact: "Bạn có biết? Người Trung Quốc cổ đại đã sáng tạo ra bảng cửu chương từ hơn 2000 năm trước để giúp việc tính toán dễ dàng hơn!",
  },

  "toan:3:bang-chia-6-7-8-9": {
    objectives: [
      "Học thuộc bảng chia 6, 7, 8, 9.",
      "Hiểu phép chia là phép tính ngược của phép nhân.",
      "Vận dụng bảng chia để giải bài toán chia đều.",
    ],
    sections: [
      {
        heading: "1. Mối quan hệ giữa nhân và chia",
        body: [
          "Nếu 6 × 7 = 42 thì 42 : 6 = 7 và 42 : 7 = 6. Vì vậy, khi đã thuộc bảng nhân, em có thể suy ra bảng chia tương ứng.",
        ],
      },
      {
        heading: "2. Chia hết và các thành phần của phép chia",
        body: [
          "Trong phép chia a : b = c, a gọi là số bị chia, b là số chia, c là thương. Khi chia hết, không còn dư.",
        ],
      },
      {
        heading: "3. Vận dụng chia đều",
        body: [
          "Phép chia thường dùng khi cần chia đều một số lượng đồ vật thành các phần bằng nhau, hoặc tìm xem có bao nhiêu nhóm nếu mỗi nhóm có số lượng nhất định.",
        ],
      },
    ],
    quiz: [
      {
        question: "56 : 8 = ?",
        options: ["6", "7", "8", "9"],
        correctIndex: 1,
        explanation: "8 × 7 = 56 nên 56 : 8 = 7.",
      },
      {
        question: "63 : 9 = ?",
        options: ["6", "7", "8", "9"],
        correctIndex: 1,
        explanation: "9 × 7 = 63 nên 63 : 9 = 7.",
      },
      {
        question: "Có 54 quả táo chia đều vào 6 rổ. Mỗi rổ có bao nhiêu quả táo?",
        options: ["7", "8", "9", "10"],
        correctIndex: 2,
        explanation: "54 : 6 = 9 quả táo mỗi rổ.",
      },
    ],
    funFact: "Bạn có biết? Dấu chia ':' mà em dùng ngày nay được một nhà toán học Thuỵ Sĩ giới thiệu lần đầu vào thế kỷ 17!",
  },

  "toan:3:nhan-chia-so-co-hai-ba-chu-so": {
    objectives: [
      "Thực hiện phép nhân số có hai, ba chữ số với số có một chữ số.",
      "Thực hiện phép chia số có hai, ba chữ số cho số có một chữ số.",
      "Đặt tính đúng và trình bày bài giải rõ ràng.",
    ],
    sections: [
      {
        heading: "1. Nhân số có nhiều chữ số với số có một chữ số",
        body: [
          "Em đặt tính rồi nhân lần lượt từ hàng đơn vị, nhớ sang hàng liền trước nếu kết quả từ 10 trở lên, giống như khi thực hiện phép cộng có nhớ.",
        ],
      },
      {
        heading: "2. Chia số có nhiều chữ số cho số có một chữ số",
        body: [
          "Em chia lần lượt từ hàng cao nhất: lấy từng chữ số (hoặc nhóm chữ số) chia cho số chia, viết thương, tìm số dư rồi hạ chữ số tiếp theo xuống để chia tiếp.",
        ],
      },
      {
        heading: "3. Kiểm tra lại kết quả",
        body: [
          "Sau khi tính xong phép chia, em có thể kiểm tra bằng cách lấy thương nhân với số chia rồi cộng số dư (nếu có), kết quả phải bằng số bị chia ban đầu.",
        ],
      },
    ],
    quiz: [
      {
        question: "Kết quả của phép tính 123 × 4 là bao nhiêu?",
        options: ["492", "482", "512", "462"],
        correctIndex: 0,
        explanation: "123 × 4 = 492.",
      },
      {
        question: "Kết quả của phép tính 246 : 6 là bao nhiêu?",
        options: ["41", "42", "43", "44"],
        correctIndex: 0,
        explanation: "246 : 6 = 41.",
      },
      {
        question: "Một xưởng may mỗi ngày may được 215 chiếc áo. Hỏi 3 ngày xưởng may được bao nhiêu chiếc áo?",
        options: ["615", "625", "645", "635"],
        correctIndex: 2,
        explanation: "215 × 3 = 645 chiếc áo.",
      },
    ],
    funFact: "Bạn có biết? Cách đặt tính nhân, chia theo cột dọc mà em đang học đã được sử dụng rộng rãi ở châu Âu từ thời Trung Cổ!",
  },

  "toan:3:goc-vuong-goc-khong-vuong": {
    objectives: [
      "Nhận biết góc vuông và góc không vuông.",
      "Biết dùng ê-ke để kiểm tra góc vuông.",
      "Tìm được góc vuông trong các hình, đồ vật quen thuộc.",
    ],
    sections: [
      {
        heading: "1. Góc vuông là gì?",
        body: [
          "Góc vuông là góc có số đo bằng 90 độ, thường thấy ở góc của quyển vở, cạnh bàn, khung cửa. Các góc khác 90 độ gọi là góc không vuông (góc nhọn nhỏ hơn 90 độ, góc tù lớn hơn 90 độ).",
        ],
      },
      {
        heading: "2. Dùng ê-ke kiểm tra góc vuông",
        body: [
          "Ê-ke là dụng cụ có một góc vuông. Đặt đỉnh góc vuông của ê-ke trùng với đỉnh góc cần kiểm tra, nếu hai cạnh trùng khít với hai cạnh của ê-ke thì đó là góc vuông.",
        ],
      },
      {
        heading: "3. Tìm góc vuông quanh em",
        body: [
          "Nhiều đồ vật quen thuộc có góc vuông: góc bảng, góc cửa sổ, góc quyển sách. Em hãy quan sát và tìm thêm những góc vuông khác quanh mình.",
        ],
      },
    ],
    quiz: [
      {
        question: "Góc vuông có số đo bằng bao nhiêu độ?",
        options: ["45 độ", "60 độ", "90 độ", "180 độ"],
        correctIndex: 2,
        explanation: "Góc vuông có số đo đúng bằng 90 độ.",
      },
      {
        question: "Dụng cụ nào dùng để kiểm tra góc vuông?",
        options: ["Thước dây", "Ê-ke", "Compa", "Bút chì"],
        correctIndex: 1,
        explanation: "Ê-ke có sẵn một góc vuông, dùng để kiểm tra góc vuông.",
      },
      {
        question: "Góc nào sau đây KHÔNG phải là góc vuông?",
        options: ["Góc của quyển vở", "Góc bảng đen", "Góc nhọn của ê-ke", "Góc khung cửa sổ"],
        correctIndex: 2,
        explanation: "Ê-ke có một góc vuông và hai góc nhọn (nhỏ hơn 90 độ).",
      },
    ],
    funFact: "Bạn có biết? Người Ai Cập cổ đại đã biết tạo góc vuông chính xác bằng một sợi dây có 12 nút thắt cách đều nhau để xây kim tự tháp!",
  },

  "toan:3:chu-vi-hinh-chu-nhat-hinh-vuong": {
    objectives: [
      "Nêu được công thức tính chu vi hình chữ nhật, hình vuông.",
      "Tính được chu vi khi biết số đo các cạnh.",
      "Vận dụng vào giải bài toán thực tế.",
    ],
    sections: [
      {
        heading: "1. Chu vi hình chữ nhật",
        body: [
          "Chu vi hình chữ nhật bằng (chiều dài + chiều rộng) × 2. Ví dụ hình chữ nhật có chiều dài 8cm, chiều rộng 5cm thì chu vi là (8+5) × 2 = 26cm.",
        ],
      },
      {
        heading: "2. Chu vi hình vuông",
        body: [
          "Vì hình vuông có 4 cạnh bằng nhau, chu vi hình vuông bằng độ dài một cạnh nhân với 4. Ví dụ hình vuông cạnh 6cm có chu vi là 6 × 4 = 24cm.",
        ],
      },
      {
        heading: "3. Vận dụng thực tế",
        body: [
          "Chu vi thường được dùng để tính độ dài hàng rào bao quanh khu vườn, độ dài viền khung tranh... Em hãy thử đo và tính chu vi mặt bàn học của mình.",
        ],
      },
    ],
    quiz: [
      {
        question: "Hình chữ nhật có chiều dài 9cm, chiều rộng 4cm. Chu vi hình đó là bao nhiêu?",
        options: ["13cm", "26cm", "36cm", "18cm"],
        correctIndex: 1,
        explanation: "Chu vi = (9+4) × 2 = 26cm.",
      },
      {
        question: "Hình vuông có cạnh dài 7cm. Chu vi hình đó là bao nhiêu?",
        options: ["14cm", "21cm", "28cm", "49cm"],
        correctIndex: 2,
        explanation: "Chu vi hình vuông = 7 × 4 = 28cm.",
      },
      {
        question: "Một khu vườn hình chữ nhật có chu vi 40m, chiều dài 12m. Chiều rộng khu vườn là bao nhiêu?",
        options: ["6m", "8m", "10m", "14m"],
        correctIndex: 1,
        explanation: "Nửa chu vi = 40:2 = 20m, chiều rộng = 20 - 12 = 8m.",
      },
    ],
    funFact: "Bạn có biết? Từ 'chu vi' trong tiếng Hy Lạp cổ có nghĩa là 'đi vòng quanh' — đúng như cách em đo độ dài đường bao quanh một hình!",
  },

  "toan:3:lam-quen-voi-phan-so": {
    objectives: [
      "Nhận biết phân số qua hình ảnh chia phần bằng nhau.",
      "Đọc, viết đúng các phân số đơn giản.",
      "Nêu được tử số và mẫu số của một phân số.",
    ],
    sections: [
      {
        heading: "1. Phân số là gì?",
        body: [
          "Khi chia một hình (hoặc một nhóm đồ vật) thành các phần bằng nhau, mỗi phần được gọi là một phần của tổng thể, thể hiện bằng phân số. Ví dụ chia hình tròn thành 4 phần bằng nhau, lấy 1 phần thì được 1/4 hình tròn.",
        ],
      },
      {
        heading: "2. Đọc và viết phân số",
        body: [
          "Phân số 1/4 đọc là 'một phần tư'. Số trên (1) gọi là tử số, số dưới (4) gọi là mẫu số. Mẫu số cho biết hình được chia thành mấy phần bằng nhau, tử số cho biết đã lấy mấy phần trong đó.",
        ],
      },
      {
        heading: "3. Một số phân số thường gặp",
        body: [
          "1/2 (một phần hai, hay còn gọi là một nửa), 1/3 (một phần ba), 1/4 (một phần tư)... đều là những phân số quen thuộc trong cuộc sống hàng ngày, ví dụ chia đôi cái bánh, chia ba quả cam.",
        ],
      },
    ],
    quiz: [
      {
        question: "Chia một cái bánh thành 4 phần bằng nhau, lấy 3 phần. Phân số biểu diễn là gì?",
        options: ["1/4", "3/4", "4/3", "1/3"],
        correctIndex: 1,
        explanation: "Lấy 3 trong 4 phần bằng nhau, viết là 3/4.",
      },
      {
        question: "Trong phân số 2/5, số nào là mẫu số?",
        options: ["2", "5", "7", "Không có mẫu số"],
        correctIndex: 1,
        explanation: "Số dưới gạch ngang (5) là mẫu số, cho biết chia thành 5 phần bằng nhau.",
      },
      {
        question: "Phân số nào biểu diễn 'một nửa'?",
        options: ["1/3", "1/2", "2/1", "1/4"],
        correctIndex: 1,
        explanation: "'Một nửa' nghĩa là chia đôi và lấy 1 phần, viết là 1/2.",
      },
    ],
    funFact: "Bạn có biết? Người Ai Cập cổ đại là một trong những nền văn minh đầu tiên sử dụng phân số, cách đây gần 4000 năm!",
  },

  "toan:3:cac-so-den-10-000-100-000": {
    objectives: [
      "Đọc, viết đúng các số có bốn, năm chữ số.",
      "Nêu được cấu tạo hàng nghìn, hàng chục nghìn của số.",
      "So sánh được các số trong phạm vi 100 000.",
    ],
    sections: [
      {
        heading: "1. Các số có bốn chữ số",
        body: [
          "Số có bốn chữ số gồm hàng nghìn, hàng trăm, hàng chục, hàng đơn vị. Ví dụ 5348 gồm 5 nghìn, 3 trăm, 4 chục, 8 đơn vị.",
        ],
      },
      {
        heading: "2. Các số có năm chữ số",
        body: [
          "Số có năm chữ số có thêm hàng chục nghìn. Ví dụ 72 415 gồm 7 chục nghìn, 2 nghìn, 4 trăm, 1 chục, 5 đơn vị.",
        ],
      },
      {
        heading: "3. So sánh các số lớn",
        body: [
          "Cách so sánh vẫn giữ nguyên nguyên tắc: số nào có nhiều chữ số hơn thì lớn hơn; nếu số chữ số bằng nhau thì so sánh lần lượt từ hàng cao nhất.",
        ],
      },
    ],
    quiz: [
      {
        question: "Số 5348 gồm mấy nghìn, mấy trăm, mấy chục, mấy đơn vị?",
        options: ["5 nghìn, 3 trăm, 4 chục, 8 đơn vị", "3 nghìn, 5 trăm, 4 chục, 8 đơn vị", "5 nghìn, 4 trăm, 3 chục, 8 đơn vị", "8 nghìn, 4 trăm, 3 chục, 5 đơn vị"],
        correctIndex: 0,
        explanation: "5348 = 5000 + 300 + 40 + 8.",
      },
      {
        question: "Số nào lớn hơn: 8695 hay 9012?",
        options: ["8695", "9012", "Bằng nhau", "Không so sánh được"],
        correctIndex: 1,
        explanation: "Hàng nghìn: 8 < 9 nên 9012 lớn hơn.",
      },
      {
        question: "Số 72 415 có bao nhiêu chữ số?",
        options: ["4", "5", "6", "3"],
        correctIndex: 1,
        explanation: "72 415 có 5 chữ số: 7, 2, 4, 1, 5.",
      },
    ],
    funFact: "Bạn có biết? Số lớn nhất có 5 chữ số là 99 999 — nếu cộng thêm 1, ta sẽ có số 100 000 với 6 chữ số!",
  },

  "toan:3:dien-tich-hinh-chu-nhat-hinh-vuong": {
    objectives: [
      "Hiểu khái niệm diện tích và đơn vị đo diện tích cm².",
      "Nêu được công thức tính diện tích hình chữ nhật, hình vuông.",
      "Vận dụng công thức để giải bài toán.",
    ],
    sections: [
      {
        heading: "1. Diện tích là gì?",
        body: [
          "Diện tích là số đo phần mặt phẳng bên trong một hình. Đơn vị đo diện tích em học đầu tiên là xăng-ti-mét vuông, viết tắt là cm².",
        ],
      },
      {
        heading: "2. Công thức tính diện tích hình chữ nhật",
        body: [
          "Diện tích hình chữ nhật = chiều dài × chiều rộng. Ví dụ hình chữ nhật dài 6cm, rộng 4cm có diện tích là 6 × 4 = 24cm².",
        ],
      },
      {
        heading: "3. Công thức tính diện tích hình vuông",
        body: [
          "Diện tích hình vuông = cạnh × cạnh. Ví dụ hình vuông cạnh 5cm có diện tích là 5 × 5 = 25cm².",
        ],
      },
    ],
    quiz: [
      {
        question: "Hình chữ nhật dài 8cm, rộng 3cm. Diện tích hình đó là bao nhiêu?",
        options: ["11cm²", "22cm²", "24cm²", "26cm²"],
        correctIndex: 2,
        explanation: "Diện tích = 8 × 3 = 24cm².",
      },
      {
        question: "Hình vuông cạnh 6cm. Diện tích hình đó là bao nhiêu?",
        options: ["12cm²", "24cm²", "30cm²", "36cm²"],
        correctIndex: 3,
        explanation: "Diện tích = 6 × 6 = 36cm².",
      },
      {
        question: "Đơn vị nào dùng để đo diện tích mà em vừa học?",
        options: ["cm", "cm²", "kg", "lít"],
        correctIndex: 1,
        explanation: "cm² (xăng-ti-mét vuông) là đơn vị đo diện tích.",
      },
    ],
    funFact: "Bạn có biết? Sân bóng đá tiêu chuẩn có diện tích khoảng 7140 mét vuông — lớn hơn cả một sân trường!",
  },

  "toan:3:gam-mi-li-lit": {
    objectives: [
      "Làm quen đơn vị đo khối lượng gam (g).",
      "Làm quen đơn vị đo dung tích mi-li-lít (ml).",
      "Vận dụng để ước lượng khối lượng, dung tích đồ vật quen thuộc.",
    ],
    sections: [
      {
        heading: "1. Đơn vị gam",
        body: [
          "Gam (viết tắt g) là đơn vị đo khối lượng nhỏ hơn ki-lô-gam. 1 ki-lô-gam = 1000 gam. Gam thường dùng để cân những vật nhẹ như gói bột nêm, viên thuốc.",
        ],
      },
      {
        heading: "2. Đơn vị mi-li-lít",
        body: [
          "Mi-li-lít (viết tắt ml) là đơn vị đo dung tích nhỏ hơn lít. 1 lít = 1000 ml. Mi-li-lít thường dùng để đo lượng nước trong chai nhỏ, lọ thuốc.",
        ],
      },
      {
        heading: "3. Ước lượng trong đời sống",
        body: [
          "Một gói mì ăn liền nặng khoảng 75g, một hộp sữa nhỏ có dung tích khoảng 180ml. Em hãy tập ước lượng khối lượng, dung tích của một số đồ vật quen thuộc.",
        ],
      },
    ],
    quiz: [
      {
        question: "1 ki-lô-gam bằng bao nhiêu gam?",
        options: ["10g", "100g", "1000g", "10 000g"],
        correctIndex: 2,
        explanation: "1kg = 1000g.",
      },
      {
        question: "1 lít bằng bao nhiêu mi-li-lít?",
        options: ["10ml", "100ml", "1000ml", "10 000ml"],
        correctIndex: 2,
        explanation: "1 lít = 1000ml.",
      },
      {
        question: "Đơn vị nào phù hợp để đo khối lượng của một viên kẹo?",
        options: ["Ki-lô-gam", "Gam", "Lít", "Mét"],
        correctIndex: 1,
        explanation: "Viên kẹo rất nhẹ nên dùng đơn vị gam là phù hợp.",
      },
    ],
    funFact: "Bạn có biết? Đơn vị gam ra đời từ thời Cách mạng Pháp, ban đầu được định nghĩa là khối lượng của 1cm³ nước tinh khiết!",
  },

  "toan:3:bai-toan-lien-quan-den-rut-ve-don-vi": {
    objectives: [
      "Hiểu các bước giải bài toán bằng cách rút về đơn vị.",
      "Vận dụng để giải bài toán có hai phép tính.",
      "Trình bày bài giải rõ ràng, đúng thứ tự các bước.",
    ],
    sections: [
      {
        heading: "1. Rút về đơn vị là gì?",
        body: [
          "Rút về đơn vị là bước tìm giá trị của một đơn vị (ví dụ: giá của 1 quyển vở, số kẹo trong 1 túi) trước khi tính giá trị của nhiều đơn vị khác.",
        ],
      },
      {
        heading: "2. Các bước giải",
        body: [
          "Bước 1: Tìm giá trị của 1 đơn vị (thường dùng phép chia). Bước 2: Từ giá trị 1 đơn vị, tính giá trị cần tìm (thường dùng phép nhân).",
        ],
      },
      {
        heading: "3. Ví dụ minh hoạ",
        body: [
          "Có 5 hộp bút, mỗi hộp giá như nhau, tổng cộng 100 000 đồng. Hỏi mua 3 hộp bút hết bao nhiêu tiền? Bước 1: giá 1 hộp = 100 000 : 5 = 20 000 đồng. Bước 2: giá 3 hộp = 20 000 × 3 = 60 000 đồng.",
        ],
      },
    ],
    quiz: [
      {
        question: "Bước đầu tiên khi giải bài toán rút về đơn vị là gì?",
        options: ["Tìm giá trị của 1 đơn vị", "Nhân ngay với số lượng cần tìm", "Cộng tất cả các số trong đề bài", "Vẽ hình minh hoạ"],
        correctIndex: 0,
        explanation: "Luôn tìm giá trị của 1 đơn vị trước (thường bằng phép chia), sau đó mới tính tiếp.",
      },
      {
        question: "8 chiếc bánh giá 40 000 đồng. Hỏi 3 chiếc bánh giá bao nhiêu?",
        options: ["12 000 đồng", "15 000 đồng", "20 000 đồng", "24 000 đồng"],
        correctIndex: 1,
        explanation: "Giá 1 bánh = 40 000 : 8 = 5000 đồng; giá 3 bánh = 5000 × 3 = 15 000 đồng.",
      },
      {
        question: "Phép tính nào thường dùng ở bước 'rút về đơn vị'?",
        options: ["Phép cộng", "Phép trừ", "Phép chia", "Không cần tính toán"],
        correctIndex: 2,
        explanation: "Bước rút về đơn vị dùng phép chia để tìm giá trị của 1 đơn vị.",
      },
    ],
    funFact: "Bạn có biết? Phương pháp 'rút về đơn vị' còn được dùng trong nấu ăn khi em cần tăng giảm khẩu phần của một công thức nấu ăn!",
  },

  "toan:3:nhan-chia-so-co-bon-nam-chu-so-cho-so-co-mot-chu-so": {
    objectives: [
      "Thực hiện phép nhân số có bốn, năm chữ số với số có một chữ số.",
      "Thực hiện phép chia số có bốn, năm chữ số cho số có một chữ số.",
      "Vận dụng vào giải bài toán có lời văn.",
    ],
    sections: [
      {
        heading: "1. Nhân số lớn với số có một chữ số",
        body: [
          "Cách làm tương tự như nhân số có ba chữ số: nhân lần lượt từ hàng đơn vị, nhớ sang hàng liền trước khi kết quả từ 10 trở lên.",
        ],
      },
      {
        heading: "2. Chia số lớn cho số có một chữ số",
        body: [
          "Em chia lần lượt từ chữ số cao nhất của số bị chia. Nếu chữ số đầu tiên nhỏ hơn số chia, em lấy thêm chữ số tiếp theo để tạo thành số đủ lớn rồi mới chia.",
        ],
      },
      {
        heading: "3. Luyện tập cẩn thận",
        body: [
          "Với số có nhiều chữ số, em cần đặt tính ngay ngắn, thẳng cột để tránh nhầm lẫn khi tính toán.",
        ],
      },
    ],
    quiz: [
      {
        question: "Kết quả của phép tính 2134 × 3 là bao nhiêu?",
        options: ["6302", "6402", "6392", "6502"],
        correctIndex: 1,
        explanation: "2134 × 3 = 6402.",
      },
      {
        question: "Kết quả của phép tính 4848 : 4 là bao nhiêu?",
        options: ["1212", "1211", "1222", "1210"],
        correctIndex: 0,
        explanation: "4848 : 4 = 1212.",
      },
      {
        question: "Một nhà máy sản xuất 1250 sản phẩm mỗi ngày. Hỏi 5 ngày nhà máy sản xuất bao nhiêu sản phẩm?",
        options: ["5250", "6000", "6250", "6500"],
        correctIndex: 2,
        explanation: "1250 × 5 = 6250 sản phẩm.",
      },
    ],
    funFact: "Bạn có biết? Bàn tính (bàn toán) là công cụ tính toán cổ xưa giúp con người thực hiện các phép nhân, chia số lớn trước khi máy tính ra đời!",
  },

  "toan:3:lam-quen-voi-du-lieu-bang-so-lieu": {
    objectives: [
      "Đọc được thông tin từ bảng số liệu đơn giản.",
      "Nêu được nhận xét từ số liệu đã cho.",
      "Sắp xếp, phân loại dữ liệu theo yêu cầu.",
    ],
    sections: [
      {
        heading: "1. Bảng số liệu là gì?",
        body: [
          "Bảng số liệu trình bày thông tin dưới dạng hàng và cột, giúp người đọc dễ dàng so sánh và tìm hiểu thông tin, ví dụ bảng thống kê số học sinh mỗi lớp.",
        ],
      },
      {
        heading: "2. Cách đọc bảng số liệu",
        body: [
          "Em đọc tiêu đề bảng để biết bảng nói về điều gì, sau đó đọc tên các hàng, cột để hiểu ý nghĩa từng số liệu trong bảng.",
        ],
      },
      {
        heading: "3. Nhận xét từ số liệu",
        body: [
          "Từ bảng số liệu, em có thể tìm số lớn nhất, số nhỏ nhất, tính tổng hoặc so sánh giữa các đối tượng với nhau.",
        ],
      },
    ],
    quiz: [
      {
        question: "Bảng số liệu giúp ích điều gì?",
        options: [
          "Không giúp ích gì",
          "Trình bày thông tin dễ đọc, dễ so sánh",
          "Chỉ để trang trí",
          "Làm bài toán khó hơn",
        ],
        correctIndex: 1,
        explanation: "Bảng số liệu giúp trình bày và so sánh thông tin một cách rõ ràng, dễ hiểu.",
      },
      {
        question: "Để đọc hiểu một bảng số liệu, trước tiên em nên làm gì?",
        options: ["Đọc tiêu đề bảng", "Bỏ qua tiêu đề", "Chỉ nhìn số lớn nhất", "Vẽ lại bảng khác"],
        correctIndex: 0,
        explanation: "Đọc tiêu đề giúp em biết bảng đang nói về nội dung gì.",
      },
      {
        question: "Bảng số liệu thường được trình bày dưới dạng nào?",
        options: ["Đoạn văn dài", "Hàng và cột", "Chỉ có hình vẽ", "Chỉ có âm thanh"],
        correctIndex: 1,
        explanation: "Bảng số liệu trình bày thông tin theo hàng và cột.",
      },
    ],
    funFact: "Bạn có biết? Ngày nay các nhà khoa học dùng bảng số liệu khổng lồ với hàng triệu dòng để nghiên cứu thời tiết, dịch bệnh và nhiều lĩnh vực khác!",
  },

  "toan:3:on-tap-cuoi-nam-hoc": {
    objectives: [
      "Hệ thống lại các kiến thức số học, hình học đã học trong năm.",
      "Vận dụng linh hoạt các phép tính đã học để giải toán tổng hợp.",
      "Tự tin chuẩn bị kiến thức cho chương trình Toán lớp 4.",
    ],
    sections: [
      {
        heading: "1. Ôn tập về số và phép tính",
        body: [
          "Trong năm học, em đã học các số đến 100 000, các phép cộng trừ có nhớ, bảng nhân chia từ 2 đến 9, và bước đầu làm quen với phân số.",
        ],
      },
      {
        heading: "2. Ôn tập về hình học và đo lường",
        body: [
          "Em đã học cách nhận biết góc vuông, tính chu vi và diện tích hình chữ nhật, hình vuông, cùng các đơn vị đo gam, mi-li-lít.",
        ],
      },
      {
        heading: "3. Vận dụng giải toán tổng hợp",
        body: [
          "Hãy ôn luyện lại các dạng bài toán có lời văn, đặc biệt là bài toán rút về đơn vị, để sẵn sàng cho chương trình Toán lớp 4 với nhiều kiến thức mới và nâng cao hơn.",
        ],
      },
    ],
    quiz: [
      {
        question: "Số lớn nhất mà em đã học trong chương trình Toán lớp 3 gần với giá trị nào?",
        options: ["1000", "10 000", "100 000", "1 000 000"],
        correctIndex: 2,
        explanation: "Chương trình Toán lớp 3 giới thiệu các số đến 100 000.",
      },
      {
        question: "Công thức tính chu vi hình chữ nhật là gì?",
        options: [
          "(Dài + Rộng) × 2",
          "Dài × Rộng",
          "Dài × Rộng × 2",
          "(Dài - Rộng) × 2",
        ],
        correctIndex: 0,
        explanation: "Chu vi hình chữ nhật = (chiều dài + chiều rộng) × 2.",
      },
      {
        question: "Bảng cửu chương nào KHÔNG được học trong chương trình lớp 3?",
        options: ["Bảng nhân 6", "Bảng nhân 9", "Bảng nhân 12", "Bảng nhân 7"],
        correctIndex: 2,
        explanation: "Chương trình lớp 3 chỉ học đến bảng nhân, chia 9; bảng nhân 12 chưa được học.",
      },
    ],
    funFact: "Bạn có biết? Việc ôn tập thường xuyên giúp não bộ ghi nhớ kiến thức lâu hơn tới gấp nhiều lần so với chỉ học một lần!",
  },

  // ═══════════════════════════════ TIẾNG VIỆT — LỚP 3 ═══════════════════════════════
  "tieng-viet:3:tu-loai-danh-tu-dong-tu-tinh-tu": {
    objectives: [
      "Nhận biết danh từ, động từ, tính từ trong câu.",
      "Phân biệt được chức năng của ba loại từ này.",
      "Sử dụng đúng từ loại khi đặt câu.",
    ],
    sections: [
      {
        heading: "1. Danh từ",
        body: [
          "Danh từ là từ chỉ người, sự vật, hiện tượng, khái niệm. Ví dụ: học sinh, cái bàn, cơn mưa, tình bạn.",
        ],
      },
      {
        heading: "2. Động từ",
        body: [
          "Động từ là từ chỉ hoạt động, trạng thái của người, sự vật. Ví dụ: chạy, học, ngủ, yêu thương.",
        ],
      },
      {
        heading: "3. Tính từ",
        body: [
          "Tính từ là từ chỉ đặc điểm, tính chất của người, sự vật, hoạt động. Ví dụ: xinh đẹp, cao lớn, nhanh nhẹn, hiền lành.",
        ],
      },
    ],
    quiz: [
      {
        question: "Từ nào sau đây là danh từ?",
        options: ["chạy", "xinh đẹp", "học sinh", "nhanh"],
        correctIndex: 2,
        explanation: "'Học sinh' chỉ người, là một danh từ.",
      },
      {
        question: "Từ nào sau đây là động từ?",
        options: ["cái bàn", "học tập", "cao lớn", "cơn mưa"],
        correctIndex: 1,
        explanation: "'Học tập' chỉ hoạt động, là một động từ.",
      },
      {
        question: "Trong câu 'Bông hoa rất đẹp', từ nào là tính từ?",
        options: ["Bông hoa", "rất", "đẹp", "Không có tính từ"],
        correctIndex: 2,
        explanation: "'Đẹp' chỉ đặc điểm của bông hoa, là tính từ.",
      },
    ],
    funFact: "Bạn có biết? Tiếng Việt có khoảng hơn 40 000 từ trong từ điển, trong đó danh từ chiếm số lượng nhiều nhất!",
  },

  "tieng-viet:3:cau-ke-cau-hoi-cau-cam": {
    objectives: [
      "Nhận biết câu kể, câu hỏi, câu cảm.",
      "Phân biệt dấu câu kết thúc mỗi kiểu câu.",
      "Đặt được câu phù hợp với mục đích nói.",
    ],
    sections: [
      {
        heading: "1. Câu kể",
        body: [
          "Câu kể dùng để kể, tả, giới thiệu sự việc, thường kết thúc bằng dấu chấm. Ví dụ: 'Hôm nay trời nắng đẹp.'",
        ],
      },
      {
        heading: "2. Câu hỏi",
        body: [
          "Câu hỏi dùng để hỏi về điều chưa biết, kết thúc bằng dấu chấm hỏi. Ví dụ: 'Bạn tên là gì?'",
        ],
      },
      {
        heading: "3. Câu cảm",
        body: [
          "Câu cảm dùng để bộc lộ cảm xúc (vui, buồn, ngạc nhiên...), kết thúc bằng dấu chấm than. Ví dụ: 'Ôi, đẹp quá!'",
        ],
      },
    ],
    quiz: [
      {
        question: "Câu 'Bạn đã ăn cơm chưa?' là kiểu câu gì?",
        options: ["Câu kể", "Câu hỏi", "Câu cảm", "Câu khiến"],
        correctIndex: 1,
        explanation: "Câu này dùng để hỏi, kết thúc bằng dấu chấm hỏi, là câu hỏi.",
      },
      {
        question: "Câu nào sau đây là câu cảm?",
        options: ["Em đi học.", "Em đi học chưa?", "Ôi, đẹp quá!", "Em hãy đi học."],
        correctIndex: 2,
        explanation: "'Ôi, đẹp quá!' bộc lộ cảm xúc ngạc nhiên, thích thú — là câu cảm.",
      },
      {
        question: "Câu kể thường kết thúc bằng dấu gì?",
        options: ["Dấu chấm hỏi", "Dấu chấm than", "Dấu chấm", "Dấu hai chấm"],
        correctIndex: 2,
        explanation: "Câu kể dùng để kể, tả sự việc, thường kết thúc bằng dấu chấm.",
      },
    ],
    funFact: "Bạn có biết? Trong tiếng Việt, chỉ cần thay đổi dấu câu ở cuối, cùng một câu có thể mang ý nghĩa hoàn toàn khác nhau!",
  },

  "tieng-viet:3:doc-hieu-truyen-thieu-nhi": {
    objectives: [
      "Đọc trôi chảy một truyện thiếu nhi ngắn.",
      "Hiểu nội dung, ý nghĩa của truyện.",
      "Trả lời được câu hỏi liên quan đến nhân vật, sự việc trong truyện.",
    ],
    sections: [
      {
        heading: "1. Cách đọc hiểu truyện",
        body: [
          "Khi đọc truyện, em cần chú ý đến nhân vật (ai?), sự việc (chuyện gì xảy ra?), và ý nghĩa mà câu chuyện muốn truyền tải.",
        ],
      },
      {
        heading: "2. Xác định nhân vật và sự việc chính",
        body: [
          "Em hãy tập tóm tắt truyện bằng cách trả lời: truyện có những nhân vật nào, chuyện gì xảy ra ở đầu, giữa và cuối truyện.",
        ],
      },
      {
        heading: "3. Rút ra bài học",
        body: [
          "Hầu hết truyện thiếu nhi đều mang một bài học ý nghĩa, ví dụ về lòng dũng cảm, sự trung thực, hay tình bạn. Em hãy suy nghĩ xem truyện mình vừa đọc muốn nhắn nhủ điều gì.",
        ],
      },
    ],
    quiz: [
      {
        question: "Khi đọc hiểu một câu truyện, điều đầu tiên em nên xác định là gì?",
        options: ["Số trang của truyện", "Nhân vật và sự việc chính", "Tên tác giả", "Số lượng từ trong truyện"],
        correctIndex: 1,
        explanation: "Xác định nhân vật và sự việc chính giúp em hiểu nội dung câu chuyện.",
      },
      {
        question: "Truyện thiếu nhi thường mang lại điều gì cho người đọc?",
        options: ["Chỉ để giải trí", "Một bài học hoặc ý nghĩa nào đó", "Không có tác dụng gì", "Chỉ để học thuộc lòng"],
        correctIndex: 1,
        explanation: "Truyện thiếu nhi thường lồng ghép bài học về đạo đức, tình cảm hay kỹ năng sống.",
      },
      {
        question: "Để tóm tắt một câu chuyện, em nên làm gì?",
        options: [
          "Chép lại nguyên văn cả câu chuyện",
          "Kể lại ngắn gọn các sự việc chính theo đúng trình tự",
          "Chỉ đọc tên truyện",
          "Bỏ qua phần kết truyện",
        ],
        correctIndex: 1,
        explanation: "Tóm tắt là kể lại ngắn gọn, đầy đủ các sự việc chính theo đúng trình tự.",
      },
    ],
    funFact: "Bạn có biết? Truyện cổ tích Việt Nam như 'Tấm Cám', 'Sọ Dừa' đã được truyền miệng qua hàng trăm năm trước khi được ghi chép lại!",
  },

  "tieng-viet:3:doc-hieu-tho-thieu-nhi": {
    objectives: [
      "Đọc diễn cảm một bài thơ thiếu nhi.",
      "Cảm nhận được vần điệu, nhịp điệu của bài thơ.",
      "Hiểu nội dung và tình cảm bài thơ muốn truyền tải.",
    ],
    sections: [
      {
        heading: "1. Vần và nhịp trong thơ",
        body: [
          "Thơ thường có vần (các tiếng cuối dòng có âm giống nhau) và nhịp (cách ngắt nghỉ khi đọc), tạo nên âm điệu du dương, dễ nhớ.",
        ],
      },
      {
        heading: "2. Cách đọc diễn cảm",
        body: [
          "Khi đọc thơ, em nên ngắt nghỉ đúng nhịp, lên xuống giọng phù hợp với cảm xúc bài thơ (vui tươi, nhẹ nhàng, hay tha thiết).",
        ],
      },
      {
        heading: "3. Cảm nhận nội dung bài thơ",
        body: [
          "Sau khi đọc, em hãy suy nghĩ: bài thơ nói về điều gì, tác giả muốn gửi gắm tình cảm gì qua bài thơ đó.",
        ],
      },
    ],
    quiz: [
      {
        question: "Trong thơ, các tiếng cuối dòng có âm giống nhau được gọi là gì?",
        options: ["Nhịp thơ", "Vần thơ", "Đoạn thơ", "Khổ thơ"],
        correctIndex: 1,
        explanation: "Các tiếng có âm giống nhau ở cuối dòng thơ gọi là vần thơ.",
      },
      {
        question: "Khi đọc diễn cảm một bài thơ, em cần chú ý điều gì?",
        options: [
          "Đọc thật nhanh cho xong",
          "Ngắt nghỉ đúng nhịp và thể hiện cảm xúc",
          "Đọc không cần lên xuống giọng",
          "Chỉ cần đọc đúng chữ, không cần cảm xúc",
        ],
        correctIndex: 1,
        explanation: "Đọc diễn cảm cần ngắt nghỉ đúng nhịp và thể hiện đúng cảm xúc của bài thơ.",
      },
      {
        question: "Vì sao thơ thường dễ nhớ hơn văn xuôi?",
        options: [
          "Vì thơ ngắn hơn văn xuôi",
          "Vì thơ có vần điệu, nhịp điệu",
          "Vì thơ không có nội dung",
          "Vì thơ không cần đọc hiểu",
        ],
        correctIndex: 1,
        explanation: "Vần điệu, nhịp điệu giúp thơ dễ đọc, dễ nhớ hơn.",
      },
    ],
    funFact: "Bạn có biết? Bài thơ 'Hạt gạo làng ta' của nhà thơ Trần Đăng Khoa được sáng tác khi ông mới chỉ khoảng 10 tuổi!",
  },

  "tieng-viet:3:viet-thu-cho-nguoi-than": {
    objectives: [
      "Nêu được thể thức cơ bản của một bức thư.",
      "Viết được một bức thư ngắn cho người thân.",
      "Diễn đạt tình cảm chân thành trong thư.",
    ],
    sections: [
      {
        heading: "1. Thể thức của một bức thư",
        body: [
          "Một bức thư thường gồm: địa điểm, ngày tháng viết thư; lời chào đầu thư; nội dung chính; lời chào cuối thư và chữ ký, tên người viết.",
        ],
      },
      {
        heading: "2. Nội dung chính của thư",
        body: [
          "Phần nội dung có thể kể về tình hình học tập, sức khoẻ, hoặc bày tỏ tình cảm, lời hỏi thăm với người nhận thư.",
        ],
      },
      {
        heading: "3. Lưu ý khi viết thư",
        body: [
          "Em nên viết câu văn rõ ràng, chân thành, thể hiện đúng tình cảm với người thân mà mình đang viết thư gửi tới.",
        ],
      },
    ],
    quiz: [
      {
        question: "Phần nào KHÔNG thuộc thể thức của một bức thư?",
        options: ["Địa điểm, ngày tháng", "Lời chào đầu thư", "Mục lục chương", "Chữ ký, tên người viết"],
        correctIndex: 2,
        explanation: "Mục lục chương không phải là phần của một bức thư thông thường.",
      },
      {
        question: "Phần đầu bức thư thường có nội dung gì?",
        options: ["Chữ ký người viết", "Địa điểm, ngày tháng và lời chào", "Kết thúc thư", "Không cần phần đầu"],
        correctIndex: 1,
        explanation: "Đầu thư thường ghi địa điểm, ngày tháng viết thư và lời chào người nhận.",
      },
      {
        question: "Khi viết thư cho người thân, giọng văn nên như thế nào?",
        options: ["Trang trọng như văn bản hành chính", "Chân thành, gần gũi", "Ngắn gọn không cần chào hỏi", "Không cần bày tỏ cảm xúc"],
        correctIndex: 1,
        explanation: "Thư cho người thân nên viết với giọng văn chân thành, gần gũi, thể hiện tình cảm.",
      },
    ],
    funFact: "Bạn có biết? Trước khi có điện thoại và Internet, thư tay là phương tiện liên lạc chính giữa người thân ở xa nhau, có khi mất cả tháng mới đến nơi!",
  },

  "tieng-viet:3:ta-do-vat-quen-thuoc": {
    objectives: [
      "Quan sát và nêu được đặc điểm nổi bật của một đồ vật.",
      "Sắp xếp ý miêu tả theo trình tự hợp lý.",
      "Viết được đoạn văn tả đồ vật quen thuộc.",
    ],
    sections: [
      {
        heading: "1. Quan sát đồ vật",
        body: [
          "Trước khi viết, em cần quan sát kỹ đồ vật: hình dáng, màu sắc, kích thước, chất liệu, và công dụng của nó.",
        ],
      },
      {
        heading: "2. Trình tự miêu tả",
        body: [
          "Em có thể miêu tả theo trình tự: giới thiệu chung về đồ vật, tả chi tiết từng bộ phận, rồi nêu công dụng và tình cảm của em với đồ vật đó.",
        ],
      },
      {
        heading: "3. Sử dụng từ ngữ gợi tả",
        body: [
          "Dùng tính từ miêu tả sinh động (ví dụ: bóng loáng, mềm mại, chắc chắn) sẽ giúp bài văn hấp dẫn và cụ thể hơn.",
        ],
      },
    ],
    quiz: [
      {
        question: "Trước khi tả một đồ vật, em cần làm gì đầu tiên?",
        options: ["Viết ngay không cần suy nghĩ", "Quan sát kỹ đồ vật", "Hỏi bạn bè", "Chép văn mẫu"],
        correctIndex: 1,
        explanation: "Quan sát kỹ giúp em có đầy đủ chi tiết để miêu tả chính xác, sinh động.",
      },
      {
        question: "Đoạn văn tả đồ vật thường KHÔNG cần nội dung nào sau đây?",
        options: ["Hình dáng, màu sắc", "Công dụng của đồ vật", "Tình cảm của em với đồ vật", "Công thức toán học"],
        correctIndex: 3,
        explanation: "Công thức toán học không liên quan đến bài văn miêu tả đồ vật.",
      },
      {
        question: "Từ nào sau đây là từ ngữ gợi tả phù hợp khi miêu tả một chiếc cặp sách?",
        options: ["Nhanh nhẹn", "Chắc chắn", "Ồn ào", "Vui vẻ"],
        correctIndex: 1,
        explanation: "'Chắc chắn' là tính từ phù hợp để miêu tả đặc điểm của một chiếc cặp sách.",
      },
    ],
    funFact: "Bạn có biết? Cặp sách đầu tiên trên thế giới được thiết kế có quai đeo hai vai xuất hiện từ cuối thế kỷ 20, trước đó học sinh thường xách cặp bằng tay!",
  },

  "tieng-viet:3:so-sanh-nhan-hoa-trong-cau-van": {
    objectives: [
      "Nhận biết biện pháp so sánh trong câu văn.",
      "Nhận biết biện pháp nhân hoá trong câu văn.",
      "Bước đầu sử dụng so sánh, nhân hoá khi viết câu.",
    ],
    sections: [
      {
        heading: "1. Biện pháp so sánh",
        body: [
          "So sánh là đối chiếu hai sự vật, hiện tượng có nét giống nhau, thường dùng từ 'như', 'là', 'tựa như'. Ví dụ: 'Mặt trăng tròn như cái đĩa bạc.'",
        ],
      },
      {
        heading: "2. Biện pháp nhân hoá",
        body: [
          "Nhân hoá là gán cho sự vật, con vật những đặc điểm, hành động của con người. Ví dụ: 'Ông mặt trời thức dậy từ sớm.'",
        ],
      },
      {
        heading: "3. Tác dụng của so sánh, nhân hoá",
        body: [
          "Hai biện pháp này giúp câu văn trở nên sinh động, gợi hình, gợi cảm hơn, giúp người đọc dễ hình dung sự vật được miêu tả.",
        ],
      },
    ],
    quiz: [
      {
        question: "Câu nào sử dụng biện pháp so sánh?",
        options: [
          "Ông mặt trời cười.",
          "Dòng sông như dải lụa mềm.",
          "Chú mèo đang ngủ.",
          "Em đi học.",
        ],
        correctIndex: 1,
        explanation: "Câu dùng từ 'như' để so sánh dòng sông với dải lụa, là biện pháp so sánh.",
      },
      {
        question: "Câu nào sử dụng biện pháp nhân hoá?",
        options: [
          "Bông hoa đẹp như tranh vẽ.",
          "Chị gió thì thầm với hàng cây.",
          "Con đường dài 3 ki-lô-mét.",
          "Quyển sách có 100 trang.",
        ],
        correctIndex: 1,
        explanation: "'Chị gió thì thầm' gán hành động của con người cho gió, là biện pháp nhân hoá.",
      },
      {
        question: "Biện pháp so sánh, nhân hoá có tác dụng gì?",
        options: [
          "Làm câu văn khó hiểu hơn",
          "Làm câu văn sinh động, gợi hình hơn",
          "Không có tác dụng gì đặc biệt",
          "Chỉ dùng trong toán học",
        ],
        correctIndex: 1,
        explanation: "So sánh, nhân hoá giúp câu văn sinh động, gợi hình, gợi cảm hơn.",
      },
    ],
    funFact: "Bạn có biết? Biện pháp nhân hoá được sử dụng rất nhiều trong truyện cổ tích, khiến loài vật và đồ vật có thể biết nói, biết cười như con người!",
  },

  "tieng-viet:3:cau-khien": {
    objectives: [
      "Nhận biết câu khiến trong văn bản.",
      "Hiểu mục đích sử dụng của câu khiến.",
      "Đặt được câu khiến phù hợp với tình huống.",
    ],
    sections: [
      {
        heading: "1. Câu khiến là gì?",
        body: [
          "Câu khiến dùng để nêu yêu cầu, đề nghị, mong muốn người khác làm hoặc không làm điều gì đó. Ví dụ: 'Em hãy đóng cửa sổ lại!'",
        ],
      },
      {
        heading: "2. Dấu hiệu nhận biết câu khiến",
        body: [
          "Câu khiến thường có các từ như 'hãy', 'đừng', 'chớ', 'nên' và thường kết thúc bằng dấu chấm than hoặc dấu chấm.",
        ],
      },
      {
        heading: "3. Sử dụng câu khiến lịch sự",
        body: [
          "Khi nhờ vả hay đề nghị người khác, em nên thêm từ 'xin', 'làm ơn', 'vui lòng' để câu khiến trở nên lịch sự, nhã nhặn hơn.",
        ],
      },
    ],
    quiz: [
      {
        question: "Câu nào sau đây là câu khiến?",
        options: ["Trời hôm nay đẹp quá!", "Bạn đã ăn cơm chưa?", "Em hãy giữ trật tự.", "Hôm nay là thứ Hai."],
        correctIndex: 2,
        explanation: "'Em hãy giữ trật tự' nêu yêu cầu, là câu khiến, có từ 'hãy'.",
      },
      {
        question: "Từ nào thường xuất hiện trong câu khiến?",
        options: ["Ôi", "Hãy", "Chăng", "Ừ"],
        correctIndex: 1,
        explanation: "'Hãy' là từ thường dùng để tạo câu khiến, nêu yêu cầu hoặc đề nghị.",
      },
      {
        question: "Để câu khiến trở nên lịch sự hơn, em nên thêm từ nào?",
        options: ["Làm ơn", "Ngay lập tức", "Bắt buộc", "Không được phép"],
        correctIndex: 0,
        explanation: "'Làm ơn' giúp câu khiến trở nên nhã nhặn, lịch sự hơn khi nhờ vả người khác.",
      },
    ],
    funFact: "Bạn có biết? Trong giao tiếp hàng ngày, cách nói lịch sự khi nhờ vả (như thêm 'làm ơn', 'xin') được xem là một kỹ năng giao tiếp quan trọng ở mọi ngôn ngữ!",
  },

  "tieng-viet:3:doc-hieu-van-ban-thong-tin-don-gian": {
    objectives: [
      "Đọc hiểu một văn bản thông tin ngắn (thông báo, hướng dẫn).",
      "Tìm được thông tin chính trong văn bản.",
      "Vận dụng thông tin đọc được vào tình huống thực tế.",
    ],
    sections: [
      {
        heading: "1. Văn bản thông tin là gì?",
        body: [
          "Văn bản thông tin cung cấp kiến thức, thông báo về một sự việc, ví dụ: thông báo lịch nghỉ học, hướng dẫn sử dụng đồ dùng, bài giới thiệu về một loài vật.",
        ],
      },
      {
        heading: "2. Cách tìm thông tin chính",
        body: [
          "Em đọc kỹ tiêu đề và các câu quan trọng (thường ở đầu đoạn) để nắm được nội dung chính mà văn bản muốn truyền tải.",
        ],
      },
      {
        heading: "3. Vận dụng thông tin",
        body: [
          "Sau khi đọc, em cần biết cách sử dụng thông tin đó, ví dụ thực hiện đúng theo hướng dẫn hoặc nhớ đúng thời gian, địa điểm trong thông báo.",
        ],
      },
    ],
    quiz: [
      {
        question: "Văn bản thông tin khác truyện kể ở điểm nào?",
        options: [
          "Văn bản thông tin cung cấp kiến thức, sự việc có thật",
          "Văn bản thông tin luôn có nhân vật tưởng tượng",
          "Văn bản thông tin không có tiêu đề",
          "Không có sự khác biệt nào",
        ],
        correctIndex: 0,
        explanation: "Văn bản thông tin cung cấp kiến thức, sự việc thực tế, khác với truyện kể mang tính hư cấu.",
      },
      {
        question: "Để tìm thông tin chính trong văn bản, em nên chú ý điều gì?",
        options: ["Chỉ đọc câu cuối cùng", "Đọc tiêu đề và câu quan trọng đầu đoạn", "Bỏ qua tiêu đề", "Chỉ đếm số từ"],
        correctIndex: 1,
        explanation: "Tiêu đề và câu đầu đoạn thường chứa thông tin chính của văn bản.",
      },
      {
        question: "Ví dụ nào sau đây là một văn bản thông tin?",
        options: ["Truyện cổ tích Tấm Cám", "Thông báo lịch nghỉ học", "Bài thơ về mẹ", "Câu chuyện tưởng tượng"],
        correctIndex: 1,
        explanation: "Thông báo lịch nghỉ học cung cấp thông tin thực tế, là một văn bản thông tin.",
      },
    ],
    funFact: "Bạn có biết? Kỹ năng đọc hiểu văn bản thông tin rất quan trọng trong cuộc sống — em sẽ dùng kỹ năng này để đọc hướng dẫn sử dụng, biển báo, hay tin tức suốt đời!",
  },

  "tieng-viet:3:ta-cay-coi": {
    objectives: [
      "Quan sát và nêu được đặc điểm của một loài cây quen thuộc.",
      "Miêu tả cây theo trình tự hợp lý (thân, lá, hoa, quả).",
      "Viết được đoạn văn ngắn tả một loài cây.",
    ],
    sections: [
      {
        heading: "1. Quan sát cây",
        body: [
          "Em quan sát cây theo các bộ phận: gốc, thân, cành, lá, hoa, quả (nếu có), và cả sự thay đổi của cây theo mùa.",
        ],
      },
      {
        heading: "2. Trình tự miêu tả",
        body: [
          "Em có thể tả từ xa đến gần, từ dưới lên trên (từ gốc đến ngọn), hoặc theo trình tự thời gian (cây lúc còn nhỏ, khi trưởng thành, khi ra hoa kết quả).",
        ],
      },
      {
        heading: "3. Thể hiện tình cảm với cây",
        body: [
          "Bài văn hay không chỉ tả hình dáng mà còn thể hiện tình cảm, kỷ niệm của em gắn với loài cây đó, ví dụ cây phượng ở sân trường gắn với mùa hè.",
        ],
      },
    ],
    quiz: [
      {
        question: "Khi tả một cây, em nên quan sát những bộ phận nào?",
        options: ["Chỉ lá cây", "Gốc, thân, cành, lá, hoa, quả", "Chỉ hoa", "Không cần quan sát"],
        correctIndex: 1,
        explanation: "Quan sát đầy đủ các bộ phận giúp bài văn miêu tả chi tiết, sinh động.",
      },
      {
        question: "Cây nào thường gắn liền với hình ảnh mùa hè, sân trường ở Việt Nam?",
        options: ["Cây phượng", "Cây thông", "Cây bàng", "Cây dừa"],
        correctIndex: 0,
        explanation: "Cây phượng nở hoa đỏ rực vào mùa hè, thường gắn với kỷ niệm học trò.",
      },
      {
        question: "Bài văn tả cây hay cần có thêm yếu tố nào ngoài miêu tả hình dáng?",
        options: ["Công thức toán học", "Tình cảm, kỷ niệm của người viết", "Số liệu thống kê", "Không cần thêm gì"],
        correctIndex: 1,
        explanation: "Thể hiện tình cảm, kỷ niệm giúp bài văn trở nên chân thực và cảm động hơn.",
      },
    ],
    funFact: "Bạn có biết? Cây bàng thay lá theo mùa, có lúc lá chuyển sang màu đỏ rực rất đẹp trước khi rụng vào mùa đông!",
  },

  "tieng-viet:3:ta-con-vat": {
    objectives: [
      "Quan sát và nêu được đặc điểm ngoại hình, hoạt động của một con vật.",
      "Miêu tả con vật theo trình tự hợp lý.",
      "Viết được đoạn văn ngắn tả một con vật yêu thích.",
    ],
    sections: [
      {
        heading: "1. Quan sát con vật",
        body: [
          "Em quan sát hình dáng (màu lông, kích thước), các bộ phận nổi bật (mắt, tai, đuôi), và thói quen, hoạt động thường ngày của con vật.",
        ],
      },
      {
        heading: "2. Trình tự miêu tả",
        body: [
          "Em có thể tả bao quát trước (con vật to hay nhỏ, màu gì), sau đó tả chi tiết từng bộ phận, rồi tả hoạt động, thói quen của con vật.",
        ],
      },
      {
        heading: "3. Kỷ niệm với con vật",
        body: [
          "Nếu con vật đó là vật nuôi trong nhà, em có thể kể thêm một kỷ niệm đáng nhớ giữa em và con vật để bài văn thêm sinh động, gần gũi.",
        ],
      },
    ],
    quiz: [
      {
        question: "Khi tả một con vật, em nên chú ý điều gì đầu tiên?",
        options: ["Quan sát kỹ đặc điểm và hoạt động của nó", "Chép văn mẫu có sẵn", "Chỉ tả tên con vật", "Không cần quan sát"],
        correctIndex: 0,
        explanation: "Quan sát kỹ giúp em có chi tiết chính xác để miêu tả sinh động.",
      },
      {
        question: "Nội dung nào KHÔNG nên có trong bài văn tả con vật?",
        options: ["Hình dáng của con vật", "Hoạt động, thói quen", "Công thức tính diện tích", "Tình cảm với con vật"],
        correctIndex: 2,
        explanation: "Công thức tính diện tích thuộc môn Toán, không liên quan đến bài văn tả con vật.",
      },
      {
        question: "Câu văn nào miêu tả hoạt động của con vật?",
        options: ["Chú chó có bộ lông vàng óng.", "Chú chó đang vẫy đuôi mừng rỡ.", "Chú chó nặng khoảng 5kg.", "Chú chó tên là Lu."],
        correctIndex: 1,
        explanation: "'Vẫy đuôi mừng rỡ' là một hoạt động của con vật.",
      },
    ],
    funFact: "Bạn có biết? Chó có thể phân biệt được hơn 100 000 mùi khác nhau nhờ khứu giác cực kỳ nhạy bén!",
  },

  "tieng-viet:3:ke-lai-mot-cau-chuyen-da-doc-da-nghe": {
    objectives: [
      "Nhớ lại nội dung một câu chuyện đã đọc hoặc đã nghe.",
      "Kể lại câu chuyện theo đúng trình tự sự việc.",
      "Thể hiện giọng kể tự nhiên, rõ ràng.",
    ],
    sections: [
      {
        heading: "1. Ghi nhớ nội dung chính",
        body: [
          "Trước khi kể, em cần nhớ lại: câu chuyện có những nhân vật nào, sự việc chính xảy ra ra sao, kết thúc câu chuyện như thế nào.",
        ],
      },
      {
        heading: "2. Kể theo đúng trình tự",
        body: [
          "Em nên kể theo trình tự: mở đầu (giới thiệu nhân vật, hoàn cảnh), diễn biến (các sự việc chính xảy ra), và kết thúc câu chuyện.",
        ],
      },
      {
        heading: "3. Giọng kể tự nhiên",
        body: [
          "Khi kể, em nên dùng lời văn của mình, giọng điệu tự nhiên, có thể thêm cảm xúc để câu chuyện hấp dẫn hơn cho người nghe.",
        ],
      },
    ],
    quiz: [
      {
        question: "Khi kể lại một câu chuyện, em nên kể theo trình tự nào?",
        options: [
          "Kể lộn xộn, nghĩ gì kể đó",
          "Mở đầu, diễn biến, kết thúc",
          "Chỉ kể phần kết thúc",
          "Chỉ kể tên nhân vật",
        ],
        correctIndex: 1,
        explanation: "Kể theo trình tự mở đầu - diễn biến - kết thúc giúp người nghe dễ theo dõi câu chuyện.",
      },
      {
        question: "Khi kể chuyện, em nên sử dụng lời văn như thế nào?",
        options: ["Chép nguyên văn từng chữ trong sách", "Lời văn của mình, tự nhiên", "Không cần rõ ràng", "Chỉ dùng một câu duy nhất"],
        correctIndex: 1,
        explanation: "Kể bằng lời văn của mình giúp câu chuyện tự nhiên, thể hiện được cách hiểu của em.",
      },
      {
        question: "Điều gì giúp câu chuyện kể lại trở nên hấp dẫn hơn?",
        options: ["Giọng kể đều đều, không cảm xúc", "Thêm cảm xúc, giọng điệu phù hợp", "Kể càng nhanh càng tốt", "Bỏ bớt các chi tiết chính"],
        correctIndex: 1,
        explanation: "Thêm cảm xúc và giọng điệu phù hợp giúp câu chuyện sinh động, hấp dẫn người nghe hơn.",
      },
    ],
    funFact: "Bạn có biết? Trước khi có chữ viết, con người đã truyền lại lịch sử và văn hoá của mình qua hình thức kể chuyện truyền miệng suốt hàng ngàn năm!",
  },

  "tieng-viet:3:viet-doan-van-neu-tinh-cam-cam-xuc": {
    objectives: [
      "Xác định được đối tượng muốn bày tỏ tình cảm.",
      "Diễn đạt tình cảm, cảm xúc chân thật bằng lời văn.",
      "Viết được đoạn văn ngắn nêu tình cảm với người thân, sự vật quen thuộc.",
    ],
    sections: [
      {
        heading: "1. Xác định đối tượng",
        body: [
          "Em có thể viết về tình cảm với ông bà, cha mẹ, thầy cô, bạn bè, hoặc với một đồ vật, con vật, cảnh vật quen thuộc và gắn bó với mình.",
        ],
      },
      {
        heading: "2. Diễn đạt cảm xúc chân thật",
        body: [
          "Em nên viết những điều mình thực sự cảm nhận, có thể kể một kỷ niệm cụ thể để làm rõ tình cảm đó, tránh viết chung chung, sáo rỗng.",
        ],
      },
      {
        heading: "3. Cấu trúc đoạn văn",
        body: [
          "Đoạn văn nên có câu mở đầu giới thiệu đối tượng, các câu tiếp theo nêu lý do và biểu hiện tình cảm, câu kết khẳng định lại tình cảm đó.",
        ],
      },
    ],
    quiz: [
      {
        question: "Khi viết đoạn văn nêu tình cảm, em nên viết như thế nào?",
        options: ["Chép văn mẫu có sẵn", "Viết chân thật theo cảm nhận của mình", "Viết càng dài càng tốt, không cần đúng cảm xúc", "Không cần nêu lý do"],
        correctIndex: 1,
        explanation: "Viết chân thật theo cảm nhận thật sự giúp đoạn văn cảm động và thuyết phục hơn.",
      },
      {
        question: "Đoạn văn nêu tình cảm nên có phần nào ở cuối đoạn?",
        options: ["Một câu hỏi bất kỳ", "Câu khẳng định lại tình cảm", "Một phép tính toán học", "Không cần câu kết"],
        correctIndex: 1,
        explanation: "Câu kết khẳng định lại tình cảm giúp đoạn văn có kết cấu trọn vẹn, rõ ràng.",
      },
      {
        question: "Cách nào giúp đoạn văn nêu tình cảm trở nên cụ thể, sinh động hơn?",
        options: ["Kể một kỷ niệm cụ thể", "Chỉ nói chung chung 'em rất yêu quý'", "Không cần ví dụ", "Chỉ liệt kê tên đối tượng"],
        correctIndex: 0,
        explanation: "Kể một kỷ niệm cụ thể giúp minh hoạ rõ ràng cho tình cảm mà em muốn diễn đạt.",
      },
    ],
    funFact: "Bạn có biết? Viết nhật ký bày tỏ cảm xúc là một thói quen được nhiều người nổi tiếng trên thế giới duy trì để ghi lại kỷ niệm và rèn luyện khả năng diễn đạt!",
  },

  "tieng-viet:3:mo-rong-von-tu-theo-chu-diem-que-huong": {
    objectives: [
      "Mở rộng vốn từ theo chủ điểm quê hương, đất nước.",
      "Hiểu nghĩa và biết cách sử dụng các từ ngữ mới học.",
      "Đặt câu với từ ngữ thuộc chủ điểm quê hương.",
    ],
    sections: [
      {
        heading: "1. Từ ngữ về quê hương",
        body: [
          "Một số từ ngữ về quê hương: làng quê, cánh đồng, luỹ tre, dòng sông, mái đình, con đò... đều gợi lên hình ảnh thân thuộc của làng quê Việt Nam.",
        ],
      },
      {
        heading: "2. Từ ngữ về đất nước",
        body: [
          "Các từ như: Tổ quốc, non sông, đất nước, dân tộc, truyền thống... thể hiện tình yêu và niềm tự hào về đất nước Việt Nam.",
        ],
      },
      {
        heading: "3. Vận dụng vào câu văn",
        body: [
          "Em hãy thử đặt câu với một số từ ngữ vừa học, ví dụ: 'Quê hương em có cánh đồng lúa xanh mướt trải dài đến tận chân trời.'",
        ],
      },
    ],
    quiz: [
      {
        question: "Từ nào sau đây thuộc chủ điểm quê hương?",
        options: ["Máy tính", "Luỹ tre", "Điện thoại", "Ô tô"],
        correctIndex: 1,
        explanation: "'Luỹ tre' là hình ảnh quen thuộc của làng quê Việt Nam.",
      },
      {
        question: "Từ nào thể hiện tình cảm với đất nước?",
        options: ["Tổ quốc", "Bàn ghế", "Con số", "Đồ chơi"],
        correctIndex: 0,
        explanation: "'Tổ quốc' là từ thể hiện tình cảm, niềm tự hào với đất nước.",
      },
      {
        question: "Câu nào sử dụng đúng từ ngữ chủ điểm quê hương?",
        options: [
          "Quê hương em có nhiều toà nhà cao tầng hiện đại.",
          "Quê hương em có cánh đồng lúa và dòng sông hiền hoà.",
          "Quê hương em có siêu thị lớn.",
          "Quê hương em có nhiều máy tính.",
        ],
        correctIndex: 1,
        explanation: "Câu này sử dụng hình ảnh cánh đồng, dòng sông — gợi đúng nét đẹp làng quê truyền thống.",
      },
    ],
    funFact: "Bạn có biết? Luỹ tre làng không chỉ là hình ảnh đẹp mà xưa kia còn được dùng để bảo vệ làng khỏi thú dữ và kẻ xâm nhập!",
  },

  "tieng-viet:3:on-tap-cuoi-nam-hoc": {
    objectives: [
      "Hệ thống lại kiến thức về từ loại, kiểu câu đã học.",
      "Ôn luyện kỹ năng đọc hiểu và viết đoạn văn.",
      "Tự tin chuẩn bị cho chương trình Tiếng Việt lớp 4.",
    ],
    sections: [
      {
        heading: "1. Ôn tập về từ và câu",
        body: [
          "Trong năm học, em đã học về danh từ, động từ, tính từ; các kiểu câu kể, câu hỏi, câu cảm, câu khiến; và biện pháp so sánh, nhân hoá.",
        ],
      },
      {
        heading: "2. Ôn tập về đọc hiểu",
        body: [
          "Em đã luyện đọc hiểu truyện, thơ thiếu nhi và văn bản thông tin đơn giản — hãy ôn lại cách tìm nội dung chính và rút ra bài học từ văn bản.",
        ],
      },
      {
        heading: "3. Ôn tập về tập làm văn",
        body: [
          "Em đã học viết thư, tả đồ vật, tả cây cối, tả con vật, và viết đoạn văn nêu cảm xúc — hãy ôn luyện lại các dạng bài này trước khi lên lớp 4.",
        ],
      },
    ],
    quiz: [
      {
        question: "Loại từ nào chỉ hoạt động, trạng thái của sự vật?",
        options: ["Danh từ", "Động từ", "Tính từ", "Số từ"],
        correctIndex: 1,
        explanation: "Động từ là từ chỉ hoạt động, trạng thái.",
      },
      {
        question: "Kiểu câu nào dùng để bộc lộ cảm xúc?",
        options: ["Câu kể", "Câu hỏi", "Câu cảm", "Câu khiến"],
        correctIndex: 2,
        explanation: "Câu cảm dùng để bộc lộ cảm xúc, thường kết thúc bằng dấu chấm than.",
      },
      {
        question: "Dạng bài tập làm văn nào em CHƯA học trong chương trình lớp 3?",
        options: ["Tả đồ vật", "Tả con vật", "Viết bài văn nghị luận", "Viết thư cho người thân"],
        correctIndex: 2,
        explanation: "Viết bài văn nghị luận là kiến thức nâng cao, được học ở các lớp trên.",
      },
    ],
    funFact: "Bạn có biết? Việc đọc sách thường xuyên giúp vốn từ vựng của em tăng lên đáng kể, đồng thời cải thiện khả năng viết văn hay hơn!",
  },

  // ═══════════════════════════════ TIẾNG ANH — LỚP 3 ═══════════════════════════════
  "tieng-anh:3:my-school": {
    objectives: [
      "Nói được tên một số môn học bằng tiếng Anh.",
      "Giới thiệu về trường học của mình bằng câu đơn giản.",
      "Hỏi và trả lời về môn học yêu thích.",
    ],
    sections: [
      {
        heading: "1. School Subjects",
        body: [
          "Math (Toán), English (Tiếng Anh), Art (Mỹ thuật), Music (Âm nhạc), PE (Thể dục) là những môn học quen thuộc ở trường.",
        ],
      },
      {
        heading: "2. Talking About School",
        body: [
          "'This is my school.' (Đây là trường của em.) 'I study Math and English.' (Em học Toán và Tiếng Anh.)",
        ],
      },
      {
        heading: "3. My Favourite Subject",
        body: [
          "Để hỏi môn học yêu thích: 'What is your favourite subject?' — Trả lời: 'My favourite subject is Art.' (Môn học yêu thích của em là Mỹ thuật.)",
        ],
      },
    ],
    quiz: [
      {
        question: "'Toán' trong tiếng Anh là gì?",
        options: ["Art", "Math", "Music", "English"],
        correctIndex: 1,
        explanation: "'Math' là từ tiếng Anh chỉ môn Toán.",
      },
      {
        question: "Câu 'What is your favourite subject?' dùng để hỏi điều gì?",
        options: ["Hỏi tên", "Hỏi tuổi", "Hỏi môn học yêu thích", "Hỏi địa chỉ"],
        correctIndex: 2,
        explanation: "Câu này dùng để hỏi về môn học yêu thích của người khác.",
      },
      {
        question: "'PE' là viết tắt của môn học nào?",
        options: ["Physical Education (Thể dục)", "Painting Education", "Private English", "Public Event"],
        correctIndex: 0,
        explanation: "'PE' là viết tắt của 'Physical Education', nghĩa là môn Thể dục.",
      },
    ],
    funFact: "Fun fact: Ở nhiều nước, học sinh được tự chọn thêm một số môn học ngoài các môn bắt buộc ngay từ bậc tiểu học!",
  },

  "tieng-anh:3:this-is-my-house": {
    objectives: [
      "Giới thiệu về ngôi nhà của mình bằng câu đơn giản.",
      "Nói được tên các phòng trong nhà.",
      "Sử dụng cấu trúc 'There is/There are' cơ bản.",
    ],
    sections: [
      {
        heading: "1. Rooms in the House",
        body: [
          "Living room (phòng khách), bedroom (phòng ngủ), kitchen (nhà bếp), bathroom (phòng tắm) là các phòng phổ biến trong nhà.",
        ],
      },
      {
        heading: "2. Introducing Your House",
        body: [
          "'This is my house.' (Đây là nhà của em.) 'My house has three bedrooms.' (Nhà em có ba phòng ngủ.)",
        ],
      },
      {
        heading: "3. There is / There are",
        body: [
          "'There is a sofa in the living room.' (Có một chiếc ghế sofa trong phòng khách.) Dùng 'There is' với danh từ số ít, 'There are' với danh từ số nhiều.",
        ],
      },
    ],
    quiz: [
      {
        question: "'Phòng bếp' trong tiếng Anh là gì?",
        options: ["Bedroom", "Kitchen", "Bathroom", "Living room"],
        correctIndex: 1,
        explanation: "'Kitchen' nghĩa là nhà bếp.",
      },
      {
        question: "Câu nào đúng ngữ pháp?",
        options: ["There is two beds.", "There are two beds.", "There am two beds.", "There be two beds."],
        correctIndex: 1,
        explanation: "'Beds' là số nhiều nên dùng 'There are'.",
      },
      {
        question: "'Phòng khách' trong tiếng Anh là gì?",
        options: ["Living room", "Bedroom", "Bathroom", "Garden"],
        correctIndex: 0,
        explanation: "'Living room' nghĩa là phòng khách.",
      },
    ],
    funFact: "Fun fact: Ở một số nước phương Tây, phòng bếp thường được xem là trung tâm sinh hoạt của cả gia đình!",
  },

  "tieng-anh:3:in-my-room": {
    objectives: [
      "Học từ vựng về đồ đạc trong phòng.",
      "Miêu tả vị trí đồ vật bằng giới từ đơn giản.",
      "Nói được câu đơn giản về phòng của mình.",
    ],
    sections: [
      {
        heading: "1. Furniture Vocabulary",
        body: [
          "Bed (giường), desk (bàn học), chair (ghế), wardrobe (tủ quần áo), lamp (đèn) là những đồ vật quen thuộc trong phòng ngủ.",
        ],
      },
      {
        heading: "2. Prepositions of Place",
        body: [
          "'On' (trên), 'under' (dưới), 'next to' (bên cạnh) dùng để chỉ vị trí. Ví dụ: 'The lamp is on the desk.' (Chiếc đèn ở trên bàn.)",
        ],
      },
      {
        heading: "3. Describing Your Room",
        body: [
          "'My bed is next to the window.' (Giường của em ở bên cạnh cửa sổ.) Em hãy thử miêu tả phòng của mình bằng vài câu đơn giản.",
        ],
      },
    ],
    quiz: [
      {
        question: "'Tủ quần áo' trong tiếng Anh là gì?",
        options: ["Desk", "Wardrobe", "Chair", "Lamp"],
        correctIndex: 1,
        explanation: "'Wardrobe' nghĩa là tủ quần áo.",
      },
      {
        question: "Từ nào nghĩa là 'bên cạnh'?",
        options: ["On", "Under", "Next to", "In"],
        correctIndex: 2,
        explanation: "'Next to' nghĩa là bên cạnh.",
      },
      {
        question: "Câu 'The book is under the bed.' nghĩa là gì?",
        options: ["Quyển sách ở trên giường", "Quyển sách ở dưới giường", "Quyển sách bên cạnh giường", "Quyển sách trong tủ"],
        correctIndex: 1,
        explanation: "'Under' nghĩa là 'ở dưới', nên câu này nghĩa là quyển sách ở dưới giường.",
      },
    ],
    funFact: "Fun fact: Từ 'desk' (bàn học) và 'disc' (đĩa) đều bắt nguồn từ một từ gốc Latinh có nghĩa là 'cái đĩa phẳng'!",
  },

  "tieng-anh:3:my-hobbies": {
    objectives: [
      "Nói được tên một số sở thích bằng tiếng Anh.",
      "Hỏi và trả lời về sở thích của bản thân, bạn bè.",
      "Sử dụng cấu trúc 'I like...' để diễn đạt sở thích.",
    ],
    sections: [
      {
        heading: "1. Hobby Vocabulary",
        body: [
          "Reading (đọc sách), drawing (vẽ tranh), singing (hát), swimming (bơi lội), playing football (chơi bóng đá) là một số sở thích phổ biến.",
        ],
      },
      {
        heading: "2. Expressing Likes",
        body: [
          "'I like reading books.' (Em thích đọc sách.) 'She likes swimming.' (Bạn ấy thích bơi lội.)",
        ],
      },
      {
        heading: "3. Asking About Hobbies",
        body: [
          "'What do you like doing?' (Bạn thích làm gì?) — Trả lời: 'I like drawing.' (Em thích vẽ tranh.)",
        ],
      },
    ],
    quiz: [
      {
        question: "'Đọc sách' trong tiếng Anh là gì?",
        options: ["Singing", "Reading", "Swimming", "Drawing"],
        correctIndex: 1,
        explanation: "'Reading' nghĩa là đọc sách.",
      },
      {
        question: "Câu nào đúng khi nói về sở thích?",
        options: ["I like read books.", "I like reading books.", "I likes reading books.", "I liking reading books."],
        correctIndex: 1,
        explanation: "Sau 'like' thường dùng động từ thêm '-ing': 'reading'.",
      },
      {
        question: "'What do you like doing?' dùng để hỏi về điều gì?",
        options: ["Tên", "Tuổi", "Sở thích", "Gia đình"],
        correctIndex: 2,
        explanation: "Câu này dùng để hỏi về sở thích của người khác.",
      },
    ],
    funFact: "Fun fact: Có những sở thích độc đáo trên thế giới như sưu tầm tem, sưu tầm vỏ ốc, hay chơi cờ vua tốc độ!",
  },

  "tieng-anh:3:weather-and-seasons": {
    objectives: [
      "Học từ vựng về thời tiết bằng tiếng Anh.",
      "Học tên bốn mùa trong năm.",
      "Nói được câu đơn giản miêu tả thời tiết.",
    ],
    sections: [
      {
        heading: "1. Weather Vocabulary",
        body: [
          "Sunny (nắng), rainy (mưa), windy (có gió), cloudy (nhiều mây), cold (lạnh), hot (nóng) là các từ miêu tả thời tiết thường gặp.",
        ],
      },
      {
        heading: "2. Four Seasons",
        body: [
          "Spring (mùa xuân), summer (mùa hè), autumn (mùa thu), winter (mùa đông) là bốn mùa trong năm.",
        ],
      },
      {
        heading: "3. Talking About Weather",
        body: [
          "'It is sunny today.' (Hôm nay trời nắng.) 'It is cold in winter.' (Trời lạnh vào mùa đông.)",
        ],
      },
    ],
    quiz: [
      {
        question: "'Trời mưa' trong tiếng Anh là gì?",
        options: ["Sunny", "Rainy", "Windy", "Cloudy"],
        correctIndex: 1,
        explanation: "'Rainy' nghĩa là trời mưa.",
      },
      {
        question: "Mùa nào thường lạnh nhất trong năm?",
        options: ["Spring", "Summer", "Autumn", "Winter"],
        correctIndex: 3,
        explanation: "'Winter' (mùa đông) là mùa lạnh nhất trong năm.",
      },
      {
        question: "Câu 'It is sunny today.' nghĩa là gì?",
        options: ["Hôm nay trời mưa", "Hôm nay trời nắng", "Hôm nay trời lạnh", "Hôm nay có gió"],
        correctIndex: 1,
        explanation: "'Sunny' nghĩa là nắng, nên câu này nghĩa là hôm nay trời nắng.",
      },
    ],
    funFact: "Fun fact: Ở một số vùng gần xích đạo, thời tiết gần như không thay đổi nhiều giữa các mùa trong năm!",
  },

  "tieng-anh:3:my-friends": {
    objectives: [
      "Giới thiệu về bạn bè bằng câu đơn giản.",
      "Miêu tả ngoại hình, tính cách bạn bè bằng từ vựng cơ bản.",
      "Hỏi và trả lời về bạn thân của mình.",
    ],
    sections: [
      {
        heading: "1. Introducing Friends",
        body: [
          "'This is my friend, Nam.' (Đây là bạn của em, tên Nam.) 'He is nine years old.' (Bạn ấy 9 tuổi.)",
        ],
      },
      {
        heading: "2. Describing Friends",
        body: [
          "Tính từ miêu tả: friendly (thân thiện), funny (hài hước), kind (tốt bụng), tall (cao), short (thấp).",
        ],
      },
      {
        heading: "3. Talking About Best Friend",
        body: [
          "'My best friend is Mai. She is very kind.' (Bạn thân nhất của em là Mai. Bạn ấy rất tốt bụng.)",
        ],
      },
    ],
    quiz: [
      {
        question: "'Thân thiện' trong tiếng Anh là gì?",
        options: ["Funny", "Friendly", "Tall", "Short"],
        correctIndex: 1,
        explanation: "'Friendly' nghĩa là thân thiện.",
      },
      {
        question: "Câu 'He is very kind.' nghĩa là gì?",
        options: ["Bạn ấy rất cao", "Bạn ấy rất tốt bụng", "Bạn ấy rất hài hước", "Bạn ấy rất thấp"],
        correctIndex: 1,
        explanation: "'Kind' nghĩa là tốt bụng.",
      },
      {
        question: "Để giới thiệu bạn của mình, em dùng câu nào?",
        options: ["This is my friend.", "This am my friend.", "This are my friend.", "This be my friend."],
        correctIndex: 0,
        explanation: "'This is my friend.' là cách giới thiệu bạn đúng ngữ pháp.",
      },
    ],
    funFact: "Fun fact: Nghiên cứu cho thấy có bạn thân giúp trẻ em cảm thấy vui vẻ và tự tin hơn trong học tập!",
  },

  "tieng-anh:3:numbers-and-time": {
    objectives: [
      "Đếm số từ 1 đến 100 bằng tiếng Anh.",
      "Nói được giờ đơn giản bằng tiếng Anh.",
      "Hỏi và trả lời về thời gian.",
    ],
    sections: [
      {
        heading: "1. Numbers to 100",
        body: [
          "Sau khi học số 1-20, em học thêm các số tròn chục: thirty (30), forty (40), fifty (50)... đến one hundred (100).",
        ],
      },
      {
        heading: "2. Telling the Time",
        body: [
          "'It's 7 o'clock.' (Bây giờ là 7 giờ.) 'It's half past 7.' (Bây giờ là 7 giờ rưỡi.)",
        ],
      },
      {
        heading: "3. Asking the Time",
        body: [
          "'What time is it?' (Mấy giờ rồi?) — Trả lời: 'It's 8 o'clock.' (8 giờ rồi.)",
        ],
      },
    ],
    quiz: [
      {
        question: "Số 50 trong tiếng Anh đọc là gì?",
        options: ["Fifteen", "Fifty", "Five", "Fifth"],
        correctIndex: 1,
        explanation: "'Fifty' nghĩa là 50.",
      },
      {
        question: "Câu 'What time is it?' dùng để hỏi điều gì?",
        options: ["Hỏi tên", "Hỏi giờ", "Hỏi tuổi", "Hỏi địa chỉ"],
        correctIndex: 1,
        explanation: "Câu này dùng để hỏi giờ hiện tại.",
      },
      {
        question: "'It's half past 7.' nghĩa là mấy giờ?",
        options: ["7 giờ", "7 giờ rưỡi", "7 giờ kém 15", "8 giờ"],
        correctIndex: 1,
        explanation: "'Half past 7' nghĩa là 7 giờ 30 phút (7 giờ rưỡi).",
      },
    ],
    funFact: "Fun fact: Ở Anh, một số người vẫn dùng cách nói giờ kiểu cũ như 'quarter to' (kém 15 phút) thay vì chỉ nói số!",
  },

  "tieng-anh:3:my-daily-activities": {
    objectives: [
      "Nói được các hoạt động hàng ngày bằng tiếng Anh.",
      "Sử dụng thì hiện tại đơn để nói về thói quen.",
      "Sắp xếp các hoạt động theo trình tự thời gian trong ngày.",
    ],
    sections: [
      {
        heading: "1. Daily Activities Vocabulary",
        body: [
          "Wake up (thức dậy), brush teeth (đánh răng), have breakfast (ăn sáng), go to school (đi học), do homework (làm bài tập), go to bed (đi ngủ).",
        ],
      },
      {
        heading: "2. Present Simple Tense",
        body: [
          "'I wake up at 6 o'clock.' (Em thức dậy lúc 6 giờ.) Với chủ ngữ 'he/she', động từ thêm 's': 'She wakes up at 6.'",
        ],
      },
      {
        heading: "3. Describing Your Day",
        body: [
          "Em hãy thử kể lại một ngày của mình bằng tiếng Anh, sắp xếp các hoạt động theo đúng trình tự thời gian.",
        ],
      },
    ],
    quiz: [
      {
        question: "'Đánh răng' trong tiếng Anh là gì?",
        options: ["Wake up", "Brush teeth", "Go to bed", "Have breakfast"],
        correctIndex: 1,
        explanation: "'Brush teeth' nghĩa là đánh răng.",
      },
      {
        question: "Câu nào đúng ngữ pháp?",
        options: ["She wake up at 6.", "She wakes up at 6.", "She waking up at 6.", "She to wake up at 6."],
        correctIndex: 1,
        explanation: "Với chủ ngữ 'she', động từ thêm 's': 'wakes up'.",
      },
      {
        question: "Hoạt động nào thường diễn ra đầu tiên trong ngày?",
        options: ["Go to bed", "Wake up", "Do homework", "Have dinner"],
        correctIndex: 1,
        explanation: "'Wake up' (thức dậy) thường là hoạt động đầu tiên trong ngày.",
      },
    ],
    funFact: "Fun fact: Các nhà khoa học khuyên trẻ em nên ngủ đủ 9-11 tiếng mỗi đêm để cơ thể và trí não phát triển tốt nhất!",
  },

  "tieng-anh:3:at-the-zoo": {
    objectives: [
      "Học thêm từ vựng về các con vật ở sở thú.",
      "Sử dụng câu miêu tả đơn giản về con vật.",
      "Nói được cảm nhận khi đi thăm sở thú.",
    ],
    sections: [
      {
        heading: "1. Zoo Animals",
        body: [
          "Elephant (voi), lion (sư tử), giraffe (hươu cao cổ), monkey (khỉ), tiger (hổ) là những con vật thường thấy ở sở thú.",
        ],
      },
      {
        heading: "2. Describing Animals",
        body: [
          "'The elephant is big.' (Con voi to lớn.) 'The monkey is funny.' (Con khỉ rất buồn cười.)",
        ],
      },
      {
        heading: "3. At the Zoo",
        body: [
          "'I went to the zoo last week. I saw a lion.' (Em đã đi sở thú tuần trước. Em đã thấy một con sư tử.)",
        ],
      },
    ],
    quiz: [
      {
        question: "'Hươu cao cổ' trong tiếng Anh là gì?",
        options: ["Elephant", "Giraffe", "Monkey", "Tiger"],
        correctIndex: 1,
        explanation: "'Giraffe' nghĩa là hươu cao cổ.",
      },
      {
        question: "Câu 'The elephant is big.' nghĩa là gì?",
        options: ["Con voi nhỏ bé", "Con voi to lớn", "Con voi nhanh nhẹn", "Con voi buồn cười"],
        correctIndex: 1,
        explanation: "'Big' nghĩa là to lớn.",
      },
      {
        question: "Con vật nào được mệnh danh là 'chúa sơn lâm'?",
        options: ["Monkey", "Giraffe", "Lion/Tiger", "Elephant"],
        correctIndex: 2,
        explanation: "Sư tử (Lion) và hổ (Tiger) thường được gọi là chúa sơn lâm.",
      },
    ],
    funFact: "Fun fact: Hươu cao cổ có chiếc lưỡi dài tới 45-50cm, giúp chúng dễ dàng ăn lá cây trên cao!",
  },

  "tieng-anh:3:my-favourite-food": {
    objectives: [
      "Học từ vựng về các món ăn quen thuộc.",
      "Diễn đạt món ăn yêu thích bằng câu đơn giản.",
      "Hỏi và trả lời về sở thích ăn uống.",
    ],
    sections: [
      {
        heading: "1. Food Vocabulary",
        body: [
          "Rice (cơm), noodles (mì), chicken (thịt gà), fish (cá), vegetables (rau) là những món ăn quen thuộc hàng ngày.",
        ],
      },
      {
        heading: "2. Talking About Favourite Food",
        body: [
          "'My favourite food is chicken.' (Món ăn yêu thích của em là thịt gà.) 'I don't like vegetables.' (Em không thích rau.)",
        ],
      },
      {
        heading: "3. Asking About Food",
        body: [
          "'What is your favourite food?' (Món ăn yêu thích của bạn là gì?) — Trả lời: 'I like noodles.' (Em thích mì.)",
        ],
      },
    ],
    quiz: [
      {
        question: "'Thịt gà' trong tiếng Anh là gì?",
        options: ["Fish", "Chicken", "Rice", "Noodles"],
        correctIndex: 1,
        explanation: "'Chicken' nghĩa là thịt gà.",
      },
      {
        question: "Câu 'I don't like vegetables.' nghĩa là gì?",
        options: ["Em thích rau", "Em không thích rau", "Em thích cơm", "Em không thích cá"],
        correctIndex: 1,
        explanation: "'Don't like' nghĩa là không thích.",
      },
      {
        question: "Câu nào dùng để hỏi về món ăn yêu thích?",
        options: ["What is your name?", "What is your favourite food?", "How old are you?", "Where do you live?"],
        correctIndex: 1,
        explanation: "Câu này dùng để hỏi về món ăn yêu thích của người khác.",
      },
    ],
    funFact: "Fun fact: Phở, một món ăn nổi tiếng của Việt Nam, đã trở thành món ăn được yêu thích ở rất nhiều quốc gia trên thế giới!",
  },

  "tieng-anh:3:in-the-classroom": {
    objectives: [
      "Học từ vựng và mẫu câu giao tiếp trong lớp học.",
      "Sử dụng câu yêu cầu, xin phép đơn giản.",
      "Hiểu và phản hồi các chỉ dẫn cơ bản của giáo viên.",
    ],
    sections: [
      {
        heading: "1. Classroom Language",
        body: [
          "'Stand up' (đứng lên), 'sit down' (ngồi xuống), 'open your book' (mở sách ra), 'listen carefully' (nghe kỹ) là các chỉ dẫn thường nghe trong lớp.",
        ],
      },
      {
        heading: "2. Asking Permission",
        body: [
          "'May I come in?' (Em vào lớp được không ạ?) 'Can I go to the toilet?' (Em đi vệ sinh được không ạ?)",
        ],
      },
      {
        heading: "3. Responding to Instructions",
        body: [
          "Khi nghe giáo viên nói 'Open your book', em nên thực hiện ngay hành động mở sách, đồng thời có thể trả lời 'Yes, teacher.'",
        ],
      },
    ],
    quiz: [
      {
        question: "'Ngồi xuống' trong tiếng Anh là gì?",
        options: ["Stand up", "Sit down", "Open your book", "Listen carefully"],
        correctIndex: 1,
        explanation: "'Sit down' nghĩa là ngồi xuống.",
      },
      {
        question: "Câu 'May I come in?' dùng để làm gì?",
        options: ["Xin phép vào lớp", "Hỏi giờ", "Chào tạm biệt", "Giới thiệu tên"],
        correctIndex: 0,
        explanation: "Câu này dùng để xin phép vào lớp một cách lịch sự.",
      },
      {
        question: "'Nghe kỹ' trong tiếng Anh là gì?",
        options: ["Look carefully", "Listen carefully", "Write carefully", "Read carefully"],
        correctIndex: 1,
        explanation: "'Listen carefully' nghĩa là nghe kỹ.",
      },
    ],
    funFact: "Fun fact: Ở nhiều nước, học sinh thường giơ tay và nói 'Excuse me' trước khi hỏi giáo viên một câu hỏi trong lớp!",
  },

  "tieng-anh:3:places-in-my-neighbourhood": {
    objectives: [
      "Học từ vựng về các địa điểm quen thuộc quanh nhà.",
      "Nói được câu đơn giản về nơi mình sống.",
      "Sử dụng giới từ chỉ vị trí cơ bản.",
    ],
    sections: [
      {
        heading: "1. Neighbourhood Places",
        body: [
          "Park (công viên), market (chợ), supermarket (siêu thị), hospital (bệnh viện), post office (bưu điện) là các địa điểm quen thuộc trong khu phố.",
        ],
      },
      {
        heading: "2. Describing Your Neighbourhood",
        body: [
          "'There is a park near my house.' (Có một công viên gần nhà em.) 'The market is next to the school.' (Chợ ở bên cạnh trường học.)",
        ],
      },
      {
        heading: "3. Giving Simple Directions",
        body: [
          "'Go straight.' (Đi thẳng.) 'Turn left.' (Rẽ trái.) 'Turn right.' (Rẽ phải.) là các cụm từ cơ bản để chỉ đường.",
        ],
      },
    ],
    quiz: [
      {
        question: "'Công viên' trong tiếng Anh là gì?",
        options: ["Market", "Park", "Hospital", "Post office"],
        correctIndex: 1,
        explanation: "'Park' nghĩa là công viên.",
      },
      {
        question: "'Turn left' nghĩa là gì?",
        options: ["Đi thẳng", "Rẽ trái", "Rẽ phải", "Dừng lại"],
        correctIndex: 1,
        explanation: "'Turn left' nghĩa là rẽ trái.",
      },
      {
        question: "Câu 'The market is next to the school.' nghĩa là gì?",
        options: ["Chợ ở xa trường học", "Chợ ở bên cạnh trường học", "Chợ ở trong trường học", "Không có chợ gần trường"],
        correctIndex: 1,
        explanation: "'Next to' nghĩa là bên cạnh.",
      },
    ],
    funFact: "Fun fact: Biển báo giao thông ở nhiều nước dùng hình ảnh thay vì chữ viết để mọi người dù không biết ngôn ngữ đó vẫn hiểu được!",
  },

  "tieng-anh:3:my-birthday": {
    objectives: [
      "Nói được ngày tháng sinh nhật bằng tiếng Anh.",
      "Học từ vựng liên quan đến tiệc sinh nhật.",
      "Sử dụng mẫu câu chúc mừng sinh nhật.",
    ],
    sections: [
      {
        heading: "1. Months of the Year",
        body: [
          "January (tháng 1), February (tháng 2)... đến December (tháng 12) là 12 tháng trong năm bằng tiếng Anh.",
        ],
      },
      {
        heading: "2. Talking About Birthday",
        body: [
          "'My birthday is in May.' (Sinh nhật em vào tháng 5.) 'I am ten years old.' (Em 10 tuổi.)",
        ],
      },
      {
        heading: "3. Birthday Party Vocabulary",
        body: [
          "Cake (bánh kem), candles (nến), presents (quà tặng), balloons (bóng bay) là những từ thường gặp trong tiệc sinh nhật. 'Happy birthday!' là lời chúc mừng sinh nhật.",
        ],
      },
    ],
    quiz: [
      {
        question: "'Bánh kem' trong tiếng Anh là gì?",
        options: ["Candles", "Cake", "Presents", "Balloons"],
        correctIndex: 1,
        explanation: "'Cake' nghĩa là bánh kem.",
      },
      {
        question: "Câu chúc mừng sinh nhật bằng tiếng Anh là gì?",
        options: ["Good morning!", "Happy birthday!", "See you later!", "Thank you!"],
        correctIndex: 1,
        explanation: "'Happy birthday!' là lời chúc mừng sinh nhật.",
      },
      {
        question: "'My birthday is in May.' nghĩa là gì?",
        options: ["Sinh nhật em vào tháng 5", "Sinh nhật em vào tháng 3", "Em không có sinh nhật", "Sinh nhật em hôm nay"],
        correctIndex: 0,
        explanation: "'May' nghĩa là tháng 5.",
      },
    ],
    funFact: "Fun fact: Phong tục thổi nến sinh nhật và ước một điều ước bắt nguồn từ nước Đức cách đây hàng trăm năm!",
  },

  "tieng-anh:3:review-my-world": {
    objectives: [
      "Ôn tập tổng hợp từ vựng đã học trong năm.",
      "Ôn luyện các mẫu câu giao tiếp cơ bản.",
      "Tự tin sử dụng tiếng Anh trong tình huống quen thuộc.",
    ],
    sections: [
      {
        heading: "1. Ôn tập từ vựng",
        body: [
          "Trong năm học, em đã học từ vựng về trường học, ngôi nhà, sở thích, thời tiết, bạn bè, thời gian, động vật, món ăn, và khu phố xung quanh.",
        ],
      },
      {
        heading: "2. Ôn tập mẫu câu",
        body: [
          "Em đã học cách giới thiệu bản thân, miêu tả sự vật, hỏi đáp về sở thích, thời gian, và đưa ra chỉ dẫn đơn giản.",
        ],
      },
      {
        heading: "3. Luyện tập giao tiếp",
        body: [
          "Hãy thử ghép các mẫu câu đã học thành một đoạn hội thoại ngắn giới thiệu về bản thân, gia đình và sở thích của em bằng tiếng Anh.",
        ],
      },
    ],
    quiz: [
      {
        question: "Câu nào dùng để giới thiệu bản thân?",
        options: ["My name is Mai.", "Turn left.", "It's 7 o'clock.", "The cake is sweet."],
        correctIndex: 0,
        explanation: "'My name is Mai.' là câu giới thiệu tên bản thân.",
      },
      {
        question: "Từ nào KHÔNG thuộc chủ đề thời tiết?",
        options: ["Sunny", "Rainy", "Chicken", "Windy"],
        correctIndex: 2,
        explanation: "'Chicken' (thịt gà) thuộc chủ đề món ăn, không phải thời tiết.",
      },
      {
        question: "Câu nào dùng để hỏi giờ?",
        options: ["What is your name?", "What time is it?", "What is your favourite food?", "Where do you live?"],
        correctIndex: 1,
        explanation: "'What time is it?' dùng để hỏi giờ hiện tại.",
      },
    ],
    funFact: "Fun fact: Ôn tập thường xuyên bằng cách sử dụng từ vựng trong câu thực tế giúp em ghi nhớ tiếng Anh lâu hơn rất nhiều so với học thuộc lòng!",
  },

  // ═══════════════════════════════ KHÁM PHÁ — LỚP 3 ═══════════════════════════════
  "kham-pha:3:ho-hang-noi-ngoai": {
    objectives: [
      "Kể tên được các thành viên trong họ hàng nội, ngoại.",
      "Phân biệt được họ hàng bên nội và bên ngoại.",
      "Thể hiện thái độ lễ phép, yêu quý với họ hàng.",
    ],
    sections: [
      {
        heading: "1. Họ hàng bên nội",
        body: [
          "Họ hàng bên nội là những người có quan hệ huyết thống với bố, gồm ông bà nội, bác, chú, cô ruột của bố và con cái của họ.",
        ],
      },
      {
        heading: "2. Họ hàng bên ngoại",
        body: [
          "Họ hàng bên ngoại là những người có quan hệ huyết thống với mẹ, gồm ông bà ngoại, bác, cậu, dì ruột của mẹ và con cái của họ.",
        ],
      },
      {
        heading: "3. Cách xưng hô, ứng xử",
        body: [
          "Em cần biết cách xưng hô đúng với từng người trong họ hàng và luôn thể hiện sự lễ phép, yêu thương với ông bà, cô dì, chú bác của mình.",
        ],
      },
    ],
    quiz: [
      {
        question: "Ông bà sinh ra bố của em được gọi là gì?",
        options: ["Ông bà ngoại", "Ông bà nội", "Cô chú", "Bác"],
        correctIndex: 1,
        explanation: "Ông bà sinh ra bố được gọi là ông bà nội.",
      },
      {
        question: "Em trai của mẹ được gọi là gì?",
        options: ["Chú", "Bác", "Cậu", "Dượng"],
        correctIndex: 2,
        explanation: "Em trai của mẹ được gọi là cậu.",
      },
      {
        question: "Em gái của bố được gọi là gì?",
        options: ["Dì", "Cô", "Bác gái", "Mợ"],
        correctIndex: 1,
        explanation: "Em gái của bố được gọi là cô.",
      },
    ],
    funFact: "Bạn có biết? Ở Việt Nam, cách xưng hô trong gia đình rất phong phú, có tới hàng chục từ khác nhau để gọi các thành viên trong họ hàng!",
  },

  "kham-pha:3:phong-tranh-hoa-hoan": {
    objectives: [
      "Nhận biết một số nguyên nhân gây ra hoả hoạn.",
      "Nêu được cách phòng tránh cháy nổ trong gia đình.",
      "Biết cách xử lý cơ bản khi phát hiện có cháy.",
    ],
    sections: [
      {
        heading: "1. Nguyên nhân gây hoả hoạn",
        body: [
          "Hoả hoạn có thể xảy ra do chập điện, quên tắt bếp gas, nghịch lửa, hoặc để vật dễ cháy gần nguồn nhiệt.",
        ],
      },
      {
        heading: "2. Cách phòng tránh",
        body: [
          "Em không nên nghịch diêm, bật lửa hay các thiết bị điện khi không có người lớn. Nhắc nhở gia đình tắt bếp, rút phích cắm sau khi sử dụng.",
        ],
      },
      {
        heading: "3. Xử lý khi có cháy",
        body: [
          "Khi phát hiện cháy, em cần hô hoán báo cho người lớn ngay, nhanh chóng rời khỏi khu vực nguy hiểm và gọi số điện thoại cứu hoả 114.",
        ],
      },
    ],
    quiz: [
      {
        question: "Số điện thoại gọi cứu hoả ở Việt Nam là gì?",
        options: ["113", "114", "115", "116"],
        correctIndex: 1,
        explanation: "114 là số điện thoại gọi lực lượng phòng cháy chữa cháy.",
      },
      {
        question: "Hành động nào có thể gây ra hoả hoạn?",
        options: ["Tắt bếp sau khi nấu ăn", "Nghịch diêm, bật lửa", "Rút phích cắm khi không dùng", "Kiểm tra dây điện định kỳ"],
        correctIndex: 1,
        explanation: "Nghịch diêm, bật lửa là hành động nguy hiểm có thể gây cháy.",
      },
      {
        question: "Khi phát hiện có cháy, việc đầu tiên em nên làm là gì?",
        options: ["Trốn trong phòng", "Báo ngay cho người lớn", "Tự dập lửa một mình", "Không làm gì cả"],
        correctIndex: 1,
        explanation: "Báo ngay cho người lớn giúp xử lý tình huống nhanh chóng và an toàn hơn.",
      },
    ],
    funFact: "Bạn có biết? Bình chữa cháy mini có thể dập tắt đám cháy nhỏ trong vài giây nếu được sử dụng đúng cách!",
  },

  "kham-pha:3:hoat-dong-ket-noi-cong-dong": {
    objectives: [
      "Kể tên được một số hoạt động ngoại khoá ở trường.",
      "Nêu được ý nghĩa của các hoạt động kết nối cộng đồng.",
      "Tích cực tham gia các hoạt động chung của trường lớp.",
    ],
    sections: [
      {
        heading: "1. Các hoạt động ngoại khoá phổ biến",
        body: [
          "Trường học thường tổ chức các hoạt động như: quyên góp từ thiện, tham quan dã ngoại, văn nghệ, thể thao, và các câu lạc bộ sở thích.",
        ],
      },
      {
        heading: "2. Ý nghĩa của hoạt động kết nối",
        body: [
          "Các hoạt động này giúp học sinh gắn kết với nhau hơn, rèn luyện kỹ năng làm việc nhóm, và biết chia sẻ, giúp đỡ cộng đồng xung quanh.",
        ],
      },
      {
        heading: "3. Vai trò của em",
        body: [
          "Em nên tích cực tham gia các hoạt động do trường tổ chức, đóng góp ý kiến và hợp tác tốt với bạn bè, thầy cô.",
        ],
      },
    ],
    quiz: [
      {
        question: "Hoạt động nào sau đây là hoạt động kết nối cộng đồng ở trường?",
        options: ["Làm bài kiểm tra", "Quyên góp từ thiện", "Ngủ trưa", "Chép bài"],
        correctIndex: 1,
        explanation: "Quyên góp từ thiện là hoạt động kết nối, giúp đỡ cộng đồng.",
      },
      {
        question: "Tham gia hoạt động ngoại khoá giúp em rèn luyện điều gì?",
        options: ["Chỉ giúp giải trí, không có lợi ích khác", "Kỹ năng làm việc nhóm, gắn kết bạn bè", "Không có tác dụng gì", "Chỉ tốn thời gian"],
        correctIndex: 1,
        explanation: "Hoạt động ngoại khoá giúp rèn luyện kỹ năng làm việc nhóm và gắn kết với bạn bè.",
      },
      {
        question: "Thái độ nào phù hợp khi tham gia hoạt động chung của trường?",
        options: ["Thờ ơ, không quan tâm", "Tích cực tham gia, hợp tác", "Chỉ tham gia khi bị bắt buộc", "Gây mất trật tự"],
        correctIndex: 1,
        explanation: "Tích cực tham gia và hợp tác giúp hoạt động chung diễn ra tốt đẹp, hiệu quả.",
      },
    ],
    funFact: "Bạn có biết? Nhiều trường học trên thế giới có hẳn một ngày trong tuần chỉ dành riêng cho các hoạt động ngoại khoá và câu lạc bộ!",
  },

  "kham-pha:3:truyen-thong-nha-truong": {
    objectives: [
      "Tìm hiểu một số truyền thống tiêu biểu của nhà trường.",
      "Nêu được ý nghĩa của việc giữ gìn truyền thống nhà trường.",
      "Thể hiện lòng tự hào và trách nhiệm với trường lớp.",
    ],
    sections: [
      {
        heading: "1. Một số truyền thống nhà trường",
        body: [
          "Nhiều trường học có truyền thống như: lễ khai giảng, lễ tri ân thầy cô ngày 20/11, hội thi văn nghệ - thể thao, hay các phong trào thi đua học tập tốt.",
        ],
      },
      {
        heading: "2. Ý nghĩa của truyền thống",
        body: [
          "Truyền thống nhà trường giúp học sinh các thế hệ gắn kết với nhau, tự hào về ngôi trường mình đang học và có động lực phấn đấu học tập tốt hơn.",
        ],
      },
      {
        heading: "3. Trách nhiệm giữ gìn truyền thống",
        body: [
          "Mỗi học sinh cần có ý thức giữ gìn và phát huy truyền thống tốt đẹp của nhà trường qua từng hành động nhỏ hàng ngày.",
        ],
      },
    ],
    quiz: [
      {
        question: "Ngày nào là ngày truyền thống tri ân thầy cô giáo ở Việt Nam?",
        options: ["1/6", "20/10", "20/11", "8/3"],
        correctIndex: 2,
        explanation: "Ngày 20/11 là Ngày Nhà giáo Việt Nam, dịp để tri ân thầy cô.",
      },
      {
        question: "Truyền thống nhà trường mang lại ý nghĩa gì?",
        options: [
          "Không có ý nghĩa đặc biệt",
          "Giúp học sinh gắn kết, tự hào về trường",
          "Chỉ tốn thời gian tổ chức",
          "Không liên quan đến học sinh",
        ],
        correctIndex: 1,
        explanation: "Truyền thống giúp học sinh gắn kết với nhau và tự hào về ngôi trường của mình.",
      },
      {
        question: "Em nên làm gì để giữ gìn truyền thống nhà trường?",
        options: ["Không quan tâm", "Tích cực tham gia và giữ gìn nề nếp", "Phá vỡ các quy định", "Chỉ tham gia khi có lợi cho mình"],
        correctIndex: 1,
        explanation: "Tích cực tham gia và giữ gìn nề nếp là cách thể hiện trách nhiệm với truyền thống nhà trường.",
      },
    ],
    funFact: "Bạn có biết? Có những ngôi trường ở Việt Nam đã tồn tại và giảng dạy hơn 100 năm, trở thành niềm tự hào của nhiều thế hệ học sinh!",
  },

  "kham-pha:3:hoat-dong-san-xuat": {
    objectives: [
      "Kể tên được một số hoạt động sản xuất ở địa phương.",
      "Nêu được vai trò của hoạt động sản xuất đối với đời sống.",
      "Trân trọng công sức của người lao động sản xuất.",
    ],
    sections: [
      {
        heading: "1. Các hoạt động sản xuất phổ biến",
        body: [
          "Tuỳ theo từng địa phương, hoạt động sản xuất có thể là trồng lúa, nuôi trồng thuỷ sản, làm gốm, dệt vải, hoặc sản xuất trong nhà máy, xí nghiệp.",
        ],
      },
      {
        heading: "2. Vai trò của sản xuất",
        body: [
          "Hoạt động sản xuất tạo ra của cải vật chất phục vụ đời sống con người, đồng thời tạo công ăn việc làm cho người dân địa phương.",
        ],
      },
      {
        heading: "3. Trân trọng người lao động",
        body: [
          "Mỗi sản phẩm em sử dụng hàng ngày đều là kết quả lao động vất vả của nhiều người, vì vậy em cần biết trân trọng và tiết kiệm.",
        ],
      },
    ],
    quiz: [
      {
        question: "Hoạt động nào sau đây là hoạt động sản xuất?",
        options: ["Xem phim hoạt hình", "Trồng lúa", "Ngủ trưa", "Chơi trò chơi"],
        correctIndex: 1,
        explanation: "Trồng lúa là một hoạt động sản xuất nông nghiệp tạo ra lương thực.",
      },
      {
        question: "Hoạt động sản xuất mang lại điều gì cho địa phương?",
        options: ["Không mang lại lợi ích gì", "Của cải vật chất và việc làm", "Chỉ gây ô nhiễm", "Không liên quan đến đời sống"],
        correctIndex: 1,
        explanation: "Sản xuất tạo ra của cải vật chất và việc làm cho người dân.",
      },
      {
        question: "Vì sao em cần trân trọng, tiết kiệm các sản phẩm mình sử dụng?",
        options: [
          "Vì sản phẩm tự nhiên mà có",
          "Vì đó là công sức lao động của nhiều người",
          "Không cần trân trọng",
          "Vì sản phẩm không có giá trị",
        ],
        correctIndex: 1,
        explanation: "Mỗi sản phẩm đều là kết quả lao động vất vả, nên cần được trân trọng, sử dụng tiết kiệm.",
      },
    ],
    funFact: "Bạn có biết? Việt Nam là một trong những nước xuất khẩu gạo hàng đầu thế giới, nhờ công sức lao động của hàng triệu nông dân!",
  },

  "kham-pha:3:di-tich-lich-su-van-hoa": {
    objectives: [
      "Kể tên được một số di tích lịch sử - văn hoá tiêu biểu.",
      "Nêu được ý nghĩa của việc bảo vệ di tích.",
      "Có ý thức tôn trọng, giữ gìn di tích lịch sử - văn hoá.",
    ],
    sections: [
      {
        heading: "1. Di tích lịch sử - văn hoá là gì?",
        body: [
          "Di tích lịch sử - văn hoá là những công trình, địa điểm gắn liền với các sự kiện lịch sử hoặc giá trị văn hoá quan trọng, ví dụ đền, chùa, thành cổ, lăng tẩm.",
        ],
      },
      {
        heading: "2. Một số di tích tiêu biểu",
        body: [
          "Việt Nam có nhiều di tích nổi tiếng như Văn Miếu - Quốc Tử Giám, Hoàng thành Thăng Long, Cố đô Huế, mỗi địa phương cũng có những di tích riêng gắn với lịch sử vùng đất mình.",
        ],
      },
      {
        heading: "3. Ý thức bảo vệ di tích",
        body: [
          "Khi tham quan di tích, em cần giữ trật tự, không viết vẽ bậy, không xả rác, và tuân theo hướng dẫn của người quản lý.",
        ],
      },
    ],
    quiz: [
      {
        question: "Văn Miếu - Quốc Tử Giám là di tích thuộc thành phố nào?",
        options: ["TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Huế"],
        correctIndex: 1,
        explanation: "Văn Miếu - Quốc Tử Giám nằm ở thủ đô Hà Nội.",
      },
      {
        question: "Hành động nào KHÔNG nên làm khi tham quan di tích?",
        options: ["Giữ trật tự", "Viết vẽ bậy lên di tích", "Nghe hướng dẫn viên", "Không xả rác"],
        correctIndex: 1,
        explanation: "Viết vẽ bậy làm hư hại di tích, là hành động không nên làm.",
      },
      {
        question: "Vì sao cần bảo vệ di tích lịch sử - văn hoá?",
        options: [
          "Vì đó là tài sản, giá trị của dân tộc",
          "Vì di tích không quan trọng",
          "Vì di tích chỉ để trang trí",
          "Không cần bảo vệ",
        ],
        correctIndex: 0,
        explanation: "Di tích lịch sử - văn hoá là tài sản quý giá của dân tộc cần được gìn giữ cho các thế hệ sau.",
      },
    ],
    funFact: "Bạn có biết? Hoàng thành Thăng Long đã được UNESCO công nhận là Di sản Văn hoá Thế giới vào năm 2010!",
  },

  "kham-pha:3:cac-bo-phan-cua-thuc-vat": {
    objectives: [
      "Nêu được tên và chức năng các bộ phận chính của thực vật.",
      "Phân biệt được rễ, thân, lá, hoa, quả trên cây thật.",
      "Có ý thức chăm sóc, bảo vệ cây xanh.",
    ],
    sections: [
      {
        heading: "1. Rễ và thân cây",
        body: [
          "Rễ giúp cây hút nước, chất dinh dưỡng từ đất và giữ cho cây đứng vững. Thân cây vận chuyển nước, chất dinh dưỡng từ rễ lên các bộ phận khác của cây.",
        ],
      },
      {
        heading: "2. Lá cây",
        body: [
          "Lá cây có chức năng quang hợp, giúp cây tạo ra chất dinh dưỡng nhờ ánh sáng mặt trời, đồng thời giúp cây trao đổi khí với môi trường.",
        ],
      },
      {
        heading: "3. Hoa và quả",
        body: [
          "Hoa giúp cây sinh sản, tạo ra quả và hạt. Quả bảo vệ hạt bên trong và giúp cây phát tán hạt đi xa để sinh trưởng thành cây mới.",
        ],
      },
    ],
    quiz: [
      {
        question: "Bộ phận nào giúp cây hút nước và chất dinh dưỡng từ đất?",
        options: ["Lá", "Rễ", "Hoa", "Quả"],
        correctIndex: 1,
        explanation: "Rễ cây có chức năng hút nước và chất dinh dưỡng từ đất.",
      },
      {
        question: "Bộ phận nào của cây thực hiện quá trình quang hợp?",
        options: ["Rễ", "Thân", "Lá", "Hạt"],
        correctIndex: 2,
        explanation: "Lá cây là nơi diễn ra quá trình quang hợp nhờ ánh sáng mặt trời.",
      },
      {
        question: "Quả cây có chức năng gì?",
        options: ["Hút nước", "Bảo vệ hạt và giúp phát tán hạt", "Quang hợp", "Giữ cây đứng vững"],
        correctIndex: 1,
        explanation: "Quả bảo vệ hạt bên trong và giúp hạt phát tán để tạo cây mới.",
      },
    ],
    funFact: "Bạn có biết? Rễ của một số cây cổ thụ có thể dài tới hàng chục mét để tìm kiếm nguồn nước sâu dưới lòng đất!",
  },

  "kham-pha:3:bao-ve-moi-truong-song": {
    objectives: [
      "Nhận biết một số hành động gây hại đến môi trường sống của sinh vật.",
      "Đề xuất được hành động bảo vệ môi trường sống phù hợp.",
      "Có ý thức bảo vệ cây xanh, động vật xung quanh.",
    ],
    sections: [
      {
        heading: "1. Môi trường sống của sinh vật",
        body: [
          "Mỗi loài sinh vật đều cần một môi trường sống phù hợp với đất, nước, không khí và nguồn thức ăn để tồn tại và phát triển.",
        ],
      },
      {
        heading: "2. Hành động gây hại môi trường",
        body: [
          "Chặt phá rừng, xả rác bừa bãi, săn bắt động vật hoang dã là những hành động làm ảnh hưởng xấu đến môi trường sống của sinh vật.",
        ],
      },
      {
        heading: "3. Hành động bảo vệ môi trường",
        body: [
          "Em có thể góp phần bảo vệ môi trường bằng cách trồng cây xanh, không xả rác bừa bãi, tiết kiệm nước và nhắc nhở mọi người cùng bảo vệ môi trường.",
        ],
      },
    ],
    quiz: [
      {
        question: "Hành động nào gây hại cho môi trường sống của sinh vật?",
        options: ["Trồng cây xanh", "Chặt phá rừng bừa bãi", "Tiết kiệm nước", "Không xả rác"],
        correctIndex: 1,
        explanation: "Chặt phá rừng bừa bãi phá huỷ môi trường sống của nhiều loài sinh vật.",
      },
      {
        question: "Em có thể làm gì để bảo vệ môi trường sống?",
        options: ["Xả rác bừa bãi", "Trồng thêm cây xanh", "Săn bắt động vật hoang dã", "Chặt cây không cần thiết"],
        correctIndex: 1,
        explanation: "Trồng thêm cây xanh giúp cải thiện môi trường sống cho nhiều loài sinh vật.",
      },
      {
        question: "Vì sao cần bảo vệ môi trường sống của sinh vật?",
        options: [
          "Vì sinh vật không quan trọng",
          "Để duy trì sự cân bằng tự nhiên và cuộc sống con người",
          "Không có lý do gì đặc biệt",
          "Chỉ để làm đẹp cảnh quan",
        ],
        correctIndex: 1,
        explanation: "Bảo vệ môi trường sống giúp duy trì cân bằng tự nhiên, ảnh hưởng trực tiếp đến cuộc sống con người.",
      },
    ],
    funFact: "Bạn có biết? Một cây xanh trưởng thành có thể hấp thụ tới khoảng 22kg khí CO2 mỗi năm, giúp không khí trong lành hơn!",
  },

  "kham-pha:3:ngay-ki-niem-cua-gia-dinh": {
    objectives: [
      "Kể tên được một số ngày kỉ niệm quan trọng của gia đình.",
      "Nêu được ý nghĩa của các ngày kỉ niệm đó.",
      "Thể hiện sự quan tâm đến các thành viên trong gia đình.",
    ],
    sections: [
      {
        heading: "1. Các ngày kỉ niệm phổ biến",
        body: [
          "Gia đình thường có những ngày kỉ niệm như: ngày sinh nhật các thành viên, ngày cưới của bố mẹ, ngày giỗ ông bà, hoặc các dịp lễ, Tết truyền thống.",
        ],
      },
      {
        heading: "2. Ý nghĩa của ngày kỉ niệm",
        body: [
          "Những ngày này giúp các thành viên trong gia đình có dịp quây quần bên nhau, thể hiện tình cảm yêu thương và nhớ về những kỷ niệm đáng quý.",
        ],
      },
      {
        heading: "3. Vai trò của em",
        body: [
          "Em có thể góp phần làm ngày kỉ niệm gia đình thêm ý nghĩa bằng những hành động nhỏ như tự tay làm thiệp chúc mừng hay giúp đỡ chuẩn bị.",
        ],
      },
    ],
    quiz: [
      {
        question: "Ngày nào sau đây là một ngày kỉ niệm của gia đình?",
        options: ["Ngày khai giảng", "Ngày sinh nhật của mẹ", "Ngày Quốc khánh", "Ngày Nhà giáo Việt Nam"],
        correctIndex: 1,
        explanation: "Sinh nhật của mẹ là một ngày kỉ niệm riêng của gia đình.",
      },
      {
        question: "Ý nghĩa của ngày kỉ niệm gia đình là gì?",
        options: [
          "Không có ý nghĩa gì đặc biệt",
          "Gắn kết tình cảm các thành viên trong gia đình",
          "Chỉ để nghỉ ngơi",
          "Chỉ dành cho người lớn",
        ],
        correctIndex: 1,
        explanation: "Ngày kỉ niệm giúp gắn kết tình cảm và tạo kỷ niệm đẹp cho các thành viên trong gia đình.",
      },
      {
        question: "Em có thể làm gì để ngày kỉ niệm gia đình thêm ý nghĩa?",
        options: ["Không quan tâm", "Tự tay làm thiệp chúc mừng", "Đi chơi một mình", "Không tham gia"],
        correctIndex: 1,
        explanation: "Tự tay làm thiệp chúc mừng là hành động nhỏ nhưng thể hiện tình cảm chân thành.",
      },
    ],
    funFact: "Bạn có biết? Ở nhiều gia đình Việt Nam, ngày giỗ tổ tiên được xem là dịp quan trọng để con cháu sum họp và tưởng nhớ người đã khuất!",
  },

  "kham-pha:3:ve-sinh-truong-hoc": {
    objectives: [
      "Nhận biết vai trò của việc giữ vệ sinh trường học.",
      "Nêu được các việc làm cụ thể để giữ vệ sinh trường lớp.",
      "Có ý thức tự giác giữ gìn vệ sinh chung.",
    ],
    sections: [
      {
        heading: "1. Vì sao cần giữ vệ sinh trường học?",
        body: [
          "Trường học sạch sẽ giúp phòng tránh bệnh tật, tạo môi trường học tập thoải mái, dễ chịu cho cả học sinh và thầy cô.",
        ],
      },
      {
        heading: "2. Các việc làm giữ vệ sinh",
        body: [
          "Em có thể giữ vệ sinh trường lớp bằng cách: bỏ rác đúng nơi quy định, lau bảng sạch sẽ, sắp xếp bàn ghế ngay ngắn, không vẽ bậy lên tường.",
        ],
      },
      {
        heading: "3. Trách nhiệm của mỗi học sinh",
        body: [
          "Giữ vệ sinh trường học không chỉ là việc của riêng ai mà là trách nhiệm chung của tất cả học sinh, cần thực hiện thường xuyên, tự giác.",
        ],
      },
    ],
    quiz: [
      {
        question: "Vì sao cần giữ vệ sinh trường học?",
        options: [
          "Không có lý do gì đặc biệt",
          "Phòng tránh bệnh tật, tạo môi trường học tập tốt",
          "Chỉ để đẹp mắt",
          "Không liên quan đến sức khoẻ",
        ],
        correctIndex: 1,
        explanation: "Vệ sinh sạch sẽ giúp phòng tránh bệnh tật và tạo môi trường học tập thoải mái.",
      },
      {
        question: "Hành động nào giúp giữ vệ sinh trường lớp?",
        options: ["Vứt rác bừa bãi", "Bỏ rác đúng nơi quy định", "Vẽ bậy lên tường", "Xô đẩy bàn ghế lộn xộn"],
        correctIndex: 1,
        explanation: "Bỏ rác đúng nơi quy định là hành động giữ vệ sinh trường lớp.",
      },
      {
        question: "Giữ vệ sinh trường học là trách nhiệm của ai?",
        options: ["Chỉ của bác lao công", "Chỉ của thầy cô", "Của tất cả học sinh", "Không phải trách nhiệm của ai"],
        correctIndex: 2,
        explanation: "Giữ vệ sinh trường học là trách nhiệm chung của tất cả học sinh.",
      },
    ],
    funFact: "Bạn có biết? Rửa tay đúng cách trước khi ăn và sau khi đi vệ sinh có thể giúp phòng tránh tới hơn 50% các bệnh lây qua đường tiêu hoá!",
  },

  "kham-pha:3:mot-so-nghe-truyen-thong-o-dia-phuong": {
    objectives: [
      "Kể tên được một số nghề truyền thống ở địa phương.",
      "Nêu được sản phẩm và ý nghĩa của các nghề truyền thống.",
      "Trân trọng giá trị văn hoá của nghề truyền thống.",
    ],
    sections: [
      {
        heading: "1. Nghề truyền thống là gì?",
        body: [
          "Nghề truyền thống là những nghề được lưu truyền qua nhiều thế hệ trong một vùng, gắn liền với bản sắc văn hoá địa phương, ví dụ làm gốm, dệt lụa, đan lát.",
        ],
      },
      {
        heading: "2. Một số nghề truyền thống nổi tiếng",
        body: [
          "Việt Nam có nhiều làng nghề nổi tiếng như gốm Bát Tràng, lụa Vạn Phúc, tranh Đông Hồ — mỗi nghề đều mang một nét đẹp văn hoá riêng.",
        ],
      },
      {
        heading: "3. Ý nghĩa của việc giữ gìn nghề truyền thống",
        body: [
          "Giữ gìn nghề truyền thống không chỉ giúp bảo tồn văn hoá dân tộc mà còn tạo công ăn việc làm cho người dân địa phương.",
        ],
      },
    ],
    quiz: [
      {
        question: "Gốm Bát Tràng là làng nghề nổi tiếng ở đâu?",
        options: ["TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Cần Thơ"],
        correctIndex: 1,
        explanation: "Làng gốm Bát Tràng thuộc Hà Nội, nổi tiếng với nghề làm gốm truyền thống.",
      },
      {
        question: "Nghề truyền thống nào sau đây liên quan đến vải, lụa?",
        options: ["Làm gốm", "Dệt lụa", "Đóng thuyền", "Làm mộc"],
        correctIndex: 1,
        explanation: "Dệt lụa là nghề truyền thống tạo ra các sản phẩm vải lụa.",
      },
      {
        question: "Vì sao cần giữ gìn nghề truyền thống?",
        options: [
          "Không cần thiết vì đã lỗi thời",
          "Bảo tồn văn hoá và tạo việc làm cho người dân",
          "Chỉ để trưng bày",
          "Không có ý nghĩa gì",
        ],
        correctIndex: 1,
        explanation: "Giữ gìn nghề truyền thống giúp bảo tồn văn hoá dân tộc và tạo việc làm cho người dân.",
      },
    ],
    funFact: "Bạn có biết? Tranh Đông Hồ được làm hoàn toàn thủ công, in bằng bản khắc gỗ và giấy dó, có tuổi đời hàng trăm năm!",
  },

  "kham-pha:3:co-quan-ho-hap": {
    objectives: [
      "Nêu được tên các bộ phận chính của cơ quan hô hấp.",
      "Hiểu được vai trò của cơ quan hô hấp đối với cơ thể.",
      "Biết cách chăm sóc, bảo vệ cơ quan hô hấp.",
    ],
    sections: [
      {
        heading: "1. Các bộ phận của cơ quan hô hấp",
        body: [
          "Cơ quan hô hấp gồm: mũi, khí quản, phế quản và hai lá phổi. Không khí đi vào qua mũi, xuống khí quản, phế quản rồi đến phổi.",
        ],
      },
      {
        heading: "2. Vai trò của hô hấp",
        body: [
          "Hô hấp giúp cơ thể lấy khí ô-xy từ không khí và thải ra khí các-bô-níc, cung cấp năng lượng cần thiết cho mọi hoạt động sống.",
        ],
      },
      {
        heading: "3. Bảo vệ cơ quan hô hấp",
        body: [
          "Em nên đeo khẩu trang khi ra đường nhiều khói bụi, không hút thuốc lá, giữ ấm cơ thể vào mùa lạnh và tập thể dục thường xuyên để phổi khoẻ mạnh.",
        ],
      },
    ],
    quiz: [
      {
        question: "Bộ phận nào KHÔNG thuộc cơ quan hô hấp?",
        options: ["Mũi", "Phổi", "Dạ dày", "Khí quản"],
        correctIndex: 2,
        explanation: "Dạ dày thuộc cơ quan tiêu hoá, không thuộc cơ quan hô hấp.",
      },
      {
        question: "Cơ quan hô hấp giúp cơ thể làm gì?",
        options: [
          "Tiêu hoá thức ăn",
          "Lấy khí ô-xy và thải khí các-bô-níc",
          "Bài tiết nước tiểu",
          "Vận động cơ thể",
        ],
        correctIndex: 1,
        explanation: "Cơ quan hô hấp giúp cơ thể lấy ô-xy và thải khí các-bô-níc.",
      },
      {
        question: "Hành động nào giúp bảo vệ cơ quan hô hấp?",
        options: ["Hút thuốc lá", "Đeo khẩu trang khi nhiều khói bụi", "Không tập thể dục", "Ở nơi nhiều khói bụi lâu"],
        correctIndex: 1,
        explanation: "Đeo khẩu trang giúp hạn chế bụi bẩn, vi khuẩn xâm nhập vào đường hô hấp.",
      },
    ],
    funFact: "Bạn có biết? Mỗi ngày, một người trưởng thành hít thở trung bình khoảng 20 000 lần!",
  },

  "kham-pha:3:co-quan-bai-tiet-nuoc-tieu": {
    objectives: [
      "Nêu được tên các bộ phận chính của cơ quan bài tiết nước tiểu.",
      "Hiểu được vai trò của cơ quan bài tiết đối với cơ thể.",
      "Biết cách chăm sóc cơ quan bài tiết nước tiểu.",
    ],
    sections: [
      {
        heading: "1. Các bộ phận của cơ quan bài tiết",
        body: [
          "Cơ quan bài tiết nước tiểu gồm hai quả thận, ống dẫn nước tiểu, bóng đái (bàng quang) và ống đái.",
        ],
      },
      {
        heading: "2. Vai trò của cơ quan bài tiết",
        body: [
          "Thận có chức năng lọc máu, loại bỏ các chất thải và nước thừa ra khỏi cơ thể dưới dạng nước tiểu, giúp cơ thể luôn sạch và khoẻ mạnh.",
        ],
      },
      {
        heading: "3. Chăm sóc cơ quan bài tiết",
        body: [
          "Em nên uống đủ nước mỗi ngày, không nhịn tiểu quá lâu, và giữ vệ sinh cá nhân sạch sẽ để bảo vệ cơ quan bài tiết khoẻ mạnh.",
        ],
      },
    ],
    quiz: [
      {
        question: "Cơ quan nào có chức năng lọc máu và tạo ra nước tiểu?",
        options: ["Phổi", "Thận", "Dạ dày", "Tim"],
        correctIndex: 1,
        explanation: "Thận có chức năng lọc máu và tạo ra nước tiểu.",
      },
      {
        question: "Nước tiểu được chứa tạm thời ở bộ phận nào trước khi thải ra ngoài?",
        options: ["Bóng đái (bàng quang)", "Dạ dày", "Phổi", "Gan"],
        correctIndex: 0,
        explanation: "Bóng đái (bàng quang) là nơi chứa nước tiểu trước khi thải ra ngoài.",
      },
      {
        question: "Thói quen nào tốt cho cơ quan bài tiết?",
        options: ["Nhịn tiểu thường xuyên", "Uống đủ nước mỗi ngày", "Uống rất ít nước", "Không đi vệ sinh khi cần"],
        correctIndex: 1,
        explanation: "Uống đủ nước giúp thận hoạt động tốt và đào thải chất cặn bã hiệu quả.",
      },
    ],
    funFact: "Bạn có biết? Mỗi quả thận chứa hàng triệu bộ lọc siêu nhỏ, có thể lọc toàn bộ lượng máu trong cơ thể nhiều lần mỗi ngày!",
  },

  "kham-pha:3:phong-tranh-duoi-nuoc": {
    objectives: [
      "Nhận biết một số nguy cơ dẫn đến đuối nước.",
      "Nêu được cách phòng tránh đuối nước.",
      "Biết cách xử lý cơ bản khi gặp tình huống nguy hiểm dưới nước.",
    ],
    sections: [
      {
        heading: "1. Nguy cơ dẫn đến đuối nước",
        body: [
          "Đuối nước có thể xảy ra khi bơi ở nơi không có người lớn giám sát, bơi ở vùng nước sâu, nước chảy xiết, hoặc không biết bơi mà vẫn xuống nước.",
        ],
      },
      {
        heading: "2. Cách phòng tránh đuối nước",
        body: [
          "Em chỉ nên bơi ở nơi an toàn, có người lớn giám sát, học bơi bài bản, và không tự ý ra sông, hồ, ao chơi một mình.",
        ],
      },
      {
        heading: "3. Xử lý khi gặp tình huống nguy hiểm",
        body: [
          "Khi thấy người khác bị đuối nước, em cần hô hoán gọi người lớn giúp đỡ ngay, tuyệt đối không tự ý nhảy xuống cứu nếu không biết bơi giỏi.",
        ],
      },
    ],
    quiz: [
      {
        question: "Hành động nào có thể dẫn đến nguy cơ đuối nước?",
        options: ["Bơi có người lớn giám sát", "Tự ý bơi ở sông, hồ một mình", "Học bơi bài bản", "Mặc áo phao khi đi thuyền"],
        correctIndex: 1,
        explanation: "Tự ý bơi một mình ở sông, hồ mà không có người giám sát rất nguy hiểm.",
      },
      {
        question: "Khi thấy bạn bị đuối nước, em nên làm gì?",
        options: [
          "Tự ý nhảy xuống cứu dù không biết bơi giỏi",
          "Hô hoán gọi người lớn giúp đỡ ngay",
          "Bỏ đi không quan tâm",
          "Đứng xem không làm gì",
        ],
        correctIndex: 1,
        explanation: "Hô hoán gọi người lớn giúp đỡ là cách xử lý an toàn và hiệu quả nhất.",
      },
      {
        question: "Để phòng tránh đuối nước, em nên làm gì?",
        options: ["Học bơi bài bản, có người lớn giám sát", "Bơi ở nơi nước chảy xiết", "Không cần học bơi", "Bơi một mình ở ao hồ"],
        correctIndex: 0,
        explanation: "Học bơi bài bản và luôn có người lớn giám sát giúp phòng tránh đuối nước hiệu quả.",
      },
    ],
    funFact: "Bạn có biết? Mặc áo phao đúng cách khi tham gia các hoạt động dưới nước có thể giảm đáng kể nguy cơ đuối nước!",
  },

  "kham-pha:3:on-tap-cuoi-nam-hoc": {
    objectives: [
      "Hệ thống lại kiến thức về gia đình, trường học, cộng đồng đã học.",
      "Ôn tập kiến thức về thực vật và cơ thể con người.",
      "Vận dụng kiến thức vào việc bảo vệ sức khoẻ và môi trường sống.",
    ],
    sections: [
      {
        heading: "1. Ôn tập về gia đình và cộng đồng",
        body: [
          "Em đã học về họ hàng nội ngoại, các hoạt động sản xuất, nghề truyền thống và di tích lịch sử - văn hoá ở địa phương.",
        ],
      },
      {
        heading: "2. Ôn tập về thực vật và cơ thể người",
        body: [
          "Em đã học về các bộ phận của thực vật, cơ quan hô hấp và cơ quan bài tiết nước tiểu của cơ thể người.",
        ],
      },
      {
        heading: "3. Vận dụng kiến thức đã học",
        body: [
          "Hãy ôn lại các kỹ năng phòng tránh nguy hiểm (hoả hoạn, đuối nước) và cách bảo vệ môi trường sống, sức khoẻ bản thân đã học trong năm.",
        ],
      },
    ],
    quiz: [
      {
        question: "Cơ quan nào giúp cơ thể lấy khí ô-xy?",
        options: ["Cơ quan tiêu hoá", "Cơ quan hô hấp", "Cơ quan bài tiết", "Cơ quan vận động"],
        correctIndex: 1,
        explanation: "Cơ quan hô hấp giúp cơ thể lấy khí ô-xy và thải khí các-bô-níc.",
      },
      {
        question: "Số điện thoại nào dùng để gọi cứu hoả?",
        options: ["113", "114", "115", "112"],
        correctIndex: 1,
        explanation: "114 là số điện thoại gọi lực lượng phòng cháy chữa cháy.",
      },
      {
        question: "Bộ phận nào của cây thực hiện quá trình quang hợp?",
        options: ["Rễ", "Lá", "Hoa", "Quả"],
        correctIndex: 1,
        explanation: "Lá cây là nơi diễn ra quá trình quang hợp.",
      },
    ],
    funFact: "Bạn có biết? Việc ôn tập và liên hệ kiến thức với đời sống thực tế giúp em ghi nhớ bài học lâu hơn và vận dụng tốt hơn!",
  },

  // ═══════════════════════════════ ĐẠO ĐỨC — LỚP 3 ═══════════════════════════════
  "dao-duc:3:tu-hao-truyen-thong-que-huong": {
    objectives: [
      "Kể được một số nét đẹp truyền thống của quê hương.",
      "Thể hiện thái độ tự hào về quê hương mình.",
      "Có việc làm cụ thể góp phần giữ gìn truyền thống quê hương.",
    ],
    sections: [
      {
        heading: "1. Nét đẹp truyền thống quê hương",
        body: [
          "Mỗi vùng quê đều có những nét đẹp riêng: lễ hội truyền thống, món ăn đặc sản, làng nghề, hay những câu chuyện lịch sử gắn liền với mảnh đất đó.",
        ],
      },
      {
        heading: "2. Vì sao cần tự hào về quê hương?",
        body: [
          "Tự hào về quê hương giúp em thêm yêu quý nơi mình sinh ra và lớn lên, đồng thời có ý thức giữ gìn, phát huy những giá trị tốt đẹp đó.",
        ],
      },
      {
        heading: "3. Hành động thể hiện tự hào",
        body: [
          "Em có thể giới thiệu về quê hương mình với bạn bè, tham gia các lễ hội truyền thống, hoặc đơn giản là giữ gìn vệ sinh, cảnh quan quê hương sạch đẹp.",
        ],
      },
    ],
    quiz: [
      {
        question: "Điều gì thể hiện lòng tự hào về quê hương?",
        options: ["Chê bai quê hương mình", "Giới thiệu nét đẹp quê hương với bạn bè", "Không quan tâm đến quê hương", "Phá hoại di tích quê hương"],
        correctIndex: 1,
        explanation: "Giới thiệu nét đẹp quê hương là cách thể hiện tình yêu, niềm tự hào với quê hương.",
      },
      {
        question: "Nét đẹp truyền thống của quê hương có thể là gì?",
        options: ["Lễ hội truyền thống", "Rác thải bừa bãi", "Ô nhiễm môi trường", "Không có gì đặc biệt"],
        correctIndex: 0,
        explanation: "Lễ hội truyền thống là một trong những nét đẹp văn hoá của quê hương.",
      },
      {
        question: "Em có thể làm gì để góp phần giữ gìn truyền thống quê hương?",
        options: ["Không quan tâm", "Giữ gìn vệ sinh, cảnh quan quê hương", "Phá hoại cảnh quan", "Chê bai truyền thống"],
        correctIndex: 1,
        explanation: "Giữ gìn vệ sinh, cảnh quan là hành động thiết thực góp phần bảo vệ quê hương.",
      },
    ],
    funFact: "Bạn có biết? Việt Nam có tới hơn 8000 lễ hội truyền thống được tổ chức hàng năm trên khắp cả nước!",
  },

  "dao-duc:3:ham-hoc-hoi": {
    objectives: [
      "Hiểu được ý nghĩa của tinh thần ham học hỏi.",
      "Nhận biết biểu hiện của người ham học hỏi.",
      "Rèn luyện thói quen ham học hỏi trong cuộc sống hàng ngày.",
    ],
    sections: [
      {
        heading: "1. Ham học hỏi là gì?",
        body: [
          "Ham học hỏi là luôn có tinh thần tìm tòi, khám phá những điều mới mẻ, không ngại đặt câu hỏi khi chưa hiểu rõ vấn đề.",
        ],
      },
      {
        heading: "2. Biểu hiện của người ham học hỏi",
        body: [
          "Người ham học hỏi thường chăm chỉ đọc sách, tích cực đặt câu hỏi cho thầy cô, và luôn tìm cách giải quyết khi gặp bài khó thay vì bỏ cuộc.",
        ],
      },
      {
        heading: "3. Lợi ích của ham học hỏi",
        body: [
          "Tinh thần ham học hỏi giúp em mở rộng hiểu biết, phát triển bản thân và đạt được nhiều thành công hơn trong học tập cũng như cuộc sống.",
        ],
      },
    ],
    quiz: [
      {
        question: "Biểu hiện nào sau đây thể hiện tinh thần ham học hỏi?",
        options: ["Không bao giờ đặt câu hỏi", "Tích cực tìm hiểu điều mới, đặt câu hỏi khi chưa hiểu", "Bỏ cuộc khi gặp bài khó", "Chỉ học khi bị ép buộc"],
        correctIndex: 1,
        explanation: "Tích cực tìm hiểu và đặt câu hỏi là biểu hiện của tinh thần ham học hỏi.",
      },
      {
        question: "Ham học hỏi mang lại lợi ích gì?",
        options: ["Không có lợi ích gì", "Mở rộng hiểu biết, phát triển bản thân", "Làm mất thời gian vô ích", "Chỉ gây thêm áp lực"],
        correctIndex: 1,
        explanation: "Ham học hỏi giúp mở rộng hiểu biết và phát triển bản thân toàn diện hơn.",
      },
      {
        question: "Khi gặp một bài toán khó, người ham học hỏi sẽ làm gì?",
        options: ["Bỏ qua không làm", "Tìm cách giải quyết, hỏi thầy cô hoặc bạn bè", "Chép bài của bạn", "Tức giận, bỏ cuộc"],
        correctIndex: 1,
        explanation: "Người ham học hỏi luôn tìm cách giải quyết vấn đề thay vì bỏ cuộc.",
      },
    ],
    funFact: "Bạn có biết? Nhà bác học Charles Darwin từng nói rằng ông không phải người thông minh nhất, nhưng luôn tò mò và ham học hỏi hơn người khác!",
  },

  "dao-duc:3:quan-tam-hang-xom-lang-gieng": {
    objectives: [
      "Hiểu ý nghĩa của việc quan tâm, giúp đỡ hàng xóm láng giềng.",
      "Nêu được những việc làm thể hiện sự quan tâm với hàng xóm.",
      "Có thái độ thân thiện, hoà đồng với mọi người xung quanh.",
    ],
    sections: [
      {
        heading: "1. Vì sao cần quan tâm hàng xóm?",
        body: [
          "'Bán anh em xa, mua láng giềng gần' — hàng xóm là những người sống gần mình nhất, có thể giúp đỡ nhau lúc khó khăn, hoạn nạn.",
        ],
      },
      {
        heading: "2. Việc làm thể hiện sự quan tâm",
        body: [
          "Em có thể chào hỏi lễ phép khi gặp hàng xóm, không gây ồn ào ảnh hưởng đến mọi người, và sẵn sàng giúp đỡ khi hàng xóm cần.",
        ],
      },
      {
        heading: "3. Xây dựng mối quan hệ tốt đẹp",
        body: [
          "Sống hoà đồng, thân thiện với hàng xóm giúp khu phố, xóm làng trở nên gắn kết, đoàn kết và an toàn hơn cho tất cả mọi người.",
        ],
      },
    ],
    quiz: [
      {
        question: "Câu tục ngữ nào nói về tình cảm hàng xóm láng giềng?",
        options: [
          "Ăn quả nhớ kẻ trồng cây",
          "Bán anh em xa, mua láng giềng gần",
          "Có công mài sắt, có ngày nên kim",
          "Uống nước nhớ nguồn",
        ],
        correctIndex: 1,
        explanation: "'Bán anh em xa, mua láng giềng gần' nói về giá trị của tình cảm hàng xóm gần gũi.",
      },
      {
        question: "Hành động nào thể hiện sự quan tâm đến hàng xóm?",
        options: ["Gây ồn ào không suy nghĩ", "Chào hỏi lễ phép, giúp đỡ khi cần", "Không quan tâm ai cả", "Tranh cãi thường xuyên"],
        correctIndex: 1,
        explanation: "Chào hỏi lễ phép và sẵn sàng giúp đỡ là biểu hiện của sự quan tâm đến hàng xóm.",
      },
      {
        question: "Sống hoà đồng với hàng xóm mang lại điều gì?",
        options: ["Không mang lại lợi ích gì", "Khu phố gắn kết, an toàn hơn", "Gây thêm rắc rối", "Không có tác dụng gì"],
        correctIndex: 1,
        explanation: "Sống hoà đồng giúp xây dựng khu phố đoàn kết, an toàn cho mọi người.",
      },
    ],
    funFact: "Bạn có biết? Ở nhiều vùng quê Việt Nam, hàng xóm thường giúp đỡ nhau trong việc cưới hỏi, ma chay như người trong một gia đình!",
  },

  "dao-duc:3:giu-loi-hua": {
    objectives: [
      "Hiểu được ý nghĩa của việc giữ lời hứa.",
      "Nhận biết hậu quả của việc không giữ lời hứa.",
      "Rèn luyện thói quen giữ lời hứa trong cuộc sống.",
    ],
    sections: [
      {
        heading: "1. Giữ lời hứa là gì?",
        body: [
          "Giữ lời hứa là thực hiện đúng những gì mình đã nói, đã cam kết với người khác, dù là việc nhỏ hay việc lớn.",
        ],
      },
      {
        heading: "2. Vì sao cần giữ lời hứa?",
        body: [
          "Giữ lời hứa giúp em được mọi người tin tưởng, tôn trọng. Nếu thường xuyên thất hứa, em sẽ dần mất đi sự tin cậy từ bạn bè, thầy cô, người thân.",
        ],
      },
      {
        heading: "3. Cách rèn luyện thói quen giữ lời hứa",
        body: [
          "Trước khi hứa điều gì, em nên suy nghĩ kỹ xem mình có thể thực hiện được không. Nếu vì lý do đặc biệt không thể giữ lời hứa, em cần xin lỗi và giải thích rõ ràng.",
        ],
      },
    ],
    quiz: [
      {
        question: "Giữ lời hứa mang lại điều gì cho em?",
        options: ["Mất niềm tin từ mọi người", "Được mọi người tin tưởng, tôn trọng", "Không có tác dụng gì", "Gây phiền phức"],
        correctIndex: 1,
        explanation: "Giữ lời hứa giúp em xây dựng được sự tin tưởng, tôn trọng từ người khác.",
      },
      {
        question: "Nếu không thể giữ lời hứa vì lý do đặc biệt, em nên làm gì?",
        options: ["Im lặng không nói gì", "Xin lỗi và giải thích rõ ràng", "Đổ lỗi cho người khác", "Tránh mặt người đó"],
        correctIndex: 1,
        explanation: "Xin lỗi và giải thích rõ ràng thể hiện sự trung thực, tôn trọng người khác.",
      },
      {
        question: "Trước khi hứa điều gì, em nên làm gì?",
        options: ["Hứa ngay không cần suy nghĩ", "Suy nghĩ kỹ xem có thể thực hiện được không", "Không cần quan tâm có làm được hay không", "Hứa cho qua chuyện"],
        correctIndex: 1,
        explanation: "Suy nghĩ kỹ trước khi hứa giúp em tránh thất hứa và giữ được sự tin cậy.",
      },
    ],
    funFact: "Bạn có biết? Trong nhiều nền văn hoá, 'lời hứa' và 'chữ tín' được xem là một trong những giá trị đạo đức quan trọng nhất của con người!",
  },

  "dao-duc:3:phong-tranh-tai-nan-thuong-tich": {
    objectives: [
      "Nhận biết một số tình huống có thể gây tai nạn thương tích.",
      "Nêu được cách phòng tránh tai nạn thương tích thường gặp.",
      "Có ý thức cẩn thận, an toàn trong sinh hoạt hàng ngày.",
    ],
    sections: [
      {
        heading: "1. Tai nạn thương tích thường gặp",
        body: [
          "Một số tai nạn thường gặp ở lứa tuổi học sinh: ngã khi chạy nhảy, đứt tay do vật sắc nhọn, bỏng do nước sôi, tai nạn giao thông.",
        ],
      },
      {
        heading: "2. Nguyên nhân gây tai nạn",
        body: [
          "Phần lớn tai nạn xảy ra do sự bất cẩn, nghịch ngợm quá mức, hoặc không tuân thủ các quy tắc an toàn đã được nhắc nhở.",
        ],
      },
      {
        heading: "3. Cách phòng tránh",
        body: [
          "Em cần cẩn thận khi vui chơi, không chạy nhảy ở nơi trơn trượt, không nghịch vật sắc nhọn hay nguồn điện, và luôn tuân thủ hướng dẫn an toàn của người lớn.",
        ],
      },
    ],
    quiz: [
      {
        question: "Nguyên nhân chính gây ra nhiều tai nạn thương tích ở học sinh là gì?",
        options: ["Học tập chăm chỉ", "Sự bất cẩn, nghịch ngợm quá mức", "Ngủ đủ giấc", "Ăn uống đầy đủ"],
        correctIndex: 1,
        explanation: "Sự bất cẩn và nghịch ngợm quá mức là nguyên nhân chính gây ra nhiều tai nạn.",
      },
      {
        question: "Hành động nào giúp phòng tránh tai nạn thương tích?",
        options: ["Chạy nhảy ở nơi trơn trượt", "Nghịch vật sắc nhọn", "Tuân thủ hướng dẫn an toàn của người lớn", "Nghịch ổ điện"],
        correctIndex: 2,
        explanation: "Tuân thủ hướng dẫn an toàn giúp phòng tránh nhiều tai nạn đáng tiếc.",
      },
      {
        question: "Khi vui chơi, em nên làm gì để đảm bảo an toàn?",
        options: ["Chơi ở nơi nguy hiểm", "Cẩn thận, chơi đúng khu vực an toàn", "Không cần chú ý gì", "Trêu chọc bạn khi chơi"],
        correctIndex: 1,
        explanation: "Chơi cẩn thận, đúng khu vực an toàn giúp giảm nguy cơ xảy ra tai nạn.",
      },
    ],
    funFact: "Bạn có biết? Đội mũ bảo hiểm đúng cách khi đi xe máy, xe đạp điện có thể giảm nguy cơ chấn thương đầu tới hơn 70%!",
  },

  "dao-duc:3:ung-pho-voi-tinh-huong-bat-an": {
    objectives: [
      "Nhận biết một số tình huống bất an có thể gặp phải.",
      "Nêu được cách ứng phó phù hợp khi gặp tình huống bất an.",
      "Biết tìm kiếm sự giúp đỡ từ người lớn tin cậy khi cần.",
    ],
    sections: [
      {
        heading: "1. Tình huống bất an là gì?",
        body: [
          "Tình huống bất an là những tình huống khiến em cảm thấy lo sợ, không an toàn, ví dụ bị người lạ làm phiền, bị bắt nạt, hoặc đi lạc ở nơi đông người.",
        ],
      },
      {
        heading: "2. Cách ứng phó",
        body: [
          "Khi gặp tình huống bất an, em cần bình tĩnh, tránh xa nguy hiểm, và tìm đến người lớn đáng tin cậy (bố mẹ, thầy cô, chú công an) để được giúp đỡ.",
        ],
      },
      {
        heading: "3. Ghi nhớ số điện thoại khẩn cấp",
        body: [
          "Em nên ghi nhớ số điện thoại của bố mẹ, và các số khẩn cấp như 111 (Tổng đài bảo vệ trẻ em) để có thể gọi khi cần thiết.",
        ],
      },
    ],
    quiz: [
      {
        question: "Khi gặp tình huống bất an, em nên làm gì đầu tiên?",
        options: ["Hoảng loạn không biết làm gì", "Bình tĩnh và tìm người lớn tin cậy giúp đỡ", "Tự giải quyết một mình bằng mọi giá", "Im lặng không nói với ai"],
        correctIndex: 1,
        explanation: "Bình tĩnh và tìm người lớn tin cậy là cách ứng phó an toàn nhất.",
      },
      {
        question: "Tổng đài quốc gia bảo vệ trẻ em có số điện thoại là gì?",
        options: ["111", "112", "113", "115"],
        correctIndex: 0,
        explanation: "111 là số điện thoại của Tổng đài quốc gia bảo vệ trẻ em tại Việt Nam.",
      },
      {
        question: "Ai là người em có thể tìm đến khi gặp tình huống bất an?",
        options: ["Người lạ trên đường", "Bố mẹ, thầy cô, chú công an", "Không cần tìm ai", "Chỉ có thể tự lo"],
        correctIndex: 1,
        explanation: "Bố mẹ, thầy cô, công an là những người lớn đáng tin cậy có thể giúp đỡ em.",
      },
    ],
    funFact: "Bạn có biết? Tổng đài 111 hoạt động 24/24 giờ tất cả các ngày trong tuần để hỗ trợ, bảo vệ trẻ em tại Việt Nam!",
  },

  "dao-duc:3:yeu-quy-va-bao-ve-moi-truong": {
    objectives: [
      "Nhận biết vai trò của môi trường đối với cuộc sống.",
      "Nêu được các hành động bảo vệ môi trường phù hợp với lứa tuổi.",
      "Có ý thức yêu quý, giữ gìn môi trường sống xung quanh.",
    ],
    sections: [
      {
        heading: "1. Vai trò của môi trường",
        body: [
          "Môi trường trong lành cung cấp không khí sạch, nước sạch và là nơi sinh sống của con người cùng muôn loài sinh vật.",
        ],
      },
      {
        heading: "2. Hành động bảo vệ môi trường",
        body: [
          "Em có thể bảo vệ môi trường bằng những việc làm đơn giản: vứt rác đúng nơi quy định, tiết kiệm nước, điện, và trồng thêm cây xanh.",
        ],
      },
      {
        heading: "3. Trách nhiệm của mỗi người",
        body: [
          "Bảo vệ môi trường là trách nhiệm của tất cả mọi người, không chỉ người lớn. Mỗi hành động nhỏ của em đều góp phần làm cho môi trường tốt đẹp hơn.",
        ],
      },
    ],
    quiz: [
      {
        question: "Hành động nào giúp bảo vệ môi trường?",
        options: ["Xả rác bừa bãi", "Trồng thêm cây xanh", "Lãng phí nước", "Chặt phá rừng"],
        correctIndex: 1,
        explanation: "Trồng thêm cây xanh giúp cải thiện và bảo vệ môi trường sống.",
      },
      {
        question: "Vì sao cần bảo vệ môi trường?",
        options: [
          "Vì môi trường không quan trọng",
          "Vì môi trường cung cấp không khí, nước sạch cho sự sống",
          "Không có lý do gì",
          "Chỉ để làm đẹp",
        ],
        correctIndex: 1,
        explanation: "Môi trường trong lành rất quan trọng, cung cấp điều kiện sống cho con người và sinh vật.",
      },
      {
        question: "Bảo vệ môi trường là trách nhiệm của ai?",
        options: ["Chỉ của người lớn", "Chỉ của các nhà khoa học", "Của tất cả mọi người", "Không phải trách nhiệm của ai"],
        correctIndex: 2,
        explanation: "Bảo vệ môi trường là trách nhiệm chung của tất cả mọi người, kể cả trẻ em.",
      },
    ],
    funFact: "Bạn có biết? Một chiếc túi ni lông có thể mất tới 500-1000 năm mới phân huỷ hoàn toàn trong môi trường tự nhiên!",
  },

  "dao-duc:3:tich-cuc-hoan-thanh-nhiem-vu": {
    objectives: [
      "Hiểu ý nghĩa của việc tích cực hoàn thành nhiệm vụ được giao.",
      "Nhận biết biểu hiện của tinh thần trách nhiệm.",
      "Rèn luyện thói quen hoàn thành tốt nhiệm vụ của mình.",
    ],
    sections: [
      {
        heading: "1. Nhiệm vụ được giao là gì?",
        body: [
          "Nhiệm vụ có thể là bài tập về nhà, việc trực nhật lớp, hoặc công việc nhà mà bố mẹ giao cho em thực hiện.",
        ],
      },
      {
        heading: "2. Biểu hiện tích cực hoàn thành nhiệm vụ",
        body: [
          "Người có tinh thần trách nhiệm sẽ hoàn thành nhiệm vụ đúng thời hạn, làm việc cẩn thận, và không đùn đẩy công việc cho người khác.",
        ],
      },
      {
        heading: "3. Lợi ích của tinh thần trách nhiệm",
        body: [
          "Hoàn thành tốt nhiệm vụ giúp em rèn luyện tính kỷ luật, được mọi người tin tưởng và tạo nền tảng tốt cho tương lai.",
        ],
      },
    ],
    quiz: [
      {
        question: "Biểu hiện nào thể hiện tinh thần trách nhiệm với nhiệm vụ được giao?",
        options: ["Đùn đẩy công việc cho người khác", "Hoàn thành đúng thời hạn, cẩn thận", "Làm qua loa cho xong", "Bỏ dở giữa chừng"],
        correctIndex: 1,
        explanation: "Hoàn thành đúng thời hạn và cẩn thận là biểu hiện của tinh thần trách nhiệm.",
      },
      {
        question: "Khi được giao nhiệm vụ trực nhật lớp, em nên làm gì?",
        options: ["Nhờ bạn làm hộ", "Tự giác hoàn thành công việc được giao", "Bỏ qua không làm", "Làm không cẩn thận"],
        correctIndex: 1,
        explanation: "Tự giác hoàn thành công việc thể hiện tinh thần trách nhiệm của bản thân.",
      },
      {
        question: "Tích cực hoàn thành nhiệm vụ mang lại lợi ích gì?",
        options: ["Không có lợi ích gì", "Rèn luyện tính kỷ luật, được tin tưởng", "Chỉ tốn thời gian", "Gây thêm áp lực không cần thiết"],
        correctIndex: 1,
        explanation: "Tích cực hoàn thành nhiệm vụ giúp rèn luyện tính kỷ luật và tạo sự tin tưởng từ người khác.",
      },
    ],
    funFact: "Bạn có biết? Nhiều nghiên cứu cho thấy trẻ em được giao việc nhà phù hợp từ nhỏ thường có tinh thần trách nhiệm cao hơn khi trưởng thành!",
  },

  "dao-duc:3:ton-trong-nguoi-khuyet-tat": {
    objectives: [
      "Hiểu được hoàn cảnh và khó khăn của người khuyết tật.",
      "Nêu được thái độ, hành động đúng đắn với người khuyết tật.",
      "Thể hiện sự tôn trọng, cảm thông với người khuyết tật.",
    ],
    sections: [
      {
        heading: "1. Người khuyết tật gặp khó khăn gì?",
        body: [
          "Người khuyết tật có thể gặp khó khăn trong việc đi lại, nhìn, nghe, hoặc giao tiếp, nhưng họ vẫn có thể học tập, làm việc và đóng góp cho xã hội.",
        ],
      },
      {
        heading: "2. Thái độ đúng đắn với người khuyết tật",
        body: [
          "Em cần tôn trọng, không trêu chọc, kỳ thị hay xa lánh người khuyết tật. Thay vào đó, hãy đối xử với họ bình đẳng như với mọi người khác.",
        ],
      },
      {
        heading: "3. Hành động giúp đỡ phù hợp",
        body: [
          "Khi cần thiết, em có thể giúp đỡ người khuyết tật một cách tế nhị, ví dụ nhường chỗ ngồi, giúp mở cửa, nhưng cũng nên tôn trọng nếu họ muốn tự làm.",
        ],
      },
    ],
    quiz: [
      {
        question: "Thái độ nào đúng đắn khi gặp người khuyết tật?",
        options: ["Trêu chọc, kỳ thị", "Tôn trọng, đối xử bình đẳng", "Xa lánh, tránh né", "Thương hại quá mức khiến họ khó chịu"],
        correctIndex: 1,
        explanation: "Tôn trọng và đối xử bình đẳng là thái độ đúng đắn với người khuyết tật.",
      },
      {
        question: "Người khuyết tật có thể làm được điều gì?",
        options: ["Không thể làm gì cả", "Vẫn có thể học tập, làm việc, đóng góp cho xã hội", "Chỉ có thể ở nhà", "Không cần được tôn trọng"],
        correctIndex: 1,
        explanation: "Người khuyết tật vẫn có khả năng học tập, làm việc và đóng góp cho xã hội.",
      },
      {
        question: "Khi giúp đỡ người khuyết tật, em nên làm như thế nào?",
        options: ["Giúp một cách tế nhị, tôn trọng ý muốn của họ", "Ép buộc phải nhận sự giúp đỡ", "Không cần quan tâm", "Chế giễu khi họ gặp khó khăn"],
        correctIndex: 0,
        explanation: "Giúp đỡ tế nhị và tôn trọng ý muốn của người khuyết tật thể hiện sự văn minh, lịch sự.",
      },
    ],
    funFact: "Bạn có biết? Nhiều vận động viên khuyết tật đã đạt thành tích xuất sắc tại Paralympic — đại hội thể thao dành cho người khuyết tật lớn nhất thế giới!",
  },

  "dao-duc:3:chia-se-voi-ban-co-hoan-canh-kho-khan": {
    objectives: [
      "Nhận biết hoàn cảnh khó khăn của một số bạn bè xung quanh.",
      "Nêu được ý nghĩa của việc chia sẻ, giúp đỡ bạn bè.",
      "Có hành động cụ thể chia sẻ với bạn có hoàn cảnh khó khăn.",
    ],
    sections: [
      {
        heading: "1. Hoàn cảnh khó khăn là gì?",
        body: [
          "Một số bạn có thể gặp hoàn cảnh khó khăn như gia đình nghèo, thiếu thốn đồ dùng học tập, hoặc gặp chuyện buồn trong gia đình.",
        ],
      },
      {
        heading: "2. Ý nghĩa của việc chia sẻ",
        body: [
          "Chia sẻ, giúp đỡ bạn bè không chỉ giúp bạn vượt qua khó khăn mà còn giúp em rèn luyện lòng nhân ái, biết quan tâm đến người khác.",
        ],
      },
      {
        heading: "3. Hành động chia sẻ phù hợp",
        body: [
          "Em có thể chia sẻ đồ dùng học tập, giúp bạn ôn bài, hoặc đơn giản là an ủi, động viên khi bạn gặp chuyện buồn.",
        ],
      },
    ],
    quiz: [
      {
        question: "Hành động nào thể hiện sự chia sẻ với bạn có hoàn cảnh khó khăn?",
        options: ["Chê bai hoàn cảnh của bạn", "Chia sẻ đồ dùng học tập, giúp đỡ bạn", "Xa lánh không chơi cùng", "Không quan tâm"],
        correctIndex: 1,
        explanation: "Chia sẻ đồ dùng học tập và giúp đỡ bạn là hành động thể hiện sự quan tâm, chia sẻ.",
      },
      {
        question: "Chia sẻ với bạn bè giúp em rèn luyện điều gì?",
        options: ["Lòng nhân ái, biết quan tâm người khác", "Không có tác dụng gì", "Tính ích kỷ", "Sự thờ ơ"],
        correctIndex: 0,
        explanation: "Chia sẻ giúp rèn luyện lòng nhân ái và sự quan tâm đến người khác.",
      },
      {
        question: "Khi bạn buồn vì gia đình gặp khó khăn, em nên làm gì?",
        options: ["Trêu chọc bạn", "An ủi, động viên bạn", "Không quan tâm", "Kể chuyện đó cho người khác"],
        correctIndex: 1,
        explanation: "An ủi, động viên là cách thể hiện sự quan tâm, chia sẻ đúng đắn với bạn.",
      },
    ],
    funFact: "Bạn có biết? Nhiều trường học tổ chức chương trình 'Nuôi heo đất' để quyên góp giúp đỡ các bạn học sinh có hoàn cảnh khó khăn!",
  },

  "dao-duc:3:ung-xu-noi-cong-cong": {
    objectives: [
      "Nêu được một số quy tắc ứng xử nơi công cộng.",
      "Nhận biết hành vi đúng, sai khi ở nơi công cộng.",
      "Thực hiện ứng xử văn minh, lịch sự nơi công cộng.",
    ],
    sections: [
      {
        heading: "1. Nơi công cộng là gì?",
        body: [
          "Nơi công cộng là những địa điểm dùng chung cho nhiều người như công viên, thư viện, rạp chiếu phim, phương tiện giao thông công cộng.",
        ],
      },
      {
        heading: "2. Quy tắc ứng xử nơi công cộng",
        body: [
          "Em cần giữ trật tự, không nói to gây ồn ào, xếp hàng khi cần, không xả rác bừa bãi, và tôn trọng người khác xung quanh.",
        ],
      },
      {
        heading: "3. Lợi ích của ứng xử văn minh",
        body: [
          "Ứng xử văn minh nơi công cộng giúp mọi người cảm thấy thoải mái, tạo môi trường chung sạch đẹp, an toàn cho tất cả mọi người.",
        ],
      },
    ],
    quiz: [
      {
        question: "Hành động nào thể hiện ứng xử văn minh nơi công cộng?",
        options: ["Nói to gây ồn ào", "Xếp hàng trật tự khi cần", "Xả rác bừa bãi", "Chen lấn, xô đẩy"],
        correctIndex: 1,
        explanation: "Xếp hàng trật tự là hành động thể hiện ứng xử văn minh nơi công cộng.",
      },
      {
        question: "Nơi nào sau đây được coi là nơi công cộng?",
        options: ["Phòng ngủ của em", "Công viên", "Phòng riêng trong nhà", "Tủ quần áo"],
        correctIndex: 1,
        explanation: "Công viên là nơi dùng chung cho nhiều người, thuộc nơi công cộng.",
      },
      {
        question: "Ứng xử văn minh nơi công cộng mang lại lợi ích gì?",
        options: ["Không có lợi ích gì", "Tạo môi trường thoải mái, an toàn cho mọi người", "Gây phiền phức", "Chỉ có lợi cho bản thân"],
        correctIndex: 1,
        explanation: "Ứng xử văn minh giúp tạo môi trường chung thoải mái và an toàn cho tất cả mọi người.",
      },
    ],
    funFact: "Bạn có biết? Ở nhiều nước, xếp hàng trật tự nơi công cộng được xem là một trong những phép lịch sự cơ bản nhất mà trẻ em được dạy từ nhỏ!",
  },

  "dao-duc:3:tiet-kiem-thoi-gian": {
    objectives: [
      "Hiểu được giá trị của thời gian.",
      "Nhận biết biểu hiện của việc sử dụng thời gian hợp lý.",
      "Rèn luyện thói quen sắp xếp thời gian khoa học.",
    ],
    sections: [
      {
        heading: "1. Thời gian quý giá như thế nào?",
        body: [
          "Thời gian là thứ không thể lấy lại được khi đã trôi qua. Sử dụng thời gian hợp lý giúp em hoàn thành tốt việc học tập và có thời gian nghỉ ngơi, vui chơi.",
        ],
      },
      {
        heading: "2. Biểu hiện tiết kiệm thời gian",
        body: [
          "Người biết tiết kiệm thời gian thường lập kế hoạch học tập rõ ràng, không trì hoãn công việc, và tập trung khi làm việc.",
        ],
      },
      {
        heading: "3. Cách rèn luyện thói quen tốt",
        body: [
          "Em có thể lập thời gian biểu hàng ngày, ưu tiên việc quan trọng trước, và tránh xao nhãng bởi các thiết bị điện tử khi đang học bài.",
        ],
      },
    ],
    quiz: [
      {
        question: "Vì sao cần tiết kiệm thời gian?",
        options: ["Thời gian có thể lấy lại được", "Thời gian đã trôi qua không thể lấy lại", "Thời gian không quan trọng", "Không có lý do gì"],
        correctIndex: 1,
        explanation: "Thời gian là tài nguyên quý giá, đã trôi qua thì không thể lấy lại.",
      },
      {
        question: "Hành động nào thể hiện việc sử dụng thời gian hợp lý?",
        options: ["Trì hoãn công việc đến phút cuối", "Lập kế hoạch học tập rõ ràng", "Xao nhãng khi đang học bài", "Không có kế hoạch gì"],
        correctIndex: 1,
        explanation: "Lập kế hoạch rõ ràng giúp sử dụng thời gian hiệu quả, hợp lý.",
      },
      {
        question: "Công cụ nào giúp em sắp xếp thời gian khoa học hơn?",
        options: ["Thời gian biểu hàng ngày", "Không cần công cụ gì", "Chơi điện thoại liên tục", "Không lập kế hoạch"],
        correctIndex: 0,
        explanation: "Thời gian biểu giúp em sắp xếp công việc, học tập một cách khoa học, hợp lý.",
      },
    ],
    funFact: "Bạn có biết? Benjamin Franklin, một trong những người sáng lập nước Mỹ, từng nói: 'Thời gian là tiền bạc' — ý nói thời gian rất quý giá!",
  },

  "dao-duc:3:bao-ve-cua-cong": {
    objectives: [
      "Nhận biết tài sản chung (của công) xung quanh mình.",
      "Hiểu được ý nghĩa của việc bảo vệ tài sản chung.",
      "Có hành động cụ thể giữ gìn của công.",
    ],
    sections: [
      {
        heading: "1. Của công là gì?",
        body: [
          "Của công (tài sản chung) là những tài sản thuộc về tập thể, cộng đồng, ví dụ bàn ghế lớp học, cây xanh công viên, ghế đá, đèn đường.",
        ],
      },
      {
        heading: "2. Vì sao cần bảo vệ của công?",
        body: [
          "Của công phục vụ lợi ích chung cho nhiều người, nếu ai cũng có ý thức giữ gìn thì mọi người đều được hưởng lợi lâu dài.",
        ],
      },
      {
        heading: "3. Hành động bảo vệ của công",
        body: [
          "Em không nên vẽ bậy, phá hoại bàn ghế, cây xanh nơi công cộng, và nên nhắc nhở bạn bè cùng có ý thức giữ gìn tài sản chung.",
        ],
      },
    ],
    quiz: [
      {
        question: "Tài sản nào sau đây là của công?",
        options: ["Cặp sách của em", "Ghế đá trong công viên", "Quần áo của em", "Đồ chơi riêng của em"],
        correctIndex: 1,
        explanation: "Ghế đá trong công viên là tài sản chung, phục vụ cho tất cả mọi người.",
      },
      {
        question: "Hành động nào thể hiện ý thức bảo vệ của công?",
        options: ["Vẽ bậy lên tường trường học", "Giữ gìn bàn ghế lớp học sạch đẹp", "Bẻ cành cây công viên", "Phá hoại đồ dùng chung"],
        correctIndex: 1,
        explanation: "Giữ gìn bàn ghế lớp học sạch đẹp thể hiện ý thức bảo vệ tài sản chung.",
      },
      {
        question: "Vì sao cần bảo vệ của công?",
        options: ["Vì của công không quan trọng", "Vì của công phục vụ lợi ích chung cho mọi người", "Không cần bảo vệ", "Chỉ người lớn cần quan tâm"],
        correctIndex: 1,
        explanation: "Của công phục vụ lợi ích chung, cần được mọi người cùng giữ gìn, bảo vệ.",
      },
    ],
    funFact: "Bạn có biết? Ở nhiều thành phố, việc phá hoại tài sản công cộng có thể bị xử phạt hành chính theo quy định của pháp luật!",
  },

  "dao-duc:3:kinh-gia-yeu-tre": {
    objectives: [
      "Hiểu ý nghĩa của truyền thống kính già, yêu trẻ.",
      "Nêu được hành động thể hiện sự kính trọng người già, yêu thương trẻ nhỏ.",
      "Thực hành ứng xử phù hợp với người già và trẻ nhỏ.",
    ],
    sections: [
      {
        heading: "1. Kính già là gì?",
        body: [
          "Kính già là thể hiện sự tôn trọng, lễ phép với người lớn tuổi, ví dụ chào hỏi, nhường chỗ ngồi, giúp đỡ khi cần thiết.",
        ],
      },
      {
        heading: "2. Yêu trẻ là gì?",
        body: [
          "Yêu trẻ là thể hiện sự quan tâm, nhường nhịn, bảo vệ các em nhỏ hơn mình, không bắt nạt hay trêu chọc các em.",
        ],
      },
      {
        heading: "3. Ý nghĩa của truyền thống này",
        body: [
          "'Kính già, yêu trẻ' là truyền thống tốt đẹp của dân tộc Việt Nam, thể hiện đạo lý sống có trước có sau, biết quan tâm đến mọi thế hệ.",
        ],
      },
    ],
    quiz: [
      {
        question: "Hành động nào thể hiện sự kính trọng người già?",
        options: ["Chen lấn không nhường chỗ", "Nhường chỗ ngồi cho người già trên xe buýt", "Nói trống không với người già", "Không chào hỏi"],
        correctIndex: 1,
        explanation: "Nhường chỗ ngồi cho người già thể hiện sự kính trọng, lễ phép.",
      },
      {
        question: "Hành động nào thể hiện tình yêu thương với trẻ nhỏ?",
        options: ["Bắt nạt em nhỏ", "Nhường nhịn, bảo vệ em nhỏ", "Trêu chọc em nhỏ", "Không quan tâm đến em nhỏ"],
        correctIndex: 1,
        explanation: "Nhường nhịn, bảo vệ em nhỏ thể hiện tình yêu thương, quan tâm.",
      },
      {
        question: "'Kính già, yêu trẻ' là gì?",
        options: [
          "Một môn học ở trường",
          "Truyền thống đạo đức tốt đẹp của dân tộc Việt Nam",
          "Một trò chơi dân gian",
          "Không có ý nghĩa gì đặc biệt",
        ],
        correctIndex: 1,
        explanation: "'Kính già, yêu trẻ' là truyền thống đạo đức tốt đẹp, thể hiện sự quan tâm đến mọi thế hệ.",
      },
    ],
    funFact: "Bạn có biết? Ở Việt Nam, ngày 1/10 hàng năm được chọn là Ngày Quốc tế Người cao tuổi, còn ngày 1/6 là Ngày Quốc tế Thiếu nhi!",
  },

  "dao-duc:3:on-tap-cuoi-nam-hoc": {
    objectives: [
      "Hệ thống lại các giá trị đạo đức đã học trong năm.",
      "Ôn tập các kỹ năng ứng xử, phòng tránh nguy hiểm đã học.",
      "Vận dụng những điều đã học vào cuộc sống hàng ngày.",
    ],
    sections: [
      {
        heading: "1. Ôn tập về tình yêu quê hương, đất nước",
        body: [
          "Em đã học về lòng tự hào truyền thống quê hương, tinh thần ham học hỏi và cách ứng xử với hàng xóm, láng giềng.",
        ],
      },
      {
        heading: "2. Ôn tập về kỹ năng tự bảo vệ",
        body: [
          "Em đã học cách phòng tránh tai nạn thương tích và ứng phó với các tình huống bất an trong cuộc sống.",
        ],
      },
      {
        heading: "3. Ôn tập về ứng xử với mọi người",
        body: [
          "Em đã học cách chia sẻ với bạn khó khăn, tôn trọng người khuyết tật, ứng xử văn minh nơi công cộng, và kính già yêu trẻ.",
        ],
      },
    ],
    quiz: [
      {
        question: "Khi gặp tình huống bất an, em nên tìm đến ai để được giúp đỡ?",
        options: ["Người lạ", "Người lớn đáng tin cậy", "Không cần tìm ai", "Tự giải quyết một mình"],
        correctIndex: 1,
        explanation: "Người lớn đáng tin cậy như bố mẹ, thầy cô sẽ giúp em xử lý tình huống an toàn.",
      },
      {
        question: "'Kính già, yêu trẻ' thể hiện điều gì?",
        options: ["Sự ích kỷ", "Truyền thống đạo đức tốt đẹp", "Không có ý nghĩa gì", "Chỉ dành cho người lớn"],
        correctIndex: 1,
        explanation: "Đây là truyền thống đạo đức tốt đẹp của dân tộc Việt Nam.",
      },
      {
        question: "Vì sao cần giữ lời hứa?",
        options: ["Không cần thiết", "Để được mọi người tin tưởng", "Chỉ để cho vui", "Không có lý do gì"],
        correctIndex: 1,
        explanation: "Giữ lời hứa giúp em được mọi người tin tưởng, tôn trọng.",
      },
    ],
    funFact: "Bạn có biết? Những giá trị đạo đức tốt đẹp mà em học được hôm nay sẽ là hành trang quý giá theo em suốt cuộc đời!",
  },

  // ═══════════════════════════════ TIN HỌC — LỚP 3 ═══════════════════════════════
  "tin-hoc:3:go-van-ban-don-gian": {
    objectives: [
      "Làm quen với phần mềm soạn thảo văn bản.",
      "Gõ được một đoạn văn bản ngắn đơn giản.",
      "Biết cách xoá, sửa chữ khi gõ sai.",
    ],
    sections: [
      {
        heading: "1. Mở phần mềm soạn thảo",
        body: [
          "Em nháy đúp chuột vào biểu tượng phần mềm soạn thảo văn bản trên màn hình để mở chương trình, sau đó có thể bắt đầu gõ chữ.",
        ],
      },
      {
        heading: "2. Gõ văn bản",
        body: [
          "Em đặt tay đúng vị trí trên bàn phím và gõ từng chữ cái để tạo thành từ, câu. Nhấn phím cách (Space) để tạo khoảng trắng giữa các từ.",
        ],
      },
      {
        heading: "3. Sửa lỗi khi gõ sai",
        body: [
          "Nếu gõ sai, em dùng phím Backspace để xoá chữ phía trước con trỏ, hoặc phím Delete để xoá chữ phía sau con trỏ.",
        ],
      },
    ],
    quiz: [
      {
        question: "Phím nào dùng để tạo khoảng trắng giữa các từ?",
        options: ["Enter", "Space", "Shift", "Tab"],
        correctIndex: 1,
        explanation: "Phím Space (phím cách) dùng để tạo khoảng trắng giữa các từ.",
      },
      {
        question: "Phím nào dùng để xoá chữ phía trước con trỏ?",
        options: ["Delete", "Backspace", "Enter", "Shift"],
        correctIndex: 1,
        explanation: "Phím Backspace xoá chữ ở phía trước (bên trái) con trỏ soạn thảo.",
      },
      {
        question: "Để mở phần mềm soạn thảo văn bản, em thường làm gì?",
        options: ["Nháy đúp chuột vào biểu tượng phần mềm", "Tắt máy tính", "Rút dây nguồn", "Không cần thao tác gì"],
        correctIndex: 0,
        explanation: "Nháy đúp chuột vào biểu tượng là cách thông thường để mở một phần mềm.",
      },
    ],
    funFact: "Bạn có biết? Bàn phím QWERTY (theo thứ tự chữ cái hàng đầu tiên) đã được sử dụng từ hơn 140 năm trước và vẫn phổ biến đến ngày nay!",
  },

  "tin-hoc:3:tu-the-ngoi-va-an-toan-khi-dung-may-tinh": {
    objectives: [
      "Nêu được tư thế ngồi đúng khi sử dụng máy tính.",
      "Hiểu vì sao cần ngồi đúng tư thế và nghỉ ngơi hợp lý.",
      "Có ý thức sử dụng máy tính an toàn, khoa học.",
    ],
    sections: [
      {
        heading: "1. Tư thế ngồi đúng",
        body: [
          "Em nên ngồi thẳng lưng, hai chân đặt vuông góc trên sàn, mắt cách màn hình khoảng 50cm, màn hình đặt ngang tầm mắt hoặc thấp hơn một chút.",
        ],
      },
      {
        heading: "2. Vì sao cần ngồi đúng tư thế?",
        body: [
          "Ngồi sai tư thế trong thời gian dài có thể gây mỏi mắt, đau lưng, cong vẹo cột sống — ảnh hưởng không tốt đến sức khoẻ đang phát triển của em.",
        ],
      },
      {
        heading: "3. Thời gian sử dụng hợp lý",
        body: [
          "Em nên nghỉ ngơi, cho mắt thư giãn sau mỗi 20-30 phút sử dụng máy tính, và không nên ngồi máy tính quá lâu trong một lần.",
        ],
      },
    ],
    quiz: [
      {
        question: "Khoảng cách hợp lý giữa mắt và màn hình máy tính là bao nhiêu?",
        options: ["10cm", "khoảng 50cm", "2m", "5m"],
        correctIndex: 1,
        explanation: "Khoảng cách hợp lý giữa mắt và màn hình là khoảng 50cm.",
      },
      {
        question: "Ngồi sai tư thế lâu ngày có thể gây ra hậu quả gì?",
        options: ["Không ảnh hưởng gì", "Mỏi mắt, đau lưng, cong vẹo cột sống", "Giúp học giỏi hơn", "Không có tác hại"],
        correctIndex: 1,
        explanation: "Ngồi sai tư thế lâu ngày có thể gây mỏi mắt, đau lưng và cong vẹo cột sống.",
      },
      {
        question: "Sau bao lâu sử dụng máy tính thì em nên cho mắt nghỉ ngơi?",
        options: ["Mỗi 20-30 phút", "Mỗi 5 giờ", "Không cần nghỉ", "Mỗi 10 giây"],
        correctIndex: 0,
        explanation: "Nên cho mắt nghỉ ngơi sau mỗi 20-30 phút sử dụng máy tính liên tục.",
      },
    ],
    funFact: "Bạn có biết? Quy tắc '20-20-20' khuyên rằng cứ sau 20 phút nhìn màn hình, hãy nhìn vật gì đó cách xa 20 feet (khoảng 6m) trong 20 giây để mắt được thư giãn!",
  },

  "tin-hoc:3:cac-dang-thong-tin-chu-am-thanh-hinh-anh": {
    objectives: [
      "Phân biệt được ba dạng thông tin: chữ, âm thanh, hình ảnh.",
      "Nêu được ví dụ cho mỗi dạng thông tin.",
      "Nhận biết máy tính có thể xử lý cả ba dạng thông tin này.",
    ],
    sections: [
      {
        heading: "1. Thông tin dạng chữ",
        body: [
          "Thông tin dạng chữ (văn bản) gồm chữ cái, số, ký hiệu, ví dụ như sách, báo, tin nhắn.",
        ],
      },
      {
        heading: "2. Thông tin dạng âm thanh",
        body: [
          "Thông tin dạng âm thanh gồm tiếng nói, tiếng nhạc, tiếng động, ví dụ bài hát, cuộc trò chuyện, tiếng chuông báo.",
        ],
      },
      {
        heading: "3. Thông tin dạng hình ảnh",
        body: [
          "Thông tin dạng hình ảnh gồm tranh vẽ, ảnh chụp, video, ví dụ ảnh gia đình, video hoạt hình, biển báo giao thông.",
        ],
      },
    ],
    quiz: [
      {
        question: "Một bài hát là thông tin dạng nào?",
        options: ["Chữ viết", "Âm thanh", "Hình ảnh", "Không phải thông tin"],
        correctIndex: 1,
        explanation: "Bài hát truyền tải thông tin qua âm thanh.",
      },
      {
        question: "Một bức ảnh chụp gia đình là thông tin dạng nào?",
        options: ["Chữ viết", "Âm thanh", "Hình ảnh", "Không có dạng nào"],
        correctIndex: 2,
        explanation: "Ảnh chụp truyền tải thông tin qua hình ảnh.",
      },
      {
        question: "Máy tính có thể xử lý được những dạng thông tin nào?",
        options: ["Chỉ chữ viết", "Chỉ hình ảnh", "Cả chữ, âm thanh và hình ảnh", "Không xử lý được dạng nào"],
        correctIndex: 2,
        explanation: "Máy tính hiện đại có thể xử lý đồng thời cả ba dạng thông tin: chữ, âm thanh, hình ảnh.",
      },
    ],
    funFact: "Bạn có biết? Video là sự kết hợp của cả hình ảnh chuyển động và âm thanh, nên video chứa đựng nhiều thông tin cùng lúc!",
  },

  "tin-hoc:3:may-tinh-giup-xu-li-thong-tin-nhu-the-nao": {
    objectives: [
      "Nêu được các bước xử lí thông tin của máy tính.",
      "Phân biệt được thông tin đầu vào và kết quả đầu ra.",
      "Nêu được ví dụ về xử lí thông tin trong đời sống.",
    ],
    sections: [
      {
        heading: "1. Ba bước xử lí thông tin",
        body: [
          "Máy tính xử lí thông tin theo ba bước: nhận thông tin đầu vào (input), xử lí thông tin, và đưa ra kết quả đầu ra (output).",
        ],
      },
      {
        heading: "2. Thông tin đầu vào và đầu ra",
        body: [
          "Ví dụ: em gõ phép tính '5 + 3' vào máy tính (đầu vào), máy tính tính toán (xử lí), và hiển thị kết quả '8' trên màn hình (đầu ra).",
        ],
      },
      {
        heading: "3. Ví dụ khác trong đời sống",
        body: [
          "Khi em gõ tìm kiếm một từ khoá, máy tính xử lí và trả về kết quả tìm kiếm phù hợp — đây cũng là một quá trình xử lí thông tin.",
        ],
      },
    ],
    quiz: [
      {
        question: "Ba bước xử lí thông tin của máy tính là gì?",
        options: [
          "Nhận thông tin - Xử lí - Đưa ra kết quả",
          "Chỉ có một bước duy nhất",
          "Tắt máy - Bật máy - Xử lí",
          "Không có bước nào cụ thể",
        ],
        correctIndex: 0,
        explanation: "Máy tính xử lí thông tin theo ba bước: nhận vào, xử lí, và đưa ra kết quả.",
      },
      {
        question: "Khi em gõ phép tính vào máy tính, đó là bước nào?",
        options: ["Đầu vào (input)", "Xử lí", "Đầu ra (output)", "Không phải bước nào"],
        correctIndex: 0,
        explanation: "Gõ phép tính vào là bước nhận thông tin đầu vào.",
      },
      {
        question: "Kết quả hiển thị trên màn hình sau khi máy tính xử lí được gọi là gì?",
        options: ["Đầu vào", "Đầu ra", "Không có tên gọi", "Dữ liệu thô"],
        correctIndex: 1,
        explanation: "Kết quả hiển thị sau xử lí được gọi là đầu ra (output).",
      },
    ],
    funFact: "Bạn có biết? Các bộ vi xử lý trong máy tính hiện đại có thể thực hiện hàng tỷ phép tính chỉ trong một giây!",
  },

  "tin-hoc:3:lam-quen-phan-mem-soan-thao-van-ban": {
    objectives: [
      "Nhận biết giao diện cơ bản của phần mềm soạn thảo văn bản.",
      "Biết các thành phần chính: thanh công cụ, vùng soạn thảo.",
      "Thực hiện được thao tác mở, đóng phần mềm soạn thảo.",
    ],
    sections: [
      {
        heading: "1. Giao diện phần mềm soạn thảo",
        body: [
          "Phần mềm soạn thảo văn bản thường có: thanh tiêu đề, thanh công cụ (chứa các nút chức năng), và vùng soạn thảo (nơi em gõ chữ).",
        ],
      },
      {
        heading: "2. Thanh công cụ",
        body: [
          "Thanh công cụ chứa các nút giúp em định dạng văn bản như in đậm, in nghiêng, đổi màu chữ, hoặc lưu tài liệu.",
        ],
      },
      {
        heading: "3. Mở và đóng phần mềm",
        body: [
          "Để mở phần mềm, em nháy đúp vào biểu tượng trên màn hình. Để đóng, em nháy vào dấu X ở góc trên bên phải cửa sổ phần mềm.",
        ],
      },
    ],
    quiz: [
      {
        question: "Vùng nào trong phần mềm soạn thảo dùng để gõ chữ?",
        options: ["Thanh tiêu đề", "Vùng soạn thảo", "Thanh công cụ", "Không có vùng nào"],
        correctIndex: 1,
        explanation: "Vùng soạn thảo là nơi em gõ và nhìn thấy nội dung văn bản.",
      },
      {
        question: "Thanh công cụ trong phần mềm soạn thảo dùng để làm gì?",
        options: ["Chỉ để trang trí", "Chứa các nút chức năng như in đậm, lưu tài liệu", "Không có tác dụng gì", "Để tắt máy tính"],
        correctIndex: 1,
        explanation: "Thanh công cụ chứa các nút chức năng giúp định dạng và thao tác với văn bản.",
      },
      {
        question: "Để đóng phần mềm, em thường nháy vào đâu?",
        options: ["Dấu X ở góc trên bên phải", "Giữa màn hình", "Không cần thao tác gì", "Phím Enter"],
        correctIndex: 0,
        explanation: "Nháy vào dấu X ở góc trên bên phải cửa sổ để đóng phần mềm.",
      },
    ],
    funFact: "Bạn có biết? Phần mềm soạn thảo văn bản đầu tiên trên thế giới ra đời vào những năm 1970, trước khi máy tính cá nhân trở nên phổ biến!",
  },

  "tin-hoc:3:go-chu-co-dau-tieng-viet": {
    objectives: [
      "Biết cách gõ chữ tiếng Việt có dấu trên máy tính.",
      "Làm quen với kiểu gõ Telex hoặc VNI cơ bản.",
      "Gõ được một câu tiếng Việt có dấu đơn giản.",
    ],
    sections: [
      {
        heading: "1. Vì sao cần bộ gõ tiếng Việt?",
        body: [
          "Bàn phím máy tính chỉ có các chữ cái không dấu, vì vậy cần cài đặt phần mềm bộ gõ (như Unikey) để gõ được chữ tiếng Việt có dấu.",
        ],
      },
      {
        heading: "2. Kiểu gõ Telex",
        body: [
          "Với kiểu gõ Telex, em gõ thêm chữ cái để tạo dấu: gõ 's' để tạo dấu sắc, 'f' để tạo dấu huyền, 'r' để tạo dấu hỏi, 'x' để tạo dấu ngã, 'j' để tạo dấu nặng.",
        ],
      },
      {
        heading: "3. Ví dụ minh hoạ",
        body: [
          "Để gõ chữ 'á', em gõ 'as'. Để gõ chữ 'à', em gõ 'af'. Để gõ từ 'học', em gõ 'hocj'.",
        ],
      },
    ],
    quiz: [
      {
        question: "Phần mềm nào thường dùng để gõ được chữ tiếng Việt có dấu?",
        options: ["Unikey", "Paint", "Calculator", "Notepad"],
        correctIndex: 0,
        explanation: "Unikey là phần mềm bộ gõ tiếng Việt phổ biến, giúp gõ được chữ có dấu.",
      },
      {
        question: "Trong kiểu gõ Telex, gõ chữ nào để tạo dấu sắc?",
        options: ["f", "s", "r", "x"],
        correctIndex: 1,
        explanation: "Gõ 's' để tạo dấu sắc trong kiểu gõ Telex.",
      },
      {
        question: "Để gõ từ 'học' theo kiểu Telex, em gõ như thế nào?",
        options: ["hocj", "hocs", "hocf", "hocx"],
        correctIndex: 0,
        explanation: "Gõ 'hocj' sẽ cho ra chữ 'học' (j tạo dấu nặng).",
      },
    ],
    funFact: "Bạn có biết? Kiểu gõ Telex được đặt tên theo hệ thống máy telex (máy điện báo chữ) được dùng để gõ tiếng Việt từ giữa thế kỷ 20!",
  },

  "tin-hoc:3:dinh-dang-chu-dam-chu-nghieng": {
    objectives: [
      "Biết cách định dạng chữ đậm, chữ nghiêng trong văn bản.",
      "Biết cách gạch chân chữ khi cần thiết.",
      "Vận dụng định dạng để làm nổi bật nội dung quan trọng.",
    ],
    sections: [
      {
        heading: "1. Chữ đậm (Bold)",
        body: [
          "Chữ đậm giúp làm nổi bật từ hoặc câu quan trọng. Em bôi đen đoạn chữ cần định dạng rồi nháy vào nút chữ 'B' (Bold) trên thanh công cụ.",
        ],
      },
      {
        heading: "2. Chữ nghiêng (Italic)",
        body: [
          "Chữ nghiêng thường dùng để nhấn mạnh hoặc trích dẫn. Em bôi đen đoạn chữ rồi nháy vào nút chữ 'I' (Italic).",
        ],
      },
      {
        heading: "3. Gạch chân (Underline)",
        body: [
          "Gạch chân dùng để làm nổi bật tiêu đề hoặc từ khoá quan trọng, em nháy vào nút chữ 'U' (Underline) sau khi bôi đen đoạn chữ.",
        ],
      },
    ],
    quiz: [
      {
        question: "Nút nào trên thanh công cụ dùng để in đậm chữ?",
        options: ["B", "I", "U", "X"],
        correctIndex: 0,
        explanation: "Nút 'B' (Bold) dùng để in đậm chữ đã chọn.",
      },
      {
        question: "Trước khi định dạng chữ đậm hoặc nghiêng, em cần làm gì?",
        options: ["Tắt máy tính", "Bôi đen đoạn chữ cần định dạng", "Không cần thao tác gì", "Xoá hết văn bản"],
        correctIndex: 1,
        explanation: "Cần bôi đen (chọn) đoạn chữ trước khi áp dụng định dạng.",
      },
      {
        question: "Chữ nghiêng thường được dùng để làm gì?",
        options: ["Xoá văn bản", "Nhấn mạnh hoặc trích dẫn", "Đổi màu nền", "Không có tác dụng gì"],
        correctIndex: 1,
        explanation: "Chữ nghiêng thường dùng để nhấn mạnh nội dung hoặc trích dẫn.",
      },
    ],
    funFact: "Bạn có biết? Chữ in nghiêng (Italic) có nguồn gốc từ nước Ý (Italy) vào thế kỷ 15, ban đầu được dùng để tiết kiệm không gian in ấn!",
  },

  "tin-hoc:3:chen-hinh-anh-vao-van-ban": {
    objectives: [
      "Biết cách chèn hình ảnh vào văn bản đang soạn thảo.",
      "Biết cách thay đổi kích thước hình ảnh sau khi chèn.",
      "Vận dụng chèn hình ảnh để minh hoạ cho bài viết.",
    ],
    sections: [
      {
        heading: "1. Vì sao cần chèn hình ảnh?",
        body: [
          "Hình ảnh giúp bài viết sinh động, dễ hiểu hơn, ví dụ chèn hình minh hoạ cho một bài văn tả con vật hoặc đồ vật.",
        ],
      },
      {
        heading: "2. Cách chèn hình ảnh",
        body: [
          "Em vào mục 'Chèn' (Insert) trên thanh công cụ, chọn 'Hình ảnh' (Picture), sau đó chọn hình ảnh từ máy tính để chèn vào vị trí con trỏ đang đặt.",
        ],
      },
      {
        heading: "3. Điều chỉnh kích thước hình ảnh",
        body: [
          "Sau khi chèn, em có thể kéo vào góc của hình ảnh để phóng to hoặc thu nhỏ sao cho phù hợp với văn bản.",
        ],
      },
    ],
    quiz: [
      {
        question: "Để chèn hình ảnh vào văn bản, em vào mục nào trên thanh công cụ?",
        options: ["Chèn (Insert)", "Xoá (Delete)", "Lưu (Save)", "Thoát (Exit)"],
        correctIndex: 0,
        explanation: "Mục 'Chèn' (Insert) chứa chức năng chèn hình ảnh vào văn bản.",
      },
      {
        question: "Sau khi chèn hình ảnh, em có thể làm gì với hình ảnh đó?",
        options: ["Không thể thay đổi gì", "Thay đổi kích thước bằng cách kéo góc hình", "Chỉ có thể xoá", "Không thể di chuyển"],
        correctIndex: 1,
        explanation: "Em có thể kéo góc hình ảnh để phóng to hoặc thu nhỏ theo ý muốn.",
      },
      {
        question: "Chèn hình ảnh vào văn bản mang lại lợi ích gì?",
        options: ["Không có lợi ích gì", "Giúp bài viết sinh động, dễ hiểu hơn", "Làm bài viết khó đọc hơn", "Không liên quan đến nội dung"],
        correctIndex: 1,
        explanation: "Hình ảnh minh hoạ giúp bài viết trở nên sinh động và dễ hiểu hơn.",
      },
    ],
    funFact: "Bạn có biết? Câu nói 'một bức tranh đáng giá ngàn lời nói' thể hiện rằng hình ảnh đôi khi truyền tải thông tin hiệu quả hơn cả chữ viết!",
  },

  "tin-hoc:3:luu-va-mo-lai-tep-van-ban": {
    objectives: [
      "Biết cách lưu tệp văn bản sau khi soạn thảo.",
      "Biết cách mở lại tệp văn bản đã lưu.",
      "Hiểu tầm quan trọng của việc lưu tệp thường xuyên.",
    ],
    sections: [
      {
        heading: "1. Vì sao cần lưu tệp?",
        body: [
          "Nếu không lưu, nội dung em soạn thảo có thể bị mất khi tắt máy hoặc mất điện. Lưu tệp giúp em giữ lại nội dung để sử dụng sau này.",
        ],
      },
      {
        heading: "2. Cách lưu tệp",
        body: [
          "Em vào mục 'Tệp' (File), chọn 'Lưu' (Save), đặt tên cho tệp và chọn nơi lưu trữ, sau đó nháy 'Lưu' để hoàn tất.",
        ],
      },
      {
        heading: "3. Cách mở lại tệp đã lưu",
        body: [
          "Em vào mục 'Tệp', chọn 'Mở' (Open), tìm đến nơi đã lưu tệp trước đó và nháy đúp vào tên tệp để mở lại.",
        ],
      },
    ],
    quiz: [
      {
        question: "Điều gì có thể xảy ra nếu em không lưu tệp văn bản?",
        options: ["Không có gì xảy ra", "Nội dung có thể bị mất", "Máy tính sẽ tự lưu mãi mãi", "Tệp sẽ tự động in ra"],
        correctIndex: 1,
        explanation: "Nếu không lưu, nội dung có thể bị mất khi tắt máy hoặc gặp sự cố.",
      },
      {
        question: "Để lưu tệp văn bản, em vào mục nào?",
        options: ["Tệp (File) > Lưu (Save)", "Xem (View)", "Trợ giúp (Help)", "Không cần vào mục nào"],
        correctIndex: 0,
        explanation: "Vào mục 'Tệp' rồi chọn 'Lưu' để lưu văn bản.",
      },
      {
        question: "Để mở lại một tệp đã lưu trước đó, em làm gì?",
        options: ["Vào Tệp > Mở, tìm và nháy đúp vào tên tệp", "Xoá máy tính đi", "Không thể mở lại", "Gõ lại toàn bộ nội dung"],
        correctIndex: 0,
        explanation: "Vào mục 'Tệp' chọn 'Mở' rồi tìm đến tệp đã lưu để mở lại.",
      },
    ],
    funFact: "Bạn có biết? Nhiều phần mềm hiện đại có tính năng 'tự động lưu' (auto-save) giúp giảm nguy cơ mất dữ liệu khi quên lưu tệp!",
  },

  "tin-hoc:3:nhan-biet-thong-tin-tren-internet-co-su-ho-tro": {
    objectives: [
      "Làm quen với khái niệm Internet.",
      "Biết cách tìm kiếm thông tin đơn giản có sự hướng dẫn của người lớn.",
      "Có ý thức chỉ truy cập Internet khi có người lớn bên cạnh.",
    ],
    sections: [
      {
        heading: "1. Internet là gì?",
        body: [
          "Internet là một mạng lưới kết nối hàng triệu máy tính trên toàn thế giới, giúp mọi người tìm kiếm thông tin, liên lạc và học tập.",
        ],
      },
      {
        heading: "2. Tìm kiếm thông tin đơn giản",
        body: [
          "Khi cần tìm thông tin, em có thể nhờ người lớn giúp gõ từ khoá vào công cụ tìm kiếm, sau đó cùng xem và chọn lọc thông tin phù hợp.",
        ],
      },
      {
        heading: "3. Sử dụng Internet an toàn",
        body: [
          "Em chỉ nên sử dụng Internet khi có người lớn ở bên cạnh hướng dẫn, không tự ý truy cập các trang web lạ hay trò chuyện với người không quen biết.",
        ],
      },
    ],
    quiz: [
      {
        question: "Internet là gì?",
        options: [
          "Một loại đồ chơi",
          "Mạng lưới kết nối hàng triệu máy tính trên thế giới",
          "Một phần mềm vẽ tranh",
          "Một loại virus máy tính",
        ],
        correctIndex: 1,
        explanation: "Internet là mạng lưới kết nối hàng triệu máy tính, giúp trao đổi thông tin toàn cầu.",
      },
      {
        question: "Khi sử dụng Internet, em nên làm gì?",
        options: [
          "Tự ý truy cập một mình không cần hỏi ai",
          "Có người lớn hướng dẫn, đi cùng",
          "Trò chuyện với người lạ trên mạng",
          "Không cần thận trọng gì cả",
        ],
        correctIndex: 1,
        explanation: "Trẻ em nên sử dụng Internet có sự hướng dẫn, giám sát của người lớn để đảm bảo an toàn.",
      },
      {
        question: "Internet có thể giúp ích gì cho việc học tập?",
        options: ["Không có ích gì", "Tìm kiếm thông tin, tài liệu học tập", "Chỉ dùng để chơi game", "Không liên quan đến học tập"],
        correctIndex: 1,
        explanation: "Internet là nguồn tài nguyên phong phú giúp tìm kiếm thông tin phục vụ học tập.",
      },
    ],
    funFact: "Bạn có biết? Internet ra đời từ những năm 1960 nhưng chỉ thực sự phổ biến rộng rãi trên toàn thế giới từ những năm 1990!",
  },

  "tin-hoc:3:tri-tue-nhan-tao-ai-la-gi": {
    objectives: [
      "Làm quen khái niệm trí tuệ nhân tạo (AI) một cách đơn giản.",
      "Nhận biết một số ứng dụng AI gần gũi trong đời sống.",
      "Có thái độ tò mò, tìm hiểu đúng đắn về công nghệ mới.",
    ],
    sections: [
      {
        heading: "1. Trí tuệ nhân tạo (AI) là gì?",
        body: [
          "Trí tuệ nhân tạo (AI - Artificial Intelligence) là công nghệ giúp máy tính có thể 'học' và thực hiện một số việc giống như con người, ví dụ nhận diện giọng nói, nhận diện khuôn mặt, hay gợi ý video em thích xem.",
        ],
      },
      {
        heading: "2. Ví dụ gần gũi về AI",
        body: [
          "Trợ lý giọng nói trên điện thoại (trả lời khi em hỏi), tính năng gợi ý video trên các ứng dụng xem phim, hay phần mềm dịch ngôn ngữ tự động đều là những ứng dụng của AI trong cuộc sống hàng ngày.",
        ],
      },
      {
        heading: "3. AI không phải là con người",
        body: [
          "Dù AI có thể trả lời câu hỏi hay tạo ra hình ảnh, âm nhạc, AI vẫn chỉ là một chương trình máy tính được lập trình sẵn, không có cảm xúc và suy nghĩ thật sự như con người.",
        ],
      },
    ],
    quiz: [
      {
        question: "AI là viết tắt của cụm từ nào?",
        options: ["Artificial Intelligence", "Automatic Internet", "Amazing Information", "Active Interaction"],
        correctIndex: 0,
        explanation: "AI là viết tắt của 'Artificial Intelligence', nghĩa là trí tuệ nhân tạo.",
      },
      {
        question: "Ví dụ nào sau đây là một ứng dụng của AI?",
        options: ["Trợ lý giọng nói trên điện thoại", "Cái bút chì", "Quyển vở", "Cái bàn học"],
        correctIndex: 0,
        explanation: "Trợ lý giọng nói sử dụng công nghệ AI để hiểu và trả lời câu hỏi của con người.",
      },
      {
        question: "Điều nào sau đây đúng về AI?",
        options: [
          "AI có cảm xúc giống hệt con người",
          "AI là chương trình máy tính được lập trình sẵn, không có cảm xúc thật",
          "AI không thể giúp ích gì cho con người",
          "AI chỉ tồn tại trong phim khoa học viễn tưởng",
        ],
        correctIndex: 1,
        explanation: "AI là chương trình máy tính được lập trình để xử lý thông tin, không có cảm xúc và suy nghĩ như con người thật.",
      },
    ],
    funFact: "Bạn có biết? Từ 'trí tuệ nhân tạo' lần đầu tiên được sử dụng vào năm 1956 tại một hội nghị khoa học ở Mỹ, cách đây gần 70 năm!",
  },

  "tin-hoc:3:bao-ve-mat-khi-dung-thiet-bi-dien-tu": {
    objectives: [
      "Hiểu tác hại của việc sử dụng thiết bị điện tử quá nhiều.",
      "Nêu được cách bảo vệ mắt khi dùng máy tính, điện thoại.",
      "Rèn thói quen sử dụng thiết bị điện tử hợp lý, khoa học.",
    ],
    sections: [
      {
        heading: "1. Tác hại khi dùng thiết bị điện tử quá nhiều",
        body: [
          "Nhìn màn hình quá lâu có thể gây mỏi mắt, khô mắt, giảm thị lực, và ảnh hưởng đến giấc ngủ nếu sử dụng thiết bị vào buổi tối.",
        ],
      },
      {
        heading: "2. Cách bảo vệ mắt",
        body: [
          "Em nên giữ khoảng cách hợp lý với màn hình, điều chỉnh độ sáng phù hợp, và cho mắt nghỉ ngơi sau mỗi khoảng thời gian sử dụng.",
        ],
      },
      {
        heading: "3. Thói quen sử dụng hợp lý",
        body: [
          "Em nên giới hạn thời gian sử dụng thiết bị điện tử mỗi ngày, ưu tiên các hoạt động ngoài trời, vui chơi thể thao để mắt và cơ thể được nghỉ ngơi.",
        ],
      },
    ],
    quiz: [
      {
        question: "Nhìn màn hình quá lâu có thể gây ra tác hại gì?",
        options: ["Không có tác hại gì", "Mỏi mắt, giảm thị lực", "Giúp mắt khoẻ hơn", "Không ảnh hưởng đến giấc ngủ"],
        correctIndex: 1,
        explanation: "Nhìn màn hình quá lâu có thể gây mỏi mắt và ảnh hưởng đến thị lực.",
      },
      {
        question: "Để bảo vệ mắt, em nên làm gì khi dùng máy tính?",
        options: ["Ngồi sát màn hình", "Giữ khoảng cách hợp lý và cho mắt nghỉ ngơi", "Dùng thiết bị liên tục không nghỉ", "Tắt hết đèn trong phòng"],
        correctIndex: 1,
        explanation: "Giữ khoảng cách hợp lý và cho mắt nghỉ ngơi định kỳ giúp bảo vệ mắt hiệu quả.",
      },
      {
        question: "Hoạt động nào giúp mắt và cơ thể được nghỉ ngơi sau khi dùng thiết bị điện tử?",
        options: ["Tiếp tục xem thêm phim", "Vui chơi thể thao ngoài trời", "Chơi game thêm", "Đọc truyện trên điện thoại"],
        correctIndex: 1,
        explanation: "Vui chơi thể thao ngoài trời giúp mắt và cơ thể được nghỉ ngơi, thư giãn.",
      },
    ],
    funFact: "Bạn có biết? Các bác sĩ khuyên trẻ em dưới 10 tuổi không nên sử dụng thiết bị điện tử quá 1-2 tiếng mỗi ngày để bảo vệ sức khoẻ mắt!",
  },

  "tin-hoc:3:tro-choi-ren-tu-duy-logic-tren-may-tinh": {
    objectives: [
      "Làm quen với một số trò chơi rèn tư duy logic trên máy tính.",
      "Rèn khả năng quan sát, suy luận qua trò chơi.",
      "Biết cân bằng giữa chơi trò chơi và học tập.",
    ],
    sections: [
      {
        heading: "1. Trò chơi rèn tư duy logic là gì?",
        body: [
          "Đây là các trò chơi yêu cầu người chơi suy nghĩ, quan sát và giải quyết vấn đề, ví dụ xếp hình, tìm điểm khác nhau, hay giải đố mê cung.",
        ],
      },
      {
        heading: "2. Lợi ích của trò chơi tư duy",
        body: [
          "Chơi trò chơi tư duy logic giúp rèn khả năng quan sát, tập trung, suy luận và giải quyết vấn đề một cách sáng tạo.",
        ],
      },
      {
        heading: "3. Chơi có kiểm soát",
        body: [
          "Em nên chơi trò chơi trong thời gian hợp lý, không nên chơi quá lâu ảnh hưởng đến việc học tập và sức khoẻ của mắt.",
        ],
      },
    ],
    quiz: [
      {
        question: "Trò chơi rèn tư duy logic có thể giúp ích điều gì?",
        options: ["Không có lợi ích gì", "Rèn khả năng quan sát, suy luận", "Chỉ gây mất thời gian", "Làm giảm khả năng tập trung"],
        correctIndex: 1,
        explanation: "Trò chơi tư duy logic giúp rèn luyện khả năng quan sát và suy luận.",
      },
      {
        question: "Ví dụ nào là trò chơi rèn tư duy logic?",
        options: ["Xếp hình, giải đố mê cung", "Xem phim hoạt hình", "Nghe nhạc", "Ngủ trưa"],
        correctIndex: 0,
        explanation: "Xếp hình và giải đố mê cung là các trò chơi rèn tư duy logic.",
      },
      {
        question: "Khi chơi trò chơi trên máy tính, em cần lưu ý điều gì?",
        options: ["Chơi thoải mái không giới hạn thời gian", "Chơi có kiểm soát thời gian hợp lý", "Chơi cả ngày không nghỉ", "Không cần quan tâm đến học tập"],
        correctIndex: 1,
        explanation: "Chơi có kiểm soát thời gian giúp cân bằng giữa giải trí và học tập.",
      },
    ],
    funFact: "Bạn có biết? Trò chơi cờ vua được xem là một trong những trò chơi rèn luyện tư duy logic tốt nhất, được nhiều nhà khoa học nghiên cứu về lợi ích trí não!",
  },

  "tin-hoc:3:on-tap-cuoi-nam-hoc": {
    objectives: [
      "Hệ thống lại kiến thức về thông tin và máy tính đã học.",
      "Ôn tập kỹ năng soạn thảo văn bản cơ bản.",
      "Vận dụng kiến thức an toàn khi sử dụng máy tính, Internet.",
    ],
    sections: [
      {
        heading: "1. Ôn tập về thông tin và máy tính",
        body: [
          "Em đã học về các dạng thông tin (chữ, âm thanh, hình ảnh) và cách máy tính xử lí thông tin qua ba bước: nhận vào, xử lí, đưa ra kết quả.",
        ],
      },
      {
        heading: "2. Ôn tập về soạn thảo văn bản",
        body: [
          "Em đã học cách gõ văn bản, gõ chữ có dấu tiếng Việt, định dạng chữ đậm/nghiêng, chèn hình ảnh, và lưu/mở tệp văn bản.",
        ],
      },
      {
        heading: "3. Ôn tập về an toàn khi sử dụng thiết bị",
        body: [
          "Em đã học về tư thế ngồi đúng, cách bảo vệ mắt, và những lưu ý khi sử dụng Internet an toàn có sự hướng dẫn của người lớn.",
        ],
      },
    ],
    quiz: [
      {
        question: "Ba dạng thông tin cơ bản mà em đã học là gì?",
        options: ["Chữ, âm thanh, hình ảnh", "Chỉ có chữ viết", "Chỉ có âm thanh", "Không có dạng nào cụ thể"],
        correctIndex: 0,
        explanation: "Ba dạng thông tin cơ bản là chữ viết, âm thanh và hình ảnh.",
      },
      {
        question: "Phần mềm nào giúp gõ được chữ tiếng Việt có dấu?",
        options: ["Unikey", "Paint", "Calculator", "Không cần phần mềm nào"],
        correctIndex: 0,
        explanation: "Unikey là phần mềm bộ gõ tiếng Việt phổ biến.",
      },
      {
        question: "Khi sử dụng Internet, trẻ em nên làm gì để đảm bảo an toàn?",
        options: ["Tự ý dùng một mình", "Có người lớn hướng dẫn, giám sát", "Không cần thận trọng", "Trò chuyện với người lạ"],
        correctIndex: 1,
        explanation: "Trẻ em nên sử dụng Internet có sự hướng dẫn, giám sát của người lớn.",
      },
    ],
    funFact: "Bạn có biết? Những kỹ năng tin học cơ bản em học hôm nay sẽ là nền tảng quan trọng cho việc học lập trình và công nghệ trong tương lai!",
  },

  // ─────────────── TOÁN — LỚP 3 — bài thực hành ───────────────
  "toan:3:thuc-hanh-on-tap-cac-so-den-1000": practiceContent(
    "Thực hành",
    "Ôn tập các số đến 1000",
    "Hãy nhớ lại cách đọc, viết và so sánh các số có ba chữ số.",
    [
      { question: "Số 726 gồm mấy trăm, mấy chục, mấy đơn vị?", options: ["7 trăm, 2 chục, 6 đơn vị", "2 trăm, 7 chục, 6 đơn vị", "6 trăm, 2 chục, 7 đơn vị", "7 trăm, 6 chục, 2 đơn vị"], correctIndex: 0, explanation: "726 = 700 + 20 + 6." },
      { question: "Số nào lớn hơn: 634 hay 643?", options: ["634", "643", "Bằng nhau", "Không so sánh được"], correctIndex: 1, explanation: "Hàng chục: 3 < 4 nên 643 lớn hơn." },
      { question: "Số liền sau số 799 là số nào?", options: ["798", "800", "810", "789"], correctIndex: 1, explanation: "Số liền sau 799 là 800." },
      { question: "Sắp xếp 410, 140, 401 theo thứ tự giảm dần, số nào đứng đầu?", options: ["410", "140", "401", "Không xác định được"], correctIndex: 0, explanation: "So hàng trăm: 4=4=1, so hàng chục: 1 > 0, vậy 410 lớn nhất." },
    ]
  ),

  "toan:3:luyen-tap-cong-tru-cac-so-trong-pham-vi-1000": practiceContent(
    "Luyện tập",
    "Cộng, trừ các số trong phạm vi 1000",
    "Hãy nhớ lại cách đặt tính và thực hiện phép cộng, trừ có nhớ.",
    [
      { question: "427 + 186 = ?", options: ["603", "613", "623", "593"], correctIndex: 1, explanation: "427 + 186 = 613." },
      { question: "800 - 345 = ?", options: ["445", "455", "465", "545"], correctIndex: 1, explanation: "800 - 345 = 455." },
      { question: "519 + 275 = ?", options: ["784", "794", "804", "774"], correctIndex: 1, explanation: "519 + 275 = 794." },
      { question: "Một cửa hàng có 650kg gạo, đã bán đi 275kg. Hỏi còn lại bao nhiêu ki-lô-gam gạo?", options: ["365kg", "375kg", "385kg", "425kg"], correctIndex: 1, explanation: "650 - 275 = 375kg." },
    ]
  ),

  "toan:3:van-dung-bang-nhan-6-7-8-9": practiceContent(
    "Vận dụng",
    "Bảng nhân 6, 7, 8, 9",
    "Hãy nhớ lại các bảng nhân 6, 7, 8, 9 đã học.",
    [
      { question: "6 × 9 = ?", options: ["45", "54", "56", "63"], correctIndex: 1, explanation: "6 × 9 = 54." },
      { question: "8 × 7 = ?", options: ["54", "56", "64", "48"], correctIndex: 1, explanation: "8 × 7 = 56." },
      { question: "9 × 8 = ?", options: ["63", "72", "81", "64"], correctIndex: 1, explanation: "9 × 8 = 72." },
      { question: "Mỗi túi có 7 viên bi, có 9 túi như vậy. Hỏi có tất cả bao nhiêu viên bi?", options: ["56", "63", "72", "49"], correctIndex: 1, explanation: "9 × 7 = 63 viên bi." },
    ]
  ),

  "toan:3:tro-choi-on-tap-bang-chia-6-7-8-9": practiceContent(
    "Trò chơi ôn tập",
    "Bảng chia 6, 7, 8, 9",
    "Hãy nhớ lại các bảng chia 6, 7, 8, 9 đã học.",
    [
      { question: "72 : 8 = ?", options: ["8", "9", "7", "6"], correctIndex: 1, explanation: "8 × 9 = 72 nên 72 : 8 = 9." },
      { question: "45 : 9 = ?", options: ["4", "5", "6", "9"], correctIndex: 1, explanation: "9 × 5 = 45 nên 45 : 9 = 5." },
      { question: "48 : 6 = ?", options: ["6", "7", "8", "9"], correctIndex: 2, explanation: "6 × 8 = 48 nên 48 : 6 = 8." },
      { question: "Có 63 quyển vở chia đều cho 7 bạn. Mỗi bạn được mấy quyển vở?", options: ["7", "8", "9", "10"], correctIndex: 2, explanation: "63 : 7 = 9 quyển vở." },
    ]
  ),

  "toan:3:thu-thach-nho-nhan-chia-so-co-hai-ba-chu-so": practiceContent(
    "Thử thách nhỏ",
    "Nhân, chia số có hai, ba chữ số",
    "Hãy nhớ lại cách đặt tính nhân, chia số có nhiều chữ số cho số có một chữ số.",
    [
      { question: "132 × 3 = ?", options: ["396", "386", "406", "396"], correctIndex: 0, explanation: "132 × 3 = 396." },
      { question: "168 : 4 = ?", options: ["40", "41", "42", "43"], correctIndex: 2, explanation: "168 : 4 = 42." },
      { question: "214 × 4 = ?", options: ["846", "856", "866", "856"], correctIndex: 1, explanation: "214 × 4 = 856." },
      { question: "Một đội có 324 quả bóng chia đều vào 4 hộp. Mỗi hộp có bao nhiêu quả bóng?", options: ["79", "80", "81", "82"], correctIndex: 2, explanation: "324 : 4 = 81 quả." },
    ]
  ),

  "toan:3:thuc-hanh-goc-vuong-goc-khong-vuong": practiceContent(
    "Thực hành",
    "Góc vuông, góc không vuông",
    "Hãy nhớ lại cách nhận biết góc vuông bằng ê-ke.",
    [
      { question: "Góc lớn hơn góc vuông được gọi là gì?", options: ["Góc nhọn", "Góc tù", "Góc bẹt", "Góc vuông"], correctIndex: 1, explanation: "Góc lớn hơn 90 độ gọi là góc tù." },
      { question: "Hai cạnh của một trang giấy hình chữ nhật tạo với nhau một góc gì?", options: ["Góc nhọn", "Góc tù", "Góc vuông", "Góc bẹt"], correctIndex: 2, explanation: "Các góc của hình chữ nhật đều là góc vuông." },
      { question: "Góc nhỏ hơn góc vuông được gọi là gì?", options: ["Góc nhọn", "Góc tù", "Góc bẹt", "Không có tên gọi"], correctIndex: 0, explanation: "Góc nhỏ hơn 90 độ gọi là góc nhọn." },
      { question: "Dụng cụ nào giúp em kiểm tra một góc có phải góc vuông không?", options: ["Thước dây", "Ê-ke", "Compa", "Bút chì"], correctIndex: 1, explanation: "Ê-ke có sẵn góc vuông để kiểm tra." },
    ]
  ),

  "toan:3:luyen-tap-chu-vi-hinh-chu-nhat-hinh-vuong": practiceContent(
    "Luyện tập",
    "Chu vi hình chữ nhật, hình vuông",
    "Hãy nhớ lại công thức tính chu vi hình chữ nhật và hình vuông.",
    [
      { question: "Hình chữ nhật dài 12cm, rộng 5cm. Chu vi hình đó là bao nhiêu?", options: ["17cm", "34cm", "60cm", "24cm"], correctIndex: 1, explanation: "Chu vi = (12+5) × 2 = 34cm." },
      { question: "Hình vuông cạnh 9cm. Chu vi hình đó là bao nhiêu?", options: ["18cm", "27cm", "36cm", "81cm"], correctIndex: 2, explanation: "Chu vi = 9 × 4 = 36cm." },
      { question: "Một sân chơi hình chữ nhật có chu vi 60m, chiều rộng 10m. Chiều dài sân là bao nhiêu?", options: ["15m", "20m", "25m", "30m"], correctIndex: 1, explanation: "Nửa chu vi = 30m, chiều dài = 30 - 10 = 20m." },
      { question: "Muốn tính chu vi hình vuông, ta làm thế nào?", options: ["Lấy cạnh nhân 2", "Lấy cạnh nhân 3", "Lấy cạnh nhân 4", "Lấy cạnh cộng 4"], correctIndex: 2, explanation: "Chu vi hình vuông = cạnh × 4." },
    ]
  ),

  "toan:3:van-dung-lam-quen-voi-phan-so": practiceContent(
    "Vận dụng",
    "Làm quen với phân số",
    "Hãy nhớ lại cách đọc, viết phân số và ý nghĩa của tử số, mẫu số.",
    [
      { question: "Chia một hình tròn thành 6 phần bằng nhau, tô màu 5 phần. Phân số biểu diễn phần tô màu là gì?", options: ["5/6", "6/5", "1/6", "5/1"], correctIndex: 0, explanation: "Tô màu 5 trong 6 phần bằng nhau, viết là 5/6." },
      { question: "Trong phân số 7/10, số nào là tử số?", options: ["7", "10", "17", "Không có tử số"], correctIndex: 0, explanation: "Số trên gạch ngang (7) là tử số." },
      { question: "Phân số nào biểu diễn 'một phần ba'?", options: ["3/1", "1/2", "1/3", "1/4"], correctIndex: 2, explanation: "'Một phần ba' viết là 1/3." },
      { question: "Mẫu số của một phân số cho biết điều gì?", options: ["Số phần đã lấy", "Số phần bằng nhau mà hình được chia", "Không có ý nghĩa gì", "Luôn luôn bằng 1"], correctIndex: 1, explanation: "Mẫu số cho biết hình được chia thành mấy phần bằng nhau." },
    ]
  ),

  "toan:3:tro-choi-on-tap-cac-so-den-10-000-100-000": practiceContent(
    "Trò chơi ôn tập",
    "Các số đến 10 000, 100 000",
    "Hãy nhớ lại cấu tạo và cách so sánh các số có bốn, năm chữ số.",
    [
      { question: "Số 46 210 gồm mấy chục nghìn?", options: ["4", "6", "2", "46"], correctIndex: 0, explanation: "Chữ số hàng chục nghìn của 46 210 là 4." },
      { question: "So sánh 15 300 và 15 030, số nào lớn hơn?", options: ["15 300", "15 030", "Bằng nhau", "Không so sánh được"], correctIndex: 0, explanation: "Hàng trăm: 3 > 0 nên 15 300 lớn hơn." },
      { question: "Số liền trước số 10 000 là số nào?", options: ["9999", "10 001", "9000", "10 010"], correctIndex: 0, explanation: "Số liền trước 10 000 là 9999." },
      { question: "Số nào sau đây có đúng 4 chữ số?", options: ["999", "1000", "10 000", "99"], correctIndex: 1, explanation: "1000 có 4 chữ số: 1, 0, 0, 0." },
    ]
  ),

  "toan:3:thu-thach-nho-dien-tich-hinh-chu-nhat-hinh-vuong": practiceContent(
    "Thử thách nhỏ",
    "Diện tích hình chữ nhật, hình vuông",
    "Hãy nhớ lại công thức tính diện tích hình chữ nhật và hình vuông.",
    [
      { question: "Hình chữ nhật dài 10cm, rộng 6cm. Diện tích hình đó là bao nhiêu?", options: ["16cm²", "32cm²", "60cm²", "50cm²"], correctIndex: 2, explanation: "Diện tích = 10 × 6 = 60cm²." },
      { question: "Hình vuông cạnh 8cm. Diện tích hình đó là bao nhiêu?", options: ["16cm²", "32cm²", "56cm²", "64cm²"], correctIndex: 3, explanation: "Diện tích = 8 × 8 = 64cm²." },
      { question: "Một mảnh vườn hình vuông có diện tích 49m². Cạnh của mảnh vườn dài bao nhiêu?", options: ["6m", "7m", "8m", "9m"], correctIndex: 1, explanation: "7 × 7 = 49 nên cạnh dài 7m." },
      { question: "Công thức tính diện tích hình chữ nhật là gì?", options: ["(dài + rộng) × 2", "dài × rộng", "cạnh × 4", "cạnh × cạnh"], correctIndex: 1, explanation: "Diện tích hình chữ nhật = chiều dài × chiều rộng." },
    ]
  ),

  "toan:3:thuc-hanh-gam-mi-li-lit": practiceContent(
    "Thực hành",
    "Gam, mi-li-lít",
    "Hãy nhớ lại mối quan hệ giữa ki-lô-gam với gam, và giữa lít với mi-li-lít.",
    [
      { question: "3kg bằng bao nhiêu gam?", options: ["30g", "300g", "3000g", "30 000g"], correctIndex: 2, explanation: "1kg = 1000g nên 3kg = 3000g." },
      { question: "2 lít bằng bao nhiêu mi-li-lít?", options: ["20ml", "200ml", "2000ml", "20 000ml"], correctIndex: 2, explanation: "1 lít = 1000ml nên 2 lít = 2000ml." },
      { question: "Đơn vị nào phù hợp để đo lượng nước trong một cốc nhỏ?", options: ["Ki-lô-gam", "Gam", "Mi-li-lít", "Mét"], correctIndex: 2, explanation: "Mi-li-lít phù hợp để đo lượng nước ít trong cốc nhỏ." },
      { question: "500g + 300g = ?", options: ["700g", "800g", "80g", "8000g"], correctIndex: 1, explanation: "500g + 300g = 800g." },
    ]
  ),

  "toan:3:luyen-tap-bai-toan-lien-quan-den-rut-ve-don-vi": practiceContent(
    "Luyện tập",
    "Bài toán liên quan đến rút về đơn vị",
    "Hãy nhớ lại hai bước giải bài toán rút về đơn vị: tìm giá trị 1 đơn vị rồi tính tiếp.",
    [
      { question: "6 quyển vở giá 30 000 đồng. Hỏi 4 quyển vở giá bao nhiêu?", options: ["15 000 đồng", "18 000 đồng", "20 000 đồng", "24 000 đồng"], correctIndex: 2, explanation: "Giá 1 quyển = 30 000 : 6 = 5000 đồng; giá 4 quyển = 5000 × 4 = 20 000 đồng." },
      { question: "Ở bước thứ hai của bài toán rút về đơn vị, ta thường dùng phép tính gì?", options: ["Phép cộng", "Phép trừ", "Phép nhân", "Không cần tính"], correctIndex: 2, explanation: "Sau khi tìm giá trị 1 đơn vị, ta nhân để tính giá trị cần tìm." },
      { question: "9 hộp bút có tổng cộng 45 chiếc bút. Hỏi 4 hộp có bao nhiêu chiếc bút?", options: ["16", "18", "20", "22"], correctIndex: 2, explanation: "Mỗi hộp có 45:9=5 chiếc; 4 hộp có 5×4=20 chiếc." },
      { question: "Vì sao phương pháp này được gọi là 'rút về đơn vị'?", options: ["Vì luôn cộng số lớn nhất", "Vì tìm giá trị của 1 đơn vị trước", "Vì không cần phép tính nào", "Vì chỉ dùng cho số lẻ"], correctIndex: 1, explanation: "'Rút về đơn vị' nghĩa là tìm giá trị của 1 đơn vị trước khi tính tiếp." },
    ]
  ),

  "toan:3:van-dung-nhan-chia-so-co-bon-nam-chu-so-cho-so-co-mot-chu-so": practiceContent(
    "Vận dụng",
    "Nhân, chia số có bốn, năm chữ số cho số có một chữ số",
    "Hãy nhớ lại cách đặt tính nhân, chia số lớn cho số có một chữ số.",
    [
      { question: "3125 × 2 = ?", options: ["6150", "6250", "6350", "6450"], correctIndex: 1, explanation: "3125 × 2 = 6250." },
      { question: "6996 : 3 = ?", options: ["2232", "2322", "2332", "2432"], correctIndex: 2, explanation: "6996 : 3 = 2332." },
      { question: "1224 × 4 = ?", options: ["4886", "4896", "4906", "4796"], correctIndex: 1, explanation: "1224 × 4 = 4896." },
      { question: "Một kho có 8435kg gạo, chia đều lên 5 xe. Mỗi xe chở bao nhiêu ki-lô-gam?", options: ["1657kg", "1677kg", "1687kg", "1697kg"], correctIndex: 2, explanation: "8435 : 5 = 1687kg." },
    ]
  ),

  "toan:3:tro-choi-on-tap-lam-quen-voi-du-lieu-bang-so-lieu": practiceContent(
    "Trò chơi ôn tập",
    "Làm quen với dữ liệu, bảng số liệu",
    "Hãy nhớ lại cách đọc và nhận xét thông tin từ bảng số liệu.",
    [
      { question: "Trong bảng số liệu, thông tin thường được trình bày theo dạng nào?", options: ["Đoạn văn dài", "Hàng và cột", "Chỉ có hình vẽ", "Chỉ có số duy nhất"], correctIndex: 1, explanation: "Bảng số liệu trình bày thông tin theo hàng và cột." },
      { question: "Để tìm số lớn nhất trong bảng số liệu, em cần làm gì?", options: ["Đoán ngẫu nhiên", "So sánh các số liệu trong bảng", "Không cần làm gì", "Chỉ nhìn dòng đầu tiên"], correctIndex: 1, explanation: "Cần so sánh các số liệu để tìm ra số lớn nhất." },
      { question: "Bảng thống kê số học sinh mỗi lớp giúp ích điều gì?", options: ["Không giúp ích gì", "Dễ so sánh sĩ số giữa các lớp", "Làm bài khó hơn", "Chỉ để trang trí"], correctIndex: 1, explanation: "Bảng thống kê giúp dễ dàng so sánh số liệu giữa các lớp." },
      { question: "Khi đọc một bảng số liệu, điều đầu tiên em nên xem là gì?", options: ["Số liệu cuối bảng", "Tiêu đề bảng", "Màu sắc bảng", "Không cần xem gì"], correctIndex: 1, explanation: "Xem tiêu đề bảng giúp em biết bảng đang nói về nội dung gì." },
    ]
  ),

  "toan:3:thu-thach-nho-on-tap-cuoi-nam-hoc": practiceContent(
    "Thử thách nhỏ",
    "Ôn tập cuối năm học",
    "Hãy nhớ lại các kiến thức Toán lớp 3 trọng tâm đã học trong năm.",
    [
      { question: "Phép tính nào dùng để tìm số lượng mỗi phần khi chia đều?", options: ["Phép cộng", "Phép trừ", "Phép nhân", "Phép chia"], correctIndex: 3, explanation: "Phép chia dùng để tìm số lượng mỗi phần khi chia đều." },
      { question: "Đơn vị nào dùng để đo diện tích mà em đã học?", options: ["cm", "cm²", "kg", "lít"], correctIndex: 1, explanation: "cm² (xăng-ti-mét vuông) là đơn vị đo diện tích." },
      { question: "Số có 5 chữ số lớn nhất là số nào?", options: ["9999", "90000", "99999", "100000"], correctIndex: 2, explanation: "99999 là số có 5 chữ số lớn nhất." },
      { question: "Công thức tính chu vi hình vuông là gì?", options: ["cạnh × 4", "cạnh × cạnh", "cạnh + 4", "cạnh × 2"], correctIndex: 0, explanation: "Chu vi hình vuông = cạnh × 4." },
    ]
  ),

  // ─────────────── TIẾNG VIỆT — LỚP 3 — bài thực hành ───────────────
  "tieng-viet:3:thuc-hanh-tu-loai-danh-tu-dong-tu-tinh-tu": practiceContent(
    "Thực hành",
    "Từ loại: danh từ, động từ, tính từ",
    "Hãy nhớ lại cách phân biệt danh từ, động từ, tính từ.",
    [
      { question: "Từ nào là danh từ trong câu 'Chú mèo nhỏ đang chạy nhanh'?", options: ["chạy", "nhanh", "mèo", "đang"], correctIndex: 2, explanation: "'Mèo' chỉ sự vật, là danh từ." },
      { question: "Từ nào là động từ trong câu 'Bạn Lan hát rất hay'?", options: ["Lan", "hát", "hay", "rất"], correctIndex: 1, explanation: "'Hát' chỉ hoạt động, là động từ." },
      { question: "Từ nào là tính từ trong câu 'Bầu trời hôm nay trong xanh'?", options: ["Bầu trời", "hôm nay", "trong xanh", "Không có"], correctIndex: 2, explanation: "'Trong xanh' chỉ đặc điểm, là tính từ." },
      { question: "Từ 'quyển sách' thuộc loại từ nào?", options: ["Danh từ", "Động từ", "Tính từ", "Không thuộc loại nào"], correctIndex: 0, explanation: "'Quyển sách' chỉ sự vật, là danh từ." },
    ]
  ),

  "tieng-viet:3:luyen-tap-cau-ke-cau-hoi-cau-cam": practiceContent(
    "Luyện tập",
    "Câu kể, câu hỏi, câu cảm",
    "Hãy nhớ lại đặc điểm và dấu câu của từng kiểu câu.",
    [
      { question: "Câu 'Hôm nay là thứ Hai.' là kiểu câu gì?", options: ["Câu kể", "Câu hỏi", "Câu cảm", "Câu khiến"], correctIndex: 0, explanation: "Câu kể dùng để nêu sự việc, kết thúc bằng dấu chấm." },
      { question: "Câu nào là câu hỏi?", options: ["Trời đẹp quá!", "Bạn tên là gì?", "Em đi học.", "Hãy giữ trật tự."], correctIndex: 1, explanation: "Câu hỏi kết thúc bằng dấu chấm hỏi, dùng để hỏi." },
      { question: "Câu 'Ôi, con mèo dễ thương quá!' là kiểu câu gì?", options: ["Câu kể", "Câu hỏi", "Câu cảm", "Câu khiến"], correctIndex: 2, explanation: "Câu bộc lộ cảm xúc, kết thúc bằng dấu chấm than, là câu cảm." },
      { question: "Câu hỏi thường kết thúc bằng dấu gì?", options: ["Dấu chấm", "Dấu chấm hỏi", "Dấu chấm than", "Dấu phẩy"], correctIndex: 1, explanation: "Câu hỏi kết thúc bằng dấu chấm hỏi." },
    ]
  ),

  "tieng-viet:3:van-dung-doc-hieu-truyen-thieu-nhi": practiceContent(
    "Vận dụng",
    "Đọc hiểu truyện thiếu nhi",
    "Hãy nhớ lại cách xác định nhân vật, sự việc chính trong truyện.",
    [
      { question: "Khi đọc một câu chuyện, 'nhân vật' là gì?", options: ["Nơi câu chuyện diễn ra", "Người hoặc con vật trong truyện", "Tên của truyện", "Số trang của truyện"], correctIndex: 1, explanation: "Nhân vật là người hoặc con vật xuất hiện, hành động trong truyện." },
      { question: "Phần nào của câu chuyện thường giới thiệu nhân vật và hoàn cảnh?", options: ["Mở đầu", "Diễn biến", "Kết thúc", "Không có phần nào"], correctIndex: 0, explanation: "Phần mở đầu thường giới thiệu nhân vật và hoàn cảnh câu chuyện." },
      { question: "Bài học rút ra từ câu chuyện thường được gọi là gì?", options: ["Nhân vật chính", "Ý nghĩa câu chuyện", "Tên tác giả", "Số lượng trang"], correctIndex: 1, explanation: "Bài học rút ra được gọi là ý nghĩa của câu chuyện." },
      { question: "Để hiểu rõ câu chuyện, em nên làm gì sau khi đọc xong?", options: ["Quên ngay nội dung", "Suy nghĩ về nhân vật, sự việc và ý nghĩa", "Không cần suy nghĩ gì thêm", "Chỉ nhớ tên truyện"], correctIndex: 1, explanation: "Suy nghĩ về nội dung giúp em hiểu sâu và nhớ lâu câu chuyện." },
    ]
  ),

  "tieng-viet:3:tro-choi-on-tap-doc-hieu-tho-thieu-nhi": practiceContent(
    "Trò chơi ôn tập",
    "Đọc hiểu thơ thiếu nhi",
    "Hãy nhớ lại khái niệm vần thơ và cách đọc diễn cảm.",
    [
      { question: "Các tiếng cuối dòng thơ có âm giống nhau được gọi là gì?", options: ["Nhịp thơ", "Vần thơ", "Đoạn thơ", "Câu thơ"], correctIndex: 1, explanation: "Các tiếng có âm giống nhau ở cuối dòng gọi là vần thơ." },
      { question: "Khi đọc diễn cảm một bài thơ, em cần chú ý điều gì?", options: ["Đọc thật nhanh", "Ngắt nghỉ đúng nhịp, có cảm xúc", "Không cần lên giọng", "Đọc thật nhỏ"], correctIndex: 1, explanation: "Đọc diễn cảm cần ngắt nghỉ đúng nhịp và thể hiện cảm xúc." },
      { question: "Vì sao thơ thường dễ thuộc hơn văn xuôi?", options: ["Vì thơ dài hơn", "Vì thơ có vần, nhịp điệu", "Vì thơ không có nghĩa", "Không có lý do gì"], correctIndex: 1, explanation: "Vần và nhịp điệu giúp thơ dễ đọc, dễ thuộc hơn." },
      { question: "Một bài thơ thường được chia thành các phần nhỏ gọi là gì?", options: ["Đoạn văn", "Khổ thơ", "Chương", "Mục"], correctIndex: 1, explanation: "Các phần nhỏ trong bài thơ được gọi là khổ thơ." },
    ]
  ),

  "tieng-viet:3:thu-thach-nho-viet-thu-cho-nguoi-than": practiceContent(
    "Thử thách nhỏ",
    "Viết thư cho người thân",
    "Hãy nhớ lại thể thức của một bức thư.",
    [
      { question: "Phần đầu bức thư thường ghi những gì?", options: ["Chữ ký người viết", "Địa điểm, ngày tháng và lời chào", "Chỉ có lời chào cuối", "Không cần ghi gì"], correctIndex: 1, explanation: "Đầu thư ghi địa điểm, ngày tháng viết thư và lời chào." },
      { question: "Phần nào thường nằm ở cuối bức thư?", options: ["Địa điểm, ngày tháng", "Lời chào cuối và chữ ký", "Lời chào đầu thư", "Không có phần cuối"], correctIndex: 1, explanation: "Cuối thư thường có lời chào tạm biệt và chữ ký người viết." },
      { question: "Khi viết thư cho ông bà, giọng văn nên như thế nào?", options: ["Kính trọng, chân thành", "Trang trọng như văn bản", "Không cần lễ phép", "Ngắn gọn không cần chào hỏi"], correctIndex: 0, explanation: "Viết thư cho ông bà cần thể hiện sự kính trọng, chân thành." },
      { question: "Nội dung chính của một bức thư thường nói về điều gì?", options: ["Chỉ có lời chào", "Tình hình học tập, sức khoẻ, lời hỏi thăm", "Không cần nội dung gì", "Chỉ có chữ ký"], correctIndex: 1, explanation: "Nội dung chính thường kể về tình hình bản thân và hỏi thăm người nhận." },
    ]
  ),

  "tieng-viet:3:thuc-hanh-ta-do-vat-quen-thuoc": practiceContent(
    "Thực hành",
    "Tả đồ vật quen thuộc",
    "Hãy nhớ lại cách quan sát và miêu tả một đồ vật.",
    [
      { question: "Trước khi tả một đồ vật, em cần làm gì?", options: ["Viết ngay không cần quan sát", "Quan sát kỹ hình dáng, màu sắc, công dụng", "Hỏi bạn bè viết hộ", "Không cần chuẩn bị gì"], correctIndex: 1, explanation: "Quan sát kỹ giúp bài văn miêu tả chính xác, sinh động." },
      { question: "Từ nào là từ ngữ gợi tả phù hợp khi tả một chiếc bàn học?", options: ["Chắc chắn", "Vui vẻ", "Nhanh nhẹn", "Ồn ào"], correctIndex: 0, explanation: "'Chắc chắn' phù hợp để miêu tả đặc điểm của một chiếc bàn." },
      { question: "Đoạn văn tả đồ vật thường có phần nào ở cuối?", options: ["Công thức toán học", "Tình cảm của em với đồ vật", "Không cần phần kết", "Tên một bài hát"], correctIndex: 1, explanation: "Phần cuối thường nêu tình cảm, cảm nghĩ của em về đồ vật." },
      { question: "Khi tả chiếc cặp sách, em nên miêu tả những gì?", options: ["Chỉ tên đồ vật", "Hình dáng, màu sắc, các ngăn và công dụng", "Không cần miêu tả chi tiết", "Chỉ nói giá tiền"], correctIndex: 1, explanation: "Miêu tả đầy đủ hình dáng, màu sắc, công dụng giúp bài văn sinh động." },
    ]
  ),

  "tieng-viet:3:luyen-tap-so-sanh-nhan-hoa-trong-cau-van": practiceContent(
    "Luyện tập",
    "So sánh, nhân hoá trong câu văn",
    "Hãy nhớ lại đặc điểm của biện pháp so sánh và nhân hoá.",
    [
      { question: "Câu nào sử dụng biện pháp so sánh?", options: ["Ông mặt trời cười tươi.", "Nước hồ trong như gương.", "Chú chim đang hót.", "Em đi học."], correctIndex: 1, explanation: "Từ 'như' dùng để so sánh nước hồ với gương." },
      { question: "Câu nào sử dụng biện pháp nhân hoá?", options: ["Hoa hồng đẹp như tranh vẽ.", "Hàng cây đang thì thầm trò chuyện.", "Con đường dài 2km.", "Quyển vở có 50 trang."], correctIndex: 1, explanation: "'Hàng cây thì thầm trò chuyện' gán hành động người cho cây, là nhân hoá." },
      { question: "Từ nào thường xuất hiện trong câu so sánh?", options: ["Như", "Đang", "Rất", "Và"], correctIndex: 0, explanation: "Từ 'như' thường dùng để tạo phép so sánh." },
      { question: "Biện pháp so sánh, nhân hoá thường được dùng trong loại văn bản nào?", options: ["Văn miêu tả, văn kể chuyện", "Chỉ trong toán học", "Chỉ trong danh sách", "Không dùng ở đâu cả"], correctIndex: 0, explanation: "So sánh, nhân hoá thường dùng trong văn miêu tả, kể chuyện để tăng sức gợi hình." },
    ]
  ),

  "tieng-viet:3:van-dung-cau-khien": practiceContent(
    "Vận dụng",
    "Câu khiến",
    "Hãy nhớ lại dấu hiệu nhận biết và cách đặt câu khiến.",
    [
      { question: "Câu nào là câu khiến?", options: ["Trời hôm nay đẹp quá!", "Em hãy dọn dẹp bàn học.", "Bạn đã ăn cơm chưa?", "Hôm nay là thứ Ba."], correctIndex: 1, explanation: "'Em hãy dọn dẹp bàn học' nêu yêu cầu, là câu khiến." },
      { question: "Từ nào thường KHÔNG xuất hiện trong câu khiến?", options: ["Hãy", "Đừng", "Chớ", "Ôi"], correctIndex: 3, explanation: "'Ôi' thường xuất hiện trong câu cảm, không phải câu khiến." },
      { question: "Để câu khiến lịch sự hơn khi nhờ vả, em nên thêm từ nào?", options: ["Ngay lập tức", "Làm ơn", "Bắt buộc", "Cấm"], correctIndex: 1, explanation: "'Làm ơn' giúp câu khiến trở nên lịch sự, nhã nhặn." },
      { question: "Câu khiến dùng để làm gì?", options: ["Kể một sự việc", "Hỏi thông tin", "Nêu yêu cầu, đề nghị", "Bộc lộ cảm xúc"], correctIndex: 2, explanation: "Câu khiến dùng để nêu yêu cầu, đề nghị, mong muốn." },
    ]
  ),

  "tieng-viet:3:tro-choi-on-tap-doc-hieu-van-ban-thong-tin-don-gian": practiceContent(
    "Trò chơi ôn tập",
    "Đọc hiểu văn bản thông tin đơn giản",
    "Hãy nhớ lại cách tìm thông tin chính trong một văn bản thông tin.",
    [
      { question: "Văn bản thông tin khác với truyện kể ở điểm nào?", options: ["Cung cấp kiến thức, sự việc có thật", "Luôn có nhân vật tưởng tượng", "Không có tiêu đề", "Không có sự khác biệt"], correctIndex: 0, explanation: "Văn bản thông tin cung cấp kiến thức, sự việc thực tế." },
      { question: "Ví dụ nào là một văn bản thông tin?", options: ["Truyện cổ tích", "Thông báo lịch nghỉ lễ", "Bài thơ", "Câu chuyện tưởng tượng"], correctIndex: 1, explanation: "Thông báo lịch nghỉ lễ cung cấp thông tin thực tế." },
      { question: "Để tìm thông tin chính, em nên chú ý điều gì?", options: ["Chỉ đọc câu cuối", "Đọc tiêu đề và câu quan trọng đầu đoạn", "Bỏ qua tiêu đề", "Đếm số từ trong bài"], correctIndex: 1, explanation: "Tiêu đề và câu đầu đoạn thường chứa thông tin chính." },
      { question: "Kỹ năng đọc hiểu văn bản thông tin giúp ích gì cho em?", options: ["Không có ích gì", "Đọc hiểu biển báo, hướng dẫn trong đời sống", "Chỉ dùng trong bài kiểm tra", "Không liên quan đến cuộc sống"], correctIndex: 1, explanation: "Kỹ năng này giúp em đọc hiểu thông tin thực tế trong đời sống hàng ngày." },
    ]
  ),

  "tieng-viet:3:thu-thach-nho-ta-cay-coi": practiceContent(
    "Thử thách nhỏ",
    "Tả cây cối",
    "Hãy nhớ lại cách quan sát và miêu tả một loài cây theo trình tự hợp lý.",
    [
      { question: "Khi tả một cây, em nên quan sát những bộ phận nào?", options: ["Chỉ lá cây", "Gốc, thân, cành, lá, hoa, quả", "Chỉ hoa", "Không cần quan sát gì"], correctIndex: 1, explanation: "Quan sát đầy đủ các bộ phận giúp bài văn chi tiết, sinh động." },
      { question: "Cây nào thường gắn với hình ảnh mùa hè, sân trường?", options: ["Cây phượng", "Cây thông", "Cây dừa", "Cây bàng"], correctIndex: 0, explanation: "Cây phượng nở hoa đỏ vào mùa hè, gắn liền với kỷ niệm học trò." },
      { question: "Bài văn tả cây hay nên có thêm yếu tố nào?", options: ["Công thức toán học", "Tình cảm, kỷ niệm của người viết", "Số liệu thống kê", "Không cần thêm gì"], correctIndex: 1, explanation: "Thể hiện tình cảm giúp bài văn chân thực, cảm động hơn." },
      { question: "Em có thể tả cây theo trình tự nào sau đây?", options: ["Chỉ tả ngọn cây", "Từ gốc đến ngọn hoặc theo mùa", "Không cần trình tự", "Chỉ tả một chi tiết bất kỳ"], correctIndex: 1, explanation: "Tả theo trình tự từ gốc đến ngọn hoặc theo mùa giúp bài văn mạch lạc." },
    ]
  ),

  "tieng-viet:3:thuc-hanh-ta-con-vat": practiceContent(
    "Thực hành",
    "Tả con vật",
    "Hãy nhớ lại cách quan sát hình dáng và hoạt động của một con vật.",
    [
      { question: "Khi tả một con vật, em nên chú ý điều gì đầu tiên?", options: ["Chép văn mẫu", "Quan sát kỹ đặc điểm và hoạt động", "Chỉ ghi tên con vật", "Không cần quan sát"], correctIndex: 1, explanation: "Quan sát kỹ giúp em có chi tiết chính xác để miêu tả." },
      { question: "Câu văn nào miêu tả hoạt động của con vật?", options: ["Chú chó có bộ lông vàng óng.", "Chú chó đang vẫy đuôi mừng rỡ.", "Chú chó nặng 5kg.", "Chú chó tên là Lu."], correctIndex: 1, explanation: "'Vẫy đuôi mừng rỡ' là hoạt động của con vật." },
      { question: "Nội dung nào KHÔNG nên có trong bài văn tả con vật?", options: ["Hình dáng con vật", "Hoạt động, thói quen", "Công thức tính diện tích", "Tình cảm với con vật"], correctIndex: 2, explanation: "Công thức tính diện tích thuộc môn Toán, không liên quan." },
      { question: "Để bài văn tả con vật sinh động hơn, em nên làm gì?", options: ["Kể thêm một kỷ niệm với con vật", "Chỉ liệt kê đặc điểm khô khan", "Không cần cảm xúc gì", "Viết càng ngắn càng tốt"], correctIndex: 0, explanation: "Kể một kỷ niệm giúp bài văn thêm sinh động, gần gũi." },
    ]
  ),

  "tieng-viet:3:luyen-tap-ke-lai-mot-cau-chuyen-da-doc-da-nghe": practiceContent(
    "Luyện tập",
    "Kể lại một câu chuyện đã đọc, đã nghe",
    "Hãy nhớ lại trình tự kể chuyện: mở đầu, diễn biến, kết thúc.",
    [
      { question: "Khi kể lại một câu chuyện, em nên kể theo trình tự nào?", options: ["Kể lộn xộn", "Mở đầu, diễn biến, kết thúc", "Chỉ kể phần kết", "Chỉ kể tên nhân vật"], correctIndex: 1, explanation: "Kể theo trình tự giúp người nghe dễ theo dõi." },
      { question: "Khi kể chuyện, em nên dùng lời văn như thế nào?", options: ["Chép nguyên văn trong sách", "Lời văn của mình, tự nhiên", "Không cần rõ ràng", "Chỉ nói một câu"], correctIndex: 1, explanation: "Kể bằng lời văn của mình thể hiện cách hiểu của em." },
      { question: "Điều gì giúp câu chuyện kể lại hấp dẫn hơn?", options: ["Giọng đều đều, không cảm xúc", "Thêm cảm xúc, giọng điệu phù hợp", "Kể càng nhanh càng tốt", "Bỏ bớt chi tiết chính"], correctIndex: 1, explanation: "Thêm cảm xúc giúp câu chuyện sinh động, hấp dẫn hơn." },
      { question: "Phần 'diễn biến' trong câu chuyện là gì?", options: ["Phần giới thiệu nhân vật", "Các sự việc chính xảy ra trong truyện", "Phần kết thúc truyện", "Tên của câu chuyện"], correctIndex: 1, explanation: "Diễn biến là các sự việc chính xảy ra trong câu chuyện." },
    ]
  ),

  "tieng-viet:3:van-dung-viet-doan-van-neu-tinh-cam-cam-xuc": practiceContent(
    "Vận dụng",
    "Viết đoạn văn nêu tình cảm, cảm xúc",
    "Hãy nhớ lại cách viết đoạn văn nêu tình cảm chân thật, cụ thể.",
    [
      { question: "Khi viết đoạn văn nêu tình cảm, em nên viết như thế nào?", options: ["Chép văn mẫu", "Viết chân thật theo cảm nhận của mình", "Viết chung chung không cụ thể", "Không cần nêu lý do"], correctIndex: 1, explanation: "Viết chân thật giúp đoạn văn cảm động, thuyết phục hơn." },
      { question: "Đoạn văn nêu tình cảm nên có phần nào ở cuối?", options: ["Một câu hỏi bất kỳ", "Câu khẳng định lại tình cảm", "Một phép tính", "Không cần câu kết"], correctIndex: 1, explanation: "Câu kết khẳng định lại tình cảm giúp đoạn văn trọn vẹn." },
      { question: "Cách nào giúp đoạn văn nêu tình cảm sinh động hơn?", options: ["Kể một kỷ niệm cụ thể", "Chỉ nói chung chung", "Không cần ví dụ", "Chỉ liệt kê tên đối tượng"], correctIndex: 0, explanation: "Kể một kỷ niệm cụ thể giúp minh hoạ rõ ràng cho tình cảm." },
      { question: "Đoạn văn nêu tình cảm có thể viết về đối tượng nào?", options: ["Chỉ về người thân", "Người thân, bạn bè, đồ vật, cảnh vật quen thuộc", "Chỉ về đồ vật", "Không có đối tượng cụ thể"], correctIndex: 1, explanation: "Có thể viết về nhiều đối tượng gần gũi, gắn bó với em." },
    ]
  ),

  "tieng-viet:3:tro-choi-on-tap-mo-rong-von-tu-theo-chu-diem-que-huong": practiceContent(
    "Trò chơi ôn tập",
    "Mở rộng vốn từ theo chủ điểm quê hương",
    "Hãy nhớ lại các từ ngữ về quê hương, đất nước đã học.",
    [
      { question: "Từ nào sau đây thuộc chủ điểm quê hương?", options: ["Máy tính", "Cánh đồng", "Điện thoại", "Ô tô"], correctIndex: 1, explanation: "'Cánh đồng' là hình ảnh quen thuộc của làng quê." },
      { question: "Từ nào thể hiện tình cảm với đất nước?", options: ["Non sông", "Bàn ghế", "Con số", "Đồ chơi"], correctIndex: 0, explanation: "'Non sông' là từ thể hiện tình cảm với đất nước." },
      { question: "Hình ảnh nào KHÔNG gắn với làng quê Việt Nam truyền thống?", options: ["Luỹ tre", "Dòng sông", "Toà nhà chọc trời", "Cánh đồng lúa"], correctIndex: 2, explanation: "Toà nhà chọc trời là hình ảnh đô thị hiện đại, không phải làng quê truyền thống." },
      { question: "Từ 'Tổ quốc' có nghĩa gần với từ nào sau đây?", options: ["Đất nước", "Cái bàn", "Con vật", "Đồ chơi"], correctIndex: 0, explanation: "'Tổ quốc' có nghĩa gần với 'đất nước'." },
    ]
  ),

  "tieng-viet:3:thu-thach-nho-on-tap-cuoi-nam-hoc": practiceContent(
    "Thử thách nhỏ",
    "Ôn tập cuối năm học",
    "Hãy nhớ lại các kiến thức Tiếng Việt lớp 3 trọng tâm đã học trong năm.",
    [
      { question: "Loại từ nào chỉ hoạt động, trạng thái của sự vật?", options: ["Danh từ", "Động từ", "Tính từ", "Số từ"], correctIndex: 1, explanation: "Động từ là từ chỉ hoạt động, trạng thái." },
      { question: "Kiểu câu nào dùng để bộc lộ cảm xúc?", options: ["Câu kể", "Câu hỏi", "Câu cảm", "Câu khiến"], correctIndex: 2, explanation: "Câu cảm dùng để bộc lộ cảm xúc." },
      { question: "Biện pháp nào gán đặc điểm, hành động của người cho sự vật?", options: ["So sánh", "Nhân hoá", "Điệp từ", "Không có biện pháp nào"], correctIndex: 1, explanation: "Nhân hoá là gán đặc điểm, hành động của người cho sự vật." },
      { question: "Dạng bài tập làm văn nào em đã học trong năm lớp 3?", options: ["Tả đồ vật, tả con vật, tả cây cối", "Viết bài văn nghị luận", "Viết báo cáo khoa học", "Không học tập làm văn"], correctIndex: 0, explanation: "Em đã học tả đồ vật, tả con vật, tả cây cối trong chương trình lớp 3." },
    ]
  ),

  // ─────────────── TIẾNG ANH — LỚP 3 — bài thực hành ───────────────
  "tieng-anh:3:thuc-hanh-hello-chao-hoi-va-gioi-thieu": practiceContent(
    "Thực hành",
    "Hello - Chào hỏi và giới thiệu",
    "Hãy nhớ lại các mẫu câu chào hỏi và giới thiệu bản thân.",
    [
      { question: "Đáp lại câu 'Hello! What is your name?', em nên nói gì?", options: ["Goodbye!", "My name is Nam.", "Thank you.", "Sorry."], correctIndex: 1, explanation: "'My name is Nam.' là câu trả lời phù hợp cho câu hỏi tên." },
      { question: "'Nice to meet you!' có nghĩa là gì?", options: ["Tạm biệt bạn!", "Rất vui được gặp bạn!", "Xin lỗi bạn!", "Cảm ơn bạn!"], correctIndex: 1, explanation: "'Nice to meet you!' nghĩa là 'Rất vui được gặp bạn!'." },
      { question: "Câu nào dùng để chào buổi sáng?", options: ["Good night!", "Good morning!", "Goodbye!", "See you!"], correctIndex: 1, explanation: "'Good morning!' nghĩa là 'Chào buổi sáng!'." },
      { question: "'How are you?' dùng để hỏi điều gì?", options: ["Hỏi tên", "Hỏi tuổi", "Hỏi tình hình sức khoẻ", "Hỏi địa chỉ"], correctIndex: 2, explanation: "'How are you?' dùng để hỏi thăm tình hình, sức khoẻ của người khác." },
    ]
  ),

  "tieng-anh:3:luyen-tap-my-school": practiceContent(
    "Luyện tập",
    "My School",
    "Hãy nhớ lại tên các môn học bằng tiếng Anh.",
    [
      { question: "'Âm nhạc' trong tiếng Anh là gì?", options: ["Art", "Music", "Math", "PE"], correctIndex: 1, explanation: "'Music' nghĩa là môn Âm nhạc." },
      { question: "'Mỹ thuật' trong tiếng Anh là gì?", options: ["Art", "Music", "English", "Math"], correctIndex: 0, explanation: "'Art' nghĩa là môn Mỹ thuật." },
      { question: "Câu 'I study English.' nghĩa là gì?", options: ["Em học Toán", "Em học Tiếng Anh", "Em học Âm nhạc", "Em học Thể dục"], correctIndex: 1, explanation: "'I study English.' nghĩa là 'Em học Tiếng Anh.'." },
      { question: "Câu nào dùng để hỏi môn học yêu thích?", options: ["What is your name?", "What is your favourite subject?", "How old are you?", "Where do you live?"], correctIndex: 1, explanation: "Câu này dùng để hỏi môn học yêu thích của người khác." },
    ]
  ),

  "tieng-anh:3:van-dung-this-is-my-house": practiceContent(
    "Vận dụng",
    "This Is My House",
    "Hãy nhớ lại tên các phòng trong nhà và cấu trúc 'There is/There are'.",
    [
      { question: "'Phòng ngủ' trong tiếng Anh là gì?", options: ["Kitchen", "Bedroom", "Bathroom", "Living room"], correctIndex: 1, explanation: "'Bedroom' nghĩa là phòng ngủ." },
      { question: "Câu nào đúng ngữ pháp?", options: ["There is a sofa.", "There are a sofa.", "There am a sofa.", "There be a sofa."], correctIndex: 0, explanation: "'Sofa' là số ít nên dùng 'There is'." },
      { question: "'Phòng tắm' trong tiếng Anh là gì?", options: ["Bedroom", "Kitchen", "Bathroom", "Garden"], correctIndex: 2, explanation: "'Bathroom' nghĩa là phòng tắm." },
      { question: "Câu 'My house has two bedrooms.' nghĩa là gì?", options: ["Nhà em có hai phòng ngủ", "Nhà em có hai phòng bếp", "Nhà em không có phòng ngủ", "Nhà em có hai tầng"], correctIndex: 0, explanation: "Câu này nghĩa là 'Nhà em có hai phòng ngủ.'." },
    ]
  ),

  "tieng-anh:3:tro-choi-on-tap-in-my-room": practiceContent(
    "Trò chơi ôn tập",
    "In My Room",
    "Hãy nhớ lại từ vựng đồ đạc trong phòng và giới từ chỉ vị trí.",
    [
      { question: "'Bàn học' trong tiếng Anh là gì?", options: ["Bed", "Desk", "Wardrobe", "Lamp"], correctIndex: 1, explanation: "'Desk' nghĩa là bàn học." },
      { question: "Từ nào nghĩa là 'ở trên'?", options: ["On", "Under", "Next to", "In front of"], correctIndex: 0, explanation: "'On' nghĩa là 'ở trên'." },
      { question: "Câu 'The book is on the desk.' nghĩa là gì?", options: ["Quyển sách ở dưới bàn", "Quyển sách ở trên bàn", "Quyển sách trong tủ", "Quyển sách bên cạnh bàn"], correctIndex: 1, explanation: "'On' nghĩa là 'ở trên', nên câu này nghĩa là quyển sách ở trên bàn." },
      { question: "'Cái đèn' trong tiếng Anh là gì?", options: ["Lamp", "Chair", "Bed", "Wardrobe"], correctIndex: 0, explanation: "'Lamp' nghĩa là cái đèn." },
    ]
  ),

  "tieng-anh:3:thu-thach-nho-my-hobbies": practiceContent(
    "Thử thách nhỏ",
    "My Hobbies",
    "Hãy nhớ lại cách nói về sở thích bằng tiếng Anh.",
    [
      { question: "'Bơi lội' trong tiếng Anh là gì?", options: ["Reading", "Swimming", "Singing", "Drawing"], correctIndex: 1, explanation: "'Swimming' nghĩa là bơi lội." },
      { question: "Câu nào đúng ngữ pháp khi nói về sở thích?", options: ["I like read.", "I like reading.", "I likes reading.", "I like to reading."], correctIndex: 1, explanation: "Sau 'like' thường dùng động từ thêm '-ing': 'reading'." },
      { question: "'What do you like doing?' dùng để hỏi điều gì?", options: ["Tên", "Tuổi", "Sở thích", "Gia đình"], correctIndex: 2, explanation: "Câu này dùng để hỏi về sở thích của người khác." },
      { question: "'Vẽ tranh' trong tiếng Anh là gì?", options: ["Singing", "Drawing", "Swimming", "Reading"], correctIndex: 1, explanation: "'Drawing' nghĩa là vẽ tranh." },
    ]
  ),

  "tieng-anh:3:thuc-hanh-weather-and-seasons": practiceContent(
    "Thực hành",
    "Weather and Seasons",
    "Hãy nhớ lại từ vựng về thời tiết và bốn mùa trong năm.",
    [
      { question: "'Trời nắng' trong tiếng Anh là gì?", options: ["Rainy", "Sunny", "Windy", "Cloudy"], correctIndex: 1, explanation: "'Sunny' nghĩa là trời nắng." },
      { question: "Mùa nào có nhiều hoa nở nhất?", options: ["Spring", "Summer", "Autumn", "Winter"], correctIndex: 0, explanation: "'Spring' (mùa xuân) là mùa hoa nở nhiều nhất." },
      { question: "'Có gió' trong tiếng Anh là gì?", options: ["Sunny", "Rainy", "Windy", "Hot"], correctIndex: 2, explanation: "'Windy' nghĩa là có gió." },
      { question: "Câu 'It is cold in winter.' nghĩa là gì?", options: ["Trời nóng vào mùa đông", "Trời lạnh vào mùa đông", "Trời mưa vào mùa đông", "Trời nắng vào mùa đông"], correctIndex: 1, explanation: "'Cold' nghĩa là lạnh." },
    ]
  ),

  "tieng-anh:3:luyen-tap-my-friends": practiceContent(
    "Luyện tập",
    "My Friends",
    "Hãy nhớ lại cách giới thiệu và miêu tả bạn bè.",
    [
      { question: "'Tốt bụng' trong tiếng Anh là gì?", options: ["Funny", "Kind", "Tall", "Short"], correctIndex: 1, explanation: "'Kind' nghĩa là tốt bụng." },
      { question: "Câu 'He is very friendly.' nghĩa là gì?", options: ["Bạn ấy rất cao", "Bạn ấy rất thân thiện", "Bạn ấy rất thấp", "Bạn ấy rất buồn"], correctIndex: 1, explanation: "'Friendly' nghĩa là thân thiện." },
      { question: "Để giới thiệu bạn của mình, em dùng câu nào?", options: ["This is my friend.", "This are my friend.", "This am my friend.", "This be my friend."], correctIndex: 0, explanation: "'This is my friend.' là cách giới thiệu đúng ngữ pháp." },
      { question: "'Hài hước' trong tiếng Anh là gì?", options: ["Kind", "Funny", "Tall", "Friendly"], correctIndex: 1, explanation: "'Funny' nghĩa là hài hước." },
    ]
  ),

  "tieng-anh:3:van-dung-numbers-and-time": practiceContent(
    "Vận dụng",
    "Numbers and Time",
    "Hãy nhớ lại cách đếm số và nói giờ bằng tiếng Anh.",
    [
      { question: "Số 60 trong tiếng Anh đọc là gì?", options: ["Sixteen", "Sixty", "Six", "Sixth"], correctIndex: 1, explanation: "'Sixty' nghĩa là 60." },
      { question: "Câu 'What time is it?' dùng để hỏi điều gì?", options: ["Hỏi tên", "Hỏi giờ", "Hỏi tuổi", "Hỏi địa chỉ"], correctIndex: 1, explanation: "Câu này dùng để hỏi giờ hiện tại." },
      { question: "'It's 9 o'clock.' nghĩa là mấy giờ?", options: ["9 giờ", "9 giờ rưỡi", "9 giờ kém 15", "10 giờ"], correctIndex: 0, explanation: "'9 o'clock' nghĩa là đúng 9 giờ." },
      { question: "Số 80 trong tiếng Anh đọc là gì?", options: ["Eight", "Eighteen", "Eighty", "Eighth"], correctIndex: 2, explanation: "'Eighty' nghĩa là 80." },
    ]
  ),

  "tieng-anh:3:tro-choi-on-tap-my-daily-activities": practiceContent(
    "Trò chơi ôn tập",
    "My Daily Activities",
    "Hãy nhớ lại các từ vựng hoạt động hàng ngày.",
    [
      { question: "'Ăn sáng' trong tiếng Anh là gì?", options: ["Wake up", "Have breakfast", "Go to bed", "Brush teeth"], correctIndex: 1, explanation: "'Have breakfast' nghĩa là ăn sáng." },
      { question: "Câu nào đúng ngữ pháp?", options: ["He go to school at 7.", "He goes to school at 7.", "He going to school at 7.", "He to go to school at 7."], correctIndex: 1, explanation: "Với chủ ngữ 'he', động từ thêm 's': 'goes'." },
      { question: "'Làm bài tập' trong tiếng Anh là gì?", options: ["Do homework", "Go to bed", "Wake up", "Have dinner"], correctIndex: 0, explanation: "'Do homework' nghĩa là làm bài tập." },
      { question: "Hoạt động nào thường diễn ra cuối cùng trong ngày?", options: ["Wake up", "Have breakfast", "Go to school", "Go to bed"], correctIndex: 3, explanation: "'Go to bed' (đi ngủ) thường là hoạt động cuối cùng trong ngày." },
    ]
  ),

  "tieng-anh:3:thu-thach-nho-at-the-zoo": practiceContent(
    "Thử thách nhỏ",
    "At the Zoo",
    "Hãy nhớ lại tên các con vật ở sở thú.",
    [
      { question: "'Con hổ' trong tiếng Anh là gì?", options: ["Lion", "Tiger", "Monkey", "Elephant"], correctIndex: 1, explanation: "'Tiger' nghĩa là con hổ." },
      { question: "'Con khỉ' trong tiếng Anh là gì?", options: ["Elephant", "Giraffe", "Monkey", "Lion"], correctIndex: 2, explanation: "'Monkey' nghĩa là con khỉ." },
      { question: "Câu 'The elephant is very big.' nghĩa là gì?", options: ["Con voi rất nhỏ", "Con voi rất to", "Con voi rất nhanh", "Con voi rất đẹp"], correctIndex: 1, explanation: "'Big' nghĩa là to lớn." },
      { question: "Con vật nào có chiếc cổ dài nhất?", options: ["Lion", "Monkey", "Giraffe", "Tiger"], correctIndex: 2, explanation: "'Giraffe' (hươu cao cổ) có chiếc cổ dài đặc trưng." },
    ]
  ),

  "tieng-anh:3:thuc-hanh-my-favourite-food": practiceContent(
    "Thực hành",
    "My Favourite Food",
    "Hãy nhớ lại từ vựng về các món ăn quen thuộc.",
    [
      { question: "'Cơm' trong tiếng Anh là gì?", options: ["Noodles", "Rice", "Fish", "Chicken"], correctIndex: 1, explanation: "'Rice' nghĩa là cơm." },
      { question: "Câu 'I like fish.' nghĩa là gì?", options: ["Em thích cá", "Em không thích cá", "Em thích cơm", "Em thích gà"], correctIndex: 0, explanation: "'Like' nghĩa là thích." },
      { question: "'Rau' trong tiếng Anh là gì?", options: ["Chicken", "Fish", "Vegetables", "Rice"], correctIndex: 2, explanation: "'Vegetables' nghĩa là rau." },
      { question: "Câu nào dùng để hỏi món ăn yêu thích?", options: ["What is your name?", "What is your favourite food?", "How old are you?", "Where do you live?"], correctIndex: 1, explanation: "Câu này dùng để hỏi món ăn yêu thích của người khác." },
    ]
  ),

  "tieng-anh:3:luyen-tap-in-the-classroom": practiceContent(
    "Luyện tập",
    "In the Classroom",
    "Hãy nhớ lại các mẫu câu giao tiếp thường dùng trong lớp học.",
    [
      { question: "'Đứng lên' trong tiếng Anh là gì?", options: ["Sit down", "Stand up", "Open your book", "Close your book"], correctIndex: 1, explanation: "'Stand up' nghĩa là đứng lên." },
      { question: "Câu 'Can I go to the toilet?' dùng để làm gì?", options: ["Xin phép đi vệ sinh", "Chào tạm biệt", "Hỏi giờ", "Giới thiệu tên"], correctIndex: 0, explanation: "Câu này dùng để xin phép đi vệ sinh một cách lịch sự." },
      { question: "'Mở sách ra' trong tiếng Anh là gì?", options: ["Close your book", "Open your book", "Stand up", "Sit down"], correctIndex: 1, explanation: "'Open your book' nghĩa là mở sách ra." },
      { question: "'Nghe kỹ' trong tiếng Anh là gì?", options: ["Look carefully", "Listen carefully", "Write carefully", "Read carefully"], correctIndex: 1, explanation: "'Listen carefully' nghĩa là nghe kỹ." },
    ]
  ),

  "tieng-anh:3:van-dung-places-in-my-neighbourhood": practiceContent(
    "Vận dụng",
    "Places in My Neighbourhood",
    "Hãy nhớ lại từ vựng về các địa điểm quen thuộc và cách chỉ đường.",
    [
      { question: "'Siêu thị' trong tiếng Anh là gì?", options: ["Park", "Market", "Supermarket", "Hospital"], correctIndex: 2, explanation: "'Supermarket' nghĩa là siêu thị." },
      { question: "'Rẽ phải' trong tiếng Anh là gì?", options: ["Turn left", "Go straight", "Turn right", "Stop"], correctIndex: 2, explanation: "'Turn right' nghĩa là rẽ phải." },
      { question: "'Bệnh viện' trong tiếng Anh là gì?", options: ["Hospital", "Post office", "Market", "Park"], correctIndex: 0, explanation: "'Hospital' nghĩa là bệnh viện." },
      { question: "Câu 'Go straight, then turn left.' nghĩa là gì?", options: ["Đi thẳng rồi rẽ trái", "Rẽ phải rồi dừng lại", "Đi thẳng rồi rẽ phải", "Dừng lại ngay"], correctIndex: 0, explanation: "Câu này nghĩa là 'Đi thẳng rồi rẽ trái.'." },
    ]
  ),

  "tieng-anh:3:tro-choi-on-tap-my-birthday": practiceContent(
    "Trò chơi ôn tập",
    "My Birthday",
    "Hãy nhớ lại tên các tháng trong năm và từ vựng tiệc sinh nhật.",
    [
      { question: "'Tháng 12' trong tiếng Anh là gì?", options: ["October", "November", "December", "September"], correctIndex: 2, explanation: "'December' nghĩa là tháng 12." },
      { question: "'Nến' trong tiếng Anh là gì?", options: ["Cake", "Candles", "Presents", "Balloons"], correctIndex: 1, explanation: "'Candles' nghĩa là nến." },
      { question: "'Quà tặng' trong tiếng Anh là gì?", options: ["Cake", "Candles", "Presents", "Balloons"], correctIndex: 2, explanation: "'Presents' nghĩa là quà tặng." },
      { question: "Lời chúc mừng sinh nhật bằng tiếng Anh là gì?", options: ["Good morning!", "Happy birthday!", "Thank you!", "See you!"], correctIndex: 1, explanation: "'Happy birthday!' là lời chúc mừng sinh nhật." },
    ]
  ),

  "tieng-anh:3:thu-thach-nho-review-my-world": practiceContent(
    "Thử thách nhỏ",
    "Review: My World",
    "Hãy ôn lại toàn bộ từ vựng và mẫu câu đã học trong năm.",
    [
      { question: "Câu nào dùng để giới thiệu bản thân?", options: ["My name is Mai.", "Turn left.", "It's 7 o'clock.", "The cake is sweet."], correctIndex: 0, explanation: "'My name is Mai.' là câu giới thiệu tên bản thân." },
      { question: "Từ nào thuộc chủ đề thời tiết?", options: ["Sunny", "Chicken", "Bedroom", "Monkey"], correctIndex: 0, explanation: "'Sunny' (nắng) thuộc chủ đề thời tiết." },
      { question: "Câu nào dùng để hỏi giờ?", options: ["What is your name?", "What time is it?", "What is your favourite food?", "Where do you live?"], correctIndex: 1, explanation: "'What time is it?' dùng để hỏi giờ hiện tại." },
      { question: "'Trường học' trong tiếng Anh là gì?", options: ["House", "School", "Zoo", "Market"], correctIndex: 1, explanation: "'School' nghĩa là trường học." },
    ]
  ),

  // ─────────────── KHÁM PHÁ — LỚP 3 — bài thực hành ───────────────
  "kham-pha:3:thuc-hanh-ho-hang-noi-ngoai": practiceContent(
    "Thực hành",
    "Họ hàng nội, ngoại",
    "Hãy nhớ lại cách gọi tên các thành viên trong họ hàng nội, ngoại.",
    [
      { question: "Chị gái của mẹ được gọi là gì?", options: ["Cô", "Dì", "Bác gái (nếu lớn hơn mẹ) hoặc dì (nếu nhỏ hơn)", "Mợ"], correctIndex: 2, explanation: "Chị/em gái của mẹ được gọi là bác gái hoặc dì tuỳ theo tuổi so với mẹ." },
      { question: "Anh trai của bố được gọi là gì?", options: ["Chú", "Bác trai", "Cậu", "Dượng"], correctIndex: 1, explanation: "Anh trai của bố được gọi là bác trai." },
      { question: "Vợ của cậu được gọi là gì?", options: ["Mợ", "Thím", "Dì", "Cô"], correctIndex: 0, explanation: "Vợ của cậu được gọi là mợ." },
      { question: "Họ hàng bên ngoại là những người có quan hệ huyết thống với ai?", options: ["Bố", "Mẹ", "Thầy cô", "Hàng xóm"], correctIndex: 1, explanation: "Họ hàng bên ngoại có quan hệ huyết thống với mẹ." },
    ]
  ),

  "kham-pha:3:luyen-tap-phong-tranh-hoa-hoan": practiceContent(
    "Luyện tập",
    "Phòng tránh hoả hoạn",
    "Hãy nhớ lại nguyên nhân và cách phòng tránh hoả hoạn.",
    [
      { question: "Hành động nào có thể gây ra hoả hoạn?", options: ["Tắt bếp sau khi nấu", "Để trẻ em nghịch bật lửa", "Rút phích cắm khi không dùng", "Kiểm tra dây điện định kỳ"], correctIndex: 1, explanation: "Để trẻ em nghịch bật lửa rất nguy hiểm, dễ gây cháy." },
      { question: "Khi phát hiện có khói trong nhà, em nên làm gì đầu tiên?", options: ["Trốn trong tủ quần áo", "Báo ngay cho người lớn", "Tự dập lửa một mình", "Không làm gì cả"], correctIndex: 1, explanation: "Báo ngay cho người lớn giúp xử lý tình huống nhanh chóng, an toàn." },
      { question: "Vật dụng nào có thể giúp dập tắt đám cháy nhỏ?", options: ["Bình chữa cháy mini", "Quạt điện", "Gương soi", "Đồng hồ"], correctIndex: 0, explanation: "Bình chữa cháy mini có thể dập tắt đám cháy nhỏ hiệu quả." },
      { question: "Số điện thoại nào dùng để gọi cứu hoả ở Việt Nam?", options: ["113", "114", "115", "116"], correctIndex: 1, explanation: "114 là số điện thoại gọi lực lượng phòng cháy chữa cháy." },
    ]
  ),

  "kham-pha:3:van-dung-hoat-dong-ket-noi-cong-dong": practiceContent(
    "Vận dụng",
    "Hoạt động kết nối cộng đồng",
    "Hãy nhớ lại ý nghĩa của các hoạt động ngoại khoá ở trường.",
    [
      { question: "Hoạt động nào sau đây là hoạt động kết nối cộng đồng?", options: ["Làm bài kiểm tra", "Quyên góp từ thiện", "Ngủ trưa", "Chép bài"], correctIndex: 1, explanation: "Quyên góp từ thiện là hoạt động giúp đỡ cộng đồng." },
      { question: "Tham gia hoạt động ngoại khoá giúp em rèn luyện điều gì?", options: ["Kỹ năng làm việc nhóm", "Không có lợi ích gì", "Chỉ tốn thời gian", "Không liên quan đến bạn bè"], correctIndex: 0, explanation: "Hoạt động ngoại khoá giúp rèn luyện kỹ năng làm việc nhóm." },
      { question: "Thái độ nào phù hợp khi tham gia hoạt động chung của trường?", options: ["Thờ ơ", "Tích cực tham gia, hợp tác", "Gây mất trật tự", "Từ chối tham gia"], correctIndex: 1, explanation: "Tích cực tham gia và hợp tác giúp hoạt động diễn ra tốt đẹp." },
      { question: "Câu lạc bộ ở trường học thường tổ chức theo chủ đề nào?", options: ["Sở thích, năng khiếu của học sinh", "Không có chủ đề cụ thể", "Chỉ về học thuật", "Chỉ dành cho giáo viên"], correctIndex: 0, explanation: "Câu lạc bộ thường tổ chức theo sở thích, năng khiếu của học sinh." },
    ]
  ),

  "kham-pha:3:tro-choi-on-tap-truyen-thong-nha-truong": practiceContent(
    "Trò chơi ôn tập",
    "Truyền thống nhà trường",
    "Hãy nhớ lại các truyền thống tiêu biểu của nhà trường.",
    [
      { question: "Ngày nào là Ngày Nhà giáo Việt Nam?", options: ["1/6", "20/10", "20/11", "8/3"], correctIndex: 2, explanation: "Ngày 20/11 là Ngày Nhà giáo Việt Nam." },
      { question: "Lễ khai giảng thường diễn ra vào thời điểm nào trong năm?", options: ["Đầu năm học", "Cuối năm học", "Giữa học kỳ 2", "Mùa hè"], correctIndex: 0, explanation: "Lễ khai giảng đánh dấu sự bắt đầu của năm học mới." },
      { question: "Truyền thống nhà trường mang lại ý nghĩa gì?", options: ["Không có ý nghĩa gì", "Giúp học sinh gắn kết, tự hào về trường", "Chỉ tốn thời gian", "Không liên quan đến học sinh"], correctIndex: 1, explanation: "Truyền thống giúp học sinh gắn kết và tự hào về trường." },
      { question: "Em nên làm gì để giữ gìn truyền thống nhà trường?", options: ["Không quan tâm", "Tích cực tham gia và giữ gìn nề nếp", "Phá vỡ quy định", "Chỉ tham gia khi có lợi"], correctIndex: 1, explanation: "Tích cực tham gia và giữ nề nếp thể hiện trách nhiệm với truyền thống." },
    ]
  ),

  "kham-pha:3:thu-thach-nho-hoat-dong-san-xuat": practiceContent(
    "Thử thách nhỏ",
    "Hoạt động sản xuất",
    "Hãy nhớ lại các hoạt động sản xuất phổ biến ở địa phương.",
    [
      { question: "Hoạt động nào sau đây là hoạt động sản xuất?", options: ["Xem phim hoạt hình", "Nuôi trồng thuỷ sản", "Ngủ trưa", "Chơi trò chơi"], correctIndex: 1, explanation: "Nuôi trồng thuỷ sản là một hoạt động sản xuất." },
      { question: "Hoạt động sản xuất mang lại điều gì cho địa phương?", options: ["Không mang lại lợi ích gì", "Của cải vật chất và việc làm", "Chỉ gây ô nhiễm", "Không liên quan đến đời sống"], correctIndex: 1, explanation: "Sản xuất tạo ra của cải vật chất và việc làm." },
      { question: "Việt Nam nổi tiếng xuất khẩu loại nông sản nào hàng đầu thế giới?", options: ["Gạo", "Ô tô", "Máy tính", "Đồ chơi"], correctIndex: 0, explanation: "Việt Nam là một trong những nước xuất khẩu gạo hàng đầu thế giới." },
      { question: "Vì sao em cần trân trọng sản phẩm mình sử dụng hàng ngày?", options: ["Vì tự nhiên mà có", "Vì đó là công sức lao động của nhiều người", "Không cần trân trọng", "Vì sản phẩm không có giá trị"], correctIndex: 1, explanation: "Mỗi sản phẩm đều là kết quả lao động vất vả, cần được trân trọng." },
    ]
  ),

  "kham-pha:3:thuc-hanh-di-tich-lich-su-van-hoa": practiceContent(
    "Thực hành",
    "Di tích lịch sử - văn hoá",
    "Hãy nhớ lại tên một số di tích lịch sử - văn hoá tiêu biểu.",
    [
      { question: "Văn Miếu - Quốc Tử Giám là di tích thuộc thành phố nào?", options: ["TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Huế"], correctIndex: 1, explanation: "Văn Miếu - Quốc Tử Giám nằm ở thủ đô Hà Nội." },
      { question: "Hành động nào KHÔNG nên làm khi tham quan di tích?", options: ["Giữ trật tự", "Viết vẽ bậy lên di tích", "Nghe hướng dẫn viên", "Không xả rác"], correctIndex: 1, explanation: "Viết vẽ bậy làm hư hại di tích." },
      { question: "Di tích lịch sử - văn hoá gắn liền với điều gì?", options: ["Sự kiện lịch sử hoặc giá trị văn hoá quan trọng", "Không có ý nghĩa gì", "Chỉ để trang trí", "Chỉ dành cho khách du lịch nước ngoài"], correctIndex: 0, explanation: "Di tích gắn liền với sự kiện lịch sử hoặc giá trị văn hoá quan trọng." },
      { question: "Hoàng thành Thăng Long được UNESCO công nhận là gì vào năm 2010?", options: ["Kỳ quan thiên nhiên", "Di sản Văn hoá Thế giới", "Công viên quốc gia", "Không được công nhận gì"], correctIndex: 1, explanation: "Hoàng thành Thăng Long được UNESCO công nhận là Di sản Văn hoá Thế giới năm 2010." },
    ]
  ),

  "kham-pha:3:luyen-tap-cac-bo-phan-cua-thuc-vat": practiceContent(
    "Luyện tập",
    "Các bộ phận của thực vật",
    "Hãy nhớ lại chức năng của rễ, thân, lá, hoa, quả.",
    [
      { question: "Bộ phận nào giúp cây hút nước và chất dinh dưỡng từ đất?", options: ["Lá", "Rễ", "Hoa", "Quả"], correctIndex: 1, explanation: "Rễ cây có chức năng hút nước và chất dinh dưỡng từ đất." },
      { question: "Bộ phận nào của cây thực hiện quá trình quang hợp?", options: ["Rễ", "Thân", "Lá", "Hạt"], correctIndex: 2, explanation: "Lá cây là nơi diễn ra quá trình quang hợp." },
      { question: "Quả cây có chức năng gì?", options: ["Hút nước", "Bảo vệ hạt và giúp phát tán hạt", "Quang hợp", "Giữ cây đứng vững"], correctIndex: 1, explanation: "Quả bảo vệ hạt bên trong và giúp phát tán hạt." },
      { question: "Bộ phận nào giúp cây đứng vững và vận chuyển chất dinh dưỡng?", options: ["Thân", "Hoa", "Quả", "Hạt"], correctIndex: 0, explanation: "Thân cây giúp cây đứng vững và vận chuyển nước, chất dinh dưỡng." },
    ]
  ),

  "kham-pha:3:van-dung-bao-ve-moi-truong-song": practiceContent(
    "Vận dụng",
    "Bảo vệ môi trường sống",
    "Hãy nhớ lại các hành động bảo vệ môi trường sống của sinh vật.",
    [
      { question: "Hành động nào gây hại cho môi trường sống của sinh vật?", options: ["Trồng cây xanh", "Chặt phá rừng bừa bãi", "Tiết kiệm nước", "Không xả rác"], correctIndex: 1, explanation: "Chặt phá rừng bừa bãi phá huỷ môi trường sống của nhiều loài." },
      { question: "Em có thể làm gì để bảo vệ môi trường sống?", options: ["Xả rác bừa bãi", "Trồng thêm cây xanh", "Săn bắt động vật hoang dã", "Chặt cây không cần thiết"], correctIndex: 1, explanation: "Trồng thêm cây xanh giúp cải thiện môi trường sống." },
      { question: "Một cây xanh trưởng thành có thể hấp thụ bao nhiêu khí CO2 mỗi năm (ước tính)?", options: ["Khoảng 2kg", "Khoảng 22kg", "Khoảng 220kg", "Không hấp thụ khí gì"], correctIndex: 1, explanation: "Một cây xanh trưởng thành có thể hấp thụ khoảng 22kg CO2 mỗi năm." },
      { question: "Vì sao cần bảo vệ môi trường sống của sinh vật?", options: ["Vì sinh vật không quan trọng", "Để duy trì cân bằng tự nhiên và cuộc sống con người", "Không có lý do gì", "Chỉ để làm đẹp cảnh quan"], correctIndex: 1, explanation: "Bảo vệ môi trường sống giúp duy trì cân bằng tự nhiên." },
    ]
  ),

  "kham-pha:3:tro-choi-on-tap-ngay-ki-niem-cua-gia-dinh": practiceContent(
    "Trò chơi ôn tập",
    "Ngày kỉ niệm của gia đình",
    "Hãy nhớ lại các ngày kỉ niệm quan trọng của gia đình.",
    [
      { question: "Ngày nào sau đây là một ngày kỉ niệm của gia đình?", options: ["Ngày khai giảng", "Ngày sinh nhật của bố", "Ngày Quốc khánh", "Ngày Nhà giáo Việt Nam"], correctIndex: 1, explanation: "Sinh nhật của bố là một ngày kỉ niệm riêng của gia đình." },
      { question: "Ý nghĩa của ngày kỉ niệm gia đình là gì?", options: ["Không có ý nghĩa gì", "Gắn kết tình cảm các thành viên", "Chỉ để nghỉ ngơi", "Chỉ dành cho người lớn"], correctIndex: 1, explanation: "Ngày kỉ niệm giúp gắn kết tình cảm gia đình." },
      { question: "Em có thể làm gì để ngày kỉ niệm gia đình thêm ý nghĩa?", options: ["Không quan tâm", "Tự tay làm thiệp chúc mừng", "Đi chơi một mình", "Không tham gia"], correctIndex: 1, explanation: "Tự tay làm thiệp chúc mừng thể hiện tình cảm chân thành." },
      { question: "Ngày giỗ tổ tiên có ý nghĩa gì với gia đình Việt Nam?", options: ["Không có ý nghĩa gì", "Dịp con cháu tưởng nhớ người đã khuất", "Chỉ là ngày nghỉ", "Không liên quan đến gia đình"], correctIndex: 1, explanation: "Ngày giỗ là dịp để con cháu tưởng nhớ và sum họp." },
    ]
  ),

  "kham-pha:3:thu-thach-nho-ve-sinh-truong-hoc": practiceContent(
    "Thử thách nhỏ",
    "Vệ sinh trường học",
    "Hãy nhớ lại các việc làm giữ vệ sinh trường lớp.",
    [
      { question: "Vì sao cần giữ vệ sinh trường học?", options: ["Không có lý do gì", "Phòng tránh bệnh tật, tạo môi trường học tập tốt", "Chỉ để đẹp mắt", "Không liên quan đến sức khoẻ"], correctIndex: 1, explanation: "Vệ sinh sạch sẽ giúp phòng tránh bệnh tật." },
      { question: "Hành động nào giúp giữ vệ sinh trường lớp?", options: ["Vứt rác bừa bãi", "Bỏ rác đúng nơi quy định", "Vẽ bậy lên tường", "Xô đẩy bàn ghế"], correctIndex: 1, explanation: "Bỏ rác đúng nơi quy định giữ vệ sinh trường lớp." },
      { question: "Rửa tay đúng cách có thể giúp phòng tránh bao nhiêu phần trăm bệnh lây qua đường tiêu hoá (ước tính)?", options: ["Khoảng 10%", "Khoảng 50%", "100%", "Không có tác dụng"], correctIndex: 1, explanation: "Rửa tay đúng cách có thể giúp phòng tránh tới hơn 50% bệnh lây qua đường tiêu hoá." },
      { question: "Giữ vệ sinh trường học là trách nhiệm của ai?", options: ["Chỉ của bác lao công", "Chỉ của thầy cô", "Của tất cả học sinh", "Không phải trách nhiệm của ai"], correctIndex: 2, explanation: "Giữ vệ sinh trường học là trách nhiệm chung của tất cả học sinh." },
    ]
  ),

  "kham-pha:3:thuc-hanh-mot-so-nghe-truyen-thong-o-dia-phuong": practiceContent(
    "Thực hành",
    "Một số nghề truyền thống ở địa phương",
    "Hãy nhớ lại tên một số làng nghề truyền thống nổi tiếng.",
    [
      { question: "Gốm Bát Tràng là làng nghề nổi tiếng ở đâu?", options: ["TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Cần Thơ"], correctIndex: 1, explanation: "Làng gốm Bát Tràng thuộc Hà Nội." },
      { question: "Nghề truyền thống nào liên quan đến vải, lụa?", options: ["Làm gốm", "Dệt lụa", "Đóng thuyền", "Làm mộc"], correctIndex: 1, explanation: "Dệt lụa là nghề truyền thống tạo ra sản phẩm vải lụa." },
      { question: "Tranh Đông Hồ được làm bằng phương pháp nào?", options: ["In bằng máy hiện đại", "In bằng bản khắc gỗ thủ công", "Vẽ bằng bút chì", "Chụp ảnh"], correctIndex: 1, explanation: "Tranh Đông Hồ được in bằng bản khắc gỗ và giấy dó truyền thống." },
      { question: "Vì sao cần giữ gìn nghề truyền thống?", options: ["Không cần thiết", "Bảo tồn văn hoá và tạo việc làm", "Chỉ để trưng bày", "Không có ý nghĩa gì"], correctIndex: 1, explanation: "Giữ gìn nghề truyền thống giúp bảo tồn văn hoá và tạo việc làm." },
    ]
  ),

  "kham-pha:3:luyen-tap-co-quan-ho-hap": practiceContent(
    "Luyện tập",
    "Cơ quan hô hấp",
    "Hãy nhớ lại các bộ phận và vai trò của cơ quan hô hấp.",
    [
      { question: "Bộ phận nào KHÔNG thuộc cơ quan hô hấp?", options: ["Mũi", "Phổi", "Dạ dày", "Khí quản"], correctIndex: 2, explanation: "Dạ dày thuộc cơ quan tiêu hoá." },
      { question: "Cơ quan hô hấp giúp cơ thể làm gì?", options: ["Tiêu hoá thức ăn", "Lấy khí ô-xy và thải khí các-bô-níc", "Bài tiết nước tiểu", "Vận động cơ thể"], correctIndex: 1, explanation: "Cơ quan hô hấp giúp lấy ô-xy và thải khí các-bô-níc." },
      { question: "Hành động nào giúp bảo vệ cơ quan hô hấp?", options: ["Hút thuốc lá", "Đeo khẩu trang khi nhiều khói bụi", "Không tập thể dục", "Ở nơi nhiều khói bụi lâu"], correctIndex: 1, explanation: "Đeo khẩu trang giúp hạn chế bụi bẩn xâm nhập đường hô hấp." },
      { question: "Mỗi ngày một người trưởng thành hít thở trung bình khoảng bao nhiêu lần?", options: ["200 lần", "2000 lần", "20 000 lần", "200 000 lần"], correctIndex: 2, explanation: "Trung bình một người trưởng thành hít thở khoảng 20 000 lần mỗi ngày." },
    ]
  ),

  "kham-pha:3:van-dung-co-quan-bai-tiet-nuoc-tieu": practiceContent(
    "Vận dụng",
    "Cơ quan bài tiết nước tiểu",
    "Hãy nhớ lại chức năng và cách chăm sóc cơ quan bài tiết.",
    [
      { question: "Cơ quan nào có chức năng lọc máu và tạo ra nước tiểu?", options: ["Phổi", "Thận", "Dạ dày", "Tim"], correctIndex: 1, explanation: "Thận có chức năng lọc máu và tạo ra nước tiểu." },
      { question: "Nước tiểu được chứa tạm thời ở bộ phận nào?", options: ["Bóng đái (bàng quang)", "Dạ dày", "Phổi", "Gan"], correctIndex: 0, explanation: "Bóng đái là nơi chứa nước tiểu trước khi thải ra ngoài." },
      { question: "Thói quen nào tốt cho cơ quan bài tiết?", options: ["Nhịn tiểu thường xuyên", "Uống đủ nước mỗi ngày", "Uống rất ít nước", "Không đi vệ sinh khi cần"], correctIndex: 1, explanation: "Uống đủ nước giúp thận hoạt động tốt." },
      { question: "Mỗi quả thận chứa gì giúp lọc máu hiệu quả?", options: ["Hàng triệu bộ lọc siêu nhỏ", "Không có bộ phận lọc nào", "Chỉ có một bộ lọc lớn", "Không thể lọc máu"], correctIndex: 0, explanation: "Mỗi quả thận chứa hàng triệu bộ lọc siêu nhỏ để lọc máu." },
    ]
  ),

  "kham-pha:3:tro-choi-on-tap-phong-tranh-duoi-nuoc": practiceContent(
    "Trò chơi ôn tập",
    "Phòng tránh đuối nước",
    "Hãy nhớ lại cách phòng tránh và xử lý khi gặp nguy cơ đuối nước.",
    [
      { question: "Hành động nào có thể dẫn đến nguy cơ đuối nước?", options: ["Bơi có người lớn giám sát", "Tự ý bơi ở sông, hồ một mình", "Học bơi bài bản", "Mặc áo phao khi đi thuyền"], correctIndex: 1, explanation: "Tự ý bơi một mình rất nguy hiểm." },
      { question: "Khi thấy bạn bị đuối nước, em nên làm gì?", options: ["Tự ý nhảy xuống cứu dù không biết bơi giỏi", "Hô hoán gọi người lớn giúp đỡ ngay", "Bỏ đi không quan tâm", "Đứng xem không làm gì"], correctIndex: 1, explanation: "Hô hoán gọi người lớn là cách xử lý an toàn nhất." },
      { question: "Để phòng tránh đuối nước, em nên làm gì?", options: ["Học bơi bài bản, có người lớn giám sát", "Bơi ở nơi nước chảy xiết", "Không cần học bơi", "Bơi một mình ở ao hồ"], correctIndex: 0, explanation: "Học bơi bài bản và có người giám sát giúp phòng tránh đuối nước." },
      { question: "Mặc áo phao khi tham gia hoạt động dưới nước có tác dụng gì?", options: ["Không có tác dụng gì", "Giảm nguy cơ đuối nước", "Làm chậm bơi", "Chỉ để trang trí"], correctIndex: 1, explanation: "Áo phao giúp giảm đáng kể nguy cơ đuối nước." },
    ]
  ),

  "kham-pha:3:thu-thach-nho-on-tap-cuoi-nam-hoc": practiceContent(
    "Thử thách nhỏ",
    "Ôn tập cuối năm học",
    "Hãy nhớ lại các kiến thức Khám Phá lớp 3 trọng tâm đã học trong năm.",
    [
      { question: "Cơ quan nào giúp cơ thể lấy khí ô-xy?", options: ["Cơ quan tiêu hoá", "Cơ quan hô hấp", "Cơ quan bài tiết", "Cơ quan vận động"], correctIndex: 1, explanation: "Cơ quan hô hấp giúp lấy khí ô-xy." },
      { question: "Số điện thoại nào dùng để gọi cứu hoả?", options: ["113", "114", "115", "112"], correctIndex: 1, explanation: "114 là số điện thoại gọi lực lượng phòng cháy chữa cháy." },
      { question: "Bộ phận nào của cây thực hiện quá trình quang hợp?", options: ["Rễ", "Lá", "Hoa", "Quả"], correctIndex: 1, explanation: "Lá cây là nơi diễn ra quang hợp." },
      { question: "Di tích Văn Miếu - Quốc Tử Giám nằm ở thành phố nào?", options: ["Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Huế"], correctIndex: 0, explanation: "Văn Miếu - Quốc Tử Giám nằm ở Hà Nội." },
    ]
  ),

  // ─────────────── ĐẠO ĐỨC — LỚP 3 — bài thực hành ───────────────
  "dao-duc:3:thuc-hanh-tu-hao-truyen-thong-que-huong": practiceContent(
    "Thực hành",
    "Tự hào truyền thống quê hương",
    "Hãy nhớ lại các nét đẹp truyền thống của quê hương.",
    [
      { question: "Điều gì thể hiện lòng tự hào về quê hương?", options: ["Chê bai quê hương", "Giới thiệu nét đẹp quê hương với bạn bè", "Không quan tâm đến quê hương", "Phá hoại di tích quê hương"], correctIndex: 1, explanation: "Giới thiệu nét đẹp quê hương thể hiện tình yêu, niềm tự hào." },
      { question: "Việt Nam có khoảng bao nhiêu lễ hội truyền thống mỗi năm (ước tính)?", options: ["Khoảng 80", "Khoảng 800", "Khoảng 8000", "Không có lễ hội nào"], correctIndex: 2, explanation: "Việt Nam có tới hơn 8000 lễ hội truyền thống mỗi năm." },
      { question: "Em có thể làm gì để giữ gìn truyền thống quê hương?", options: ["Không quan tâm", "Giữ gìn vệ sinh, cảnh quan quê hương", "Phá hoại cảnh quan", "Chê bai truyền thống"], correctIndex: 1, explanation: "Giữ gìn vệ sinh, cảnh quan là hành động thiết thực." },
      { question: "Nét đẹp truyền thống của quê hương có thể là gì?", options: ["Lễ hội truyền thống", "Rác thải bừa bãi", "Ô nhiễm môi trường", "Không có gì đặc biệt"], correctIndex: 0, explanation: "Lễ hội truyền thống là nét đẹp văn hoá của quê hương." },
    ]
  ),

  "dao-duc:3:luyen-tap-ham-hoc-hoi": practiceContent(
    "Luyện tập",
    "Ham học hỏi",
    "Hãy nhớ lại biểu hiện và lợi ích của tinh thần ham học hỏi.",
    [
      { question: "Biểu hiện nào thể hiện tinh thần ham học hỏi?", options: ["Không bao giờ đặt câu hỏi", "Tích cực tìm hiểu, đặt câu hỏi khi chưa hiểu", "Bỏ cuộc khi gặp bài khó", "Chỉ học khi bị ép buộc"], correctIndex: 1, explanation: "Tích cực tìm hiểu và đặt câu hỏi thể hiện tinh thần ham học hỏi." },
      { question: "Khi gặp bài toán khó, người ham học hỏi sẽ làm gì?", options: ["Bỏ qua không làm", "Tìm cách giải quyết, hỏi thầy cô hoặc bạn bè", "Chép bài của bạn", "Tức giận, bỏ cuộc"], correctIndex: 1, explanation: "Người ham học hỏi luôn tìm cách giải quyết vấn đề." },
      { question: "Ham học hỏi mang lại lợi ích gì?", options: ["Không có lợi ích gì", "Mở rộng hiểu biết, phát triển bản thân", "Làm mất thời gian", "Chỉ gây thêm áp lực"], correctIndex: 1, explanation: "Ham học hỏi giúp mở rộng hiểu biết và phát triển bản thân." },
      { question: "Nhà bác học nào từng nói ông thành công nhờ luôn tò mò, ham học hỏi?", options: ["Isaac Newton", "Charles Darwin", "Albert Einstein", "Thomas Edison"], correctIndex: 1, explanation: "Charles Darwin từng nói ông không phải người thông minh nhất nhưng luôn ham học hỏi." },
    ]
  ),

  "dao-duc:3:van-dung-quan-tam-hang-xom-lang-gieng": practiceContent(
    "Vận dụng",
    "Quan tâm hàng xóm láng giềng",
    "Hãy nhớ lại các hành động thể hiện sự quan tâm với hàng xóm.",
    [
      { question: "Câu tục ngữ nào nói về tình cảm hàng xóm láng giềng?", options: ["Ăn quả nhớ kẻ trồng cây", "Bán anh em xa, mua láng giềng gần", "Có công mài sắt, có ngày nên kim", "Uống nước nhớ nguồn"], correctIndex: 1, explanation: "'Bán anh em xa, mua láng giềng gần' nói về giá trị của tình cảm hàng xóm." },
      { question: "Hành động nào thể hiện sự quan tâm đến hàng xóm?", options: ["Gây ồn ào", "Chào hỏi lễ phép, giúp đỡ khi cần", "Không quan tâm ai cả", "Tranh cãi thường xuyên"], correctIndex: 1, explanation: "Chào hỏi lễ phép và giúp đỡ là biểu hiện của sự quan tâm." },
      { question: "Sống hoà đồng với hàng xóm mang lại điều gì?", options: ["Không mang lại lợi ích gì", "Khu phố gắn kết, an toàn hơn", "Gây thêm rắc rối", "Không có tác dụng gì"], correctIndex: 1, explanation: "Sống hoà đồng giúp khu phố đoàn kết, an toàn hơn." },
      { question: "Khi hàng xóm gặp khó khăn, em nên làm gì?", options: ["Không quan tâm", "Giúp đỡ trong khả năng của mình", "Tránh mặt", "Chê cười"], correctIndex: 1, explanation: "Giúp đỡ trong khả năng thể hiện tình cảm tốt đẹp với hàng xóm." },
    ]
  ),

  "dao-duc:3:tro-choi-on-tap-giu-loi-hua": practiceContent(
    "Trò chơi ôn tập",
    "Giữ lời hứa",
    "Hãy nhớ lại ý nghĩa của việc giữ lời hứa.",
    [
      { question: "Giữ lời hứa mang lại điều gì cho em?", options: ["Mất niềm tin từ mọi người", "Được mọi người tin tưởng, tôn trọng", "Không có tác dụng gì", "Gây phiền phức"], correctIndex: 1, explanation: "Giữ lời hứa giúp em được mọi người tin tưởng." },
      { question: "Nếu không thể giữ lời hứa vì lý do đặc biệt, em nên làm gì?", options: ["Im lặng không nói gì", "Xin lỗi và giải thích rõ ràng", "Đổ lỗi cho người khác", "Tránh mặt người đó"], correctIndex: 1, explanation: "Xin lỗi và giải thích thể hiện sự trung thực." },
      { question: "Trước khi hứa điều gì, em nên làm gì?", options: ["Hứa ngay không suy nghĩ", "Suy nghĩ kỹ xem có thể thực hiện được không", "Không cần quan tâm", "Hứa cho qua chuyện"], correctIndex: 1, explanation: "Suy nghĩ kỹ trước khi hứa giúp em tránh thất hứa." },
      { question: "'Chữ tín' trong cuộc sống có nghĩa gần với điều gì?", options: ["Sự dối trá", "Giữ đúng lời đã hứa", "Sự lười biếng", "Không liên quan đến lời hứa"], correctIndex: 1, explanation: "'Chữ tín' nghĩa là giữ đúng lời đã hứa, cam kết." },
    ]
  ),

  "dao-duc:3:thu-thach-nho-phong-tranh-tai-nan-thuong-tich": practiceContent(
    "Thử thách nhỏ",
    "Phòng tránh tai nạn thương tích",
    "Hãy nhớ lại nguyên nhân và cách phòng tránh tai nạn thương tích.",
    [
      { question: "Nguyên nhân chính gây ra nhiều tai nạn thương tích ở học sinh là gì?", options: ["Học tập chăm chỉ", "Sự bất cẩn, nghịch ngợm quá mức", "Ngủ đủ giấc", "Ăn uống đầy đủ"], correctIndex: 1, explanation: "Sự bất cẩn và nghịch ngợm quá mức là nguyên nhân chính." },
      { question: "Hành động nào giúp phòng tránh tai nạn thương tích?", options: ["Chạy nhảy ở nơi trơn trượt", "Nghịch vật sắc nhọn", "Tuân thủ hướng dẫn an toàn", "Nghịch ổ điện"], correctIndex: 2, explanation: "Tuân thủ hướng dẫn an toàn giúp phòng tránh tai nạn." },
      { question: "Đội mũ bảo hiểm đúng cách có thể giảm nguy cơ chấn thương đầu bao nhiêu phần trăm (ước tính)?", options: ["Khoảng 10%", "Khoảng 30%", "Hơn 70%", "Không có tác dụng"], correctIndex: 2, explanation: "Đội mũ bảo hiểm đúng cách có thể giảm nguy cơ chấn thương đầu tới hơn 70%." },
      { question: "Khi vui chơi, em nên làm gì để đảm bảo an toàn?", options: ["Chơi ở nơi nguy hiểm", "Cẩn thận, chơi đúng khu vực an toàn", "Không cần chú ý gì", "Trêu chọc bạn khi chơi"], correctIndex: 1, explanation: "Chơi cẩn thận, đúng khu vực an toàn giúp giảm nguy cơ tai nạn." },
    ]
  ),

  "dao-duc:3:thuc-hanh-ung-pho-voi-tinh-huong-bat-an": practiceContent(
    "Thực hành",
    "Ứng phó với tình huống bất an",
    "Hãy nhớ lại cách ứng phó khi gặp tình huống bất an.",
    [
      { question: "Khi gặp tình huống bất an, em nên làm gì đầu tiên?", options: ["Hoảng loạn", "Bình tĩnh và tìm người lớn tin cậy", "Tự giải quyết một mình", "Im lặng không nói với ai"], correctIndex: 1, explanation: "Bình tĩnh và tìm người lớn tin cậy là cách ứng phó an toàn." },
      { question: "Tổng đài quốc gia bảo vệ trẻ em có số điện thoại là gì?", options: ["111", "112", "113", "115"], correctIndex: 0, explanation: "111 là số điện thoại của Tổng đài quốc gia bảo vệ trẻ em." },
      { question: "Ai là người em có thể tìm đến khi gặp tình huống bất an?", options: ["Người lạ trên đường", "Bố mẹ, thầy cô, chú công an", "Không cần tìm ai", "Chỉ có thể tự lo"], correctIndex: 1, explanation: "Bố mẹ, thầy cô, công an là người lớn đáng tin cậy." },
      { question: "Tổng đài 111 hoạt động vào thời gian nào?", options: ["Chỉ giờ hành chính", "24/24 giờ tất cả các ngày", "Chỉ ngày lễ", "Không hoạt động thường xuyên"], correctIndex: 1, explanation: "Tổng đài 111 hoạt động 24/24 giờ tất cả các ngày trong tuần." },
    ]
  ),

  "dao-duc:3:luyen-tap-yeu-quy-va-bao-ve-moi-truong": practiceContent(
    "Luyện tập",
    "Yêu quý và bảo vệ môi trường",
    "Hãy nhớ lại các hành động bảo vệ môi trường phù hợp với lứa tuổi.",
    [
      { question: "Hành động nào giúp bảo vệ môi trường?", options: ["Xả rác bừa bãi", "Trồng thêm cây xanh", "Lãng phí nước", "Chặt phá rừng"], correctIndex: 1, explanation: "Trồng thêm cây xanh giúp bảo vệ môi trường." },
      { question: "Vì sao cần bảo vệ môi trường?", options: ["Vì môi trường không quan trọng", "Vì môi trường cung cấp không khí, nước sạch cho sự sống", "Không có lý do gì", "Chỉ để làm đẹp"], correctIndex: 1, explanation: "Môi trường trong lành cung cấp điều kiện sống cho con người." },
      { question: "Một chiếc túi ni lông mất bao lâu để phân huỷ (ước tính)?", options: ["Khoảng 1 năm", "Khoảng 10 năm", "500-1000 năm", "Phân huỷ ngay lập tức"], correctIndex: 2, explanation: "Túi ni lông có thể mất tới 500-1000 năm để phân huỷ hoàn toàn." },
      { question: "Bảo vệ môi trường là trách nhiệm của ai?", options: ["Chỉ của người lớn", "Chỉ của nhà khoa học", "Của tất cả mọi người", "Không phải trách nhiệm của ai"], correctIndex: 2, explanation: "Bảo vệ môi trường là trách nhiệm chung của tất cả mọi người." },
    ]
  ),

  "dao-duc:3:van-dung-tich-cuc-hoan-thanh-nhiem-vu": practiceContent(
    "Vận dụng",
    "Tích cực hoàn thành nhiệm vụ",
    "Hãy nhớ lại biểu hiện của tinh thần trách nhiệm với nhiệm vụ được giao.",
    [
      { question: "Biểu hiện nào thể hiện tinh thần trách nhiệm với nhiệm vụ?", options: ["Đùn đẩy công việc", "Hoàn thành đúng thời hạn, cẩn thận", "Làm qua loa", "Bỏ dở giữa chừng"], correctIndex: 1, explanation: "Hoàn thành đúng thời hạn, cẩn thận là biểu hiện của tinh thần trách nhiệm." },
      { question: "Khi được giao nhiệm vụ trực nhật lớp, em nên làm gì?", options: ["Nhờ bạn làm hộ", "Tự giác hoàn thành công việc", "Bỏ qua không làm", "Làm không cẩn thận"], correctIndex: 1, explanation: "Tự giác hoàn thành công việc thể hiện tinh thần trách nhiệm." },
      { question: "Tích cực hoàn thành nhiệm vụ mang lại lợi ích gì?", options: ["Không có lợi ích gì", "Rèn luyện tính kỷ luật, được tin tưởng", "Chỉ tốn thời gian", "Gây thêm áp lực"], correctIndex: 1, explanation: "Tích cực hoàn thành nhiệm vụ rèn luyện tính kỷ luật." },
      { question: "Trẻ em được giao việc nhà phù hợp từ nhỏ thường có điều gì khi trưởng thành?", options: ["Tinh thần trách nhiệm cao hơn", "Không có gì thay đổi", "Kém tự lập hơn", "Sợ làm việc"], correctIndex: 0, explanation: "Nhiều nghiên cứu cho thấy trẻ được giao việc nhà có tinh thần trách nhiệm cao hơn." },
    ]
  ),

  "dao-duc:3:tro-choi-on-tap-ton-trong-nguoi-khuyet-tat": practiceContent(
    "Trò chơi ôn tập",
    "Tôn trọng người khuyết tật",
    "Hãy nhớ lại thái độ và hành động đúng đắn với người khuyết tật.",
    [
      { question: "Thái độ nào đúng đắn khi gặp người khuyết tật?", options: ["Trêu chọc, kỳ thị", "Tôn trọng, đối xử bình đẳng", "Xa lánh, tránh né", "Thương hại quá mức"], correctIndex: 1, explanation: "Tôn trọng và đối xử bình đẳng là thái độ đúng đắn." },
      { question: "Người khuyết tật có thể làm được điều gì?", options: ["Không thể làm gì cả", "Vẫn có thể học tập, làm việc, đóng góp cho xã hội", "Chỉ có thể ở nhà", "Không cần được tôn trọng"], correctIndex: 1, explanation: "Người khuyết tật vẫn có khả năng học tập, làm việc." },
      { question: "Khi giúp đỡ người khuyết tật, em nên làm như thế nào?", options: ["Giúp một cách tế nhị, tôn trọng ý muốn của họ", "Ép buộc phải nhận sự giúp đỡ", "Không cần quan tâm", "Chế giễu khi họ gặp khó khăn"], correctIndex: 0, explanation: "Giúp đỡ tế nhị, tôn trọng ý muốn thể hiện sự văn minh." },
      { question: "Paralympic là đại hội thể thao dành cho ai?", options: ["Vận động viên chuyên nghiệp", "Vận động viên khuyết tật", "Trẻ em dưới 10 tuổi", "Người cao tuổi"], correctIndex: 1, explanation: "Paralympic là đại hội thể thao lớn nhất dành cho người khuyết tật." },
    ]
  ),

  "dao-duc:3:thu-thach-nho-chia-se-voi-ban-co-hoan-canh-kho-khan": practiceContent(
    "Thử thách nhỏ",
    "Chia sẻ với bạn có hoàn cảnh khó khăn",
    "Hãy nhớ lại ý nghĩa của việc chia sẻ, giúp đỡ bạn bè.",
    [
      { question: "Hành động nào thể hiện sự chia sẻ với bạn có hoàn cảnh khó khăn?", options: ["Chê bai hoàn cảnh của bạn", "Chia sẻ đồ dùng học tập, giúp đỡ bạn", "Xa lánh không chơi cùng", "Không quan tâm"], correctIndex: 1, explanation: "Chia sẻ đồ dùng học tập thể hiện sự quan tâm." },
      { question: "Chia sẻ với bạn bè giúp em rèn luyện điều gì?", options: ["Lòng nhân ái, biết quan tâm người khác", "Không có tác dụng gì", "Tính ích kỷ", "Sự thờ ơ"], correctIndex: 0, explanation: "Chia sẻ giúp rèn luyện lòng nhân ái." },
      { question: "Khi bạn buồn vì gia đình gặp khó khăn, em nên làm gì?", options: ["Trêu chọc bạn", "An ủi, động viên bạn", "Không quan tâm", "Kể chuyện đó cho người khác"], correctIndex: 1, explanation: "An ủi, động viên là cách thể hiện sự quan tâm đúng đắn." },
      { question: "Chương trình 'Nuôi heo đất' ở trường học nhằm mục đích gì?", options: ["Trang trí lớp học", "Quyên góp giúp đỡ bạn khó khăn", "Không có mục đích cụ thể", "Chỉ để vui chơi"], correctIndex: 1, explanation: "Chương trình 'Nuôi heo đất' nhằm quyên góp giúp đỡ các bạn có hoàn cảnh khó khăn." },
    ]
  ),

  "dao-duc:3:thuc-hanh-ung-xu-noi-cong-cong": practiceContent(
    "Thực hành",
    "Ứng xử nơi công cộng",
    "Hãy nhớ lại các quy tắc ứng xử văn minh nơi công cộng.",
    [
      { question: "Hành động nào thể hiện ứng xử văn minh nơi công cộng?", options: ["Nói to gây ồn ào", "Xếp hàng trật tự khi cần", "Xả rác bừa bãi", "Chen lấn, xô đẩy"], correctIndex: 1, explanation: "Xếp hàng trật tự thể hiện ứng xử văn minh." },
      { question: "Nơi nào sau đây được coi là nơi công cộng?", options: ["Phòng ngủ của em", "Công viên", "Phòng riêng trong nhà", "Tủ quần áo"], correctIndex: 1, explanation: "Công viên là nơi dùng chung cho nhiều người." },
      { question: "Ứng xử văn minh nơi công cộng mang lại lợi ích gì?", options: ["Không có lợi ích gì", "Tạo môi trường thoải mái, an toàn cho mọi người", "Gây phiền phức", "Chỉ có lợi cho bản thân"], correctIndex: 1, explanation: "Ứng xử văn minh tạo môi trường thoải mái cho mọi người." },
      { question: "Xếp hàng trật tự nơi công cộng được xem là gì ở nhiều nước?", options: ["Không quan trọng", "Một phép lịch sự cơ bản", "Chỉ dành cho người lớn", "Không cần thiết"], correctIndex: 1, explanation: "Xếp hàng trật tự được xem là phép lịch sự cơ bản." },
    ]
  ),

  "dao-duc:3:luyen-tap-tiet-kiem-thoi-gian": practiceContent(
    "Luyện tập",
    "Tiết kiệm thời gian",
    "Hãy nhớ lại các biểu hiện của việc sử dụng thời gian hợp lý.",
    [
      { question: "Vì sao cần tiết kiệm thời gian?", options: ["Thời gian có thể lấy lại được", "Thời gian đã trôi qua không thể lấy lại", "Thời gian không quan trọng", "Không có lý do gì"], correctIndex: 1, explanation: "Thời gian đã trôi qua thì không thể lấy lại." },
      { question: "Hành động nào thể hiện việc sử dụng thời gian hợp lý?", options: ["Trì hoãn công việc", "Lập kế hoạch học tập rõ ràng", "Xao nhãng khi học bài", "Không có kế hoạch gì"], correctIndex: 1, explanation: "Lập kế hoạch rõ ràng giúp sử dụng thời gian hiệu quả." },
      { question: "Công cụ nào giúp em sắp xếp thời gian khoa học hơn?", options: ["Thời gian biểu hàng ngày", "Không cần công cụ gì", "Chơi điện thoại liên tục", "Không lập kế hoạch"], correctIndex: 0, explanation: "Thời gian biểu giúp sắp xếp công việc khoa học." },
      { question: "Ai từng nói câu 'Thời gian là tiền bạc'?", options: ["Isaac Newton", "Benjamin Franklin", "Albert Einstein", "Charles Darwin"], correctIndex: 1, explanation: "Benjamin Franklin từng nói câu nổi tiếng này." },
    ]
  ),

  "dao-duc:3:van-dung-bao-ve-cua-cong": practiceContent(
    "Vận dụng",
    "Bảo vệ của công",
    "Hãy nhớ lại ý nghĩa của việc bảo vệ tài sản chung.",
    [
      { question: "Tài sản nào sau đây là của công?", options: ["Cặp sách của em", "Ghế đá trong công viên", "Quần áo của em", "Đồ chơi riêng"], correctIndex: 1, explanation: "Ghế đá trong công viên là tài sản chung." },
      { question: "Hành động nào thể hiện ý thức bảo vệ của công?", options: ["Vẽ bậy lên tường trường học", "Giữ gìn bàn ghế lớp học sạch đẹp", "Bẻ cành cây công viên", "Phá hoại đồ dùng chung"], correctIndex: 1, explanation: "Giữ gìn bàn ghế lớp học thể hiện ý thức bảo vệ tài sản chung." },
      { question: "Vì sao cần bảo vệ của công?", options: ["Vì của công không quan trọng", "Vì của công phục vụ lợi ích chung", "Không cần bảo vệ", "Chỉ người lớn cần quan tâm"], correctIndex: 1, explanation: "Của công phục vụ lợi ích chung, cần được giữ gìn." },
      { question: "Phá hoại tài sản công cộng có thể bị xử lý như thế nào?", options: ["Không bị xử lý gì", "Có thể bị xử phạt hành chính", "Được khen thưởng", "Không có quy định nào"], correctIndex: 1, explanation: "Phá hoại tài sản công cộng có thể bị xử phạt theo quy định." },
    ]
  ),

  "dao-duc:3:tro-choi-on-tap-kinh-gia-yeu-tre": practiceContent(
    "Trò chơi ôn tập",
    "Kính già, yêu trẻ",
    "Hãy nhớ lại ý nghĩa của truyền thống kính già, yêu trẻ.",
    [
      { question: "Hành động nào thể hiện sự kính trọng người già?", options: ["Chen lấn không nhường chỗ", "Nhường chỗ ngồi cho người già trên xe buýt", "Nói trống không", "Không chào hỏi"], correctIndex: 1, explanation: "Nhường chỗ ngồi thể hiện sự kính trọng." },
      { question: "Hành động nào thể hiện tình yêu thương với trẻ nhỏ?", options: ["Bắt nạt em nhỏ", "Nhường nhịn, bảo vệ em nhỏ", "Trêu chọc em nhỏ", "Không quan tâm"], correctIndex: 1, explanation: "Nhường nhịn, bảo vệ em nhỏ thể hiện tình yêu thương." },
      { question: "Ngày Quốc tế Người cao tuổi là ngày nào?", options: ["1/6", "20/11", "1/10", "8/3"], correctIndex: 2, explanation: "Ngày 1/10 hàng năm là Ngày Quốc tế Người cao tuổi." },
      { question: "Ngày Quốc tế Thiếu nhi là ngày nào?", options: ["1/6", "20/11", "1/10", "8/3"], correctIndex: 0, explanation: "Ngày 1/6 là Ngày Quốc tế Thiếu nhi." },
    ]
  ),

  "dao-duc:3:thu-thach-nho-on-tap-cuoi-nam-hoc": practiceContent(
    "Thử thách nhỏ",
    "Ôn tập cuối năm học",
    "Hãy nhớ lại các giá trị đạo đức trọng tâm đã học trong năm lớp 3.",
    [
      { question: "Khi gặp tình huống bất an, em nên tìm đến ai để được giúp đỡ?", options: ["Người lạ", "Người lớn đáng tin cậy", "Không cần tìm ai", "Tự giải quyết một mình"], correctIndex: 1, explanation: "Người lớn đáng tin cậy sẽ giúp em xử lý tình huống an toàn." },
      { question: "'Kính già, yêu trẻ' thể hiện điều gì?", options: ["Sự ích kỷ", "Truyền thống đạo đức tốt đẹp", "Không có ý nghĩa gì", "Chỉ dành cho người lớn"], correctIndex: 1, explanation: "Đây là truyền thống đạo đức tốt đẹp của dân tộc." },
      { question: "Vì sao cần giữ lời hứa?", options: ["Không cần thiết", "Để được mọi người tin tưởng", "Chỉ để cho vui", "Không có lý do gì"], correctIndex: 1, explanation: "Giữ lời hứa giúp em được mọi người tin tưởng." },
      { question: "Số điện thoại của Tổng đài quốc gia bảo vệ trẻ em là gì?", options: ["111", "113", "114", "115"], correctIndex: 0, explanation: "111 là số điện thoại của Tổng đài quốc gia bảo vệ trẻ em." },
    ]
  ),

  // ─────────────── TIN HỌC — LỚP 3 — bài thực hành ───────────────
  "tin-hoc:3:thuc-hanh-thong-tin-va-xu-li-thong-tin": practiceContent(
    "Thực hành",
    "Thông tin và xử lí thông tin",
    "Hãy nhớ lại các dạng thông tin và vai trò của máy tính.",
    [
      { question: "Biển báo giao thông là thông tin dạng nào?", options: ["Chữ viết", "Âm thanh", "Hình ảnh", "Không phải thông tin"], correctIndex: 2, explanation: "Biển báo giao thông truyền tải thông tin bằng hình ảnh, ký hiệu." },
      { question: "Cuốn sách truyền tải thông tin chủ yếu dưới dạng nào?", options: ["Âm thanh", "Chữ viết", "Chỉ hình ảnh", "Không có dạng nào"], correctIndex: 1, explanation: "Sách chủ yếu truyền tải thông tin dưới dạng chữ viết." },
      { question: "Tiếng chuông báo hết giờ học là thông tin dạng gì?", options: ["Chữ viết", "Âm thanh", "Hình ảnh", "Không phải thông tin"], correctIndex: 1, explanation: "Tiếng chuông là âm thanh, báo hiệu hết giờ học." },
      { question: "Máy tính giúp con người làm gì với thông tin?", options: ["Chỉ lưu trữ", "Xử lí và đưa ra kết quả", "Không làm gì cả", "Chỉ hiển thị hình ảnh"], correctIndex: 1, explanation: "Máy tính giúp xử lí thông tin và đưa ra kết quả hữu ích." },
    ]
  ),

  "tin-hoc:3:luyen-tap-go-van-ban-don-gian": practiceContent(
    "Luyện tập",
    "Gõ văn bản đơn giản",
    "Hãy nhớ lại cách gõ chữ và sửa lỗi trong văn bản.",
    [
      { question: "Phím nào dùng để tạo khoảng trắng giữa các từ?", options: ["Enter", "Space", "Shift", "Tab"], correctIndex: 1, explanation: "Phím Space dùng để tạo khoảng trắng giữa các từ." },
      { question: "Phím nào dùng để xoá chữ phía trước con trỏ?", options: ["Delete", "Backspace", "Enter", "Shift"], correctIndex: 1, explanation: "Phím Backspace xoá chữ ở phía trước con trỏ." },
      { question: "Phím Enter thường dùng để làm gì khi soạn thảo văn bản?", options: ["Xoá chữ", "Xuống dòng mới", "Tạo khoảng trắng", "Đóng phần mềm"], correctIndex: 1, explanation: "Phím Enter dùng để xuống dòng mới khi soạn thảo." },
      { question: "Để mở phần mềm soạn thảo văn bản, em thường làm gì?", options: ["Nháy đúp chuột vào biểu tượng phần mềm", "Tắt máy tính", "Rút dây nguồn", "Không cần thao tác gì"], correctIndex: 0, explanation: "Nháy đúp chuột vào biểu tượng là cách mở phần mềm." },
    ]
  ),

  "tin-hoc:3:van-dung-tu-the-ngoi-va-an-toan-khi-dung-may-tinh": practiceContent(
    "Vận dụng",
    "Tư thế ngồi và an toàn khi dùng máy tính",
    "Hãy nhớ lại tư thế ngồi đúng khi sử dụng máy tính.",
    [
      { question: "Khoảng cách hợp lý giữa mắt và màn hình máy tính là bao nhiêu?", options: ["10cm", "khoảng 50cm", "2m", "5m"], correctIndex: 1, explanation: "Khoảng cách hợp lý là khoảng 50cm." },
      { question: "Ngồi sai tư thế lâu ngày có thể gây ra hậu quả gì?", options: ["Không ảnh hưởng gì", "Mỏi mắt, đau lưng, cong vẹo cột sống", "Giúp học giỏi hơn", "Không có tác hại"], correctIndex: 1, explanation: "Ngồi sai tư thế lâu có thể gây mỏi mắt, đau lưng." },
      { question: "Sau bao lâu sử dụng máy tính thì em nên cho mắt nghỉ ngơi?", options: ["Mỗi 20-30 phút", "Mỗi 5 giờ", "Không cần nghỉ", "Mỗi 10 giây"], correctIndex: 0, explanation: "Nên cho mắt nghỉ sau mỗi 20-30 phút." },
      { question: "Tư thế ngồi đúng khi dùng máy tính là như thế nào?", options: ["Ngồi thẳng lưng, chân vuông góc trên sàn", "Ngồi cong lưng, chân co lên ghế", "Nằm khi dùng máy tính", "Không cần chú ý tư thế"], correctIndex: 0, explanation: "Ngồi thẳng lưng, chân vuông góc trên sàn là tư thế đúng." },
    ]
  ),

  "tin-hoc:3:tro-choi-on-tap-cac-dang-thong-tin-chu-am-thanh-hinh-anh": practiceContent(
    "Trò chơi ôn tập",
    "Các dạng thông tin: chữ, âm thanh, hình ảnh",
    "Hãy nhớ lại ba dạng thông tin cơ bản.",
    [
      { question: "Một bài hát là thông tin dạng nào?", options: ["Chữ viết", "Âm thanh", "Hình ảnh", "Không phải thông tin"], correctIndex: 1, explanation: "Bài hát truyền tải thông tin qua âm thanh." },
      { question: "Một bức ảnh chụp gia đình là thông tin dạng nào?", options: ["Chữ viết", "Âm thanh", "Hình ảnh", "Không có dạng nào"], correctIndex: 2, explanation: "Ảnh chụp truyền tải thông tin qua hình ảnh." },
      { question: "Video kết hợp những dạng thông tin nào?", options: ["Chỉ hình ảnh", "Chỉ âm thanh", "Cả hình ảnh và âm thanh", "Không chứa thông tin gì"], correctIndex: 2, explanation: "Video kết hợp cả hình ảnh chuyển động và âm thanh." },
      { question: "Tin nhắn văn bản em gửi cho bạn là thông tin dạng gì?", options: ["Chữ viết", "Âm thanh", "Hình ảnh", "Không phải thông tin"], correctIndex: 0, explanation: "Tin nhắn văn bản là thông tin dạng chữ viết." },
    ]
  ),

  "tin-hoc:3:thu-thach-nho-may-tinh-giup-xu-li-thong-tin-nhu-the-nao": practiceContent(
    "Thử thách nhỏ",
    "Máy tính giúp xử lí thông tin như thế nào",
    "Hãy nhớ lại ba bước xử lí thông tin của máy tính.",
    [
      { question: "Ba bước xử lí thông tin của máy tính là gì?", options: ["Nhận thông tin - Xử lí - Đưa ra kết quả", "Chỉ có một bước", "Tắt máy - Bật máy - Xử lí", "Không có bước nào"], correctIndex: 0, explanation: "Ba bước là nhận vào, xử lí, và đưa ra kết quả." },
      { question: "Khi em gõ phép tính vào máy tính, đó là bước nào?", options: ["Đầu vào (input)", "Xử lí", "Đầu ra (output)", "Không phải bước nào"], correctIndex: 0, explanation: "Gõ phép tính vào là bước nhận thông tin đầu vào." },
      { question: "Kết quả hiển thị trên màn hình sau khi xử lí được gọi là gì?", options: ["Đầu vào", "Đầu ra", "Không có tên gọi", "Dữ liệu thô"], correctIndex: 1, explanation: "Kết quả sau xử lí được gọi là đầu ra (output)." },
      { question: "Bộ vi xử lý trong máy tính hiện đại có thể thực hiện bao nhiêu phép tính mỗi giây (ước tính)?", options: ["Hàng chục", "Hàng nghìn", "Hàng triệu", "Hàng tỷ"], correctIndex: 3, explanation: "Bộ vi xử lý hiện đại có thể thực hiện hàng tỷ phép tính mỗi giây." },
    ]
  ),

  "tin-hoc:3:thuc-hanh-lam-quen-phan-mem-soan-thao-van-ban": practiceContent(
    "Thực hành",
    "Làm quen phần mềm soạn thảo văn bản",
    "Hãy nhớ lại các thành phần chính trong giao diện phần mềm soạn thảo.",
    [
      { question: "Vùng nào trong phần mềm soạn thảo dùng để gõ chữ?", options: ["Thanh tiêu đề", "Vùng soạn thảo", "Thanh công cụ", "Không có vùng nào"], correctIndex: 1, explanation: "Vùng soạn thảo là nơi em gõ nội dung văn bản." },
      { question: "Thanh công cụ trong phần mềm soạn thảo dùng để làm gì?", options: ["Chỉ để trang trí", "Chứa các nút chức năng như in đậm, lưu tài liệu", "Không có tác dụng gì", "Để tắt máy tính"], correctIndex: 1, explanation: "Thanh công cụ chứa các nút chức năng để định dạng, thao tác." },
      { question: "Để đóng phần mềm, em thường nháy vào đâu?", options: ["Dấu X ở góc trên bên phải", "Giữa màn hình", "Không cần thao tác gì", "Phím Enter"], correctIndex: 0, explanation: "Nháy vào dấu X để đóng phần mềm." },
      { question: "Để mở một phần mềm mới, em thường làm gì?", options: ["Nháy đúp vào biểu tượng phần mềm", "Rút dây nguồn máy tính", "Gõ liên tục phím Enter", "Không cần thao tác gì"], correctIndex: 0, explanation: "Nháy đúp vào biểu tượng là cách mở phần mềm." },
    ]
  ),

  "tin-hoc:3:luyen-tap-go-chu-co-dau-tieng-viet": practiceContent(
    "Luyện tập",
    "Gõ chữ có dấu tiếng Việt",
    "Hãy nhớ lại cách gõ dấu theo kiểu Telex.",
    [
      { question: "Trong kiểu gõ Telex, gõ chữ nào để tạo dấu huyền?", options: ["s", "f", "r", "x"], correctIndex: 1, explanation: "Gõ 'f' để tạo dấu huyền trong kiểu gõ Telex." },
      { question: "Trong kiểu gõ Telex, gõ chữ nào để tạo dấu hỏi?", options: ["s", "f", "r", "x"], correctIndex: 2, explanation: "Gõ 'r' để tạo dấu hỏi trong kiểu gõ Telex." },
      { question: "Để gõ chữ 'ã', em gõ tổ hợp nào theo kiểu Telex?", options: ["as", "af", "ar", "ax"], correctIndex: 3, explanation: "Gõ 'ax' sẽ cho ra chữ 'ã' (x tạo dấu ngã)." },
      { question: "Phần mềm nào thường dùng để gõ được chữ tiếng Việt có dấu?", options: ["Unikey", "Paint", "Calculator", "Notepad"], correctIndex: 0, explanation: "Unikey là phần mềm bộ gõ tiếng Việt phổ biến." },
    ]
  ),

  "tin-hoc:3:van-dung-dinh-dang-chu-dam-chu-nghieng": practiceContent(
    "Vận dụng",
    "Định dạng chữ đậm, chữ nghiêng",
    "Hãy nhớ lại cách sử dụng các nút định dạng chữ.",
    [
      { question: "Nút nào trên thanh công cụ dùng để in đậm chữ?", options: ["B", "I", "U", "X"], correctIndex: 0, explanation: "Nút 'B' (Bold) dùng để in đậm chữ." },
      { question: "Trước khi định dạng chữ đậm hoặc nghiêng, em cần làm gì?", options: ["Tắt máy tính", "Bôi đen đoạn chữ cần định dạng", "Không cần thao tác gì", "Xoá hết văn bản"], correctIndex: 1, explanation: "Cần bôi đen đoạn chữ trước khi định dạng." },
      { question: "Chữ nghiêng thường được dùng để làm gì?", options: ["Xoá văn bản", "Nhấn mạnh hoặc trích dẫn", "Đổi màu nền", "Không có tác dụng gì"], correctIndex: 1, explanation: "Chữ nghiêng thường dùng để nhấn mạnh hoặc trích dẫn." },
      { question: "Nút nào dùng để gạch chân chữ?", options: ["B", "I", "U", "X"], correctIndex: 2, explanation: "Nút 'U' (Underline) dùng để gạch chân chữ." },
    ]
  ),

  "tin-hoc:3:tro-choi-on-tap-chen-hinh-anh-vao-van-ban": practiceContent(
    "Trò chơi ôn tập",
    "Chèn hình ảnh vào văn bản",
    "Hãy nhớ lại các bước chèn và điều chỉnh hình ảnh trong văn bản.",
    [
      { question: "Để chèn hình ảnh vào văn bản, em vào mục nào trên thanh công cụ?", options: ["Chèn (Insert)", "Xoá (Delete)", "Lưu (Save)", "Thoát (Exit)"], correctIndex: 0, explanation: "Mục 'Chèn' chứa chức năng chèn hình ảnh." },
      { question: "Sau khi chèn hình ảnh, em có thể làm gì với hình ảnh đó?", options: ["Không thể thay đổi gì", "Thay đổi kích thước bằng cách kéo góc hình", "Chỉ có thể xoá", "Không thể di chuyển"], correctIndex: 1, explanation: "Em có thể kéo góc để thay đổi kích thước hình ảnh." },
      { question: "Chèn hình ảnh vào văn bản mang lại lợi ích gì?", options: ["Không có lợi ích gì", "Giúp bài viết sinh động, dễ hiểu hơn", "Làm bài viết khó đọc hơn", "Không liên quan đến nội dung"], correctIndex: 1, explanation: "Hình ảnh minh hoạ giúp bài viết sinh động hơn." },
      { question: "Câu nói nào thể hiện giá trị của hình ảnh trong việc truyền đạt thông tin?", options: ["Một bức tranh đáng giá ngàn lời nói", "Không có câu nói nào phù hợp", "Hình ảnh không quan trọng", "Chữ viết luôn tốt hơn hình ảnh"], correctIndex: 0, explanation: "Câu 'một bức tranh đáng giá ngàn lời nói' thể hiện giá trị của hình ảnh." },
    ]
  ),

  "tin-hoc:3:thu-thach-nho-luu-va-mo-lai-tep-van-ban": practiceContent(
    "Thử thách nhỏ",
    "Lưu và mở lại tệp văn bản",
    "Hãy nhớ lại các bước lưu và mở lại một tệp văn bản.",
    [
      { question: "Điều gì có thể xảy ra nếu em không lưu tệp văn bản?", options: ["Không có gì xảy ra", "Nội dung có thể bị mất", "Máy tính sẽ tự lưu mãi mãi", "Tệp sẽ tự động in ra"], correctIndex: 1, explanation: "Nếu không lưu, nội dung có thể bị mất." },
      { question: "Để lưu tệp văn bản, em vào mục nào?", options: ["Tệp (File) > Lưu (Save)", "Xem (View)", "Trợ giúp (Help)", "Không cần vào mục nào"], correctIndex: 0, explanation: "Vào mục 'Tệp' rồi chọn 'Lưu' để lưu văn bản." },
      { question: "Để mở lại một tệp đã lưu trước đó, em làm gì?", options: ["Vào Tệp > Mở, tìm và nháy đúp vào tên tệp", "Xoá máy tính đi", "Không thể mở lại", "Gõ lại toàn bộ nội dung"], correctIndex: 0, explanation: "Vào mục 'Tệp' chọn 'Mở' để mở lại tệp đã lưu." },
      { question: "Tính năng nào giúp giảm nguy cơ mất dữ liệu khi quên lưu tệp?", options: ["Tự động lưu (auto-save)", "Không có tính năng nào", "Xoá tự động", "Tắt máy tự động"], correctIndex: 0, explanation: "Tính năng tự động lưu giúp giảm nguy cơ mất dữ liệu." },
    ]
  ),

  "tin-hoc:3:thuc-hanh-nhan-biet-thong-tin-tren-internet-co-su-ho-tro": practiceContent(
    "Thực hành",
    "Nhận biết thông tin trên Internet có sự hỗ trợ",
    "Hãy nhớ lại khái niệm Internet và cách sử dụng an toàn.",
    [
      { question: "Internet là gì?", options: ["Một loại đồ chơi", "Mạng lưới kết nối hàng triệu máy tính trên thế giới", "Một phần mềm vẽ tranh", "Một loại virus máy tính"], correctIndex: 1, explanation: "Internet là mạng lưới kết nối hàng triệu máy tính." },
      { question: "Khi sử dụng Internet, em nên làm gì?", options: ["Tự ý truy cập một mình", "Có người lớn hướng dẫn, đi cùng", "Trò chuyện với người lạ", "Không cần thận trọng gì"], correctIndex: 1, explanation: "Trẻ em nên sử dụng Internet có sự hướng dẫn của người lớn." },
      { question: "Internet có thể giúp ích gì cho việc học tập?", options: ["Không có ích gì", "Tìm kiếm thông tin, tài liệu học tập", "Chỉ dùng để chơi game", "Không liên quan đến học tập"], correctIndex: 1, explanation: "Internet là nguồn tài nguyên phong phú giúp tìm kiếm thông tin." },
      { question: "Internet trở nên phổ biến rộng rãi trên thế giới từ khoảng thời gian nào?", options: ["Những năm 1960", "Những năm 1990", "Những năm 2020", "Chưa bao giờ phổ biến"], correctIndex: 1, explanation: "Internet chỉ thực sự phổ biến rộng rãi từ những năm 1990." },
    ]
  ),

  "tin-hoc:3:luyen-tap-tri-tue-nhan-tao-ai-la-gi": practiceContent(
    "Luyện tập",
    "Trí tuệ nhân tạo (AI) là gì?",
    "Hãy nhớ lại khái niệm AI và các ví dụ gần gũi trong đời sống.",
    [
      { question: "AI là viết tắt của cụm từ nào?", options: ["Artificial Intelligence", "Automatic Internet", "Amazing Information", "Active Interaction"], correctIndex: 0, explanation: "AI là viết tắt của 'Artificial Intelligence'." },
      { question: "Ví dụ nào sau đây là một ứng dụng của AI?", options: ["Trợ lý giọng nói trên điện thoại", "Cái bút chì", "Quyển vở", "Cái bàn học"], correctIndex: 0, explanation: "Trợ lý giọng nói sử dụng công nghệ AI." },
      { question: "Điều nào sau đây đúng về AI?", options: ["AI có cảm xúc giống hệt con người", "AI là chương trình máy tính, không có cảm xúc thật", "AI không thể giúp ích gì cho con người", "AI chỉ tồn tại trong phim khoa học viễn tưởng"], correctIndex: 1, explanation: "AI là chương trình máy tính được lập trình, không có cảm xúc thật." },
      { question: "Từ 'trí tuệ nhân tạo' lần đầu được sử dụng vào khoảng thời gian nào?", options: ["Năm 1956", "Năm 1900", "Năm 2000", "Năm 2020"], correctIndex: 0, explanation: "Từ 'trí tuệ nhân tạo' lần đầu được sử dụng vào năm 1956." },
    ]
  ),

  "tin-hoc:3:van-dung-bao-ve-mat-khi-dung-thiet-bi-dien-tu": practiceContent(
    "Vận dụng",
    "Bảo vệ mắt khi dùng thiết bị điện tử",
    "Hãy nhớ lại cách bảo vệ mắt khi sử dụng máy tính, điện thoại.",
    [
      { question: "Nhìn màn hình quá lâu có thể gây ra tác hại gì?", options: ["Không có tác hại gì", "Mỏi mắt, giảm thị lực", "Giúp mắt khoẻ hơn", "Không ảnh hưởng đến giấc ngủ"], correctIndex: 1, explanation: "Nhìn màn hình quá lâu có thể gây mỏi mắt." },
      { question: "Để bảo vệ mắt, em nên làm gì khi dùng máy tính?", options: ["Ngồi sát màn hình", "Giữ khoảng cách hợp lý và cho mắt nghỉ ngơi", "Dùng thiết bị liên tục không nghỉ", "Tắt hết đèn trong phòng"], correctIndex: 1, explanation: "Giữ khoảng cách hợp lý và nghỉ ngơi định kỳ giúp bảo vệ mắt." },
      { question: "Quy tắc '20-20-20' khuyên điều gì?", options: [
          "Học 20 phút, chơi 20 phút, ngủ 20 phút",
          "Sau 20 phút nhìn màn hình, nhìn xa 20 feet trong 20 giây",
          "Ăn 20 bữa một ngày",
          "Không có quy tắc này",
        ], correctIndex: 1, explanation: "Quy tắc 20-20-20 giúp mắt được thư giãn sau khi nhìn màn hình lâu." },
      { question: "Các bác sĩ khuyên trẻ em dưới 10 tuổi nên dùng thiết bị điện tử tối đa bao lâu mỗi ngày?", options: ["1-2 tiếng", "5-6 tiếng", "Cả ngày", "Không có giới hạn"], correctIndex: 0, explanation: "Các bác sĩ khuyên nên giới hạn 1-2 tiếng mỗi ngày." },
    ]
  ),

  "tin-hoc:3:tro-choi-on-tap-tro-choi-ren-tu-duy-logic-tren-may-tinh": practiceContent(
    "Trò chơi ôn tập",
    "Trò chơi rèn tư duy logic trên máy tính",
    "Hãy nhớ lại lợi ích của các trò chơi rèn tư duy logic.",
    [
      { question: "Trò chơi rèn tư duy logic có thể giúp ích điều gì?", options: ["Không có lợi ích gì", "Rèn khả năng quan sát, suy luận", "Chỉ gây mất thời gian", "Làm giảm khả năng tập trung"], correctIndex: 1, explanation: "Trò chơi tư duy logic rèn khả năng quan sát, suy luận." },
      { question: "Ví dụ nào là trò chơi rèn tư duy logic?", options: ["Xếp hình, giải đố mê cung", "Xem phim hoạt hình", "Nghe nhạc", "Ngủ trưa"], correctIndex: 0, explanation: "Xếp hình, giải đố mê cung là trò chơi rèn tư duy logic." },
      { question: "Khi chơi trò chơi trên máy tính, em cần lưu ý điều gì?", options: ["Chơi thoải mái không giới hạn", "Chơi có kiểm soát thời gian hợp lý", "Chơi cả ngày không nghỉ", "Không cần quan tâm học tập"], correctIndex: 1, explanation: "Chơi có kiểm soát thời gian giúp cân bằng học tập và giải trí." },
      { question: "Trò chơi nào được xem là rèn luyện tư duy logic tốt nhất, được nhiều nhà khoa học nghiên cứu?", options: ["Cờ vua", "Trốn tìm", "Nhảy dây", "Đá bóng"], correctIndex: 0, explanation: "Cờ vua được xem là trò chơi rèn tư duy logic rất tốt." },
    ]
  ),

  "tin-hoc:3:thu-thach-nho-on-tap-cuoi-nam-hoc": practiceContent(
    "Thử thách nhỏ",
    "Ôn tập cuối năm học",
    "Hãy nhớ lại các kiến thức Tin Học lớp 3 trọng tâm đã học trong năm.",
    [
      { question: "Ba dạng thông tin cơ bản mà em đã học là gì?", options: ["Chữ, âm thanh, hình ảnh", "Chỉ có chữ viết", "Chỉ có âm thanh", "Không có dạng nào cụ thể"], correctIndex: 0, explanation: "Ba dạng thông tin cơ bản là chữ, âm thanh và hình ảnh." },
      { question: "Phần mềm nào giúp gõ được chữ tiếng Việt có dấu?", options: ["Unikey", "Paint", "Calculator", "Không cần phần mềm nào"], correctIndex: 0, explanation: "Unikey là phần mềm bộ gõ tiếng Việt phổ biến." },
      { question: "Khi sử dụng Internet, trẻ em nên làm gì để đảm bảo an toàn?", options: ["Tự ý dùng một mình", "Có người lớn hướng dẫn, giám sát", "Không cần thận trọng", "Trò chuyện với người lạ"], correctIndex: 1, explanation: "Trẻ em nên sử dụng Internet có sự hướng dẫn của người lớn." },
      { question: "AI là viết tắt của cụm từ nào?", options: ["Artificial Intelligence", "Automatic Internet", "Amazing Information", "Active Interaction"], correctIndex: 0, explanation: "AI là viết tắt của 'Artificial Intelligence'." },
    ]
  ),

  // ─────────────── TOÁN — LỚP 3 — 60 bài lõi mở rộng (16-75) ───────────────
  "toan:3:bang-nhan-2-3-4-5-on-tap-nhanh": {
    objectives: ["Ôn lại nhanh các bảng nhân 2, 3, 4, 5 đã học ở lớp 2.", "Tính nhẩm nhanh và chính xác.", "Vận dụng vào bài toán đơn giản."],
    sections: [
      { heading: "1. Ôn lại bảng nhân 2, 3, 4, 5", body: ["Đây là các bảng nhân em đã học ở lớp 2. Hãy đọc lại thật to để nhớ nhanh: 2×1=2, 2×2=4... đến 5×10=50."] },
      { heading: "2. Mẹo tính nhẩm nhanh", body: ["Nhân với 2 là cộng số đó với chính nó. Nhân với 4 là nhân 2 hai lần liên tiếp — mẹo này giúp em tính nhanh hơn."] },
      { heading: "3. Vận dụng", body: ["Việc thuộc chắc các bảng nhân nhỏ sẽ giúp em học các bảng nhân 6,7,8,9 nhanh và dễ dàng hơn rất nhiều."] },
    ],
    quiz: [
      { question: "4 × 6 = ?", options: ["20", "24", "28", "18"], correctIndex: 1, explanation: "4 × 6 = 24." },
      { question: "5 × 7 = ?", options: ["30", "35", "40", "25"], correctIndex: 1, explanation: "5 × 7 = 35." },
      { question: "3 × 9 = ?", options: ["24", "27", "21", "30"], correctIndex: 1, explanation: "3 × 9 = 27." },
    ],
    funFact: "Bạn có biết? Thuộc lòng bảng cửu chương giúp em tính toán nhanh hơn máy tính bỏ túi trong nhiều trường hợp đơn giản!",
  },
  "toan:3:bang-chia-2-3-4-5-on-tap-nhanh": {
    objectives: ["Ôn lại nhanh các bảng chia 2, 3, 4, 5 đã học.", "Hiểu mối liên hệ giữa bảng nhân và bảng chia.", "Tính nhẩm chia nhanh, chính xác."],
    sections: [
      { heading: "1. Ôn lại bảng chia 2, 3, 4, 5", body: ["Nếu 4×5=20 thì 20:4=5 và 20:5=4. Ôn lại các bảng chia bằng cách liên hệ ngược với bảng nhân tương ứng."] },
      { heading: "2. Luyện tính nhẩm", body: ["Khi thấy phép chia, em hãy nghĩ ngay đến bảng nhân tương ứng để tìm thương nhanh hơn."] },
      { heading: "3. Vận dụng", body: ["Bảng chia được dùng thường xuyên khi chia đều đồ vật, chia nhóm bạn chơi trò chơi."] },
    ],
    quiz: [
      { question: "24 : 4 = ?", options: ["5", "6", "7", "8"], correctIndex: 1, explanation: "4 × 6 = 24 nên 24:4=6." },
      { question: "35 : 5 = ?", options: ["6", "7", "8", "9"], correctIndex: 1, explanation: "5 × 7 = 35 nên 35:5=7." },
      { question: "27 : 3 = ?", options: ["7", "8", "9", "10"], correctIndex: 2, explanation: "3 × 9 = 27 nên 27:3=9." },
    ],
    funFact: "Bạn có biết? Phép chia là phép tính ngược của phép nhân — biết một bảng, em có thể suy ra bảng kia!",
  },
  "toan:3:nhan-so-tron-chuc-voi-so-co-mot-chu-so": {
    objectives: ["Thực hiện phép nhân số tròn chục với số có một chữ số.", "Hiểu quy tắc thêm số 0.", "Vận dụng vào bài toán thực tế."],
    sections: [
      { heading: "1. Cách nhân số tròn chục", body: ["Để nhân 30 × 4, em nhân 3 × 4 = 12 rồi thêm một chữ số 0 vào sau, được 120."] },
      { heading: "2. Ví dụ minh hoạ", body: ["50 × 6: nhân 5×6=30, thêm số 0 được 300."] },
      { heading: "3. Vận dụng", body: ["Cách tính này giúp em nhân nhanh các số tròn chục mà không cần đặt tính dài dòng."] },
    ],
    quiz: [
      { question: "40 × 3 = ?", options: ["120", "140", "12", "43"], correctIndex: 0, explanation: "4×3=12, thêm 0 được 120." },
      { question: "70 × 5 = ?", options: ["350", "75", "3500", "35"], correctIndex: 0, explanation: "7×5=35, thêm 0 được 350." },
      { question: "60 × 4 = ?", options: ["24", "240", "640", "2400"], correctIndex: 1, explanation: "6×4=24, thêm 0 được 240." },
    ],
    funFact: "Bạn có biết? Mẹo 'thêm số 0' chỉ áp dụng khi nhân với số tròn chục — đây là cách tính nhẩm rất hữu ích!",
  },
  "toan:3:chia-so-tron-tram-cho-so-co-mot-chu-so": {
    objectives: ["Thực hiện phép chia số tròn trăm cho số có một chữ số.", "Hiểu quy tắc rút gọn khi chia.", "Vận dụng vào bài toán thực tế."],
    sections: [
      { heading: "1. Cách chia số tròn trăm", body: ["Để chia 600 : 2, em chia 6 : 2 = 3 rồi thêm hai chữ số 0, được 300."] },
      { heading: "2. Ví dụ minh hoạ", body: ["800 : 4: chia 8:4=2, thêm hai số 0 được 200."] },
      { heading: "3. Vận dụng", body: ["Cách tính nhẩm này giúp em chia nhanh các số tròn trăm trong đầu."] },
    ],
    quiz: [
      { question: "600 : 3 = ?", options: ["200", "20", "2000", "2"], correctIndex: 0, explanation: "6:3=2, thêm hai số 0 được 200." },
      { question: "900 : 3 = ?", options: ["30", "300", "3000", "3"], correctIndex: 1, explanation: "9:3=3, thêm hai số 0 được 300." },
      { question: "400 : 4 = ?", options: ["10", "100", "1000", "1"], correctIndex: 1, explanation: "4:4=1, thêm hai số 0 được 100." },
    ],
    funFact: "Bạn có biết? Tính nhẩm với số tròn trăm giúp em ước lượng nhanh kết quả trong cuộc sống hàng ngày!",
  },
  "toan:3:tinh-gia-tri-bieu-thuc-co-hai-phep-tinh": {
    objectives: ["Tính đúng giá trị biểu thức có hai phép tính.", "Nắm thứ tự thực hiện phép nhân, chia trước cộng, trừ.", "Trình bày bài giải rõ ràng."],
    sections: [
      { heading: "1. Quy tắc thứ tự tính", body: ["Trong biểu thức không có dấu ngoặc, ta thực hiện nhân, chia trước; cộng, trừ sau."] },
      { heading: "2. Ví dụ minh hoạ", body: ["3 × 4 + 5 = 12 + 5 = 17 (nhân trước, cộng sau)."] },
      { heading: "3. Lưu ý khi tính", body: ["Nếu biểu thức chỉ có cộng và trừ (hoặc chỉ có nhân và chia), ta tính lần lượt từ trái sang phải."] },
    ],
    quiz: [
      { question: "5 × 2 + 3 = ?", options: ["13", "25", "10", "16"], correctIndex: 0, explanation: "5×2=10, 10+3=13." },
      { question: "20 - 4 × 3 = ?", options: ["48", "8", "16", "24"], correctIndex: 1, explanation: "4×3=12, 20-12=8." },
      { question: "6 + 3 × 5 = ?", options: ["45", "21", "30", "15"], correctIndex: 1, explanation: "3×5=15, 6+15=21." },
    ],
    funFact: "Bạn có biết? Quy tắc thứ tự thực hiện phép tính được dùng trên toàn thế giới để đảm bảo mọi người tính ra cùng một kết quả!",
  },
  "toan:3:tinh-gia-tri-bieu-thuc-co-dau-ngoac": {
    objectives: ["Tính đúng giá trị biểu thức có dấu ngoặc đơn.", "Nắm quy tắc ưu tiên tính trong ngoặc trước.", "Trình bày bài giải rõ ràng."],
    sections: [
      { heading: "1. Quy tắc với dấu ngoặc", body: ["Khi biểu thức có dấu ngoặc, ta luôn tính phần trong ngoặc trước, sau đó mới tính tiếp theo thứ tự thông thường."] },
      { heading: "2. Ví dụ minh hoạ", body: ["(3 + 2) × 4 = 5 × 4 = 20 (tính trong ngoặc trước)."] },
      { heading: "3. So sánh có và không có ngoặc", body: ["3 + 2 × 4 = 3+8 = 11, nhưng (3+2) × 4 = 20 — dấu ngoặc làm thay đổi kết quả!"] },
    ],
    quiz: [
      { question: "(4 + 3) × 2 = ?", options: ["10", "14", "9", "11"], correctIndex: 1, explanation: "4+3=7, 7×2=14." },
      { question: "(10 - 4) : 2 = ?", options: ["3", "6", "8", "2"], correctIndex: 0, explanation: "10-4=6, 6:2=3." },
      { question: "5 × (6 - 2) = ?", options: ["28", "20", "30", "18"], correctIndex: 1, explanation: "6-2=4, 5×4=20." },
    ],
    funFact: "Bạn có biết? Dấu ngoặc trong toán học giống như một 'ưu tiên đặc biệt' — luôn được xử lý trước tiên!",
  },
  "toan:3:thu-tu-thuc-hien-phep-tinh": {
    objectives: ["Nắm vững thứ tự thực hiện các phép tính trong biểu thức.", "Áp dụng đúng quy tắc khi có nhiều phép tính.", "Tránh sai sót khi tính biểu thức phức tạp."],
    sections: [
      { heading: "1. Thứ tự ưu tiên", body: ["Trong ngoặc trước → nhân, chia → cộng, trừ. Đây là thứ tự em cần nhớ khi gặp biểu thức nhiều phép tính."] },
      { heading: "2. Ví dụ tổng hợp", body: ["(2 + 3) × 4 - 5 = 5×4-5 = 20-5 = 15."] },
      { heading: "3. Kiểm tra lại", body: ["Sau khi tính, em nên đọc lại biểu thức một lần nữa để chắc chắn không bỏ sót bước nào."] },
    ],
    quiz: [
      { question: "2 + 3 × 4 - 1 = ?", options: ["19", "13", "15", "9"], correctIndex: 1, explanation: "3×4=12, 2+12-1=13." },
      { question: "(6 - 2) × 3 + 1 = ?", options: ["13", "12", "15", "10"], correctIndex: 0, explanation: "6-2=4, 4×3=12, 12+1=13." },
      { question: "10 - (2 + 3) = ?", options: ["5", "9", "11", "15"], correctIndex: 0, explanation: "2+3=5, 10-5=5." },
    ],
    funFact: "Bạn có biết? Nếu tính sai thứ tự, kết quả biểu thức có thể hoàn toàn khác — vì vậy quy tắc này rất quan trọng!",
  },
  "toan:3:bai-toan-ve-nhieu-hon-it-hon-mot-so-don-vi": {
    objectives: ["Giải được bài toán về nhiều hơn, ít hơn một số đơn vị.", "Xác định đúng phép tính cần dùng.", "Trình bày lời giải rõ ràng."],
    sections: [
      { heading: "1. Dạng toán nhiều hơn", body: ["Khi đề bài nói 'nhiều hơn', em thường dùng phép cộng để tìm số lớn hơn."] },
      { heading: "2. Dạng toán ít hơn", body: ["Khi đề bài nói 'ít hơn', em thường dùng phép trừ để tìm số nhỏ hơn."] },
      { heading: "3. Ví dụ minh hoạ", body: ["Lan có 15 viên bi, Hùng có nhiều hơn Lan 6 viên. Hùng có: 15+6=21 viên bi."] },
    ],
    quiz: [
      { question: "An có 20 quyển vở, Bình có ít hơn An 5 quyển. Bình có bao nhiêu quyển vở?", options: ["15", "25", "10", "20"], correctIndex: 0, explanation: "20-5=15 quyển." },
      { question: "Hộp A có 12 bút, hộp B có nhiều hơn hộp A 4 bút. Hộp B có bao nhiêu bút?", options: ["8", "16", "14", "20"], correctIndex: 1, explanation: "12+4=16 bút." },
      { question: "Từ 'nhiều hơn' trong bài toán thường gợi ý dùng phép tính gì?", options: ["Phép cộng", "Phép trừ", "Phép nhân", "Phép chia"], correctIndex: 0, explanation: "Từ 'nhiều hơn' thường gợi ý phép cộng." },
    ],
    funFact: "Bạn có biết? Đọc kỹ từ khoá trong đề bài (nhiều hơn, ít hơn) là chìa khoá để chọn đúng phép tính!",
  },
  "toan:3:bai-toan-ve-gap-mot-so-len-nhieu-lan": {
    objectives: ["Giải được bài toán về gấp một số lên nhiều lần.", "Hiểu ý nghĩa phép nhân trong dạng toán này.", "Trình bày lời giải rõ ràng."],
    sections: [
      { heading: "1. Gấp lên nhiều lần là gì?", body: ["Gấp một số lên nhiều lần nghĩa là nhân số đó với số lần được gấp. Ví dụ gấp 5 lên 3 lần là 5×3=15."] },
      { heading: "2. Cách nhận biết", body: ["Đề bài thường có từ 'gấp ... lần' — đây là dấu hiệu để em dùng phép nhân."] },
      { heading: "3. Ví dụ minh hoạ", body: ["Vườn nhà có 4 cây cam, số cây bưởi gấp 3 lần số cây cam. Số cây bưởi là: 4×3=12 cây."] },
    ],
    quiz: [
      { question: "Số 6 gấp lên 4 lần là bao nhiêu?", options: ["10", "24", "20", "18"], correctIndex: 1, explanation: "6×4=24." },
      { question: "Lớp 3A có 8 bạn nam, số bạn nữ gấp 2 lần số bạn nam. Lớp có bao nhiêu bạn nữ?", options: ["10", "16", "14", "12"], correctIndex: 1, explanation: "8×2=16 bạn nữ." },
      { question: "Từ 'gấp ... lần' trong bài toán gợi ý dùng phép tính gì?", options: ["Phép cộng", "Phép trừ", "Phép nhân", "Phép chia"], correctIndex: 2, explanation: "'Gấp lên nhiều lần' dùng phép nhân." },
    ],
    funFact: "Bạn có biết? 'Gấp đôi' nghĩa là gấp lên 2 lần, còn 'gấp ba' nghĩa là gấp lên 3 lần!",
  },
  "toan:3:bai-toan-ve-giam-mot-so-di-nhieu-lan": {
    objectives: ["Giải được bài toán về giảm một số đi nhiều lần.", "Hiểu ý nghĩa phép chia trong dạng toán này.", "Trình bày lời giải rõ ràng."],
    sections: [
      { heading: "1. Giảm đi nhiều lần là gì?", body: ["Giảm một số đi nhiều lần nghĩa là chia số đó cho số lần được giảm. Ví dụ giảm 20 đi 4 lần là 20:4=5."] },
      { heading: "2. Cách nhận biết", body: ["Đề bài thường có từ 'giảm ... lần' — đây là dấu hiệu để em dùng phép chia."] },
      { heading: "3. Ví dụ minh hoạ", body: ["Có 24 quả táo, số quả cam ít hơn số quả táo 4 lần (tức bằng 1/4). Số quả cam là: 24:4=6 quả."] },
    ],
    quiz: [
      { question: "Số 36 giảm đi 4 lần là bao nhiêu?", options: ["9", "32", "40", "6"], correctIndex: 0, explanation: "36:4=9." },
      { question: "Có 45 quả bóng, giảm đi 5 lần được bao nhiêu quả?", options: ["9", "40", "225", "5"], correctIndex: 0, explanation: "45:5=9." },
      { question: "Từ 'giảm ... lần' trong bài toán gợi ý dùng phép tính gì?", options: ["Phép cộng", "Phép trừ", "Phép nhân", "Phép chia"], correctIndex: 3, explanation: "'Giảm đi nhiều lần' dùng phép chia." },
    ],
    funFact: "Bạn có biết? 'Giảm đi nhiều lần' khác với 'giảm đi nhiều đơn vị' — một bên dùng phép chia, một bên dùng phép trừ!",
  },
  "toan:3:so-sanh-so-be-bang-mot-phan-may-so-lon": {
    objectives: ["So sánh được số bé bằng một phần mấy số lớn.", "Hiểu ý nghĩa của phép chia trong so sánh.", "Trình bày lời giải rõ ràng."],
    sections: [
      { heading: "1. Cách so sánh", body: ["Muốn biết số bé bằng một phần mấy số lớn, ta lấy số lớn chia cho số bé."] },
      { heading: "2. Ví dụ minh hoạ", body: ["8 và 2: 8:2=4, vậy 2 bằng 1/4 của 8."] },
      { heading: "3. Vận dụng", body: ["Dạng toán này thường xuất hiện khi so sánh số lượng giữa hai nhóm đồ vật."] },
    ],
    quiz: [
      { question: "Số 3 bằng một phần mấy của số 15?", options: ["1/3", "1/5", "1/15", "1/45"], correctIndex: 1, explanation: "15:3=5, vậy 3 bằng 1/5 của 15." },
      { question: "Số 4 bằng một phần mấy của số 24?", options: ["1/4", "1/6", "1/8", "1/24"], correctIndex: 1, explanation: "24:4=6, vậy 4 bằng 1/6 của 24." },
      { question: "Để tìm số bé bằng một phần mấy số lớn, ta làm phép tính gì?", options: ["Số lớn cộng số bé", "Số lớn chia số bé", "Số lớn trừ số bé", "Số lớn nhân số bé"], correctIndex: 1, explanation: "Lấy số lớn chia cho số bé." },
    ],
    funFact: "Bạn có biết? Dạng toán so sánh phần này là bước đầu giúp em làm quen với khái niệm phân số và tỉ số sau này!",
  },
  "toan:3:tien-viet-nam-nhan-biet-menh-gia": {
    objectives: ["Nhận biết được các mệnh giá tiền Việt Nam thường gặp.", "Phân biệt tiền giấy và tiền xu.", "Vận dụng vào tình huống mua sắm đơn giản."],
    sections: [
      { heading: "1. Các mệnh giá tiền giấy", body: ["Tiền giấy Việt Nam có các mệnh giá: 1000đ, 2000đ, 5000đ, 10 000đ, 20 000đ, 50 000đ, 100 000đ, 200 000đ, 500 000đ."] },
      { heading: "2. Tiền xu", body: ["Trước đây Việt Nam cũng có tiền xu mệnh giá nhỏ như 200đ, 500đ, 1000đ, 2000đ, 5000đ."] },
      { heading: "3. Nhận biết qua màu sắc, hình ảnh", body: ["Mỗi mệnh giá tiền có màu sắc và hình ảnh đặc trưng riêng để dễ phân biệt."] },
    ],
    quiz: [
      { question: "Tờ tiền nào có mệnh giá lớn nhất trong các tờ sau?", options: ["10 000đ", "50 000đ", "100 000đ", "5000đ"], correctIndex: 2, explanation: "100 000đ lớn hơn các mệnh giá còn lại." },
      { question: "2 tờ 10 000đ có tổng giá trị là bao nhiêu?", options: ["15 000đ", "20 000đ", "10 000đ", "100 000đ"], correctIndex: 1, explanation: "10 000 × 2 = 20 000đ." },
      { question: "Tiền Việt Nam hiện nay chủ yếu là loại tiền gì?", options: ["Chỉ có tiền xu", "Chỉ có tiền giấy và tiền polymer", "Không có tiền nào", "Chỉ có vàng"], correctIndex: 1, explanation: "Tiền Việt Nam hiện nay chủ yếu là tiền giấy/polymer." },
    ],
    funFact: "Bạn có biết? Tiền polymer (nhựa dẻo) của Việt Nam bền hơn và khó làm giả hơn tiền giấy thông thường!",
  },
  "toan:3:bai-toan-ve-tien-mua-sam-don-gian": {
    objectives: ["Giải được bài toán tính tiền khi mua sắm đơn giản.", "Tính đúng tiền thừa khi trả tiền.", "Vận dụng vào tình huống thực tế."],
    sections: [
      { heading: "1. Tính tổng tiền phải trả", body: ["Khi mua nhiều món đồ, em cộng giá tiền các món lại để biết tổng số tiền cần trả."] },
      { heading: "2. Tính tiền thừa", body: ["Tiền thừa = Số tiền đưa - Số tiền phải trả."] },
      { heading: "3. Ví dụ minh hoạ", body: ["Mua bút giá 5000đ, đưa tờ 10 000đ. Tiền thừa là: 10 000-5000=5000đ."] },
    ],
    quiz: [
      { question: "Mua 2 quyển vở, mỗi quyển 8000đ. Tổng tiền phải trả là bao nhiêu?", options: ["10 000đ", "16 000đ", "18 000đ", "8000đ"], correctIndex: 1, explanation: "8000×2=16 000đ." },
      { question: "Mua kẹo giá 7000đ, đưa tờ 20 000đ. Tiền thừa là bao nhiêu?", options: ["13 000đ", "27 000đ", "7000đ", "3000đ"], correctIndex: 0, explanation: "20 000-7000=13 000đ." },
      { question: "Để tính tiền thừa, em làm phép tính gì?", options: ["Cộng", "Trừ", "Nhân", "Chia"], correctIndex: 1, explanation: "Tiền thừa = tiền đưa - tiền phải trả (phép trừ)." },
    ],
    funFact: "Bạn có biết? Biết tính tiền khi mua sắm là kỹ năng toán học em sẽ dùng suốt đời!",
  },
  "toan:3:xem-dong-ho-gio-phut": {
    objectives: ["Đọc chính xác giờ, phút trên đồng hồ kim.", "Phân biệt kim giờ và kim phút.", "Vận dụng vào tình huống thực tế."],
    sections: [
      { heading: "1. Kim giờ và kim phút", body: ["Kim ngắn là kim giờ, kim dài là kim phút. Khi kim phút đi hết một vòng (60 phút) thì kim giờ di chuyển sang số tiếp theo."] },
      { heading: "2. Cách đọc giờ, phút", body: ["Ví dụ kim giờ chỉ số 3, kim phút chỉ số 6 (tức 30 phút), ta đọc là 3 giờ 30 phút."] },
      { heading: "3. Vận dụng", body: ["Biết xem giờ giúp em quản lý thời gian học tập, sinh hoạt hàng ngày tốt hơn."] },
    ],
    quiz: [
      { question: "Kim phút chỉ số 3 nghĩa là bao nhiêu phút?", options: ["3 phút", "15 phút", "30 phút", "45 phút"], correctIndex: 1, explanation: "Mỗi số trên mặt đồng hồ ứng với 5 phút, 3×5=15 phút." },
      { question: "Một giờ có bao nhiêu phút?", options: ["24 phút", "30 phút", "60 phút", "100 phút"], correctIndex: 2, explanation: "1 giờ = 60 phút." },
      { question: "Kim nào trên đồng hồ di chuyển nhanh hơn?", options: ["Kim giờ", "Kim phút", "Cả hai như nhau", "Không có kim nào di chuyển"], correctIndex: 1, explanation: "Kim phút di chuyển nhanh hơn kim giờ." },
    ],
    funFact: "Bạn có biết? Đồng hồ cơ học đầu tiên trên thế giới ra đời từ hơn 700 năm trước!",
  },
  "toan:3:xem-lich-ngay-thang-nam": {
    objectives: ["Đọc đúng thông tin ngày, tháng, năm trên tờ lịch.", "Biết một năm có bao nhiêu tháng, một tháng có bao nhiêu ngày.", "Vận dụng vào tình huống thực tế."],
    sections: [
      { heading: "1. Một năm có bao nhiêu tháng?", body: ["Một năm có 12 tháng, từ tháng 1 đến tháng 12."] },
      { heading: "2. Số ngày trong mỗi tháng", body: ["Các tháng có 31 ngày, 30 ngày hoặc 28-29 ngày (tháng 2) tùy theo từng tháng."] },
      { heading: "3. Đọc lịch", body: ["Khi đọc lịch, em cần xác định đúng thứ, ngày, tháng, năm của sự kiện cần tìm."] },
    ],
    quiz: [
      { question: "Một năm có bao nhiêu tháng?", options: ["10", "11", "12", "13"], correctIndex: 2, explanation: "Một năm có 12 tháng." },
      { question: "Tháng nào thường có ít ngày nhất trong năm?", options: ["Tháng 1", "Tháng 2", "Tháng 6", "Tháng 12"], correctIndex: 1, explanation: "Tháng 2 thường chỉ có 28 hoặc 29 ngày." },
      { question: "Tháng 4 thường có bao nhiêu ngày?", options: ["28", "29", "30", "31"], correctIndex: 2, explanation: "Tháng 4 có 30 ngày." },
    ],
    funFact: "Bạn có biết? Cứ 4 năm lại có một năm nhuận với tháng 2 có 29 ngày thay vì 28 ngày!",
  },
  "toan:3:do-do-dai-bang-met-de-xi-met": {
    objectives: ["Làm quen đơn vị đo độ dài mét, đề-xi-mét.", "Biết mối quan hệ giữa các đơn vị.", "Ước lượng độ dài đồ vật quen thuộc."],
    sections: [
      { heading: "1. Đơn vị mét", body: ["Mét (viết tắt m) là đơn vị đo độ dài cơ bản, thường dùng đo chiều dài lớp học, sân trường."] },
      { heading: "2. Đơn vị đề-xi-mét", body: ["1 mét = 10 đề-xi-mét (dm). Đề-xi-mét dùng đo các vật có độ dài vừa phải."] },
      { heading: "3. Ước lượng thực tế", body: ["Chiều cao một cái bàn học khoảng 7dm, chiều dài lớp học khoảng 8m."] },
    ],
    quiz: [
      { question: "1 mét bằng bao nhiêu đề-xi-mét?", options: ["1dm", "10dm", "100dm", "1000dm"], correctIndex: 1, explanation: "1m = 10dm." },
      { question: "3 mét bằng bao nhiêu đề-xi-mét?", options: ["3dm", "13dm", "30dm", "300dm"], correctIndex: 2, explanation: "3m = 30dm." },
      { question: "Đơn vị nào phù hợp để đo chiều dài sân trường?", options: ["mm", "cm", "dm", "m"], correctIndex: 3, explanation: "Mét phù hợp để đo khoảng cách lớn như sân trường." },
    ],
    funFact: "Bạn có biết? Đơn vị mét được định nghĩa lần đầu vào thế kỷ 18 dựa trên khoảng cách từ xích đạo đến cực Bắc Trái Đất!",
  },
  "toan:3:doi-don-vi-do-do-dai": {
    objectives: ["Chuyển đổi được giữa các đơn vị đo độ dài đã học.", "Ghi nhớ bảng đơn vị đo độ dài.", "Vận dụng vào bài toán thực tế."],
    sections: [
      { heading: "1. Bảng đơn vị đo độ dài", body: ["km, m, dm, cm, mm — mỗi đơn vị liền kề gấp/kém nhau 10 lần (riêng km và m gấp nhau 1000 lần)."] },
      { heading: "2. Cách đổi đơn vị", body: ["Đổi từ đơn vị lớn sang nhỏ: nhân với 10 (hoặc 1000 với km-m). Đổi từ nhỏ sang lớn: chia cho 10 (hoặc 1000)."] },
      { heading: "3. Ví dụ minh hoạ", body: ["2m = 20dm = 200cm."] },
    ],
    quiz: [
      { question: "5m bằng bao nhiêu cm?", options: ["50cm", "500cm", "5000cm", "5cm"], correctIndex: 1, explanation: "1m=100cm nên 5m=500cm." },
      { question: "3dm bằng bao nhiêu cm?", options: ["3cm", "30cm", "300cm", "0.3cm"], correctIndex: 1, explanation: "1dm=10cm nên 3dm=30cm." },
      { question: "100cm bằng bao nhiêu mét?", options: ["1m", "10m", "100m", "0.1m"], correctIndex: 0, explanation: "100cm = 1m." },
    ],
    funFact: "Bạn có biết? Hệ đo lường mét là hệ thống được sử dụng chính thức ở hầu hết các quốc gia trên thế giới!",
  },
  "toan:3:diem-o-giua-trung-diem-cua-doan-thang": {
    objectives: ["Nhận biết điểm ở giữa hai điểm cho trước.", "Nhận biết trung điểm của đoạn thẳng.", "Vận dụng vào bài tập hình học đơn giản."],
    sections: [
      { heading: "1. Điểm ở giữa", body: ["Điểm M nằm giữa A và B khi M nằm trên đoạn thẳng AB, giữa hai điểm A và B."] },
      { heading: "2. Trung điểm", body: ["Trung điểm là điểm ở giữa và cách đều hai đầu đoạn thẳng. Nếu M là trung điểm của AB thì AM = MB."] },
      { heading: "3. Ví dụ minh hoạ", body: ["Đoạn thẳng AB dài 10cm, trung điểm M chia AB thành hai đoạn bằng nhau, mỗi đoạn dài 5cm."] },
    ],
    quiz: [
      { question: "Trung điểm của một đoạn thẳng chia đoạn đó thành mấy phần bằng nhau?", options: ["1", "2", "3", "4"], correctIndex: 1, explanation: "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau." },
      { question: "Đoạn thẳng AB dài 8cm, M là trung điểm. Đoạn AM dài bao nhiêu?", options: ["2cm", "4cm", "6cm", "8cm"], correctIndex: 1, explanation: "8:2=4cm." },
      { question: "Điểm ở giữa hai điểm A, B có đặc điểm gì?", options: ["Nằm ngoài đoạn AB", "Nằm trên đoạn AB, giữa A và B", "Trùng với điểm A", "Không xác định được"], correctIndex: 1, explanation: "Điểm ở giữa nằm trên đoạn thẳng, giữa hai điểm A và B." },
    ],
    funFact: "Bạn có biết? Khái niệm trung điểm rất quan trọng trong hình học, được dùng nhiều ở các lớp học cao hơn!",
  },
  "toan:3:hinh-tam-giac-nhan-biet-va-dac-diem": {
    objectives: ["Nhận biết hình tam giác trong thực tế.", "Nêu được đặc điểm của hình tam giác.", "Phân biệt hình tam giác với các hình khác."],
    sections: [
      { heading: "1. Hình tam giác là gì?", body: ["Hình tam giác là hình có 3 cạnh và 3 góc, 3 đỉnh."] },
      { heading: "2. Đặc điểm", body: ["Ba cạnh của tam giác nối với nhau tạo thành ba góc. Có nhiều loại tam giác khác nhau về hình dạng."] },
      { heading: "3. Hình tam giác trong thực tế", body: ["Mái nhà, biển báo giao thông, cờ đuôi nheo... đều có thể có dạng hình tam giác."] },
    ],
    quiz: [
      { question: "Hình tam giác có bao nhiêu cạnh?", options: ["2", "3", "4", "5"], correctIndex: 1, explanation: "Hình tam giác có 3 cạnh." },
      { question: "Hình tam giác có bao nhiêu đỉnh?", options: ["2", "3", "4", "5"], correctIndex: 1, explanation: "Hình tam giác có 3 đỉnh." },
      { question: "Đồ vật nào sau đây thường có dạng hình tam giác?", options: ["Bánh xe", "Biển báo giao thông hình tam giác", "Quyển sách", "Viên gạch"], correctIndex: 1, explanation: "Nhiều biển báo giao thông có dạng hình tam giác." },
    ],
    funFact: "Bạn có biết? Hình tam giác là hình đa giác có ít cạnh nhất và cũng là hình rất chắc chắn trong xây dựng!",
  },
  "toan:3:hinh-tu-giac-nhan-biet-va-dac-diem": {
    objectives: ["Nhận biết hình tứ giác trong thực tế.", "Nêu được đặc điểm của hình tứ giác.", "Phân biệt hình tứ giác với các hình khác."],
    sections: [
      { heading: "1. Hình tứ giác là gì?", body: ["Hình tứ giác là hình có 4 cạnh và 4 góc, 4 đỉnh."] },
      { heading: "2. Đặc điểm", body: ["Hình chữ nhật và hình vuông đều là những trường hợp đặc biệt của hình tứ giác."] },
      { heading: "3. Hình tứ giác trong thực tế", body: ["Cửa sổ, quyển sách, mặt bàn... thường có dạng hình tứ giác."] },
    ],
    quiz: [
      { question: "Hình tứ giác có bao nhiêu cạnh?", options: ["3", "4", "5", "6"], correctIndex: 1, explanation: "Hình tứ giác có 4 cạnh." },
      { question: "Hình nào sau đây KHÔNG phải là hình tứ giác?", options: ["Hình vuông", "Hình chữ nhật", "Hình tam giác", "Hình thang"], correctIndex: 2, explanation: "Hình tam giác chỉ có 3 cạnh, không phải tứ giác." },
      { question: "Hình chữ nhật là một loại hình gì?", options: ["Hình tam giác", "Hình tứ giác đặc biệt", "Hình tròn", "Không phải hình nào"], correctIndex: 1, explanation: "Hình chữ nhật là một loại hình tứ giác đặc biệt." },
    ],
    funFact: "Bạn có biết? Có rất nhiều loại hình tứ giác khác nhau: hình vuông, hình chữ nhật, hình thang, hình bình hành...!",
  },
  "toan:3:chu-vi-hinh-tam-giac": {
    objectives: ["Nêu được công thức tính chu vi hình tam giác.", "Tính được chu vi khi biết độ dài ba cạnh.", "Vận dụng vào bài toán thực tế."],
    sections: [
      { heading: "1. Công thức tính chu vi", body: ["Chu vi hình tam giác bằng tổng độ dài ba cạnh: Chu vi = cạnh 1 + cạnh 2 + cạnh 3."] },
      { heading: "2. Ví dụ minh hoạ", body: ["Tam giác có ba cạnh 3cm, 4cm, 5cm. Chu vi là: 3+4+5=12cm."] },
      { heading: "3. Trường hợp đặc biệt", body: ["Nếu tam giác có ba cạnh bằng nhau (tam giác đều), chu vi = cạnh × 3."] },
    ],
    quiz: [
      { question: "Tam giác có ba cạnh 6cm, 7cm, 8cm. Chu vi là bao nhiêu?", options: ["20cm", "21cm", "22cm", "23cm"], correctIndex: 1, explanation: "6+7+8=21cm." },
      { question: "Tam giác đều có cạnh 5cm. Chu vi là bao nhiêu?", options: ["10cm", "15cm", "20cm", "25cm"], correctIndex: 1, explanation: "5×3=15cm." },
      { question: "Công thức tính chu vi tam giác là gì?", options: ["Tổng ba cạnh", "Tích ba cạnh", "Cạnh × 4", "Cạnh × 2"], correctIndex: 0, explanation: "Chu vi tam giác = tổng độ dài ba cạnh." },
    ],
    funFact: "Bạn có biết? Công thức tính chu vi áp dụng cho mọi loại tam giác, dù hình dạng khác nhau!",
  },
  "toan:3:compa-lam-quen-va-ve-hinh-tron": {
    objectives: ["Làm quen với compa và cách cầm compa.", "Vẽ được hình tròn đơn giản bằng compa.", "Sử dụng compa an toàn."],
    sections: [
      { heading: "1. Compa là gì?", body: ["Compa là dụng cụ có hai chân, một chân có kim nhọn để cố định, chân kia gắn bút chì để vẽ hình tròn."] },
      { heading: "2. Cách vẽ hình tròn", body: ["Đặt kim compa cố định tại một điểm (tâm), mở compa theo bán kính mong muốn, xoay compa một vòng để vẽ hình tròn."] },
      { heading: "3. Sử dụng an toàn", body: ["Kim compa rất nhọn, em cần cẩn thận khi sử dụng để tránh gây thương tích cho bản thân và bạn bè."] },
    ],
    quiz: [
      { question: "Compa dùng để làm gì?", options: ["Đo góc", "Vẽ hình tròn", "Đo khối lượng", "Viết chữ"], correctIndex: 1, explanation: "Compa dùng để vẽ hình tròn." },
      { question: "Compa có mấy chân?", options: ["1", "2", "3", "4"], correctIndex: 1, explanation: "Compa có 2 chân." },
      { question: "Khi sử dụng compa, em cần lưu ý điều gì?", options: ["Không cần cẩn thận", "Cẩn thận vì kim compa rất nhọn", "Dùng thật mạnh tay", "Không cần giữ cố định tâm"], correctIndex: 1, explanation: "Kim compa nhọn nên cần sử dụng cẩn thận." },
    ],
    funFact: "Bạn có biết? Compa đã được con người sử dụng từ thời Hy Lạp cổ đại để nghiên cứu hình học!",
  },
  "toan:3:tam-ban-kinh-duong-kinh-hinh-tron": {
    objectives: ["Nhận biết tâm, bán kính, đường kính của hình tròn.", "Nêu được mối quan hệ giữa bán kính và đường kính.", "Vận dụng vào bài tập đơn giản."],
    sections: [
      { heading: "1. Tâm hình tròn", body: ["Tâm là điểm nằm chính giữa hình tròn, cách đều mọi điểm trên đường tròn."] },
      { heading: "2. Bán kính và đường kính", body: ["Bán kính là đoạn thẳng nối từ tâm đến một điểm trên đường tròn. Đường kính là đoạn thẳng đi qua tâm, nối hai điểm đối diện trên đường tròn."] },
      { heading: "3. Mối quan hệ", body: ["Đường kính luôn gấp đôi bán kính: Đường kính = Bán kính × 2."] },
    ],
    quiz: [
      { question: "Bán kính hình tròn là 5cm. Đường kính là bao nhiêu?", options: ["5cm", "10cm", "15cm", "2.5cm"], correctIndex: 1, explanation: "Đường kính = 5×2=10cm." },
      { question: "Đường kính hình tròn là 16cm. Bán kính là bao nhiêu?", options: ["4cm", "8cm", "32cm", "16cm"], correctIndex: 1, explanation: "Bán kính = 16:2=8cm." },
      { question: "Điểm nào cách đều mọi điểm trên đường tròn?", options: ["Điểm bất kỳ", "Tâm", "Điểm trên đường kính", "Không có điểm nào"], correctIndex: 1, explanation: "Tâm cách đều mọi điểm trên đường tròn." },
    ],
    funFact: "Bạn có biết? Bánh xe hình tròn giúp xe di chuyển êm ái vì khoảng cách từ tâm đến mặt đường luôn không đổi!",
  },
  "toan:3:bai-toan-tinh-tuoi-don-gian": {
    objectives: ["Giải được bài toán tính tuổi đơn giản.", "Hiểu mối quan hệ về tuổi giữa các thành viên trong gia đình.", "Trình bày lời giải rõ ràng."],
    sections: [
      { heading: "1. Cách giải bài toán tuổi", body: ["Bài toán tuổi thường dùng phép cộng hoặc trừ để tìm tuổi của người này khi biết tuổi người kia và mối quan hệ hơn kém."] },
      { heading: "2. Ví dụ minh hoạ", body: ["Em năm nay 9 tuổi, mẹ hơn em 27 tuổi. Tuổi của mẹ là: 9+27=36 tuổi."] },
      { heading: "3. Lưu ý", body: ["Sau một số năm, tuổi của cả hai người đều tăng lên cùng một số năm như nhau."] },
    ],
    quiz: [
      { question: "Em 8 tuổi, anh hơn em 5 tuổi. Anh bao nhiêu tuổi?", options: ["3", "13", "10", "12"], correctIndex: 1, explanation: "8+5=13 tuổi." },
      { question: "Bố 35 tuổi, con kém bố 27 tuổi. Con bao nhiêu tuổi?", options: ["8", "10", "62", "7"], correctIndex: 0, explanation: "35-27=8 tuổi." },
      { question: "Sau 5 năm nữa, tuổi của em sẽ thay đổi thế nào?", options: ["Tăng thêm 5 tuổi", "Giảm 5 tuổi", "Không đổi", "Tăng gấp đôi"], correctIndex: 0, explanation: "Mỗi năm trôi qua, tuổi tăng thêm 1, sau 5 năm tăng thêm 5 tuổi." },
    ],
    funFact: "Bạn có biết? Hiệu số tuổi giữa hai người luôn không đổi theo thời gian, dù cả hai đều lớn lên mỗi năm!",
  },
  "toan:3:day-so-cach-deu-quy-luat-va-dien-so": {
    objectives: ["Nhận biết quy luật của dãy số cách đều.", "Điền đúng số còn thiếu trong dãy số.", "Vận dụng vào bài tập thực hành."],
    sections: [
      { heading: "1. Dãy số cách đều là gì?", body: ["Dãy số cách đều là dãy số mà khoảng cách giữa hai số liền nhau luôn bằng nhau. Ví dụ: 2, 4, 6, 8... (cách đều 2 đơn vị)."] },
      { heading: "2. Tìm quy luật", body: ["Để tìm quy luật, em lấy số sau trừ số liền trước để biết khoảng cách chung."] },
      { heading: "3. Điền số còn thiếu", body: ["Sau khi biết quy luật, em cộng (hoặc trừ) khoảng cách chung vào số đã biết để tìm số còn thiếu."] },
    ],
    quiz: [
      { question: "Dãy số 5, 10, 15, 20, ... Số tiếp theo là gì?", options: ["21", "25", "30", "22"], correctIndex: 1, explanation: "Dãy cách đều 5 đơn vị, số tiếp theo là 20+5=25." },
      { question: "Dãy số 3, 6, 9, __, 15. Số còn thiếu là gì?", options: ["10", "11", "12", "13"], correctIndex: 2, explanation: "Dãy cách đều 3 đơn vị, số còn thiếu là 9+3=12." },
      { question: "Dãy số 100, 90, 80, 70, ... cách đều bao nhiêu đơn vị?", options: ["5", "10", "15", "20"], correctIndex: 1, explanation: "100-90=10, dãy cách đều 10 đơn vị (giảm dần)." },
    ],
    funFact: "Bạn có biết? Dãy số cách đều là nền tảng cho khái niệm 'cấp số cộng' mà em sẽ học ở các lớp cao hơn!",
  },
  "toan:3:phep-nhan-voi-so-0-va-so-1": {
    objectives: ["Nắm được tính chất khi nhân với số 0.", "Nắm được tính chất khi nhân với số 1.", "Vận dụng vào tính nhẩm nhanh."],
    sections: [
      { heading: "1. Nhân với số 0", body: ["Bất kỳ số nào nhân với 0 đều bằng 0. Ví dụ: 7×0=0, 100×0=0."] },
      { heading: "2. Nhân với số 1", body: ["Bất kỳ số nào nhân với 1 đều bằng chính số đó. Ví dụ: 7×1=7, 100×1=100."] },
      { heading: "3. Vận dụng tính nhẩm", body: ["Nhớ hai tính chất này giúp em tính nhẩm nhanh hơn khi gặp phép nhân có số 0 hoặc số 1."] },
    ],
    quiz: [
      { question: "125 × 0 = ?", options: ["0", "1", "125", "1250"], correctIndex: 0, explanation: "Bất kỳ số nào nhân với 0 đều bằng 0." },
      { question: "48 × 1 = ?", options: ["0", "1", "48", "49"], correctIndex: 2, explanation: "Bất kỳ số nào nhân với 1 đều bằng chính nó." },
      { question: "0 × 999 = ?", options: ["999", "0", "1", "9990"], correctIndex: 1, explanation: "0 nhân với số nào cũng bằng 0." },
    ],
    funFact: "Bạn có biết? Số 0 và số 1 có những tính chất đặc biệt trong toán học mà không số nào khác có được!",
  },
  "toan:3:phep-chia-co-so-du": {
    objectives: ["Thực hiện được phép chia có dư.", "Hiểu ý nghĩa của số dư.", "Vận dụng vào bài toán thực tế."],
    sections: [
      { heading: "1. Phép chia có dư là gì?", body: ["Khi số bị chia không chia hết cho số chia, phép chia sẽ có số dư. Số dư luôn nhỏ hơn số chia."] },
      { heading: "2. Ví dụ minh hoạ", body: ["17 : 5 = 3 (dư 2), vì 5×3=15, còn dư 17-15=2."] },
      { heading: "3. Vận dụng thực tế", body: ["Khi chia 17 quả táo cho 5 bạn, mỗi bạn được 3 quả, còn dư 2 quả."] },
    ],
    quiz: [
      { question: "19 : 4 = ? (dư bao nhiêu)", options: ["4 dư 3", "5 dư 1", "4 dư 2", "5 dư 0"], correctIndex: 0, explanation: "4×4=16, 19-16=3, vậy 19:4=4 dư 3." },
      { question: "Trong phép chia có dư, số dư phải như thế nào so với số chia?", options: ["Lớn hơn số chia", "Bằng số chia", "Nhỏ hơn số chia", "Không có quy tắc"], correctIndex: 2, explanation: "Số dư luôn nhỏ hơn số chia." },
      { question: "23 : 6 = ? (dư bao nhiêu)", options: ["3 dư 5", "4 dư 0", "3 dư 4", "4 dư 1"], correctIndex: 0, explanation: "6×3=18, 23-18=5, vậy 23:6=3 dư 5." },
    ],
    funFact: "Bạn có biết? Phép chia có dư được dùng rất nhiều trong lập trình máy tính để kiểm tra số chẵn, lẻ!",
  },
  "toan:3:tim-thanh-phan-chua-biet-trong-phep-cong": {
    objectives: ["Tìm được số hạng chưa biết trong phép cộng.", "Hiểu mối quan hệ giữa các thành phần của phép cộng.", "Trình bày lời giải rõ ràng."],
    sections: [
      { heading: "1. Các thành phần của phép cộng", body: ["Trong phép cộng a + b = c, a và b gọi là số hạng, c gọi là tổng."] },
      { heading: "2. Tìm số hạng chưa biết", body: ["Muốn tìm một số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết."] },
      { heading: "3. Ví dụ minh hoạ", body: ["x + 15 = 40. Ta có: x = 40 - 15 = 25."] },
    ],
    quiz: [
      { question: "x + 12 = 30. x = ?", options: ["18", "42", "20", "16"], correctIndex: 0, explanation: "x = 30-12=18." },
      { question: "25 + y = 60. y = ?", options: ["30", "35", "85", "25"], correctIndex: 1, explanation: "y = 60-25=35." },
      { question: "Muốn tìm số hạng chưa biết, ta làm phép tính gì?", options: ["Tổng cộng số hạng đã biết", "Tổng trừ số hạng đã biết", "Tổng nhân số hạng đã biết", "Tổng chia số hạng đã biết"], correctIndex: 1, explanation: "Lấy tổng trừ đi số hạng đã biết." },
    ],
    funFact: "Bạn có biết? Đây là bước đầu tiên giúp em làm quen với khái niệm 'phương trình' ở các lớp học cao hơn!",
  },
  "toan:3:tim-thanh-phan-chua-biet-trong-phep-tru": {
    objectives: ["Tìm được số bị trừ hoặc số trừ chưa biết.", "Hiểu mối quan hệ giữa các thành phần của phép trừ.", "Trình bày lời giải rõ ràng."],
    sections: [
      { heading: "1. Các thành phần của phép trừ", body: ["Trong phép trừ a - b = c, a gọi là số bị trừ, b gọi là số trừ, c gọi là hiệu."] },
      { heading: "2. Tìm số bị trừ", body: ["Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ: a = c + b."] },
      { heading: "3. Tìm số trừ", body: ["Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu: b = a - c."] },
    ],
    quiz: [
      { question: "x - 15 = 20. x = ?", options: ["5", "35", "30", "25"], correctIndex: 1, explanation: "x = 20+15=35 (tìm số bị trừ)." },
      { question: "50 - y = 18. y = ?", options: ["32", "68", "28", "22"], correctIndex: 0, explanation: "y = 50-18=32 (tìm số trừ)." },
      { question: "Muốn tìm số bị trừ, ta làm phép tính gì?", options: ["Hiệu trừ số trừ", "Hiệu cộng số trừ", "Hiệu nhân số trừ", "Hiệu chia số trừ"], correctIndex: 1, explanation: "Lấy hiệu cộng với số trừ." },
    ],
    funFact: "Bạn có biết? Việc tìm thành phần chưa biết chính là một dạng giải phương trình đơn giản đầu tiên em học!",
  },
  "toan:3:tim-thanh-phan-chua-biet-trong-phep-nhan": {
    objectives: ["Tìm được thừa số chưa biết trong phép nhân.", "Hiểu mối quan hệ giữa các thành phần của phép nhân.", "Trình bày lời giải rõ ràng."],
    sections: [
      { heading: "1. Các thành phần của phép nhân", body: ["Trong phép nhân a × b = c, a và b gọi là thừa số, c gọi là tích."] },
      { heading: "2. Tìm thừa số chưa biết", body: ["Muốn tìm một thừa số chưa biết, ta lấy tích chia cho thừa số đã biết."] },
      { heading: "3. Ví dụ minh hoạ", body: ["x × 6 = 42. Ta có: x = 42 : 6 = 7."] },
    ],
    quiz: [
      { question: "x × 4 = 28. x = ?", options: ["6", "7", "8", "24"], correctIndex: 1, explanation: "x = 28:4=7." },
      { question: "5 × y = 45. y = ?", options: ["8", "9", "40", "50"], correctIndex: 1, explanation: "y = 45:5=9." },
      { question: "Muốn tìm thừa số chưa biết, ta làm phép tính gì?", options: ["Tích cộng thừa số đã biết", "Tích trừ thừa số đã biết", "Tích chia thừa số đã biết", "Tích nhân thừa số đã biết"], correctIndex: 2, explanation: "Lấy tích chia cho thừa số đã biết." },
    ],
    funFact: "Bạn có biết? Kỹ năng tìm thành phần chưa biết sẽ giúp em giải các bài toán đại số phức tạp hơn sau này!",
  },
  "toan:3:tim-thanh-phan-chua-biet-trong-phep-chia": {
    objectives: ["Tìm được số bị chia hoặc số chia chưa biết.", "Hiểu mối quan hệ giữa các thành phần của phép chia.", "Trình bày lời giải rõ ràng."],
    sections: [
      { heading: "1. Các thành phần của phép chia", body: ["Trong phép chia a : b = c, a gọi là số bị chia, b gọi là số chia, c gọi là thương."] },
      { heading: "2. Tìm số bị chia", body: ["Muốn tìm số bị chia, ta lấy thương nhân với số chia: a = c × b."] },
      { heading: "3. Tìm số chia", body: ["Muốn tìm số chia, ta lấy số bị chia chia cho thương: b = a : c."] },
    ],
    quiz: [
      { question: "x : 5 = 8. x = ?", options: ["3", "13", "40", "45"], correctIndex: 2, explanation: "x = 8×5=40 (tìm số bị chia)." },
      { question: "36 : y = 4. y = ?", options: ["9", "32", "40", "144"], correctIndex: 0, explanation: "y = 36:4=9 (tìm số chia)." },
      { question: "Muốn tìm số bị chia, ta làm phép tính gì?", options: ["Thương cộng số chia", "Thương trừ số chia", "Thương nhân số chia", "Thương chia số chia"], correctIndex: 2, explanation: "Lấy thương nhân với số chia." },
    ],
    funFact: "Bạn có biết? Bốn dạng tìm thành phần chưa biết (cộng, trừ, nhân, chia) đều dựa trên mối quan hệ ngược giữa các phép tính!",
  },

  "toan:3:bai-toan-giai-bang-hai-phep-tinh": {
    objectives: ["Giải được bài toán cần kết hợp hai phép tính.", "Xác định đúng thứ tự các bước giải.", "Trình bày lời giải rõ ràng, đầy đủ."],
    sections: [
      { heading: "1. Đặc điểm bài toán hai phép tính", body: ["Loại bài toán này cần thực hiện hai bước tính mới ra đáp số cuối cùng, thường dùng kết hợp hai phép tính khác nhau."] },
      { heading: "2. Cách giải", body: ["Bước 1: Tìm kết quả trung gian. Bước 2: Dùng kết quả đó để tính ra đáp số cuối cùng."] },
      { heading: "3. Ví dụ minh hoạ", body: ["Có 3 hộp bút, mỗi hộp 8 chiếc, đã dùng hết 6 chiếc. Còn lại: 3×8-6=24-6=18 chiếc."] },
    ],
    quiz: [
      { question: "Có 4 túi kẹo, mỗi túi 6 viên, đã ăn 5 viên. Còn lại bao nhiêu viên?", options: ["19", "24", "18", "25"], correctIndex: 0, explanation: "4×6=24, 24-5=19 viên." },
      { question: "Bước đầu tiên khi giải bài toán hai phép tính là gì?", options: ["Tính ngay đáp số cuối", "Tìm kết quả trung gian trước", "Bỏ qua bước tính toán", "Đọc lại đề bài nhiều lần"], correctIndex: 1, explanation: "Cần tìm kết quả trung gian trước khi tính bước tiếp theo." },
      { question: "Một cửa hàng có 50kg gạo, bán 2 lần, mỗi lần 15kg. Còn lại bao nhiêu kg?", options: ["15", "20", "35", "30"], correctIndex: 1, explanation: "2×15=30, 50-30=20kg." },
    ],
    funFact: "Bạn có biết? Bài toán hai phép tính là bước đệm quan trọng để em giải các bài toán phức tạp hơn ở lớp trên!",
  },
  "toan:3:uoc-luong-ket-qua-phep-tinh": {
    objectives: ["Ước lượng nhanh kết quả phép tính trước khi tính chính xác.", "Rèn khả năng cảm nhận về số.", "Kiểm tra tính hợp lý của kết quả."],
    sections: [
      { heading: "1. Ước lượng là gì?", body: ["Ước lượng là đoán nhanh kết quả gần đúng trước khi tính chính xác, giúp em kiểm tra xem đáp số có hợp lý không."] },
      { heading: "2. Cách ước lượng", body: ["Em có thể làm tròn các số trong phép tính rồi tính nhẩm nhanh để có kết quả gần đúng."] },
      { heading: "3. Ví dụ minh hoạ", body: ["298 + 405 ước lượng bằng 300+400=700, kết quả chính xác là 703 — khá gần với ước lượng."] },
    ],
    quiz: [
      { question: "Ước lượng nhanh: 198 + 302 gần bằng bao nhiêu?", options: ["400", "500", "600", "300"], correctIndex: 1, explanation: "200+300=500, ước lượng gần đúng." },
      { question: "Vì sao cần ước lượng trước khi tính chính xác?", options: ["Không cần thiết", "Giúp kiểm tra kết quả có hợp lý không", "Làm bài toán khó hơn", "Không có tác dụng gì"], correctIndex: 1, explanation: "Ước lượng giúp kiểm tra tính hợp lý của kết quả." },
      { question: "Ước lượng nhanh: 505 - 198 gần bằng bao nhiêu?", options: ["200", "300", "400", "500"], correctIndex: 1, explanation: "500-200=300, ước lượng gần đúng." },
    ],
    funFact: "Bạn có biết? Người lớn thường dùng ước lượng khi đi chợ để nhanh chóng biết mình cần mang bao nhiêu tiền!",
  },
  "toan:3:lam-tron-so-den-hang-chuc": {
    objectives: ["Làm tròn số tự nhiên đến hàng chục gần nhất.", "Nắm quy tắc làm tròn số.", "Vận dụng vào ước lượng."],
    sections: [
      { heading: "1. Quy tắc làm tròn", body: ["Nhìn vào chữ số hàng đơn vị: nếu từ 5 trở lên thì làm tròn lên, nếu nhỏ hơn 5 thì làm tròn xuống."] },
      { heading: "2. Ví dụ minh hoạ", body: ["47 có chữ số hàng đơn vị là 7 (≥5), làm tròn lên thành 50. 43 có chữ số hàng đơn vị là 3 (<5), làm tròn xuống thành 40."] },
      { heading: "3. Vận dụng", body: ["Làm tròn số giúp em tính nhẩm và ước lượng nhanh hơn trong cuộc sống."] },
    ],
    quiz: [
      { question: "Làm tròn số 36 đến hàng chục là bao nhiêu?", options: ["30", "40", "35", "36"], correctIndex: 1, explanation: "Chữ số hàng đơn vị là 6 (≥5), làm tròn lên thành 40." },
      { question: "Làm tròn số 82 đến hàng chục là bao nhiêu?", options: ["80", "90", "82", "85"], correctIndex: 0, explanation: "Chữ số hàng đơn vị là 2 (<5), làm tròn xuống thành 80." },
      { question: "Làm tròn số 65 đến hàng chục là bao nhiêu?", options: ["60", "70", "65", "50"], correctIndex: 1, explanation: "Chữ số hàng đơn vị là 5 (≥5), làm tròn lên thành 70." },
    ],
    funFact: "Bạn có biết? Làm tròn số được sử dụng rất nhiều trong đời sống, ví dụ khi thông báo số liệu dân số, giá cả!",
  },
  "toan:3:lam-tron-so-den-hang-tram": {
    objectives: ["Làm tròn số tự nhiên đến hàng trăm gần nhất.", "Nắm quy tắc làm tròn số.", "Vận dụng vào ước lượng."],
    sections: [
      { heading: "1. Quy tắc làm tròn", body: ["Nhìn vào chữ số hàng chục: nếu từ 5 trở lên thì làm tròn lên, nếu nhỏ hơn 5 thì làm tròn xuống."] },
      { heading: "2. Ví dụ minh hoạ", body: ["370 có chữ số hàng chục là 7 (≥5), làm tròn lên thành 400. 320 có chữ số hàng chục là 2 (<5), làm tròn xuống thành 300."] },
      { heading: "3. Vận dụng", body: ["Làm tròn đến hàng trăm thường dùng khi ước lượng các số lớn."] },
    ],
    quiz: [
      { question: "Làm tròn số 460 đến hàng trăm là bao nhiêu?", options: ["400", "500", "450", "460"], correctIndex: 1, explanation: "Chữ số hàng chục là 6 (≥5), làm tròn lên thành 500." },
      { question: "Làm tròn số 230 đến hàng trăm là bao nhiêu?", options: ["200", "300", "230", "250"], correctIndex: 0, explanation: "Chữ số hàng chục là 3 (<5), làm tròn xuống thành 200." },
      { question: "Làm tròn số 750 đến hàng trăm là bao nhiêu?", options: ["700", "800", "750", "600"], correctIndex: 1, explanation: "Chữ số hàng chục là 5 (≥5), làm tròn lên thành 800." },
    ],
    funFact: "Bạn có biết? Các báo cáo thống kê thường làm tròn số để dễ đọc, dễ hiểu hơn với người đọc!",
  },
  "toan:3:doc-bieu-do-tranh-don-gian": {
    objectives: ["Đọc được thông tin từ biểu đồ tranh đơn giản.", "Hiểu ý nghĩa của mỗi hình tượng trưng trong biểu đồ.", "Trả lời câu hỏi dựa vào biểu đồ."],
    sections: [
      { heading: "1. Biểu đồ tranh là gì?", body: ["Biểu đồ tranh dùng hình vẽ tượng trưng để thể hiện số lượng, mỗi hình có thể tượng trưng cho 1 hoặc nhiều đơn vị."] },
      { heading: "2. Cách đọc biểu đồ tranh", body: ["Em đếm số hình tượng trưng ở mỗi hàng/cột rồi nhân với giá trị mỗi hình để biết tổng số lượng."] },
      { heading: "3. Ví dụ minh hoạ", body: ["Nếu mỗi hình quả táo tượng trưng cho 2 quả, hàng có 3 hình thì có 3×2=6 quả táo."] },
    ],
    quiz: [
      { question: "Biểu đồ tranh dùng gì để thể hiện số lượng?", options: ["Chữ số", "Hình vẽ tượng trưng", "Âm thanh", "Màu sắc duy nhất"], correctIndex: 1, explanation: "Biểu đồ tranh dùng hình vẽ tượng trưng để thể hiện số liệu." },
      { question: "Nếu mỗi hình tượng trưng cho 3 đơn vị và có 4 hình, tổng số lượng là bao nhiêu?", options: ["7", "12", "9", "16"], correctIndex: 1, explanation: "3×4=12." },
      { question: "Để đọc hiểu biểu đồ tranh, em cần biết điều gì trước?", options: ["Không cần biết gì", "Giá trị mỗi hình tượng trưng", "Màu sắc của hình", "Kích thước hình vẽ"], correctIndex: 1, explanation: "Cần biết mỗi hình tượng trưng cho bao nhiêu đơn vị." },
    ],
    funFact: "Bạn có biết? Biểu đồ tranh là một trong những cách trình bày số liệu trực quan, dễ hiểu nhất cho trẻ nhỏ!",
  },
  "toan:3:thu-thap-va-kiem-dem-so-lieu": {
    objectives: ["Thực hành thu thập số liệu đơn giản.", "Kiểm đếm và ghi lại số liệu chính xác.", "Trình bày số liệu đã thu thập."],
    sections: [
      { heading: "1. Thu thập số liệu là gì?", body: ["Thu thập số liệu là quá trình quan sát, đếm và ghi lại thông tin về một sự vật, hiện tượng."] },
      { heading: "2. Cách kiểm đếm chính xác", body: ["Em nên đếm cẩn thận, đánh dấu từng đối tượng đã đếm để tránh đếm sót hoặc đếm trùng."] },
      { heading: "3. Ví dụ thực hành", body: ["Đếm số bạn thích màu đỏ, màu xanh trong lớp rồi ghi lại thành bảng số liệu đơn giản."] },
    ],
    quiz: [
      { question: "Thu thập số liệu là quá trình gì?", options: ["Đoán số lượng", "Quan sát, đếm và ghi lại thông tin", "Không cần làm gì", "Chỉ nhìn qua một lần"], correctIndex: 1, explanation: "Thu thập số liệu cần quan sát, đếm và ghi lại cẩn thận." },
      { question: "Để tránh đếm sót hoặc đếm trùng, em nên làm gì?", options: ["Đếm thật nhanh", "Đánh dấu từng đối tượng đã đếm", "Không cần đếm kỹ", "Đoán số lượng"], correctIndex: 1, explanation: "Đánh dấu giúp tránh đếm sót hoặc đếm trùng." },
      { question: "Sau khi thu thập số liệu, em nên làm gì?", options: ["Vứt bỏ số liệu", "Trình bày thành bảng hoặc biểu đồ", "Không cần lưu lại", "Giữ bí mật số liệu"], correctIndex: 1, explanation: "Trình bày thành bảng/biểu đồ giúp số liệu dễ đọc, dễ hiểu." },
    ],
    funFact: "Bạn có biết? Thu thập số liệu là bước đầu tiên trong mọi nghiên cứu khoa học, kể cả các nghiên cứu lớn trên thế giới!",
  },
  "toan:3:hinh-khoi-nhan-biet-khoi-tru-khoi-cau": {
    objectives: ["Nhận biết khối trụ, khối cầu trong thực tế.", "Nêu được đặc điểm của khối trụ, khối cầu.", "Phân biệt với các hình khối đã học."],
    sections: [
      { heading: "1. Khối trụ", body: ["Khối trụ có hai mặt đáy là hình tròn bằng nhau, mặt xung quanh cong. Ví dụ: lon nước ngọt, ống nước."] },
      { heading: "2. Khối cầu", body: ["Khối cầu có hình dạng tròn đều ở mọi hướng, không có góc cạnh. Ví dụ: quả bóng, viên bi."] },
      { heading: "3. Phân biệt với khối khác", body: ["Khác với khối hộp chữ nhật, khối lập phương (có mặt phẳng), khối trụ và khối cầu có mặt cong."] },
    ],
    quiz: [
      { question: "Đồ vật nào có dạng khối trụ?", options: ["Quả bóng", "Lon nước ngọt", "Viên xúc xắc", "Hộp bút hình chữ nhật"], correctIndex: 1, explanation: "Lon nước ngọt có dạng khối trụ." },
      { question: "Đồ vật nào có dạng khối cầu?", options: ["Quả bóng", "Lon nước ngọt", "Hộp phấn", "Viên xúc xắc"], correctIndex: 0, explanation: "Quả bóng có dạng khối cầu." },
      { question: "Khối cầu có đặc điểm gì nổi bật?", options: ["Có các góc nhọn", "Tròn đều ở mọi hướng, không góc cạnh", "Có 6 mặt phẳng", "Có 2 mặt đáy hình tròn"], correctIndex: 1, explanation: "Khối cầu tròn đều ở mọi hướng, không có góc cạnh." },
    ],
    funFact: "Bạn có biết? Trái Đất mà chúng ta đang sống có hình dạng gần giống với một khối cầu khổng lồ!",
  },
  "toan:3:so-sanh-phan-so-cung-mau-so": {
    objectives: ["So sánh được hai phân số có cùng mẫu số.", "Nắm quy tắc so sánh phân số cùng mẫu.", "Vận dụng vào bài tập thực hành."],
    sections: [
      { heading: "1. Quy tắc so sánh", body: ["Hai phân số có cùng mẫu số, phân số nào có tử số lớn hơn thì phân số đó lớn hơn."] },
      { heading: "2. Ví dụ minh hoạ", body: ["So sánh 3/5 và 4/5: cùng mẫu số 5, vì 3<4 nên 3/5 < 4/5."] },
      { heading: "3. Vận dụng", body: ["Quy tắc này giúp em nhanh chóng so sánh các phân số có cùng mẫu số mà không cần quy đổi."] },
    ],
    quiz: [
      { question: "So sánh 2/7 và 5/7, phân số nào lớn hơn?", options: ["2/7", "5/7", "Bằng nhau", "Không so sánh được"], correctIndex: 1, explanation: "Cùng mẫu số, 5>2 nên 5/7 lớn hơn." },
      { question: "So sánh 6/9 và 4/9, phân số nào nhỏ hơn?", options: ["6/9", "4/9", "Bằng nhau", "Không xác định"], correctIndex: 1, explanation: "Cùng mẫu số, 4<6 nên 4/9 nhỏ hơn." },
      { question: "Để so sánh hai phân số cùng mẫu số, ta so sánh gì?", options: ["Mẫu số", "Tử số", "Cả tử và mẫu", "Không so sánh được"], correctIndex: 1, explanation: "Chỉ cần so sánh tử số khi mẫu số bằng nhau." },
    ],
    funFact: "Bạn có biết? So sánh phân số cùng mẫu là bước cơ bản trước khi học so sánh phân số khác mẫu ở lớp 4!",
  },
  "toan:3:cong-hai-phan-so-cung-mau-so": {
    objectives: ["Thực hiện được phép cộng hai phân số cùng mẫu số.", "Nắm quy tắc cộng phân số cùng mẫu.", "Vận dụng vào bài tập thực hành."],
    sections: [
      { heading: "1. Quy tắc cộng phân số cùng mẫu", body: ["Muốn cộng hai phân số cùng mẫu số, ta cộng các tử số với nhau và giữ nguyên mẫu số."] },
      { heading: "2. Ví dụ minh hoạ", body: ["2/7 + 3/7 = (2+3)/7 = 5/7."] },
      { heading: "3. Lưu ý", body: ["Mẫu số không thay đổi khi cộng hai phân số cùng mẫu, chỉ có tử số được cộng lại."] },
    ],
    quiz: [
      { question: "1/5 + 2/5 = ?", options: ["3/5", "3/10", "2/5", "1/10"], correctIndex: 0, explanation: "1+2=3, giữ nguyên mẫu số: 3/5." },
      { question: "3/8 + 4/8 = ?", options: ["7/16", "7/8", "12/8", "1/8"], correctIndex: 1, explanation: "3+4=7, giữ nguyên mẫu số: 7/8." },
      { question: "Khi cộng hai phân số cùng mẫu, mẫu số của kết quả là gì?", options: ["Tổng hai mẫu số", "Giữ nguyên mẫu số ban đầu", "Tích hai mẫu số", "Luôn bằng 1"], correctIndex: 1, explanation: "Mẫu số giữ nguyên khi cộng hai phân số cùng mẫu." },
    ],
    funFact: "Bạn có biết? Phép cộng phân số cùng mẫu đơn giản hơn nhiều so với phép cộng phân số khác mẫu mà em sẽ học sau này!",
  },
  "toan:3:tru-hai-phan-so-cung-mau-so": {
    objectives: ["Thực hiện được phép trừ hai phân số cùng mẫu số.", "Nắm quy tắc trừ phân số cùng mẫu.", "Vận dụng vào bài tập thực hành."],
    sections: [
      { heading: "1. Quy tắc trừ phân số cùng mẫu", body: ["Muốn trừ hai phân số cùng mẫu số, ta trừ các tử số cho nhau và giữ nguyên mẫu số."] },
      { heading: "2. Ví dụ minh hoạ", body: ["5/9 - 2/9 = (5-2)/9 = 3/9."] },
      { heading: "3. Lưu ý", body: ["Tương tự phép cộng, mẫu số không thay đổi khi trừ hai phân số cùng mẫu."] },
    ],
    quiz: [
      { question: "4/6 - 1/6 = ?", options: ["3/6", "5/6", "3/12", "1/6"], correctIndex: 0, explanation: "4-1=3, giữ nguyên mẫu số: 3/6." },
      { question: "7/10 - 3/10 = ?", options: ["4/20", "4/10", "10/10", "3/10"], correctIndex: 1, explanation: "7-3=4, giữ nguyên mẫu số: 4/10." },
      { question: "Khi trừ hai phân số cùng mẫu, ta làm gì với tử số?", options: ["Cộng lại", "Trừ cho nhau", "Nhân với nhau", "Không thay đổi"], correctIndex: 1, explanation: "Trừ các tử số cho nhau." },
    ],
    funFact: "Bạn có biết? Việc hiểu phép cộng, trừ phân số cùng mẫu sẽ giúp em học tốt hơn ở phần phân số khác mẫu sau này!",
  },
  "toan:3:bai-toan-ve-chia-nhom-deu": {
    objectives: ["Giải được bài toán chia một tập hợp thành các nhóm đều.", "Xác định đúng phép tính cần dùng.", "Trình bày lời giải rõ ràng."],
    sections: [
      { heading: "1. Dạng toán chia nhóm đều", body: ["Đây là dạng toán chia một số lượng đồ vật thành các nhóm có số lượng bằng nhau, thường dùng phép chia."] },
      { heading: "2. Hai dạng câu hỏi thường gặp", body: ["Dạng 1: Biết tổng số và số nhóm, tìm số lượng mỗi nhóm. Dạng 2: Biết tổng số và số lượng mỗi nhóm, tìm số nhóm."] },
      { heading: "3. Ví dụ minh hoạ", body: ["Có 24 bạn chia thành 4 nhóm đều nhau. Mỗi nhóm có: 24:4=6 bạn."] },
    ],
    quiz: [
      { question: "Có 36 quyển vở chia đều cho 6 bạn. Mỗi bạn được bao nhiêu quyển?", options: ["5", "6", "7", "8"], correctIndex: 1, explanation: "36:6=6 quyển." },
      { question: "Có 45 cái kẹo, mỗi túi đựng 9 cái. Cần bao nhiêu túi?", options: ["4", "5", "6", "9"], correctIndex: 1, explanation: "45:9=5 túi." },
      { question: "Dạng toán chia nhóm đều thường dùng phép tính gì?", options: ["Cộng", "Trừ", "Nhân", "Chia"], correctIndex: 3, explanation: "Dạng toán này thường dùng phép chia." },
    ],
    funFact: "Bạn có biết? Chia nhóm đều là kỹ năng em dùng thường xuyên khi chia đồ chơi, kẹo bánh cho bạn bè!",
  },
  "toan:3:met-vuong-lam-quen-don-vi-do-dien-tich-lon": {
    objectives: ["Làm quen đơn vị đo diện tích mét vuông.", "Hiểu mối quan hệ giữa mét vuông và xăng-ti-mét vuông.", "Ước lượng diện tích các không gian quen thuộc."],
    sections: [
      { heading: "1. Đơn vị mét vuông", body: ["Mét vuông (m²) là đơn vị đo diện tích lớn hơn cm², thường dùng đo diện tích phòng học, sân trường."] },
      { heading: "2. Mối quan hệ với cm²", body: ["1m² = 10 000cm² (vì 1m=100cm, diện tích = 100×100=10 000cm²)."] },
      { heading: "3. Ước lượng thực tế", body: ["Một phòng học có diện tích khoảng 50m², một tờ giấy A4 có diện tích khoảng 600cm² (nhỏ hơn nhiều so với 1m²)."] },
    ],
    quiz: [
      { question: "Đơn vị nào phù hợp để đo diện tích một căn phòng?", options: ["cm²", "m²", "mm²", "Không có đơn vị nào phù hợp"], correctIndex: 1, explanation: "Mét vuông (m²) phù hợp để đo diện tích phòng." },
      { question: "1m² bằng bao nhiêu cm²?", options: ["100cm²", "1000cm²", "10 000cm²", "100 000cm²"], correctIndex: 2, explanation: "1m² = 10 000cm²." },
      { question: "Diện tích sân trường thường được đo bằng đơn vị nào?", options: ["mm²", "cm²", "m²", "Không đo được"], correctIndex: 2, explanation: "Mét vuông phù hợp để đo diện tích lớn như sân trường." },
    ],
    funFact: "Bạn có biết? Diện tích một sân bóng đá tiêu chuẩn vào khoảng 7000m² — lớn hơn rất nhiều lần một phòng học!",
  },
  "toan:3:ki-lo-met-do-khoang-cach-xa": {
    objectives: ["Làm quen đơn vị đo khoảng cách ki-lô-mét.", "Hiểu mối quan hệ giữa ki-lô-mét và mét.", "Ước lượng khoảng cách trong đời sống."],
    sections: [
      { heading: "1. Đơn vị ki-lô-mét", body: ["Ki-lô-mét (km) là đơn vị đo khoảng cách lớn, thường dùng đo quãng đường giữa các địa điểm xa nhau."] },
      { heading: "2. Mối quan hệ với mét", body: ["1km = 1000m."] },
      { heading: "3. Ước lượng thực tế", body: ["Quãng đường từ nhà đến trường có thể khoảng 2km, khoảng cách giữa hai thành phố có thể hàng trăm km."] },
    ],
    quiz: [
      { question: "1km bằng bao nhiêu mét?", options: ["10m", "100m", "1000m", "10 000m"], correctIndex: 2, explanation: "1km = 1000m." },
      { question: "Đơn vị nào phù hợp để đo khoảng cách giữa hai thành phố?", options: ["cm", "m", "km", "mm"], correctIndex: 2, explanation: "Ki-lô-mét phù hợp để đo khoảng cách rất xa." },
      { question: "3km bằng bao nhiêu mét?", options: ["300m", "3000m", "30 000m", "30m"], correctIndex: 1, explanation: "3km = 3000m." },
    ],
    funFact: "Bạn có biết? Đường xích đạo bao quanh Trái Đất dài khoảng 40 075 km!",
  },
  "toan:3:van-dung-do-luong-vao-tinh-huong-thuc-te": {
    objectives: ["Vận dụng các đơn vị đo đã học vào tình huống thực tế.", "Chọn đúng đơn vị đo phù hợp.", "Giải bài toán tổng hợp về đo lường."],
    sections: [
      { heading: "1. Chọn đơn vị đo phù hợp", body: ["Tuỳ vào đối tượng cần đo (nhỏ hay lớn) mà em chọn đơn vị đo phù hợp: mm, cm, dm, m, km cho độ dài; g, kg cho khối lượng; ml, lít cho dung tích."] },
      { heading: "2. Giải bài toán tổng hợp", body: ["Bài toán thực tế có thể kết hợp nhiều đơn vị đo khác nhau, em cần đổi về cùng đơn vị trước khi tính toán."] },
      { heading: "3. Ví dụ minh hoạ", body: ["Một đoạn dây dài 2m, cắt bớt 50cm (=5dm). Đổi 2m=20dm, còn lại: 20-5=15dm."] },
    ],
    quiz: [
      { question: "Đơn vị nào phù hợp để đo khối lượng một quả dưa hấu?", options: ["mm", "gam", "ki-lô-gam", "lít"], correctIndex: 2, explanation: "Ki-lô-gam phù hợp để đo khối lượng vật có kích thước vừa và lớn." },
      { question: "Một chai nước có dung tích 500ml, đổ ra 2 cốc bằng nhau. Mỗi cốc có bao nhiêu ml?", options: ["100ml", "200ml", "250ml", "300ml"], correctIndex: 2, explanation: "500:2=250ml." },
      { question: "Khi bài toán có nhiều đơn vị đo khác nhau, em cần làm gì trước khi tính?", options: ["Bỏ qua đơn vị", "Đổi về cùng một đơn vị", "Không cần đổi gì", "Chọn đơn vị bất kỳ"], correctIndex: 1, explanation: "Cần đổi về cùng đơn vị trước khi thực hiện phép tính." },
    ],
    funFact: "Bạn có biết? Việc chọn sai đơn vị đo có thể dẫn đến những sai lầm lớn, thậm chí trong khoa học và kỹ thuật thực tế!",
  },
  "toan:3:on-tap-giua-hoc-ky-1": {
    objectives: ["Hệ thống lại kiến thức đã học ở giữa học kỳ 1.", "Ôn luyện các dạng bài tập trọng tâm.", "Tự tin chuẩn bị cho bài kiểm tra."],
    sections: [
      { heading: "1. Nội dung trọng tâm", body: ["Giữa học kỳ 1, em đã học về các số đến 1000, phép cộng trừ có nhớ, và bước đầu làm quen bảng nhân chia 6,7,8,9."] },
      { heading: "2. Cách ôn tập hiệu quả", body: ["Em nên làm lại các bài tập đã học, chú ý những dạng bài mình còn hay sai."] },
      { heading: "3. Chuẩn bị tâm lý", body: ["Ôn tập đều đặn, ngủ đủ giấc trước ngày kiểm tra sẽ giúp em làm bài tốt hơn."] },
    ],
    quiz: [
      { question: "356 + 278 = ?", options: ["634", "624", "534", "644"], correctIndex: 0, explanation: "356+278=634." },
      { question: "7 × 8 = ?", options: ["54", "56", "64", "48"], correctIndex: 1, explanation: "7×8=56." },
      { question: "604 - 168 = ?", options: ["446", "436", "536", "456"], correctIndex: 1, explanation: "604-168=436." },
    ],
    funFact: "Bạn có biết? Ôn tập giữa kỳ giúp em phát hiện sớm những phần kiến thức còn yếu để kịp thời củng cố!",
  },
  "toan:3:on-tap-cuoi-hoc-ky-1": {
    objectives: ["Hệ thống lại toàn bộ kiến thức học kỳ 1.", "Ôn luyện tổng hợp các dạng bài đã học.", "Tự tin chuẩn bị cho bài kiểm tra cuối kỳ."],
    sections: [
      { heading: "1. Nội dung trọng tâm học kỳ 1", body: ["Học kỳ 1 gồm: số đến 1000, các phép tính cộng trừ nhân chia, bảng nhân chia 6-9, góc vuông và chu vi hình."] },
      { heading: "2. Ôn luyện tổng hợp", body: ["Em nên luyện các đề tổng hợp có đủ các dạng bài đã học để làm quen với cấu trúc đề kiểm tra."] },
      { heading: "3. Quản lý thời gian làm bài", body: ["Khi làm bài kiểm tra, em nên làm câu dễ trước, câu khó sau, và luôn kiểm tra lại bài trước khi nộp."] },
    ],
    quiz: [
      { question: "Hình chữ nhật dài 9cm, rộng 4cm. Chu vi là bao nhiêu?", options: ["13cm", "26cm", "36cm", "18cm"], correctIndex: 1, explanation: "Chu vi = (9+4)×2=26cm." },
      { question: "48 : 6 = ?", options: ["6", "7", "8", "9"], correctIndex: 2, explanation: "6×8=48 nên 48:6=8." },
      { question: "Góc vuông có số đo bằng bao nhiêu độ?", options: ["45 độ", "60 độ", "90 độ", "180 độ"], correctIndex: 2, explanation: "Góc vuông có số đo đúng bằng 90 độ." },
    ],
    funFact: "Bạn có biết? Việc ôn tập tổng hợp trước kỳ thi giúp não bộ kết nối các kiến thức rời rạc thành một hệ thống vững chắc!",
  },
  "toan:3:on-tap-giua-hoc-ky-2": {
    objectives: ["Hệ thống lại kiến thức đã học ở giữa học kỳ 2.", "Ôn luyện các dạng bài tập trọng tâm.", "Tự tin chuẩn bị cho bài kiểm tra."],
    sections: [
      { heading: "1. Nội dung trọng tâm", body: ["Giữa học kỳ 2, em đã học về phân số cơ bản, các số đến 100 000, diện tích hình chữ nhật, hình vuông."] },
      { heading: "2. Cách ôn tập hiệu quả", body: ["Em nên tự làm lại các bài tập, đặc biệt chú ý các bài toán có lời văn liên quan đến diện tích."] },
      { heading: "3. Luyện đề tổng hợp", body: ["Làm thử một vài đề ôn tập tổng hợp sẽ giúp em tự tin hơn khi bước vào bài kiểm tra thật."] },
    ],
    quiz: [
      { question: "Hình vuông cạnh 6cm. Diện tích là bao nhiêu?", options: ["12cm²", "24cm²", "30cm²", "36cm²"], correctIndex: 3, explanation: "Diện tích = 6×6=36cm²." },
      { question: "Chia hình tròn thành 4 phần bằng nhau, tô màu 3 phần. Phân số biểu diễn là gì?", options: ["1/4", "3/4", "4/3", "1/3"], correctIndex: 1, explanation: "Tô màu 3 trong 4 phần bằng nhau: 3/4." },
      { question: "Số nào lớn hơn: 8695 hay 9012?", options: ["8695", "9012", "Bằng nhau", "Không so sánh được"], correctIndex: 1, explanation: "Hàng nghìn: 8<9 nên 9012 lớn hơn." },
    ],
    funFact: "Bạn có biết? Càng gần cuối năm học, kiến thức Toán càng kết hợp nhiều dạng bài với nhau — hãy ôn tập đều đặn nhé!",
  },
  "toan:3:so-la-ma-lam-quen-cac-so-co-ban": {
    objectives: ["Nhận biết một số chữ số La Mã cơ bản.", "Đọc được các số La Mã thường gặp.", "Biết ứng dụng của số La Mã trong đời sống."],
    sections: [
      { heading: "1. Các chữ số La Mã cơ bản", body: ["I=1, V=5, X=10, L=50, C=100. Đây là các ký hiệu cơ bản của số La Mã."] },
      { heading: "2. Cách đọc số La Mã đơn giản", body: ["II=2, III=3, IV=4 (viết trước V nghĩa là trừ đi), VI=6, VII=7, VIII=8, IX=9 (trước X)."] },
      { heading: "3. Ứng dụng thực tế", body: ["Số La Mã thường xuất hiện trên mặt đồng hồ cổ, trong tên các vị vua, hoặc đánh số chương sách."] },
    ],
    quiz: [
      { question: "Chữ số La Mã 'V' tương ứng với số nào?", options: ["1", "5", "10", "50"], correctIndex: 1, explanation: "'V' tương ứng với số 5." },
      { question: "Số La Mã 'IV' tương ứng với số nào?", options: ["6", "4", "9", "14"], correctIndex: 1, explanation: "'IV' (I trước V) nghĩa là 5-1=4." },
      { question: "Số La Mã thường xuất hiện ở đâu trong đời sống?", options: ["Mặt đồng hồ cổ", "Thực đơn nhà hàng", "Nhãn vở học sinh", "Không xuất hiện ở đâu"], correctIndex: 0, explanation: "Số La Mã thường thấy trên mặt đồng hồ cổ." },
    ],
    funFact: "Bạn có biết? Số La Mã không có số 0 — đây là một trong những lý do hệ số này ít được dùng để tính toán ngày nay!",
  },
  "toan:3:bai-toan-ve-van-toc-don-gian": {
    objectives: ["Làm quen bài toán về quãng đường đi bộ, đi xe đơn giản.", "Hiểu mối quan hệ giữa quãng đường, thời gian.", "Vận dụng vào bài toán thực tế."],
    sections: [
      { heading: "1. Làm quen khái niệm", body: ["Nếu mỗi giờ đi được một quãng đường nhất định, sau nhiều giờ ta có thể tính tổng quãng đường đã đi."] },
      { heading: "2. Ví dụ minh hoạ", body: ["Mỗi giờ đi bộ được 4km, đi trong 3 giờ thì đi được: 4×3=12km."] },
      { heading: "3. Vận dụng", body: ["Đây là bước làm quen đầu tiên với bài toán chuyển động mà em sẽ học sâu hơn ở lớp 5."] },
    ],
    quiz: [
      { question: "Mỗi giờ đi được 5km, đi trong 4 giờ thì đi được bao nhiêu km?", options: ["9km", "15km", "20km", "25km"], correctIndex: 2, explanation: "5×4=20km." },
      { question: "Một người đi xe đạp mỗi giờ 12km, đi trong 2 giờ được bao nhiêu km?", options: ["14km", "24km", "6km", "20km"], correctIndex: 1, explanation: "12×2=24km." },
      { question: "Để tính quãng đường khi biết quãng đường mỗi giờ và số giờ đi, ta dùng phép tính gì?", options: ["Cộng", "Trừ", "Nhân", "Chia"], correctIndex: 2, explanation: "Quãng đường = quãng đường mỗi giờ × số giờ (phép nhân)." },
    ],
    funFact: "Bạn có biết? Bài toán về vận tốc, quãng đường, thời gian là một trong những dạng toán quan trọng em sẽ gặp nhiều ở các lớp trên!",
  },
  "toan:3:tinh-nhanh-bang-cach-nhom-so": {
    objectives: ["Vận dụng tính chất phép tính để tính nhanh.", "Nhận biết cách nhóm số hợp lý.", "Tính nhẩm nhanh và chính xác hơn."],
    sections: [
      { heading: "1. Tính chất giao hoán, kết hợp", body: ["Trong phép cộng và phép nhân, em có thể đổi chỗ và nhóm các số lại để tính cho thuận tiện hơn."] },
      { heading: "2. Ví dụ minh hoạ", body: ["25 + 37 + 75 = (25+75) + 37 = 100 + 37 = 137 (nhóm hai số tròn trăm lại trước)."] },
      { heading: "3. Vận dụng", body: ["Kỹ năng nhóm số hợp lý giúp em tính nhẩm nhanh hơn nhiều so với tính theo thứ tự thông thường."] },
    ],
    quiz: [
      { question: "Tính nhanh: 18 + 45 + 2 = ?", options: ["63", "65", "60", "67"], correctIndex: 1, explanation: "(18+2)+45=20+45=65." },
      { question: "Tính nhanh: 4 × 25 × 2 = ?", options: ["100", "200", "50", "150"], correctIndex: 1, explanation: "4×25=100, 100×2=200." },
      { question: "Vì sao nên nhóm các số tròn chục, tròn trăm lại với nhau khi tính nhanh?", options: ["Để bài toán khó hơn", "Để tính nhẩm dễ dàng hơn", "Không có lý do gì", "Để sai kết quả"], correctIndex: 1, explanation: "Nhóm số tròn chục, tròn trăm giúp tính nhẩm dễ và nhanh hơn." },
    ],
    funFact: "Bạn có biết? Nhà toán học Carl Friedrich Gauss đã dùng cách nhóm số để tính tổng 1 đến 100 chỉ trong vài giây khi còn nhỏ!",
  },
  "toan:3:bai-toan-co-loi-van-ve-do-luong": {
    objectives: ["Giải được bài toán có lời văn liên quan đến đo lường.", "Xác định đúng đơn vị đo trong bài toán.", "Trình bày lời giải rõ ràng."],
    sections: [
      { heading: "1. Đặc điểm bài toán đo lường", body: ["Loại bài toán này thường liên quan đến độ dài, khối lượng, dung tích và yêu cầu tính toán kết hợp với đổi đơn vị."] },
      { heading: "2. Các bước giải", body: ["Đọc kỹ đề, xác định đơn vị đo, đổi về cùng đơn vị nếu cần, rồi thực hiện phép tính phù hợp."] },
      { heading: "3. Ví dụ minh hoạ", body: ["Một sợi dây dài 5m, cắt đi 120cm. Đổi 5m=500cm, còn lại: 500-120=380cm."] },
    ],
    quiz: [
      { question: "Một túi gạo nặng 25kg, dùng hết 8kg. Còn lại bao nhiêu ki-lô-gam?", options: ["15kg", "17kg", "33kg", "20kg"], correctIndex: 1, explanation: "25-8=17kg." },
      { question: "Một chai dầu ăn có 2 lít, đã dùng 600ml. Đổi 2 lít = 2000ml, còn lại bao nhiêu ml?", options: ["1400ml", "1600ml", "1200ml", "2600ml"], correctIndex: 0, explanation: "2000-600=1400ml." },
      { question: "Khi giải bài toán có đơn vị đo khác nhau, bước đầu tiên em cần làm là gì?", options: ["Bỏ qua đơn vị", "Đổi về cùng đơn vị", "Đoán kết quả", "Không cần làm gì"], correctIndex: 1, explanation: "Cần đổi về cùng đơn vị trước khi tính toán." },
    ],
    funFact: "Bạn có biết? Bài toán có lời văn về đo lường giúp em áp dụng kiến thức toán học vào cuộc sống hàng ngày!",
  },
  "toan:3:bai-toan-co-loi-van-ve-hinh-hoc": {
    objectives: ["Giải được bài toán có lời văn liên quan đến hình học.", "Vận dụng công thức chu vi, diện tích vào bài toán.", "Trình bày lời giải rõ ràng."],
    sections: [
      { heading: "1. Đặc điểm bài toán hình học", body: ["Loại bài toán này thường yêu cầu tính chu vi hoặc diện tích của hình chữ nhật, hình vuông trong tình huống thực tế."] },
      { heading: "2. Các bước giải", body: ["Xác định hình dạng, tìm số đo các cạnh liên quan, áp dụng đúng công thức chu vi hoặc diện tích."] },
      { heading: "3. Ví dụ minh hoạ", body: ["Một khu vườn hình chữ nhật dài 8m, rộng 5m. Diện tích khu vườn là: 8×5=40m²."] },
    ],
    quiz: [
      { question: "Một mảnh đất hình vuông cạnh 12m. Diện tích mảnh đất là bao nhiêu?", options: ["48m²", "144m²", "24m²", "120m²"], correctIndex: 1, explanation: "12×12=144m²." },
      { question: "Một khung tranh hình chữ nhật dài 40cm, rộng 25cm. Chu vi khung tranh là bao nhiêu?", options: ["65cm", "130cm", "1000cm", "90cm"], correctIndex: 1, explanation: "(40+25)×2=130cm." },
      { question: "Khi giải bài toán hình học có lời văn, em cần xác định điều gì đầu tiên?", options: ["Màu sắc của hình", "Hình dạng và số đo các cạnh", "Tên người ra đề", "Không cần xác định gì"], correctIndex: 1, explanation: "Cần xác định hình dạng và số đo các cạnh liên quan." },
    ],
    funFact: "Bạn có biết? Kiến thức về chu vi, diện tích được các kiến trúc sư sử dụng hàng ngày khi thiết kế nhà cửa, công trình!",
  },
  "toan:3:luyen-tap-bang-nhan-chia-tong-hop": {
    objectives: ["Ôn luyện tổng hợp các bảng nhân, chia đã học.", "Tính nhẩm nhanh và chính xác.", "Tự tin vận dụng vào các bài toán khác."],
    sections: [
      { heading: "1. Tổng ôn các bảng nhân, chia", body: ["Em đã học các bảng nhân, chia từ 2 đến 9 — hãy ôn lại toàn bộ để thật thuộc lòng."] },
      { heading: "2. Cách luyện tập hiệu quả", body: ["Luyện tập bằng flashcard, đọc to nhiều lần, hoặc chơi trò chơi đố bảng nhân chia với bạn bè."] },
      { heading: "3. Kiểm tra bản thân", body: ["Hãy thử tự đố mình các phép nhân, chia ngẫu nhiên để kiểm tra mức độ thuộc bài."] },
    ],
    quiz: [
      { question: "8 × 9 = ?", options: ["63", "72", "81", "64"], correctIndex: 1, explanation: "8×9=72." },
      { question: "81 : 9 = ?", options: ["7", "8", "9", "10"], correctIndex: 2, explanation: "9×9=81 nên 81:9=9." },
      { question: "6 × 7 = ?", options: ["36", "42", "48", "40"], correctIndex: 1, explanation: "6×7=42." },
    ],
    funFact: "Bạn có biết? Thuộc chắc bảng cửu chương là nền tảng quan trọng nhất giúp em học tốt Toán ở các lớp trên!",
  },
  "toan:3:luyen-tap-bon-phep-tinh-tong-hop": {
    objectives: ["Ôn luyện tổng hợp cộng, trừ, nhân, chia.", "Vận dụng linh hoạt các phép tính đã học.", "Giải quyết bài toán kết hợp nhiều phép tính."],
    sections: [
      { heading: "1. Tổng ôn bốn phép tính", body: ["Em đã học đầy đủ bốn phép tính cơ bản: cộng, trừ, nhân, chia. Hãy ôn luyện đều cả bốn phép tính này."] },
      { heading: "2. Kết hợp các phép tính", body: ["Nhiều bài toán yêu cầu kết hợp nhiều phép tính khác nhau, em cần xác định đúng thứ tự thực hiện."] },
      { heading: "3. Luyện tập thường xuyên", body: ["Luyện tập mỗi ngày một ít sẽ giúp em thành thạo bốn phép tính hơn là học dồn một lúc."] },
    ],
    quiz: [
      { question: "125 + 375 = ?", options: ["500", "450", "550", "400"], correctIndex: 0, explanation: "125+375=500." },
      { question: "9 × 6 - 14 = ?", options: ["40", "54", "68", "44"], correctIndex: 0, explanation: "9×6=54, 54-14=40." },
      { question: "144 : 12 = ?", options: ["11", "12", "13", "14"], correctIndex: 1, explanation: "12×12=144 nên 144:12=12." },
    ],
    funFact: "Bạn có biết? Bốn phép tính cơ bản là nền tảng của mọi phép toán phức tạp hơn trong toán học!",
  },
  "toan:3:tro-choi-ai-nhanh-ai-dung-voi-phep-tinh": {
    objectives: ["Ôn luyện các phép tính đã học qua trò chơi.", "Rèn phản xạ tính toán nhanh.", "Tạo hứng thú học Toán."],
    sections: [
      { heading: "1. Cách chơi", body: ["Trò chơi 'Ai nhanh ai đúng' yêu cầu người chơi trả lời thật nhanh các phép tính được đưa ra, ai đúng và nhanh nhất sẽ thắng."] },
      { heading: "2. Lợi ích của trò chơi", body: ["Trò chơi giúp em vừa ôn luyện kiến thức vừa cảm thấy vui vẻ, hào hứng hơn khi học Toán."] },
      { heading: "3. Cách chơi cùng bạn bè", body: ["Em có thể rủ bạn bè cùng chơi, người nào trả lời đúng nhiều câu hỏi nhất trong thời gian quy định sẽ chiến thắng."] },
    ],
    quiz: [
      { question: "7 × 6 = ?", options: ["36", "42", "48", "40"], correctIndex: 1, explanation: "7×6=42." },
      { question: "100 - 45 = ?", options: ["45", "55", "65", "50"], correctIndex: 1, explanation: "100-45=55." },
      { question: "9 × 5 = ?", options: ["40", "45", "50", "54"], correctIndex: 1, explanation: "9×5=45." },
    ],
    funFact: "Bạn có biết? Chơi trò chơi tính nhẩm thường xuyên có thể giúp cải thiện tốc độ phản xạ tư duy của não bộ!",
  },
  "toan:3:giai-o-so-toan-hoc": {
    objectives: ["Rèn tư duy logic qua trò chơi ô số.", "Vận dụng các phép tính đã học để giải ô số.", "Tạo hứng thú học Toán."],
    sections: [
      { heading: "1. Ô số toán học là gì?", body: ["Ô số toán học là trò chơi điền các số vào ô trống sao cho các phép tính hàng ngang, hàng dọc đều đúng."] },
      { heading: "2. Cách giải", body: ["Em cần quan sát kỹ các phép tính đã cho, suy luận để tìm ra số còn thiếu phù hợp."] },
      { heading: "3. Lợi ích", body: ["Trò chơi này giúp rèn luyện tư duy logic và khả năng tính toán linh hoạt."] },
    ],
    quiz: [
      { question: "5 + ? = 12. Số cần điền là gì?", options: ["6", "7", "8", "17"], correctIndex: 1, explanation: "12-5=7." },
      { question: "? × 4 = 32. Số cần điền là gì?", options: ["6", "7", "8", "9"], correctIndex: 2, explanation: "32:4=8." },
      { question: "18 - ? = 9. Số cần điền là gì?", options: ["7", "8", "9", "10"], correctIndex: 2, explanation: "18-9=9." },
    ],
    funFact: "Bạn có biết? Các trò chơi ô số như Sudoku được yêu thích trên toàn thế giới vì giúp rèn luyện tư duy logic!",
  },
  "toan:3:toan-vui-do-vui-ve-so": {
    objectives: ["Giải các câu đố vui liên quan đến số học.", "Rèn tư duy sáng tạo khi giải toán.", "Tạo hứng thú, yêu thích môn Toán."],
    sections: [
      { heading: "1. Toán vui là gì?", body: ["Toán vui là những câu đố, bài toán được trình bày dưới dạng thú vị, hài hước để tạo hứng thú học tập."] },
      { heading: "2. Cách giải toán vui", body: ["Em cần đọc kỹ đề bài, đôi khi câu đố có 'bẫy' đòi hỏi tư duy linh hoạt hơn bài toán thông thường."] },
      { heading: "3. Lợi ích", body: ["Toán vui giúp em thấy môn Toán gần gũi, thú vị hơn, không còn cảm giác khô khan."] },
    ],
    quiz: [
      { question: "Có 5 con chim đậu trên cành, bắn rơi 1 con. Hỏi còn mấy con trên cành?", options: ["4 con", "0 con (chim còn lại đã bay đi hết)", "5 con", "1 con"], correctIndex: 1, explanation: "Đây là câu đố vui: tiếng súng khiến các con chim còn lại bay đi hết." },
      { question: "Một cây có 10 cành, mỗi cành có 2 quả táo. Có tất cả bao nhiêu quả táo?", options: ["12", "20", "10", "22"], correctIndex: 1, explanation: "10×2=20 quả (đây là câu hỏi tính toán thông thường)." },
      { question: "Toán vui giúp ích điều gì cho việc học Toán?", options: ["Không có ích gì", "Tạo hứng thú, yêu thích môn học hơn", "Làm Toán khó hơn", "Không liên quan đến Toán"], correctIndex: 1, explanation: "Toán vui giúp tạo hứng thú và tình yêu với môn Toán." },
    ],
    funFact: "Bạn có biết? Nhiều nhà toán học nổi tiếng bắt đầu yêu thích Toán học từ những câu đố vui khi còn nhỏ!",
  },
  "toan:3:thuc-hanh-do-va-ve-hinh-don-gian": {
    objectives: ["Thực hành đo độ dài bằng thước kẻ.", "Thực hành vẽ hình cơ bản theo số đo cho trước.", "Rèn tính cẩn thận, chính xác."],
    sections: [
      { heading: "1. Cách đo độ dài bằng thước", body: ["Đặt vạch số 0 của thước trùng với điểm đầu của đoạn cần đo, đọc số đo tại điểm cuối."] },
      { heading: "2. Cách vẽ hình theo số đo", body: ["Dùng thước kẻ để vẽ các đoạn thẳng có độ dài chính xác theo yêu cầu, sau đó nối lại thành hình mong muốn."] },
      { heading: "3. Rèn tính cẩn thận", body: ["Khi đo và vẽ, em cần giữ thước cố định, không để thước bị xê dịch để có số đo và hình vẽ chính xác."] },
    ],
    quiz: [
      { question: "Khi đo độ dài bằng thước, em cần đặt vạch số nào trùng với điểm đầu?", options: ["Vạch số 1", "Vạch số 0", "Vạch bất kỳ", "Không cần đặt vạch nào"], correctIndex: 1, explanation: "Vạch số 0 cần trùng với điểm đầu của đoạn cần đo." },
      { question: "Để vẽ một đoạn thẳng dài 6cm, em cần dụng cụ gì?", options: ["Compa", "Thước kẻ", "Ê-ke", "Bút màu"], correctIndex: 1, explanation: "Thước kẻ dùng để đo và vẽ đoạn thẳng có độ dài chính xác." },
      { question: "Vì sao cần giữ thước cố định khi đo, vẽ?", options: ["Không cần thiết", "Để có số đo, hình vẽ chính xác", "Để vẽ nhanh hơn", "Không có lý do gì"], correctIndex: 1, explanation: "Giữ thước cố định giúp kết quả đo, vẽ chính xác hơn." },
    ],
    funFact: "Bạn có biết? Các kỹ sư, kiến trúc sư đều cần kỹ năng đo vẽ chính xác — đây là kỹ năng nền tảng quan trọng!",
  },
  "toan:3:on-tap-tong-hop-chuan-bi-kiem-tra-cuoi-nam": {
    objectives: ["Hệ thống lại toàn bộ kiến thức trọng tâm trong năm.", "Ôn luyện tổng hợp các dạng bài đã học.", "Tự tin bước vào bài kiểm tra cuối năm."],
    sections: [
      { heading: "1. Tổng ôn kiến thức cả năm", body: ["Em đã học rất nhiều kiến thức trong năm: số học, bốn phép tính, hình học, đo lường, phân số, và các dạng toán có lời văn."] },
      { heading: "2. Lập kế hoạch ôn tập", body: ["Em nên chia nhỏ nội dung ôn tập theo từng ngày, không nên dồn ôn tập vào một buổi."] },
      { heading: "3. Tự tin bước vào kỳ thi", body: ["Ôn tập kỹ càng kết hợp nghỉ ngơi hợp lý sẽ giúp em tự tin và đạt kết quả tốt trong bài kiểm tra cuối năm."] },
    ],
    quiz: [
      { question: "Diện tích hình chữ nhật được tính bằng công thức nào?", options: ["Dài + Rộng", "Dài × Rộng", "(Dài + Rộng) × 2", "Dài - Rộng"], correctIndex: 1, explanation: "Diện tích hình chữ nhật = chiều dài × chiều rộng." },
      { question: "1km bằng bao nhiêu mét?", options: ["10m", "100m", "1000m", "10 000m"], correctIndex: 2, explanation: "1km = 1000m." },
      { question: "2/6 + 3/6 = ?", options: ["5/6", "5/12", "1/6", "6/6"], correctIndex: 0, explanation: "2+3=5, giữ nguyên mẫu số: 5/6." },
    ],
    funFact: "Bạn có biết? Kiến thức Toán lớp 3 chính là nền tảng vững chắc để em học tốt các kiến thức nâng cao hơn ở lớp 4, lớp 5!",
  },

  // ─────────────── TOÁN — LỚP 3 — 60 bài thực hành mở rộng ───────────────
  "toan:3:thuc-hanh-bang-nhan-2-3-4-5-on-tap-nhanh": practiceContent("Thực hành", "Bảng nhân 2, 3, 4, 5 (ôn tập nhanh)", "Hãy nhớ lại các bảng nhân 2, 3, 4, 5 đã học ở lớp 2.", [
    { question: "2 × 8 = ?", options: ["16", "18", "10", "14"], correctIndex: 0, explanation: "2×8=16." },
    { question: "3 × 7 = ?", options: ["18", "21", "24", "15"], correctIndex: 1, explanation: "3×7=21." },
    { question: "4 × 5 = ?", options: ["16", "18", "20", "22"], correctIndex: 2, explanation: "4×5=20." },
    { question: "5 × 9 = ?", options: ["40", "45", "50", "35"], correctIndex: 1, explanation: "5×9=45." },
  ]),
  "toan:3:luyen-tap-bang-chia-2-3-4-5-on-tap-nhanh": practiceContent("Luyện tập", "Bảng chia 2, 3, 4, 5 (ôn tập nhanh)", "Hãy nhớ lại các bảng chia 2, 3, 4, 5 đã học ở lớp 2.", [
    { question: "16 : 2 = ?", options: ["6", "7", "8", "9"], correctIndex: 2, explanation: "16:2=8." },
    { question: "21 : 3 = ?", options: ["6", "7", "8", "9"], correctIndex: 1, explanation: "21:3=7." },
    { question: "20 : 4 = ?", options: ["4", "5", "6", "7"], correctIndex: 1, explanation: "20:4=5." },
    { question: "45 : 5 = ?", options: ["8", "9", "10", "7"], correctIndex: 1, explanation: "45:5=9." },
  ]),
  "toan:3:van-dung-nhan-so-tron-chuc-voi-so-co-mot-chu-so": practiceContent("Vận dụng", "Nhân số tròn chục với số có một chữ số", "Hãy nhớ lại cách nhân số tròn chục với số có một chữ số.", [
    { question: "20 × 4 = ?", options: ["80", "24", "8", "240"], correctIndex: 0, explanation: "2×4=8, thêm 0 được 80." },
    { question: "90 × 2 = ?", options: ["18", "180", "1800", "92"], correctIndex: 1, explanation: "9×2=18, thêm 0 được 180." },
    { question: "30 × 6 = ?", options: ["18", "180", "1800", "36"], correctIndex: 1, explanation: "3×6=18, thêm 0 được 180." },
    { question: "80 × 3 = ?", options: ["24", "240", "2400", "83"], correctIndex: 1, explanation: "8×3=24, thêm 0 được 240." },
  ]),
  "toan:3:tro-choi-on-tap-chia-so-tron-tram-cho-so-co-mot-chu-so": practiceContent("Trò chơi ôn tập", "Chia số tròn trăm cho số có một chữ số", "Hãy nhớ lại cách chia số tròn trăm cho số có một chữ số.", [
    { question: "800 : 2 = ?", options: ["40", "400", "4000", "4"], correctIndex: 1, explanation: "8:2=4, thêm hai số 0 được 400." },
    { question: "300 : 3 = ?", options: ["10", "100", "1000", "1"], correctIndex: 1, explanation: "3:3=1, thêm hai số 0 được 100." },
    { question: "500 : 5 = ?", options: ["10", "100", "1000", "1"], correctIndex: 1, explanation: "5:5=1, thêm hai số 0 được 100." },
    { question: "900 : 9 = ?", options: ["10", "100", "1000", "1"], correctIndex: 1, explanation: "9:9=1, thêm hai số 0 được 100." },
  ]),
  "toan:3:thu-thach-nho-tinh-gia-tri-bieu-thuc-co-hai-phep-tinh": practiceContent("Thử thách nhỏ", "Tính giá trị biểu thức có hai phép tính", "Hãy nhớ lại quy tắc: nhân, chia trước; cộng, trừ sau.", [
    { question: "4 × 3 + 6 = ?", options: ["18", "24", "13", "22"], correctIndex: 0, explanation: "4×3=12, 12+6=18." },
    { question: "15 - 2 × 5 = ?", options: ["65", "5", "13", "7"], correctIndex: 1, explanation: "2×5=10, 15-10=5." },
    { question: "8 + 4 × 2 = ?", options: ["24", "16", "12", "20"], correctIndex: 1, explanation: "4×2=8, 8+8=16." },
    { question: "30 - 6 × 4 = ?", options: ["96", "6", "24", "12"], correctIndex: 1, explanation: "6×4=24, 30-24=6." },
  ]),
  "toan:3:thuc-hanh-tinh-gia-tri-bieu-thuc-co-dau-ngoac": practiceContent("Thực hành", "Tính giá trị biểu thức có dấu ngoặc", "Hãy nhớ lại quy tắc: luôn tính trong ngoặc trước.", [
    { question: "(2 + 5) × 3 = ?", options: ["17", "21", "10", "13"], correctIndex: 1, explanation: "2+5=7, 7×3=21." },
    { question: "(12 - 4) : 2 = ?", options: ["4", "6", "8", "2"], correctIndex: 0, explanation: "12-4=8, 8:2=4." },
    { question: "4 × (6 - 3) = ?", options: ["12", "9", "24", "27"], correctIndex: 0, explanation: "6-3=3, 4×3=12." },
    { question: "(9 + 3) : 4 = ?", options: ["3", "4", "12", "6"], correctIndex: 0, explanation: "9+3=12, 12:4=3." },
  ]),
  "toan:3:luyen-tap-thu-tu-thuc-hien-phep-tinh": practiceContent("Luyện tập", "Thứ tự thực hiện phép tính", "Hãy nhớ lại thứ tự: trong ngoặc trước, nhân chia, rồi cộng trừ.", [
    { question: "5 + 2 × 3 - 4 = ?", options: ["7", "17", "9", "11"], correctIndex: 0, explanation: "2×3=6, 5+6-4=7." },
    { question: "(4 + 1) × 2 - 3 = ?", options: ["7", "10", "9", "12"], correctIndex: 0, explanation: "4+1=5, 5×2=10, 10-3=7." },
    { question: "20 - (3 + 2) = ?", options: ["15", "19", "10", "25"], correctIndex: 0, explanation: "3+2=5, 20-5=15." },
    { question: "6 × 2 + 3 × 2 = ?", options: ["18", "24", "22", "12"], correctIndex: 0, explanation: "6×2=12, 3×2=6, 12+6=18." },
  ]),
  "toan:3:van-dung-bai-toan-ve-nhieu-hon-it-hon-mot-so-don-vi": practiceContent("Vận dụng", "Bài toán về nhiều hơn, ít hơn một số đơn vị", "Hãy nhớ lại: 'nhiều hơn' dùng phép cộng, 'ít hơn' dùng phép trừ.", [
    { question: "Nam có 18 viên bi, Hùng có ít hơn Nam 5 viên. Hùng có bao nhiêu viên bi?", options: ["13", "23", "18", "5"], correctIndex: 0, explanation: "18-5=13 viên." },
    { question: "Lan có 25 quyển sách, Mai có nhiều hơn Lan 8 quyển. Mai có bao nhiêu quyển?", options: ["17", "33", "25", "8"], correctIndex: 1, explanation: "25+8=33 quyển." },
    { question: "Tổ 1 có 12 bạn, tổ 2 có nhiều hơn tổ 1 là 3 bạn. Tổ 2 có bao nhiêu bạn?", options: ["9", "15", "12", "3"], correctIndex: 1, explanation: "12+3=15 bạn." },
    { question: "Từ 'ít hơn' trong bài toán gợi ý phép tính gì?", options: ["Cộng", "Trừ", "Nhân", "Chia"], correctIndex: 1, explanation: "'Ít hơn' thường dùng phép trừ." },
  ]),
  "toan:3:tro-choi-on-tap-bai-toan-ve-gap-mot-so-len-nhieu-lan": practiceContent("Trò chơi ôn tập", "Bài toán về gấp một số lên nhiều lần", "Hãy nhớ lại: gấp lên nhiều lần dùng phép nhân.", [
    { question: "Số 7 gấp lên 5 lần là bao nhiêu?", options: ["12", "35", "30", "40"], correctIndex: 1, explanation: "7×5=35." },
    { question: "Vườn có 5 cây xoài, số cây ổi gấp 4 lần số cây xoài. Có bao nhiêu cây ổi?", options: ["9", "20", "15", "25"], correctIndex: 1, explanation: "5×4=20 cây." },
    { question: "Số 9 gấp lên 3 lần là bao nhiêu?", options: ["12", "27", "18", "30"], correctIndex: 1, explanation: "9×3=27." },
    { question: "Lớp có 6 bạn đăng ký vẽ, số bạn đăng ký hát gấp 2 lần. Có bao nhiêu bạn đăng ký hát?", options: ["8", "12", "3", "18"], correctIndex: 1, explanation: "6×2=12 bạn." },
  ]),
  "toan:3:thu-thach-nho-bai-toan-ve-giam-mot-so-di-nhieu-lan": practiceContent("Thử thách nhỏ", "Bài toán về giảm một số đi nhiều lần", "Hãy nhớ lại: giảm đi nhiều lần dùng phép chia.", [
    { question: "Số 40 giảm đi 5 lần là bao nhiêu?", options: ["8", "35", "45", "200"], correctIndex: 0, explanation: "40:5=8." },
    { question: "Có 63 quả cam, số quả bưởi ít hơn số quả cam 9 lần. Có bao nhiêu quả bưởi?", options: ["7", "54", "72", "9"], correctIndex: 0, explanation: "63:9=7 quả." },
    { question: "Số 48 giảm đi 6 lần là bao nhiêu?", options: ["6", "8", "42", "54"], correctIndex: 1, explanation: "48:6=8." },
    { question: "Từ 'giảm đi ... lần' gợi ý phép tính gì?", options: ["Cộng", "Trừ", "Nhân", "Chia"], correctIndex: 3, explanation: "'Giảm đi nhiều lần' dùng phép chia." },
  ]),
  "toan:3:thuc-hanh-so-sanh-so-be-bang-mot-phan-may-so-lon": practiceContent("Thực hành", "So sánh số bé bằng một phần mấy số lớn", "Hãy nhớ lại: lấy số lớn chia cho số bé để tìm phần.", [
    { question: "Số 2 bằng một phần mấy của số 16?", options: ["1/2", "1/8", "1/16", "1/4"], correctIndex: 1, explanation: "16:2=8, vậy 2 bằng 1/8 của 16." },
    { question: "Số 5 bằng một phần mấy của số 20?", options: ["1/4", "1/5", "1/20", "1/2"], correctIndex: 0, explanation: "20:5=4, vậy 5 bằng 1/4 của 20." },
    { question: "Số 3 bằng một phần mấy của số 27?", options: ["1/3", "1/9", "1/27", "1/6"], correctIndex: 1, explanation: "27:3=9, vậy 3 bằng 1/9 của 27." },
    { question: "Muốn tìm số bé bằng một phần mấy số lớn, ta làm gì?", options: ["Cộng hai số", "Lấy số lớn chia số bé", "Lấy số bé chia số lớn", "Trừ hai số"], correctIndex: 1, explanation: "Lấy số lớn chia cho số bé." },
  ]),
  "toan:3:luyen-tap-tien-viet-nam-nhan-biet-menh-gia": practiceContent("Luyện tập", "Tiền Việt Nam: nhận biết mệnh giá", "Hãy nhớ lại các mệnh giá tiền Việt Nam thường gặp.", [
    { question: "3 tờ 5000đ có tổng giá trị bao nhiêu?", options: ["8000đ", "15 000đ", "10 000đ", "5000đ"], correctIndex: 1, explanation: "5000×3=15 000đ." },
    { question: "Tờ tiền nào có giá trị nhỏ hơn 10 000đ?", options: ["20 000đ", "5000đ", "50 000đ", "100 000đ"], correctIndex: 1, explanation: "5000đ nhỏ hơn 10 000đ." },
    { question: "2 tờ 20 000đ có tổng giá trị bao nhiêu?", options: ["22 000đ", "40 000đ", "20 000đ", "42 000đ"], correctIndex: 1, explanation: "20 000×2=40 000đ." },
    { question: "Tờ tiền mệnh giá lớn nhất trong lưu thông phổ biến là gì?", options: ["10 000đ", "50 000đ", "500 000đ", "100đ"], correctIndex: 2, explanation: "500 000đ là mệnh giá lớn nhất phổ biến." },
  ]),
  "toan:3:van-dung-bai-toan-ve-tien-mua-sam-don-gian": practiceContent("Vận dụng", "Bài toán về tiền: mua sắm đơn giản", "Hãy nhớ lại cách tính tổng tiền và tiền thừa.", [
    { question: "Mua 3 cái bánh, mỗi cái 6000đ. Tổng tiền là bao nhiêu?", options: ["9000đ", "18 000đ", "24 000đ", "6000đ"], correctIndex: 1, explanation: "6000×3=18 000đ." },
    { question: "Mua đồ giá 12 000đ, đưa tờ 20 000đ. Tiền thừa là bao nhiêu?", options: ["8000đ", "32 000đ", "12 000đ", "20 000đ"], correctIndex: 0, explanation: "20 000-12 000=8000đ." },
    { question: "Mua 2 quyển vở giá 7000đ mỗi quyển, đưa 20 000đ. Tiền thừa là bao nhiêu?", options: ["6000đ", "14 000đ", "13 000đ", "20 000đ"], correctIndex: 0, explanation: "7000×2=14 000đ, 20 000-14 000=6000đ." },
    { question: "Công thức tính tiền thừa là gì?", options: ["Tiền đưa + tiền phải trả", "Tiền đưa - tiền phải trả", "Tiền đưa × tiền phải trả", "Tiền đưa : tiền phải trả"], correctIndex: 1, explanation: "Tiền thừa = tiền đưa - tiền phải trả." },
  ]),
  "toan:3:tro-choi-on-tap-xem-dong-ho-gio-phut": practiceContent("Trò chơi ôn tập", "Xem đồng hồ: giờ, phút", "Hãy nhớ lại cách đọc giờ, phút trên đồng hồ kim.", [
    { question: "Kim phút chỉ số 6 nghĩa là bao nhiêu phút?", options: ["6 phút", "30 phút", "36 phút", "60 phút"], correctIndex: 1, explanation: "6×5=30 phút." },
    { question: "Kim phút chỉ số 9 nghĩa là bao nhiêu phút?", options: ["9 phút", "45 phút", "40 phút", "54 phút"], correctIndex: 1, explanation: "9×5=45 phút." },
    { question: "Kim giờ chỉ giữa số 4 và 5, kim phút chỉ số 12. Đó là mấy giờ?", options: ["4 giờ", "4 giờ 30 phút", "5 giờ", "5 giờ 30 phút"], correctIndex: 1, explanation: "Kim giờ ở giữa 4 và 5, kim phút ở 12 nghĩa là 4 giờ 30 phút." },
    { question: "1 giờ bằng bao nhiêu phút?", options: ["30", "45", "60", "100"], correctIndex: 2, explanation: "1 giờ = 60 phút." },
  ]),
  "toan:3:thu-thach-nho-xem-lich-ngay-thang-nam": practiceContent("Thử thách nhỏ", "Xem lịch: ngày, tháng, năm", "Hãy nhớ lại số ngày trong các tháng và số tháng trong năm.", [
    { question: "Tháng 7 có bao nhiêu ngày?", options: ["28", "29", "30", "31"], correctIndex: 3, explanation: "Tháng 7 có 31 ngày." },
    { question: "Tháng 11 có bao nhiêu ngày?", options: ["28", "29", "30", "31"], correctIndex: 2, explanation: "Tháng 11 có 30 ngày." },
    { question: "Tháng nào có 29 ngày vào năm nhuận?", options: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4"], correctIndex: 1, explanation: "Tháng 2 có 29 ngày vào năm nhuận." },
    { question: "Một tuần có bao nhiêu ngày?", options: ["5", "6", "7", "8"], correctIndex: 2, explanation: "Một tuần có 7 ngày." },
  ]),
  "toan:3:thuc-hanh-do-do-dai-bang-met-de-xi-met": practiceContent("Thực hành", "Đo độ dài bằng mét, đề-xi-mét", "Hãy nhớ lại: 1 mét = 10 đề-xi-mét.", [
    { question: "2m bằng bao nhiêu dm?", options: ["2dm", "20dm", "200dm", "0.2dm"], correctIndex: 1, explanation: "1m=10dm nên 2m=20dm." },
    { question: "50dm bằng bao nhiêu mét?", options: ["5m", "50m", "500m", "0.5m"], correctIndex: 0, explanation: "10dm=1m nên 50dm=5m." },
    { question: "Đơn vị nào lớn hơn: mét hay đề-xi-mét?", options: ["Mét", "Đề-xi-mét", "Bằng nhau", "Không so sánh được"], correctIndex: 0, explanation: "1 mét lớn hơn 1 đề-xi-mét (1m=10dm)." },
    { question: "7m bằng bao nhiêu dm?", options: ["7dm", "70dm", "700dm", "17dm"], correctIndex: 1, explanation: "7m=70dm." },
  ]),
  "toan:3:luyen-tap-doi-don-vi-do-do-dai": practiceContent("Luyện tập", "Đổi đơn vị đo độ dài", "Hãy nhớ lại bảng đơn vị đo độ dài: km, m, dm, cm, mm.", [
    { question: "4m bằng bao nhiêu cm?", options: ["40cm", "400cm", "4000cm", "4cm"], correctIndex: 1, explanation: "4m=400cm." },
    { question: "60cm bằng bao nhiêu dm?", options: ["6dm", "60dm", "0.6dm", "600dm"], correctIndex: 0, explanation: "60cm=6dm." },
    { question: "2dm bằng bao nhiêu mm?", options: ["20mm", "200mm", "2mm", "2000mm"], correctIndex: 1, explanation: "1dm=100mm nên 2dm=200mm." },
    { question: "1000m bằng bao nhiêu km?", options: ["1km", "10km", "100km", "0.1km"], correctIndex: 0, explanation: "1000m=1km." },
  ]),
  "toan:3:van-dung-diem-o-giua-trung-diem-cua-doan-thang": practiceContent("Vận dụng", "Điểm ở giữa, trung điểm của đoạn thẳng", "Hãy nhớ lại: trung điểm chia đoạn thẳng thành hai phần bằng nhau.", [
    { question: "Đoạn thẳng AB dài 12cm, M là trung điểm. Đoạn AM dài bao nhiêu?", options: ["4cm", "6cm", "8cm", "12cm"], correctIndex: 1, explanation: "12:2=6cm." },
    { question: "Đoạn thẳng CD dài 20cm, N là trung điểm. Đoạn ND dài bao nhiêu?", options: ["5cm", "10cm", "15cm", "20cm"], correctIndex: 1, explanation: "20:2=10cm." },
    { question: "Nếu M là trung điểm của AB thì AM và MB như thế nào?", options: ["AM lớn hơn MB", "AM nhỏ hơn MB", "AM bằng MB", "Không xác định"], correctIndex: 2, explanation: "Trung điểm chia đoạn thẳng thành hai phần bằng nhau." },
    { question: "Điểm nằm giữa hai điểm A và B luôn nằm ở đâu?", options: ["Ngoài đoạn AB", "Trên đoạn thẳng AB", "Trùng điểm A", "Trùng điểm B"], correctIndex: 1, explanation: "Điểm ở giữa nằm trên đoạn thẳng AB." },
  ]),
  "toan:3:tro-choi-on-tap-hinh-tam-giac-nhan-biet-va-dac-diem": practiceContent("Trò chơi ôn tập", "Hình tam giác: nhận biết và đặc điểm", "Hãy nhớ lại đặc điểm của hình tam giác.", [
    { question: "Hình tam giác có bao nhiêu góc?", options: ["2", "3", "4", "5"], correctIndex: 1, explanation: "Hình tam giác có 3 góc." },
    { question: "Đồ vật nào có dạng tam giác?", options: ["Bánh xe", "Cờ đuôi nheo", "Quyển sách", "Viên bi"], correctIndex: 1, explanation: "Cờ đuôi nheo thường có dạng tam giác." },
    { question: "Hình tam giác có bao nhiêu cạnh?", options: ["2", "3", "4", "5"], correctIndex: 1, explanation: "Hình tam giác có 3 cạnh." },
    { question: "Đặc điểm nào đúng với hình tam giác?", options: ["Có 4 đỉnh", "Có 3 đỉnh, 3 cạnh, 3 góc", "Không có góc", "Có 5 cạnh"], correctIndex: 1, explanation: "Hình tam giác có 3 đỉnh, 3 cạnh, 3 góc." },
  ]),
  "toan:3:thu-thach-nho-hinh-tu-giac-nhan-biet-va-dac-diem": practiceContent("Thử thách nhỏ", "Hình tứ giác: nhận biết và đặc điểm", "Hãy nhớ lại đặc điểm của hình tứ giác.", [
    { question: "Hình tứ giác có bao nhiêu góc?", options: ["3", "4", "5", "6"], correctIndex: 1, explanation: "Hình tứ giác có 4 góc." },
    { question: "Hình nào sau đây là hình tứ giác đặc biệt?", options: ["Hình tam giác", "Hình tròn", "Hình vuông", "Hình khối cầu"], correctIndex: 2, explanation: "Hình vuông là một loại hình tứ giác đặc biệt." },
    { question: "Đồ vật nào thường có dạng tứ giác?", options: ["Quả bóng", "Cửa sổ hình chữ nhật", "Viên bi", "Ống nước hình trụ"], correctIndex: 1, explanation: "Cửa sổ hình chữ nhật là một dạng tứ giác." },
    { question: "Hình tứ giác có bao nhiêu đỉnh?", options: ["3", "4", "5", "6"], correctIndex: 1, explanation: "Hình tứ giác có 4 đỉnh." },
  ]),
  "toan:3:thuc-hanh-chu-vi-hinh-tam-giac": practiceContent("Thực hành", "Chu vi hình tam giác", "Hãy nhớ lại: chu vi tam giác bằng tổng ba cạnh.", [
    { question: "Tam giác có ba cạnh 4cm, 5cm, 6cm. Chu vi là bao nhiêu?", options: ["14cm", "15cm", "16cm", "20cm"], correctIndex: 1, explanation: "4+5+6=15cm." },
    { question: "Tam giác đều có cạnh 8cm. Chu vi là bao nhiêu?", options: ["16cm", "24cm", "32cm", "8cm"], correctIndex: 1, explanation: "8×3=24cm." },
    { question: "Tam giác có ba cạnh bằng nhau, mỗi cạnh 10cm. Chu vi là bao nhiêu?", options: ["20cm", "30cm", "40cm", "10cm"], correctIndex: 1, explanation: "10×3=30cm." },
    { question: "Tam giác có ba cạnh 7cm, 9cm, 11cm. Chu vi là bao nhiêu?", options: ["25cm", "26cm", "27cm", "28cm"], correctIndex: 2, explanation: "7+9+11=27cm." },
  ]),
  "toan:3:luyen-tap-compa-lam-quen-va-ve-hinh-tron": practiceContent("Luyện tập", "Compa: làm quen và vẽ hình tròn", "Hãy nhớ lại cách sử dụng compa để vẽ hình tròn.", [
    { question: "Compa dùng để vẽ hình gì?", options: ["Hình vuông", "Hình tròn", "Hình tam giác", "Hình chữ nhật"], correctIndex: 1, explanation: "Compa dùng để vẽ hình tròn." },
    { question: "Bộ phận nào của compa cố định khi vẽ hình tròn?", options: ["Chân có kim nhọn", "Chân có bút chì", "Cả hai chân", "Không có bộ phận nào cố định"], correctIndex: 0, explanation: "Chân có kim nhọn giữ cố định tại tâm." },
    { question: "Khi mở rộng compa, bán kính hình tròn sẽ thay đổi như thế nào?", options: ["Không đổi", "Tăng lên", "Giảm xuống", "Không xác định"], correctIndex: 1, explanation: "Mở rộng compa làm bán kính hình tròn tăng lên." },
    { question: "Sử dụng compa cần lưu ý điều gì để an toàn?", options: ["Không cần lưu ý gì", "Cẩn thận vì kim nhọn", "Dùng thật mạnh tay", "Không cần giữ cố định"], correctIndex: 1, explanation: "Kim compa nhọn, cần sử dụng cẩn thận." },
  ]),
  "toan:3:van-dung-tam-ban-kinh-duong-kinh-hinh-tron": practiceContent("Vận dụng", "Tâm, bán kính, đường kính hình tròn", "Hãy nhớ lại: đường kính gấp đôi bán kính.", [
    { question: "Bán kính hình tròn là 7cm. Đường kính là bao nhiêu?", options: ["7cm", "14cm", "21cm", "3.5cm"], correctIndex: 1, explanation: "Đường kính=7×2=14cm." },
    { question: "Đường kính hình tròn là 20cm. Bán kính là bao nhiêu?", options: ["5cm", "10cm", "40cm", "20cm"], correctIndex: 1, explanation: "Bán kính=20:2=10cm." },
    { question: "Bán kính hình tròn là 9cm. Đường kính là bao nhiêu?", options: ["9cm", "18cm", "27cm", "4.5cm"], correctIndex: 1, explanation: "Đường kính=9×2=18cm." },
    { question: "Đoạn thẳng nối từ tâm đến một điểm trên đường tròn gọi là gì?", options: ["Đường kính", "Bán kính", "Chu vi", "Diện tích"], correctIndex: 1, explanation: "Đó là bán kính." },
  ]),
  "toan:3:tro-choi-on-tap-bai-toan-tinh-tuoi-don-gian": practiceContent("Trò chơi ôn tập", "Bài toán tính tuổi đơn giản", "Hãy nhớ lại cách tính tuổi dựa vào hiệu số tuổi.", [
    { question: "Em 7 tuổi, chị hơn em 6 tuổi. Chị bao nhiêu tuổi?", options: ["1", "13", "43", "6"], correctIndex: 1, explanation: "7+6=13 tuổi." },
    { question: "Mẹ 32 tuổi, con kém mẹ 25 tuổi. Con bao nhiêu tuổi?", options: ["7", "57", "25", "32"], correctIndex: 0, explanation: "32-25=7 tuổi." },
    { question: "Ông 60 tuổi, cháu kém ông 52 tuổi. Cháu bao nhiêu tuổi?", options: ["8", "112", "52", "60"], correctIndex: 0, explanation: "60-52=8 tuổi." },
    { question: "Sau 3 năm, hiệu số tuổi giữa hai anh em sẽ thay đổi như thế nào?", options: ["Tăng lên", "Giảm xuống", "Không đổi", "Tăng gấp đôi"], correctIndex: 2, explanation: "Hiệu số tuổi giữa hai người luôn không đổi theo thời gian." },
  ]),
  "toan:3:thu-thach-nho-day-so-cach-deu-quy-luat-va-dien-so": practiceContent("Thử thách nhỏ", "Dãy số cách đều: quy luật và điền số", "Hãy nhớ lại cách tìm khoảng cách chung của dãy số cách đều.", [
    { question: "Dãy số 2, 5, 8, 11, ... Số tiếp theo là gì?", options: ["12", "13", "14", "15"], correctIndex: 2, explanation: "Dãy cách đều 3, số tiếp theo là 11+3=14." },
    { question: "Dãy số 20, 18, 16, __, 12. Số còn thiếu là gì?", options: ["13", "14", "15", "17"], correctIndex: 1, explanation: "Dãy giảm đều 2, số còn thiếu là 16-2=14." },
    { question: "Dãy số 4, 8, 12, 16, ... cách đều bao nhiêu đơn vị?", options: ["2", "3", "4", "5"], correctIndex: 2, explanation: "8-4=4, dãy cách đều 4 đơn vị." },
    { question: "Dãy số 100, 200, 300, ... Số tiếp theo là gì?", options: ["350", "400", "450", "500"], correctIndex: 1, explanation: "Dãy cách đều 100, số tiếp theo là 300+100=400." },
  ]),
  "toan:3:thuc-hanh-phep-nhan-voi-so-0-va-so-1": practiceContent("Thực hành", "Phép nhân với số 0 và số 1", "Hãy nhớ lại: nhân với 0 luôn bằng 0, nhân với 1 giữ nguyên số.", [
    { question: "356 × 1 = ?", options: ["0", "1", "356", "357"], correctIndex: 2, explanation: "Nhân với 1 giữ nguyên số." },
    { question: "999 × 0 = ?", options: ["999", "0", "1", "9990"], correctIndex: 1, explanation: "Nhân với 0 luôn bằng 0." },
    { question: "1 × 245 = ?", options: ["0", "1", "245", "246"], correctIndex: 2, explanation: "Nhân với 1 giữ nguyên số." },
    { question: "0 × 78 = ?", options: ["0", "78", "1", "780"], correctIndex: 0, explanation: "Nhân với 0 luôn bằng 0." },
  ]),
  "toan:3:luyen-tap-phep-chia-co-so-du": practiceContent("Luyện tập", "Phép chia có số dư", "Hãy nhớ lại: số dư luôn nhỏ hơn số chia.", [
    { question: "22 : 5 = ? (dư bao nhiêu)", options: ["4 dư 1", "4 dư 2", "3 dư 7", "5 dư 0"], correctIndex: 1, explanation: "5×4=20, 22-20=2, vậy 22:5=4 dư 2." },
    { question: "29 : 6 = ? (dư bao nhiêu)", options: ["4 dư 5", "5 dư 1", "4 dư 4", "5 dư 0"], correctIndex: 0, explanation: "6×4=24, 29-24=5, vậy 29:6=4 dư 5." },
    { question: "16 : 3 = ? (dư bao nhiêu)", options: ["5 dư 0", "5 dư 1", "4 dư 4", "6 dư 0"], correctIndex: 1, explanation: "3×5=15, 16-15=1, vậy 16:3=5 dư 1." },
    { question: "Số dư trong phép chia phải như thế nào so với số chia?", options: ["Lớn hơn", "Bằng", "Nhỏ hơn", "Không có quy tắc"], correctIndex: 2, explanation: "Số dư luôn nhỏ hơn số chia." },
  ]),
  "toan:3:van-dung-tim-thanh-phan-chua-biet-trong-phep-cong": practiceContent("Vận dụng", "Tìm thành phần chưa biết trong phép cộng", "Hãy nhớ lại: tìm số hạng = tổng - số hạng đã biết.", [
    { question: "x + 25 = 60. x = ?", options: ["35", "85", "45", "25"], correctIndex: 0, explanation: "x=60-25=35." },
    { question: "18 + y = 50. y = ?", options: ["32", "68", "28", "22"], correctIndex: 0, explanation: "y=50-18=32." },
    { question: "x + 100 = 250. x = ?", options: ["150", "350", "125", "100"], correctIndex: 0, explanation: "x=250-100=150." },
    { question: "Để tìm số hạng chưa biết, ta lấy tổng làm gì với số hạng đã biết?", options: ["Cộng", "Trừ", "Nhân", "Chia"], correctIndex: 1, explanation: "Lấy tổng trừ số hạng đã biết." },
  ]),
  "toan:3:tro-choi-on-tap-tim-thanh-phan-chua-biet-trong-phep-tru": practiceContent("Trò chơi ôn tập", "Tìm thành phần chưa biết trong phép trừ", "Hãy nhớ lại: số bị trừ = hiệu + số trừ; số trừ = số bị trừ - hiệu.", [
    { question: "x - 20 = 35. x = ?", options: ["15", "55", "45", "65"], correctIndex: 1, explanation: "x=35+20=55." },
    { question: "80 - y = 25. y = ?", options: ["55", "105", "45", "65"], correctIndex: 0, explanation: "y=80-25=55." },
    { question: "x - 45 = 30. x = ?", options: ["15", "75", "65", "85"], correctIndex: 1, explanation: "x=30+45=75." },
    { question: "Để tìm số bị trừ, ta lấy hiệu làm gì với số trừ?", options: ["Trừ", "Cộng", "Nhân", "Chia"], correctIndex: 1, explanation: "Lấy hiệu cộng với số trừ." },
  ]),
  "toan:3:thu-thach-nho-tim-thanh-phan-chua-biet-trong-phep-nhan": practiceContent("Thử thách nhỏ", "Tìm thành phần chưa biết trong phép nhân", "Hãy nhớ lại: thừa số = tích : thừa số đã biết.", [
    { question: "x × 7 = 56. x = ?", options: ["7", "8", "9", "49"], correctIndex: 1, explanation: "x=56:7=8." },
    { question: "9 × y = 72. y = ?", options: ["7", "8", "9", "63"], correctIndex: 1, explanation: "y=72:9=8." },
    { question: "x × 6 = 48. x = ?", options: ["6", "7", "8", "42"], correctIndex: 2, explanation: "x=48:6=8." },
    { question: "Để tìm thừa số chưa biết, ta lấy tích làm gì với thừa số đã biết?", options: ["Cộng", "Trừ", "Nhân", "Chia"], correctIndex: 3, explanation: "Lấy tích chia cho thừa số đã biết." },
  ]),
  "toan:3:thuc-hanh-tim-thanh-phan-chua-biet-trong-phep-chia": practiceContent("Thực hành", "Tìm thành phần chưa biết trong phép chia", "Hãy nhớ lại: số bị chia = thương × số chia.", [
    { question: "x : 4 = 9. x = ?", options: ["13", "36", "5", "45"], correctIndex: 1, explanation: "x=9×4=36." },
    { question: "48 : y = 6. y = ?", options: ["8", "42", "54", "6"], correctIndex: 0, explanation: "y=48:6=8." },
    { question: "x : 7 = 8. x = ?", options: ["15", "56", "1", "78"], correctIndex: 1, explanation: "x=8×7=56." },
    { question: "Để tìm số bị chia, ta lấy thương làm gì với số chia?", options: ["Cộng", "Trừ", "Nhân", "Chia"], correctIndex: 2, explanation: "Lấy thương nhân với số chia." },
  ]),
  "toan:3:luyen-tap-bai-toan-giai-bang-hai-phep-tinh": practiceContent("Luyện tập", "Bài toán giải bằng hai phép tính", "Hãy nhớ lại: tìm kết quả trung gian trước, rồi tính tiếp.", [
    { question: "Có 5 hộp bánh, mỗi hộp 6 cái, đã ăn 8 cái. Còn lại bao nhiêu cái?", options: ["22", "30", "38", "13"], correctIndex: 0, explanation: "5×6=30, 30-8=22." },
    { question: "Một cửa hàng có 60kg táo, bán 2 lần, mỗi lần 12kg. Còn lại bao nhiêu kg?", options: ["24", "36", "48", "12"], correctIndex: 1, explanation: "2×12=24, 60-24=36." },
    { question: "Có 4 túi kẹo, mỗi túi 9 viên, đã cho bạn 10 viên. Còn lại bao nhiêu viên?", options: ["26", "36", "46", "16"], correctIndex: 0, explanation: "4×9=36, 36-10=26." },
    { question: "Bài toán hai phép tính cần thực hiện mấy bước tính?", options: ["1", "2", "3", "4"], correctIndex: 1, explanation: "Cần 2 bước: tìm kết quả trung gian rồi tính tiếp." },
  ]),
  "toan:3:van-dung-uoc-luong-ket-qua-phep-tinh": practiceContent("Vận dụng", "Ước lượng kết quả phép tính", "Hãy nhớ lại: làm tròn số để ước lượng nhanh.", [
    { question: "Ước lượng nhanh: 402 + 297 gần bằng bao nhiêu?", options: ["600", "700", "800", "500"], correctIndex: 1, explanation: "400+300=700, ước lượng gần đúng." },
    { question: "Ước lượng nhanh: 599 - 201 gần bằng bao nhiêu?", options: ["300", "400", "500", "200"], correctIndex: 1, explanation: "600-200=400, ước lượng gần đúng." },
    { question: "Ước lượng nhanh: 199 × 3 gần bằng bao nhiêu?", options: ["400", "500", "600", "700"], correctIndex: 2, explanation: "200×3=600, ước lượng gần đúng." },
    { question: "Ước lượng giúp ích gì khi làm bài kiểm tra?", options: ["Không giúp gì", "Kiểm tra kết quả có hợp lý không", "Làm bài chậm hơn", "Không có tác dụng"], correctIndex: 1, explanation: "Ước lượng giúp kiểm tra tính hợp lý của kết quả." },
  ]),
  "toan:3:tro-choi-on-tap-lam-tron-so-den-hang-chuc": practiceContent("Trò chơi ôn tập", "Làm tròn số đến hàng chục", "Hãy nhớ lại quy tắc làm tròn: từ 5 trở lên làm tròn lên.", [
    { question: "Làm tròn số 76 đến hàng chục là bao nhiêu?", options: ["70", "80", "76", "75"], correctIndex: 1, explanation: "Chữ số hàng đơn vị là 6 (≥5), làm tròn lên thành 80." },
    { question: "Làm tròn số 25 đến hàng chục là bao nhiêu?", options: ["20", "30", "25", "24"], correctIndex: 1, explanation: "Chữ số hàng đơn vị là 5 (≥5), làm tròn lên thành 30." },
    { question: "Làm tròn số 91 đến hàng chục là bao nhiêu?", options: ["90", "100", "91", "95"], correctIndex: 0, explanation: "Chữ số hàng đơn vị là 1 (<5), làm tròn xuống thành 90." },
    { question: "Làm tròn số 48 đến hàng chục là bao nhiêu?", options: ["40", "50", "45", "48"], correctIndex: 1, explanation: "Chữ số hàng đơn vị là 8 (≥5), làm tròn lên thành 50." },
  ]),
  "toan:3:thu-thach-nho-lam-tron-so-den-hang-tram": practiceContent("Thử thách nhỏ", "Làm tròn số đến hàng trăm", "Hãy nhớ lại quy tắc làm tròn dựa vào chữ số hàng chục.", [
    { question: "Làm tròn số 540 đến hàng trăm là bao nhiêu?", options: ["500", "600", "540", "550"], correctIndex: 0, explanation: "Chữ số hàng chục là 4 (<5), làm tròn xuống 500." },
    { question: "Làm tròn số 850 đến hàng trăm là bao nhiêu?", options: ["800", "900", "850", "750"], correctIndex: 1, explanation: "Chữ số hàng chục là 5 (≥5), làm tròn lên 900." },
    { question: "Làm tròn số 120 đến hàng trăm là bao nhiêu?", options: ["100", "200", "120", "150"], correctIndex: 0, explanation: "Chữ số hàng chục là 2 (<5), làm tròn xuống 100." },
    { question: "Làm tròn số 980 đến hàng trăm là bao nhiêu?", options: ["900", "1000", "980", "950"], correctIndex: 1, explanation: "Chữ số hàng chục là 8 (≥5), làm tròn lên 1000." },
  ]),
  "toan:3:thuc-hanh-doc-bieu-do-tranh-don-gian": practiceContent("Thực hành", "Đọc biểu đồ tranh đơn giản", "Hãy nhớ lại cách nhân số hình với giá trị mỗi hình.", [
    { question: "Mỗi hình tượng trưng cho 5 đơn vị, có 3 hình. Tổng số lượng là bao nhiêu?", options: ["8", "15", "10", "20"], correctIndex: 1, explanation: "5×3=15." },
    { question: "Mỗi hình tượng trưng cho 2 đơn vị, có 6 hình. Tổng số lượng là bao nhiêu?", options: ["8", "10", "12", "14"], correctIndex: 2, explanation: "2×6=12." },
    { question: "Biểu đồ tranh thường dùng để làm gì?", options: ["Trang trí", "Thể hiện số lượng trực quan", "Không có tác dụng", "Chỉ để vẽ đẹp"], correctIndex: 1, explanation: "Biểu đồ tranh giúp thể hiện số lượng một cách trực quan." },
    { question: "Mỗi hình tượng trưng cho 4 đơn vị, có 5 hình. Tổng số lượng là bao nhiêu?", options: ["9", "16", "20", "24"], correctIndex: 2, explanation: "4×5=20." },
  ]),
  "toan:3:luyen-tap-thu-thap-va-kiem-dem-so-lieu": practiceContent("Luyện tập", "Thu thập và kiểm đếm số liệu", "Hãy nhớ lại cách đếm cẩn thận để không bị sót hoặc trùng.", [
    { question: "Khi kiểm đếm số liệu, em nên làm gì để tránh sai sót?", options: ["Đếm thật nhanh", "Đánh dấu từng đối tượng đã đếm", "Không cần cẩn thận", "Đoán số lượng"], correctIndex: 1, explanation: "Đánh dấu giúp tránh đếm sót hoặc trùng." },
    { question: "Sau khi thu thập số liệu, cách trình bày nào giúp dễ đọc nhất?", options: ["Viết thành đoạn văn dài", "Trình bày thành bảng hoặc biểu đồ", "Không cần trình bày", "Giữ bí mật"], correctIndex: 1, explanation: "Bảng và biểu đồ giúp số liệu dễ đọc, dễ hiểu." },
    { question: "Thu thập số liệu là bước quan trọng trong hoạt động nào?", options: ["Vẽ tranh tự do", "Nghiên cứu, thống kê", "Chơi thể thao", "Không có hoạt động nào"], correctIndex: 1, explanation: "Thu thập số liệu quan trọng trong nghiên cứu, thống kê." },
    { question: "Nếu đếm sai số liệu, điều gì có thể xảy ra?", options: ["Không ảnh hưởng gì", "Kết quả thống kê bị sai lệch", "Không có hậu quả", "Số liệu tự động đúng"], correctIndex: 1, explanation: "Đếm sai làm kết quả thống kê không chính xác." },
  ]),
  "toan:3:van-dung-hinh-khoi-nhan-biet-khoi-tru-khoi-cau": practiceContent("Vận dụng", "Hình khối: nhận biết khối trụ, khối cầu", "Hãy nhớ lại đặc điểm của khối trụ và khối cầu.", [
    { question: "Đồ vật nào có dạng khối trụ?", options: ["Quả địa cầu", "Ống nước", "Viên bi", "Quả bóng"], correctIndex: 1, explanation: "Ống nước có dạng khối trụ." },
    { question: "Khối trụ có mấy mặt đáy hình tròn?", options: ["0", "1", "2", "3"], correctIndex: 2, explanation: "Khối trụ có 2 mặt đáy hình tròn." },
    { question: "Đặc điểm nổi bật của khối cầu là gì?", options: ["Có góc nhọn", "Tròn đều mọi hướng", "Có 6 mặt", "Có 2 đáy"], correctIndex: 1, explanation: "Khối cầu tròn đều ở mọi hướng." },
    { question: "Đồ vật nào có dạng khối cầu?", options: ["Lon sữa", "Quả bóng bàn", "Hộp phấn", "Cây bút chì"], correctIndex: 1, explanation: "Quả bóng bàn có dạng khối cầu." },
  ]),
  "toan:3:tro-choi-on-tap-so-sanh-phan-so-cung-mau-so": practiceContent("Trò chơi ôn tập", "So sánh phân số cùng mẫu số", "Hãy nhớ lại: cùng mẫu số, tử số lớn hơn thì phân số lớn hơn.", [
    { question: "So sánh 3/8 và 5/8, phân số nào lớn hơn?", options: ["3/8", "5/8", "Bằng nhau", "Không xác định"], correctIndex: 1, explanation: "Cùng mẫu, 5>3 nên 5/8 lớn hơn." },
    { question: "So sánh 7/10 và 4/10, phân số nào nhỏ hơn?", options: ["7/10", "4/10", "Bằng nhau", "Không xác định"], correctIndex: 1, explanation: "Cùng mẫu, 4<7 nên 4/10 nhỏ hơn." },
    { question: "So sánh 2/6 và 2/6, kết quả là gì?", options: ["2/6 lớn hơn", "2/6 nhỏ hơn", "Hai phân số bằng nhau", "Không so sánh được"], correctIndex: 2, explanation: "Hai phân số giống hệt nhau nên bằng nhau." },
    { question: "So sánh 1/9 và 8/9, phân số nào lớn hơn?", options: ["1/9", "8/9", "Bằng nhau", "Không xác định"], correctIndex: 1, explanation: "Cùng mẫu, 8>1 nên 8/9 lớn hơn." },
  ]),
  "toan:3:thu-thach-nho-cong-hai-phan-so-cung-mau-so": practiceContent("Thử thách nhỏ", "Cộng hai phân số cùng mẫu số", "Hãy nhớ lại: cộng tử số, giữ nguyên mẫu số.", [
    { question: "2/9 + 4/9 = ?", options: ["6/9", "6/18", "2/9", "4/9"], correctIndex: 0, explanation: "2+4=6, giữ nguyên mẫu số: 6/9." },
    { question: "3/10 + 5/10 = ?", options: ["8/20", "8/10", "15/10", "2/10"], correctIndex: 1, explanation: "3+5=8, giữ nguyên mẫu số: 8/10." },
    { question: "1/4 + 1/4 = ?", options: ["2/4", "1/8", "2/8", "1/4"], correctIndex: 0, explanation: "1+1=2, giữ nguyên mẫu số: 2/4." },
    { question: "4/7 + 2/7 = ?", options: ["6/14", "6/7", "8/7", "2/7"], correctIndex: 1, explanation: "4+2=6, giữ nguyên mẫu số: 6/7." },
  ]),
  "toan:3:thuc-hanh-tru-hai-phan-so-cung-mau-so": practiceContent("Thực hành", "Trừ hai phân số cùng mẫu số", "Hãy nhớ lại: trừ tử số, giữ nguyên mẫu số.", [
    { question: "7/8 - 3/8 = ?", options: ["4/8", "4/16", "10/8", "3/8"], correctIndex: 0, explanation: "7-3=4, giữ nguyên mẫu số: 4/8." },
    { question: "9/10 - 4/10 = ?", options: ["5/20", "5/10", "13/10", "4/10"], correctIndex: 1, explanation: "9-4=5, giữ nguyên mẫu số: 5/10." },
    { question: "6/7 - 2/7 = ?", options: ["4/7", "4/14", "8/7", "2/7"], correctIndex: 0, explanation: "6-2=4, giữ nguyên mẫu số: 4/7." },
    { question: "5/6 - 5/6 = ?", options: ["0/6", "10/6", "1", "5/6"], correctIndex: 0, explanation: "5-5=0, giữ nguyên mẫu số: 0/6 (bằng 0)." },
  ]),
  "toan:3:luyen-tap-bai-toan-ve-chia-nhom-deu": practiceContent("Luyện tập", "Bài toán về chia nhóm đều", "Hãy nhớ lại: chia nhóm đều thường dùng phép chia.", [
    { question: "Có 48 quyển sách chia đều cho 8 kệ. Mỗi kệ có bao nhiêu quyển?", options: ["5", "6", "7", "8"], correctIndex: 1, explanation: "48:8=6 quyển." },
    { question: "Có 54 cái bút, mỗi hộp đựng 6 cái. Cần bao nhiêu hộp?", options: ["7", "8", "9", "10"], correctIndex: 2, explanation: "54:6=9 hộp." },
    { question: "Có 63 học sinh chia đều thành 7 nhóm. Mỗi nhóm có bao nhiêu bạn?", options: ["7", "8", "9", "10"], correctIndex: 2, explanation: "63:7=9 bạn." },
    { question: "Khi chia nhóm đều, nếu không chia hết thì kết quả có gì?", options: ["Không có kết quả", "Có số dư", "Kết quả âm", "Kết quả là 0"], correctIndex: 1, explanation: "Nếu không chia hết, phép chia sẽ có số dư." },
  ]),
  "toan:3:van-dung-met-vuong-lam-quen-don-vi-do-dien-tich-lon": practiceContent("Vận dụng", "Mét vuông: làm quen đơn vị đo diện tích lớn", "Hãy nhớ lại: 1m² = 10 000cm².", [
    { question: "Đơn vị nào phù hợp đo diện tích một sân trường?", options: ["cm²", "mm²", "m²", "Không có đơn vị phù hợp"], correctIndex: 2, explanation: "Mét vuông phù hợp đo diện tích lớn như sân trường." },
    { question: "1m² bằng bao nhiêu cm²?", options: ["100cm²", "1000cm²", "10 000cm²", "100 000cm²"], correctIndex: 2, explanation: "1m² = 10 000cm²." },
    { question: "Diện tích một căn phòng thường được đo bằng đơn vị nào?", options: ["mm²", "cm²", "m²", "km²"], correctIndex: 2, explanation: "Mét vuông phù hợp để đo diện tích phòng." },
    { question: "2m² bằng bao nhiêu cm²?", options: ["2000cm²", "20 000cm²", "200cm²", "200 000cm²"], correctIndex: 1, explanation: "2m² = 20 000cm²." },
  ]),
  "toan:3:tro-choi-on-tap-ki-lo-met-do-khoang-cach-xa": practiceContent("Trò chơi ôn tập", "Ki-lô-mét: đo khoảng cách xa", "Hãy nhớ lại: 1km = 1000m.", [
    { question: "2km bằng bao nhiêu mét?", options: ["200m", "2000m", "20 000m", "20m"], correctIndex: 1, explanation: "2km=2000m." },
    { question: "5000m bằng bao nhiêu km?", options: ["5km", "50km", "500km", "0.5km"], correctIndex: 0, explanation: "5000m=5km." },
    { question: "Đơn vị nào phù hợp để đo khoảng cách từ Hà Nội đến Đà Nẵng?", options: ["cm", "m", "km", "mm"], correctIndex: 2, explanation: "Ki-lô-mét phù hợp để đo khoảng cách rất xa giữa hai thành phố." },
    { question: "10km bằng bao nhiêu mét?", options: ["100m", "1000m", "10 000m", "100 000m"], correctIndex: 2, explanation: "10km=10 000m." },
  ]),
  "toan:3:thu-thach-nho-van-dung-do-luong-vao-tinh-huong-thuc-te": practiceContent("Thử thách nhỏ", "Vận dụng đo lường vào tình huống thực tế", "Hãy nhớ lại cách chọn đơn vị đo phù hợp và đổi đơn vị khi cần.", [
    { question: "Một đoạn dây dài 3m, cắt bớt 80cm. Đổi 3m=300cm, còn lại bao nhiêu cm?", options: ["220cm", "230cm", "380cm", "300cm"], correctIndex: 0, explanation: "300-80=220cm." },
    { question: "Một túi gạo 5kg, chia đều vào 5 túi nhỏ. Mỗi túi nhỏ nặng bao nhiêu?", options: ["500g", "1000g", "100g", "5000g"], correctIndex: 1, explanation: "5kg:5=1kg=1000g." },
    { question: "Đơn vị nào phù hợp để đo dung tích một bể bơi?", options: ["ml", "lít", "gam", "mét"], correctIndex: 1, explanation: "Lít phù hợp để đo dung tích lớn như bể bơi." },
    { question: "Khi bài toán có đơn vị đo khác nhau, bước đầu tiên cần làm gì?", options: ["Bỏ qua đơn vị", "Đổi về cùng đơn vị", "Đoán kết quả", "Không cần làm gì"], correctIndex: 1, explanation: "Cần đổi về cùng đơn vị trước khi tính." },
  ]),
  "toan:3:thuc-hanh-on-tap-giua-hoc-ky-1": practiceContent("Thực hành", "Ôn tập giữa học kỳ 1", "Hãy ôn lại các kiến thức trọng tâm giữa học kỳ 1.", [
    { question: "245 + 189 = ?", options: ["434", "424", "444", "414"], correctIndex: 0, explanation: "245+189=434." },
    { question: "8 × 6 = ?", options: ["42", "48", "56", "54"], correctIndex: 1, explanation: "8×6=48." },
    { question: "500 - 267 = ?", options: ["233", "243", "223", "253"], correctIndex: 0, explanation: "500-267=233." },
    { question: "63 : 9 = ?", options: ["6", "7", "8", "9"], correctIndex: 1, explanation: "9×7=63 nên 63:9=7." },
  ]),
  "toan:3:luyen-tap-on-tap-cuoi-hoc-ky-1": practiceContent("Luyện tập", "Ôn tập cuối học kỳ 1", "Hãy ôn lại toàn bộ kiến thức đã học trong học kỳ 1.", [
    { question: "Hình vuông cạnh 8cm. Chu vi là bao nhiêu?", options: ["16cm", "24cm", "32cm", "64cm"], correctIndex: 2, explanation: "8×4=32cm." },
    { question: "72 : 8 = ?", options: ["8", "9", "10", "7"], correctIndex: 1, explanation: "8×9=72 nên 72:8=9." },
    { question: "375 + 428 = ?", options: ["793", "803", "813", "703"], correctIndex: 1, explanation: "375+428=803." },
    { question: "Góc nào lớn hơn góc vuông?", options: ["Góc nhọn", "Góc tù", "Không có góc nào", "Góc bẹt"], correctIndex: 1, explanation: "Góc tù lớn hơn góc vuông (90 độ)." },
  ]),
  "toan:3:van-dung-on-tap-giua-hoc-ky-2": practiceContent("Vận dụng", "Ôn tập giữa học kỳ 2", "Hãy ôn lại các kiến thức trọng tâm giữa học kỳ 2.", [
    { question: "Hình chữ nhật dài 15cm, rộng 6cm. Diện tích là bao nhiêu?", options: ["21cm²", "42cm²", "90cm²", "84cm²"], correctIndex: 2, explanation: "15×6=90cm²." },
    { question: "2/5 + 1/5 = ?", options: ["3/5", "3/10", "1/5", "2/5"], correctIndex: 0, explanation: "2+1=3, giữ nguyên mẫu số: 3/5." },
    { question: "Số 56 720 có mấy chữ số?", options: ["4", "5", "6", "3"], correctIndex: 1, explanation: "56 720 có 5 chữ số." },
    { question: "1kg bằng bao nhiêu gam?", options: ["10g", "100g", "1000g", "10 000g"], correctIndex: 2, explanation: "1kg=1000g." },
  ]),
  "toan:3:tro-choi-on-tap-so-la-ma-lam-quen-cac-so-co-ban": practiceContent("Trò chơi ôn tập", "Số La Mã: làm quen các số cơ bản", "Hãy nhớ lại các ký hiệu số La Mã: I, V, X, L, C.", [
    { question: "Chữ số La Mã 'X' tương ứng với số nào?", options: ["5", "10", "50", "100"], correctIndex: 1, explanation: "'X' tương ứng với số 10." },
    { question: "Số La Mã 'VI' tương ứng với số nào?", options: ["4", "5", "6", "11"], correctIndex: 2, explanation: "'VI' (V+I) = 5+1=6." },
    { question: "Chữ số La Mã 'I' tương ứng với số nào?", options: ["1", "5", "10", "0"], correctIndex: 0, explanation: "'I' tương ứng với số 1." },
    { question: "Số La Mã 'IX' tương ứng với số nào?", options: ["11", "9", "6", "4"], correctIndex: 1, explanation: "'IX' (I trước X) nghĩa là 10-1=9." },
  ]),
  "toan:3:thu-thach-nho-bai-toan-ve-van-toc-don-gian": practiceContent("Thử thách nhỏ", "Bài toán về vận tốc đơn giản", "Hãy nhớ lại: quãng đường = quãng đường mỗi giờ × số giờ.", [
    { question: "Mỗi giờ đi được 6km, đi trong 5 giờ được bao nhiêu km?", options: ["11km", "30km", "35km", "25km"], correctIndex: 1, explanation: "6×5=30km." },
    { question: "Một người đi bộ mỗi giờ 4km, đi trong 3 giờ được bao nhiêu km?", options: ["7km", "12km", "16km", "10km"], correctIndex: 1, explanation: "4×3=12km." },
    { question: "Xe đạp đi mỗi giờ 15km, đi trong 2 giờ được bao nhiêu km?", options: ["17km", "30km", "13km", "25km"], correctIndex: 1, explanation: "15×2=30km." },
    { question: "Để tính quãng đường, ta cần biết những đại lượng nào?", options: ["Chỉ cần thời gian", "Quãng đường mỗi giờ và số giờ", "Chỉ cần quãng đường mỗi giờ", "Không cần biết gì"], correctIndex: 1, explanation: "Cần biết quãng đường đi mỗi giờ và tổng số giờ." },
  ]),
  "toan:3:thuc-hanh-tinh-nhanh-bang-cach-nhom-so": practiceContent("Thực hành", "Tính nhanh bằng cách nhóm số", "Hãy nhớ lại cách nhóm các số tròn chục, tròn trăm lại với nhau.", [
    { question: "Tính nhanh: 15 + 28 + 5 = ?", options: ["48", "38", "58", "43"], correctIndex: 0, explanation: "(15+5)+28=20+28=48." },
    { question: "Tính nhanh: 2 × 17 × 5 = ?", options: ["170", "34", "85", "190"], correctIndex: 0, explanation: "2×5=10, 10×17=170." },
    { question: "Tính nhanh: 47 + 23 + 3 = ?", options: ["70", "73", "63", "80"], correctIndex: 1, explanation: "(47+3)+23=50+23=73." },
    { question: "Tính nhanh: 25 × 4 × 3 = ?", options: ["300", "100", "75", "225"], correctIndex: 0, explanation: "25×4=100, 100×3=300." },
  ]),
  "toan:3:luyen-tap-bai-toan-co-loi-van-ve-do-luong": practiceContent("Luyện tập", "Bài toán có lời văn về đo lường", "Hãy nhớ lại: đổi về cùng đơn vị trước khi tính.", [
    { question: "Một bao gạo 30kg, dùng hết 12kg. Còn lại bao nhiêu ki-lô-gam?", options: ["18kg", "42kg", "22kg", "12kg"], correctIndex: 0, explanation: "30-12=18kg." },
    { question: "Một sợi dây dài 4m, cắt đi 150cm. Đổi 4m=400cm, còn lại bao nhiêu cm?", options: ["250cm", "260cm", "550cm", "150cm"], correctIndex: 0, explanation: "400-150=250cm." },
    { question: "Một bình có 3 lít nước, rót ra 800ml. Đổi 3 lít=3000ml, còn lại bao nhiêu ml?", options: ["2100ml", "2200ml", "3800ml", "800ml"], correctIndex: 1, explanation: "3000-800=2200ml." },
    { question: "Khi bài toán có nhiều đơn vị đo, bước quan trọng đầu tiên là gì?", options: ["Bỏ qua đơn vị", "Đổi về cùng đơn vị", "Đoán kết quả", "Không cần đổi"], correctIndex: 1, explanation: "Cần đổi về cùng đơn vị trước khi tính." },
  ]),
  "toan:3:van-dung-bai-toan-co-loi-van-ve-hinh-hoc": practiceContent("Vận dụng", "Bài toán có lời văn về hình học", "Hãy nhớ lại công thức chu vi, diện tích hình chữ nhật, hình vuông.", [
    { question: "Một khu vườn hình vuông cạnh 9m. Diện tích khu vườn là bao nhiêu?", options: ["36m²", "81m²", "18m²", "27m²"], correctIndex: 1, explanation: "9×9=81m²." },
    { question: "Một tấm bảng hình chữ nhật dài 120cm, rộng 80cm. Chu vi tấm bảng là bao nhiêu?", options: ["200cm", "400cm", "9600cm", "300cm"], correctIndex: 1, explanation: "(120+80)×2=400cm." },
    { question: "Một mảnh vườn hình chữ nhật dài 10m, rộng 6m. Diện tích là bao nhiêu?", options: ["16m²", "32m²", "60m²", "40m²"], correctIndex: 2, explanation: "10×6=60m²." },
    { question: "Khi giải bài toán hình học có lời văn, em cần xác định gì trước?", options: ["Màu sắc hình", "Hình dạng và số đo các cạnh", "Tên người ra đề", "Không cần xác định"], correctIndex: 1, explanation: "Cần xác định hình dạng và số đo các cạnh." },
  ]),
  "toan:3:tro-choi-on-tap-luyen-tap-bang-nhan-chia-tong-hop": practiceContent("Trò chơi ôn tập", "Luyện tập bảng nhân, chia tổng hợp", "Hãy ôn lại toàn bộ các bảng nhân, chia từ 2 đến 9.", [
    { question: "7 × 9 = ?", options: ["56", "63", "72", "54"], correctIndex: 1, explanation: "7×9=63." },
    { question: "72 : 9 = ?", options: ["6", "7", "8", "9"], correctIndex: 2, explanation: "9×8=72 nên 72:9=8." },
    { question: "6 × 6 = ?", options: ["30", "36", "42", "48"], correctIndex: 1, explanation: "6×6=36." },
    { question: "56 : 7 = ?", options: ["6", "7", "8", "9"], correctIndex: 2, explanation: "7×8=56 nên 56:7=8." },
  ]),
  "toan:3:thu-thach-nho-luyen-tap-bon-phep-tinh-tong-hop": practiceContent("Thử thách nhỏ", "Luyện tập bốn phép tính tổng hợp", "Hãy ôn lại cả bốn phép tính: cộng, trừ, nhân, chia.", [
    { question: "246 + 358 = ?", options: ["594", "604", "614", "584"], correctIndex: 1, explanation: "246+358=604." },
    { question: "7 × 8 - 20 = ?", options: ["36", "56", "76", "16"], correctIndex: 0, explanation: "7×8=56, 56-20=36." },
    { question: "900 - 456 = ?", options: ["444", "454", "434", "464"], correctIndex: 0, explanation: "900-456=444." },
    { question: "96 : 8 = ?", options: ["10", "11", "12", "13"], correctIndex: 2, explanation: "8×12=96 nên 96:8=12." },
  ]),
  "toan:3:thuc-hanh-tro-choi-ai-nhanh-ai-dung-voi-phep-tinh": practiceContent("Thực hành", "Trò chơi: Ai nhanh ai đúng với phép tính", "Hãy luyện phản xạ tính toán nhanh và chính xác.", [
    { question: "8 × 7 = ?", options: ["48", "54", "56", "64"], correctIndex: 2, explanation: "8×7=56." },
    { question: "90 - 37 = ?", options: ["53", "63", "43", "57"], correctIndex: 0, explanation: "90-37=53." },
    { question: "6 × 9 = ?", options: ["45", "54", "63", "48"], correctIndex: 1, explanation: "6×9=54." },
    { question: "35 + 48 = ?", options: ["73", "83", "93", "63"], correctIndex: 1, explanation: "35+48=83." },
  ]),
  "toan:3:luyen-tap-giai-o-so-toan-hoc": practiceContent("Luyện tập", "Giải ô số toán học", "Hãy vận dụng các phép tính đã học để giải ô số.", [
    { question: "6 + ? = 15. Số cần điền là gì?", options: ["8", "9", "10", "21"], correctIndex: 1, explanation: "15-6=9." },
    { question: "? × 5 = 45. Số cần điền là gì?", options: ["8", "9", "10", "40"], correctIndex: 1, explanation: "45:5=9." },
    { question: "24 - ? = 15. Số cần điền là gì?", options: ["7", "8", "9", "10"], correctIndex: 2, explanation: "24-15=9." },
    { question: "? : 6 = 7. Số cần điền là gì?", options: ["36", "42", "48", "1"], correctIndex: 1, explanation: "7×6=42." },
  ]),
  "toan:3:van-dung-toan-vui-do-vui-ve-so": practiceContent("Vận dụng", "Toán vui: đố vui về số", "Hãy vận dụng tư duy linh hoạt để giải các câu đố vui.", [
    { question: "Số nào cộng với chính nó bằng 0?", options: ["1", "0", "10", "Không có số nào"], correctIndex: 1, explanation: "0+0=0." },
    { question: "Có 3 con vịt xếp thành một hàng dọc: một con đi trước 2 con, một con đi giữa, một con đi sau 2 con. Đàn vịt có ít nhất mấy con?", options: ["6", "3", "9", "2"], correctIndex: 1, explanation: "Đây là câu đố vui: chỉ cần 3 con xếp hàng dọc, mỗi con vừa 'đi trước', 'ở giữa', 'đi sau' tuỳ theo góc nhìn!" },
    { question: "Số nào nhân với chính nó vẫn ra chính nó?", options: ["Số 0 và số 1", "Chỉ có số 2", "Chỉ có số 10", "Không có số nào"], correctIndex: 0, explanation: "0×0=0 và 1×1=1 — đây là hai trường hợp đặc biệt trong phép nhân." },
    { question: "Toán vui giúp ích gì cho em?", options: ["Không có ích gì", "Tạo hứng thú và tư duy linh hoạt", "Làm Toán khó hơn", "Không liên quan đến Toán"], correctIndex: 1, explanation: "Toán vui giúp tạo hứng thú và rèn tư duy linh hoạt." },
  ]),
  "toan:3:tro-choi-on-tap-thuc-hanh-do-va-ve-hinh-don-gian": practiceContent("Trò chơi ôn tập", "Thực hành đo và vẽ hình đơn giản", "Hãy ôn lại cách sử dụng thước kẻ để đo và vẽ hình chính xác.", [
    { question: "Để đo độ dài một đoạn thẳng, em cần dụng cụ gì?", options: ["Compa", "Thước kẻ", "Bút màu", "Ê-ke"], correctIndex: 1, explanation: "Thước kẻ dùng để đo độ dài." },
    { question: "Khi vẽ hình vuông cạnh 5cm, em cần vẽ mấy đoạn thẳng bằng nhau?", options: ["2", "3", "4", "5"], correctIndex: 2, explanation: "Hình vuông có 4 cạnh bằng nhau." },
    { question: "Để vẽ được góc vuông chính xác, em nên dùng dụng cụ gì?", options: ["Thước kẻ", "Ê-ke", "Bút chì", "Compa"], correctIndex: 1, explanation: "Ê-ke giúp vẽ góc vuông chính xác." },
    { question: "Vì sao cần đo, vẽ cẩn thận, chính xác?", options: ["Không cần thiết", "Để hình vẽ đúng theo yêu cầu", "Để vẽ nhanh hơn", "Không có lý do gì"], correctIndex: 1, explanation: "Đo vẽ cẩn thận giúp hình vẽ chính xác theo yêu cầu." },
  ]),
  "toan:3:thu-thach-nho-on-tap-tong-hop-chuan-bi-kiem-tra-cuoi-nam": practiceContent("Thử thách nhỏ", "Ôn tập tổng hợp chuẩn bị kiểm tra cuối năm", "Hãy ôn lại toàn bộ kiến thức trọng tâm của năm học.", [
    { question: "Hình chữ nhật dài 14cm, rộng 7cm. Diện tích là bao nhiêu?", options: ["42cm²", "98cm²", "21cm²", "84cm²"], correctIndex: 1, explanation: "14×7=98cm²." },
    { question: "3/8 + 2/8 = ?", options: ["5/8", "5/16", "1/8", "6/8"], correctIndex: 0, explanation: "3+2=5, giữ nguyên mẫu số: 5/8." },
    { question: "1000000... không, số lớn nhất có 5 chữ số là số nào?", options: ["10 000", "99 999", "90 000", "100 000"], correctIndex: 1, explanation: "99 999 là số có 5 chữ số lớn nhất." },
    { question: "Chu vi hình vuông cạnh 11cm là bao nhiêu?", options: ["22cm", "33cm", "44cm", "121cm"], correctIndex: 2, explanation: "11×4=44cm." },
  ]),

  // ─────────────── TIẾNG VIỆT — LỚP 3 — 60 bài lõi mở rộng (16-75) ───────────────
  "tieng-viet:3:tu-dong-nghia": {
    objectives: ["Nhận biết từ đồng nghĩa trong câu văn.", "Hiểu ý nghĩa gần giống nhau của các từ đồng nghĩa.", "Vận dụng từ đồng nghĩa khi viết câu, đoạn văn."],
    sections: [
      { heading: "1. Từ đồng nghĩa là gì?", body: ["Từ đồng nghĩa là những từ có nghĩa giống nhau hoặc gần giống nhau. Ví dụ: 'mẹ' và 'má', 'chăm chỉ' và 'siêng năng'."] },
      { heading: "2. Một số ví dụ", body: ["'Đẹp' và 'xinh', 'to' và 'lớn', 'nhanh' và 'mau' đều là các cặp từ đồng nghĩa thường gặp."] },
      { heading: "3. Vận dụng", body: ["Sử dụng từ đồng nghĩa giúp bài văn của em phong phú hơn, tránh lặp lại một từ quá nhiều lần."] },
    ],
    quiz: [
      { question: "Từ nào đồng nghĩa với từ 'đẹp'?", options: ["Xấu", "Xinh", "To", "Nhỏ"], correctIndex: 1, explanation: "'Xinh' có nghĩa gần giống với 'đẹp'." },
      { question: "Từ nào đồng nghĩa với từ 'chăm chỉ'?", options: ["Lười biếng", "Siêng năng", "Nghịch ngợm", "Vui vẻ"], correctIndex: 1, explanation: "'Siêng năng' có nghĩa gần giống với 'chăm chỉ'." },
      { question: "Cặp từ nào sau đây là từ đồng nghĩa?", options: ["To - nhỏ", "Nhanh - chậm", "To - lớn", "Vui - buồn"], correctIndex: 2, explanation: "'To' và 'lớn' có nghĩa giống nhau." },
    ],
    funFact: "Bạn có biết? Tiếng Việt có rất nhiều từ đồng nghĩa nhờ sự kết hợp giữa từ thuần Việt và từ Hán Việt!",
  },
  "tieng-viet:3:tu-trai-nghia": {
    objectives: ["Nhận biết từ trái nghĩa trong câu văn.", "Hiểu ý nghĩa đối lập của các từ trái nghĩa.", "Vận dụng từ trái nghĩa khi đặt câu."],
    sections: [
      { heading: "1. Từ trái nghĩa là gì?", body: ["Từ trái nghĩa là những từ có nghĩa trái ngược nhau. Ví dụ: 'cao' và 'thấp', 'to' và 'nhỏ'."] },
      { heading: "2. Một số ví dụ", body: ["'Nóng' - 'lạnh', 'nhanh' - 'chậm', 'vui' - 'buồn' đều là các cặp từ trái nghĩa quen thuộc."] },
      { heading: "3. Vận dụng", body: ["Dùng từ trái nghĩa giúp câu văn thể hiện rõ sự so sánh, đối lập, làm nổi bật ý muốn diễn đạt."] },
    ],
    quiz: [
      { question: "Từ nào trái nghĩa với từ 'cao'?", options: ["To", "Thấp", "Xinh", "Nhanh"], correctIndex: 1, explanation: "'Thấp' trái nghĩa với 'cao'." },
      { question: "Từ nào trái nghĩa với từ 'vui'?", options: ["Buồn", "Đẹp", "Nhanh", "To"], correctIndex: 0, explanation: "'Buồn' trái nghĩa với 'vui'." },
      { question: "Cặp từ nào sau đây là từ trái nghĩa?", options: ["To - lớn", "Nhanh - mau", "Nóng - lạnh", "Đẹp - xinh"], correctIndex: 2, explanation: "'Nóng' và 'lạnh' có nghĩa trái ngược nhau." },
    ],
    funFact: "Bạn có biết? Dùng từ trái nghĩa là một cách hay để làm câu văn, câu thơ thêm sinh động và ấn tượng!",
  },
  "tieng-viet:3:tu-nhieu-nghia-buoc-dau-lam-quen": {
    objectives: ["Làm quen khái niệm một từ có thể mang nhiều nghĩa.", "Nhận biết nghĩa của từ nhiều nghĩa trong từng ngữ cảnh.", "Vận dụng vào việc đọc hiểu câu văn."],
    sections: [
      { heading: "1. Từ nhiều nghĩa là gì?", body: ["Từ nhiều nghĩa là từ có thể mang nhiều nghĩa khác nhau tuỳ theo ngữ cảnh sử dụng."] },
      { heading: "2. Ví dụ minh hoạ", body: ["Từ 'chân' có thể chỉ 'chân người' hoặc 'chân bàn', 'chân núi' — cùng một từ nhưng nghĩa khác nhau tuỳ ngữ cảnh."] },
      { heading: "3. Cách xác định nghĩa", body: ["Để hiểu đúng nghĩa của từ nhiều nghĩa, em cần đọc kỹ câu văn xung quanh để xác định ngữ cảnh."] },
    ],
    quiz: [
      { question: "Từ 'chân' trong câu 'chân bàn' mang nghĩa gì?", options: ["Bộ phận cơ thể người", "Bộ phận đỡ của đồ vật", "Một loại thực phẩm", "Không có nghĩa"], correctIndex: 1, explanation: "Trong câu này, 'chân' chỉ bộ phận đỡ phía dưới của bàn." },
      { question: "Từ nào sau đây có thể là từ nhiều nghĩa?", options: ["Mắt (mắt người, mắt bão)", "Học sinh", "Con mèo", "Cái bàn"], correctIndex: 0, explanation: "'Mắt' có thể chỉ mắt người hoặc mắt bão, mắt lưới — là từ nhiều nghĩa." },
      { question: "Để hiểu đúng nghĩa của từ nhiều nghĩa, em cần làm gì?", options: ["Đọc kỹ ngữ cảnh câu văn", "Bỏ qua không cần hiểu", "Chỉ nhìn từ đó một mình", "Không cần làm gì"], correctIndex: 0, explanation: "Cần đọc ngữ cảnh để xác định đúng nghĩa của từ." },
    ],
    funFact: "Bạn có biết? Từ 'đầu' trong tiếng Việt có thể mang tới hàng chục nghĩa khác nhau tuỳ theo ngữ cảnh sử dụng!",
  },
  "tieng-viet:3:mo-rong-von-tu-ve-nha-truong": {
    objectives: ["Mở rộng vốn từ theo chủ điểm nhà trường.", "Hiểu nghĩa và biết cách sử dụng từ ngữ mới.", "Vận dụng vào việc đặt câu."],
    sections: [
      { heading: "1. Từ ngữ về nhà trường", body: ["Một số từ ngữ: lớp học, sân trường, thư viện, phòng thí nghiệm, giáo viên, học sinh, bạn học."] },
      { heading: "2. Từ ngữ về hoạt động học tập", body: ["Học bài, làm bài tập, kiểm tra, thi đua, phát biểu, thảo luận nhóm."] },
      { heading: "3. Vận dụng vào câu văn", body: ["Em hãy thử đặt câu với từ 'thư viện': 'Em thường đến thư viện đọc sách vào giờ ra chơi.'"] },
    ],
    quiz: [
      { question: "Từ nào thuộc chủ điểm nhà trường?", options: ["Thư viện", "Con mèo", "Cánh đồng", "Ô tô"], correctIndex: 0, explanation: "'Thư viện' là nơi quen thuộc trong trường học." },
      { question: "Từ nào chỉ hoạt động học tập?", options: ["Ngủ trưa", "Thảo luận nhóm", "Ăn cơm", "Chơi đùa ngoài trời"], correctIndex: 1, explanation: "'Thảo luận nhóm' là một hoạt động học tập." },
      { question: "Câu nào sử dụng đúng từ ngữ về nhà trường?", options: ["Em đến thư viện đọc sách.", "Em đến chợ mua rau.", "Em ra biển tắm.", "Em vào rừng hái nấm."], correctIndex: 0, explanation: "Câu này sử dụng đúng từ ngữ liên quan đến nhà trường." },
    ],
    funFact: "Bạn có biết? Từ 'trường học' trong tiếng Việt có nguồn gốc từ chữ Hán, ghép bởi 'trường' (nơi rộng lớn) và 'học' (việc học tập)!",
  },
  "tieng-viet:3:mo-rong-von-tu-ve-thien-nhien": {
    objectives: ["Mở rộng vốn từ theo chủ điểm thiên nhiên.", "Hiểu nghĩa và biết cách sử dụng từ ngữ mới.", "Vận dụng vào việc đặt câu, viết đoạn văn."],
    sections: [
      { heading: "1. Từ ngữ về cảnh vật thiên nhiên", body: ["Núi non, sông suối, biển cả, rừng cây, bầu trời, ánh nắng, cơn mưa."] },
      { heading: "2. Từ ngữ về thời tiết, khí hậu", body: ["Nắng, mưa, gió, sương, mây, bão, rét, nóng."] },
      { heading: "3. Vận dụng vào câu văn", body: ["Em hãy thử đặt câu: 'Bầu trời hôm nay trong xanh, có vài đám mây trắng bồng bềnh trôi.'"] },
    ],
    quiz: [
      { question: "Từ nào thuộc chủ điểm thiên nhiên?", options: ["Sông suối", "Bàn ghế", "Sách vở", "Ô tô"], correctIndex: 0, explanation: "'Sông suối' là hình ảnh thiên nhiên quen thuộc." },
      { question: "Từ nào chỉ hiện tượng thời tiết?", options: ["Cơn mưa", "Cái bàn", "Quyển sách", "Chiếc xe"], correctIndex: 0, explanation: "'Cơn mưa' là một hiện tượng thời tiết." },
      { question: "Câu nào miêu tả cảnh thiên nhiên?", options: ["Bầu trời trong xanh có mây trắng.", "Em đi học lúc 7 giờ.", "Quyển sách có 100 trang.", "Em rất thích học Toán."], correctIndex: 0, explanation: "Câu này miêu tả cảnh vật thiên nhiên." },
    ],
    funFact: "Bạn có biết? Việt Nam có rất nhiều cảnh đẹp thiên nhiên như Vịnh Hạ Long, đã được UNESCO công nhận là Di sản Thiên nhiên Thế giới!",
  },
  "tieng-viet:3:mo-rong-von-tu-ve-le-hoi": {
    objectives: ["Mở rộng vốn từ theo chủ điểm lễ hội truyền thống.", "Hiểu nghĩa và biết cách sử dụng từ ngữ mới.", "Vận dụng vào việc đặt câu."],
    sections: [
      { heading: "1. Từ ngữ về lễ hội", body: ["Lễ hội, đình làng, rước kiệu, múa lân, hội chợ, pháo hoa, trò chơi dân gian."] },
      { heading: "2. Một số lễ hội tiêu biểu", body: ["Tết Nguyên Đán, Tết Trung Thu, lễ hội chùa Hương, lễ hội đền Hùng."] },
      { heading: "3. Vận dụng vào câu văn", body: ["Em hãy thử đặt câu: 'Vào dịp Tết Trung Thu, các bạn nhỏ thường được rước đèn và múa lân.'"] },
    ],
    quiz: [
      { question: "Từ nào thuộc chủ điểm lễ hội?", options: ["Múa lân", "Bàn học", "Quyển vở", "Cây bút"], correctIndex: 0, explanation: "'Múa lân' là hoạt động thường thấy trong lễ hội." },
      { question: "Lễ hội nào diễn ra vào dịp Tết Nguyên Đán?", options: ["Rước kiệu", "Trung Thu", "Lễ hội chùa Hương", "Cả ba đáp án trên"], correctIndex: 2, explanation: "Lễ hội chùa Hương thường diễn ra vào đầu năm, gần dịp Tết." },
      { question: "Từ nào chỉ hoạt động vui chơi trong lễ hội?", options: ["Trò chơi dân gian", "Làm bài kiểm tra", "Đi ngủ", "Học bài"], correctIndex: 0, explanation: "'Trò chơi dân gian' thường xuất hiện trong các lễ hội." },
    ],
    funFact: "Bạn có biết? Lễ hội đền Hùng được tổ chức vào ngày 10/3 âm lịch hàng năm để tưởng nhớ các Vua Hùng đã có công dựng nước!",
  },
  "tieng-viet:3:mo-rong-von-tu-ve-nghe-nghiep": {
    objectives: ["Mở rộng vốn từ theo chủ điểm nghề nghiệp.", "Hiểu nghĩa và biết cách sử dụng từ ngữ mới.", "Vận dụng vào việc đặt câu."],
    sections: [
      { heading: "1. Từ ngữ về nghề nghiệp", body: ["Bác sĩ, giáo viên, công an, bộ đội, nông dân, công nhân, kỹ sư, ca sĩ."] },
      { heading: "2. Công việc của mỗi nghề", body: ["Bác sĩ khám chữa bệnh, giáo viên dạy học, nông dân trồng trọt, công an giữ gìn trật tự."] },
      { heading: "3. Vận dụng vào câu văn", body: ["Em hãy thử đặt câu: 'Bác sĩ là người khám và chữa bệnh cho mọi người.'"] },
    ],
    quiz: [
      { question: "Nghề nào có nhiệm vụ khám chữa bệnh?", options: ["Giáo viên", "Bác sĩ", "Nông dân", "Ca sĩ"], correctIndex: 1, explanation: "Bác sĩ là người khám chữa bệnh." },
      { question: "Nghề nào có nhiệm vụ dạy học?", options: ["Bác sĩ", "Công an", "Giáo viên", "Nông dân"], correctIndex: 2, explanation: "Giáo viên là người dạy học." },
      { question: "Từ nào chỉ nghề nghiệp?", options: ["Kỹ sư", "Quyển sách", "Cái bàn", "Con mèo"], correctIndex: 0, explanation: "'Kỹ sư' là một nghề nghiệp." },
    ],
    funFact: "Bạn có biết? Có hàng nghìn nghề nghiệp khác nhau trong xã hội, mỗi nghề đều đóng góp quan trọng cho cuộc sống!",
  },
  "tieng-viet:3:mo-rong-von-tu-ve-the-thao": {
    objectives: ["Mở rộng vốn từ theo chủ điểm thể thao.", "Hiểu nghĩa và biết cách sử dụng từ ngữ mới.", "Vận dụng vào việc đặt câu."],
    sections: [
      { heading: "1. Từ ngữ về môn thể thao", body: ["Bóng đá, bóng rổ, bơi lội, cầu lông, bóng bàn, điền kinh, võ thuật."] },
      { heading: "2. Từ ngữ liên quan đến thi đấu", body: ["Vận động viên, huấn luyện viên, sân vận động, huy chương, chiến thắng."] },
      { heading: "3. Vận dụng vào câu văn", body: ["Em hãy thử đặt câu: 'Đội tuyển bóng đá đã giành chiến thắng trong trận đấu hôm qua.'"] },
    ],
    quiz: [
      { question: "Từ nào thuộc chủ điểm thể thao?", options: ["Bóng đá", "Quyển sách", "Cái bàn", "Con mèo"], correctIndex: 0, explanation: "'Bóng đá' là một môn thể thao." },
      { question: "Người huấn luyện các vận động viên được gọi là gì?", options: ["Bác sĩ", "Huấn luyện viên", "Giáo viên", "Ca sĩ"], correctIndex: 1, explanation: "Huấn luyện viên là người huấn luyện vận động viên." },
      { question: "Phần thưởng dành cho vận động viên chiến thắng thường gọi là gì?", options: ["Huy chương", "Quyển vở", "Cây bút", "Hộp bút"], correctIndex: 0, explanation: "Huy chương là phần thưởng cho vận động viên chiến thắng." },
    ],
    funFact: "Bạn có biết? Thể thao không chỉ giúp cơ thể khoẻ mạnh mà còn rèn luyện tinh thần đồng đội, ý chí kiên trì!",
  },
  "tieng-viet:3:cau-co-trang-ngu-chi-thoi-gian": {
    objectives: ["Nhận biết trạng ngữ chỉ thời gian trong câu.", "Hiểu tác dụng của trạng ngữ chỉ thời gian.", "Đặt được câu có trạng ngữ chỉ thời gian."],
    sections: [
      { heading: "1. Trạng ngữ chỉ thời gian là gì?", body: ["Trạng ngữ chỉ thời gian là thành phần trong câu cho biết thời điểm sự việc diễn ra, thường đứng đầu câu."] },
      { heading: "2. Ví dụ minh hoạ", body: ["'Sáng nay, em đi học sớm.' — 'Sáng nay' là trạng ngữ chỉ thời gian."] },
      { heading: "3. Cách đặt câu có trạng ngữ", body: ["Em có thể bắt đầu câu bằng các từ chỉ thời gian như 'hôm qua', 'sáng nay', 'mùa hè năm ngoái' rồi mới đến phần chính của câu."] },
    ],
    quiz: [
      { question: "Trong câu 'Hôm qua, em đi thăm ông bà.', bộ phận nào là trạng ngữ chỉ thời gian?", options: ["Em", "Hôm qua", "đi thăm", "ông bà"], correctIndex: 1, explanation: "'Hôm qua' cho biết thời điểm sự việc diễn ra." },
      { question: "Từ nào thường dùng làm trạng ngữ chỉ thời gian?", options: ["Sáng nay", "Con mèo", "Quyển sách", "Cái bàn"], correctIndex: 0, explanation: "'Sáng nay' chỉ thời gian, có thể làm trạng ngữ." },
      { question: "Trạng ngữ chỉ thời gian thường trả lời cho câu hỏi nào?", options: ["Ở đâu?", "Khi nào?", "Như thế nào?", "Tại sao?"], correctIndex: 1, explanation: "Trạng ngữ chỉ thời gian trả lời cho câu hỏi 'Khi nào?'." },
    ],
    funFact: "Bạn có biết? Trạng ngữ giúp câu văn cung cấp thêm thông tin chi tiết, làm cho câu văn rõ ràng và sinh động hơn!",
  },
  "tieng-viet:3:cau-co-trang-ngu-chi-noi-chon": {
    objectives: ["Nhận biết trạng ngữ chỉ nơi chốn trong câu.", "Hiểu tác dụng của trạng ngữ chỉ nơi chốn.", "Đặt được câu có trạng ngữ chỉ nơi chốn."],
    sections: [
      { heading: "1. Trạng ngữ chỉ nơi chốn là gì?", body: ["Trạng ngữ chỉ nơi chốn cho biết địa điểm sự việc diễn ra, thường đứng đầu câu."] },
      { heading: "2. Ví dụ minh hoạ", body: ["'Ở sân trường, các bạn đang chơi nhảy dây.' — 'Ở sân trường' là trạng ngữ chỉ nơi chốn."] },
      { heading: "3. Cách đặt câu có trạng ngữ", body: ["Em có thể bắt đầu câu bằng các cụm từ chỉ nơi chốn như 'trong lớp học', 'trên cánh đồng', 'ở nhà' rồi mới đến phần chính của câu."] },
    ],
    quiz: [
      { question: "Trong câu 'Trong vườn, hoa đang nở rộ.', bộ phận nào là trạng ngữ chỉ nơi chốn?", options: ["Hoa", "Trong vườn", "đang nở", "rộ"], correctIndex: 1, explanation: "'Trong vườn' cho biết địa điểm sự việc diễn ra." },
      { question: "Trạng ngữ chỉ nơi chốn thường trả lời cho câu hỏi nào?", options: ["Khi nào?", "Ở đâu?", "Như thế nào?", "Vì sao?"], correctIndex: 1, explanation: "Trạng ngữ chỉ nơi chốn trả lời cho câu hỏi 'Ở đâu?'." },
      { question: "Cụm từ nào có thể làm trạng ngữ chỉ nơi chốn?", options: ["Hôm qua", "Trên cánh đồng", "Rất nhanh", "Vì trời mưa"], correctIndex: 1, explanation: "'Trên cánh đồng' chỉ địa điểm, có thể làm trạng ngữ nơi chốn." },
    ],
    funFact: "Bạn có biết? Trạng ngữ có thể đứng ở đầu câu, giữa câu hoặc cuối câu tuỳ theo cách diễn đạt của người viết!",
  },
  "tieng-viet:3:dau-hai-cham-va-cach-dung": {
    objectives: ["Nhận biết dấu hai chấm trong câu văn.", "Hiểu các trường hợp sử dụng dấu hai chấm.", "Vận dụng đúng dấu hai chấm khi viết câu."],
    sections: [
      { heading: "1. Dấu hai chấm dùng khi nào?", body: ["Dấu hai chấm thường dùng để báo hiệu lời giải thích, liệt kê, hoặc lời nói trực tiếp phía sau."] },
      { heading: "2. Ví dụ minh hoạ", body: ["'Lớp em có nhiều bạn giỏi: Lan, Hùng, Mai.' (liệt kê) hoặc 'Mẹ nói: \"Con nhớ học bài nhé.\"' (lời nói trực tiếp)."] },
      { heading: "3. Lưu ý khi dùng", body: ["Sau dấu hai chấm thường là phần giải thích, bổ sung ý nghĩa cho phần trước đó."] },
    ],
    quiz: [
      { question: "Dấu hai chấm thường dùng để làm gì?", options: ["Kết thúc câu", "Báo hiệu lời giải thích, liệt kê", "Ngắt câu tuỳ ý", "Không có tác dụng gì"], correctIndex: 1, explanation: "Dấu hai chấm báo hiệu phần giải thích hoặc liệt kê phía sau." },
      { question: "Câu nào sử dụng đúng dấu hai chấm?", options: ["Lớp em có: Lan Hùng Mai.", "Lớp em có nhiều bạn: Lan, Hùng, Mai.", "Lớp em: có nhiều bạn giỏi", "Lớp em có nhiều: bạn giỏi"], correctIndex: 1, explanation: "Dấu hai chấm đặt trước phần liệt kê tên các bạn." },
      { question: "Dấu hai chấm có thể xuất hiện trước loại câu nào?", options: ["Lời nói trực tiếp", "Không xuất hiện trước câu nào", "Chỉ trước số", "Chỉ trước tên riêng"], correctIndex: 0, explanation: "Dấu hai chấm thường xuất hiện trước lời nói trực tiếp." },
    ],
    funFact: "Bạn có biết? Dấu hai chấm còn được dùng trong toán học để biểu diễn phép chia, ví dụ 10:2=5!",
  },
  "tieng-viet:3:dau-ngoac-kep-va-cach-dung": {
    objectives: ["Nhận biết dấu ngoặc kép trong câu văn.", "Hiểu các trường hợp sử dụng dấu ngoặc kép.", "Vận dụng đúng dấu ngoặc kép khi viết câu."],
    sections: [
      { heading: "1. Dấu ngoặc kép dùng khi nào?", body: ["Dấu ngoặc kép dùng để đánh dấu lời nói trực tiếp của nhân vật, hoặc trích dẫn nguyên văn một câu nói."] },
      { heading: "2. Ví dụ minh hoạ", body: ["Bạn Lan nói: \"Hôm nay trời đẹp quá!\" — Lời nói của Lan được đặt trong dấu ngoặc kép."] },
      { heading: "3. Lưu ý khi dùng", body: ["Dấu ngoặc kép luôn đi thành cặp, mở đầu và kết thúc phần lời nói hoặc trích dẫn."] },
    ],
    quiz: [
      { question: "Dấu ngoặc kép thường dùng để làm gì?", options: ["Kết thúc câu", "Đánh dấu lời nói trực tiếp", "Ngắt câu tuỳ ý", "Không có tác dụng gì"], correctIndex: 1, explanation: "Dấu ngoặc kép đánh dấu lời nói trực tiếp của nhân vật." },
      { question: "Câu nào sử dụng đúng dấu ngoặc kép?", options: ["Bạn nói tôi rất vui.", "Bạn nói: \"Tôi rất vui.\"", "Bạn nói \"tôi rất vui", "Bạn nói tôi \"rất vui\""], correctIndex: 1, explanation: "Lời nói trực tiếp được đặt trong dấu ngoặc kép." },
      { question: "Dấu ngoặc kép thường đi theo cặp như thế nào?", options: ["Chỉ có một dấu", "Có dấu mở đầu và dấu kết thúc", "Không cần theo cặp", "Chỉ dùng ở cuối câu"], correctIndex: 1, explanation: "Dấu ngoặc kép luôn có một dấu mở đầu và một dấu kết thúc." },
    ],
    funFact: "Bạn có biết? Dấu ngoặc kép còn được dùng để nhấn mạnh một từ ngữ đặc biệt hoặc mang nghĩa mỉa mai trong văn viết!",
  },
  "tieng-viet:3:dau-gach-ngang-trong-loi-thoai": {
    objectives: ["Nhận biết dấu gạch ngang trong lời thoại.", "Hiểu cách sử dụng dấu gạch ngang khi viết hội thoại.", "Vận dụng đúng khi viết đoạn văn có lời thoại."],
    sections: [
      { heading: "1. Dấu gạch ngang dùng khi nào?", body: ["Dấu gạch ngang thường đặt ở đầu dòng để đánh dấu lời nói của từng nhân vật trong đoạn hội thoại."] },
      { heading: "2. Ví dụ minh hoạ", body: ["- Bạn có khoẻ không? / - Mình khoẻ, cảm ơn bạn! — Mỗi lời thoại của từng nhân vật bắt đầu bằng dấu gạch ngang."] },
      { heading: "3. Lưu ý khi dùng", body: ["Mỗi lượt lời của một nhân vật trong hội thoại nên được viết trên một dòng riêng, bắt đầu bằng dấu gạch ngang."] },
    ],
    quiz: [
      { question: "Dấu gạch ngang trong lời thoại thường đặt ở đâu?", options: ["Cuối dòng", "Đầu dòng, trước lời nói", "Giữa câu", "Không có vị trí cố định"], correctIndex: 1, explanation: "Dấu gạch ngang thường đặt ở đầu dòng trước lời thoại." },
      { question: "Dấu gạch ngang trong hội thoại có tác dụng gì?", options: ["Kết thúc câu", "Đánh dấu lời nói của từng nhân vật", "Không có tác dụng", "Chỉ để trang trí"], correctIndex: 1, explanation: "Dấu gạch ngang giúp phân biệt lời nói của từng nhân vật." },
      { question: "Khi viết đoạn hội thoại có nhiều nhân vật, mỗi lời thoại nên viết như thế nào?", options: ["Viết chung một dòng", "Viết trên dòng riêng với dấu gạch ngang", "Không cần phân biệt", "Viết không cần dấu gì"], correctIndex: 1, explanation: "Mỗi lời thoại nên viết trên dòng riêng, có dấu gạch ngang." },
    ],
    funFact: "Bạn có biết? Dấu gạch ngang còn được dùng để nối các từ trong một số từ ghép như 'đông-tây', 'Việt-Nga'!",
  },
  "tieng-viet:3:chinh-ta-phan-biet-l-n": {
    objectives: ["Phân biệt cách viết các tiếng có âm l, n.", "Viết đúng chính tả những từ dễ nhầm lẫn.", "Vận dụng vào bài chính tả, tập làm văn."],
    sections: [
      { heading: "1. Cách phân biệt l và n", body: ["Âm 'l' và 'n' dễ bị nhầm lẫn, đặc biệt ở một số vùng miền. Em cần chú ý nghe và phát âm chuẩn để viết đúng."] },
      { heading: "2. Một số từ dễ nhầm", body: ["'Nóng' - không phải 'lóng', 'lo lắng' - không phải 'no lắng', 'nước' - không phải 'lước'."] },
      { heading: "3. Mẹo ghi nhớ", body: ["Em có thể ghi nhớ qua các câu, cụm từ quen thuộc như 'nồi nào úp vung nấy' để phân biệt âm n."] },
    ],
    quiz: [
      { question: "Từ nào viết đúng chính tả?", options: ["Lước mắt", "Nước mắt", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 1, explanation: "'Nước mắt' viết đúng chính tả với âm 'n'." },
      { question: "Từ nào viết đúng chính tả?", options: ["Lo lắng", "No lắng", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 0, explanation: "'Lo lắng' viết đúng chính tả với âm 'l'." },
      { question: "Từ nào viết đúng chính tả?", options: ["Nóng nực", "Lóng lực", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 0, explanation: "'Nóng nực' viết đúng chính tả với âm 'n'." },
    ],
    funFact: "Bạn có biết? Việc phân biệt l/n là một trong những khó khăn phổ biến của người học tiếng Việt ở một số vùng miền Bắc Bộ!",
  },
  "tieng-viet:3:chinh-ta-phan-biet-s-x": {
    objectives: ["Phân biệt cách viết các tiếng có âm s, x.", "Viết đúng chính tả những từ dễ nhầm lẫn.", "Vận dụng vào bài chính tả, tập làm văn."],
    sections: [
      { heading: "1. Cách phân biệt s và x", body: ["Âm 's' và 'x' cũng thường bị nhầm lẫn khi viết. Em cần chú ý nghĩa của từ để viết đúng."] },
      { heading: "2. Một số từ dễ nhầm", body: ["'Sạch sẽ' - không phải 'xạch xẽ', 'xinh xắn' - không phải 'sinh sắn', 'sách vở' - không phải 'xách vở'."] },
      { heading: "3. Mẹo ghi nhớ", body: ["Em có thể tra từ điển hoặc hỏi thầy cô khi không chắc chắn cách viết đúng của một từ."] },
    ],
    quiz: [
      { question: "Từ nào viết đúng chính tả?", options: ["Xạch sẽ", "Sạch sẽ", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 1, explanation: "'Sạch sẽ' viết đúng với âm 's'." },
      { question: "Từ nào viết đúng chính tả?", options: ["Xinh xắn", "Sinh sắn", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 0, explanation: "'Xinh xắn' viết đúng với âm 'x'." },
      { question: "Từ nào viết đúng chính tả?", options: ["Sách vở", "Xách vở", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 0, explanation: "'Sách vở' viết đúng với âm 's'." },
    ],
    funFact: "Bạn có biết? Đọc sách thường xuyên là cách hiệu quả nhất giúp em ghi nhớ cách viết đúng chính tả của nhiều từ!",
  },
  "tieng-viet:3:chinh-ta-phan-biet-ch-tr": {
    objectives: ["Phân biệt cách viết các tiếng có âm ch, tr.", "Viết đúng chính tả những từ dễ nhầm lẫn.", "Vận dụng vào bài chính tả, tập làm văn."],
    sections: [
      { heading: "1. Cách phân biệt ch và tr", body: ["Âm 'ch' và 'tr' cũng dễ gây nhầm lẫn. Em cần luyện tập thường xuyên để viết đúng."] },
      { heading: "2. Một số từ dễ nhầm", body: ["'Cây tre' - không phải 'cây che', 'chăm chỉ' - không phải 'trăm trỉ', 'trường học' - không phải 'chường học'."] },
      { heading: "3. Mẹo ghi nhớ", body: ["Em nên đọc nhiều và chú ý khi gặp các từ có âm ch, tr để ghi nhớ cách viết đúng."] },
    ],
    quiz: [
      { question: "Từ nào viết đúng chính tả?", options: ["Cây che", "Cây tre", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 1, explanation: "'Cây tre' viết đúng với âm 'tr'." },
      { question: "Từ nào viết đúng chính tả?", options: ["Chăm chỉ", "Trăm trỉ", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 0, explanation: "'Chăm chỉ' viết đúng với âm 'ch'." },
      { question: "Từ nào viết đúng chính tả?", options: ["Chường học", "Trường học", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 1, explanation: "'Trường học' viết đúng với âm 'tr'." },
    ],
    funFact: "Bạn có biết? Tre là loài cây gắn liền với hình ảnh làng quê Việt Nam, xuất hiện trong rất nhiều câu chuyện, bài thơ!",
  },
  "tieng-viet:3:chinh-ta-phan-biet-dau-hoi-dau-nga": {
    objectives: ["Phân biệt cách viết các tiếng có dấu hỏi, dấu ngã.", "Viết đúng chính tả những từ dễ nhầm lẫn.", "Vận dụng vào bài chính tả, tập làm văn."],
    sections: [
      { heading: "1. Cách phân biệt dấu hỏi và dấu ngã", body: ["Dấu hỏi (ả, ể...) và dấu ngã (ã, ễ...) thường gây nhầm lẫn khi viết, đặc biệt với người ở miền Nam, miền Trung."] },
      { heading: "2. Một số từ dễ nhầm", body: ["'Sữa' (uống sữa) khác với 'sửa' (sửa chữa), 'ngã' (ngã xuống) khác với 'ngả' (nghiêng)."] },
      { heading: "3. Mẹo ghi nhớ", body: ["Em nên tra từ điển hoặc ghi chú lại các từ hay nhầm lẫn để luyện viết đúng dần."] },
    ],
    quiz: [
      { question: "Từ nào có nghĩa là 'đồ uống từ sữa bò'?", options: ["Sữa", "Sửa", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 0, explanation: "'Sữa' (dấu ngã) là đồ uống, còn 'sửa' (dấu hỏi) nghĩa là chữa lại." },
      { question: "Từ nào có nghĩa là 'chữa lại đồ vật hỏng'?", options: ["Sữa", "Sửa", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 1, explanation: "'Sửa' (dấu hỏi) nghĩa là chữa lại đồ vật hỏng." },
      { question: "Từ nào viết đúng khi nói về việc 'bị té xuống đất'?", options: ["Ngã", "Ngả", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 0, explanation: "'Ngã' (dấu ngã) nghĩa là bị té xuống." },
    ],
    funFact: "Bạn có biết? Tiếng Việt có 6 thanh điệu (không dấu, sắc, huyền, hỏi, ngã, nặng) — nhiều hơn hầu hết các ngôn ngữ trên thế giới!",
  },
  "tieng-viet:3:doc-hieu-bai-bao-thieu-nhi": {
    objectives: ["Đọc hiểu một bài báo dành cho thiếu nhi.", "Tìm được thông tin chính trong bài báo.", "Trả lời câu hỏi liên quan đến nội dung bài báo."],
    sections: [
      { heading: "1. Bài báo thiếu nhi là gì?", body: ["Bài báo thiếu nhi là bài viết cung cấp thông tin, kiến thức phù hợp với lứa tuổi học sinh, thường đăng trên báo Nhi đồng, báo Thiếu niên."] },
      { heading: "2. Cách đọc hiểu bài báo", body: ["Em cần đọc tiêu đề để biết chủ đề chính, sau đó đọc kỹ nội dung để nắm thông tin quan trọng."] },
      { heading: "3. Trả lời câu hỏi", body: ["Sau khi đọc, em nên trả lời được: bài báo nói về điều gì, thông tin chính là gì, bài học rút ra (nếu có)."] },
    ],
    quiz: [
      { question: "Bài báo thiếu nhi thường có nội dung như thế nào?", options: ["Phù hợp với lứa tuổi học sinh", "Quá khó hiểu với trẻ em", "Không có nội dung cụ thể", "Chỉ có hình ảnh, không có chữ"], correctIndex: 0, explanation: "Bài báo thiếu nhi được viết phù hợp với lứa tuổi học sinh." },
      { question: "Để nắm được chủ đề chính của bài báo, em nên đọc gì trước?", options: ["Chỉ đọc câu cuối", "Đọc tiêu đề bài báo", "Bỏ qua tiêu đề", "Không cần đọc gì"], correctIndex: 1, explanation: "Tiêu đề giúp em biết chủ đề chính của bài báo." },
      { question: "Sau khi đọc bài báo, em nên làm gì?", options: ["Quên ngay nội dung", "Trả lời được thông tin chính của bài", "Không cần suy nghĩ gì", "Chỉ nhớ tên bài báo"], correctIndex: 1, explanation: "Cần nắm được thông tin chính sau khi đọc bài báo." },
    ],
    funFact: "Bạn có biết? Báo Nhi Đồng là một trong những tờ báo dành cho thiếu nhi lâu đời nhất ở Việt Nam!",
  },
  "tieng-viet:3:doc-hieu-truyen-ngu-ngon": {
    objectives: ["Đọc hiểu một truyện ngụ ngôn ngắn.", "Rút ra được bài học từ truyện ngụ ngôn.", "Trả lời câu hỏi liên quan đến nội dung truyện."],
    sections: [
      { heading: "1. Truyện ngụ ngôn là gì?", body: ["Truyện ngụ ngôn là truyện ngắn thường mượn hình ảnh loài vật, đồ vật để gửi gắm một bài học về cách sống, cách ứng xử."] },
      { heading: "2. Một số truyện ngụ ngôn quen thuộc", body: ["'Rùa và Thỏ', 'Ếch ngồi đáy giếng', 'Con cáo và chùm nho' là những truyện ngụ ngôn nổi tiếng."] },
      { heading: "3. Rút ra bài học", body: ["Sau khi đọc, em cần suy nghĩ xem truyện muốn nhắn nhủ bài học gì, ví dụ truyện 'Rùa và Thỏ' dạy về sự kiên trì."] },
    ],
    quiz: [
      { question: "Truyện ngụ ngôn thường mượn hình ảnh gì để kể chuyện?", options: ["Con người thật", "Loài vật, đồ vật", "Chỉ có số liệu", "Không có hình ảnh nào"], correctIndex: 1, explanation: "Truyện ngụ ngôn thường mượn hình ảnh loài vật, đồ vật." },
      { question: "Truyện 'Rùa và Thỏ' dạy bài học gì?", options: ["Sự kiêu ngạo sẽ thất bại, kiên trì sẽ chiến thắng", "Không có bài học gì", "Chỉ để giải trí", "Dạy về nấu ăn"], correctIndex: 0, explanation: "Truyện dạy bài học về sự kiên trì và không nên kiêu ngạo." },
      { question: "Đặc điểm nổi bật của truyện ngụ ngôn là gì?", options: ["Luôn có bài học ý nghĩa", "Không có ý nghĩa gì", "Chỉ kể về con người", "Không có nhân vật"], correctIndex: 0, explanation: "Truyện ngụ ngôn luôn mang một bài học, ý nghĩa nhất định." },
    ],
    funFact: "Bạn có biết? Truyện ngụ ngôn nổi tiếng của Aesop (Hy Lạp cổ đại) đã được dịch ra hàng trăm ngôn ngữ trên thế giới!",
  },
  "tieng-viet:3:doc-hieu-truyen-co-tich-viet-nam": {
    objectives: ["Đọc hiểu một truyện cổ tích Việt Nam.", "Cảm nhận được nội dung, ý nghĩa của truyện.", "Trả lời câu hỏi liên quan đến nội dung truyện."],
    sections: [
      { heading: "1. Truyện cổ tích Việt Nam", body: ["Truyện cổ tích Việt Nam thường kể về những nhân vật hiền lành, chăm chỉ vượt qua khó khăn để có cuộc sống tốt đẹp."] },
      { heading: "2. Một số truyện cổ tích quen thuộc", body: ["'Tấm Cám', 'Sọ Dừa', 'Thạch Sanh', 'Cây tre trăm đốt' là những truyện cổ tích nổi tiếng của Việt Nam."] },
      { heading: "3. Ý nghĩa của truyện cổ tích", body: ["Truyện cổ tích thường thể hiện ước mơ về công bằng: người tốt được đền đáp, kẻ xấu bị trừng phạt."] },
    ],
    quiz: [
      { question: "Truyện cổ tích nào có nhân vật chính là cô Tấm?", options: ["Sọ Dừa", "Tấm Cám", "Thạch Sanh", "Cây tre trăm đốt"], correctIndex: 1, explanation: "'Tấm Cám' là truyện cổ tích có nhân vật chính là cô Tấm." },
      { question: "Truyện cổ tích Việt Nam thường thể hiện ước mơ gì?", options: ["Sự bất công", "Công bằng: người tốt được đền đáp", "Không có ước mơ nào", "Chỉ để giải trí"], correctIndex: 1, explanation: "Truyện cổ tích thường thể hiện ước mơ về công bằng." },
      { question: "Nhân vật trong truyện cổ tích Việt Nam thường có đặc điểm gì?", options: ["Hiền lành, chăm chỉ", "Luôn xấu xa", "Không có tính cách", "Chỉ là đồ vật"], correctIndex: 0, explanation: "Nhân vật chính trong truyện cổ tích thường hiền lành, chăm chỉ." },
    ],
    funFact: "Bạn có biết? Truyện cổ tích Việt Nam đã được truyền miệng qua nhiều thế hệ trước khi được ghi chép thành sách!",
  },
  "tieng-viet:3:ke-chuyen-theo-tranh-minh-hoa": {
    objectives: ["Quan sát tranh minh hoạ để hiểu nội dung câu chuyện.", "Kể lại câu chuyện dựa vào các bức tranh.", "Rèn kỹ năng diễn đạt mạch lạc."],
    sections: [
      { heading: "1. Cách quan sát tranh", body: ["Em cần quan sát kỹ từng bức tranh: có những nhân vật nào, đang làm gì, ở đâu."] },
      { heading: "2. Sắp xếp nội dung theo tranh", body: ["Các bức tranh thường được sắp xếp theo trình tự câu chuyện, em kể lần lượt theo đúng thứ tự tranh."] },
      { heading: "3. Kể chuyện mạch lạc", body: ["Khi kể, em nên nối các ý giữa các tranh bằng những từ ngữ chuyển tiếp như 'sau đó', 'tiếp theo', 'cuối cùng'."] },
    ],
    quiz: [
      { question: "Khi kể chuyện theo tranh, em cần làm gì đầu tiên?", options: ["Kể ngay không cần xem tranh", "Quan sát kỹ từng bức tranh", "Bỏ qua tranh", "Chỉ đọc tên truyện"], correctIndex: 1, explanation: "Cần quan sát kỹ tranh để hiểu nội dung trước khi kể." },
      { question: "Các bức tranh trong câu chuyện thường được sắp xếp theo gì?", options: ["Ngẫu nhiên", "Trình tự câu chuyện", "Không theo trình tự nào", "Theo màu sắc"], correctIndex: 1, explanation: "Tranh minh hoạ thường sắp xếp theo trình tự câu chuyện." },
      { question: "Từ ngữ nào giúp kể chuyện mạch lạc hơn?", options: ["Sau đó, tiếp theo, cuối cùng", "Không cần từ ngữ nối", "Chỉ dùng một từ duy nhất", "Không có từ nào phù hợp"], correctIndex: 0, explanation: "Các từ ngữ chuyển tiếp giúp câu chuyện mạch lạc hơn." },
    ],
    funFact: "Bạn có biết? Kể chuyện theo tranh là một trong những cách học ngôn ngữ hiệu quả nhất dành cho trẻ nhỏ trên toàn thế giới!",
  },
  "tieng-viet:3:ke-lai-mot-buoi-tham-quan": {
    objectives: ["Nhớ lại và kể lại một buổi tham quan đáng nhớ.", "Sắp xếp nội dung kể theo trình tự hợp lý.", "Thể hiện cảm xúc khi kể chuyện."],
    sections: [
      { heading: "1. Chuẩn bị nội dung kể", body: ["Em cần nhớ lại: buổi tham quan diễn ra ở đâu, khi nào, có những hoạt động gì đáng nhớ."] },
      { heading: "2. Trình tự kể chuyện", body: ["Kể theo trình tự: chuẩn bị trước khi đi, các hoạt động trong buổi tham quan, cảm xúc sau khi kết thúc."] },
      { heading: "3. Thể hiện cảm xúc", body: ["Em nên chia sẻ cảm xúc của mình (vui, thích thú, ngạc nhiên...) để câu chuyện thêm sinh động."] },
    ],
    quiz: [
      { question: "Khi kể về một buổi tham quan, em nên nhớ lại điều gì trước?", options: ["Địa điểm, thời gian, hoạt động đáng nhớ", "Không cần nhớ gì", "Chỉ cần nhớ tên địa điểm", "Chỉ cần nhớ ngày tháng"], correctIndex: 0, explanation: "Cần nhớ đầy đủ địa điểm, thời gian và hoạt động đáng nhớ." },
      { question: "Kể chuyện về buổi tham quan nên theo trình tự nào?", options: ["Chuẩn bị, hoạt động, cảm xúc sau khi kết thúc", "Kể lộn xộn không cần trình tự", "Chỉ kể phần kết thúc", "Không cần trình tự nào"], correctIndex: 0, explanation: "Kể theo trình tự giúp câu chuyện rõ ràng, dễ hiểu." },
      { question: "Vì sao nên thể hiện cảm xúc khi kể chuyện?", options: ["Không cần thiết", "Giúp câu chuyện sinh động hơn", "Làm câu chuyện khó hiểu", "Không có tác dụng gì"], correctIndex: 1, explanation: "Thể hiện cảm xúc giúp câu chuyện sinh động, chân thực hơn." },
    ],
    funFact: "Bạn có biết? Ghi nhật ký sau mỗi chuyến tham quan là một cách hay để lưu giữ kỷ niệm và luyện kỹ năng viết!",
  },
  "tieng-viet:3:ke-ve-mot-ngay-cua-em": {
    objectives: ["Nhớ lại các hoạt động trong một ngày của bản thân.", "Kể lại theo trình tự thời gian hợp lý.", "Rèn kỹ năng diễn đạt tự nhiên."],
    sections: [
      { heading: "1. Nhớ lại hoạt động trong ngày", body: ["Em hãy nhớ lại các hoạt động từ sáng đến tối: thức dậy, đi học, học bài, vui chơi, đi ngủ."] },
      { heading: "2. Kể theo trình tự thời gian", body: ["Kể lần lượt các hoạt động theo đúng thứ tự thời gian trong ngày, từ sáng đến tối."] },
      { heading: "3. Kể tự nhiên, chân thực", body: ["Em nên kể bằng những từ ngữ, câu chuyện của chính mình, không cần quá cầu kỳ, hoa mỹ."] },
    ],
    quiz: [
      { question: "Khi kể về một ngày của mình, em nên kể theo trình tự nào?", options: ["Lộn xộn không cần trình tự", "Theo trình tự thời gian từ sáng đến tối", "Chỉ kể một hoạt động", "Không cần trình tự"], correctIndex: 1, explanation: "Kể theo trình tự thời gian giúp câu chuyện rõ ràng." },
      { question: "Hoạt động nào thường diễn ra đầu tiên trong ngày?", options: ["Đi ngủ", "Thức dậy", "Ăn tối", "Học bài buổi tối"], correctIndex: 1, explanation: "'Thức dậy' thường là hoạt động đầu tiên trong ngày." },
      { question: "Khi kể về một ngày của mình, em nên kể như thế nào?", options: ["Chép văn mẫu", "Tự nhiên, chân thực theo trải nghiệm của mình", "Không cần kể thật", "Kể thật ngắn gọn, không có chi tiết"], correctIndex: 1, explanation: "Kể tự nhiên, chân thực giúp bài văn gần gũi hơn." },
    ],
    funFact: "Bạn có biết? Viết về một ngày của mình là bài tập phổ biến giúp trẻ em rèn luyện khả năng quan sát và diễn đạt!",
  },
  "tieng-viet:3:ta-buoi-sang-o-que-em": {
    objectives: ["Quan sát và miêu tả khung cảnh buổi sáng ở quê.", "Sử dụng từ ngữ gợi tả sinh động.", "Viết được đoạn văn ngắn tả buổi sáng."],
    sections: [
      { heading: "1. Quan sát buổi sáng ở quê", body: ["Em có thể miêu tả: ánh nắng, tiếng gà gáy, sương sớm, cánh đồng, con đường làng."] },
      { heading: "2. Sử dụng từ ngữ gợi tả", body: ["Các từ như 'mờ ảo', 'trong lành', 'rộn ràng' giúp bài văn miêu tả sinh động hơn."] },
      { heading: "3. Cấu trúc đoạn văn", body: ["Đoạn văn có thể mở đầu bằng khung cảnh chung, sau đó tả chi tiết một vài hình ảnh nổi bật."] },
    ],
    quiz: [
      { question: "Hình ảnh nào thường xuất hiện trong buổi sáng ở quê?", options: ["Tiếng gà gáy", "Đèn giao thông", "Xe buýt", "Toà nhà cao tầng"], correctIndex: 0, explanation: "Tiếng gà gáy là âm thanh quen thuộc buổi sáng ở quê." },
      { question: "Từ nào phù hợp để tả sương sớm?", options: ["Ồn ào", "Mờ ảo", "Nóng bức", "Chật chội"], correctIndex: 1, explanation: "'Mờ ảo' phù hợp để miêu tả sương sớm." },
      { question: "Đoạn văn tả buổi sáng nên bắt đầu bằng gì?", options: ["Một câu hỏi bất kỳ", "Khung cảnh chung", "Một phép tính", "Không cần mở đầu"], correctIndex: 1, explanation: "Nên bắt đầu bằng khung cảnh chung rồi tả chi tiết." },
    ],
    funFact: "Bạn có biết? Nhiều nhà văn, nhà thơ Việt Nam đã lấy cảm hứng sáng tác từ vẻ đẹp bình dị của làng quê buổi sáng sớm!",
  },
  "tieng-viet:3:ta-canh-san-truong-gio-ra-choi": {
    objectives: ["Quan sát và miêu tả không khí sân trường giờ ra chơi.", "Sử dụng từ ngữ gợi tả sinh động.", "Viết được đoạn văn ngắn tả cảnh sân trường."],
    sections: [
      { heading: "1. Quan sát giờ ra chơi", body: ["Em có thể miêu tả: tiếng trống báo hiệu, các bạn ùa ra sân, trò chơi nhảy dây, đá cầu, tiếng cười nói."] },
      { heading: "2. Sử dụng từ ngữ gợi tả", body: ["Các từ như 'nhộn nhịp', 'rộn rã', 'náo nhiệt' giúp tả không khí vui tươi của giờ ra chơi."] },
      { heading: "3. Cấu trúc đoạn văn", body: ["Đoạn văn có thể tả từ lúc trống báo hiệu đến khi các bạn chơi các trò chơi khác nhau trên sân."] },
    ],
    quiz: [
      { question: "Âm thanh nào báo hiệu giờ ra chơi bắt đầu?", options: ["Tiếng chuông điện thoại", "Tiếng trống trường", "Tiếng còi xe", "Tiếng nhạc"], correctIndex: 1, explanation: "Tiếng trống trường thường báo hiệu giờ ra chơi." },
      { question: "Từ nào phù hợp để tả không khí sân trường giờ ra chơi?", options: ["Yên tĩnh", "Nhộn nhịp", "Buồn bã", "Vắng vẻ"], correctIndex: 1, explanation: "'Nhộn nhịp' phù hợp để tả không khí vui tươi, sôi động." },
      { question: "Hoạt động nào thường thấy trong giờ ra chơi?", options: ["Làm bài kiểm tra", "Nhảy dây, đá cầu", "Ngủ trưa", "Học bài mới"], correctIndex: 1, explanation: "Nhảy dây, đá cầu là các trò chơi phổ biến trong giờ ra chơi." },
    ],
    funFact: "Bạn có biết? Giờ ra chơi không chỉ giúp thư giãn mà còn giúp học sinh vận động, tăng cường sức khoẻ sau giờ học căng thẳng!",
  },
  "tieng-viet:3:ta-con-mua": {
    objectives: ["Quan sát và miêu tả một cơn mưa.", "Sử dụng từ ngữ gợi tả âm thanh, hình ảnh của mưa.", "Viết được đoạn văn ngắn tả cơn mưa."],
    sections: [
      { heading: "1. Quan sát cơn mưa", body: ["Em có thể miêu tả: bầu trời trước khi mưa, tiếng mưa rơi, hạt mưa, cảnh vật sau cơn mưa."] },
      { heading: "2. Sử dụng từ ngữ gợi tả", body: ["Các từ như 'lộp độp', 'tí tách', 'ào ào' giúp miêu tả âm thanh của mưa sinh động hơn."] },
      { heading: "3. Cấu trúc đoạn văn", body: ["Đoạn văn có thể tả theo trình tự: trước khi mưa, trong khi mưa, và sau khi mưa tạnh."] },
    ],
    quiz: [
      { question: "Từ nào miêu tả âm thanh của mưa rơi trên mái nhà?", options: ["Lộp độp", "Ồn ào", "Yên tĩnh", "Chậm rãi"], correctIndex: 0, explanation: "'Lộp độp' là từ tượng thanh miêu tả tiếng mưa rơi." },
      { question: "Bầu trời trước khi mưa thường có đặc điểm gì?", options: ["Trong xanh", "Xuất hiện mây đen", "Nắng chói chang", "Không có gì đặc biệt"], correctIndex: 1, explanation: "Trước khi mưa, bầu trời thường xuất hiện mây đen." },
      { question: "Sau cơn mưa, cảnh vật thường như thế nào?", options: ["Trở nên khô cằn", "Tươi mát, trong lành hơn", "Không thay đổi gì", "Nóng bức hơn"], correctIndex: 1, explanation: "Sau mưa, cảnh vật thường trở nên tươi mát, trong lành hơn." },
    ],
    funFact: "Bạn có biết? Mưa rào là hiện tượng tự nhiên giúp cây cối tươi tốt và làm sạch không khí sau những ngày nắng nóng!",
  },
  "tieng-viet:3:viet-doan-van-gioi-thieu-ban-than": {
    objectives: ["Nêu được thông tin cơ bản về bản thân.", "Sắp xếp thông tin theo trình tự hợp lý.", "Viết được đoạn văn ngắn giới thiệu bản thân."],
    sections: [
      { heading: "1. Thông tin cần giới thiệu", body: ["Tên, tuổi, lớp học, trường học, sở thích, ước mơ của bản thân là những thông tin cơ bản cần có."] },
      { heading: "2. Cách sắp xếp thông tin", body: ["Em nên giới thiệu tên trước, sau đó đến các thông tin khác như tuổi, lớp học, sở thích."] },
      { heading: "3. Ví dụ minh hoạ", body: ["'Em tên là Lan, năm nay 9 tuổi, học lớp 3A trường Tiểu học Kim Đồng. Em thích đọc sách và vẽ tranh.'"] },
    ],
    quiz: [
      { question: "Thông tin nào nên có trong đoạn văn giới thiệu bản thân?", options: ["Tên, tuổi, sở thích", "Chỉ có màu sắc yêu thích", "Không cần thông tin gì", "Chỉ có tên trường"], correctIndex: 0, explanation: "Tên, tuổi, sở thích là những thông tin cơ bản cần giới thiệu." },
      { question: "Đoạn văn giới thiệu bản thân nên bắt đầu bằng gì?", options: ["Sở thích", "Tên của mình", "Một câu hỏi", "Ước mơ tương lai"], correctIndex: 1, explanation: "Nên bắt đầu bằng việc giới thiệu tên của mình." },
      { question: "Vì sao cần giới thiệu về sở thích trong đoạn văn?", options: ["Không cần thiết", "Giúp người đọc hiểu thêm về mình", "Làm đoạn văn dài hơn", "Không có lý do gì"], correctIndex: 1, explanation: "Giới thiệu sở thích giúp người đọc hiểu thêm về bản thân em." },
    ],
    funFact: "Bạn có biết? Kỹ năng giới thiệu bản thân là kỹ năng quan trọng em sẽ dùng suốt đời, từ khi còn nhỏ đến khi trưởng thành!",
  },
  "tieng-viet:3:viet-doan-van-ke-ve-uoc-mo": {
    objectives: ["Xác định được ước mơ của bản thân.", "Nêu được lý do vì sao có ước mơ đó.", "Viết được đoạn văn ngắn kể về ước mơ."],
    sections: [
      { heading: "1. Xác định ước mơ", body: ["Em hãy suy nghĩ về ước mơ của mình, có thể là một nghề nghiệp, một điều em muốn làm trong tương lai."] },
      { heading: "2. Nêu lý do", body: ["Em nên giải thích vì sao mình có ước mơ đó, ví dụ muốn giúp đỡ mọi người, muốn khám phá điều mới."] },
      { heading: "3. Cấu trúc đoạn văn", body: ["Đoạn văn nên có: nêu ước mơ, lý do có ước mơ, và những việc em sẽ làm để thực hiện ước mơ đó."] },
    ],
    quiz: [
      { question: "Đoạn văn kể về ước mơ nên có nội dung gì?", options: ["Chỉ nêu tên ước mơ", "Nêu ước mơ và lý do có ước mơ đó", "Không cần lý do", "Chỉ kể chuyện khác"], correctIndex: 1, explanation: "Cần nêu rõ ước mơ và lý do vì sao có ước mơ đó." },
      { question: "Ước mơ có thể là gì?", options: ["Một nghề nghiệp trong tương lai", "Không thể là gì cả", "Chỉ là đồ chơi", "Chỉ là món ăn"], correctIndex: 0, explanation: "Ước mơ thường liên quan đến nghề nghiệp hoặc điều em muốn đạt được." },
      { question: "Vì sao nên nêu lý do cho ước mơ của mình?", options: ["Không cần thiết", "Giúp đoạn văn thuyết phục, ý nghĩa hơn", "Làm đoạn văn dài dòng", "Không có tác dụng gì"], correctIndex: 1, explanation: "Nêu lý do giúp đoạn văn có chiều sâu và ý nghĩa hơn." },
    ],
    funFact: "Bạn có biết? Nhiều người thành công trên thế giới đã bắt đầu từ những ước mơ nhỏ bé khi còn là học sinh tiểu học!",
  },
  "tieng-viet:3:viet-loi-cam-on-loi-xin-loi": {
    objectives: ["Viết được lời cảm ơn phù hợp với tình huống.", "Viết được lời xin lỗi phù hợp với tình huống.", "Sử dụng ngôn từ lịch sự, chân thành."],
    sections: [
      { heading: "1. Cách viết lời cảm ơn", body: ["Lời cảm ơn cần nêu rõ lý do cảm ơn và thể hiện sự chân thành. Ví dụ: 'Em cảm ơn cô đã giúp em hiểu bài hôm nay.'"] },
      { heading: "2. Cách viết lời xin lỗi", body: ["Lời xin lỗi cần nêu rõ lỗi mình đã mắc phải và mong muốn được tha thứ. Ví dụ: 'Em xin lỗi vì đã đến muộn.'"] },
      { heading: "3. Lưu ý khi viết", body: ["Em nên dùng từ ngữ lịch sự, chân thành, tránh viết qua loa, thiếu tôn trọng."] },
    ],
    quiz: [
      { question: "Lời cảm ơn cần có nội dung gì?", options: ["Chỉ cần nói 'cảm ơn'", "Nêu rõ lý do cảm ơn", "Không cần lý do", "Chỉ cần viết dài"], correctIndex: 1, explanation: "Lời cảm ơn nên nêu rõ lý do để thể hiện sự chân thành." },
      { question: "Lời xin lỗi cần có nội dung gì?", options: ["Nêu rõ lỗi đã mắc phải", "Không cần nêu lỗi gì", "Chỉ cần nói 'xin lỗi'", "Đổ lỗi cho người khác"], correctIndex: 0, explanation: "Lời xin lỗi cần nêu rõ lỗi đã mắc để thể hiện sự chân thành." },
      { question: "Khi viết lời cảm ơn, xin lỗi, em nên dùng ngôn từ như thế nào?", options: ["Thô lỗ", "Lịch sự, chân thành", "Qua loa", "Không cần chú ý"], correctIndex: 1, explanation: "Cần dùng ngôn từ lịch sự, chân thành khi viết lời cảm ơn, xin lỗi." },
    ],
    funFact: "Bạn có biết? Biết nói lời cảm ơn, xin lỗi đúng lúc là một trong những kỹ năng giao tiếp quan trọng nhất trong cuộc sống!",
  },
  "tieng-viet:3:viet-tin-nhan-loi-nhan-ngan": {
    objectives: ["Viết được tin nhắn ngắn gọn, rõ ràng.", "Viết được lời nhắn phù hợp với tình huống.", "Đảm bảo đầy đủ thông tin cần thiết."],
    sections: [
      { heading: "1. Tin nhắn, lời nhắn là gì?", body: ["Tin nhắn, lời nhắn là những thông báo ngắn gọn gửi đến người khác khi không thể gặp trực tiếp."] },
      { heading: "2. Nội dung cần có", body: ["Một tin nhắn tốt cần có: người gửi, người nhận, nội dung cần nhắn, thời gian (nếu cần)."] },
      { heading: "3. Ví dụ minh hoạ", body: ["'Mẹ ơi, con sang nhà bạn Lan chơi, 5 giờ con về. Con - Nam.'"] },
    ],
    quiz: [
      { question: "Tin nhắn, lời nhắn cần có đặc điểm gì?", options: ["Dài dòng, chi tiết", "Ngắn gọn, rõ ràng", "Không cần rõ ràng", "Viết tuỳ ý"], correctIndex: 1, explanation: "Tin nhắn cần ngắn gọn nhưng đầy đủ thông tin cần thiết." },
      { question: "Nội dung nào nên có trong một lời nhắn?", options: ["Người gửi, người nhận, nội dung nhắn", "Chỉ cần một từ", "Không cần thông tin gì", "Chỉ cần ký tên"], correctIndex: 0, explanation: "Cần đầy đủ người gửi, người nhận và nội dung cần nhắn." },
      { question: "Khi nào em cần viết lời nhắn?", options: ["Khi gặp trực tiếp", "Khi không thể gặp trực tiếp người cần nhắn", "Không bao giờ cần viết", "Chỉ khi đi học"], correctIndex: 1, explanation: "Lời nhắn dùng khi không thể gặp trực tiếp người cần thông báo." },
    ],
    funFact: "Bạn có biết? Ngày nay, tin nhắn điện thoại đã thay thế phần lớn lời nhắn viết tay, nhưng kỹ năng viết ngắn gọn, rõ ràng vẫn rất quan trọng!",
  },
  "tieng-viet:3:dien-tu-con-thieu-vao-cho-trong": {
    objectives: ["Điền đúng từ phù hợp vào chỗ trống trong câu.", "Hiểu nghĩa của câu để chọn từ chính xác.", "Rèn kỹ năng đọc hiểu và vận dụng từ vựng."],
    sections: [
      { heading: "1. Cách làm bài điền từ", body: ["Em cần đọc kỹ cả câu để hiểu ý nghĩa, sau đó chọn từ phù hợp nhất về cả nghĩa và ngữ pháp."] },
      { heading: "2. Ví dụ minh hoạ", body: ["'Mùa xuân, hoa đào nở ___ trên khắp các nẻo đường.' — Từ điền vào có thể là 'rực rỡ'."] },
      { heading: "3. Lưu ý khi làm bài", body: ["Sau khi điền từ, em nên đọc lại cả câu để kiểm tra xem có hợp lý về nghĩa không."] },
    ],
    quiz: [
      { question: "Khi làm bài điền từ, em cần làm gì đầu tiên?", options: ["Điền ngay không cần đọc câu", "Đọc kỹ cả câu để hiểu nghĩa", "Chọn từ bất kỳ", "Bỏ qua không làm"], correctIndex: 1, explanation: "Cần đọc kỹ câu để hiểu nghĩa trước khi điền từ." },
      { question: "'Bầu trời hôm nay rất ___.' Từ nào phù hợp để điền vào chỗ trống?", options: ["Trong xanh", "Học sinh", "Con mèo", "Quyển sách"], correctIndex: 0, explanation: "'Trong xanh' phù hợp để miêu tả bầu trời." },
      { question: "Sau khi điền từ vào chỗ trống, em nên làm gì?", options: ["Không cần kiểm tra lại", "Đọc lại cả câu để kiểm tra tính hợp lý", "Xoá đi ngay", "Không cần làm gì thêm"], correctIndex: 1, explanation: "Nên đọc lại để kiểm tra câu có hợp lý về nghĩa không." },
    ],
    funFact: "Bạn có biết? Bài tập điền từ giúp em mở rộng vốn từ và hiểu sâu hơn về ngữ pháp tiếng Việt!",
  },
  "tieng-viet:3:sap-xep-cau-thanh-doan-van-hop-ly": {
    objectives: ["Sắp xếp các câu rời rạc thành đoạn văn mạch lạc.", "Nhận biết trình tự hợp lý của các câu.", "Rèn kỹ năng tư duy logic khi viết văn."],
    sections: [
      { heading: "1. Cách sắp xếp câu", body: ["Em cần đọc tất cả các câu, xác định câu nào là câu mở đầu, câu nào là câu kết, các câu còn lại sắp xếp theo trình tự hợp lý."] },
      { heading: "2. Dấu hiệu nhận biết trình tự", body: ["Chú ý các từ ngữ chỉ thời gian, thứ tự như 'đầu tiên', 'sau đó', 'cuối cùng' để sắp xếp đúng."] },
      { heading: "3. Kiểm tra lại đoạn văn", body: ["Sau khi sắp xếp, em nên đọc lại toàn bộ đoạn văn để chắc chắn các câu liên kết mạch lạc với nhau."] },
    ],
    quiz: [
      { question: "Khi sắp xếp câu thành đoạn văn, em cần chú ý điều gì?", options: ["Sắp xếp ngẫu nhiên", "Trình tự hợp lý giữa các câu", "Không cần chú ý gì", "Chỉ cần đủ số câu"], correctIndex: 1, explanation: "Cần sắp xếp các câu theo trình tự hợp lý để đoạn văn mạch lạc." },
      { question: "Từ ngữ nào giúp nhận biết trình tự các câu?", options: ["Đầu tiên, sau đó, cuối cùng", "Không có từ ngữ nào giúp ích", "Chỉ cần đếm số câu", "Chỉ cần nhìn độ dài câu"], correctIndex: 0, explanation: "Các từ chỉ thời gian, thứ tự giúp nhận biết trình tự câu." },
      { question: "Sau khi sắp xếp xong, em nên làm gì?", options: ["Không cần kiểm tra lại", "Đọc lại để kiểm tra tính mạch lạc", "Xoá bỏ đoạn văn", "Không cần làm gì thêm"], correctIndex: 1, explanation: "Đọc lại giúp kiểm tra đoạn văn đã mạch lạc, hợp lý chưa." },
    ],
    funFact: "Bạn có biết? Kỹ năng sắp xếp ý tưởng theo trình tự logic rất quan trọng, không chỉ trong viết văn mà cả trong thuyết trình, giải quyết vấn đề!",
  },
  "tieng-viet:3:dat-cau-theo-mau-ai-lam-gi": {
    objectives: ["Nhận biết cấu trúc câu theo mẫu Ai làm gì?", "Đặt được câu đúng theo mẫu.", "Vận dụng vào viết đoạn văn."],
    sections: [
      { heading: "1. Cấu trúc câu Ai làm gì?", body: ["Câu theo mẫu 'Ai làm gì?' gồm hai phần: phần 'Ai' chỉ người/vật thực hiện hành động, phần 'làm gì' chỉ hành động được thực hiện."] },
      { heading: "2. Ví dụ minh hoạ", body: ["'Em học bài.' — 'Em' là phần Ai, 'học bài' là phần làm gì."] },
      { heading: "3. Cách đặt câu", body: ["Em có thể chọn một chủ thể (người, con vật) rồi thêm hành động phù hợp để tạo thành câu hoàn chỉnh."] },
    ],
    quiz: [
      { question: "Câu 'Chú mèo bắt chuột.' thuộc mẫu câu nào?", options: ["Ai làm gì?", "Ai thế nào?", "Ai là gì?", "Không thuộc mẫu nào"], correctIndex: 0, explanation: "Câu này có 'chú mèo' (Ai) và 'bắt chuột' (làm gì)." },
      { question: "Trong câu 'Em học bài.', phần nào là phần 'làm gì'?", options: ["Em", "Học bài", "Cả câu", "Không có phần nào"], correctIndex: 1, explanation: "'Học bài' là hành động, thuộc phần 'làm gì'." },
      { question: "Câu nào đúng theo mẫu Ai làm gì?", options: ["Bạn Lan rất xinh.", "Bạn Lan là học sinh giỏi.", "Bạn Lan đang đọc sách.", "Bạn Lan rất vui."], correctIndex: 2, explanation: "'Bạn Lan đang đọc sách' có Ai (Bạn Lan) và làm gì (đang đọc sách)." },
    ],
    funFact: "Bạn có biết? Mẫu câu Ai làm gì là một trong ba mẫu câu cơ bản mà học sinh tiểu học học đầu tiên trong tiếng Việt!",
  },
  "tieng-viet:3:dat-cau-theo-mau-ai-the-nao": {
    objectives: ["Nhận biết cấu trúc câu theo mẫu Ai thế nào?", "Đặt được câu đúng theo mẫu.", "Vận dụng vào viết đoạn văn."],
    sections: [
      { heading: "1. Cấu trúc câu Ai thế nào?", body: ["Câu theo mẫu 'Ai thế nào?' gồm phần 'Ai' chỉ người/vật, phần 'thế nào' chỉ đặc điểm, tính chất."] },
      { heading: "2. Ví dụ minh hoạ", body: ["'Bông hoa rất đẹp.' — 'Bông hoa' là phần Ai, 'rất đẹp' là phần thế nào."] },
      { heading: "3. Cách đặt câu", body: ["Em có thể chọn một sự vật rồi thêm tính từ miêu tả đặc điểm để tạo thành câu hoàn chỉnh."] },
    ],
    quiz: [
      { question: "Câu 'Bầu trời trong xanh.' thuộc mẫu câu nào?", options: ["Ai làm gì?", "Ai thế nào?", "Ai là gì?", "Không thuộc mẫu nào"], correctIndex: 1, explanation: "Câu này có 'bầu trời' (Ai) và 'trong xanh' (thế nào)." },
      { question: "Trong câu 'Em rất chăm chỉ.', phần nào là phần 'thế nào'?", options: ["Em", "Rất chăm chỉ", "Cả câu", "Không có phần nào"], correctIndex: 1, explanation: "'Rất chăm chỉ' miêu tả đặc điểm, thuộc phần 'thế nào'." },
      { question: "Câu nào đúng theo mẫu Ai thế nào?", options: ["Bạn Nam đang chạy.", "Bạn Nam là học sinh.", "Bạn Nam rất cao.", "Bạn Nam đá bóng."], correctIndex: 2, explanation: "'Bạn Nam rất cao' có Ai (Bạn Nam) và thế nào (rất cao)." },
    ],
    funFact: "Bạn có biết? Câu Ai thế nào thường dùng tính từ để miêu tả, giúp câu văn trở nên sinh động, giàu hình ảnh hơn!",
  },
  "tieng-viet:3:dat-cau-theo-mau-ai-la-gi": {
    objectives: ["Nhận biết cấu trúc câu theo mẫu Ai là gì?", "Đặt được câu đúng theo mẫu.", "Vận dụng vào viết đoạn văn."],
    sections: [
      { heading: "1. Cấu trúc câu Ai là gì?", body: ["Câu theo mẫu 'Ai là gì?' gồm phần 'Ai' chỉ người/vật, phần 'là gì' giới thiệu, nhận định về đối tượng đó."] },
      { heading: "2. Ví dụ minh hoạ", body: ["'Em là học sinh lớp 3.' — 'Em' là phần Ai, 'là học sinh lớp 3' là phần là gì."] },
      { heading: "3. Cách đặt câu", body: ["Em có thể chọn một chủ thể rồi thêm 'là' cùng thông tin giới thiệu để tạo thành câu hoàn chỉnh."] },
    ],
    quiz: [
      { question: "Câu 'Bố em là bác sĩ.' thuộc mẫu câu nào?", options: ["Ai làm gì?", "Ai thế nào?", "Ai là gì?", "Không thuộc mẫu nào"], correctIndex: 2, explanation: "Câu này có 'bố em' (Ai) và 'là bác sĩ' (là gì)." },
      { question: "Trong câu 'Hà Nội là thủ đô của Việt Nam.', phần nào là phần 'là gì'?", options: ["Hà Nội", "Là thủ đô của Việt Nam", "Cả câu", "Không có phần nào"], correctIndex: 1, explanation: "'Là thủ đô của Việt Nam' giới thiệu về Hà Nội." },
      { question: "Câu nào đúng theo mẫu Ai là gì?", options: ["Con mèo đang ngủ.", "Con mèo là vật nuôi trong nhà.", "Con mèo rất đáng yêu.", "Con mèo bắt chuột."], correctIndex: 1, explanation: "'Con mèo là vật nuôi trong nhà' có Ai (con mèo) và là gì (là vật nuôi)." },
    ],
    funFact: "Bạn có biết? Ba mẫu câu Ai làm gì, Ai thế nào, Ai là gì là nền tảng ngữ pháp cơ bản của tiếng Việt em học ở bậc tiểu học!",
  },
  "tieng-viet:3:luyen-doc-dien-cam-doan-van": {
    objectives: ["Rèn kỹ năng đọc diễn cảm một đoạn văn.", "Thể hiện đúng ngữ điệu, cảm xúc khi đọc.", "Ngắt nghỉ đúng chỗ theo dấu câu."],
    sections: [
      { heading: "1. Đọc diễn cảm là gì?", body: ["Đọc diễn cảm là đọc thể hiện đúng ngữ điệu, cảm xúc phù hợp với nội dung đoạn văn."] },
      { heading: "2. Cách ngắt nghỉ đúng", body: ["Em cần ngắt hơi ở dấu phẩy, nghỉ hơi ở dấu chấm, lên giọng ở câu hỏi, nhấn giọng ở từ quan trọng."] },
      { heading: "3. Luyện tập thường xuyên", body: ["Em nên đọc to, luyện tập nhiều lần và có thể thu âm lại để tự nghe và điều chỉnh."] },
    ],
    quiz: [
      { question: "Đọc diễn cảm là gì?", options: ["Đọc thật nhanh", "Đọc thể hiện đúng ngữ điệu, cảm xúc", "Đọc thật to", "Đọc không cần chú ý gì"], correctIndex: 1, explanation: "Đọc diễn cảm cần thể hiện đúng ngữ điệu, cảm xúc phù hợp." },
      { question: "Khi gặp dấu phẩy, em nên làm gì?", options: ["Ngắt hơi ngắn", "Nghỉ hơi dài", "Không ngắt nghỉ gì", "Đọc thật nhanh qua"], correctIndex: 0, explanation: "Dấu phẩy thường yêu cầu ngắt hơi ngắn." },
      { question: "Khi đọc câu hỏi, giọng đọc nên như thế nào?", options: ["Giữ nguyên giọng", "Lên giọng ở cuối câu", "Hạ giọng thấp", "Đọc thật nhỏ"], correctIndex: 1, explanation: "Câu hỏi thường cần lên giọng ở cuối câu." },
    ],
    funFact: "Bạn có biết? Đọc diễn cảm không chỉ giúp hiểu bài tốt hơn mà còn là kỹ năng quan trọng khi thuyết trình sau này!",
  },
  "tieng-viet:3:luyen-doc-dien-cam-bai-tho": {
    objectives: ["Rèn kỹ năng đọc diễn cảm một bài thơ.", "Thể hiện đúng nhịp điệu, cảm xúc của bài thơ.", "Ngắt nhịp đúng theo cấu trúc câu thơ."],
    sections: [
      { heading: "1. Đặc điểm khi đọc thơ", body: ["Thơ có vần, nhịp điệu riêng, khi đọc cần chú ý ngắt nhịp đúng để tạo âm hưởng hay."] },
      { heading: "2. Cách ngắt nhịp", body: ["Với thơ lục bát, thường ngắt nhịp 2/2/2 hoặc 2/4; với thơ 4 chữ, 5 chữ có nhịp riêng phù hợp."] },
      { heading: "3. Thể hiện cảm xúc bài thơ", body: ["Em cần hiểu nội dung, cảm xúc bài thơ muốn truyền tải để đọc với giọng điệu phù hợp (vui tươi, nhẹ nhàng, tha thiết)."] },
    ],
    quiz: [
      { question: "Khi đọc thơ, em cần chú ý điều gì đặc biệt?", options: ["Không cần chú ý gì", "Ngắt nhịp đúng theo cấu trúc câu thơ", "Đọc thật nhanh", "Bỏ qua vần điệu"], correctIndex: 1, explanation: "Ngắt nhịp đúng giúp bài thơ được đọc hay và đúng âm hưởng." },
      { question: "Thơ lục bát thường có nhịp ngắt phổ biến nào?", options: ["1/1/1", "2/2/2 hoặc 2/4", "5/5", "Không có nhịp cố định"], correctIndex: 1, explanation: "Thơ lục bát thường ngắt nhịp 2/2/2 hoặc 2/4." },
      { question: "Để đọc diễn cảm bài thơ hay, em cần hiểu điều gì trước?", options: ["Không cần hiểu gì", "Nội dung và cảm xúc bài thơ", "Chỉ cần đọc nhanh", "Chỉ cần đọc to"], correctIndex: 1, explanation: "Hiểu nội dung, cảm xúc giúp đọc diễn cảm đúng và hay hơn." },
    ],
    funFact: "Bạn có biết? Nhiều bài thơ thiếu nhi Việt Nam được phổ nhạc thành bài hát, giúp các em dễ nhớ và yêu thích hơn!",
  },
  "tieng-viet:3:tom-tat-noi-dung-mot-doan-van": {
    objectives: ["Xác định ý chính của đoạn văn.", "Tóm tắt ngắn gọn nội dung đoạn văn.", "Rèn kỹ năng đọc hiểu, chọn lọc thông tin."],
    sections: [
      { heading: "1. Tóm tắt là gì?", body: ["Tóm tắt là trình bày lại nội dung chính của đoạn văn một cách ngắn gọn, không bỏ sót ý quan trọng."] },
      { heading: "2. Cách tóm tắt hiệu quả", body: ["Em đọc kỹ đoạn văn, xác định câu chủ đề hoặc ý chính, sau đó diễn đạt lại bằng lời của mình một cách ngắn gọn."] },
      { heading: "3. Lưu ý khi tóm tắt", body: ["Tóm tắt cần giữ đúng ý chính của đoạn văn gốc, không thêm ý kiến cá nhân hay thông tin không có trong bài."] },
    ],
    quiz: [
      { question: "Tóm tắt đoạn văn là gì?", options: ["Chép lại nguyên văn", "Trình bày ngắn gọn ý chính", "Bỏ qua không đọc", "Viết dài hơn bản gốc"], correctIndex: 1, explanation: "Tóm tắt là trình bày ngắn gọn nội dung chính của đoạn văn." },
      { question: "Khi tóm tắt, em cần chú ý điều gì?", options: ["Giữ đúng ý chính", "Thêm ý kiến cá nhân", "Bỏ hết nội dung", "Không cần đọc kỹ"], correctIndex: 0, explanation: "Cần giữ đúng ý chính của đoạn văn gốc khi tóm tắt." },
      { question: "Để tóm tắt tốt, bước đầu tiên em cần làm gì?", options: ["Viết ngay không cần đọc", "Đọc kỹ và xác định ý chính", "Chỉ đọc câu đầu tiên", "Không cần đọc gì"], correctIndex: 1, explanation: "Cần đọc kỹ đoạn văn để xác định đúng ý chính trước khi tóm tắt." },
    ],
    funFact: "Bạn có biết? Kỹ năng tóm tắt rất quan trọng, được sử dụng nhiều khi em học các môn học khác và cả khi trưởng thành đi làm!",
  },
  "tieng-viet:3:nhan-biet-doan-van-va-cau-chu-de": {
    objectives: ["Nhận biết cấu trúc của một đoạn văn.", "Xác định được câu chủ đề trong đoạn văn.", "Hiểu vai trò của câu chủ đề."],
    sections: [
      { heading: "1. Đoạn văn là gì?", body: ["Đoạn văn là một phần văn bản gồm nhiều câu liên kết với nhau, thể hiện một ý chính thống nhất."] },
      { heading: "2. Câu chủ đề là gì?", body: ["Câu chủ đề là câu nêu ý chính của cả đoạn văn, thường đứng ở đầu hoặc cuối đoạn."] },
      { heading: "3. Cách tìm câu chủ đề", body: ["Em đọc toàn bộ đoạn văn rồi tìm câu nào khái quát được nội dung chính của cả đoạn."] },
    ],
    quiz: [
      { question: "Câu chủ đề trong đoạn văn có vai trò gì?", options: ["Không có vai trò gì", "Nêu ý chính của cả đoạn văn", "Chỉ để trang trí", "Luôn là câu cuối cùng"], correctIndex: 1, explanation: "Câu chủ đề nêu ý chính, khái quát nội dung của đoạn văn." },
      { question: "Câu chủ đề thường xuất hiện ở vị trí nào trong đoạn văn?", options: ["Chỉ ở giữa đoạn", "Đầu hoặc cuối đoạn", "Không có vị trí cố định nào", "Luôn ở dòng thứ hai"], correctIndex: 1, explanation: "Câu chủ đề thường đứng ở đầu hoặc cuối đoạn văn." },
      { question: "Đoạn văn là gì?", options: ["Một từ đơn lẻ", "Nhiều câu liên kết thể hiện một ý chính", "Một chữ cái", "Không có định nghĩa cụ thể"], correctIndex: 1, explanation: "Đoạn văn gồm nhiều câu liên kết với nhau, thể hiện một ý chính." },
    ],
    funFact: "Bạn có biết? Nhận biết câu chủ đề giúp em đọc hiểu nhanh hơn, chỉ cần đọc câu đó cũng nắm được ý chính của cả đoạn!",
  },
  "tieng-viet:3:viet-doan-van-ta-buoi-le-o-truong": {
    objectives: ["Quan sát và ghi nhớ các hoạt động trong một buổi lễ ở trường.", "Miêu tả theo trình tự hợp lý.", "Viết được đoạn văn ngắn tả buổi lễ."],
    sections: [
      { heading: "1. Các buổi lễ thường gặp ở trường", body: ["Lễ khai giảng, lễ tổng kết năm học, lễ kỷ niệm ngày Nhà giáo Việt Nam 20/11 là những buổi lễ quen thuộc."] },
      { heading: "2. Nội dung cần miêu tả", body: ["Em có thể tả: không khí trước buổi lễ, các hoạt động chính (chào cờ, phát biểu, văn nghệ), cảm xúc của em."] },
      { heading: "3. Cấu trúc đoạn văn", body: ["Đoạn văn nên tả theo trình tự thời gian: trước lễ, trong lễ, và cảm xúc sau khi kết thúc buổi lễ."] },
    ],
    quiz: [
      { question: "Buổi lễ nào thường diễn ra vào đầu năm học?", options: ["Lễ khai giảng", "Lễ tổng kết", "Lễ 20/11", "Lễ Giáng sinh"], correctIndex: 0, explanation: "Lễ khai giảng thường diễn ra vào đầu năm học." },
      { question: "Khi tả buổi lễ ở trường, em nên miêu tả những gì?", options: ["Không khí, hoạt động chính, cảm xúc", "Chỉ cần tên buổi lễ", "Không cần miêu tả chi tiết", "Chỉ cần liệt kê tên người tham gia"], correctIndex: 0, explanation: "Cần miêu tả không khí, hoạt động chính và cảm xúc của em." },
      { question: "Ngày 20/11 là ngày lễ gì?", options: ["Ngày Nhà giáo Việt Nam", "Ngày Quốc khánh", "Ngày Phụ nữ Việt Nam", "Ngày Thiếu nhi"], correctIndex: 0, explanation: "Ngày 20/11 là Ngày Nhà giáo Việt Nam." },
    ],
    funFact: "Bạn có biết? Lễ khai giảng ở Việt Nam thường có nghi thức đánh trống khai trường, một truyền thống lâu đời trong giáo dục!",
  },
  "tieng-viet:3:tu-ngu-chi-dac-diem-ngoai-hinh": {
    objectives: ["Mở rộng vốn từ miêu tả ngoại hình con người.", "Sử dụng đúng từ ngữ khi miêu tả.", "Vận dụng vào bài văn tả người."],
    sections: [
      { heading: "1. Từ ngữ tả khuôn mặt, dáng người", body: ["Tròn trịa, thon gọn, cao ráo, thấp bé, gầy gò, đầy đặn là các từ miêu tả ngoại hình thường gặp."] },
      { heading: "2. Từ ngữ tả mái tóc, làn da", body: ["Đen nhánh, óng ả, trắng hồng, rám nắng là các từ miêu tả mái tóc, làn da."] },
      { heading: "3. Vận dụng vào câu văn", body: ["Em hãy thử đặt câu: 'Bà em có mái tóc bạc trắng và khuôn mặt hiền từ.'"] },
    ],
    quiz: [
      { question: "Từ nào miêu tả dáng người cao?", options: ["Thấp bé", "Cao ráo", "Gầy gò", "Tròn trịa"], correctIndex: 1, explanation: "'Cao ráo' miêu tả dáng người cao." },
      { question: "Từ nào miêu tả mái tóc?", options: ["Đen nhánh", "Chăm chỉ", "Nhanh nhẹn", "Hiền lành"], correctIndex: 0, explanation: "'Đen nhánh' miêu tả màu sắc mái tóc." },
      { question: "Câu nào miêu tả đúng đặc điểm ngoại hình?", options: ["Bạn ấy rất chăm học.", "Bạn ấy có đôi mắt to tròn.", "Bạn ấy rất tốt bụng.", "Bạn ấy học giỏi Toán."], correctIndex: 1, explanation: "Câu này miêu tả đặc điểm ngoại hình (đôi mắt)." },
    ],
    funFact: "Bạn có biết? Miêu tả ngoại hình sinh động giúp người đọc hình dung rõ nét về nhân vật trong bài văn!",
  },
  "tieng-viet:3:tu-ngu-chi-tinh-cach-con-nguoi": {
    objectives: ["Mở rộng vốn từ miêu tả tính cách con người.", "Sử dụng đúng từ ngữ khi miêu tả.", "Vận dụng vào bài văn tả người."],
    sections: [
      { heading: "1. Từ ngữ chỉ tính cách tốt", body: ["Hiền lành, chăm chỉ, thật thà, vui vẻ, hoà đồng, tốt bụng là các từ miêu tả tính cách tích cực."] },
      { heading: "2. Từ ngữ chỉ tính cách cần khắc phục", body: ["Nhút nhát, nóng nảy, lười biếng là các từ miêu tả tính cách cần được rèn luyện thêm."] },
      { heading: "3. Vận dụng vào câu văn", body: ["Em hãy thử đặt câu: 'Bạn Lan rất hiền lành và luôn giúp đỡ các bạn trong lớp.'"] },
    ],
    quiz: [
      { question: "Từ nào miêu tả tính cách tốt?", options: ["Nóng nảy", "Hiền lành", "Lười biếng", "Nhút nhát"], correctIndex: 1, explanation: "'Hiền lành' là từ miêu tả tính cách tốt." },
      { question: "Từ nào miêu tả tính cách cần rèn luyện thêm?", options: ["Chăm chỉ", "Thật thà", "Lười biếng", "Tốt bụng"], correctIndex: 2, explanation: "'Lười biếng' là tính cách cần được rèn luyện, khắc phục." },
      { question: "Câu nào miêu tả đúng về tính cách?", options: ["Bạn ấy cao 1m30.", "Bạn ấy rất tốt bụng, hay giúp đỡ bạn bè.", "Bạn ấy có mái tóc dài.", "Bạn ấy mặc áo màu xanh."], correctIndex: 1, explanation: "Câu này miêu tả tính cách (tốt bụng, hay giúp đỡ)." },
    ],
    funFact: "Bạn có biết? Miêu tả tính cách nhân vật qua hành động cụ thể sẽ thuyết phục hơn là chỉ dùng tính từ đơn thuần!",
  },
  "tieng-viet:3:on-tap-giua-hoc-ky-1": {
    objectives: ["Hệ thống lại kiến thức Tiếng Việt đã học ở giữa học kỳ 1.", "Ôn luyện các dạng bài tập trọng tâm.", "Tự tin chuẩn bị cho bài kiểm tra."],
    sections: [
      { heading: "1. Nội dung trọng tâm", body: ["Giữa học kỳ 1, em đã học về từ loại (danh từ, động từ, tính từ), các kiểu câu, và cách tả đồ vật, con vật."] },
      { heading: "2. Cách ôn tập hiệu quả", body: ["Em nên xem lại các bài tập đã làm, chú ý các lỗi sai thường gặp để khắc phục."] },
      { heading: "3. Chuẩn bị tâm lý", body: ["Ôn tập đều đặn, nghỉ ngơi hợp lý sẽ giúp em tự tin hơn khi làm bài kiểm tra."] },
    ],
    quiz: [
      { question: "Từ nào là danh từ?", options: ["Chạy", "Học sinh", "Đẹp", "Nhanh"], correctIndex: 1, explanation: "'Học sinh' chỉ người, là danh từ." },
      { question: "Câu nào là câu hỏi?", options: ["Em đi học.", "Bạn tên là gì?", "Ôi, đẹp quá!", "Em hãy ngồi xuống."], correctIndex: 1, explanation: "Câu hỏi kết thúc bằng dấu chấm hỏi." },
      { question: "Khi tả đồ vật, em cần miêu tả những gì?", options: ["Chỉ tên đồ vật", "Hình dáng, màu sắc, công dụng", "Không cần miêu tả gì", "Chỉ giá tiền"], correctIndex: 1, explanation: "Cần miêu tả đầy đủ hình dáng, màu sắc, công dụng của đồ vật." },
    ],
    funFact: "Bạn có biết? Việc ôn tập giữa kỳ giúp em củng cố kiến thức trước khi tiếp tục học các nội dung khó hơn ở nửa sau học kỳ!",
  },
  "tieng-viet:3:on-tap-cuoi-hoc-ky-1": {
    objectives: ["Hệ thống lại toàn bộ kiến thức Tiếng Việt học kỳ 1.", "Ôn luyện tổng hợp các dạng bài đã học.", "Tự tin chuẩn bị cho bài kiểm tra cuối kỳ."],
    sections: [
      { heading: "1. Nội dung trọng tâm học kỳ 1", body: ["Học kỳ 1 gồm: từ loại, các kiểu câu, biện pháp so sánh - nhân hoá, và các dạng tập làm văn tả đồ vật, con vật, viết thư."] },
      { heading: "2. Ôn luyện tổng hợp", body: ["Em nên luyện các đề tổng hợp có đủ phần đọc hiểu, luyện từ và câu, tập làm văn."] },
      { heading: "3. Quản lý thời gian làm bài", body: ["Khi làm bài kiểm tra, em nên phân bổ thời gian hợp lý cho từng phần, không nên dành quá nhiều thời gian cho một câu."] },
    ],
    quiz: [
      { question: "Biện pháp nào gán đặc điểm của người cho sự vật?", options: ["So sánh", "Nhân hoá", "Không có biện pháp nào", "Điệp từ"], correctIndex: 1, explanation: "Nhân hoá là gán đặc điểm, hành động của người cho sự vật." },
      { question: "Một bức thư thường có mấy phần chính?", options: ["1", "2", "3", "4"], correctIndex: 2, explanation: "Thư thường có 3 phần: đầu thư, nội dung, cuối thư." },
      { question: "Từ nào là tính từ?", options: ["Chạy", "Xinh đẹp", "Học sinh", "Trường học"], correctIndex: 1, explanation: "'Xinh đẹp' chỉ đặc điểm, là tính từ." },
    ],
    funFact: "Bạn có biết? Ôn tập tổng hợp cuối kỳ giúp não bộ kết nối các kiến thức đã học thành một hệ thống chặt chẽ hơn!",
  },
  "tieng-viet:3:on-tap-giua-hoc-ky-2": {
    objectives: ["Hệ thống lại kiến thức Tiếng Việt đã học ở giữa học kỳ 2.", "Ôn luyện các dạng bài tập trọng tâm.", "Tự tin chuẩn bị cho bài kiểm tra."],
    sections: [
      { heading: "1. Nội dung trọng tâm", body: ["Giữa học kỳ 2, em đã học thêm về câu khiến, đọc hiểu văn bản thông tin, và cách tả cây cối, con vật chi tiết hơn."] },
      { heading: "2. Cách ôn tập hiệu quả", body: ["Em nên đọc lại các bài văn mẫu, chú ý cách dùng từ ngữ hay để học hỏi cho bài viết của mình."] },
      { heading: "3. Luyện đề tổng hợp", body: ["Làm thử một vài đề ôn tập tổng hợp sẽ giúp em quen với cấu trúc đề kiểm tra."] },
    ],
    quiz: [
      { question: "Câu nào là câu khiến?", options: ["Em đi học.", "Em hãy giữ trật tự.", "Em đi học chưa?", "Ôi, đẹp quá!"], correctIndex: 1, explanation: "Câu khiến nêu yêu cầu, có từ 'hãy'." },
      { question: "Văn bản thông tin khác truyện kể ở điểm nào?", options: ["Cung cấp kiến thức thực tế", "Luôn có nhân vật tưởng tượng", "Không có tiêu đề", "Không có sự khác biệt"], correctIndex: 0, explanation: "Văn bản thông tin cung cấp kiến thức, sự việc thực tế." },
      { question: "Khi tả cây cối, em nên tả theo trình tự nào?", options: ["Ngẫu nhiên", "Từ gốc đến ngọn hoặc theo mùa", "Không cần trình tự", "Chỉ tả một chi tiết"], correctIndex: 1, explanation: "Tả theo trình tự giúp bài văn mạch lạc, dễ hiểu." },
    ],
    funFact: "Bạn có biết? Đọc nhiều bài văn mẫu hay là cách hiệu quả giúp em học được cách dùng từ ngữ phong phú, sinh động!",
  },
  "tieng-viet:3:thi-ke-chuyen-chuan-bi-va-trinh-bay": {
    objectives: ["Chuẩn bị nội dung để kể chuyện trước lớp.", "Luyện tập trình bày tự tin, rõ ràng.", "Rèn kỹ năng giao tiếp trước đám đông."],
    sections: [
      { heading: "1. Chuẩn bị nội dung", body: ["Em cần chọn một câu chuyện yêu thích, nắm chắc nội dung, nhân vật, diễn biến trước khi kể."] },
      { heading: "2. Luyện tập trình bày", body: ["Em nên tập kể nhiều lần, có thể tập trước gương hoặc kể cho người thân nghe để quen dần."] },
      { heading: "3. Tự tin khi trình bày", body: ["Khi kể trước lớp, em nên nói to, rõ ràng, nhìn về phía các bạn và giữ bình tĩnh."] },
    ],
    quiz: [
      { question: "Trước khi thi kể chuyện, em cần chuẩn bị gì?", options: ["Không cần chuẩn bị gì", "Nắm chắc nội dung câu chuyện", "Chỉ cần nhớ tên truyện", "Không cần luyện tập"], correctIndex: 1, explanation: "Cần nắm chắc nội dung để kể chuyện tự tin, mạch lạc." },
      { question: "Để luyện tập trước khi kể chuyện, em có thể làm gì?", options: ["Không cần luyện tập", "Tập kể trước gương hoặc cho người thân nghe", "Chỉ đọc một lần", "Không cần tập nói to"], correctIndex: 1, explanation: "Luyện tập trước giúp em tự tin hơn khi kể chuyện thật." },
      { question: "Khi kể chuyện trước lớp, em nên có thái độ như thế nào?", options: ["Rụt rè, nói nhỏ", "Tự tin, nói rõ ràng", "Không cần nhìn ai", "Nói thật nhanh"], correctIndex: 1, explanation: "Tự tin và nói rõ ràng giúp bài kể chuyện thuyết phục hơn." },
    ],
    funFact: "Bạn có biết? Kỹ năng kể chuyện trước đám đông là nền tảng quan trọng cho kỹ năng thuyết trình sau này!",
  },
  "tieng-viet:3:viet-doan-van-ta-mot-buoi-hoat-dong-ngoai-khoa": {
    objectives: ["Quan sát và ghi nhớ hoạt động ngoại khoá đáng nhớ.", "Miêu tả theo trình tự hợp lý.", "Viết được đoạn văn ngắn tả buổi hoạt động."],
    sections: [
      { heading: "1. Các hoạt động ngoại khoá phổ biến", body: ["Cắm trại, dã ngoại, thi văn nghệ, hoạt động thiện nguyện là những hoạt động ngoại khoá thường gặp."] },
      { heading: "2. Nội dung cần miêu tả", body: ["Em có thể tả: thời gian, địa điểm, các hoạt động diễn ra, cảm xúc của em và các bạn."] },
      { heading: "3. Cấu trúc đoạn văn", body: ["Đoạn văn nên có mở đầu giới thiệu hoạt động, phần tả chi tiết, và cảm nghĩ của em."] },
    ],
    quiz: [
      { question: "Hoạt động nào là hoạt động ngoại khoá?", options: ["Làm bài kiểm tra", "Cắm trại, dã ngoại", "Ngủ trưa", "Chép bài"], correctIndex: 1, explanation: "Cắm trại, dã ngoại là các hoạt động ngoại khoá phổ biến." },
      { question: "Khi tả buổi hoạt động ngoại khoá, em nên miêu tả gì?", options: ["Không cần miêu tả gì", "Thời gian, hoạt động, cảm xúc", "Chỉ cần tên hoạt động", "Chỉ cần liệt kê người tham gia"], correctIndex: 1, explanation: "Cần miêu tả đầy đủ thời gian, hoạt động và cảm xúc." },
      { question: "Đoạn văn tả hoạt động ngoại khoá nên kết thúc bằng gì?", options: ["Một phép tính", "Cảm nghĩ của em", "Không cần kết thúc", "Chỉ cần liệt kê"], correctIndex: 1, explanation: "Nên kết thúc bằng cảm nghĩ để đoạn văn trọn vẹn." },
    ],
    funFact: "Bạn có biết? Hoạt động ngoại khoá giúp học sinh phát triển toàn diện, không chỉ về kiến thức mà cả kỹ năng sống!",
  },
  "tieng-viet:3:phan-biet-cau-don-va-cau-ghep-buoc-dau": {
    objectives: ["Làm quen phân biệt câu đơn và câu ghép.", "Nhận biết đặc điểm cơ bản của mỗi loại câu.", "Vận dụng vào việc đọc hiểu, đặt câu."],
    sections: [
      { heading: "1. Câu đơn là gì?", body: ["Câu đơn là câu chỉ có một cụm chủ - vị (một ý chính). Ví dụ: 'Em đi học.'"] },
      { heading: "2. Câu ghép là gì?", body: ["Câu ghép là câu có từ hai cụm chủ - vị trở lên, thường nối với nhau bằng từ nối. Ví dụ: 'Trời mưa nên em ở nhà.'"] },
      { heading: "3. Cách phân biệt bước đầu", body: ["Em có thể đếm xem câu có mấy 'ý' hoàn chỉnh — nếu chỉ có một ý là câu đơn, có từ hai ý trở lên nối với nhau là câu ghép."] },
    ],
    quiz: [
      { question: "Câu nào là câu đơn?", options: ["Em đi học.", "Trời mưa nên em ở nhà.", "Em học bài và anh xem tivi.", "Vì trời lạnh nên em mặc áo ấm."], correctIndex: 0, explanation: "'Em đi học' chỉ có một ý chính, là câu đơn." },
      { question: "Câu nào là câu ghép?", options: ["Em đi học.", "Bông hoa đẹp.", "Trời mưa nên em ở nhà.", "Em rất vui."], correctIndex: 2, explanation: "'Trời mưa nên em ở nhà' có hai ý nối với nhau, là câu ghép." },
      { question: "Câu ghép thường có đặc điểm gì?", options: ["Chỉ có một ý", "Có từ hai ý trở lên nối với nhau", "Không có động từ", "Luôn là câu hỏi"], correctIndex: 1, explanation: "Câu ghép có từ hai cụm chủ - vị (ý) trở lên." },
    ],
    funFact: "Bạn có biết? Câu ghép giúp diễn đạt được nhiều ý phức tạp hơn trong một câu, thường dùng nhiều hơn khi em lên các lớp trên!",
  },
  "tieng-viet:3:tu-ngu-ve-bao-ve-moi-truong": {
    objectives: ["Mở rộng vốn từ theo chủ điểm bảo vệ môi trường.", "Hiểu nghĩa và biết cách sử dụng từ ngữ mới.", "Vận dụng vào việc đặt câu."],
    sections: [
      { heading: "1. Từ ngữ về môi trường", body: ["Môi trường, ô nhiễm, rác thải, tái chế, cây xanh, không khí trong lành."] },
      { heading: "2. Từ ngữ về hành động bảo vệ", body: ["Trồng cây, dọn rác, tiết kiệm nước, tiết kiệm điện, tái sử dụng."] },
      { heading: "3. Vận dụng vào câu văn", body: ["Em hãy thử đặt câu: 'Chúng em cùng nhau trồng cây xanh để bảo vệ môi trường.'"] },
    ],
    quiz: [
      { question: "Từ nào thuộc chủ điểm bảo vệ môi trường?", options: ["Tái chế", "Con mèo", "Quyển sách", "Cái bàn"], correctIndex: 0, explanation: "'Tái chế' là từ liên quan đến bảo vệ môi trường." },
      { question: "Hành động nào giúp bảo vệ môi trường?", options: ["Xả rác bừa bãi", "Trồng cây xanh", "Lãng phí nước", "Chặt phá rừng"], correctIndex: 1, explanation: "Trồng cây xanh là hành động bảo vệ môi trường." },
      { question: "Từ 'ô nhiễm' có nghĩa là gì?", options: ["Sạch sẽ, trong lành", "Bị bẩn, có hại cho môi trường", "Tươi mát", "Không có nghĩa gì"], correctIndex: 1, explanation: "'Ô nhiễm' nghĩa là bị bẩn, có hại cho môi trường." },
    ],
    funFact: "Bạn có biết? Ngày Môi trường Thế giới được tổ chức vào ngày 5/6 hàng năm để nâng cao ý thức bảo vệ môi trường!",
  },
  "tieng-viet:3:tu-ngu-ve-an-toan-giao-thong": {
    objectives: ["Mở rộng vốn từ theo chủ điểm an toàn giao thông.", "Hiểu nghĩa và biết cách sử dụng từ ngữ mới.", "Vận dụng vào việc đặt câu."],
    sections: [
      { heading: "1. Từ ngữ về phương tiện giao thông", body: ["Xe đạp, xe máy, ô tô, xe buýt, tàu hoả, máy bay."] },
      { heading: "2. Từ ngữ về an toàn giao thông", body: ["Mũ bảo hiểm, đèn tín hiệu, vạch kẻ đường, biển báo giao thông, đi đúng làn đường."] },
      { heading: "3. Vận dụng vào câu văn", body: ["Em hãy thử đặt câu: 'Khi đi xe máy, mọi người cần đội mũ bảo hiểm để đảm bảo an toàn.'"] },
    ],
    quiz: [
      { question: "Từ nào thuộc chủ điểm an toàn giao thông?", options: ["Mũ bảo hiểm", "Quyển sách", "Con mèo", "Cái bàn"], correctIndex: 0, explanation: "'Mũ bảo hiểm' liên quan đến an toàn giao thông." },
      { question: "Hành động nào thể hiện an toàn giao thông?", options: ["Vượt đèn đỏ", "Đội mũ bảo hiểm khi đi xe máy", "Đi sai làn đường", "Chạy qua đường bất cẩn"], correctIndex: 1, explanation: "Đội mũ bảo hiểm là hành động thể hiện an toàn giao thông." },
      { question: "Đèn tín hiệu giao thông màu đỏ có ý nghĩa gì?", options: ["Được đi", "Dừng lại", "Đi chậm", "Không có ý nghĩa gì"], correctIndex: 1, explanation: "Đèn đỏ báo hiệu phải dừng lại." },
    ],
    funFact: "Bạn có biết? Đội mũ bảo hiểm đúng cách có thể giảm nguy cơ chấn thương đầu nghiêm trọng tới hơn 70%!",
  },
  "tieng-viet:3:doc-hieu-van-ban-huong-dan": {
    objectives: ["Đọc hiểu một văn bản hướng dẫn đơn giản.", "Tìm được các bước thực hiện trong văn bản.", "Vận dụng thông tin đọc được vào thực tế."],
    sections: [
      { heading: "1. Văn bản hướng dẫn là gì?", body: ["Văn bản hướng dẫn cung cấp các bước thực hiện một việc gì đó, ví dụ hướng dẫn cách chơi trò chơi, cách làm đồ thủ công."] },
      { heading: "2. Cách đọc hiểu văn bản hướng dẫn", body: ["Em cần đọc kỹ từng bước theo đúng thứ tự, chú ý các từ chỉ thứ tự như 'bước 1', 'bước 2', 'sau đó'."] },
      { heading: "3. Vận dụng thực tế", body: ["Sau khi đọc, em có thể làm theo đúng các bước hướng dẫn để thực hiện công việc đó."] },
    ],
    quiz: [
      { question: "Văn bản hướng dẫn thường có đặc điểm gì?", options: ["Không có thứ tự", "Trình bày các bước theo thứ tự", "Chỉ có một câu", "Không có nội dung cụ thể"], correctIndex: 1, explanation: "Văn bản hướng dẫn trình bày các bước theo thứ tự rõ ràng." },
      { question: "Khi đọc văn bản hướng dẫn, em cần chú ý điều gì?", options: ["Không cần chú ý gì", "Thứ tự các bước thực hiện", "Chỉ đọc bước cuối", "Bỏ qua các từ chỉ thứ tự"], correctIndex: 1, explanation: "Cần chú ý thứ tự các bước để thực hiện đúng." },
      { question: "Ví dụ nào là một văn bản hướng dẫn?", options: ["Truyện cổ tích", "Hướng dẫn cách gấp giấy origami", "Bài thơ về mẹ", "Câu chuyện tưởng tượng"], correctIndex: 1, explanation: "Hướng dẫn gấp giấy trình bày các bước thực hiện cụ thể." },
    ],
    funFact: "Bạn có biết? Kỹ năng đọc hiểu văn bản hướng dẫn rất hữu ích, em sẽ dùng khi đọc hướng dẫn sử dụng đồ chơi, thiết bị điện tử!",
  },
  "tieng-viet:3:viet-doan-van-ta-do-choi-yeu-thich": {
    objectives: ["Quan sát và miêu tả một món đồ chơi yêu thích.", "Sử dụng từ ngữ gợi tả sinh động.", "Viết được đoạn văn ngắn tả đồ chơi."],
    sections: [
      { heading: "1. Quan sát đồ chơi", body: ["Em cần quan sát: hình dáng, màu sắc, chất liệu, cách chơi của món đồ chơi yêu thích."] },
      { heading: "2. Sử dụng từ ngữ gợi tả", body: ["Các từ như 'mềm mại', 'sặc sỡ', 'chắc chắn' giúp miêu tả đồ chơi sinh động hơn."] },
      { heading: "3. Thể hiện tình cảm", body: ["Em nên chia sẻ vì sao mình yêu thích món đồ chơi đó, có kỷ niệm gì đặc biệt không."] },
    ],
    quiz: [
      { question: "Khi tả đồ chơi, em cần quan sát những gì?", options: ["Chỉ tên đồ chơi", "Hình dáng, màu sắc, cách chơi", "Không cần quan sát", "Chỉ giá tiền"], correctIndex: 1, explanation: "Cần quan sát đầy đủ hình dáng, màu sắc và cách chơi." },
      { question: "Từ nào phù hợp để tả một con gấu bông?", options: ["Sắc nhọn", "Mềm mại", "Cứng ngắc", "Nóng bỏng"], correctIndex: 1, explanation: "'Mềm mại' phù hợp để tả gấu bông." },
      { question: "Đoạn văn tả đồ chơi nên có thêm nội dung gì?", options: ["Công thức toán học", "Tình cảm của em với đồ chơi", "Không cần thêm gì", "Chỉ cần liệt kê tên"], correctIndex: 1, explanation: "Nên thể hiện tình cảm để đoạn văn thêm sinh động." },
    ],
    funFact: "Bạn có biết? Đồ chơi gỗ truyền thống của Việt Nam như tò he, đèn ông sao đã có từ hàng trăm năm trước!",
  },
  "tieng-viet:3:viet-doan-van-ke-ve-ngay-tet": {
    objectives: ["Nhớ lại những hoạt động, kỷ niệm trong ngày Tết.", "Kể lại theo trình tự hợp lý.", "Viết được đoạn văn ngắn kể về ngày Tết."],
    sections: [
      { heading: "1. Các hoạt động trong ngày Tết", body: ["Dọn dẹp nhà cửa, gói bánh chưng, đi chúc Tết, nhận lì xì, đi thăm ông bà, họ hàng."] },
      { heading: "2. Không khí ngày Tết", body: ["Không khí Tết thường rộn ràng, vui tươi với hoa đào, hoa mai, câu đối đỏ."] },
      { heading: "3. Cấu trúc đoạn văn", body: ["Đoạn văn nên kể theo trình tự: chuẩn bị Tết, các hoạt động trong ngày Tết, và cảm xúc của em."] },
    ],
    quiz: [
      { question: "Hoạt động nào thường diễn ra trong ngày Tết?", options: ["Đi chúc Tết, nhận lì xì", "Đi học bình thường", "Không có hoạt động gì đặc biệt", "Làm bài kiểm tra"], correctIndex: 0, explanation: "Đi chúc Tết, nhận lì xì là hoạt động quen thuộc trong ngày Tết." },
      { question: "Loài hoa nào thường xuất hiện ở miền Bắc vào dịp Tết?", options: ["Hoa mai", "Hoa đào", "Hoa hồng", "Hoa sen"], correctIndex: 1, explanation: "Hoa đào thường xuất hiện ở miền Bắc vào dịp Tết." },
      { question: "Món ăn nào đặc trưng của ngày Tết miền Bắc?", options: ["Bánh chưng", "Bánh mì", "Phở", "Bún chả"], correctIndex: 0, explanation: "Bánh chưng là món ăn đặc trưng ngày Tết ở miền Bắc." },
    ],
    funFact: "Bạn có biết? Tết Nguyên Đán là dịp lễ quan trọng nhất trong năm của người Việt Nam, đánh dấu sự khởi đầu của một năm mới!",
  },
  "tieng-viet:3:viet-doan-van-ke-ve-mua-he": {
    objectives: ["Nhớ lại những hoạt động, kỷ niệm trong mùa hè.", "Kể lại theo trình tự hợp lý.", "Viết được đoạn văn ngắn kể về mùa hè."],
    sections: [
      { heading: "1. Các hoạt động mùa hè", body: ["Đi biển, về quê thăm ông bà, tham gia trại hè, đọc sách, học bơi là những hoạt động mùa hè phổ biến."] },
      { heading: "2. Đặc điểm thời tiết mùa hè", body: ["Mùa hè thường nắng nóng, có nhiều hoa phượng nở đỏ rực, tiếng ve kêu râm ran."] },
      { heading: "3. Cấu trúc đoạn văn", body: ["Đoạn văn nên kể về một hoạt động đáng nhớ trong mùa hè và cảm xúc của em khi trải qua."] },
    ],
    quiz: [
      { question: "Loài hoa nào thường nở rộ vào mùa hè, gắn với tuổi học trò?", options: ["Hoa đào", "Hoa phượng", "Hoa mai", "Hoa cúc"], correctIndex: 1, explanation: "Hoa phượng thường nở đỏ rực vào mùa hè." },
      { question: "Âm thanh nào đặc trưng của mùa hè?", options: ["Tiếng ve kêu", "Tiếng gió lạnh", "Tiếng lá rụng", "Tiếng mưa phùn"], correctIndex: 0, explanation: "Tiếng ve kêu là âm thanh đặc trưng của mùa hè." },
      { question: "Hoạt động nào thường diễn ra vào mùa hè?", options: ["Đi biển, học bơi", "Mặc áo ấm", "Đón Tết", "Khai giảng năm học"], correctIndex: 0, explanation: "Đi biển, học bơi là hoạt động phổ biến vào mùa hè." },
    ],
    funFact: "Bạn có biết? Mùa hè ở Việt Nam thường kéo dài từ tháng 5 đến tháng 8, cũng là thời gian học sinh được nghỉ hè!",
  },
  "tieng-viet:3:tro-choi-o-chu-tu-vung-tieng-viet": {
    objectives: ["Ôn luyện từ vựng đã học qua trò chơi ô chữ.", "Rèn khả năng liên tưởng, suy luận từ ngữ.", "Tạo hứng thú học Tiếng Việt."],
    sections: [
      { heading: "1. Ô chữ từ vựng là gì?", body: ["Ô chữ từ vựng là trò chơi điền các từ vào ô trống dựa vào gợi ý cho trước, các từ giao nhau tại một số chữ cái."] },
      { heading: "2. Cách chơi", body: ["Em đọc gợi ý, suy nghĩ từ phù hợp rồi điền vào ô chữ theo đúng số lượng chữ cái quy định."] },
      { heading: "3. Lợi ích", body: ["Trò chơi giúp em ôn luyện từ vựng, rèn khả năng suy luận và ghi nhớ từ ngữ một cách thú vị."] },
    ],
    quiz: [
      { question: "Ô chữ từ vựng giúp ích điều gì cho việc học?", options: ["Không có ích gì", "Ôn luyện từ vựng một cách thú vị", "Làm bài khó hơn", "Không liên quan đến Tiếng Việt"], correctIndex: 1, explanation: "Ô chữ giúp ôn luyện từ vựng một cách vui nhộn, thú vị." },
      { question: "Khi chơi ô chữ, em cần dựa vào đâu để điền từ?", options: ["Đoán ngẫu nhiên", "Gợi ý cho trước", "Không cần gợi ý", "Chỉ đếm số ô trống"], correctIndex: 1, explanation: "Cần dựa vào gợi ý để tìm từ phù hợp điền vào ô chữ." },
      { question: "Từ điền vào ô chữ cần đảm bảo điều gì?", options: ["Đúng số lượng chữ cái quy định", "Không cần đúng số lượng", "Chỉ cần đúng nghĩa", "Không cần liên quan đến gợi ý"], correctIndex: 0, explanation: "Từ điền cần đúng số lượng chữ cái theo ô chữ đã cho." },
    ],
    funFact: "Bạn có biết? Trò chơi ô chữ (crossword) được phát minh từ đầu thế kỷ 20 và đến nay vẫn rất được yêu thích trên toàn thế giới!",
  },
  "tieng-viet:3:tro-choi-noi-cau-dung-nghia": {
    objectives: ["Ôn luyện kỹ năng đặt câu qua trò chơi nối câu.", "Nhận biết câu có nghĩa đúng, hợp lý.", "Tạo hứng thú học Tiếng Việt."],
    sections: [
      { heading: "1. Trò chơi nối câu là gì?", body: ["Trò chơi yêu cầu người chơi nối các vế câu hoặc các từ với nhau sao cho tạo thành câu có nghĩa, hợp lý."] },
      { heading: "2. Cách chơi", body: ["Em đọc các vế câu hoặc từ được cho sẵn, suy nghĩ và nối chúng lại với nhau sao cho câu có nghĩa đúng."] },
      { heading: "3. Lợi ích", body: ["Trò chơi giúp em rèn kỹ năng đặt câu, hiểu cấu trúc ngữ pháp một cách nhẹ nhàng, thú vị."] },
    ],
    quiz: [
      { question: "Trò chơi nối câu giúp rèn luyện kỹ năng gì?", options: ["Kỹ năng vẽ tranh", "Kỹ năng đặt câu có nghĩa", "Kỹ năng tính toán", "Kỹ năng hát"], correctIndex: 1, explanation: "Trò chơi giúp rèn kỹ năng đặt câu có nghĩa, hợp lý." },
      { question: "Khi nối câu, em cần đảm bảo điều gì?", options: ["Câu có nghĩa hợp lý", "Không cần có nghĩa", "Câu càng dài càng tốt", "Không cần đúng ngữ pháp"], correctIndex: 0, explanation: "Câu nối cần có nghĩa hợp lý và đúng ngữ pháp." },
      { question: "Câu nào có nghĩa hợp lý?", options: ["Em đi học vì trời đẹp.", "Em ăn cơm vì đói bụng.", "Em ngủ vì học giỏi.", "Em vui vì trời mưa to."], correctIndex: 1, explanation: "'Em ăn cơm vì đói bụng' là câu có nghĩa hợp lý, logic." },
    ],
    funFact: "Bạn có biết? Chơi các trò chơi ngôn ngữ thường xuyên giúp trẻ em phát triển tư duy ngôn ngữ nhanh hơn!",
  },
  "tieng-viet:3:luyen-viet-chu-dep-dung-chinh-ta": {
    objectives: ["Rèn luyện viết chữ đẹp, đúng mẫu.", "Viết đúng chính tả các từ đã học.", "Hình thành thói quen viết cẩn thận."],
    sections: [
      { heading: "1. Cách viết chữ đẹp", body: ["Em cần ngồi đúng tư thế, cầm bút đúng cách, viết đúng độ cao, độ rộng của từng con chữ."] },
      { heading: "2. Luyện viết đúng chính tả", body: ["Em nên đọc kỹ và ghi nhớ cách viết đúng của các từ hay nhầm lẫn, luyện viết thường xuyên."] },
      { heading: "3. Rèn thói quen viết cẩn thận", body: ["Viết chậm rãi, cẩn thận và kiểm tra lại bài viết sẽ giúp em có chữ viết đẹp và ít mắc lỗi chính tả."] },
    ],
    quiz: [
      { question: "Để viết chữ đẹp, em cần chú ý điều gì?", options: ["Ngồi đúng tư thế, cầm bút đúng cách", "Viết thật nhanh", "Không cần chú ý gì", "Viết tuỳ ý"], correctIndex: 0, explanation: "Tư thế ngồi và cách cầm bút đúng giúp viết chữ đẹp hơn." },
      { question: "Để viết đúng chính tả, em nên làm gì?", options: ["Không cần luyện tập", "Ghi nhớ cách viết đúng và luyện tập thường xuyên", "Viết theo cảm tính", "Không cần đọc sách"], correctIndex: 1, explanation: "Ghi nhớ và luyện tập thường xuyên giúp viết đúng chính tả." },
      { question: "Viết chậm rãi, cẩn thận mang lại lợi ích gì?", options: ["Không có lợi ích gì", "Chữ đẹp hơn, ít lỗi chính tả hơn", "Làm bài chậm hơn", "Không có tác dụng"], correctIndex: 1, explanation: "Viết cẩn thận giúp chữ đẹp hơn và giảm lỗi chính tả." },
    ],
    funFact: "Bạn có biết? Ở nhiều trường học Việt Nam, viết chữ đẹp từng được coi là một cuộc thi quan trọng gọi là 'thi vở sạch chữ đẹp'!",
  },
  "tieng-viet:3:phan-biet-cac-dau-cau-da-hoc": {
    objectives: ["Ôn tập phân biệt các dấu câu đã học.", "Hiểu công dụng của từng loại dấu câu.", "Vận dụng đúng dấu câu khi viết."],
    sections: [
      { heading: "1. Ôn tập các dấu câu", body: ["Em đã học: dấu chấm, dấu chấm hỏi, dấu chấm than, dấu phẩy, dấu hai chấm, dấu ngoặc kép, dấu gạch ngang."] },
      { heading: "2. Công dụng của từng dấu", body: ["Mỗi dấu câu có công dụng riêng: dấu chấm kết thúc câu kể, dấu chấm hỏi kết thúc câu hỏi, dấu phẩy ngăn cách các thành phần trong câu."] },
      { heading: "3. Vận dụng khi viết", body: ["Sử dụng đúng dấu câu giúp bài viết của em rõ ràng, mạch lạc và dễ hiểu hơn."] },
    ],
    quiz: [
      { question: "Dấu nào dùng để kết thúc câu kể?", options: ["Dấu chấm hỏi", "Dấu chấm", "Dấu chấm than", "Dấu phẩy"], correctIndex: 1, explanation: "Dấu chấm dùng để kết thúc câu kể." },
      { question: "Dấu nào dùng để ngăn cách các thành phần trong câu?", options: ["Dấu chấm", "Dấu phẩy", "Dấu chấm than", "Dấu hai chấm"], correctIndex: 1, explanation: "Dấu phẩy dùng để ngăn cách các thành phần trong câu." },
      { question: "Dấu nào dùng để kết thúc câu bộc lộ cảm xúc?", options: ["Dấu chấm", "Dấu phẩy", "Dấu chấm than", "Dấu hai chấm"], correctIndex: 2, explanation: "Dấu chấm than dùng để kết thúc câu cảm, bộc lộ cảm xúc." },
    ],
    funFact: "Bạn có biết? Nếu viết văn không có dấu câu, người đọc sẽ rất khó hiểu và dễ hiểu sai ý nghĩa của câu!",
  },
  "tieng-viet:3:viet-doan-van-ta-nguoi-ban-than": {
    objectives: ["Quan sát và miêu tả đặc điểm người bạn thân.", "Sử dụng từ ngữ miêu tả ngoại hình, tính cách phù hợp.", "Viết được đoạn văn ngắn tả bạn thân."],
    sections: [
      { heading: "1. Quan sát bạn thân", body: ["Em cần quan sát: ngoại hình (dáng người, khuôn mặt), tính cách, sở thích của người bạn thân."] },
      { heading: "2. Sử dụng từ ngữ miêu tả", body: ["Kết hợp từ ngữ tả ngoại hình và tính cách để bài văn đầy đủ, sinh động hơn."] },
      { heading: "3. Thể hiện tình cảm", body: ["Em nên kể thêm một kỷ niệm đáng nhớ với bạn để thể hiện tình cảm gắn bó."] },
    ],
    quiz: [
      { question: "Khi tả người bạn thân, em cần miêu tả những gì?", options: ["Chỉ tên bạn", "Ngoại hình và tính cách", "Không cần miêu tả gì", "Chỉ địa chỉ nhà bạn"], correctIndex: 1, explanation: "Cần miêu tả cả ngoại hình và tính cách để bài văn đầy đủ." },
      { question: "Vì sao nên kể một kỷ niệm khi tả bạn thân?", options: ["Không cần thiết", "Thể hiện tình cảm gắn bó chân thực hơn", "Làm bài dài hơn", "Không có lý do gì"], correctIndex: 1, explanation: "Kỷ niệm giúp thể hiện tình cảm chân thực, sinh động hơn." },
      { question: "Câu nào miêu tả tính cách của bạn thân?", options: ["Bạn ấy cao 1m35.", "Bạn ấy rất vui vẻ, hay giúp đỡ mọi người.", "Bạn ấy mặc áo xanh.", "Bạn ấy học lớp 3A."], correctIndex: 1, explanation: "Câu này miêu tả tính cách (vui vẻ, hay giúp đỡ)." },
    ],
    funFact: "Bạn có biết? Tình bạn thời thơ ấu thường để lại những kỷ niệm đẹp và sâu sắc nhất trong cuộc đời mỗi người!",
  },
  "tieng-viet:3:on-tap-tong-hop-chuan-bi-kiem-tra-cuoi-nam": {
    objectives: ["Hệ thống lại toàn bộ kiến thức Tiếng Việt trọng tâm trong năm.", "Ôn luyện tổng hợp các dạng bài đã học.", "Tự tin bước vào bài kiểm tra cuối năm."],
    sections: [
      { heading: "1. Tổng ôn kiến thức cả năm", body: ["Em đã học rất nhiều kiến thức: từ loại, các kiểu câu, biện pháp tu từ, đọc hiểu và nhiều dạng tập làm văn."] },
      { heading: "2. Lập kế hoạch ôn tập", body: ["Em nên chia nhỏ nội dung ôn tập theo từng ngày, ôn từ dễ đến khó, từ cũ đến mới."] },
      { heading: "3. Tự tin bước vào kỳ thi", body: ["Ôn tập kỹ càng kết hợp nghỉ ngơi hợp lý sẽ giúp em tự tin và đạt kết quả tốt trong bài kiểm tra cuối năm."] },
    ],
    quiz: [
      { question: "Từ loại nào chỉ đặc điểm, tính chất của sự vật?", options: ["Danh từ", "Động từ", "Tính từ", "Số từ"], correctIndex: 2, explanation: "Tính từ chỉ đặc điểm, tính chất của sự vật." },
      { question: "Biện pháp nào so sánh hai sự vật có điểm giống nhau?", options: ["Nhân hoá", "So sánh", "Điệp từ", "Không có biện pháp nào"], correctIndex: 1, explanation: "So sánh là đối chiếu hai sự vật có điểm giống nhau." },
      { question: "Dạng bài tập làm văn nào em đã học trong năm lớp 3?", options: ["Tả đồ vật, con vật, cây cối, người", "Viết luận văn khoa học", "Viết báo cáo nghiên cứu", "Không học tập làm văn"], correctIndex: 0, explanation: "Em đã học các dạng tả đồ vật, con vật, cây cối, người trong năm." },
    ],
    funFact: "Bạn có biết? Những kiến thức Tiếng Việt em học hôm nay sẽ là nền tảng quan trọng cho việc học Ngữ văn ở các cấp học cao hơn!",
  },

  // ─────────────── TIẾNG VIỆT — LỚP 3 — 60 bài thực hành mở rộng ───────────────
  "tieng-viet:3:thuc-hanh-tu-dong-nghia": practiceContent("Thực hành", "Từ đồng nghĩa", "Hãy nhớ lại: từ đồng nghĩa có nghĩa giống hoặc gần giống nhau.", [
    { question: "Từ nào đồng nghĩa với 'nhanh'?", options: ["Chậm", "Mau", "To", "Nhỏ"], correctIndex: 1, explanation: "'Mau' có nghĩa gần giống với 'nhanh'." },
    { question: "Từ nào đồng nghĩa với 'to'?", options: ["Nhỏ", "Bé", "Lớn", "Thấp"], correctIndex: 2, explanation: "'Lớn' có nghĩa gần giống với 'to'." },
    { question: "Từ nào đồng nghĩa với 'buồn'?", options: ["Vui", "Rầu rĩ", "To", "Nhanh"], correctIndex: 1, explanation: "'Rầu rĩ' có nghĩa gần giống với 'buồn'." },
    { question: "Cặp từ nào là từ đồng nghĩa?", options: ["Đẹp - xấu", "Nhanh - chậm", "Xinh - đẹp", "To - nhỏ"], correctIndex: 2, explanation: "'Xinh' và 'đẹp' có nghĩa giống nhau." },
  ]),
  "tieng-viet:3:luyen-tap-tu-trai-nghia": practiceContent("Luyện tập", "Từ trái nghĩa", "Hãy nhớ lại: từ trái nghĩa có nghĩa đối lập nhau.", [
    { question: "Từ nào trái nghĩa với 'to'?", options: ["Lớn", "Nhỏ", "Đẹp", "Nhanh"], correctIndex: 1, explanation: "'Nhỏ' trái nghĩa với 'to'." },
    { question: "Từ nào trái nghĩa với 'nhanh'?", options: ["Mau", "Chậm", "To", "Xinh"], correctIndex: 1, explanation: "'Chậm' trái nghĩa với 'nhanh'." },
    { question: "Từ nào trái nghĩa với 'sáng'?", options: ["Tối", "Đẹp", "To", "Vui"], correctIndex: 0, explanation: "'Tối' trái nghĩa với 'sáng'." },
    { question: "Cặp từ nào là từ trái nghĩa?", options: ["To - lớn", "Cao - thấp", "Nhanh - mau", "Đẹp - xinh"], correctIndex: 1, explanation: "'Cao' và 'thấp' có nghĩa trái ngược nhau." },
  ]),
  "tieng-viet:3:van-dung-tu-nhieu-nghia-buoc-dau-lam-quen": practiceContent("Vận dụng", "Từ nhiều nghĩa (bước đầu làm quen)", "Hãy nhớ lại: một từ có thể mang nhiều nghĩa tuỳ ngữ cảnh.", [
    { question: "Từ 'mắt' trong 'mắt bão' mang nghĩa gì?", options: ["Bộ phận cơ thể người", "Tâm của cơn bão", "Một loại quả", "Không có nghĩa"], correctIndex: 1, explanation: "Trong ngữ cảnh này, 'mắt' chỉ tâm của cơn bão." },
    { question: "Từ nào có thể là từ nhiều nghĩa?", options: ["Mũi (mũi người, mũi thuyền)", "Học sinh", "Con mèo", "Cái bàn"], correctIndex: 0, explanation: "'Mũi' có thể chỉ mũi người hoặc mũi thuyền, mũi kim." },
    { question: "Để hiểu đúng nghĩa của từ nhiều nghĩa, cần dựa vào đâu?", options: ["Ngữ cảnh câu văn", "Số lượng chữ cái", "Màu sắc của chữ", "Không cần dựa vào gì"], correctIndex: 0, explanation: "Ngữ cảnh giúp xác định đúng nghĩa của từ." },
    { question: "Từ 'chân' trong 'chân núi' mang nghĩa gì?", options: ["Bộ phận cơ thể người", "Phần dưới cùng của núi", "Một loại đồ vật", "Không có nghĩa"], correctIndex: 1, explanation: "'Chân núi' chỉ phần dưới cùng, nơi núi tiếp giáp mặt đất." },
  ]),
  "tieng-viet:3:tro-choi-on-tap-mo-rong-von-tu-ve-nha-truong": practiceContent("Trò chơi ôn tập", "Mở rộng vốn từ về nhà trường", "Hãy nhớ lại các từ ngữ về nhà trường đã học.", [
    { question: "Từ nào thuộc chủ điểm nhà trường?", options: ["Sân trường", "Cánh đồng", "Con sông", "Ngọn núi"], correctIndex: 0, explanation: "'Sân trường' thuộc chủ điểm nhà trường." },
    { question: "Ai là người dạy học ở trường?", options: ["Bác sĩ", "Giáo viên", "Công an", "Nông dân"], correctIndex: 1, explanation: "Giáo viên là người dạy học ở trường." },
    { question: "Nơi nào trong trường dùng để đọc sách?", options: ["Sân bóng", "Thư viện", "Căng tin", "Phòng y tế"], correctIndex: 1, explanation: "Thư viện là nơi đọc sách trong trường." },
    { question: "Từ nào chỉ hoạt động học tập ở trường?", options: ["Thảo luận nhóm", "Đi chợ", "Nấu ăn", "Đi ngủ"], correctIndex: 0, explanation: "'Thảo luận nhóm' là hoạt động học tập." },
  ]),
  "tieng-viet:3:thu-thach-nho-mo-rong-von-tu-ve-thien-nhien": practiceContent("Thử thách nhỏ", "Mở rộng vốn từ về thiên nhiên", "Hãy nhớ lại các từ ngữ về thiên nhiên đã học.", [
    { question: "Từ nào thuộc chủ điểm thiên nhiên?", options: ["Núi non", "Bàn ghế", "Sách vở", "Xe đạp"], correctIndex: 0, explanation: "'Núi non' là hình ảnh thiên nhiên." },
    { question: "Từ nào chỉ hiện tượng thời tiết?", options: ["Cơn bão", "Cái bàn", "Quyển vở", "Cây bút"], correctIndex: 0, explanation: "'Cơn bão' là hiện tượng thời tiết." },
    { question: "Từ nào tả bầu trời?", options: ["Trong xanh", "Chăm chỉ", "Nhanh nhẹn", "Hiền lành"], correctIndex: 0, explanation: "'Trong xanh' thường dùng để tả bầu trời." },
    { question: "Cảnh đẹp thiên nhiên nào của Việt Nam được UNESCO công nhận?", options: ["Vịnh Hạ Long", "Sân vận động", "Trung tâm thương mại", "Nhà ga"], correctIndex: 0, explanation: "Vịnh Hạ Long được UNESCO công nhận là Di sản Thiên nhiên." },
  ]),
  "tieng-viet:3:thuc-hanh-mo-rong-von-tu-ve-le-hoi": practiceContent("Thực hành", "Mở rộng vốn từ về lễ hội", "Hãy nhớ lại các từ ngữ về lễ hội đã học.", [
    { question: "Từ nào thuộc chủ điểm lễ hội?", options: ["Rước kiệu", "Bàn học", "Quyển vở", "Cây bút"], correctIndex: 0, explanation: "'Rước kiệu' là hoạt động trong lễ hội." },
    { question: "Lễ hội nào tưởng nhớ các Vua Hùng?", options: ["Lễ hội đền Hùng", "Tết Trung Thu", "Lễ hội chùa Hương", "Tết Dương lịch"], correctIndex: 0, explanation: "Lễ hội đền Hùng tưởng nhớ các Vua Hùng." },
    { question: "Hoạt động nào thường thấy trong lễ hội?", options: ["Múa lân", "Làm bài kiểm tra", "Đi ngủ", "Học bài mới"], correctIndex: 0, explanation: "Múa lân là hoạt động phổ biến trong lễ hội." },
    { question: "Dịp nào thường có nhiều lễ hội truyền thống diễn ra?", options: ["Đầu năm mới", "Giữa mùa hè", "Cuối học kỳ 2", "Không có dịp cố định"], correctIndex: 0, explanation: "Đầu năm mới (dịp Tết) thường có nhiều lễ hội truyền thống." },
  ]),
  "tieng-viet:3:luyen-tap-mo-rong-von-tu-ve-nghe-nghiep": practiceContent("Luyện tập", "Mở rộng vốn từ về nghề nghiệp", "Hãy nhớ lại các từ ngữ về nghề nghiệp đã học.", [
    { question: "Nghề nào có nhiệm vụ giữ gìn trật tự an toàn xã hội?", options: ["Bác sĩ", "Công an", "Nông dân", "Ca sĩ"], correctIndex: 1, explanation: "Công an có nhiệm vụ giữ gìn trật tự an toàn xã hội." },
    { question: "Nghề nào chuyên trồng trọt, chăn nuôi?", options: ["Kỹ sư", "Nông dân", "Bác sĩ", "Giáo viên"], correctIndex: 1, explanation: "Nông dân là nghề chuyên trồng trọt, chăn nuôi." },
    { question: "Ai là người thiết kế, xây dựng công trình?", options: ["Kỹ sư", "Ca sĩ", "Nông dân", "Công an"], correctIndex: 0, explanation: "Kỹ sư thường thiết kế, xây dựng công trình." },
    { question: "Từ nào chỉ nghề nghiệp trong lĩnh vực y tế?", options: ["Bác sĩ", "Nông dân", "Công an", "Ca sĩ"], correctIndex: 0, explanation: "Bác sĩ là nghề trong lĩnh vực y tế." },
  ]),
  "tieng-viet:3:van-dung-mo-rong-von-tu-ve-the-thao": practiceContent("Vận dụng", "Mở rộng vốn từ về thể thao", "Hãy nhớ lại các từ ngữ về thể thao đã học.", [
    { question: "Từ nào chỉ nơi tổ chức thi đấu thể thao?", options: ["Sân vận động", "Thư viện", "Bệnh viện", "Chợ"], correctIndex: 0, explanation: "Sân vận động là nơi tổ chức thi đấu thể thao." },
    { question: "Người thi đấu thể thao chuyên nghiệp được gọi là gì?", options: ["Vận động viên", "Ca sĩ", "Bác sĩ", "Nông dân"], correctIndex: 0, explanation: "Vận động viên là người thi đấu thể thao chuyên nghiệp." },
    { question: "Môn thể thao nào chơi dưới nước?", options: ["Bơi lội", "Bóng đá", "Cầu lông", "Điền kinh"], correctIndex: 0, explanation: "Bơi lội là môn thể thao dưới nước." },
    { question: "Phần thưởng cho vận động viên chiến thắng thường là gì?", options: ["Huy chương", "Quyển sách", "Cây bút", "Hộp bút"], correctIndex: 0, explanation: "Huy chương là phần thưởng cho vận động viên chiến thắng." },
  ]),
  "tieng-viet:3:tro-choi-on-tap-cau-co-trang-ngu-chi-thoi-gian": practiceContent("Trò chơi ôn tập", "Câu có trạng ngữ chỉ thời gian", "Hãy nhớ lại: trạng ngữ chỉ thời gian trả lời câu hỏi 'Khi nào?'.", [
    { question: "Trong câu 'Mùa hè năm ngoái, em về quê chơi.', trạng ngữ là gì?", options: ["Em", "Mùa hè năm ngoái", "về quê", "chơi"], correctIndex: 1, explanation: "'Mùa hè năm ngoái' là trạng ngữ chỉ thời gian." },
    { question: "Trạng ngữ chỉ thời gian trả lời cho câu hỏi nào?", options: ["Ở đâu?", "Khi nào?", "Như thế nào?", "Tại sao?"], correctIndex: 1, explanation: "Trạng ngữ chỉ thời gian trả lời câu hỏi 'Khi nào?'." },
    { question: "Cụm từ nào có thể làm trạng ngữ chỉ thời gian?", options: ["Trong lớp học", "Buổi tối hôm qua", "Trên bàn học", "Ở sân trường"], correctIndex: 1, explanation: "'Buổi tối hôm qua' chỉ thời gian." },
    { question: "Trạng ngữ chỉ thời gian thường đứng ở đâu trong câu?", options: ["Luôn ở giữa câu", "Thường ở đầu câu", "Luôn ở cuối câu", "Không có vị trí cố định"], correctIndex: 1, explanation: "Trạng ngữ chỉ thời gian thường đứng ở đầu câu." },
  ]),
  "tieng-viet:3:thu-thach-nho-cau-co-trang-ngu-chi-noi-chon": practiceContent("Thử thách nhỏ", "Câu có trạng ngữ chỉ nơi chốn", "Hãy nhớ lại: trạng ngữ chỉ nơi chốn trả lời câu hỏi 'Ở đâu?'.", [
    { question: "Trong câu 'Ở nhà, em giúp mẹ nấu cơm.', trạng ngữ là gì?", options: ["Em", "Ở nhà", "giúp mẹ", "nấu cơm"], correctIndex: 1, explanation: "'Ở nhà' là trạng ngữ chỉ nơi chốn." },
    { question: "Trạng ngữ chỉ nơi chốn trả lời cho câu hỏi nào?", options: ["Khi nào?", "Ở đâu?", "Vì sao?", "Bằng cách nào?"], correctIndex: 1, explanation: "Trạng ngữ chỉ nơi chốn trả lời câu hỏi 'Ở đâu?'." },
    { question: "Cụm từ nào có thể làm trạng ngữ chỉ nơi chốn?", options: ["Hôm qua", "Trong lớp học", "Rất nhanh", "Vì trời mưa"], correctIndex: 1, explanation: "'Trong lớp học' chỉ địa điểm." },
    { question: "Câu nào có trạng ngữ chỉ nơi chốn?", options: ["Sáng nay, em dậy sớm.", "Trên cánh đồng, các bác nông dân đang làm việc.", "Vì trời lạnh, em mặc áo ấm.", "Em học rất chăm chỉ."], correctIndex: 1, explanation: "'Trên cánh đồng' là trạng ngữ chỉ nơi chốn." },
  ]),
  "tieng-viet:3:thuc-hanh-dau-hai-cham-va-cach-dung": practiceContent("Thực hành", "Dấu hai chấm và cách dùng", "Hãy nhớ lại: dấu hai chấm báo hiệu lời giải thích hoặc liệt kê.", [
    { question: "Câu nào dùng đúng dấu hai chấm?", options: ["Em thích: các môn Toán, Tiếng Việt.", "Em thích các môn: Toán, Tiếng Việt.", "Em: thích các môn Toán, Tiếng Việt.", "Em thích các: môn Toán, Tiếng Việt."], correctIndex: 1, explanation: "Dấu hai chấm đặt trước phần liệt kê các môn học." },
    { question: "Dấu hai chấm thường xuất hiện trước loại câu nào?", options: ["Lời nói trực tiếp", "Không xuất hiện trước câu nào", "Chỉ trước số", "Chỉ trước tên riêng"], correctIndex: 0, explanation: "Dấu hai chấm thường xuất hiện trước lời nói trực tiếp." },
    { question: "Sau dấu hai chấm thường là gì?", options: ["Phần giải thích, bổ sung", "Không có gì đặc biệt", "Luôn là một số", "Luôn là một câu hỏi"], correctIndex: 0, explanation: "Sau dấu hai chấm thường là phần giải thích, bổ sung ý." },
    { question: "Dấu hai chấm còn được dùng trong lĩnh vực nào khác?", options: ["Toán học (phép chia)", "Âm nhạc", "Hội hoạ", "Không dùng ở đâu khác"], correctIndex: 0, explanation: "Dấu hai chấm còn dùng để biểu diễn phép chia trong Toán học." },
  ]),
  "tieng-viet:3:luyen-tap-dau-ngoac-kep-va-cach-dung": practiceContent("Luyện tập", "Dấu ngoặc kép và cách dùng", "Hãy nhớ lại: dấu ngoặc kép đánh dấu lời nói trực tiếp.", [
    { question: "Câu nào dùng đúng dấu ngoặc kép?", options: ["Bạn nói tôi rất vui.", "Bạn nói: \"Tôi rất vui.\"", "Bạn nói \"tôi rất vui", "Bạn nói tôi \"rất\" vui"], correctIndex: 1, explanation: "Lời nói trực tiếp được đặt trong dấu ngoặc kép." },
    { question: "Dấu ngoặc kép luôn xuất hiện như thế nào?", options: ["Chỉ một dấu duy nhất", "Đi theo cặp (mở và đóng)", "Không cần theo cặp", "Chỉ ở đầu câu"], correctIndex: 1, explanation: "Dấu ngoặc kép luôn có một dấu mở và một dấu đóng." },
    { question: "Dấu ngoặc kép dùng để làm gì?", options: ["Đánh dấu lời nói trực tiếp hoặc trích dẫn", "Kết thúc câu", "Ngăn cách các ý", "Không có tác dụng gì"], correctIndex: 0, explanation: "Dấu ngoặc kép đánh dấu lời nói trực tiếp hoặc trích dẫn." },
    { question: "Ngoài lời nói trực tiếp, dấu ngoặc kép còn dùng để làm gì?", options: ["Nhấn mạnh một từ ngữ đặc biệt", "Không có tác dụng gì khác", "Chỉ dùng cho số", "Chỉ dùng cho tên riêng"], correctIndex: 0, explanation: "Dấu ngoặc kép còn dùng để nhấn mạnh từ ngữ đặc biệt." },
  ]),
  "tieng-viet:3:van-dung-dau-gach-ngang-trong-loi-thoai": practiceContent("Vận dụng", "Dấu gạch ngang trong lời thoại", "Hãy nhớ lại: dấu gạch ngang đặt đầu dòng trước lời thoại.", [
    { question: "Dấu gạch ngang trong lời thoại thường đặt ở đâu?", options: ["Cuối dòng", "Đầu dòng, trước lời nói", "Giữa câu", "Không có vị trí cố định"], correctIndex: 1, explanation: "Dấu gạch ngang thường đặt ở đầu dòng trước lời thoại." },
    { question: "Khi viết đoạn hội thoại nhiều nhân vật, mỗi lời thoại nên viết như thế nào?", options: ["Viết chung một dòng", "Viết trên dòng riêng với dấu gạch ngang", "Không cần phân biệt", "Viết không cần dấu gì"], correctIndex: 1, explanation: "Mỗi lời thoại nên viết trên dòng riêng, có dấu gạch ngang." },
    { question: "Dấu gạch ngang trong hội thoại có tác dụng gì?", options: ["Kết thúc câu", "Đánh dấu lời nói của từng nhân vật", "Không có tác dụng", "Chỉ để trang trí"], correctIndex: 1, explanation: "Dấu gạch ngang giúp phân biệt lời nói của từng nhân vật." },
    { question: "Ngoài lời thoại, dấu gạch ngang còn dùng để làm gì?", options: ["Nối các từ trong từ ghép", "Không dùng vào việc gì khác", "Chỉ dùng cho số", "Chỉ dùng cho tên riêng"], correctIndex: 0, explanation: "Dấu gạch ngang còn dùng để nối các từ trong một số từ ghép." },
  ]),
  "tieng-viet:3:tro-choi-on-tap-chinh-ta-phan-biet-l-n": practiceContent("Trò chơi ôn tập", "Chính tả phân biệt l/n", "Hãy nhớ lại cách phân biệt âm l và âm n.", [
    { question: "Từ nào viết đúng chính tả?", options: ["Con lợn", "Con nợn", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 0, explanation: "'Con lợn' viết đúng với âm 'l'." },
    { question: "Từ nào viết đúng chính tả?", options: ["Nóng lực", "Nóng nực", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 1, explanation: "'Nóng nực' viết đúng với âm 'n'." },
    { question: "Từ nào viết đúng chính tả?", options: ["Long lanh", "Nong nanh", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 0, explanation: "'Long lanh' viết đúng với âm 'l'." },
    { question: "Từ nào viết đúng chính tả?", options: ["Nước lon", "Nước non", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 1, explanation: "'Nước non' viết đúng với âm 'n'." },
  ]),
  "tieng-viet:3:thu-thach-nho-chinh-ta-phan-biet-s-x": practiceContent("Thử thách nhỏ", "Chính tả phân biệt s/x", "Hãy nhớ lại cách phân biệt âm s và âm x.", [
    { question: "Từ nào viết đúng chính tả?", options: ["Sinh sống", "Xinh xống", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 0, explanation: "'Sinh sống' viết đúng với âm 's'." },
    { question: "Từ nào viết đúng chính tả?", options: ["Xuất sắc", "Suất xắc", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 0, explanation: "'Xuất sắc' viết đúng chính tả." },
    { question: "Từ nào viết đúng chính tả?", options: ["Sản xuất", "Xản suất", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 0, explanation: "'Sản xuất' viết đúng chính tả." },
    { question: "Từ nào viết đúng chính tả?", options: ["Xa xôi", "Sa sôi", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 0, explanation: "'Xa xôi' viết đúng với âm 'x'." },
  ]),
  "tieng-viet:3:thuc-hanh-chinh-ta-phan-biet-ch-tr": practiceContent("Thực hành", "Chính tả phân biệt ch/tr", "Hãy nhớ lại cách phân biệt âm ch và âm tr.", [
    { question: "Từ nào viết đúng chính tả?", options: ["Chuyện tranh", "Truyện tranh", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 1, explanation: "'Truyện tranh' viết đúng với âm 'tr'." },
    { question: "Từ nào viết đúng chính tả?", options: ["Chăm học", "Trăm học", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 0, explanation: "'Chăm học' viết đúng với âm 'ch'." },
    { question: "Từ nào viết đúng chính tả?", options: ["Chả lời", "Trả lời", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 1, explanation: "'Trả lời' viết đúng với âm 'tr'." },
    { question: "Từ nào viết đúng chính tả?", options: ["Chăm chú", "Trăm chú", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 0, explanation: "'Chăm chú' viết đúng với âm 'ch'." },
  ]),
  "tieng-viet:3:luyen-tap-chinh-ta-phan-biet-dau-hoi-dau-nga": practiceContent("Luyện tập", "Chính tả phân biệt dấu hỏi/dấu ngã", "Hãy nhớ lại cách phân biệt dấu hỏi và dấu ngã.", [
    { question: "Từ nào có nghĩa là 'nghiêng về một phía'?", options: ["Ngã", "Ngả", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 1, explanation: "'Ngả' (dấu hỏi) nghĩa là nghiêng về một phía." },
    { question: "Từ nào viết đúng khi nói về việc 'nhẹ nhàng, dễ dàng'?", options: ["Dễ dàng", "Dể dàng", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 0, explanation: "'Dễ dàng' (dấu ngã) viết đúng chính tả." },
    { question: "Từ nào viết đúng khi nói về 'sức khoẻ tốt'?", options: ["Khoẻ mạnh", "Khỏe mạnh", "Cả hai đều đúng (biến thể vùng miền)", "Cả hai đều sai"], correctIndex: 2, explanation: "'Khoẻ' và 'khỏe' đều được chấp nhận là biến thể chính tả vùng miền." },
    { question: "Từ nào viết đúng khi nói về 'sự vui vẻ'?", options: ["Vui vẻ", "Vui vẽ", "Cả hai đều đúng", "Cả hai đều sai"], correctIndex: 0, explanation: "'Vui vẻ' (dấu hỏi) viết đúng chính tả." },
  ]),
  "tieng-viet:3:van-dung-doc-hieu-bai-bao-thieu-nhi": practiceContent("Vận dụng", "Đọc hiểu bài báo thiếu nhi", "Hãy nhớ lại cách tìm thông tin chính trong bài báo.", [
    { question: "Để nắm thông tin chính của bài báo, em nên đọc gì trước?", options: ["Tiêu đề bài báo", "Chỉ đọc câu cuối", "Bỏ qua tiêu đề", "Không cần đọc gì"], correctIndex: 0, explanation: "Tiêu đề giúp em biết chủ đề chính của bài báo." },
    { question: "Bài báo thiếu nhi thường đăng trên loại báo nào?", options: ["Báo Nhi Đồng", "Báo tài chính", "Báo thể thao người lớn", "Không đăng ở đâu"], correctIndex: 0, explanation: "Báo Nhi Đồng là báo dành cho thiếu nhi." },
    { question: "Sau khi đọc bài báo, em cần làm gì?", options: ["Quên ngay nội dung", "Nắm được thông tin chính", "Không cần suy nghĩ gì", "Chỉ nhớ tên bài báo"], correctIndex: 1, explanation: "Cần nắm được thông tin chính sau khi đọc." },
    { question: "Bài báo thiếu nhi khác gì so với truyện cổ tích?", options: ["Cung cấp thông tin thực tế", "Luôn có phép thuật", "Không có nội dung", "Không có sự khác biệt"], correctIndex: 0, explanation: "Bài báo cung cấp thông tin thực tế, khác với truyện cổ tích hư cấu." },
  ]),
  "tieng-viet:3:tro-choi-on-tap-doc-hieu-truyen-ngu-ngon": practiceContent("Trò chơi ôn tập", "Đọc hiểu truyện ngụ ngôn", "Hãy nhớ lại: truyện ngụ ngôn thường mượn hình ảnh loài vật để gửi gắm bài học.", [
    { question: "Truyện 'Ếch ngồi đáy giếng' dạy bài học gì?", options: ["Không nên kiêu ngạo, tự mãn", "Cách bơi lội", "Cách nuôi ếch", "Không có bài học gì"], correctIndex: 0, explanation: "Truyện dạy về sự kiêu ngạo, hiểu biết hạn hẹp." },
    { question: "Truyện ngụ ngôn thường mượn hình ảnh gì?", options: ["Loài vật, đồ vật", "Chỉ con người thật", "Không có hình ảnh nào", "Chỉ số liệu"], correctIndex: 0, explanation: "Truyện ngụ ngôn thường mượn hình ảnh loài vật, đồ vật." },
    { question: "Đặc điểm nổi bật của truyện ngụ ngôn là gì?", options: ["Luôn mang một bài học ý nghĩa", "Không có ý nghĩa gì", "Chỉ để giải trí", "Không có nhân vật"], correctIndex: 0, explanation: "Truyện ngụ ngôn luôn mang một bài học ý nghĩa." },
    { question: "Ai là tác giả nổi tiếng với các truyện ngụ ngôn từ thời Hy Lạp cổ đại?", options: ["Aesop", "Andersen", "Grimm", "Perrault"], correctIndex: 0, explanation: "Aesop là tác giả nổi tiếng với các truyện ngụ ngôn cổ." },
  ]),
  "tieng-viet:3:thu-thach-nho-doc-hieu-truyen-co-tich-viet-nam": practiceContent("Thử thách nhỏ", "Đọc hiểu truyện cổ tích Việt Nam", "Hãy nhớ lại nội dung, ý nghĩa của các truyện cổ tích Việt Nam.", [
    { question: "Truyện cổ tích nào có nhân vật Thạch Sanh?", options: ["Tấm Cám", "Thạch Sanh", "Sọ Dừa", "Cây tre trăm đốt"], correctIndex: 1, explanation: "'Thạch Sanh' là tên truyện cổ tích với nhân vật chính cùng tên." },
    { question: "Truyện cổ tích Việt Nam thường thể hiện ước mơ gì?", options: ["Công bằng, người tốt được đền đáp", "Sự bất công", "Không có ước mơ nào", "Chỉ để giải trí"], correctIndex: 0, explanation: "Truyện cổ tích thường thể hiện ước mơ về công bằng." },
    { question: "Nhân vật chính trong truyện cổ tích thường có đặc điểm gì?", options: ["Hiền lành, chăm chỉ", "Luôn xấu xa", "Không có tính cách", "Chỉ là đồ vật"], correctIndex: 0, explanation: "Nhân vật chính thường hiền lành, chăm chỉ." },
    { question: "Truyện cổ tích 'Sọ Dừa' kể về nhân vật có hình dáng như thế nào?", options: ["Tròn như quả dừa", "Cao lớn", "Nhỏ bé như hạt gạo", "Không có hình dáng đặc biệt"], correctIndex: 0, explanation: "Sọ Dừa có hình dáng tròn như quả dừa trong truyện." },
  ]),
  "tieng-viet:3:thuc-hanh-ke-chuyen-theo-tranh-minh-hoa": practiceContent("Thực hành", "Kể chuyện theo tranh minh hoạ", "Hãy nhớ lại cách quan sát tranh và kể chuyện mạch lạc.", [
    { question: "Khi kể chuyện theo tranh, em cần làm gì đầu tiên?", options: ["Kể ngay không cần xem tranh", "Quan sát kỹ từng bức tranh", "Bỏ qua tranh", "Chỉ đọc tên truyện"], correctIndex: 1, explanation: "Cần quan sát kỹ tranh trước khi kể." },
    { question: "Các bức tranh trong câu chuyện thường sắp xếp theo gì?", options: ["Ngẫu nhiên", "Trình tự câu chuyện", "Không theo trình tự nào", "Theo màu sắc"], correctIndex: 1, explanation: "Tranh minh hoạ thường sắp xếp theo trình tự câu chuyện." },
    { question: "Từ ngữ nào giúp kể chuyện mạch lạc hơn?", options: ["Sau đó, tiếp theo, cuối cùng", "Không cần từ ngữ nối", "Chỉ dùng một từ duy nhất", "Không có từ nào phù hợp"], correctIndex: 0, explanation: "Từ ngữ chuyển tiếp giúp câu chuyện mạch lạc." },
    { question: "Kể chuyện theo tranh giúp rèn luyện kỹ năng gì?", options: ["Diễn đạt mạch lạc", "Không rèn luyện kỹ năng gì", "Chỉ rèn kỹ năng vẽ", "Chỉ rèn kỹ năng tính toán"], correctIndex: 0, explanation: "Kể chuyện theo tranh giúp rèn kỹ năng diễn đạt mạch lạc." },
  ]),
  "tieng-viet:3:luyen-tap-ke-lai-mot-buoi-tham-quan": practiceContent("Luyện tập", "Kể lại một buổi tham quan", "Hãy nhớ lại trình tự kể chuyện: chuẩn bị, hoạt động, cảm xúc.", [
    { question: "Khi kể về buổi tham quan, em nên nhớ lại điều gì trước?", options: ["Địa điểm, thời gian, hoạt động đáng nhớ", "Không cần nhớ gì", "Chỉ cần nhớ tên địa điểm", "Chỉ cần nhớ ngày tháng"], correctIndex: 0, explanation: "Cần nhớ đầy đủ địa điểm, thời gian, hoạt động." },
    { question: "Kể chuyện về buổi tham quan nên theo trình tự nào?", options: ["Chuẩn bị, hoạt động, cảm xúc", "Kể lộn xộn", "Chỉ kể phần kết", "Không cần trình tự"], correctIndex: 0, explanation: "Kể theo trình tự giúp câu chuyện rõ ràng." },
    { question: "Vì sao nên thể hiện cảm xúc khi kể chuyện?", options: ["Không cần thiết", "Giúp câu chuyện sinh động hơn", "Làm khó hiểu hơn", "Không có tác dụng"], correctIndex: 1, explanation: "Thể hiện cảm xúc giúp câu chuyện sinh động, chân thực." },
    { question: "Ghi chép gì sau chuyến tham quan giúp lưu giữ kỷ niệm?", options: ["Nhật ký", "Không cần ghi chép gì", "Chỉ cần nhớ trong đầu", "Không có cách nào"], correctIndex: 0, explanation: "Ghi nhật ký là cách hay để lưu giữ kỷ niệm." },
  ]),
  "tieng-viet:3:van-dung-ke-ve-mot-ngay-cua-em": practiceContent("Vận dụng", "Kể về một ngày của em", "Hãy nhớ lại cách kể theo trình tự thời gian từ sáng đến tối.", [
    { question: "Khi kể về một ngày của mình, em nên kể theo trình tự nào?", options: ["Lộn xộn", "Theo trình tự thời gian", "Chỉ kể một hoạt động", "Không cần trình tự"], correctIndex: 1, explanation: "Kể theo trình tự thời gian giúp câu chuyện rõ ràng." },
    { question: "Hoạt động nào thường diễn ra cuối cùng trong ngày?", options: ["Thức dậy", "Đi học", "Đi ngủ", "Ăn sáng"], correctIndex: 2, explanation: "'Đi ngủ' thường là hoạt động cuối cùng trong ngày." },
    { question: "Khi kể về một ngày của mình, em nên kể như thế nào?", options: ["Chép văn mẫu", "Tự nhiên, chân thực", "Không cần kể thật", "Kể thật ngắn gọn"], correctIndex: 1, explanation: "Kể tự nhiên, chân thực giúp bài văn gần gũi hơn." },
    { question: "Bài văn kể về một ngày giúp rèn luyện kỹ năng gì?", options: ["Quan sát và diễn đạt", "Không rèn luyện gì", "Chỉ rèn kỹ năng vẽ", "Chỉ rèn kỹ năng tính toán"], correctIndex: 0, explanation: "Bài văn này giúp rèn kỹ năng quan sát và diễn đạt." },
  ]),
  "tieng-viet:3:tro-choi-on-tap-ta-buoi-sang-o-que-em": practiceContent("Trò chơi ôn tập", "Tả buổi sáng ở quê em", "Hãy nhớ lại các hình ảnh quen thuộc của buổi sáng ở quê.", [
    { question: "Hình ảnh nào thường xuất hiện trong buổi sáng ở quê?", options: ["Tiếng gà gáy", "Đèn giao thông", "Xe buýt", "Toà nhà cao tầng"], correctIndex: 0, explanation: "Tiếng gà gáy là âm thanh quen thuộc buổi sáng ở quê." },
    { question: "Từ nào phù hợp để tả sương sớm?", options: ["Ồn ào", "Mờ ảo", "Nóng bức", "Chật chội"], correctIndex: 1, explanation: "'Mờ ảo' phù hợp để tả sương sớm." },
    { question: "Đoạn văn tả buổi sáng nên bắt đầu bằng gì?", options: ["Một câu hỏi bất kỳ", "Khung cảnh chung", "Một phép tính", "Không cần mở đầu"], correctIndex: 1, explanation: "Nên bắt đầu bằng khung cảnh chung." },
    { question: "Hình ảnh nào KHÔNG phù hợp khi tả buổi sáng ở quê?", options: ["Cánh đồng lúa", "Con đường làng", "Đèn neon quảng cáo", "Ánh nắng sớm"], correctIndex: 2, explanation: "'Đèn neon quảng cáo' là hình ảnh đô thị, không phù hợp với quê." },
  ]),
  "tieng-viet:3:thu-thach-nho-ta-canh-san-truong-gio-ra-choi": practiceContent("Thử thách nhỏ", "Tả cảnh sân trường giờ ra chơi", "Hãy nhớ lại không khí nhộn nhịp của giờ ra chơi.", [
    { question: "Âm thanh nào báo hiệu giờ ra chơi bắt đầu?", options: ["Tiếng chuông điện thoại", "Tiếng trống trường", "Tiếng còi xe", "Tiếng nhạc"], correctIndex: 1, explanation: "Tiếng trống trường báo hiệu giờ ra chơi." },
    { question: "Từ nào phù hợp tả không khí sân trường giờ ra chơi?", options: ["Yên tĩnh", "Nhộn nhịp", "Buồn bã", "Vắng vẻ"], correctIndex: 1, explanation: "'Nhộn nhịp' phù hợp để tả không khí vui tươi." },
    { question: "Hoạt động nào thường thấy trong giờ ra chơi?", options: ["Làm bài kiểm tra", "Nhảy dây, đá cầu", "Ngủ trưa", "Học bài mới"], correctIndex: 1, explanation: "Nhảy dây, đá cầu là trò chơi phổ biến giờ ra chơi." },
    { question: "Giờ ra chơi mang lại lợi ích gì cho học sinh?", options: ["Không có lợi ích gì", "Thư giãn, vận động sau giờ học", "Làm mất thời gian học", "Không liên quan đến sức khoẻ"], correctIndex: 1, explanation: "Giờ ra chơi giúp thư giãn, vận động sau giờ học căng thẳng." },
  ]),
  "tieng-viet:3:thuc-hanh-ta-con-mua": practiceContent("Thực hành", "Tả cơn mưa", "Hãy nhớ lại cách miêu tả cơn mưa theo trình tự trước, trong, sau.", [
    { question: "Từ nào miêu tả âm thanh của mưa rơi trên mái nhà?", options: ["Lộp độp", "Ồn ào", "Yên tĩnh", "Chậm rãi"], correctIndex: 0, explanation: "'Lộp độp' là từ tượng thanh miêu tả tiếng mưa." },
    { question: "Bầu trời trước khi mưa thường có đặc điểm gì?", options: ["Trong xanh", "Xuất hiện mây đen", "Nắng chói chang", "Không có gì đặc biệt"], correctIndex: 1, explanation: "Trước khi mưa, bầu trời thường xuất hiện mây đen." },
    { question: "Sau cơn mưa, cảnh vật thường như thế nào?", options: ["Khô cằn", "Tươi mát, trong lành hơn", "Không thay đổi", "Nóng bức hơn"], correctIndex: 1, explanation: "Sau mưa, cảnh vật thường tươi mát, trong lành hơn." },
    { question: "Mưa rào mang lại lợi ích gì cho cây cối?", options: ["Không có lợi ích gì", "Giúp cây cối tươi tốt", "Làm cây héo úa", "Không liên quan đến cây cối"], correctIndex: 1, explanation: "Mưa rào giúp cây cối tươi tốt hơn." },
  ]),
  "tieng-viet:3:luyen-tap-viet-doan-van-gioi-thieu-ban-than": practiceContent("Luyện tập", "Viết đoạn văn giới thiệu bản thân", "Hãy nhớ lại các thông tin cần có khi giới thiệu bản thân.", [
    { question: "Thông tin nào nên có trong đoạn văn giới thiệu bản thân?", options: ["Tên, tuổi, sở thích", "Chỉ có màu sắc yêu thích", "Không cần thông tin gì", "Chỉ có tên trường"], correctIndex: 0, explanation: "Tên, tuổi, sở thích là thông tin cơ bản cần giới thiệu." },
    { question: "Đoạn văn giới thiệu bản thân nên bắt đầu bằng gì?", options: ["Sở thích", "Tên của mình", "Một câu hỏi", "Ước mơ tương lai"], correctIndex: 1, explanation: "Nên bắt đầu bằng việc giới thiệu tên." },
    { question: "Vì sao cần giới thiệu sở thích trong đoạn văn?", options: ["Không cần thiết", "Giúp người đọc hiểu thêm về mình", "Làm đoạn văn dài hơn", "Không có lý do gì"], correctIndex: 1, explanation: "Giới thiệu sở thích giúp người đọc hiểu thêm về em." },
    { question: "Kỹ năng giới thiệu bản thân có tác dụng gì trong cuộc sống?", options: ["Không có tác dụng gì", "Dùng suốt đời khi giao tiếp", "Chỉ dùng ở trường", "Chỉ dùng một lần"], correctIndex: 1, explanation: "Đây là kỹ năng em sẽ dùng suốt đời khi giao tiếp." },
  ]),
  "tieng-viet:3:van-dung-viet-doan-van-ke-ve-uoc-mo": practiceContent("Vận dụng", "Viết đoạn văn kể về ước mơ", "Hãy nhớ lại cách nêu ước mơ và lý do có ước mơ đó.", [
    { question: "Đoạn văn kể về ước mơ nên có nội dung gì?", options: ["Chỉ nêu tên ước mơ", "Nêu ước mơ và lý do", "Không cần lý do", "Chỉ kể chuyện khác"], correctIndex: 1, explanation: "Cần nêu rõ ước mơ và lý do vì sao có ước mơ đó." },
    { question: "Ước mơ có thể là gì?", options: ["Một nghề nghiệp trong tương lai", "Không thể là gì cả", "Chỉ là đồ chơi", "Chỉ là món ăn"], correctIndex: 0, explanation: "Ước mơ thường liên quan đến nghề nghiệp tương lai." },
    { question: "Vì sao nên nêu lý do cho ước mơ của mình?", options: ["Không cần thiết", "Giúp đoạn văn thuyết phục hơn", "Làm đoạn văn dài dòng", "Không có tác dụng gì"], correctIndex: 1, explanation: "Nêu lý do giúp đoạn văn có chiều sâu, thuyết phục hơn." },
    { question: "Nhiều người thành công thường bắt đầu từ đâu?", options: ["Những ước mơ nhỏ khi còn nhỏ", "Không có khởi đầu nào", "Chỉ từ may mắn", "Không liên quan đến ước mơ"], correctIndex: 0, explanation: "Nhiều người thành công bắt đầu từ ước mơ nhỏ khi còn nhỏ." },
  ]),
  "tieng-viet:3:tro-choi-on-tap-viet-loi-cam-on-loi-xin-loi": practiceContent("Trò chơi ôn tập", "Viết lời cảm ơn, lời xin lỗi", "Hãy nhớ lại cách viết lời cảm ơn, xin lỗi chân thành.", [
    { question: "Lời cảm ơn cần có nội dung gì?", options: ["Chỉ cần nói 'cảm ơn'", "Nêu rõ lý do cảm ơn", "Không cần lý do", "Chỉ cần viết dài"], correctIndex: 1, explanation: "Lời cảm ơn nên nêu rõ lý do để thể hiện chân thành." },
    { question: "Lời xin lỗi cần có nội dung gì?", options: ["Nêu rõ lỗi đã mắc", "Không cần nêu lỗi gì", "Chỉ cần nói 'xin lỗi'", "Đổ lỗi cho người khác"], correctIndex: 0, explanation: "Lời xin lỗi cần nêu rõ lỗi đã mắc phải." },
    { question: "Khi viết lời cảm ơn, xin lỗi, em nên dùng ngôn từ như thế nào?", options: ["Thô lỗ", "Lịch sự, chân thành", "Qua loa", "Không cần chú ý"], correctIndex: 1, explanation: "Cần dùng ngôn từ lịch sự, chân thành." },
    { question: "Biết nói lời cảm ơn, xin lỗi đúng lúc là kỹ năng gì?", options: ["Kỹ năng giao tiếp quan trọng", "Không quan trọng", "Chỉ cần khi còn nhỏ", "Không liên quan đến giao tiếp"], correctIndex: 0, explanation: "Đây là kỹ năng giao tiếp quan trọng trong cuộc sống." },
  ]),
  "tieng-viet:3:thu-thach-nho-viet-tin-nhan-loi-nhan-ngan": practiceContent("Thử thách nhỏ", "Viết tin nhắn, lời nhắn ngắn", "Hãy nhớ lại nội dung cần có trong một tin nhắn.", [
    { question: "Tin nhắn, lời nhắn cần có đặc điểm gì?", options: ["Dài dòng, chi tiết", "Ngắn gọn, rõ ràng", "Không cần rõ ràng", "Viết tuỳ ý"], correctIndex: 1, explanation: "Tin nhắn cần ngắn gọn nhưng đầy đủ thông tin." },
    { question: "Nội dung nào nên có trong một lời nhắn?", options: ["Người gửi, người nhận, nội dung nhắn", "Chỉ cần một từ", "Không cần thông tin gì", "Chỉ cần ký tên"], correctIndex: 0, explanation: "Cần đầy đủ người gửi, người nhận, nội dung." },
    { question: "Khi nào em cần viết lời nhắn?", options: ["Khi gặp trực tiếp", "Khi không thể gặp trực tiếp", "Không bao giờ cần viết", "Chỉ khi đi học"], correctIndex: 1, explanation: "Lời nhắn dùng khi không thể gặp trực tiếp." },
    { question: "Ngày nay, phương tiện nào thường thay thế lời nhắn viết tay?", options: ["Tin nhắn điện thoại", "Không có phương tiện nào", "Chỉ có thư tay", "Chỉ có gọi điện"], correctIndex: 0, explanation: "Tin nhắn điện thoại đã thay thế phần lớn lời nhắn viết tay." },
  ]),
  "tieng-viet:3:thuc-hanh-dien-tu-con-thieu-vao-cho-trong": practiceContent("Thực hành", "Điền từ còn thiếu vào chỗ trống", "Hãy nhớ lại cách đọc kỹ câu để chọn từ phù hợp.", [
    { question: "Khi làm bài điền từ, em cần làm gì đầu tiên?", options: ["Điền ngay không cần đọc câu", "Đọc kỹ cả câu để hiểu nghĩa", "Chọn từ bất kỳ", "Bỏ qua không làm"], correctIndex: 1, explanation: "Cần đọc kỹ câu trước khi điền từ." },
    { question: "'Chú chó ___ rất to.' Từ nào phù hợp để điền vào chỗ trống?", options: ["sủa", "này", "và", "nhưng"], correctIndex: 0, explanation: "'Sủa' phù hợp về nghĩa và ngữ pháp trong câu này." },
    { question: "Sau khi điền từ, em nên làm gì?", options: ["Không cần kiểm tra lại", "Đọc lại cả câu để kiểm tra", "Xoá đi ngay", "Không cần làm gì thêm"], correctIndex: 1, explanation: "Nên đọc lại để kiểm tra tính hợp lý." },
    { question: "Bài tập điền từ giúp ích điều gì cho em?", options: ["Mở rộng vốn từ", "Không có ích gì", "Làm bài khó hơn", "Không liên quan đến từ vựng"], correctIndex: 0, explanation: "Bài tập điền từ giúp mở rộng vốn từ của em." },
  ]),
  "tieng-viet:3:luyen-tap-sap-xep-cau-thanh-doan-van-hop-ly": practiceContent("Luyện tập", "Sắp xếp câu thành đoạn văn hợp lý", "Hãy nhớ lại cách nhận biết trình tự hợp lý của các câu.", [
    { question: "Khi sắp xếp câu thành đoạn văn, em cần chú ý điều gì?", options: ["Sắp xếp ngẫu nhiên", "Trình tự hợp lý", "Không cần chú ý gì", "Chỉ cần đủ số câu"], correctIndex: 1, explanation: "Cần sắp xếp theo trình tự hợp lý." },
    { question: "Từ ngữ nào giúp nhận biết trình tự các câu?", options: ["Đầu tiên, sau đó, cuối cùng", "Không có từ ngữ nào giúp ích", "Chỉ cần đếm số câu", "Chỉ cần nhìn độ dài câu"], correctIndex: 0, explanation: "Các từ chỉ thứ tự giúp nhận biết trình tự câu." },
    { question: "Sau khi sắp xếp xong, em nên làm gì?", options: ["Không cần kiểm tra lại", "Đọc lại để kiểm tra tính mạch lạc", "Xoá bỏ đoạn văn", "Không cần làm gì thêm"], correctIndex: 1, explanation: "Đọc lại để kiểm tra đoạn văn mạch lạc." },
    { question: "Kỹ năng sắp xếp ý theo trình tự logic còn quan trọng ở đâu?", options: ["Trong thuyết trình, giải quyết vấn đề", "Không quan trọng ở đâu khác", "Chỉ trong viết văn", "Không liên quan đến kỹ năng khác"], correctIndex: 0, explanation: "Kỹ năng này quan trọng cả trong thuyết trình và giải quyết vấn đề." },
  ]),
  "tieng-viet:3:van-dung-dat-cau-theo-mau-ai-lam-gi": practiceContent("Vận dụng", "Đặt câu theo mẫu Ai làm gì?", "Hãy nhớ lại cấu trúc: phần 'Ai' và phần 'làm gì'.", [
    { question: "Câu 'Bạn Hùng đang vẽ tranh.' thuộc mẫu câu nào?", options: ["Ai làm gì?", "Ai thế nào?", "Ai là gì?", "Không thuộc mẫu nào"], correctIndex: 0, explanation: "Câu có 'bạn Hùng' (Ai) và 'đang vẽ tranh' (làm gì)." },
    { question: "Trong câu 'Chim hót líu lo.', phần nào là 'làm gì'?", options: ["Chim", "Hót líu lo", "Cả câu", "Không có phần nào"], correctIndex: 1, explanation: "'Hót líu lo' là hành động, thuộc phần 'làm gì'." },
    { question: "Câu nào đúng theo mẫu Ai làm gì?", options: ["Trời rất đẹp.", "Em là học sinh.", "Mẹ đang nấu cơm.", "Bầu trời trong xanh."], correctIndex: 2, explanation: "'Mẹ đang nấu cơm' có Ai (Mẹ) và làm gì (đang nấu cơm)." },
    { question: "Mẫu câu Ai làm gì thường dùng để làm gì?", options: ["Kể về hành động", "Giới thiệu tên gọi", "Tả đặc điểm", "Không có tác dụng gì"], correctIndex: 0, explanation: "Mẫu câu này dùng để kể về hành động của người/vật." },
  ]),
  "tieng-viet:3:tro-choi-on-tap-dat-cau-theo-mau-ai-the-nao": practiceContent("Trò chơi ôn tập", "Đặt câu theo mẫu Ai thế nào?", "Hãy nhớ lại cấu trúc: phần 'Ai' và phần 'thế nào'.", [
    { question: "Câu 'Con đường rất dài.' thuộc mẫu câu nào?", options: ["Ai làm gì?", "Ai thế nào?", "Ai là gì?", "Không thuộc mẫu nào"], correctIndex: 1, explanation: "Câu có 'con đường' (Ai) và 'rất dài' (thế nào)." },
    { question: "Trong câu 'Bạn Mai rất thông minh.', phần nào là 'thế nào'?", options: ["Bạn Mai", "Rất thông minh", "Cả câu", "Không có phần nào"], correctIndex: 1, explanation: "'Rất thông minh' miêu tả đặc điểm, thuộc phần 'thế nào'." },
    { question: "Câu nào đúng theo mẫu Ai thế nào?", options: ["Em đang học bài.", "Em là học sinh giỏi.", "Em rất chăm ngoan.", "Em đọc sách."], correctIndex: 2, explanation: "'Em rất chăm ngoan' có Ai (Em) và thế nào (rất chăm ngoan)." },
    { question: "Mẫu câu Ai thế nào thường dùng loại từ nào ở phần sau?", options: ["Tính từ", "Chỉ số từ", "Chỉ đại từ", "Không dùng từ loại nào"], correctIndex: 0, explanation: "Phần 'thế nào' thường dùng tính từ để miêu tả đặc điểm." },
  ]),
  "tieng-viet:3:thu-thach-nho-dat-cau-theo-mau-ai-la-gi": practiceContent("Thử thách nhỏ", "Đặt câu theo mẫu Ai là gì?", "Hãy nhớ lại cấu trúc: phần 'Ai' và phần 'là gì'.", [
    { question: "Câu 'Việt Nam là một nước ở Đông Nam Á.' thuộc mẫu câu nào?", options: ["Ai làm gì?", "Ai thế nào?", "Ai là gì?", "Không thuộc mẫu nào"], correctIndex: 2, explanation: "Câu có 'Việt Nam' (Ai) và 'là một nước ở Đông Nam Á' (là gì)." },
    { question: "Trong câu 'Mẹ em là giáo viên.', phần nào là phần 'là gì'?", options: ["Mẹ em", "Là giáo viên", "Cả câu", "Không có phần nào"], correctIndex: 1, explanation: "'Là giáo viên' giới thiệu nghề nghiệp của mẹ." },
    { question: "Câu nào đúng theo mẫu Ai là gì?", options: ["Con chó đang chạy.", "Con chó là vật nuôi trung thành.", "Con chó rất to.", "Con chó sủa to."], correctIndex: 1, explanation: "'Con chó là vật nuôi trung thành' có Ai và là gì." },
    { question: "Mẫu câu Ai là gì thường dùng để làm gì?", options: ["Giới thiệu, nhận định về đối tượng", "Kể về hành động", "Tả đặc điểm", "Không có tác dụng gì"], correctIndex: 0, explanation: "Mẫu câu này dùng để giới thiệu, nhận định về đối tượng." },
  ]),
  "tieng-viet:3:thuc-hanh-luyen-doc-dien-cam-doan-van": practiceContent("Thực hành", "Luyện đọc diễn cảm đoạn văn", "Hãy nhớ lại cách ngắt nghỉ, lên xuống giọng khi đọc.", [
    { question: "Đọc diễn cảm là gì?", options: ["Đọc thật nhanh", "Đọc thể hiện đúng ngữ điệu, cảm xúc", "Đọc thật to", "Đọc không cần chú ý gì"], correctIndex: 1, explanation: "Đọc diễn cảm cần thể hiện đúng ngữ điệu, cảm xúc." },
    { question: "Khi gặp dấu phẩy, em nên làm gì?", options: ["Ngắt hơi ngắn", "Nghỉ hơi dài", "Không ngắt nghỉ gì", "Đọc thật nhanh qua"], correctIndex: 0, explanation: "Dấu phẩy thường yêu cầu ngắt hơi ngắn." },
    { question: "Khi đọc câu hỏi, giọng đọc nên như thế nào?", options: ["Giữ nguyên giọng", "Lên giọng ở cuối câu", "Hạ giọng thấp", "Đọc thật nhỏ"], correctIndex: 1, explanation: "Câu hỏi thường cần lên giọng ở cuối câu." },
    { question: "Đọc diễn cảm giúp ích gì cho việc học?", options: ["Không giúp ích gì", "Hiểu bài tốt hơn, rèn kỹ năng thuyết trình", "Làm chậm việc đọc", "Không liên quan đến việc học"], correctIndex: 1, explanation: "Đọc diễn cảm giúp hiểu bài tốt hơn và rèn kỹ năng thuyết trình." },
  ]),
  "tieng-viet:3:luyen-tap-luyen-doc-dien-cam-bai-tho": practiceContent("Luyện tập", "Luyện đọc diễn cảm bài thơ", "Hãy nhớ lại cách ngắt nhịp và thể hiện cảm xúc khi đọc thơ.", [
    { question: "Khi đọc thơ, em cần chú ý điều gì đặc biệt?", options: ["Không cần chú ý gì", "Ngắt nhịp đúng theo cấu trúc câu thơ", "Đọc thật nhanh", "Bỏ qua vần điệu"], correctIndex: 1, explanation: "Ngắt nhịp đúng giúp bài thơ được đọc hay hơn." },
    { question: "Thơ lục bát thường có nhịp ngắt phổ biến nào?", options: ["1/1/1", "2/2/2 hoặc 2/4", "5/5", "Không có nhịp cố định"], correctIndex: 1, explanation: "Thơ lục bát thường ngắt nhịp 2/2/2 hoặc 2/4." },
    { question: "Để đọc diễn cảm bài thơ hay, em cần hiểu điều gì trước?", options: ["Không cần hiểu gì", "Nội dung và cảm xúc bài thơ", "Chỉ cần đọc nhanh", "Chỉ cần đọc to"], correctIndex: 1, explanation: "Hiểu nội dung, cảm xúc giúp đọc diễn cảm đúng hơn." },
    { question: "Nhiều bài thơ thiếu nhi Việt Nam thường được làm gì để dễ nhớ hơn?", options: ["Phổ nhạc thành bài hát", "Không làm gì cả", "Dịch sang tiếng nước ngoài", "Chỉ đọc một lần"], correctIndex: 0, explanation: "Nhiều bài thơ thiếu nhi được phổ nhạc thành bài hát." },
  ]),
  "tieng-viet:3:van-dung-tom-tat-noi-dung-mot-doan-van": practiceContent("Vận dụng", "Tóm tắt nội dung một đoạn văn", "Hãy nhớ lại cách xác định ý chính rồi diễn đạt ngắn gọn.", [
    { question: "Tóm tắt đoạn văn là gì?", options: ["Chép lại nguyên văn", "Trình bày ngắn gọn ý chính", "Bỏ qua không đọc", "Viết dài hơn bản gốc"], correctIndex: 1, explanation: "Tóm tắt là trình bày ngắn gọn ý chính." },
    { question: "Khi tóm tắt, em cần chú ý điều gì?", options: ["Giữ đúng ý chính", "Thêm ý kiến cá nhân", "Bỏ hết nội dung", "Không cần đọc kỹ"], correctIndex: 0, explanation: "Cần giữ đúng ý chính khi tóm tắt." },
    { question: "Để tóm tắt tốt, bước đầu tiên em cần làm gì?", options: ["Viết ngay không cần đọc", "Đọc kỹ và xác định ý chính", "Chỉ đọc câu đầu", "Không cần đọc gì"], correctIndex: 1, explanation: "Cần đọc kỹ để xác định đúng ý chính." },
    { question: "Kỹ năng tóm tắt được sử dụng nhiều khi nào?", options: ["Khi học các môn học khác và đi làm", "Không dùng ở đâu khác", "Chỉ dùng trong môn Tiếng Việt", "Chỉ dùng khi còn nhỏ"], correctIndex: 0, explanation: "Kỹ năng tóm tắt rất hữu ích khi học các môn khác và cả khi đi làm." },
  ]),
  "tieng-viet:3:tro-choi-on-tap-nhan-biet-doan-van-va-cau-chu-de": practiceContent("Trò chơi ôn tập", "Nhận biết đoạn văn và câu chủ đề", "Hãy nhớ lại: câu chủ đề nêu ý chính của đoạn văn.", [
    { question: "Câu chủ đề trong đoạn văn có vai trò gì?", options: ["Không có vai trò gì", "Nêu ý chính của cả đoạn văn", "Chỉ để trang trí", "Luôn là câu cuối cùng"], correctIndex: 1, explanation: "Câu chủ đề nêu ý chính của đoạn văn." },
    { question: "Câu chủ đề thường xuất hiện ở vị trí nào?", options: ["Chỉ ở giữa đoạn", "Đầu hoặc cuối đoạn", "Không có vị trí cố định", "Luôn ở dòng thứ hai"], correctIndex: 1, explanation: "Câu chủ đề thường đứng ở đầu hoặc cuối đoạn." },
    { question: "Đoạn văn là gì?", options: ["Một từ đơn lẻ", "Nhiều câu liên kết thể hiện một ý chính", "Một chữ cái", "Không có định nghĩa cụ thể"], correctIndex: 1, explanation: "Đoạn văn gồm nhiều câu liên kết, thể hiện một ý chính." },
    { question: "Nhận biết câu chủ đề giúp ích gì khi đọc?", options: ["Đọc hiểu nhanh hơn", "Không có ích gì", "Làm bài khó hơn", "Không liên quan đến đọc hiểu"], correctIndex: 0, explanation: "Nhận biết câu chủ đề giúp em đọc hiểu nhanh và hiệu quả hơn." },
  ]),
  "tieng-viet:3:thu-thach-nho-viet-doan-van-ta-buoi-le-o-truong": practiceContent("Thử thách nhỏ", "Viết đoạn văn tả buổi lễ ở trường", "Hãy nhớ lại cách tả theo trình tự trước, trong và sau buổi lễ.", [
    { question: "Buổi lễ nào thường diễn ra vào đầu năm học?", options: ["Lễ khai giảng", "Lễ tổng kết", "Lễ 20/11", "Lễ Giáng sinh"], correctIndex: 0, explanation: "Lễ khai giảng thường diễn ra vào đầu năm học." },
    { question: "Khi tả buổi lễ ở trường, em nên miêu tả những gì?", options: ["Không khí, hoạt động chính, cảm xúc", "Chỉ cần tên buổi lễ", "Không cần miêu tả chi tiết", "Chỉ cần liệt kê tên người tham gia"], correctIndex: 0, explanation: "Cần miêu tả không khí, hoạt động chính và cảm xúc." },
    { question: "Ngày 20/11 là ngày lễ gì?", options: ["Ngày Nhà giáo Việt Nam", "Ngày Quốc khánh", "Ngày Phụ nữ Việt Nam", "Ngày Thiếu nhi"], correctIndex: 0, explanation: "Ngày 20/11 là Ngày Nhà giáo Việt Nam." },
    { question: "Lễ khai giảng ở Việt Nam có nghi thức đặc biệt nào?", options: ["Đánh trống khai trường", "Không có nghi thức nào", "Chỉ có phát biểu", "Chỉ có văn nghệ"], correctIndex: 0, explanation: "Đánh trống khai trường là nghi thức truyền thống của lễ khai giảng." },
  ]),
  "tieng-viet:3:thuc-hanh-tu-ngu-chi-dac-diem-ngoai-hinh": practiceContent("Thực hành", "Từ ngữ chỉ đặc điểm ngoại hình", "Hãy nhớ lại các từ ngữ miêu tả khuôn mặt, dáng người, mái tóc.", [
    { question: "Từ nào miêu tả dáng người cao?", options: ["Thấp bé", "Cao ráo", "Gầy gò", "Tròn trịa"], correctIndex: 1, explanation: "'Cao ráo' miêu tả dáng người cao." },
    { question: "Từ nào miêu tả mái tóc?", options: ["Đen nhánh", "Chăm chỉ", "Nhanh nhẹn", "Hiền lành"], correctIndex: 0, explanation: "'Đen nhánh' miêu tả màu sắc mái tóc." },
    { question: "Câu nào miêu tả đúng đặc điểm ngoại hình?", options: ["Bạn ấy rất chăm học.", "Bạn ấy có đôi mắt to tròn.", "Bạn ấy rất tốt bụng.", "Bạn ấy học giỏi Toán."], correctIndex: 1, explanation: "Câu này miêu tả đặc điểm ngoại hình (đôi mắt)." },
    { question: "Miêu tả ngoại hình sinh động giúp ích gì cho bài văn?", options: ["Giúp người đọc hình dung rõ nét về nhân vật", "Không có tác dụng gì", "Làm bài văn khó hiểu hơn", "Không liên quan đến nhân vật"], correctIndex: 0, explanation: "Miêu tả sinh động giúp người đọc hình dung rõ về nhân vật." },
  ]),
  "tieng-viet:3:luyen-tap-tu-ngu-chi-tinh-cach-con-nguoi": practiceContent("Luyện tập", "Từ ngữ chỉ tính cách con người", "Hãy nhớ lại các từ ngữ miêu tả tính cách tốt và tính cách cần rèn luyện.", [
    { question: "Từ nào miêu tả tính cách tốt?", options: ["Nóng nảy", "Hiền lành", "Lười biếng", "Nhút nhát"], correctIndex: 1, explanation: "'Hiền lành' là từ miêu tả tính cách tốt." },
    { question: "Từ nào miêu tả tính cách cần rèn luyện thêm?", options: ["Chăm chỉ", "Thật thà", "Lười biếng", "Tốt bụng"], correctIndex: 2, explanation: "'Lười biếng' là tính cách cần rèn luyện." },
    { question: "Câu nào miêu tả đúng về tính cách?", options: ["Bạn ấy cao 1m30.", "Bạn ấy rất tốt bụng, hay giúp đỡ bạn bè.", "Bạn ấy có mái tóc dài.", "Bạn ấy mặc áo màu xanh."], correctIndex: 1, explanation: "Câu này miêu tả tính cách (tốt bụng)." },
    { question: "Cách nào giúp miêu tả tính cách thuyết phục hơn?", options: ["Qua hành động cụ thể", "Chỉ dùng tính từ đơn thuần", "Không cần ví dụ", "Không miêu tả gì"], correctIndex: 0, explanation: "Miêu tả qua hành động cụ thể thuyết phục hơn." },
  ]),
  "tieng-viet:3:van-dung-on-tap-giua-hoc-ky-1": practiceContent("Vận dụng", "Ôn tập giữa học kỳ 1", "Hãy ôn lại kiến thức trọng tâm giữa học kỳ 1.", [
    { question: "Từ nào là động từ?", options: ["Học sinh", "Chạy", "Xinh đẹp", "Trường học"], correctIndex: 1, explanation: "'Chạy' chỉ hoạt động, là động từ." },
    { question: "Câu nào là câu cảm?", options: ["Em đi học.", "Bạn tên là gì?", "Ôi, đẹp quá!", "Em hãy ngồi xuống."], correctIndex: 2, explanation: "Câu cảm bộc lộ cảm xúc, kết thúc bằng dấu chấm than." },
    { question: "Khi tả con vật, em cần miêu tả những gì?", options: ["Hình dáng và hoạt động", "Không cần miêu tả gì", "Chỉ tên con vật", "Chỉ giá tiền"], correctIndex: 0, explanation: "Cần miêu tả hình dáng và hoạt động của con vật." },
    { question: "Một bức thư cần có phần nào ở đầu?", options: ["Chữ ký", "Địa điểm, ngày tháng, lời chào", "Kết luận", "Không cần phần đầu"], correctIndex: 1, explanation: "Đầu thư cần có địa điểm, ngày tháng và lời chào." },
  ]),
  "tieng-viet:3:tro-choi-on-tap-on-tap-cuoi-hoc-ky-1": practiceContent("Trò chơi ôn tập", "Ôn tập cuối học kỳ 1", "Hãy ôn lại toàn bộ kiến thức Tiếng Việt học kỳ 1.", [
    { question: "Biện pháp nào so sánh hai sự vật giống nhau?", options: ["Nhân hoá", "So sánh", "Không có biện pháp nào", "Điệp từ"], correctIndex: 1, explanation: "So sánh là đối chiếu hai sự vật có điểm giống nhau." },
    { question: "Từ nào là tính từ?", options: ["Chạy", "Xinh đẹp", "Học sinh", "Trường học"], correctIndex: 1, explanation: "'Xinh đẹp' chỉ đặc điểm, là tính từ." },
    { question: "Khi kể chuyện, em nên kể theo trình tự nào?", options: ["Lộn xộn", "Mở đầu, diễn biến, kết thúc", "Chỉ kể kết thúc", "Không cần trình tự"], correctIndex: 1, explanation: "Kể theo trình tự giúp câu chuyện rõ ràng." },
    { question: "Câu 'Bạn ấy học rất giỏi.' thuộc mẫu câu nào?", options: ["Ai làm gì?", "Ai thế nào?", "Ai là gì?", "Không thuộc mẫu nào"], correctIndex: 1, explanation: "Câu này có Ai (bạn ấy) và thế nào (học rất giỏi)." },
  ]),
  "tieng-viet:3:thu-thach-nho-on-tap-giua-hoc-ky-2": practiceContent("Thử thách nhỏ", "Ôn tập giữa học kỳ 2", "Hãy ôn lại kiến thức trọng tâm giữa học kỳ 2.", [
    { question: "Câu nào là câu khiến?", options: ["Em đi học.", "Em hãy giữ trật tự.", "Em đi học chưa?", "Ôi, đẹp quá!"], correctIndex: 1, explanation: "Câu khiến nêu yêu cầu, có từ 'hãy'." },
    { question: "Văn bản thông tin khác truyện kể ở điểm nào?", options: ["Cung cấp kiến thức thực tế", "Luôn có nhân vật tưởng tượng", "Không có tiêu đề", "Không có sự khác biệt"], correctIndex: 0, explanation: "Văn bản thông tin cung cấp kiến thức thực tế." },
    { question: "Khi tả cây cối, em nên tả theo trình tự nào?", options: ["Ngẫu nhiên", "Từ gốc đến ngọn hoặc theo mùa", "Không cần trình tự", "Chỉ tả một chi tiết"], correctIndex: 1, explanation: "Tả theo trình tự giúp bài văn mạch lạc." },
    { question: "Đọc nhiều bài văn mẫu hay giúp ích gì?", options: ["Học cách dùng từ ngữ phong phú", "Không có ích gì", "Làm bài khó hơn", "Không liên quan đến viết văn"], correctIndex: 0, explanation: "Đọc bài văn mẫu hay giúp học cách dùng từ ngữ phong phú." },
  ]),
  "tieng-viet:3:thuc-hanh-thi-ke-chuyen-chuan-bi-va-trinh-bay": practiceContent("Thực hành", "Thi kể chuyện: chuẩn bị và trình bày", "Hãy nhớ lại cách chuẩn bị và trình bày tự tin khi kể chuyện.", [
    { question: "Trước khi thi kể chuyện, em cần chuẩn bị gì?", options: ["Không cần chuẩn bị gì", "Nắm chắc nội dung câu chuyện", "Chỉ cần nhớ tên truyện", "Không cần luyện tập"], correctIndex: 1, explanation: "Cần nắm chắc nội dung để kể tự tin, mạch lạc." },
    { question: "Để luyện tập trước khi kể chuyện, em có thể làm gì?", options: ["Không cần luyện tập", "Tập kể trước gương hoặc cho người thân nghe", "Chỉ đọc một lần", "Không cần tập nói to"], correctIndex: 1, explanation: "Luyện tập trước giúp em tự tin hơn." },
    { question: "Khi kể chuyện trước lớp, em nên có thái độ như thế nào?", options: ["Rụt rè, nói nhỏ", "Tự tin, nói rõ ràng", "Không cần nhìn ai", "Nói thật nhanh"], correctIndex: 1, explanation: "Tự tin và nói rõ ràng giúp bài kể chuyện thuyết phục hơn." },
    { question: "Kỹ năng kể chuyện trước đám đông là nền tảng cho kỹ năng gì sau này?", options: ["Kỹ năng thuyết trình", "Không liên quan đến kỹ năng nào", "Chỉ dùng khi còn nhỏ", "Kỹ năng vẽ tranh"], correctIndex: 0, explanation: "Đây là nền tảng quan trọng cho kỹ năng thuyết trình sau này." },
  ]),
  "tieng-viet:3:luyen-tap-viet-doan-van-ta-mot-buoi-hoat-dong-ngoai-khoa": practiceContent("Luyện tập", "Viết đoạn văn tả một buổi hoạt động ngoại khoá", "Hãy nhớ lại các nội dung cần miêu tả trong đoạn văn.", [
    { question: "Hoạt động nào là hoạt động ngoại khoá?", options: ["Làm bài kiểm tra", "Cắm trại, dã ngoại", "Ngủ trưa", "Chép bài"], correctIndex: 1, explanation: "Cắm trại, dã ngoại là hoạt động ngoại khoá." },
    { question: "Khi tả buổi hoạt động ngoại khoá, em nên miêu tả gì?", options: ["Không cần miêu tả gì", "Thời gian, hoạt động, cảm xúc", "Chỉ cần tên hoạt động", "Chỉ cần liệt kê người tham gia"], correctIndex: 1, explanation: "Cần miêu tả đầy đủ thời gian, hoạt động và cảm xúc." },
    { question: "Đoạn văn tả hoạt động ngoại khoá nên kết thúc bằng gì?", options: ["Một phép tính", "Cảm nghĩ của em", "Không cần kết thúc", "Chỉ cần liệt kê"], correctIndex: 1, explanation: "Nên kết thúc bằng cảm nghĩ để đoạn văn trọn vẹn." },
    { question: "Hoạt động ngoại khoá giúp học sinh phát triển điều gì?", options: ["Toàn diện, cả kiến thức và kỹ năng sống", "Không giúp ích gì", "Chỉ giúp giải trí", "Không liên quan đến học tập"], correctIndex: 0, explanation: "Hoạt động ngoại khoá giúp phát triển toàn diện cả kiến thức và kỹ năng." },
  ]),
  "tieng-viet:3:van-dung-phan-biet-cau-don-va-cau-ghep-buoc-dau": practiceContent("Vận dụng", "Phân biệt câu đơn và câu ghép (bước đầu)", "Hãy nhớ lại: câu đơn có một ý, câu ghép có từ hai ý nối với nhau.", [
    { question: "Câu nào là câu đơn?", options: ["Em đi học.", "Trời mưa nên em ở nhà.", "Em học bài và anh xem tivi.", "Vì trời lạnh nên em mặc áo ấm."], correctIndex: 0, explanation: "'Em đi học' chỉ có một ý, là câu đơn." },
    { question: "Câu nào là câu ghép?", options: ["Em đi học.", "Bông hoa đẹp.", "Trời mưa nên em ở nhà.", "Em rất vui."], correctIndex: 2, explanation: "'Trời mưa nên em ở nhà' có hai ý nối với nhau." },
    { question: "Câu ghép thường có đặc điểm gì?", options: ["Chỉ có một ý", "Có từ hai ý trở lên nối với nhau", "Không có động từ", "Luôn là câu hỏi"], correctIndex: 1, explanation: "Câu ghép có từ hai cụm chủ-vị trở lên." },
    { question: "Câu ghép giúp ích gì khi diễn đạt?", options: ["Diễn đạt được nhiều ý phức tạp hơn", "Không có tác dụng gì", "Làm câu văn khó hiểu hơn", "Không liên quan đến diễn đạt"], correctIndex: 0, explanation: "Câu ghép giúp diễn đạt được nhiều ý phức tạp trong một câu." },
  ]),
  "tieng-viet:3:tro-choi-on-tap-tu-ngu-ve-bao-ve-moi-truong": practiceContent("Trò chơi ôn tập", "Từ ngữ về bảo vệ môi trường", "Hãy nhớ lại các từ ngữ và hành động bảo vệ môi trường.", [
    { question: "Từ nào thuộc chủ điểm bảo vệ môi trường?", options: ["Tái chế", "Con mèo", "Quyển sách", "Cái bàn"], correctIndex: 0, explanation: "'Tái chế' liên quan đến bảo vệ môi trường." },
    { question: "Hành động nào giúp bảo vệ môi trường?", options: ["Xả rác bừa bãi", "Trồng cây xanh", "Lãng phí nước", "Chặt phá rừng"], correctIndex: 1, explanation: "Trồng cây xanh là hành động bảo vệ môi trường." },
    { question: "Từ 'ô nhiễm' có nghĩa là gì?", options: ["Sạch sẽ, trong lành", "Bị bẩn, có hại cho môi trường", "Tươi mát", "Không có nghĩa gì"], correctIndex: 1, explanation: "'Ô nhiễm' nghĩa là bị bẩn, có hại cho môi trường." },
    { question: "Ngày Môi trường Thế giới được tổ chức vào ngày nào?", options: ["5/6", "1/6", "20/11", "8/3"], correctIndex: 0, explanation: "Ngày Môi trường Thế giới là ngày 5/6 hàng năm." },
  ]),
  "tieng-viet:3:thu-thach-nho-tu-ngu-ve-an-toan-giao-thong": practiceContent("Thử thách nhỏ", "Từ ngữ về an toàn giao thông", "Hãy nhớ lại các từ ngữ về phương tiện và an toàn giao thông.", [
    { question: "Từ nào thuộc chủ điểm an toàn giao thông?", options: ["Mũ bảo hiểm", "Quyển sách", "Con mèo", "Cái bàn"], correctIndex: 0, explanation: "'Mũ bảo hiểm' liên quan đến an toàn giao thông." },
    { question: "Hành động nào thể hiện an toàn giao thông?", options: ["Vượt đèn đỏ", "Đội mũ bảo hiểm khi đi xe máy", "Đi sai làn đường", "Chạy qua đường bất cẩn"], correctIndex: 1, explanation: "Đội mũ bảo hiểm thể hiện an toàn giao thông." },
    { question: "Đèn tín hiệu giao thông màu đỏ có ý nghĩa gì?", options: ["Được đi", "Dừng lại", "Đi chậm", "Không có ý nghĩa gì"], correctIndex: 1, explanation: "Đèn đỏ báo hiệu phải dừng lại." },
    { question: "Đội mũ bảo hiểm đúng cách giúp giảm nguy cơ gì?", options: ["Chấn thương đầu", "Không có tác dụng gì", "Tăng tốc độ", "Không liên quan đến an toàn"], correctIndex: 0, explanation: "Đội mũ bảo hiểm giúp giảm nguy cơ chấn thương đầu." },
  ]),
  "tieng-viet:3:thuc-hanh-doc-hieu-van-ban-huong-dan": practiceContent("Thực hành", "Đọc hiểu văn bản hướng dẫn", "Hãy nhớ lại cách đọc các bước theo đúng thứ tự.", [
    { question: "Văn bản hướng dẫn thường có đặc điểm gì?", options: ["Không có thứ tự", "Trình bày các bước theo thứ tự", "Chỉ có một câu", "Không có nội dung cụ thể"], correctIndex: 1, explanation: "Văn bản hướng dẫn trình bày các bước theo thứ tự." },
    { question: "Khi đọc văn bản hướng dẫn, em cần chú ý điều gì?", options: ["Không cần chú ý gì", "Thứ tự các bước thực hiện", "Chỉ đọc bước cuối", "Bỏ qua các từ chỉ thứ tự"], correctIndex: 1, explanation: "Cần chú ý thứ tự các bước để thực hiện đúng." },
    { question: "Ví dụ nào là một văn bản hướng dẫn?", options: ["Truyện cổ tích", "Hướng dẫn cách gấp giấy origami", "Bài thơ về mẹ", "Câu chuyện tưởng tượng"], correctIndex: 1, explanation: "Hướng dẫn gấp giấy trình bày các bước cụ thể." },
    { question: "Kỹ năng đọc hiểu văn bản hướng dẫn hữu ích khi nào?", options: ["Khi đọc hướng dẫn sử dụng đồ chơi, thiết bị", "Không hữu ích khi nào", "Chỉ khi đi học", "Chỉ khi còn nhỏ"], correctIndex: 0, explanation: "Kỹ năng này rất hữu ích khi đọc hướng dẫn sử dụng đồ vật." },
  ]),
  "tieng-viet:3:luyen-tap-viet-doan-van-ta-do-choi-yeu-thich": practiceContent("Luyện tập", "Viết đoạn văn tả đồ chơi yêu thích", "Hãy nhớ lại cách quan sát và miêu tả đồ chơi.", [
    { question: "Khi tả đồ chơi, em cần quan sát những gì?", options: ["Chỉ tên đồ chơi", "Hình dáng, màu sắc, cách chơi", "Không cần quan sát", "Chỉ giá tiền"], correctIndex: 1, explanation: "Cần quan sát đầy đủ hình dáng, màu sắc, cách chơi." },
    { question: "Từ nào phù hợp để tả một con gấu bông?", options: ["Sắc nhọn", "Mềm mại", "Cứng ngắc", "Nóng bỏng"], correctIndex: 1, explanation: "'Mềm mại' phù hợp để tả gấu bông." },
    { question: "Đoạn văn tả đồ chơi nên có thêm nội dung gì?", options: ["Công thức toán học", "Tình cảm của em với đồ chơi", "Không cần thêm gì", "Chỉ cần liệt kê tên"], correctIndex: 1, explanation: "Nên thể hiện tình cảm để đoạn văn thêm sinh động." },
    { question: "Đồ chơi truyền thống nào của Việt Nam đã có từ hàng trăm năm trước?", options: ["Tò he", "Điện thoại đồ chơi", "Robot", "Máy tính bảng"], correctIndex: 0, explanation: "Tò he là đồ chơi truyền thống có từ lâu đời của Việt Nam." },
  ]),
  "tieng-viet:3:van-dung-viet-doan-van-ke-ve-ngay-tet": practiceContent("Vận dụng", "Viết đoạn văn kể về ngày Tết", "Hãy nhớ lại các hoạt động và không khí ngày Tết.", [
    { question: "Hoạt động nào thường diễn ra trong ngày Tết?", options: ["Đi chúc Tết, nhận lì xì", "Đi học bình thường", "Không có hoạt động gì đặc biệt", "Làm bài kiểm tra"], correctIndex: 0, explanation: "Đi chúc Tết, nhận lì xì là hoạt động quen thuộc ngày Tết." },
    { question: "Loài hoa nào thường xuất hiện ở miền Bắc vào dịp Tết?", options: ["Hoa mai", "Hoa đào", "Hoa hồng", "Hoa sen"], correctIndex: 1, explanation: "Hoa đào thường xuất hiện ở miền Bắc vào dịp Tết." },
    { question: "Món ăn nào đặc trưng của ngày Tết miền Bắc?", options: ["Bánh chưng", "Bánh mì", "Phở", "Bún chả"], correctIndex: 0, explanation: "Bánh chưng là món ăn đặc trưng ngày Tết miền Bắc." },
    { question: "Tết Nguyên Đán đánh dấu điều gì?", options: ["Sự khởi đầu của một năm mới", "Kết thúc năm học", "Ngày lễ tôn giáo", "Không có ý nghĩa gì"], correctIndex: 0, explanation: "Tết Nguyên Đán đánh dấu sự khởi đầu của năm mới." },
  ]),
  "tieng-viet:3:tro-choi-on-tap-viet-doan-van-ke-ve-mua-he": practiceContent("Trò chơi ôn tập", "Viết đoạn văn kể về mùa hè", "Hãy nhớ lại các hoạt động và đặc điểm của mùa hè.", [
    { question: "Loài hoa nào thường nở rộ vào mùa hè, gắn với tuổi học trò?", options: ["Hoa đào", "Hoa phượng", "Hoa mai", "Hoa cúc"], correctIndex: 1, explanation: "Hoa phượng thường nở đỏ rực vào mùa hè." },
    { question: "Âm thanh nào đặc trưng của mùa hè?", options: ["Tiếng ve kêu", "Tiếng gió lạnh", "Tiếng lá rụng", "Tiếng mưa phùn"], correctIndex: 0, explanation: "Tiếng ve kêu là âm thanh đặc trưng của mùa hè." },
    { question: "Hoạt động nào thường diễn ra vào mùa hè?", options: ["Đi biển, học bơi", "Mặc áo ấm", "Đón Tết", "Khai giảng năm học"], correctIndex: 0, explanation: "Đi biển, học bơi là hoạt động phổ biến mùa hè." },
    { question: "Mùa hè ở Việt Nam thường kéo dài từ tháng mấy đến tháng mấy?", options: ["Tháng 5 đến tháng 8", "Tháng 1 đến tháng 3", "Tháng 9 đến tháng 11", "Tháng 12 đến tháng 2"], correctIndex: 0, explanation: "Mùa hè ở Việt Nam thường kéo dài từ tháng 5 đến tháng 8." },
  ]),
  "tieng-viet:3:thu-thach-nho-tro-choi-o-chu-tu-vung-tieng-viet": practiceContent("Thử thách nhỏ", "Trò chơi: Ô chữ từ vựng tiếng Việt", "Hãy nhớ lại cách giải ô chữ dựa vào gợi ý.", [
    { question: "Ô chữ từ vựng giúp ích điều gì cho việc học?", options: ["Không có ích gì", "Ôn luyện từ vựng một cách thú vị", "Làm bài khó hơn", "Không liên quan đến Tiếng Việt"], correctIndex: 1, explanation: "Ô chữ giúp ôn luyện từ vựng thú vị." },
    { question: "Khi chơi ô chữ, em cần dựa vào đâu để điền từ?", options: ["Đoán ngẫu nhiên", "Gợi ý cho trước", "Không cần gợi ý", "Chỉ đếm số ô trống"], correctIndex: 1, explanation: "Cần dựa vào gợi ý để tìm từ phù hợp." },
    { question: "Từ điền vào ô chữ cần đảm bảo điều gì?", options: ["Đúng số lượng chữ cái quy định", "Không cần đúng số lượng", "Chỉ cần đúng nghĩa", "Không cần liên quan đến gợi ý"], correctIndex: 0, explanation: "Từ điền cần đúng số lượng chữ cái theo ô chữ." },
    { question: "Trò chơi ô chữ (crossword) được phát minh từ khoảng thời gian nào?", options: ["Đầu thế kỷ 20", "Thời cổ đại", "Thế kỷ 21", "Không rõ thời gian"], correctIndex: 0, explanation: "Trò chơi ô chữ được phát minh từ đầu thế kỷ 20." },
  ]),
  "tieng-viet:3:thuc-hanh-tro-choi-noi-cau-dung-nghia": practiceContent("Thực hành", "Trò chơi: Nối câu đúng nghĩa", "Hãy nhớ lại cách nối các vế câu để tạo thành câu có nghĩa.", [
    { question: "Trò chơi nối câu giúp rèn luyện kỹ năng gì?", options: ["Kỹ năng vẽ tranh", "Kỹ năng đặt câu có nghĩa", "Kỹ năng tính toán", "Kỹ năng hát"], correctIndex: 1, explanation: "Trò chơi giúp rèn kỹ năng đặt câu có nghĩa." },
    { question: "Khi nối câu, em cần đảm bảo điều gì?", options: ["Câu có nghĩa hợp lý", "Không cần có nghĩa", "Câu càng dài càng tốt", "Không cần đúng ngữ pháp"], correctIndex: 0, explanation: "Câu nối cần có nghĩa hợp lý, đúng ngữ pháp." },
    { question: "Câu nào có nghĩa hợp lý?", options: ["Em đi học vì trời đẹp.", "Em ăn cơm vì đói bụng.", "Em ngủ vì học giỏi.", "Em vui vì trời mưa to."], correctIndex: 1, explanation: "'Em ăn cơm vì đói bụng' là câu có nghĩa hợp lý, logic." },
    { question: "Chơi các trò chơi ngôn ngữ thường xuyên giúp trẻ phát triển điều gì?", options: ["Tư duy ngôn ngữ nhanh hơn", "Không có tác dụng gì", "Làm chậm phát triển", "Không liên quan đến ngôn ngữ"], correctIndex: 0, explanation: "Chơi trò chơi ngôn ngữ giúp phát triển tư duy ngôn ngữ nhanh hơn." },
  ]),
  "tieng-viet:3:luyen-tap-luyen-viet-chu-dep-dung-chinh-ta": practiceContent("Luyện tập", "Luyện viết chữ đẹp, đúng chính tả", "Hãy nhớ lại tư thế ngồi, cách cầm bút khi viết chữ đẹp.", [
    { question: "Để viết chữ đẹp, em cần chú ý điều gì?", options: ["Ngồi đúng tư thế, cầm bút đúng cách", "Viết thật nhanh", "Không cần chú ý gì", "Viết tuỳ ý"], correctIndex: 0, explanation: "Tư thế ngồi và cách cầm bút đúng giúp viết chữ đẹp hơn." },
    { question: "Để viết đúng chính tả, em nên làm gì?", options: ["Không cần luyện tập", "Ghi nhớ cách viết đúng và luyện tập thường xuyên", "Viết theo cảm tính", "Không cần đọc sách"], correctIndex: 1, explanation: "Ghi nhớ và luyện tập thường xuyên giúp viết đúng chính tả." },
    { question: "Viết chậm rãi, cẩn thận mang lại lợi ích gì?", options: ["Không có lợi ích gì", "Chữ đẹp hơn, ít lỗi chính tả hơn", "Làm bài chậm hơn", "Không có tác dụng"], correctIndex: 1, explanation: "Viết cẩn thận giúp chữ đẹp hơn, giảm lỗi chính tả." },
    { question: "Cuộc thi nào từng phổ biến ở trường học Việt Nam liên quan đến chữ viết?", options: ["Thi vở sạch chữ đẹp", "Thi chạy nhanh", "Thi vẽ tranh", "Thi hát"], correctIndex: 0, explanation: "'Thi vở sạch chữ đẹp' từng là cuộc thi phổ biến ở trường học." },
  ]),
  "tieng-viet:3:van-dung-phan-biet-cac-dau-cau-da-hoc": practiceContent("Vận dụng", "Phân biệt các dấu câu đã học", "Hãy nhớ lại công dụng của từng loại dấu câu.", [
    { question: "Dấu nào dùng để kết thúc câu kể?", options: ["Dấu chấm hỏi", "Dấu chấm", "Dấu chấm than", "Dấu phẩy"], correctIndex: 1, explanation: "Dấu chấm dùng để kết thúc câu kể." },
    { question: "Dấu nào dùng để ngăn cách các thành phần trong câu?", options: ["Dấu chấm", "Dấu phẩy", "Dấu chấm than", "Dấu hai chấm"], correctIndex: 1, explanation: "Dấu phẩy dùng để ngăn cách các thành phần trong câu." },
    { question: "Dấu nào dùng để kết thúc câu bộc lộ cảm xúc?", options: ["Dấu chấm", "Dấu phẩy", "Dấu chấm than", "Dấu hai chấm"], correctIndex: 2, explanation: "Dấu chấm than dùng để kết thúc câu cảm." },
    { question: "Nếu viết văn không có dấu câu, điều gì sẽ xảy ra?", options: ["Người đọc dễ hiểu sai ý", "Không ảnh hưởng gì", "Câu văn hay hơn", "Không có tác động gì"], correctIndex: 0, explanation: "Không có dấu câu khiến người đọc khó hiểu, dễ hiểu sai ý." },
  ]),
  "tieng-viet:3:tro-choi-on-tap-viet-doan-van-ta-nguoi-ban-than": practiceContent("Trò chơi ôn tập", "Viết đoạn văn tả người bạn thân", "Hãy nhớ lại cách miêu tả ngoại hình, tính cách bạn thân.", [
    { question: "Khi tả người bạn thân, em cần miêu tả những gì?", options: ["Chỉ tên bạn", "Ngoại hình và tính cách", "Không cần miêu tả gì", "Chỉ địa chỉ nhà bạn"], correctIndex: 1, explanation: "Cần miêu tả cả ngoại hình và tính cách." },
    { question: "Vì sao nên kể một kỷ niệm khi tả bạn thân?", options: ["Không cần thiết", "Thể hiện tình cảm gắn bó chân thực hơn", "Làm bài dài hơn", "Không có lý do gì"], correctIndex: 1, explanation: "Kỷ niệm giúp thể hiện tình cảm chân thực hơn." },
    { question: "Câu nào miêu tả tính cách của bạn thân?", options: ["Bạn ấy cao 1m35.", "Bạn ấy rất vui vẻ, hay giúp đỡ mọi người.", "Bạn ấy mặc áo xanh.", "Bạn ấy học lớp 3A."], correctIndex: 1, explanation: "Câu này miêu tả tính cách (vui vẻ, hay giúp đỡ)." },
    { question: "Tình bạn thời thơ ấu thường để lại điều gì?", options: ["Kỷ niệm đẹp, sâu sắc", "Không để lại gì", "Chỉ là kỷ niệm buồn", "Không có ý nghĩa gì"], correctIndex: 0, explanation: "Tình bạn thời thơ ấu thường để lại kỷ niệm đẹp, sâu sắc." },
  ]),
  "tieng-viet:3:thu-thach-nho-on-tap-tong-hop-chuan-bi-kiem-tra-cuoi-nam": practiceContent("Thử thách nhỏ", "Ôn tập tổng hợp chuẩn bị kiểm tra cuối năm", "Hãy ôn lại toàn bộ kiến thức Tiếng Việt trọng tâm trong năm.", [
    { question: "Từ loại nào chỉ đặc điểm, tính chất của sự vật?", options: ["Danh từ", "Động từ", "Tính từ", "Số từ"], correctIndex: 2, explanation: "Tính từ chỉ đặc điểm, tính chất của sự vật." },
    { question: "Biện pháp nào so sánh hai sự vật có điểm giống nhau?", options: ["Nhân hoá", "So sánh", "Điệp từ", "Không có biện pháp nào"], correctIndex: 1, explanation: "So sánh là đối chiếu hai sự vật có điểm giống nhau." },
    { question: "Dạng bài tập làm văn nào em đã học trong năm lớp 3?", options: ["Tả đồ vật, con vật, cây cối, người", "Viết luận văn khoa học", "Viết báo cáo nghiên cứu", "Không học tập làm văn"], correctIndex: 0, explanation: "Em đã học các dạng tả đồ vật, con vật, cây cối, người." },
    { question: "Kiến thức Tiếng Việt lớp 3 là nền tảng cho môn học nào ở cấp học cao hơn?", options: ["Ngữ văn", "Vật lý", "Hoá học", "Địa lý"], correctIndex: 0, explanation: "Kiến thức Tiếng Việt là nền tảng cho môn Ngữ văn ở cấp học cao hơn." },
  ]),

  // ─────────────── TIẾNG ANH — LỚP 3 — 60 bài lõi mở rộng ───────────────
  "tieng-anh:3:greetings-review": {
    objectives: ["Ôn tập các mẫu câu chào hỏi.", "Chào hỏi tự nhiên trong nhiều tình huống."],
    sections: [
      { heading: "1. Greetings", body: ["'Hello!' / 'Hi!' (Xin chào!), 'Good morning!' (Chào buổi sáng!), 'Good afternoon!' (Chào buổi chiều!), 'Goodbye!' (Tạm biệt!)."] },
      { heading: "2. Asking How Someone Is", body: ["'How are you?' (Bạn khoẻ không?) — 'I'm fine, thank you.' (Em khoẻ, cảm ơn bạn.)"] },
    ],
    quiz: [
      { question: "'Xin chào' trong tiếng Anh là gì?", options: ["Goodbye", "Hello", "Sorry", "Please"], correctIndex: 1, explanation: "'Hello' nghĩa là 'Xin chào'." },
      { question: "Buổi sáng, em nên nói gì?", options: ["Good night", "Good afternoon", "Good morning", "Goodbye"], correctIndex: 2, explanation: "'Good morning' dùng vào buổi sáng." },
      { question: "'How are you?' dùng để hỏi điều gì?", options: ["Hỏi tên", "Hỏi sức khoẻ", "Hỏi tuổi", "Hỏi địa chỉ"], correctIndex: 1, explanation: "Câu này hỏi thăm tình trạng sức khoẻ." },
      { question: "'Tạm biệt' trong tiếng Anh là gì?", options: ["Hello", "Goodbye", "Thanks", "Sorry"], correctIndex: 1, explanation: "'Goodbye' nghĩa là 'Tạm biệt'." },
    ],
    funFact: "Người Anh thường chào nhau bằng câu hỏi thăm thời tiết vì thời tiết nước Anh hay thay đổi!",
  },
  "tieng-anh:3:classroom-instructions": {
    objectives: ["Hiểu các mệnh lệnh thường dùng trong lớp học.", "Phản ứng đúng khi nghe chỉ dẫn bằng tiếng Anh."],
    sections: [
      { heading: "1. Common Instructions", body: ["'Stand up!' (Đứng lên!), 'Sit down!' (Ngồi xuống!), 'Open your book!' (Mở sách ra!), 'Listen carefully!' (Lắng nghe cẩn thận!)."] },
      { heading: "2. Responding", body: ["Khi nghe 'Be quiet, please!' (Hãy giữ trật tự!), em nên im lặng và tập trung."] },
    ],
    quiz: [
      { question: "'Stand up!' nghĩa là gì?", options: ["Ngồi xuống", "Đứng lên", "Im lặng", "Mở sách"], correctIndex: 1, explanation: "'Stand up' nghĩa là 'Đứng lên'." },
      { question: "'Open your book!' nghĩa là gì?", options: ["Đóng sách lại", "Mở sách ra", "Viết bài", "Đọc to"], correctIndex: 1, explanation: "'Open your book' nghĩa là 'Mở sách ra'." },
      { question: "Khi giáo viên nói 'Be quiet, please!', em nên làm gì?", options: ["Nói to lên", "Giữ trật tự", "Đứng dậy", "Ra khỏi lớp"], correctIndex: 1, explanation: "'Be quiet' yêu cầu giữ trật tự." },
      { question: "'Listen carefully!' nghĩa là gì?", options: ["Nhìn kỹ", "Lắng nghe cẩn thận", "Viết nhanh", "Đọc to"], correctIndex: 1, explanation: "'Listen carefully' nghĩa là 'Lắng nghe cẩn thận'." },
    ],
    funFact: "Nhiều trường học trên thế giới dùng chung các mệnh lệnh tiếng Anh cơ bản này trong lớp!",
  },
  "tieng-anh:3:my-body-parts": {
    objectives: ["Học từ vựng về các bộ phận cơ thể.", "Nói được câu đơn giản về cơ thể."],
    sections: [
      { heading: "1. Body Parts", body: ["Head (đầu), eyes (mắt), nose (mũi), mouth (miệng), hands (tay), legs (chân)."] },
      { heading: "2. Making Sentences", body: ["'I have two eyes.' (Em có hai mắt.) 'This is my hand.' (Đây là tay của em.)"] },
    ],
    quiz: [
      { question: "'Eyes' nghĩa là gì?", options: ["Mũi", "Mắt", "Tay", "Chân"], correctIndex: 1, explanation: "'Eyes' nghĩa là 'Mắt'." },
      { question: "'Head' nghĩa là gì?", options: ["Đầu", "Chân", "Tay", "Mũi"], correctIndex: 0, explanation: "'Head' nghĩa là 'Đầu'." },
      { question: "Câu 'I have two eyes.' nghĩa là gì?", options: ["Em có hai tay.", "Em có hai mắt.", "Em có hai chân.", "Em có hai mũi."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em có hai mắt.'" },
      { question: "'Mouth' nghĩa là gì?", options: ["Miệng", "Mũi", "Tai", "Tóc"], correctIndex: 0, explanation: "'Mouth' nghĩa là 'Miệng'." },
    ],
    funFact: "Con người có 5 giác quan chính: nhìn, nghe, ngửi, nếm và chạm!",
  },
  "tieng-anh:3:clothes-and-colours": {
    objectives: ["Học từ vựng về quần áo và màu sắc.", "Nói được câu mô tả trang phục."],
    sections: [
      { heading: "1. Clothes", body: ["Shirt (áo sơ mi), dress (váy), shoes (giày), hat (mũ), skirt (chân váy)."] },
      { heading: "2. Colours + Clothes", body: ["'I have a red shirt.' (Em có một chiếc áo sơ mi màu đỏ.) 'She is wearing a blue dress.' (Cô ấy đang mặc váy màu xanh dương.)"] },
    ],
    quiz: [
      { question: "'Shirt' nghĩa là gì?", options: ["Váy", "Áo sơ mi", "Giày", "Mũ"], correctIndex: 1, explanation: "'Shirt' nghĩa là 'Áo sơ mi'." },
      { question: "'Shoes' nghĩa là gì?", options: ["Giày", "Mũ", "Áo", "Váy"], correctIndex: 0, explanation: "'Shoes' nghĩa là 'Giày'." },
      { question: "'I have a red shirt.' nghĩa là gì?", options: ["Em có váy đỏ.", "Em có áo sơ mi đỏ.", "Em có giày đỏ.", "Em có mũ đỏ."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em có áo sơ mi đỏ.'" },
      { question: "'Is wearing' nghĩa là gì?", options: ["Đang mặc/đội", "Đang chạy", "Đang ăn", "Đang ngủ"], correctIndex: 0, explanation: "'Is wearing' nghĩa là 'đang mặc/đội'." },
    ],
    funFact: "Áo dài là trang phục truyền thống nổi tiếng của Việt Nam, tiếng Anh gọi là 'Ao dai'!",
  },
  "tieng-anh:3:family-members": {
    objectives: ["Ôn tập và mở rộng từ vựng về gia đình.", "Giới thiệu về các thành viên trong gia đình."],
    sections: [
      { heading: "1. Family Vocabulary", body: ["Grandfather (ông), grandmother (bà), uncle (chú/bác), aunt (cô/dì), cousin (anh/chị/em họ)."] },
      { heading: "2. Introducing Family", body: ["'This is my grandmother.' (Đây là bà của em.) 'I have one brother and one sister.' (Em có một anh trai và một chị/em gái.)"] },
    ],
    quiz: [
      { question: "'Grandfather' nghĩa là gì?", options: ["Ông", "Bà", "Chú", "Cô"], correctIndex: 0, explanation: "'Grandfather' nghĩa là 'Ông'." },
      { question: "'Aunt' nghĩa là gì?", options: ["Chú", "Cô/dì", "Anh", "Em"], correctIndex: 1, explanation: "'Aunt' nghĩa là 'Cô/dì'." },
      { question: "'Cousin' nghĩa là gì?", options: ["Anh/chị/em họ", "Bố", "Mẹ", "Ông"], correctIndex: 0, explanation: "'Cousin' nghĩa là 'anh/chị/em họ'." },
      { question: "'This is my grandmother.' nghĩa là gì?", options: ["Đây là ông của em.", "Đây là bà của em.", "Đây là chú của em.", "Đây là cô của em."], correctIndex: 1, explanation: "Câu này nghĩa là 'Đây là bà của em.'" },
    ],
    funFact: "Ở nhiều nước phương Tây, gia đình thường nhỏ gọn hơn gia đình nhiều thế hệ ở Việt Nam!",
  },
  "tieng-anh:3:jobs-and-occupations": {
    objectives: ["Học từ vựng về một số nghề nghiệp quen thuộc.", "Nói được câu về nghề nghiệp của người thân."],
    sections: [
      { heading: "1. Jobs Vocabulary", body: ["Teacher (giáo viên), doctor (bác sĩ), farmer (nông dân), police officer (công an), engineer (kỹ sư)."] },
      { heading: "2. Talking About Jobs", body: ["'My father is a doctor.' (Bố em là bác sĩ.) 'What does your mother do?' (Mẹ em làm nghề gì?)"] },
    ],
    quiz: [
      { question: "'Teacher' nghĩa là gì?", options: ["Bác sĩ", "Giáo viên", "Nông dân", "Kỹ sư"], correctIndex: 1, explanation: "'Teacher' nghĩa là 'Giáo viên'." },
      { question: "'Doctor' nghĩa là gì?", options: ["Bác sĩ", "Công an", "Giáo viên", "Kỹ sư"], correctIndex: 0, explanation: "'Doctor' nghĩa là 'Bác sĩ'." },
      { question: "Câu 'What does your mother do?' dùng để hỏi điều gì?", options: ["Hỏi tuổi mẹ", "Hỏi nghề nghiệp của mẹ", "Hỏi tên mẹ", "Hỏi địa chỉ nhà"], correctIndex: 1, explanation: "Câu này hỏi về nghề nghiệp của mẹ." },
      { question: "'Police officer' nghĩa là gì?", options: ["Công an", "Nông dân", "Bác sĩ", "Kỹ sư"], correctIndex: 0, explanation: "'Police officer' nghĩa là 'Công an'." },
    ],
    funFact: "Trên thế giới có hàng ngàn nghề nghiệp khác nhau, mỗi nghề đều đóng góp cho xã hội!",
  },
  "tieng-anh:3:transportation": {
    objectives: ["Học từ vựng về các phương tiện giao thông.", "Nói được câu về cách em đến trường."],
    sections: [
      { heading: "1. Transportation Vocabulary", body: ["Car (ô tô), bus (xe buýt), bicycle (xe đạp), motorbike (xe máy), train (tàu hoả)."] },
      { heading: "2. Making Sentences", body: ["'I go to school by bike.' (Em đi học bằng xe đạp.) 'How do you go to school?' (Bạn đến trường bằng gì?)"] },
    ],
    quiz: [
      { question: "'Bicycle' nghĩa là gì?", options: ["Ô tô", "Xe đạp", "Xe buýt", "Tàu hoả"], correctIndex: 1, explanation: "'Bicycle' nghĩa là 'Xe đạp'." },
      { question: "'Bus' nghĩa là gì?", options: ["Xe buýt", "Xe máy", "Tàu hoả", "Máy bay"], correctIndex: 0, explanation: "'Bus' nghĩa là 'Xe buýt'." },
      { question: "Câu 'I go to school by bike.' nghĩa là gì?", options: ["Em đi học bằng ô tô.", "Em đi học bằng xe đạp.", "Em đi học bằng xe buýt.", "Em đi bộ đến trường."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em đi học bằng xe đạp.'" },
      { question: "'Train' nghĩa là gì?", options: ["Tàu hoả", "Máy bay", "Thuyền", "Xe máy"], correctIndex: 0, explanation: "'Train' nghĩa là 'Tàu hoả'." },
    ],
    funFact: "Xe đạp là phương tiện thân thiện với môi trường vì không tạo ra khí thải!",
  },
  "tieng-anh:3:shapes-and-sizes": {
    objectives: ["Học từ vựng về hình dạng và kích thước.", "Mô tả đồ vật bằng hình dạng, kích thước."],
    sections: [
      { heading: "1. Shapes", body: ["Circle (hình tròn), square (hình vuông), triangle (hình tam giác), rectangle (hình chữ nhật)."] },
      { heading: "2. Sizes", body: ["Big (to), small (nhỏ), long (dài), short (ngắn). 'The ball is round and small.' (Quả bóng tròn và nhỏ.)"] },
    ],
    quiz: [
      { question: "'Circle' nghĩa là gì?", options: ["Hình vuông", "Hình tròn", "Hình tam giác", "Hình chữ nhật"], correctIndex: 1, explanation: "'Circle' nghĩa là 'Hình tròn'." },
      { question: "'Square' nghĩa là gì?", options: ["Hình vuông", "Hình tròn", "Hình tam giác", "Hình chữ nhật"], correctIndex: 0, explanation: "'Square' nghĩa là 'Hình vuông'." },
      { question: "'Big' nghĩa là gì?", options: ["Nhỏ", "To", "Dài", "Ngắn"], correctIndex: 1, explanation: "'Big' nghĩa là 'To'." },
      { question: "'Triangle' nghĩa là gì?", options: ["Hình tam giác", "Hình tròn", "Hình vuông", "Hình chữ nhật"], correctIndex: 0, explanation: "'Triangle' nghĩa là 'Hình tam giác'." },
    ],
    funFact: "Biển báo giao thông thường dùng hình tam giác để cảnh báo nguy hiểm!",
  },
  "tieng-anh:3:in-the-supermarket": {
    objectives: ["Học mẫu câu và từ vựng khi đi siêu thị.", "Hỏi giá và mua hàng bằng tiếng Anh đơn giản."],
    sections: [
      { heading: "1. Supermarket Vocabulary", body: ["Basket (giỏ hàng), cashier (thu ngân), price (giá tiền), shopping list (danh sách mua sắm)."] },
      { heading: "2. Useful Sentences", body: ["'How much is this?' (Cái này giá bao nhiêu?) 'I want to buy some apples.' (Em muốn mua vài quả táo.)"] },
    ],
    quiz: [
      { question: "'How much is this?' dùng để hỏi điều gì?", options: ["Hỏi tên món hàng", "Hỏi giá tiền", "Hỏi màu sắc", "Hỏi kích thước"], correctIndex: 1, explanation: "Câu này hỏi về giá tiền của món hàng." },
      { question: "'Cashier' nghĩa là gì?", options: ["Người bán hàng rong", "Thu ngân", "Khách hàng", "Bảo vệ"], correctIndex: 1, explanation: "'Cashier' nghĩa là 'Thu ngân'." },
      { question: "'Basket' nghĩa là gì?", options: ["Giỏ hàng", "Túi xách", "Hộp", "Xe đẩy"], correctIndex: 0, explanation: "'Basket' nghĩa là 'Giỏ hàng'." },
      { question: "'I want to buy some apples.' nghĩa là gì?", options: ["Em muốn ăn táo.", "Em muốn mua vài quả táo.", "Em không thích táo.", "Táo rất ngon."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em muốn mua vài quả táo.'" },
    ],
    funFact: "Siêu thị hiện đại đầu tiên trên thế giới xuất hiện ở Mỹ vào năm 1916!",
  },
  "tieng-anh:3:at-the-restaurant": {
    objectives: ["Học mẫu câu và từ vựng khi đi nhà hàng.", "Gọi món ăn bằng tiếng Anh đơn giản."],
    sections: [
      { heading: "1. Restaurant Vocabulary", body: ["Menu (thực đơn), waiter (phục vụ nam), order (gọi món), bill (hoá đơn)."] },
      { heading: "2. Ordering Food", body: ["'Can I have a menu, please?' (Cho em xin thực đơn ạ.) 'I would like some rice, please.' (Em muốn gọi một phần cơm ạ.)"] },
    ],
    quiz: [
      { question: "'Menu' nghĩa là gì?", options: ["Thực đơn", "Hoá đơn", "Bàn ăn", "Ghế ngồi"], correctIndex: 0, explanation: "'Menu' nghĩa là 'Thực đơn'." },
      { question: "'Bill' nghĩa là gì?", options: ["Thực đơn", "Hoá đơn", "Món ăn", "Đồ uống"], correctIndex: 1, explanation: "'Bill' nghĩa là 'Hoá đơn'." },
      { question: "'Can I have a menu, please?' nghĩa là gì?", options: ["Cho em xin thực đơn ạ.", "Cho em xin hoá đơn ạ.", "Em muốn ăn cơm.", "Nhà hàng ở đâu?"], correctIndex: 0, explanation: "Câu này nghĩa là 'Cho em xin thực đơn ạ.'" },
      { question: "'Waiter' nghĩa là gì?", options: ["Đầu bếp", "Phục vụ nam", "Khách hàng", "Chủ nhà hàng"], correctIndex: 1, explanation: "'Waiter' nghĩa là 'Phục vụ nam'." },
    ],
    funFact: "Từ 'restaurant' bắt nguồn từ tiếng Pháp, nghĩa gốc là 'phục hồi sức khoẻ'!",
  },
  "tieng-anh:3:my-pets": {
    objectives: ["Học từ vựng về thú cưng quen thuộc.", "Nói được câu giới thiệu thú cưng."],
    sections: [
      { heading: "1. Pets Vocabulary", body: ["Dog (chó), cat (mèo), fish (cá), rabbit (thỏ), bird (chim)."] },
      { heading: "2. Talking About Pets", body: ["'I have a small dog.' (Em có một chú chó nhỏ.) 'My cat is white.' (Con mèo của em màu trắng.)"] },
    ],
    quiz: [
      { question: "'Rabbit' nghĩa là gì?", options: ["Thỏ", "Chó", "Mèo", "Cá"], correctIndex: 0, explanation: "'Rabbit' nghĩa là 'Thỏ'." },
      { question: "'Fish' nghĩa là gì?", options: ["Chim", "Cá", "Chó", "Mèo"], correctIndex: 1, explanation: "'Fish' nghĩa là 'Cá'." },
      { question: "'I have a small dog.' nghĩa là gì?", options: ["Em có một chú mèo nhỏ.", "Em có một chú chó nhỏ.", "Em có một con cá nhỏ.", "Em có một con chim nhỏ."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em có một chú chó nhỏ.'" },
      { question: "'My cat is white.' nghĩa là gì?", options: ["Con mèo của em màu đen.", "Con mèo của em màu trắng.", "Con chó của em màu trắng.", "Con cá của em màu trắng."], correctIndex: 1, explanation: "Câu này nghĩa là 'Con mèo của em màu trắng.'" },
    ],
    funFact: "Chó được xem là loài vật được thuần hoá đầu tiên trên thế giới, từ hàng chục nghìn năm trước!",
  },
  "tieng-anh:3:wild-animals": {
    objectives: ["Học từ vựng về động vật hoang dã.", "Mô tả động vật bằng câu đơn giản."],
    sections: [
      { heading: "1. Wild Animals Vocabulary", body: ["Lion (sư tử), tiger (hổ), elephant (voi), giraffe (hươu cao cổ), monkey (khỉ)."] },
      { heading: "2. Describing Animals", body: ["'The lion is strong.' (Con sư tử rất mạnh mẽ.) 'The elephant is very big.' (Con voi rất to.)"] },
    ],
    quiz: [
      { question: "'Tiger' nghĩa là gì?", options: ["Sư tử", "Hổ", "Voi", "Khỉ"], correctIndex: 1, explanation: "'Tiger' nghĩa là 'Hổ'." },
      { question: "'Giraffe' nghĩa là gì?", options: ["Hươu cao cổ", "Voi", "Sư tử", "Khỉ"], correctIndex: 0, explanation: "'Giraffe' nghĩa là 'Hươu cao cổ'." },
      { question: "'The elephant is very big.' nghĩa là gì?", options: ["Con voi rất nhỏ.", "Con voi rất to.", "Con voi rất nhanh.", "Con voi rất đẹp."], correctIndex: 1, explanation: "Câu này nghĩa là 'Con voi rất to.'" },
      { question: "'Monkey' nghĩa là gì?", options: ["Khỉ", "Hổ", "Sư tử", "Voi"], correctIndex: 0, explanation: "'Monkey' nghĩa là 'Khỉ'." },
    ],
    funFact: "Hươu cao cổ là loài động vật cao nhất trên cạn, có thể cao tới hơn 5 mét!",
  },
  "tieng-anh:3:sports-i-like": {
    objectives: ["Nói về môn thể thao yêu thích.", "Học từ vựng về các môn thể thao phổ biến."],
    sections: [
      { heading: "1. Sports Vocabulary", body: ["Football (bóng đá), swimming (bơi lội), badminton (cầu lông), table tennis (bóng bàn)."] },
      { heading: "2. Talking About Sports", body: ["'I like playing football.' (Em thích chơi bóng đá.) 'What sport do you like?' (Bạn thích môn thể thao nào?)"] },
    ],
    quiz: [
      { question: "'Football' nghĩa là gì?", options: ["Bóng đá", "Bóng bàn", "Cầu lông", "Bơi lội"], correctIndex: 0, explanation: "'Football' nghĩa là 'Bóng đá'." },
      { question: "'Swimming' nghĩa là gì?", options: ["Bơi lội", "Chạy bộ", "Nhảy dây", "Đá cầu"], correctIndex: 0, explanation: "'Swimming' nghĩa là 'Bơi lội'." },
      { question: "'I like playing football.' nghĩa là gì?", options: ["Em thích bơi lội.", "Em thích chơi bóng đá.", "Em thích chơi cầu lông.", "Em không thích thể thao."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em thích chơi bóng đá.'" },
      { question: "'Table tennis' nghĩa là gì?", options: ["Bóng bàn", "Bóng đá", "Bóng rổ", "Bóng chuyền"], correctIndex: 0, explanation: "'Table tennis' nghĩa là 'Bóng bàn'." },
    ],
    funFact: "Bóng đá là môn thể thao được yêu thích nhất thế giới, với hàng tỷ người hâm mộ!",
  },
  "tieng-anh:3:free-time-on-weekends": {
    objectives: ["Nói về hoạt động cuối tuần.", "Sử dụng câu đơn giản để kể về thời gian rảnh."],
    sections: [
      { heading: "1. Weekend Activities", body: ["Watch TV (xem tivi), play games (chơi trò chơi), read books (đọc sách), visit grandparents (thăm ông bà)."] },
      { heading: "2. Making Sentences", body: ["'On weekends, I play games with my friends.' (Vào cuối tuần, em chơi trò chơi với bạn bè.)"] },
    ],
    quiz: [
      { question: "'Watch TV' nghĩa là gì?", options: ["Xem tivi", "Đọc sách", "Chơi trò chơi", "Thăm ông bà"], correctIndex: 0, explanation: "'Watch TV' nghĩa là 'Xem tivi'." },
      { question: "'Read books' nghĩa là gì?", options: ["Đọc sách", "Xem tivi", "Chơi trò chơi", "Nấu ăn"], correctIndex: 0, explanation: "'Read books' nghĩa là 'Đọc sách'." },
      { question: "'On weekends' nghĩa là gì?", options: ["Vào các ngày trong tuần", "Vào cuối tuần", "Vào buổi sáng", "Vào buổi tối"], correctIndex: 1, explanation: "'On weekends' nghĩa là 'Vào cuối tuần'." },
      { question: "'Visit grandparents' nghĩa là gì?", options: ["Thăm ông bà", "Thăm bạn bè", "Đi học", "Đi chợ"], correctIndex: 0, explanation: "'Visit grandparents' nghĩa là 'Thăm ông bà'." },
    ],
    funFact: "Ở nhiều nước, cuối tuần bắt đầu từ thứ Bảy, nhưng ở một số nước Trung Đông lại là thứ Sáu!",
  },
  "tieng-anh:3:describing-the-weather": {
    objectives: ["Luyện mô tả thời tiết bằng câu đơn giản.", "Ôn tập từ vựng về thời tiết."],
    sections: [
      { heading: "1. Weather Vocabulary", body: ["Sunny (nắng), rainy (mưa), windy (nhiều gió), cloudy (nhiều mây), hot (nóng), cold (lạnh)."] },
      { heading: "2. Making Sentences", body: ["'It is sunny today.' (Hôm nay trời nắng.) 'It is raining.' (Trời đang mưa.)"] },
    ],
    quiz: [
      { question: "'Sunny' nghĩa là gì?", options: ["Mưa", "Nắng", "Nhiều gió", "Lạnh"], correctIndex: 1, explanation: "'Sunny' nghĩa là 'Nắng'." },
      { question: "'It is raining.' nghĩa là gì?", options: ["Trời đang nắng.", "Trời đang mưa.", "Trời đang lạnh.", "Trời đang nhiều gió."], correctIndex: 1, explanation: "Câu này nghĩa là 'Trời đang mưa.'" },
      { question: "'Windy' nghĩa là gì?", options: ["Nhiều gió", "Nhiều mây", "Nắng", "Nóng"], correctIndex: 0, explanation: "'Windy' nghĩa là 'Nhiều gió'." },
      { question: "'Cold' nghĩa là gì?", options: ["Nóng", "Lạnh", "Nắng", "Mưa"], correctIndex: 1, explanation: "'Cold' nghĩa là 'Lạnh'." },
    ],
    funFact: "Nơi lạnh nhất trên Trái Đất là Nam Cực, có lúc nhiệt độ xuống dưới -80°C!",
  },
  "tieng-anh:3:seasons-around-the-year": {
    objectives: ["Ôn tập từ vựng về bốn mùa trong năm.", "Nói được câu về đặc điểm từng mùa."],
    sections: [
      { heading: "1. Seasons Vocabulary", body: ["Spring (mùa xuân), summer (mùa hè), autumn/fall (mùa thu), winter (mùa đông)."] },
      { heading: "2. Making Sentences", body: ["'Summer is hot.' (Mùa hè nóng.) 'I like spring the most.' (Em thích mùa xuân nhất.)"] },
    ],
    quiz: [
      { question: "'Summer' nghĩa là gì?", options: ["Mùa xuân", "Mùa hè", "Mùa thu", "Mùa đông"], correctIndex: 1, explanation: "'Summer' nghĩa là 'Mùa hè'." },
      { question: "'Winter' nghĩa là gì?", options: ["Mùa đông", "Mùa hè", "Mùa xuân", "Mùa thu"], correctIndex: 0, explanation: "'Winter' nghĩa là 'Mùa đông'." },
      { question: "'Summer is hot.' nghĩa là gì?", options: ["Mùa hè lạnh.", "Mùa hè nóng.", "Mùa đông nóng.", "Mùa xuân nóng."], correctIndex: 1, explanation: "Câu này nghĩa là 'Mùa hè nóng.'" },
      { question: "'Autumn' còn được gọi là gì trong tiếng Anh Mỹ?", options: ["Fall", "Spring", "Summer", "Winter"], correctIndex: 0, explanation: "Người Mỹ thường gọi mùa thu là 'Fall'." },
    ],
    funFact: "Ở Nam bán cầu, các mùa ngược lại với Bắc bán cầu: khi Việt Nam là mùa đông thì Úc lại là mùa hè!",
  },
  "tieng-anh:3:simple-present-tense-daily-habits": {
    objectives: ["Làm quen thì hiện tại đơn qua thói quen hàng ngày.", "Đặt câu đơn giản với thì hiện tại đơn."],
    sections: [
      { heading: "1. Simple Present Tense", body: ["Dùng để nói về thói quen: 'I brush my teeth every morning.' (Em đánh răng mỗi sáng.)"] },
      { heading: "2. He/She + verb-s", body: ["Với 'he/she/it', động từ thêm 's': 'She goes to school by bus.' (Cô ấy đi học bằng xe buýt.)"] },
    ],
    quiz: [
      { question: "Câu nào đúng thì hiện tại đơn?", options: ["She go to school.", "She goes to school.", "She going to school.", "She gone to school."], correctIndex: 1, explanation: "Với 'she', động từ 'go' cần thêm 's' thành 'goes'." },
      { question: "'I brush my teeth every morning.' nghĩa là gì?", options: ["Em đánh răng mỗi sáng.", "Em ăn sáng mỗi ngày.", "Em đi ngủ sớm.", "Em đi học mỗi sáng."], correctIndex: 0, explanation: "Câu này nghĩa là 'Em đánh răng mỗi sáng.'" },
      { question: "Thì hiện tại đơn thường dùng để diễn tả điều gì?", options: ["Hành động đang xảy ra", "Thói quen, sự thật", "Hành động trong quá khứ", "Kế hoạch tương lai"], correctIndex: 1, explanation: "Thì hiện tại đơn diễn tả thói quen, sự thật." },
      { question: "Câu nào đúng?", options: ["He play football every day.", "He plays football every day.", "He playing football every day.", "He played football every day."], correctIndex: 1, explanation: "Với 'he', động từ 'play' cần thêm 's' thành 'plays'." },
    ],
    funFact: "Tiếng Anh chỉ thêm 's' cho động từ với chủ ngữ số ít ngôi thứ ba (he/she/it) ở thì hiện tại đơn!",
  },
  "tieng-anh:3:can-can-t-abilities": {
    objectives: ["Học cách nói về khả năng bằng can/can't.", "Đặt câu khẳng định và phủ định với can."],
    sections: [
      { heading: "1. Can (Có thể)", body: ["'I can swim.' (Em có thể bơi.) 'She can ride a bike.' (Cô ấy có thể đi xe đạp.)"] },
      { heading: "2. Can't (Không thể)", body: ["'I can't fly.' (Em không thể bay.) Câu hỏi: 'Can you swim?' (Bạn có thể bơi không?)"] },
    ],
    quiz: [
      { question: "'I can swim.' nghĩa là gì?", options: ["Em không thể bơi.", "Em có thể bơi.", "Em thích bơi.", "Em đang bơi."], correctIndex: 1, explanation: "'Can' nghĩa là 'có thể'." },
      { question: "Câu nào diễn tả khả năng KHÔNG làm được?", options: ["I can sing.", "I can dance.", "I can't fly.", "I can run."], correctIndex: 2, explanation: "'Can't' là dạng phủ định, nghĩa là 'không thể'." },
      { question: "'Can you swim?' dùng để hỏi điều gì?", options: ["Hỏi tuổi", "Hỏi khả năng bơi", "Hỏi tên", "Hỏi sở thích"], correctIndex: 1, explanation: "Câu này hỏi về khả năng bơi lội." },
      { question: "Câu nào đúng ngữ pháp?", options: ["She can to swim.", "She can swims.", "She can swim.", "She cans swim."], correctIndex: 2, explanation: "Sau 'can' dùng động từ nguyên thể, không chia." },
    ],
    funFact: "'Can' là một động từ khuyết thiếu (modal verb) đặc biệt — nó không bao giờ thêm 's', kể cả với he/she/it!",
  },
  "tieng-anh:3:prepositions-of-place-review": {
    objectives: ["Ôn tập các giới từ chỉ vị trí đã học.", "Sử dụng giới từ chỉ vị trí trong câu."],
    sections: [
      { heading: "1. Prepositions of Place", body: ["In (trong), on (trên), under (dưới), next to (bên cạnh), between (ở giữa)."] },
      { heading: "2. Making Sentences", body: ["'The cat is under the table.' (Con mèo ở dưới bàn.) 'The book is on the desk.' (Quyển sách ở trên bàn học.)"] },
    ],
    quiz: [
      { question: "'Under' nghĩa là gì?", options: ["Trên", "Dưới", "Bên cạnh", "Ở giữa"], correctIndex: 1, explanation: "'Under' nghĩa là 'Dưới'." },
      { question: "'Next to' nghĩa là gì?", options: ["Bên cạnh", "Ở giữa", "Trong", "Trên"], correctIndex: 0, explanation: "'Next to' nghĩa là 'Bên cạnh'." },
      { question: "'The cat is under the table.' nghĩa là gì?", options: ["Con mèo ở trên bàn.", "Con mèo ở dưới bàn.", "Con mèo ở bên cạnh bàn.", "Con mèo ở trong hộp."], correctIndex: 1, explanation: "Câu này nghĩa là 'Con mèo ở dưới bàn.'" },
      { question: "'Between' nghĩa là gì?", options: ["Ở giữa", "Bên cạnh", "Trên", "Dưới"], correctIndex: 0, explanation: "'Between' nghĩa là 'Ở giữa' (hai vật)." },
    ],
    funFact: "Giới từ tiếng Anh không phải lúc nào cũng dịch giống tiếng Việt, cần học qua nhiều câu ví dụ!",
  },
  "tieng-anh:3:this-that-these-those": {
    objectives: ["Học cách dùng đại từ chỉ định cơ bản.", "Phân biệt this/that với these/those."],
    sections: [
      { heading: "1. This / That (số ít)", body: ["'This' (cái này - gần), 'that' (cái kia - xa). 'This is my pen.' (Đây là bút của em.)"] },
      { heading: "2. These / Those (số nhiều)", body: ["'These' (những cái này - gần), 'those' (những cái kia - xa). 'These are my books.' (Đây là những quyển sách của em.)"] },
    ],
    quiz: [
      { question: "Từ nào dùng cho một vật ở gần?", options: ["That", "This", "Those", "These"], correctIndex: 1, explanation: "'This' dùng cho một vật ở gần." },
      { question: "Từ nào dùng cho nhiều vật ở xa?", options: ["This", "That", "These", "Those"], correctIndex: 3, explanation: "'Those' dùng cho nhiều vật ở xa." },
      { question: "'These are my books.' nghĩa là gì?", options: ["Đây là quyển sách của em.", "Đây là những quyển sách của em.", "Kia là quyển sách của em.", "Kia là những quyển sách của em."], correctIndex: 1, explanation: "'These' là số nhiều của 'this'." },
      { question: "Câu nào đúng?", options: ["This are my pens.", "These is my pen.", "These are my pens.", "That are my pens."], correctIndex: 2, explanation: "'These' đi với danh từ số nhiều và động từ 'are'." },
    ],
    funFact: "This/that/these/those được gọi là đại từ/tính từ chỉ định trong ngữ pháp tiếng Anh!",
  },
  "tieng-anh:3:plural-nouns": {
    objectives: ["Học cách tạo danh từ số nhiều đơn giản.", "Nhận biết các quy tắc thêm 's/es'."],
    sections: [
      { heading: "1. Adding -s", body: ["Hầu hết danh từ thêm 's': book → books, pen → pens, cat → cats."] },
      { heading: "2. Adding -es and Irregular", body: ["Danh từ tận cùng bằng s, x, ch, sh thêm 'es': box → boxes. Một số bất quy tắc: child → children, man → men."] },
    ],
    quiz: [
      { question: "Số nhiều của 'book' là gì?", options: ["Book", "Books", "Bookes", "Bookies"], correctIndex: 1, explanation: "Thêm 's' vào 'book' thành 'books'." },
      { question: "Số nhiều của 'box' là gì?", options: ["Boxs", "Box", "Boxes", "Boxies"], correctIndex: 2, explanation: "Danh từ tận cùng bằng 'x' thêm 'es'." },
      { question: "Số nhiều của 'child' là gì?", options: ["Childs", "Childes", "Children", "Child"], correctIndex: 2, explanation: "'Child' là danh từ bất quy tắc, số nhiều là 'children'." },
      { question: "Số nhiều của 'cat' là gì?", options: ["Cates", "Cat", "Cates", "Cats"], correctIndex: 3, explanation: "Thêm 's' vào 'cat' thành 'cats'." },
    ],
    funFact: "Một số danh từ tiếng Anh không đổi khi ở số nhiều, ví dụ 'sheep' (con cừu) giữ nguyên!",
  },
  "tieng-anh:3:question-words-who-what-where": {
    objectives: ["Học các từ để hỏi cơ bản.", "Đặt câu hỏi với who/what/where."],
    sections: [
      { heading: "1. Who / What", body: ["'Who' (ai): 'Who is that?' (Đó là ai?) 'What' (cái gì): 'What is this?' (Đây là cái gì?)"] },
      { heading: "2. Where", body: ["'Where' (ở đâu): 'Where do you live?' (Bạn sống ở đâu?)"] },
    ],
    quiz: [
      { question: "Từ để hỏi 'ai' là gì?", options: ["What", "Who", "Where", "When"], correctIndex: 1, explanation: "'Who' nghĩa là 'ai'." },
      { question: "Từ để hỏi 'ở đâu' là gì?", options: ["Who", "What", "Where", "Why"], correctIndex: 2, explanation: "'Where' nghĩa là 'ở đâu'." },
      { question: "'What is this?' nghĩa là gì?", options: ["Đây là ai?", "Đây là cái gì?", "Đây ở đâu?", "Đây là khi nào?"], correctIndex: 1, explanation: "Câu này nghĩa là 'Đây là cái gì?'" },
      { question: "'Where do you live?' nghĩa là gì?", options: ["Bạn tên là gì?", "Bạn sống ở đâu?", "Bạn bao nhiêu tuổi?", "Bạn học lớp mấy?"], correctIndex: 1, explanation: "Câu này hỏi về nơi sinh sống." },
    ],
    funFact: "Trong tiếng Anh, các từ để hỏi (who, what, where, when, why, how) được gọi là 'WH-questions'!",
  },
  "tieng-anh:3:question-words-when-why-how": {
    objectives: ["Học thêm các từ để hỏi cơ bản.", "Đặt câu hỏi với when/why/how."],
    sections: [
      { heading: "1. When / Why", body: ["'When' (khi nào): 'When is your birthday?' (Sinh nhật bạn khi nào?) 'Why' (tại sao): 'Why are you happy?' (Tại sao bạn vui?)"] },
      { heading: "2. How", body: ["'How' (như thế nào): 'How do you feel?' (Bạn cảm thấy thế nào?)"] },
    ],
    quiz: [
      { question: "Từ để hỏi 'khi nào' là gì?", options: ["Why", "How", "When", "What"], correctIndex: 2, explanation: "'When' nghĩa là 'khi nào'." },
      { question: "Từ để hỏi 'tại sao' là gì?", options: ["Why", "Who", "Where", "When"], correctIndex: 0, explanation: "'Why' nghĩa là 'tại sao'." },
      { question: "'How do you feel?' nghĩa là gì?", options: ["Bạn tên là gì?", "Bạn cảm thấy thế nào?", "Bạn ở đâu?", "Bạn bao nhiêu tuổi?"], correctIndex: 1, explanation: "Câu này hỏi về cảm xúc." },
      { question: "'When is your birthday?' nghĩa là gì?", options: ["Sinh nhật bạn khi nào?", "Bạn tên là gì?", "Bạn thích gì?", "Bạn ở đâu?"], correctIndex: 0, explanation: "Câu này hỏi về ngày sinh nhật." },
    ],
    funFact: "Trả lời cho câu hỏi 'Why' thường bắt đầu bằng 'Because' (Vì)!",
  },
  "tieng-anh:3:my-favourite-colour": {
    objectives: ["Nói về màu sắc yêu thích.", "Ôn tập từ vựng về màu sắc."],
    sections: [
      { heading: "1. Colours", body: ["Red (đỏ), blue (xanh dương), green (xanh lá), yellow (vàng), purple (tím), pink (hồng)."] },
      { heading: "2. Talking About Colours", body: ["'My favourite colour is blue.' (Màu yêu thích của em là màu xanh dương.)"] },
    ],
    quiz: [
      { question: "'Yellow' nghĩa là gì?", options: ["Đỏ", "Vàng", "Xanh lá", "Tím"], correctIndex: 1, explanation: "'Yellow' nghĩa là 'Vàng'." },
      { question: "'Purple' nghĩa là gì?", options: ["Tím", "Hồng", "Xanh dương", "Đỏ"], correctIndex: 0, explanation: "'Purple' nghĩa là 'Tím'." },
      { question: "'My favourite colour is blue.' nghĩa là gì?", options: ["Màu yêu thích của em là màu đỏ.", "Màu yêu thích của em là màu xanh dương.", "Màu yêu thích của em là màu vàng.", "Em không thích màu nào."], correctIndex: 1, explanation: "Câu này nghĩa là 'Màu yêu thích của em là màu xanh dương.'" },
      { question: "'Green' nghĩa là gì?", options: ["Xanh lá", "Xanh dương", "Vàng", "Hồng"], correctIndex: 0, explanation: "'Green' nghĩa là 'Xanh lá'." },
    ],
    funFact: "Màu xanh dương là màu được yêu thích nhất trên toàn thế giới theo nhiều khảo sát!",
  },
  "tieng-anh:3:my-favourite-animal": {
    objectives: ["Nói về con vật yêu thích.", "Mô tả con vật bằng câu đơn giản."],
    sections: [
      { heading: "1. Making Sentences", body: ["'My favourite animal is the panda.' (Con vật yêu thích của em là gấu trúc.) 'It is black and white.' (Nó có màu đen và trắng.)"] },
      { heading: "2. Why I Like It", body: ["'I like it because it is cute.' (Em thích nó vì nó dễ thương.)"] },
    ],
    quiz: [
      { question: "'My favourite animal is the panda.' nghĩa là gì?", options: ["Em không thích gấu trúc.", "Con vật yêu thích của em là gấu trúc.", "Gấu trúc rất to.", "Em có một con gấu trúc."], correctIndex: 1, explanation: "Câu này nghĩa là 'Con vật yêu thích của em là gấu trúc.'" },
      { question: "'It is black and white.' nghĩa là gì?", options: ["Nó có màu đỏ và vàng.", "Nó có màu đen và trắng.", "Nó có màu xanh.", "Nó không có màu."], correctIndex: 1, explanation: "Câu này nghĩa là 'Nó có màu đen và trắng.'" },
      { question: "'Because' nghĩa là gì?", options: ["Nhưng", "Vì", "Và", "Hoặc"], correctIndex: 1, explanation: "'Because' nghĩa là 'Vì'." },
      { question: "'Cute' nghĩa là gì?", options: ["Đáng sợ", "Dễ thương", "To lớn", "Nguy hiểm"], correctIndex: 1, explanation: "'Cute' nghĩa là 'Dễ thương'." },
    ],
    funFact: "Gấu trúc chỉ ăn tre trúc và có thể ăn tới 12-38 kg mỗi ngày!",
  },
  "tieng-anh:3:asking-for-help-politely": {
    objectives: ["Học cách nhờ giúp đỡ một cách lịch sự.", "Sử dụng 'please' và 'could you' đúng cách."],
    sections: [
      { heading: "1. Polite Requests", body: ["'Could you help me, please?' (Bạn có thể giúp em không ạ?) 'Can you open the door, please?' (Bạn mở cửa giúp em được không?)"] },
      { heading: "2. Thanking", body: ["Sau khi được giúp, nói: 'Thank you very much!' (Cảm ơn bạn rất nhiều!)"] },
    ],
    quiz: [
      { question: "'Could you help me, please?' nghĩa là gì?", options: ["Bạn có khoẻ không?", "Bạn có thể giúp em không ạ?", "Bạn tên là gì?", "Bạn ở đâu?"], correctIndex: 1, explanation: "Câu này là lời đề nghị giúp đỡ lịch sự." },
      { question: "Từ nào giúp câu nói trở nên lịch sự hơn?", options: ["Please", "No", "Stop", "Never"], correctIndex: 0, explanation: "'Please' làm câu nói lịch sự hơn." },
      { question: "Khi được giúp đỡ, em nên nói gì?", options: ["Goodbye", "Sorry", "Thank you", "No"], correctIndex: 2, explanation: "'Thank you' dùng để cảm ơn." },
      { question: "'Can you open the door, please?' nghĩa là gì?", options: ["Bạn đóng cửa giúp em được không?", "Bạn mở cửa giúp em được không?", "Cửa ở đâu?", "Bạn có cửa không?"], correctIndex: 1, explanation: "Câu này nghĩa là lời nhờ mở cửa lịch sự." },
    ],
    funFact: "Người Anh được biết đến là rất chú trọng phép lịch sự, họ nói 'please' và 'thank you' rất thường xuyên!",
  },
  "tieng-anh:3:making-simple-requests": {
    objectives: ["Học cách đưa ra yêu cầu đơn giản.", "Sử dụng 'I want' và 'can I' đúng cách."],
    sections: [
      { heading: "1. Simple Requests", body: ["'Can I have some water, please?' (Cho em xin ít nước ạ.) 'I want to go outside.' (Em muốn ra ngoài.)"] },
      { heading: "2. Responding", body: ["Trả lời đồng ý: 'Sure, here you are.' (Được, của bạn đây.)"] },
    ],
    quiz: [
      { question: "'Can I have some water, please?' nghĩa là gì?", options: ["Cho em xin ít nước ạ.", "Nước ở đâu?", "Em không muốn uống nước.", "Bạn có nước không?"], correctIndex: 0, explanation: "Câu này là lời yêu cầu xin nước." },
      { question: "'I want to go outside.' nghĩa là gì?", options: ["Em muốn ở trong nhà.", "Em muốn ra ngoài.", "Em muốn đi ngủ.", "Em muốn ăn cơm."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em muốn ra ngoài.'" },
      { question: "'Sure, here you are.' dùng để làm gì?", options: ["Từ chối yêu cầu", "Đồng ý và đưa vật gì đó", "Hỏi lại", "Xin lỗi"], correctIndex: 1, explanation: "Câu này dùng để đồng ý và trao đồ vật." },
      { question: "'Can I...?' dùng để làm gì?", options: ["Đưa ra lời khen", "Đưa ra yêu cầu, xin phép", "Chào hỏi", "Tạm biệt"], correctIndex: 1, explanation: "'Can I...?' dùng để xin phép hoặc đưa ra yêu cầu." },
    ],
    funFact: "Trong tiếng Anh, 'May I...?' cũng dùng để xin phép, nghe trang trọng hơn 'Can I...?'!",
  },
  "tieng-anh:3:telling-a-short-story": {
    objectives: ["Luyện kể một câu chuyện ngắn bằng tiếng Anh.", "Sử dụng từ nối để kể chuyện mạch lạc."],
    sections: [
      { heading: "1. Story Words", body: ["First (đầu tiên), then (sau đó), next (tiếp theo), finally (cuối cùng)."] },
      { heading: "2. Simple Story", body: ["'First, I woke up. Then, I brushed my teeth. Finally, I went to school.' (Đầu tiên, em thức dậy. Sau đó, em đánh răng. Cuối cùng, em đến trường.)"] },
    ],
    quiz: [
      { question: "'First' nghĩa là gì?", options: ["Cuối cùng", "Đầu tiên", "Sau đó", "Tiếp theo"], correctIndex: 1, explanation: "'First' nghĩa là 'Đầu tiên'." },
      { question: "'Finally' nghĩa là gì?", options: ["Đầu tiên", "Sau đó", "Cuối cùng", "Bây giờ"], correctIndex: 2, explanation: "'Finally' nghĩa là 'Cuối cùng'." },
      { question: "Từ nào giúp câu chuyện có trình tự rõ ràng?", options: ["First, then, finally", "Red, blue, green", "Big, small, tall", "Happy, sad, angry"], correctIndex: 0, explanation: "Các từ chỉ trình tự giúp câu chuyện mạch lạc." },
      { question: "'Then' nghĩa là gì?", options: ["Sau đó", "Trước đó", "Không bao giờ", "Luôn luôn"], correctIndex: 0, explanation: "'Then' nghĩa là 'Sau đó'." },
    ],
    funFact: "Kể chuyện là một trong những cách học ngôn ngữ tự nhiên và hiệu quả nhất!",
  },
  "tieng-anh:3:days-and-dates": {
    objectives: ["Ôn tập cách nói ngày, tháng bằng tiếng Anh.", "Nói được câu hỏi và trả lời về ngày tháng."],
    sections: [
      { heading: "1. Days of the Week", body: ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday."] },
      { heading: "2. Talking About Dates", body: ["'What day is it today?' (Hôm nay là thứ mấy?) 'Today is Monday.' (Hôm nay là thứ Hai.)"] },
    ],
    quiz: [
      { question: "'Monday' nghĩa là gì?", options: ["Thứ Hai", "Thứ Ba", "Chủ nhật", "Thứ Bảy"], correctIndex: 0, explanation: "'Monday' nghĩa là 'Thứ Hai'." },
      { question: "'Sunday' nghĩa là gì?", options: ["Thứ Bảy", "Chủ nhật", "Thứ Sáu", "Thứ Hai"], correctIndex: 1, explanation: "'Sunday' nghĩa là 'Chủ nhật'." },
      { question: "'What day is it today?' dùng để hỏi điều gì?", options: ["Hỏi hôm nay là thứ mấy", "Hỏi thời tiết", "Hỏi giờ", "Hỏi tháng"], correctIndex: 0, explanation: "Câu này hỏi về ngày trong tuần." },
      { question: "Ngày nào đến sau 'Friday'?", options: ["Thursday", "Saturday", "Sunday", "Monday"], correctIndex: 1, explanation: "Sau 'Friday' (thứ Sáu) là 'Saturday' (thứ Bảy)." },
    ],
    funFact: "Trong tiếng Anh, tuần thường bắt đầu từ 'Sunday' hoặc 'Monday' tuỳ theo quốc gia!",
  },
  "tieng-anh:3:months-of-the-year-review": {
    objectives: ["Ôn tập tên các tháng trong năm.", "Nói được câu về tháng sinh nhật."],
    sections: [
      { heading: "1. Months", body: ["January, February, March, April, May, June, July, August, September, October, November, December."] },
      { heading: "2. Talking About Months", body: ["'My birthday is in June.' (Sinh nhật em vào tháng Sáu.)"] },
    ],
    quiz: [
      { question: "'January' là tháng mấy?", options: ["Tháng 1", "Tháng 2", "Tháng 12", "Tháng 6"], correctIndex: 0, explanation: "'January' là 'Tháng 1'." },
      { question: "'December' là tháng mấy?", options: ["Tháng 10", "Tháng 11", "Tháng 12", "Tháng 1"], correctIndex: 2, explanation: "'December' là 'Tháng 12'." },
      { question: "'My birthday is in June.' nghĩa là gì?", options: ["Sinh nhật em vào tháng Sáu.", "Sinh nhật em vào tháng Bảy.", "Em không có sinh nhật.", "Sinh nhật em vào tháng Một."], correctIndex: 0, explanation: "Câu này nghĩa là 'Sinh nhật em vào tháng Sáu.'" },
      { question: "Một năm có bao nhiêu tháng?", options: ["10", "11", "12", "13"], correctIndex: 2, explanation: "Một năm có 12 tháng." },
    ],
    funFact: "Tên các tháng trong tiếng Anh phần lớn bắt nguồn từ tên các vị thần La Mã cổ đại!",
  },
  "tieng-anh:3:my-dream-house": {
    objectives: ["Nói về ngôi nhà mơ ước của em.", "Sử dụng 'would like' để nói về mong muốn."],
    sections: [
      { heading: "1. House Vocabulary", body: ["Garden (vườn), swimming pool (bể bơi), big kitchen (bếp lớn), many rooms (nhiều phòng)."] },
      { heading: "2. Making Sentences", body: ["'I would like a house with a garden.' (Em muốn có một ngôi nhà có vườn.)"] },
    ],
    quiz: [
      { question: "'Garden' nghĩa là gì?", options: ["Vườn", "Bếp", "Phòng ngủ", "Bể bơi"], correctIndex: 0, explanation: "'Garden' nghĩa là 'Vườn'." },
      { question: "'Swimming pool' nghĩa là gì?", options: ["Vườn", "Bể bơi", "Sân chơi", "Ga ra"], correctIndex: 1, explanation: "'Swimming pool' nghĩa là 'Bể bơi'." },
      { question: "'I would like a house with a garden.' nghĩa là gì?", options: ["Em không thích vườn.", "Em muốn có một ngôi nhà có vườn.", "Nhà em có vườn rồi.", "Em muốn có bể bơi."], correctIndex: 1, explanation: "Câu này nghĩa là mong muốn có nhà với vườn." },
      { question: "'I would like...' dùng để diễn tả điều gì?", options: ["Mệnh lệnh", "Mong muốn", "Câu hỏi", "Lời xin lỗi"], correctIndex: 1, explanation: "'I would like...' dùng để diễn tả mong muốn một cách lịch sự." },
    ],
    funFact: "'Would like' lịch sự hơn 'want' và thường được dùng nhiều trong giao tiếp trang trọng!",
  },
  "tieng-anh:3:healthy-food": {
    objectives: ["Học từ vựng về thực phẩm tốt cho sức khoẻ.", "Nói về thói quen ăn uống lành mạnh."],
    sections: [
      { heading: "1. Healthy Food Vocabulary", body: ["Vegetables (rau củ), fruit (trái cây), fish (cá), water (nước)."] },
      { heading: "2. Making Sentences", body: ["'Vegetables are good for health.' (Rau củ tốt cho sức khoẻ.) 'I eat fruit every day.' (Em ăn trái cây mỗi ngày.)"] },
    ],
    quiz: [
      { question: "'Vegetables' nghĩa là gì?", options: ["Trái cây", "Rau củ", "Bánh kẹo", "Nước ngọt"], correctIndex: 1, explanation: "'Vegetables' nghĩa là 'Rau củ'." },
      { question: "'Vegetables are good for health.' nghĩa là gì?", options: ["Rau củ không tốt cho sức khoẻ.", "Rau củ tốt cho sức khoẻ.", "Em không thích rau củ.", "Rau củ rất đắt."], correctIndex: 1, explanation: "Câu này nghĩa là 'Rau củ tốt cho sức khoẻ.'" },
      { question: "'Fruit' nghĩa là gì?", options: ["Trái cây", "Rau", "Thịt", "Cá"], correctIndex: 0, explanation: "'Fruit' nghĩa là 'Trái cây'." },
      { question: "Loại thực phẩm nào tốt cho sức khoẻ?", options: ["Candy", "Vegetables", "Soda", "Chips"], correctIndex: 1, explanation: "'Vegetables' (rau củ) tốt cho sức khoẻ." },
    ],
    funFact: "Các chuyên gia khuyên nên ăn ít nhất 5 phần rau củ quả mỗi ngày để có sức khoẻ tốt!",
  },
  "tieng-anh:3:unhealthy-food": {
    objectives: ["Học từ vựng về thực phẩm không tốt cho sức khoẻ.", "Nói về việc hạn chế ăn đồ không lành mạnh."],
    sections: [
      { heading: "1. Unhealthy Food Vocabulary", body: ["Candy (kẹo), soda (nước ngọt có ga), chips (khoai tây chiên), fast food (đồ ăn nhanh)."] },
      { heading: "2. Making Sentences", body: ["'I don't eat too much candy.' (Em không ăn quá nhiều kẹo.) 'Soda is not good for teeth.' (Nước ngọt không tốt cho răng.)"] },
    ],
    quiz: [
      { question: "'Candy' nghĩa là gì?", options: ["Rau", "Kẹo", "Cá", "Trái cây"], correctIndex: 1, explanation: "'Candy' nghĩa là 'Kẹo'." },
      { question: "'Soda is not good for teeth.' nghĩa là gì?", options: ["Nước ngọt tốt cho răng.", "Nước ngọt không tốt cho răng.", "Em thích nước ngọt.", "Nước ngọt rất ngon."], correctIndex: 1, explanation: "Câu này nghĩa là nước ngọt không tốt cho răng." },
      { question: "'Fast food' nghĩa là gì?", options: ["Đồ ăn nhanh", "Đồ ăn chậm", "Rau củ", "Trái cây tươi"], correctIndex: 0, explanation: "'Fast food' nghĩa là 'Đồ ăn nhanh'." },
      { question: "'I don't eat too much candy.' nghĩa là gì?", options: ["Em ăn rất nhiều kẹo.", "Em không ăn quá nhiều kẹo.", "Em không thích kẹo.", "Em ăn kẹo mỗi ngày."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em không ăn quá nhiều kẹo.'" },
    ],
    funFact: "Ăn quá nhiều đường có thể gây hại cho răng và sức khoẻ, nên các bác sĩ khuyên hạn chế ăn kẹo!",
  },
  "tieng-anh:3:at-the-doctor-s": {
    objectives: ["Học mẫu câu khi đi khám bác sĩ.", "Nói về các triệu chứng đơn giản."],
    sections: [
      { heading: "1. Symptoms Vocabulary", body: ["Headache (đau đầu), stomachache (đau bụng), fever (sốt), cough (ho)."] },
      { heading: "2. Talking to the Doctor", body: ["'I have a headache.' (Em bị đau đầu.) 'What's wrong?' (Bạn bị làm sao?)"] },
    ],
    quiz: [
      { question: "'Headache' nghĩa là gì?", options: ["Đau bụng", "Đau đầu", "Sốt", "Ho"], correctIndex: 1, explanation: "'Headache' nghĩa là 'Đau đầu'." },
      { question: "'Fever' nghĩa là gì?", options: ["Sốt", "Ho", "Đau đầu", "Đau bụng"], correctIndex: 0, explanation: "'Fever' nghĩa là 'Sốt'." },
      { question: "'I have a headache.' nghĩa là gì?", options: ["Em bị đau bụng.", "Em bị đau đầu.", "Em bị sốt.", "Em bị ho."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em bị đau đầu.'" },
      { question: "'What's wrong?' dùng để hỏi điều gì?", options: ["Hỏi tên", "Hỏi bạn bị làm sao", "Hỏi tuổi", "Hỏi địa chỉ"], correctIndex: 1, explanation: "Câu này hỏi về vấn đề sức khoẻ." },
    ],
    funFact: "Ở Anh, người dân thường gọi bác sĩ gia đình là 'GP' (General Practitioner)!",
  },
  "tieng-anh:3:feelings-and-emotions": {
    objectives: ["Học từ vựng diễn tả cảm xúc.", "Nói được câu về cảm xúc của bản thân."],
    sections: [
      { heading: "1. Emotions Vocabulary", body: ["Happy (vui), sad (buồn), angry (giận), tired (mệt), excited (hào hứng)."] },
      { heading: "2. Making Sentences", body: ["'I am happy today.' (Hôm nay em vui.) 'How do you feel?' (Bạn cảm thấy thế nào?)"] },
    ],
    quiz: [
      { question: "'Happy' nghĩa là gì?", options: ["Buồn", "Vui", "Giận", "Mệt"], correctIndex: 1, explanation: "'Happy' nghĩa là 'Vui'." },
      { question: "'Angry' nghĩa là gì?", options: ["Vui", "Giận", "Hào hứng", "Buồn"], correctIndex: 1, explanation: "'Angry' nghĩa là 'Giận'." },
      { question: "'I am happy today.' nghĩa là gì?", options: ["Hôm nay em buồn.", "Hôm nay em vui.", "Hôm nay em mệt.", "Hôm nay em giận."], correctIndex: 1, explanation: "Câu này nghĩa là 'Hôm nay em vui.'" },
      { question: "'Tired' nghĩa là gì?", options: ["Mệt", "Vui", "Hào hứng", "Buồn"], correctIndex: 0, explanation: "'Tired' nghĩa là 'Mệt'." },
    ],
    funFact: "Biểu cảm khuôn mặt như nụ cười được hiểu giống nhau ở hầu hết các nền văn hoá trên thế giới!",
  },
  "tieng-anh:3:making-new-friends": {
    objectives: ["Học mẫu câu khi làm quen bạn mới.", "Giới thiệu bản thân và hỏi thông tin bạn mới."],
    sections: [
      { heading: "1. Introducing Yourself", body: ["'Hi, my name is Lan. What's your name?' (Chào bạn, tên mình là Lan. Bạn tên gì?)"] },
      { heading: "2. Asking Questions", body: ["'Where are you from?' (Bạn đến từ đâu?) 'Nice to meet you!' (Rất vui được gặp bạn!)"] },
    ],
    quiz: [
      { question: "'What's your name?' dùng để hỏi điều gì?", options: ["Hỏi tuổi", "Hỏi tên", "Hỏi địa chỉ", "Hỏi sở thích"], correctIndex: 1, explanation: "Câu này hỏi về tên của người khác." },
      { question: "'Nice to meet you!' nghĩa là gì?", options: ["Tạm biệt bạn!", "Rất vui được gặp bạn!", "Xin lỗi bạn!", "Cảm ơn bạn!"], correctIndex: 1, explanation: "Câu này dùng khi mới gặp ai đó lần đầu." },
      { question: "'Where are you from?' dùng để hỏi điều gì?", options: ["Hỏi bạn đến từ đâu", "Hỏi bạn đi đâu", "Hỏi bạn làm gì", "Hỏi bạn thích gì"], correctIndex: 0, explanation: "Câu này hỏi về quê quán, nơi xuất thân." },
      { question: "Khi làm quen bạn mới, em nên có thái độ như thế nào?", options: ["Lạnh lùng", "Thân thiện, cởi mở", "Im lặng", "Trốn tránh"], correctIndex: 1, explanation: "Thái độ thân thiện giúp dễ dàng kết bạn." },
    ],
    funFact: "Cách chào hỏi làm quen khác nhau ở mỗi nền văn hoá — ở Nhật Bản người ta thường cúi chào thay vì bắt tay!",
  },
  "tieng-anh:3:school-rules": {
    objectives: ["Học từ vựng và mẫu câu về nội quy trường học.", "Nói được các quy định nên và không nên làm."],
    sections: [
      { heading: "1. School Rules Vocabulary", body: ["Must (phải), mustn't (không được), be on time (đúng giờ), wear uniform (mặc đồng phục)."] },
      { heading: "2. Making Sentences", body: ["'You must be on time.' (Bạn phải đúng giờ.) 'You mustn't run in the corridor.' (Bạn không được chạy trong hành lang.)"] },
    ],
    quiz: [
      { question: "'Must' nghĩa là gì?", options: ["Không được", "Phải", "Có thể", "Không cần"], correctIndex: 1, explanation: "'Must' nghĩa là 'Phải'." },
      { question: "'Mustn't' nghĩa là gì?", options: ["Phải", "Không được", "Có thể", "Nên"], correctIndex: 1, explanation: "'Mustn't' nghĩa là 'Không được'." },
      { question: "'You must be on time.' nghĩa là gì?", options: ["Bạn không cần đúng giờ.", "Bạn phải đúng giờ.", "Bạn có thể đến muộn.", "Bạn không được đến."], correctIndex: 1, explanation: "Câu này nghĩa là 'Bạn phải đúng giờ.'" },
      { question: "'You mustn't run in the corridor.' nghĩa là gì?", options: ["Bạn phải chạy trong hành lang.", "Bạn không được chạy trong hành lang.", "Bạn có thể chạy ở bất cứ đâu.", "Không có hành lang ở trường."], correctIndex: 1, explanation: "Câu này nghĩa là quy định cấm chạy trong hành lang." },
    ],
    funFact: "Nhiều trường học trên thế giới đều có quy định chung: đến đúng giờ, tôn trọng thầy cô và bạn bè!",
  },
  "tieng-anh:3:my-neighbourhood-review": {
    objectives: ["Ôn tập từ vựng về khu phố nơi em sống.", "Mô tả các địa điểm quen thuộc gần nhà."],
    sections: [
      { heading: "1. Neighbourhood Vocabulary", body: ["Park (công viên), market (chợ), hospital (bệnh viện), post office (bưu điện)."] },
      { heading: "2. Making Sentences", body: ["'There is a park near my house.' (Có một công viên gần nhà em.)"] },
    ],
    quiz: [
      { question: "'Park' nghĩa là gì?", options: ["Chợ", "Công viên", "Bệnh viện", "Bưu điện"], correctIndex: 1, explanation: "'Park' nghĩa là 'Công viên'." },
      { question: "'Hospital' nghĩa là gì?", options: ["Bệnh viện", "Trường học", "Công viên", "Chợ"], correctIndex: 0, explanation: "'Hospital' nghĩa là 'Bệnh viện'." },
      { question: "'There is a park near my house.' nghĩa là gì?", options: ["Không có công viên gần nhà em.", "Có một công viên gần nhà em.", "Công viên rất xa nhà em.", "Em không thích công viên."], correctIndex: 1, explanation: "Câu này nghĩa là 'Có một công viên gần nhà em.'" },
      { question: "'Post office' nghĩa là gì?", options: ["Bưu điện", "Bệnh viện", "Trường học", "Siêu thị"], correctIndex: 0, explanation: "'Post office' nghĩa là 'Bưu điện'." },
    ],
    funFact: "'There is/There are' dùng để nói về sự tồn tại của vật/người ở một nơi nào đó!",
  },
  "tieng-anh:3:shopping-for-school-supplies": {
    objectives: ["Học mẫu câu khi mua đồ dùng học tập.", "Học từ vựng về dụng cụ học tập."],
    sections: [
      { heading: "1. School Supplies Vocabulary", body: ["Notebook (vở), pencil case (hộp bút), ruler (thước kẻ), eraser (cục tẩy)."] },
      { heading: "2. Making Sentences", body: ["'I need a new notebook.' (Em cần một quyển vở mới.) 'How much is this ruler?' (Thước kẻ này giá bao nhiêu?)"] },
    ],
    quiz: [
      { question: "'Notebook' nghĩa là gì?", options: ["Vở", "Bút", "Thước kẻ", "Cục tẩy"], correctIndex: 0, explanation: "'Notebook' nghĩa là 'Vở'." },
      { question: "'Eraser' nghĩa là gì?", options: ["Thước kẻ", "Cục tẩy", "Bút chì", "Vở"], correctIndex: 1, explanation: "'Eraser' nghĩa là 'Cục tẩy'." },
      { question: "'I need a new notebook.' nghĩa là gì?", options: ["Em cần một quyển vở mới.", "Em có nhiều vở.", "Em không cần vở.", "Vở của em rất đẹp."], correctIndex: 0, explanation: "Câu này nghĩa là 'Em cần một quyển vở mới.'" },
      { question: "'Pencil case' nghĩa là gì?", options: ["Hộp bút", "Cặp sách", "Bàn học", "Ghế ngồi"], correctIndex: 0, explanation: "'Pencil case' nghĩa là 'Hộp bút'." },
    ],
    funFact: "Bút chì đầu tiên trên thế giới được làm từ than chì, xuất hiện từ thế kỷ 16!",
  },
  "tieng-anh:3:describing-a-picture": {
    objectives: ["Luyện mô tả một bức tranh bằng câu đơn giản.", "Sử dụng 'there is/there are' để mô tả."],
    sections: [
      { heading: "1. Describing a Picture", body: ["'There is a dog in the picture.' (Có một con chó trong bức tranh.) 'There are two children.' (Có hai đứa trẻ.)"] },
      { heading: "2. Adding Details", body: ["'The dog is brown.' (Con chó màu nâu.) 'The children are happy.' (Hai đứa trẻ đang vui vẻ.)"] },
    ],
    quiz: [
      { question: "'There is' dùng khi nào?", options: ["Khi nói về nhiều vật", "Khi nói về một vật", "Khi hỏi câu hỏi", "Không dùng khi nào"], correctIndex: 1, explanation: "'There is' dùng với danh từ số ít." },
      { question: "'There are' dùng khi nào?", options: ["Khi nói về một vật", "Khi nói về nhiều vật", "Không dùng khi nào", "Chỉ dùng với người"], correctIndex: 1, explanation: "'There are' dùng với danh từ số nhiều." },
      { question: "'There is a dog in the picture.' nghĩa là gì?", options: ["Không có con chó nào trong tranh.", "Có một con chó trong bức tranh.", "Có hai con chó trong tranh.", "Con chó không có trong tranh."], correctIndex: 1, explanation: "Câu này nghĩa là 'Có một con chó trong bức tranh.'" },
      { question: "'The children are happy.' nghĩa là gì?", options: ["Hai đứa trẻ đang buồn.", "Hai đứa trẻ đang vui vẻ.", "Không có đứa trẻ nào.", "Đứa trẻ đang ngủ."], correctIndex: 1, explanation: "Câu này nghĩa là 'Hai đứa trẻ đang vui vẻ.'" },
    ],
    funFact: "Mô tả tranh là một kỹ năng thường xuất hiện trong các bài thi tiếng Anh quốc tế dành cho thiếu nhi!",
  },
  "tieng-anh:3:short-dialogues-practice": {
    objectives: ["Luyện tập các đoạn hội thoại ngắn.", "Thực hành phản xạ giao tiếp bằng tiếng Anh."],
    sections: [
      { heading: "1. Sample Dialogue", body: ["A: 'Hi, how are you?' B: 'I'm fine, thanks. And you?' A: 'I'm good too!'"] },
      { heading: "2. Practicing", body: ["Luyện đóng vai theo cặp để phản xạ nhanh hơn khi giao tiếp."] },
    ],
    quiz: [
      { question: "'I'm fine, thanks. And you?' nghĩa là gì?", options: ["Em khoẻ, cảm ơn. Còn bạn thì sao?", "Em không khoẻ.", "Tạm biệt bạn.", "Bạn tên là gì?"], correctIndex: 0, explanation: "Câu này là câu trả lời và hỏi lại lịch sự." },
      { question: "Luyện tập hội thoại theo cặp giúp ích gì?", options: ["Không có ích gì", "Phản xạ giao tiếp nhanh hơn", "Làm mất thời gian", "Không liên quan đến nói"], correctIndex: 1, explanation: "Luyện tập theo cặp giúp phản xạ giao tiếp nhanh hơn." },
      { question: "'And you?' dùng để làm gì?", options: ["Hỏi lại người kia", "Kết thúc hội thoại", "Từ chối trả lời", "Không có tác dụng"], correctIndex: 0, explanation: "'And you?' dùng để hỏi lại đối phương câu hỏi tương tự." },
      { question: "Khi luyện hội thoại, em nên chú ý điều gì?", options: ["Nói thật nhanh không cần hiểu", "Phát âm rõ ràng, tự tin", "Không cần nhìn bạn", "Chỉ đọc theo sách"], correctIndex: 1, explanation: "Phát âm rõ ràng, tự tin giúp giao tiếp hiệu quả hơn." },
    ],
    funFact: "Luyện tập hội thoại thường xuyên là cách nhanh nhất để tự tin nói tiếng Anh!",
  },
  "tieng-anh:3:listening-for-key-words": {
    objectives: ["Rèn kỹ năng nghe và bắt từ khoá.", "Nhận biết từ quan trọng trong câu nói."],
    sections: [
      { heading: "1. Why Key Words Matter", body: ["Khi nghe tiếng Anh, không cần hiểu hết từng từ — hãy tập trung vào từ khoá quan trọng."] },
      { heading: "2. Practice Tip", body: ["Nghe câu 'I have a red bike.' — từ khoá là 'red' và 'bike', giúp hiểu ý chính dù bỏ lỡ vài từ khác."] },
    ],
    quiz: [
      { question: "Từ khoá trong câu nói giúp ích điều gì?", options: ["Không có ích gì", "Hiểu ý chính dù không nghe hết", "Làm bài khó hơn", "Không liên quan đến nghe hiểu"], correctIndex: 1, explanation: "Từ khoá giúp hiểu ý chính dù không nghe rõ hết câu." },
      { question: "Trong câu 'I have a red bike.', từ nào là từ khoá quan trọng?", options: ["I, have", "Red, bike", "A", "Không có từ khoá nào"], correctIndex: 1, explanation: "'Red' và 'bike' là các từ mang thông tin chính." },
      { question: "Khi luyện nghe, em nên làm gì nếu không hiểu hết câu?", options: ["Dừng lại không nghe nữa", "Tập trung vào từ khoá đã nghe được", "Đoán bừa không cần nghe", "Bỏ qua hoàn toàn"], correctIndex: 1, explanation: "Nên tập trung vào từ khoá thay vì cố hiểu từng từ." },
      { question: "Kỹ năng nghe bắt từ khoá hữu ích khi nào?", options: ["Khi nghe hội thoại tiếng Anh tốc độ nhanh", "Không hữu ích khi nào", "Chỉ khi đọc sách", "Chỉ khi viết bài"], correctIndex: 0, explanation: "Kỹ năng này đặc biệt hữu ích khi nghe hội thoại tốc độ nhanh." },
    ],
    funFact: "Người bản xứ cũng thường không nghe rõ từng từ mà dựa vào ngữ cảnh và từ khoá để hiểu!",
  },
  "tieng-anh:3:simple-songs-and-chants": {
    objectives: ["Học tiếng Anh qua bài hát, vần điệu đơn giản.", "Ghi nhớ từ vựng dễ dàng hơn qua âm nhạc."],
    sections: [
      { heading: "1. Why Songs Help", body: ["Bài hát có giai điệu lặp lại giúp ghi nhớ từ vựng và mẫu câu dễ dàng hơn."] },
      { heading: "2. Example Chant", body: ["'Head, shoulders, knees and toes, knees and toes!' — bài hát vui giúp học từ vựng về cơ thể."] },
    ],
    quiz: [
      { question: "Bài hát tiếng Anh giúp ích điều gì cho việc học?", options: ["Không có ích gì", "Ghi nhớ từ vựng dễ dàng hơn", "Làm mất thời gian", "Không liên quan đến học tiếng Anh"], correctIndex: 1, explanation: "Bài hát giúp ghi nhớ từ vựng và mẫu câu tự nhiên hơn." },
      { question: "'Head, shoulders, knees and toes' là bài hát về chủ đề gì?", options: ["Màu sắc", "Bộ phận cơ thể", "Con vật", "Thức ăn"], correctIndex: 1, explanation: "Bài hát này liệt kê các bộ phận cơ thể." },
      { question: "Vì sao giai điệu lặp lại giúp học tốt hơn?", options: ["Không có lý do gì", "Giúp não bộ ghi nhớ dễ dàng qua lặp lại", "Làm bài hát dài hơn", "Không liên quan đến trí nhớ"], correctIndex: 1, explanation: "Sự lặp lại giúp não bộ ghi nhớ thông tin tốt hơn." },
      { question: "'Shoulders' nghĩa là gì?", options: ["Vai", "Đầu gối", "Ngón chân", "Đầu"], correctIndex: 0, explanation: "'Shoulders' nghĩa là 'Vai'." },
    ],
    funFact: "Nhiều nghiên cứu cho thấy học ngôn ngữ qua âm nhạc giúp trẻ ghi nhớ lâu hơn so với chỉ học chữ viết!",
  },
  "tieng-anh:3:vocabulary-game-word-match": {
    objectives: ["Ôn luyện từ vựng qua trò chơi ghép từ.", "Củng cố trí nhớ về từ vựng đã học."],
    sections: [
      { heading: "1. How to Play", body: ["Ghép từ tiếng Anh với nghĩa tiếng Việt tương ứng, ví dụ: 'Dog' — 'Con chó'."] },
      { heading: "2. Practice Tip", body: ["Chơi thường xuyên giúp nhớ từ vựng lâu hơn và phản xạ nhanh hơn."] },
    ],
    quiz: [
      { question: "Trò chơi ghép từ giúp ích điều gì?", options: ["Không có ích gì", "Củng cố trí nhớ từ vựng", "Làm bài khó hơn", "Không liên quan đến từ vựng"], correctIndex: 1, explanation: "Trò chơi ghép từ giúp củng cố trí nhớ từ vựng." },
      { question: "'Cat' ghép với nghĩa tiếng Việt nào?", options: ["Con chó", "Con mèo", "Con cá", "Con thỏ"], correctIndex: 1, explanation: "'Cat' nghĩa là 'Con mèo'." },
      { question: "Chơi trò chơi từ vựng thường xuyên mang lại lợi ích gì?", options: ["Nhớ từ lâu hơn, phản xạ nhanh hơn", "Không có lợi ích gì", "Làm quên từ nhanh hơn", "Không liên quan đến ghi nhớ"], correctIndex: 0, explanation: "Luyện tập thường xuyên giúp nhớ từ lâu hơn và phản xạ nhanh." },
      { question: "'Bird' ghép với nghĩa tiếng Việt nào?", options: ["Con chim", "Con cá", "Con mèo", "Con chó"], correctIndex: 0, explanation: "'Bird' nghĩa là 'Con chim'." },
    ],
    funFact: "Trò chơi ghép từ (matching game) là một trong những phương pháp học từ vựng phổ biến nhất!",
  },
  "tieng-anh:3:review-colours-numbers-animals": {
    objectives: ["Ôn tập từ vựng về màu sắc, số đếm, con vật.", "Củng cố kiến thức đã học."],
    sections: [
      { heading: "1. Review", body: ["Colours: red, blue, green, yellow. Numbers: one, two, three... Animals: dog, cat, elephant, lion."] },
    ],
    quiz: [
      { question: "'Red' nghĩa là gì?", options: ["Xanh", "Đỏ", "Vàng", "Tím"], correctIndex: 1, explanation: "'Red' nghĩa là 'Đỏ'." },
      { question: "Số 'five' là số mấy?", options: ["3", "4", "5", "6"], correctIndex: 2, explanation: "'Five' là số 5." },
      { question: "'Elephant' nghĩa là gì?", options: ["Voi", "Sư tử", "Hổ", "Khỉ"], correctIndex: 0, explanation: "'Elephant' nghĩa là 'Voi'." },
      { question: "'Green' nghĩa là gì?", options: ["Xanh lá", "Đỏ", "Vàng", "Nâu"], correctIndex: 0, explanation: "'Green' nghĩa là 'Xanh lá'." },
    ],
    funFact: "Ôn tập thường xuyên giúp từ vựng ghi nhớ lâu dài trong trí nhớ dài hạn!",
  },
  "tieng-anh:3:review-family-and-friends": {
    objectives: ["Ôn tập từ vựng về gia đình và bạn bè.", "Củng cố mẫu câu giới thiệu người thân."],
    sections: [
      { heading: "1. Review", body: ["Family: father, mother, brother, sister, grandmother. Friends: best friend, classmate."] },
    ],
    quiz: [
      { question: "'Father' nghĩa là gì?", options: ["Mẹ", "Bố", "Anh", "Em"], correctIndex: 1, explanation: "'Father' nghĩa là 'Bố'." },
      { question: "'Best friend' nghĩa là gì?", options: ["Bạn thân nhất", "Bạn cùng lớp", "Người lạ", "Hàng xóm"], correctIndex: 0, explanation: "'Best friend' nghĩa là 'Bạn thân nhất'." },
      { question: "'Sister' nghĩa là gì?", options: ["Anh trai", "Chị/em gái", "Bố", "Ông"], correctIndex: 1, explanation: "'Sister' nghĩa là 'Chị/em gái'." },
      { question: "'Classmate' nghĩa là gì?", options: ["Bạn cùng lớp", "Giáo viên", "Hiệu trưởng", "Người lạ"], correctIndex: 0, explanation: "'Classmate' nghĩa là 'Bạn cùng lớp'." },
    ],
    funFact: "Tình bạn và gia đình là hai chủ đề phổ biến nhất trong các bài học tiếng Anh cho thiếu nhi!",
  },
  "tieng-anh:3:review-food-and-drinks": {
    objectives: ["Ôn tập từ vựng về món ăn, đồ uống.", "Củng cố mẫu câu gọi món."],
    sections: [
      { heading: "1. Review", body: ["Food: rice, bread, noodles, fruit. Drinks: water, milk, juice, tea."] },
    ],
    quiz: [
      { question: "'Rice' nghĩa là gì?", options: ["Bánh mì", "Cơm", "Mì", "Trái cây"], correctIndex: 1, explanation: "'Rice' nghĩa là 'Cơm'." },
      { question: "'Milk' nghĩa là gì?", options: ["Nước", "Sữa", "Trà", "Nước ép"], correctIndex: 1, explanation: "'Milk' nghĩa là 'Sữa'." },
      { question: "'Noodles' nghĩa là gì?", options: ["Mì", "Cơm", "Bánh mì", "Bánh ngọt"], correctIndex: 0, explanation: "'Noodles' nghĩa là 'Mì'." },
      { question: "'Juice' nghĩa là gì?", options: ["Nước ép", "Sữa", "Trà", "Nước lọc"], correctIndex: 0, explanation: "'Juice' nghĩa là 'Nước ép'." },
    ],
    funFact: "Cơm là món ăn chính của hơn một nửa dân số thế giới!",
  },
  "tieng-anh:3:mid-term-review-1": {
    objectives: ["Ôn tập giữa học kỳ 1.", "Củng cố kiến thức trọng tâm đã học."],
    sections: [
      { heading: "1. Review", body: ["Ôn lại: greetings, family, school, numbers, colours, animals."] },
    ],
    quiz: [
      { question: "'Hello' nghĩa là gì?", options: ["Tạm biệt", "Xin chào", "Cảm ơn", "Xin lỗi"], correctIndex: 1, explanation: "'Hello' nghĩa là 'Xin chào'." },
      { question: "'School' nghĩa là gì?", options: ["Nhà", "Trường học", "Công viên", "Bệnh viện"], correctIndex: 1, explanation: "'School' nghĩa là 'Trường học'." },
      { question: "'Mother' nghĩa là gì?", options: ["Bố", "Mẹ", "Anh", "Chị"], correctIndex: 1, explanation: "'Mother' nghĩa là 'Mẹ'." },
      { question: "'Three' là số mấy?", options: ["1", "2", "3", "4"], correctIndex: 2, explanation: "'Three' là số 3." },
    ],
    funFact: "Ôn tập giữa kỳ giúp em nhận ra phần nào cần học kỹ hơn trước khi thi!",
  },
  "tieng-anh:3:end-of-term-1-review": {
    objectives: ["Ôn tập cuối học kỳ 1.", "Tổng hợp toàn bộ kiến thức học kỳ 1."],
    sections: [
      { heading: "1. Review", body: ["Ôn lại toàn bộ chủ đề học kỳ 1: greetings, school, house, hobbies, weather, friends, numbers, food."] },
    ],
    quiz: [
      { question: "'House' nghĩa là gì?", options: ["Nhà", "Trường học", "Công viên", "Chợ"], correctIndex: 0, explanation: "'House' nghĩa là 'Nhà'." },
      { question: "'Hobby' nghĩa là gì?", options: ["Sở thích", "Công việc", "Bài tập", "Kỳ nghỉ"], correctIndex: 0, explanation: "'Hobby' nghĩa là 'Sở thích'." },
      { question: "'Weather' nghĩa là gì?", options: ["Thời tiết", "Thời gian", "Mùa", "Ngày tháng"], correctIndex: 0, explanation: "'Weather' nghĩa là 'Thời tiết'." },
      { question: "'Friend' nghĩa là gì?", options: ["Bạn bè", "Gia đình", "Thầy cô", "Hàng xóm"], correctIndex: 0, explanation: "'Friend' nghĩa là 'Bạn bè'." },
    ],
    funFact: "Ôn tập cuối kỳ giúp em tự tin hơn khi bước vào bài kiểm tra tổng kết!",
  },
  "tieng-anh:3:mid-term-review-2": {
    objectives: ["Ôn tập giữa học kỳ 2.", "Củng cố kiến thức đã học trong nửa đầu học kỳ 2."],
    sections: [
      { heading: "1. Review", body: ["Ôn lại: can/can't, prepositions, this/that, jobs, transportation, seasons."] },
    ],
    quiz: [
      { question: "'Doctor' nghĩa là gì?", options: ["Giáo viên", "Bác sĩ", "Nông dân", "Kỹ sư"], correctIndex: 1, explanation: "'Doctor' nghĩa là 'Bác sĩ'." },
      { question: "'I can swim.' nghĩa là gì?", options: ["Em không thể bơi.", "Em có thể bơi.", "Em thích bơi.", "Em sợ nước."], correctIndex: 1, explanation: "'Can' nghĩa là 'có thể'." },
      { question: "'Under' nghĩa là gì?", options: ["Trên", "Dưới", "Bên cạnh", "Ở giữa"], correctIndex: 1, explanation: "'Under' nghĩa là 'Dưới'." },
      { question: "'Bus' nghĩa là gì?", options: ["Xe buýt", "Xe đạp", "Tàu hoả", "Máy bay"], correctIndex: 0, explanation: "'Bus' nghĩa là 'Xe buýt'." },
    ],
    funFact: "Càng ôn tập đều đặn, kiến thức càng được ghi nhớ lâu dài trong trí nhớ!",
  },
  "tieng-anh:3:reading-short-stories": {
    objectives: ["Luyện đọc hiểu truyện ngắn đơn giản.", "Trả lời câu hỏi về nội dung truyện."],
    sections: [
      { heading: "1. Reading Tip", body: ["Đọc tiêu đề và tranh minh hoạ trước để đoán nội dung truyện."] },
      { heading: "2. Comprehension", body: ["Sau khi đọc, trả lời câu hỏi: Who? What? Where? để kiểm tra hiểu bài."] },
    ],
    quiz: [
      { question: "Trước khi đọc truyện, em nên làm gì?", options: ["Đọc ngay không cần chuẩn bị", "Xem tiêu đề và tranh minh hoạ", "Bỏ qua tiêu đề", "Không cần làm gì"], correctIndex: 1, explanation: "Xem tiêu đề và tranh giúp đoán trước nội dung." },
      { question: "Câu hỏi 'Who?' dùng để hỏi về điều gì trong truyện?", options: ["Nhân vật", "Địa điểm", "Thời gian", "Màu sắc"], correctIndex: 0, explanation: "'Who?' hỏi về nhân vật trong truyện." },
      { question: "Đọc truyện ngắn giúp ích điều gì cho việc học tiếng Anh?", options: ["Không có ích gì", "Mở rộng vốn từ và khả năng đọc hiểu", "Làm mất thời gian", "Không liên quan đến tiếng Anh"], correctIndex: 1, explanation: "Đọc truyện giúp mở rộng vốn từ và khả năng đọc hiểu." },
      { question: "Câu hỏi 'Where?' dùng để hỏi về điều gì?", options: ["Địa điểm", "Nhân vật", "Thời gian", "Hành động"], correctIndex: 0, explanation: "'Where?' hỏi về địa điểm trong truyện." },
    ],
    funFact: "Đọc truyện tranh song ngữ là cách thú vị để vừa học tiếng Anh vừa giải trí!",
  },
  "tieng-anh:3:writing-short-sentences": {
    objectives: ["Luyện viết câu đơn giản bằng tiếng Anh.", "Sử dụng đúng cấu trúc câu cơ bản."],
    sections: [
      { heading: "1. Sentence Structure", body: ["Câu tiếng Anh cơ bản có cấu trúc: Subject + Verb + Object. Ví dụ: 'I like apples.' (Em thích táo.)"] },
      { heading: "2. Practice", body: ["Viết câu bắt đầu bằng chữ hoa và kết thúc bằng dấu chấm: 'She is my friend.'"] },
    ],
    quiz: [
      { question: "Câu tiếng Anh cơ bản có cấu trúc nào?", options: ["Verb + Subject + Object", "Subject + Verb + Object", "Object + Subject + Verb", "Không có cấu trúc cố định"], correctIndex: 1, explanation: "Cấu trúc câu cơ bản là Subject + Verb + Object." },
      { question: "Câu tiếng Anh cần bắt đầu bằng gì?", options: ["Chữ thường", "Chữ hoa", "Dấu chấm", "Dấu phẩy"], correctIndex: 1, explanation: "Câu tiếng Anh luôn bắt đầu bằng chữ hoa." },
      { question: "'I like apples.' có cấu trúc nào?", options: ["Subject (I) + Verb (like) + Object (apples)", "Chỉ có Subject", "Chỉ có Verb", "Không theo cấu trúc nào"], correctIndex: 0, explanation: "Câu này đúng cấu trúc Subject + Verb + Object." },
      { question: "Câu tiếng Anh thường kết thúc bằng dấu gì?", options: ["Dấu phẩy", "Dấu chấm", "Dấu ngoặc", "Dấu gạch ngang"], correctIndex: 1, explanation: "Câu thường kết thúc bằng dấu chấm." },
    ],
    funFact: "Luyện viết câu đơn giản mỗi ngày là bước đầu để viết đoạn văn tiếng Anh hoàn chỉnh!",
  },
  "tieng-anh:3:my-favourite-season": {
    objectives: ["Nói về mùa yêu thích trong năm.", "Giải thích lý do yêu thích bằng câu đơn giản."],
    sections: [
      { heading: "1. Making Sentences", body: ["'My favourite season is summer.' (Mùa yêu thích của em là mùa hè.) 'I like it because I can swim.' (Em thích vì em có thể đi bơi.)"] },
    ],
    quiz: [
      { question: "'My favourite season is summer.' nghĩa là gì?", options: ["Mùa yêu thích của em là mùa đông.", "Mùa yêu thích của em là mùa hè.", "Em không thích mùa nào.", "Mùa yêu thích của em là mùa xuân."], correctIndex: 1, explanation: "Câu này nghĩa là 'Mùa yêu thích của em là mùa hè.'" },
      { question: "'I can swim.' nghĩa là gì?", options: ["Em không thể bơi.", "Em có thể bơi.", "Em thích bơi.", "Em sợ nước."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em có thể bơi.'" },
      { question: "'Because' dùng để làm gì trong câu?", options: ["Nêu lý do", "Nêu kết quả", "Phủ định câu", "Đặt câu hỏi"], correctIndex: 0, explanation: "'Because' dùng để nêu lý do." },
      { question: "Mùa nào thường có tuyết rơi ở nhiều nước?", options: ["Summer", "Spring", "Winter", "Autumn"], correctIndex: 2, explanation: "'Winter' (mùa đông) thường có tuyết rơi." },
    ],
    funFact: "Việt Nam không có tuyết rơi ở hầu hết các vùng, nhưng Sa Pa từng có tuyết vào mùa đông!",
  },
  "tieng-anh:3:describing-my-classroom": {
    objectives: ["Luyện mô tả lớp học bằng tiếng Anh.", "Sử dụng từ vựng về đồ vật trong lớp học."],
    sections: [
      { heading: "1. Classroom Vocabulary", body: ["Desk (bàn học), chair (ghế), blackboard (bảng đen), window (cửa sổ)."] },
      { heading: "2. Making Sentences", body: ["'There is a blackboard in my classroom.' (Có một bảng đen trong lớp học của em.)"] },
    ],
    quiz: [
      { question: "'Blackboard' nghĩa là gì?", options: ["Bảng đen", "Cửa sổ", "Bàn học", "Ghế ngồi"], correctIndex: 0, explanation: "'Blackboard' nghĩa là 'Bảng đen'." },
      { question: "'Desk' nghĩa là gì?", options: ["Ghế", "Bàn học", "Cửa sổ", "Bảng"], correctIndex: 1, explanation: "'Desk' nghĩa là 'Bàn học'." },
      { question: "'There is a blackboard in my classroom.' nghĩa là gì?", options: ["Không có bảng đen trong lớp.", "Có một bảng đen trong lớp học.", "Bảng đen ở ngoài sân.", "Em không thích bảng đen."], correctIndex: 1, explanation: "Câu này nghĩa là 'Có một bảng đen trong lớp học của em.'" },
      { question: "'Window' nghĩa là gì?", options: ["Cửa sổ", "Cửa ra vào", "Tường", "Trần nhà"], correctIndex: 0, explanation: "'Window' nghĩa là 'Cửa sổ'." },
    ],
    funFact: "Bảng đen truyền thống dần được thay thế bằng bảng trắng và bảng thông minh ở nhiều trường học hiện đại!",
  },
  "tieng-anh:3:talking-about-my-town": {
    objectives: ["Luyện nói về thị trấn, thành phố nơi em sống.", "Mô tả các địa điểm nổi bật."],
    sections: [
      { heading: "1. Making Sentences", body: ["'I live in Hanoi.' (Em sống ở Hà Nội.) 'My town has a big lake.' (Thị trấn của em có một hồ lớn.)"] },
    ],
    quiz: [
      { question: "'I live in Hanoi.' nghĩa là gì?", options: ["Em sống ở Hà Nội.", "Em sống ở Huế.", "Em không sống ở đâu.", "Em thích Hà Nội."], correctIndex: 0, explanation: "Câu này nghĩa là 'Em sống ở Hà Nội.'" },
      { question: "'Town' nghĩa là gì?", options: ["Thị trấn/thị xã", "Ngôi nhà", "Trường học", "Công viên"], correctIndex: 0, explanation: "'Town' nghĩa là 'Thị trấn/thị xã'." },
      { question: "'Lake' nghĩa là gì?", options: ["Hồ", "Sông", "Biển", "Núi"], correctIndex: 0, explanation: "'Lake' nghĩa là 'Hồ'." },
      { question: "'My town has a big lake.' nghĩa là gì?", options: ["Thị trấn của em không có hồ.", "Thị trấn của em có một hồ lớn.", "Thị trấn của em có một ngọn núi.", "Thị trấn của em rất nhỏ."], correctIndex: 1, explanation: "Câu này nghĩa là 'Thị trấn của em có một hồ lớn.'" },
    ],
    funFact: "Hồ Gươm ở Hà Nội là một trong những địa danh nổi tiếng nhất Việt Nam, tiếng Anh là 'Sword Lake'!",
  },
  "tieng-anh:3:simple-role-play-at-the-shop": {
    objectives: ["Đóng vai tình huống mua sắm đơn giản.", "Thực hành hội thoại người mua - người bán."],
    sections: [
      { heading: "1. Sample Dialogue", body: ["Seller: 'Can I help you?' Buyer: 'Yes, I want a notebook, please.' Seller: 'Here you are. It's 10,000 dong.'"] },
    ],
    quiz: [
      { question: "'Can I help you?' dùng để làm gì?", options: ["Người bán hỏi khách cần gì", "Khách hỏi giá", "Từ chối bán hàng", "Chào tạm biệt"], correctIndex: 0, explanation: "Câu này người bán hàng thường nói để hỏi khách cần gì." },
      { question: "'I want a notebook, please.' nghĩa là gì?", options: ["Em không cần gì.", "Em muốn mua một quyển vở ạ.", "Vở này rất đẹp.", "Em không thích vở."], correctIndex: 1, explanation: "Câu này nghĩa là yêu cầu mua một quyển vở." },
      { question: "'Here you are.' dùng để làm gì?", options: ["Đưa đồ vật cho ai đó", "Hỏi giá tiền", "Từ chối", "Chào hỏi"], correctIndex: 0, explanation: "Câu này dùng khi đưa đồ vật cho người khác." },
      { question: "Đóng vai tình huống mua sắm giúp ích điều gì?", options: ["Không có ích gì", "Luyện phản xạ giao tiếp thực tế", "Làm mất thời gian", "Không liên quan đến tiếng Anh"], correctIndex: 1, explanation: "Đóng vai giúp luyện phản xạ giao tiếp trong tình huống thực tế." },
    ],
    funFact: "Đóng vai (role-play) là phương pháp học ngôn ngữ được nhiều giáo viên trên thế giới áp dụng!",
  },
  "tieng-anh:3:simple-role-play-at-school": {
    objectives: ["Đóng vai tình huống ở trường học.", "Thực hành hội thoại giữa học sinh và giáo viên."],
    sections: [
      { heading: "1. Sample Dialogue", body: ["Teacher: 'Good morning, class!' Students: 'Good morning, teacher!' Teacher: 'Open your books, please.'"] },
    ],
    quiz: [
      { question: "'Good morning, class!' do ai nói?", options: ["Học sinh", "Giáo viên", "Phụ huynh", "Bảo vệ"], correctIndex: 1, explanation: "Câu này thường do giáo viên nói khi vào lớp." },
      { question: "'Open your books, please.' nghĩa là gì?", options: ["Đóng sách lại", "Mở sách ra", "Cất sách đi", "Đọc to sách"], correctIndex: 1, explanation: "Câu này nghĩa là 'Mở sách ra'." },
      { question: "Khi giáo viên chào, học sinh nên đáp lại như thế nào?", options: ["Im lặng", "Chào lại lịch sự", "Bỏ đi", "Nói chuyện riêng"], correctIndex: 1, explanation: "Học sinh nên chào lại lịch sự khi giáo viên chào." },
      { question: "Đóng vai tình huống ở trường giúp ích điều gì?", options: ["Không có ích gì", "Luyện giao tiếp trong môi trường học đường", "Làm mất thời gian", "Không liên quan đến học tập"], correctIndex: 1, explanation: "Giúp luyện giao tiếp tiếng Anh trong môi trường học đường." },
    ],
    funFact: "Ở nhiều trường quốc tế, học sinh chào giáo viên bằng tiếng Anh ngay từ đầu mỗi tiết học!",
  },
  "tieng-anh:3:fun-with-rhymes": {
    objectives: ["Học tiếng Anh vui nhộn qua các vần điệu.", "Ghi nhớ từ vựng qua các câu có vần."],
    sections: [
      { heading: "1. Example Rhyme", body: ["'Rain, rain, go away, come again another day!' — vần điệu vui giúp ghi nhớ từ vựng về thời tiết."] },
    ],
    quiz: [
      { question: "'Rain, rain, go away!' nghĩa là gì?", options: ["Mưa ơi, đến đi!", "Mưa ơi, đi đi!", "Trời nắng quá!", "Trời lạnh quá!"], correctIndex: 1, explanation: "Câu này nghĩa là 'Mưa ơi, đi đi!' (mong mưa tạnh)." },
      { question: "Vần điệu (rhyme) giúp ích điều gì cho việc học?", options: ["Không có ích gì", "Ghi nhớ từ vựng dễ dàng, vui nhộn", "Làm khó hiểu hơn", "Không liên quan đến học"], correctIndex: 1, explanation: "Vần điệu giúp ghi nhớ từ vựng dễ dàng và vui nhộn hơn." },
      { question: "'Go away' nghĩa là gì?", options: ["Đến đây", "Đi đi/biến đi", "Ở lại", "Ngủ đi"], correctIndex: 1, explanation: "'Go away' nghĩa là 'Đi đi/biến đi'." },
      { question: "Đặc điểm của một bài vần điệu (rhyme) là gì?", options: ["Các từ cuối câu có âm giống nhau", "Không có quy luật nào", "Luôn buồn bã", "Luôn rất dài"], correctIndex: 0, explanation: "Vần điệu có các từ cuối câu vần với nhau." },
    ],
    funFact: "Nhiều bài đồng dao tiếng Anh nổi tiếng ('nursery rhymes') đã tồn tại hàng trăm năm!",
  },
  "tieng-anh:3:spelling-practice": {
    objectives: ["Luyện đánh vần từ vựng đã học.", "Ghi nhớ chính xác cách viết từ tiếng Anh."],
    sections: [
      { heading: "1. Spelling Tip", body: ["Đánh vần từng chữ cái: 'C-A-T spells CAT.' giúp ghi nhớ chính tả chính xác."] },
      { heading: "2. Practice", body: ["Viết đi viết lại từ mới nhiều lần và đọc to từng chữ cái để ghi nhớ tốt hơn."] },
    ],
    quiz: [
      { question: "Đánh vần từ 'CAT' theo từng chữ cái là gì?", options: ["C-A-T", "K-A-T", "C-A-D", "C-E-T"], correctIndex: 0, explanation: "'CAT' được đánh vần là C-A-T." },
      { question: "Luyện đánh vần giúp ích điều gì?", options: ["Không có ích gì", "Ghi nhớ chính xác cách viết từ", "Làm quên từ nhanh hơn", "Không liên quan đến viết"], correctIndex: 1, explanation: "Luyện đánh vần giúp ghi nhớ chính xác cách viết từ." },
      { question: "Cách nào giúp ghi nhớ chính tả một từ mới?", options: ["Viết một lần rồi quên", "Viết đi viết lại và đọc to", "Không cần viết", "Chỉ cần nhìn qua"], correctIndex: 1, explanation: "Viết đi viết lại và đọc to giúp ghi nhớ tốt hơn." },
      { question: "Thi đánh vần (spelling bee) là hoạt động phổ biến ở đâu?", options: ["Trường học tại nhiều nước nói tiếng Anh", "Không phổ biến ở đâu", "Chỉ ở Việt Nam", "Chỉ trong gia đình"], correctIndex: 0, explanation: "Thi đánh vần là hoạt động phổ biến ở các trường học nói tiếng Anh." },
    ],
    funFact: "Cuộc thi 'Spelling Bee' ở Mỹ là một trong những cuộc thi đánh vần nổi tiếng nhất thế giới!",
  },
  "tieng-anh:3:final-review-my-english-journey": {
    objectives: ["Ôn tập tổng hợp toàn bộ chương trình đã học.", "Tự tin sử dụng tiếng Anh trong giao tiếp cơ bản."],
    sections: [
      { heading: "1. Journey Review", body: ["Nhìn lại hành trình học tiếng Anh: chào hỏi, gia đình, trường học, sở thích, ngữ pháp cơ bản và giao tiếp."] },
      { heading: "2. Keep Learning!", body: ["Tiếp tục luyện nghe, nói, đọc, viết mỗi ngày để tiếng Anh ngày càng giỏi hơn!"] },
    ],
    quiz: [
      { question: "'Hello' nghĩa là gì?", options: ["Tạm biệt", "Xin chào", "Cảm ơn", "Xin lỗi"], correctIndex: 1, explanation: "'Hello' nghĩa là 'Xin chào'." },
      { question: "Để giỏi tiếng Anh, em nên làm gì?", options: ["Chỉ học một lần rồi thôi", "Luyện tập đều đặn mỗi ngày", "Không cần luyện tập", "Chỉ học ngữ pháp"], correctIndex: 1, explanation: "Luyện tập đều đặn giúp tiếng Anh ngày càng tiến bộ." },
      { question: "'Thank you' nghĩa là gì?", options: ["Xin lỗi", "Cảm ơn", "Tạm biệt", "Xin chào"], correctIndex: 1, explanation: "'Thank you' nghĩa là 'Cảm ơn'." },
      { question: "Kỹ năng nào quan trọng khi học một ngôn ngữ mới?", options: ["Chỉ cần nghe", "Nghe, nói, đọc, viết", "Chỉ cần viết", "Không cần kỹ năng nào"], correctIndex: 1, explanation: "Cần rèn luyện đầy đủ 4 kỹ năng: nghe, nói, đọc, viết." },
    ],
    funFact: "Tiếng Anh là ngôn ngữ được sử dụng nhiều nhất trên thế giới để giao tiếp quốc tế!",
  },

  // ─────────────── TIẾNG ANH — LỚP 3 — 60 bài thực hành mở rộng ───────────────
  "tieng-anh:3:thuc-hanh-greetings-review": practiceContent("Thực hành", "Greetings Review", "Hãy nhớ lại các mẫu câu chào hỏi: Hello, Good morning, How are you?", [
    { question: "'Xin chào' trong tiếng Anh là gì?", options: ["Goodbye", "Hello", "Sorry", "Please"], correctIndex: 1, explanation: "'Hello' nghĩa là 'Xin chào'." },
    { question: "'How are you?' hỏi về điều gì?", options: ["Tên", "Sức khoẻ", "Tuổi", "Địa chỉ"], correctIndex: 1, explanation: "Câu này hỏi thăm sức khoẻ." },
    { question: "'Tạm biệt' trong tiếng Anh là gì?", options: ["Hello", "Goodbye", "Thanks", "Sorry"], correctIndex: 1, explanation: "'Goodbye' nghĩa là 'Tạm biệt'." },
    { question: "Buổi sáng nên nói câu chào nào?", options: ["Good night", "Good morning", "Good afternoon", "Goodbye"], correctIndex: 1, explanation: "'Good morning' dùng vào buổi sáng." },
  ]),
  "tieng-anh:3:luyen-tap-classroom-instructions": practiceContent("Luyện tập", "Classroom Instructions", "Hãy nhớ lại các mệnh lệnh: Stand up, Sit down, Open your book, Be quiet.", [
    { question: "'Stand up!' nghĩa là gì?", options: ["Ngồi xuống", "Đứng lên", "Im lặng", "Mở sách"], correctIndex: 1, explanation: "'Stand up' nghĩa là 'Đứng lên'." },
    { question: "'Be quiet, please!' yêu cầu điều gì?", options: ["Nói to", "Giữ trật tự", "Đứng dậy", "Ra khỏi lớp"], correctIndex: 1, explanation: "'Be quiet' yêu cầu giữ trật tự." },
    { question: "'Open your book!' nghĩa là gì?", options: ["Đóng sách", "Mở sách ra", "Viết bài", "Đọc to"], correctIndex: 1, explanation: "'Open your book' nghĩa là 'Mở sách ra'." },
    { question: "'Sit down!' nghĩa là gì?", options: ["Đứng lên", "Ngồi xuống", "Chạy đi", "Im lặng"], correctIndex: 1, explanation: "'Sit down' nghĩa là 'Ngồi xuống'." },
  ]),
  "tieng-anh:3:van-dung-my-body-parts": practiceContent("Vận dụng", "My Body Parts", "Hãy nhớ lại từ vựng: head, eyes, nose, mouth, hands, legs.", [
    { question: "'Eyes' nghĩa là gì?", options: ["Mũi", "Mắt", "Tay", "Chân"], correctIndex: 1, explanation: "'Eyes' nghĩa là 'Mắt'." },
    { question: "'Head' nghĩa là gì?", options: ["Đầu", "Chân", "Tay", "Mũi"], correctIndex: 0, explanation: "'Head' nghĩa là 'Đầu'." },
    { question: "'Mouth' nghĩa là gì?", options: ["Miệng", "Mũi", "Tai", "Tóc"], correctIndex: 0, explanation: "'Mouth' nghĩa là 'Miệng'." },
    { question: "'I have two eyes.' nghĩa là gì?", options: ["Em có hai tay.", "Em có hai mắt.", "Em có hai chân.", "Em có hai mũi."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em có hai mắt.'" },
  ]),
  "tieng-anh:3:tro-choi-on-tap-clothes-and-colours": practiceContent("Trò chơi ôn tập", "Clothes and Colours", "Hãy nhớ lại từ vựng về quần áo và màu sắc.", [
    { question: "'Shirt' nghĩa là gì?", options: ["Váy", "Áo sơ mi", "Giày", "Mũ"], correctIndex: 1, explanation: "'Shirt' nghĩa là 'Áo sơ mi'." },
    { question: "'Shoes' nghĩa là gì?", options: ["Giày", "Mũ", "Áo", "Váy"], correctIndex: 0, explanation: "'Shoes' nghĩa là 'Giày'." },
    { question: "'I have a red shirt.' nghĩa là gì?", options: ["Em có váy đỏ.", "Em có áo sơ mi đỏ.", "Em có giày đỏ.", "Em có mũ đỏ."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em có áo sơ mi đỏ.'" },
    { question: "'Is wearing' nghĩa là gì?", options: ["Đang mặc/đội", "Đang chạy", "Đang ăn", "Đang ngủ"], correctIndex: 0, explanation: "'Is wearing' nghĩa là 'đang mặc/đội'." },
  ]),
  "tieng-anh:3:thu-thach-nho-family-members": practiceContent("Thử thách nhỏ", "Family Members", "Hãy nhớ lại từ vựng về gia đình: grandfather, grandmother, uncle, aunt, cousin.", [
    { question: "'Grandfather' nghĩa là gì?", options: ["Ông", "Bà", "Chú", "Cô"], correctIndex: 0, explanation: "'Grandfather' nghĩa là 'Ông'." },
    { question: "'Aunt' nghĩa là gì?", options: ["Chú", "Cô/dì", "Anh", "Em"], correctIndex: 1, explanation: "'Aunt' nghĩa là 'Cô/dì'." },
    { question: "'Cousin' nghĩa là gì?", options: ["Anh/chị/em họ", "Bố", "Mẹ", "Ông"], correctIndex: 0, explanation: "'Cousin' nghĩa là 'anh/chị/em họ'." },
    { question: "'This is my grandmother.' nghĩa là gì?", options: ["Đây là ông của em.", "Đây là bà của em.", "Đây là chú của em.", "Đây là cô của em."], correctIndex: 1, explanation: "Câu này nghĩa là 'Đây là bà của em.'" },
  ]),
  "tieng-anh:3:thuc-hanh-jobs-and-occupations": practiceContent("Thực hành", "Jobs and Occupations", "Hãy nhớ lại từ vựng nghề nghiệp: teacher, doctor, farmer, police officer, engineer.", [
    { question: "'Teacher' nghĩa là gì?", options: ["Bác sĩ", "Giáo viên", "Nông dân", "Kỹ sư"], correctIndex: 1, explanation: "'Teacher' nghĩa là 'Giáo viên'." },
    { question: "'Doctor' nghĩa là gì?", options: ["Bác sĩ", "Công an", "Giáo viên", "Kỹ sư"], correctIndex: 0, explanation: "'Doctor' nghĩa là 'Bác sĩ'." },
    { question: "'Police officer' nghĩa là gì?", options: ["Công an", "Nông dân", "Bác sĩ", "Kỹ sư"], correctIndex: 0, explanation: "'Police officer' nghĩa là 'Công an'." },
    { question: "'My father is a doctor.' nghĩa là gì?", options: ["Bố em là giáo viên.", "Bố em là bác sĩ.", "Bố em là nông dân.", "Bố em là kỹ sư."], correctIndex: 1, explanation: "Câu này nghĩa là 'Bố em là bác sĩ.'" },
  ]),
  "tieng-anh:3:luyen-tap-transportation": practiceContent("Luyện tập", "Transportation", "Hãy nhớ lại từ vựng phương tiện giao thông: car, bus, bicycle, motorbike, train.", [
    { question: "'Bicycle' nghĩa là gì?", options: ["Ô tô", "Xe đạp", "Xe buýt", "Tàu hoả"], correctIndex: 1, explanation: "'Bicycle' nghĩa là 'Xe đạp'." },
    { question: "'Bus' nghĩa là gì?", options: ["Xe buýt", "Xe máy", "Tàu hoả", "Máy bay"], correctIndex: 0, explanation: "'Bus' nghĩa là 'Xe buýt'." },
    { question: "'Train' nghĩa là gì?", options: ["Tàu hoả", "Máy bay", "Thuyền", "Xe máy"], correctIndex: 0, explanation: "'Train' nghĩa là 'Tàu hoả'." },
    { question: "'I go to school by bike.' nghĩa là gì?", options: ["Em đi học bằng ô tô.", "Em đi học bằng xe đạp.", "Em đi học bằng xe buýt.", "Em đi bộ đến trường."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em đi học bằng xe đạp.'" },
  ]),
  "tieng-anh:3:van-dung-shapes-and-sizes": practiceContent("Vận dụng", "Shapes and Sizes", "Hãy nhớ lại từ vựng hình dạng và kích thước: circle, square, triangle, big, small.", [
    { question: "'Circle' nghĩa là gì?", options: ["Hình vuông", "Hình tròn", "Hình tam giác", "Hình chữ nhật"], correctIndex: 1, explanation: "'Circle' nghĩa là 'Hình tròn'." },
    { question: "'Square' nghĩa là gì?", options: ["Hình vuông", "Hình tròn", "Hình tam giác", "Hình chữ nhật"], correctIndex: 0, explanation: "'Square' nghĩa là 'Hình vuông'." },
    { question: "'Big' nghĩa là gì?", options: ["Nhỏ", "To", "Dài", "Ngắn"], correctIndex: 1, explanation: "'Big' nghĩa là 'To'." },
    { question: "'Triangle' nghĩa là gì?", options: ["Hình tam giác", "Hình tròn", "Hình vuông", "Hình chữ nhật"], correctIndex: 0, explanation: "'Triangle' nghĩa là 'Hình tam giác'." },
  ]),
  "tieng-anh:3:tro-choi-on-tap-in-the-supermarket": practiceContent("Trò chơi ôn tập", "In the Supermarket", "Hãy nhớ lại các mẫu câu: How much is this? I want to buy...", [
    { question: "'How much is this?' hỏi về điều gì?", options: ["Tên món hàng", "Giá tiền", "Màu sắc", "Kích thước"], correctIndex: 1, explanation: "Câu này hỏi về giá tiền." },
    { question: "'Cashier' nghĩa là gì?", options: ["Người bán hàng rong", "Thu ngân", "Khách hàng", "Bảo vệ"], correctIndex: 1, explanation: "'Cashier' nghĩa là 'Thu ngân'." },
    { question: "'Basket' nghĩa là gì?", options: ["Giỏ hàng", "Túi xách", "Hộp", "Xe đẩy"], correctIndex: 0, explanation: "'Basket' nghĩa là 'Giỏ hàng'." },
    { question: "'I want to buy some apples.' nghĩa là gì?", options: ["Em muốn ăn táo.", "Em muốn mua vài quả táo.", "Em không thích táo.", "Táo rất ngon."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em muốn mua vài quả táo.'" },
  ]),
  "tieng-anh:3:thu-thach-nho-at-the-restaurant": practiceContent("Thử thách nhỏ", "At the Restaurant", "Hãy nhớ lại từ vựng: menu, waiter, order, bill.", [
    { question: "'Menu' nghĩa là gì?", options: ["Thực đơn", "Hoá đơn", "Bàn ăn", "Ghế ngồi"], correctIndex: 0, explanation: "'Menu' nghĩa là 'Thực đơn'." },
    { question: "'Bill' nghĩa là gì?", options: ["Thực đơn", "Hoá đơn", "Món ăn", "Đồ uống"], correctIndex: 1, explanation: "'Bill' nghĩa là 'Hoá đơn'." },
    { question: "'Waiter' nghĩa là gì?", options: ["Đầu bếp", "Phục vụ nam", "Khách hàng", "Chủ nhà hàng"], correctIndex: 1, explanation: "'Waiter' nghĩa là 'Phục vụ nam'." },
    { question: "'Can I have a menu, please?' nghĩa là gì?", options: ["Cho em xin thực đơn ạ.", "Cho em xin hoá đơn ạ.", "Em muốn ăn cơm.", "Nhà hàng ở đâu?"], correctIndex: 0, explanation: "Câu này nghĩa là 'Cho em xin thực đơn ạ.'" },
  ]),
  "tieng-anh:3:thuc-hanh-my-pets": practiceContent("Thực hành", "My Pets", "Hãy nhớ lại từ vựng thú cưng: dog, cat, fish, rabbit, bird.", [
    { question: "'Rabbit' nghĩa là gì?", options: ["Thỏ", "Chó", "Mèo", "Cá"], correctIndex: 0, explanation: "'Rabbit' nghĩa là 'Thỏ'." },
    { question: "'Fish' nghĩa là gì?", options: ["Chim", "Cá", "Chó", "Mèo"], correctIndex: 1, explanation: "'Fish' nghĩa là 'Cá'." },
    { question: "'My cat is white.' nghĩa là gì?", options: ["Con mèo của em màu đen.", "Con mèo của em màu trắng.", "Con chó của em màu trắng.", "Con cá của em màu trắng."], correctIndex: 1, explanation: "Câu này nghĩa là 'Con mèo của em màu trắng.'" },
    { question: "'I have a small dog.' nghĩa là gì?", options: ["Em có một chú mèo nhỏ.", "Em có một chú chó nhỏ.", "Em có một con cá nhỏ.", "Em có một con chim nhỏ."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em có một chú chó nhỏ.'" },
  ]),
  "tieng-anh:3:luyen-tap-wild-animals": practiceContent("Luyện tập", "Wild Animals", "Hãy nhớ lại từ vựng động vật hoang dã: lion, tiger, elephant, giraffe, monkey.", [
    { question: "'Tiger' nghĩa là gì?", options: ["Sư tử", "Hổ", "Voi", "Khỉ"], correctIndex: 1, explanation: "'Tiger' nghĩa là 'Hổ'." },
    { question: "'Giraffe' nghĩa là gì?", options: ["Hươu cao cổ", "Voi", "Sư tử", "Khỉ"], correctIndex: 0, explanation: "'Giraffe' nghĩa là 'Hươu cao cổ'." },
    { question: "'Monkey' nghĩa là gì?", options: ["Khỉ", "Hổ", "Sư tử", "Voi"], correctIndex: 0, explanation: "'Monkey' nghĩa là 'Khỉ'." },
    { question: "'The elephant is very big.' nghĩa là gì?", options: ["Con voi rất nhỏ.", "Con voi rất to.", "Con voi rất nhanh.", "Con voi rất đẹp."], correctIndex: 1, explanation: "Câu này nghĩa là 'Con voi rất to.'" },
  ]),
  "tieng-anh:3:van-dung-sports-i-like": practiceContent("Vận dụng", "Sports I Like", "Hãy nhớ lại từ vựng thể thao: football, swimming, badminton, table tennis.", [
    { question: "'Football' nghĩa là gì?", options: ["Bóng đá", "Bóng bàn", "Cầu lông", "Bơi lội"], correctIndex: 0, explanation: "'Football' nghĩa là 'Bóng đá'." },
    { question: "'Swimming' nghĩa là gì?", options: ["Bơi lội", "Chạy bộ", "Nhảy dây", "Đá cầu"], correctIndex: 0, explanation: "'Swimming' nghĩa là 'Bơi lội'." },
    { question: "'Table tennis' nghĩa là gì?", options: ["Bóng bàn", "Bóng đá", "Bóng rổ", "Bóng chuyền"], correctIndex: 0, explanation: "'Table tennis' nghĩa là 'Bóng bàn'." },
    { question: "'I like playing football.' nghĩa là gì?", options: ["Em thích bơi lội.", "Em thích chơi bóng đá.", "Em thích chơi cầu lông.", "Em không thích thể thao."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em thích chơi bóng đá.'" },
  ]),
  "tieng-anh:3:tro-choi-on-tap-free-time-on-weekends": practiceContent("Trò chơi ôn tập", "Free Time on Weekends", "Hãy nhớ lại từ vựng: watch TV, play games, read books, visit grandparents.", [
    { question: "'Watch TV' nghĩa là gì?", options: ["Xem tivi", "Đọc sách", "Chơi trò chơi", "Thăm ông bà"], correctIndex: 0, explanation: "'Watch TV' nghĩa là 'Xem tivi'." },
    { question: "'Read books' nghĩa là gì?", options: ["Đọc sách", "Xem tivi", "Chơi trò chơi", "Nấu ăn"], correctIndex: 0, explanation: "'Read books' nghĩa là 'Đọc sách'." },
    { question: "'On weekends' nghĩa là gì?", options: ["Vào các ngày trong tuần", "Vào cuối tuần", "Vào buổi sáng", "Vào buổi tối"], correctIndex: 1, explanation: "'On weekends' nghĩa là 'Vào cuối tuần'." },
    { question: "'Visit grandparents' nghĩa là gì?", options: ["Thăm ông bà", "Thăm bạn bè", "Đi học", "Đi chợ"], correctIndex: 0, explanation: "'Visit grandparents' nghĩa là 'Thăm ông bà'." },
  ]),
  "tieng-anh:3:thu-thach-nho-describing-the-weather": practiceContent("Thử thách nhỏ", "Describing the Weather", "Hãy nhớ lại từ vựng thời tiết: sunny, rainy, windy, cloudy, hot, cold.", [
    { question: "'Sunny' nghĩa là gì?", options: ["Mưa", "Nắng", "Nhiều gió", "Lạnh"], correctIndex: 1, explanation: "'Sunny' nghĩa là 'Nắng'." },
    { question: "'Windy' nghĩa là gì?", options: ["Nhiều gió", "Nhiều mây", "Nắng", "Nóng"], correctIndex: 0, explanation: "'Windy' nghĩa là 'Nhiều gió'." },
    { question: "'Cold' nghĩa là gì?", options: ["Nóng", "Lạnh", "Nắng", "Mưa"], correctIndex: 1, explanation: "'Cold' nghĩa là 'Lạnh'." },
    { question: "'It is raining.' nghĩa là gì?", options: ["Trời đang nắng.", "Trời đang mưa.", "Trời đang lạnh.", "Trời đang nhiều gió."], correctIndex: 1, explanation: "Câu này nghĩa là 'Trời đang mưa.'" },
  ]),
  "tieng-anh:3:thuc-hanh-seasons-around-the-year": practiceContent("Thực hành", "Seasons Around the Year", "Hãy nhớ lại từ vựng bốn mùa: spring, summer, autumn/fall, winter.", [
    { question: "'Summer' nghĩa là gì?", options: ["Mùa xuân", "Mùa hè", "Mùa thu", "Mùa đông"], correctIndex: 1, explanation: "'Summer' nghĩa là 'Mùa hè'." },
    { question: "'Winter' nghĩa là gì?", options: ["Mùa đông", "Mùa hè", "Mùa xuân", "Mùa thu"], correctIndex: 0, explanation: "'Winter' nghĩa là 'Mùa đông'." },
    { question: "'Autumn' còn được gọi là gì trong tiếng Anh Mỹ?", options: ["Fall", "Spring", "Summer", "Winter"], correctIndex: 0, explanation: "Người Mỹ thường gọi mùa thu là 'Fall'." },
    { question: "'Summer is hot.' nghĩa là gì?", options: ["Mùa hè lạnh.", "Mùa hè nóng.", "Mùa đông nóng.", "Mùa xuân nóng."], correctIndex: 1, explanation: "Câu này nghĩa là 'Mùa hè nóng.'" },
  ]),
  "tieng-anh:3:luyen-tap-simple-present-tense-daily-habits": practiceContent("Luyện tập", "Simple Present Tense: Daily Habits", "Hãy nhớ lại: với he/she/it, động từ thêm 's' ở thì hiện tại đơn.", [
    { question: "Câu nào đúng thì hiện tại đơn?", options: ["She go to school.", "She goes to school.", "She going to school.", "She gone to school."], correctIndex: 1, explanation: "Với 'she', động từ 'go' cần thêm 's' thành 'goes'." },
    { question: "Thì hiện tại đơn thường dùng để diễn tả điều gì?", options: ["Hành động đang xảy ra", "Thói quen, sự thật", "Hành động trong quá khứ", "Kế hoạch tương lai"], correctIndex: 1, explanation: "Thì hiện tại đơn diễn tả thói quen, sự thật." },
    { question: "Câu nào đúng?", options: ["He play football every day.", "He plays football every day.", "He playing football every day.", "He played football every day."], correctIndex: 1, explanation: "Với 'he', động từ 'play' cần thêm 's' thành 'plays'." },
    { question: "'I brush my teeth every morning.' nghĩa là gì?", options: ["Em đánh răng mỗi sáng.", "Em ăn sáng mỗi ngày.", "Em đi ngủ sớm.", "Em đi học mỗi sáng."], correctIndex: 0, explanation: "Câu này nghĩa là 'Em đánh răng mỗi sáng.'" },
  ]),
  "tieng-anh:3:van-dung-can-can-t-abilities": practiceContent("Vận dụng", "Can / Can't: Abilities", "Hãy nhớ lại: can (có thể), can't (không thể), sau can dùng động từ nguyên thể.", [
    { question: "'I can swim.' nghĩa là gì?", options: ["Em không thể bơi.", "Em có thể bơi.", "Em thích bơi.", "Em đang bơi."], correctIndex: 1, explanation: "'Can' nghĩa là 'có thể'." },
    { question: "Câu nào diễn tả khả năng KHÔNG làm được?", options: ["I can sing.", "I can dance.", "I can't fly.", "I can run."], correctIndex: 2, explanation: "'Can't' là dạng phủ định, nghĩa là 'không thể'." },
    { question: "Câu nào đúng ngữ pháp?", options: ["She can to swim.", "She can swims.", "She can swim.", "She cans swim."], correctIndex: 2, explanation: "Sau 'can' dùng động từ nguyên thể, không chia." },
    { question: "'Can you swim?' dùng để hỏi điều gì?", options: ["Hỏi tuổi", "Hỏi khả năng bơi", "Hỏi tên", "Hỏi sở thích"], correctIndex: 1, explanation: "Câu này hỏi về khả năng bơi lội." },
  ]),
  "tieng-anh:3:tro-choi-on-tap-prepositions-of-place-review": practiceContent("Trò chơi ôn tập", "Prepositions of Place Review", "Hãy nhớ lại giới từ chỉ vị trí: in, on, under, next to, between.", [
    { question: "'Under' nghĩa là gì?", options: ["Trên", "Dưới", "Bên cạnh", "Ở giữa"], correctIndex: 1, explanation: "'Under' nghĩa là 'Dưới'." },
    { question: "'Next to' nghĩa là gì?", options: ["Bên cạnh", "Ở giữa", "Trong", "Trên"], correctIndex: 0, explanation: "'Next to' nghĩa là 'Bên cạnh'." },
    { question: "'Between' nghĩa là gì?", options: ["Ở giữa", "Bên cạnh", "Trên", "Dưới"], correctIndex: 0, explanation: "'Between' nghĩa là 'Ở giữa' (hai vật)." },
    { question: "'The cat is under the table.' nghĩa là gì?", options: ["Con mèo ở trên bàn.", "Con mèo ở dưới bàn.", "Con mèo ở bên cạnh bàn.", "Con mèo ở trong hộp."], correctIndex: 1, explanation: "Câu này nghĩa là 'Con mèo ở dưới bàn.'" },
  ]),
  "tieng-anh:3:thu-thach-nho-this-that-these-those": practiceContent("Thử thách nhỏ", "This/That/These/Those", "Hãy nhớ lại: this/that dùng cho số ít, these/those dùng cho số nhiều.", [
    { question: "Từ nào dùng cho một vật ở gần?", options: ["That", "This", "Those", "These"], correctIndex: 1, explanation: "'This' dùng cho một vật ở gần." },
    { question: "Từ nào dùng cho nhiều vật ở xa?", options: ["This", "That", "These", "Those"], correctIndex: 3, explanation: "'Those' dùng cho nhiều vật ở xa." },
    { question: "Câu nào đúng?", options: ["This are my pens.", "These is my pen.", "These are my pens.", "That are my pens."], correctIndex: 2, explanation: "'These' đi với danh từ số nhiều và động từ 'are'." },
    { question: "'These are my books.' nghĩa là gì?", options: ["Đây là quyển sách của em.", "Đây là những quyển sách của em.", "Kia là quyển sách của em.", "Kia là những quyển sách của em."], correctIndex: 1, explanation: "'These' là số nhiều của 'this'." },
  ]),
  "tieng-anh:3:thuc-hanh-plural-nouns": practiceContent("Thực hành", "Plural Nouns", "Hãy nhớ lại quy tắc thêm s/es và các từ bất quy tắc.", [
    { question: "Số nhiều của 'book' là gì?", options: ["Book", "Books", "Bookes", "Bookies"], correctIndex: 1, explanation: "Thêm 's' vào 'book' thành 'books'." },
    { question: "Số nhiều của 'box' là gì?", options: ["Boxs", "Box", "Boxes", "Boxies"], correctIndex: 2, explanation: "Danh từ tận cùng bằng 'x' thêm 'es'." },
    { question: "Số nhiều của 'child' là gì?", options: ["Childs", "Childes", "Children", "Child"], correctIndex: 2, explanation: "'Child' là danh từ bất quy tắc, số nhiều là 'children'." },
    { question: "Số nhiều của 'cat' là gì?", options: ["Cates", "Cat", "Cates", "Cats"], correctIndex: 3, explanation: "Thêm 's' vào 'cat' thành 'cats'." },
  ]),
  "tieng-anh:3:luyen-tap-question-words-who-what-where": practiceContent("Luyện tập", "Question Words: Who, What, Where", "Hãy nhớ lại: who (ai), what (cái gì), where (ở đâu).", [
    { question: "Từ để hỏi 'ai' là gì?", options: ["What", "Who", "Where", "When"], correctIndex: 1, explanation: "'Who' nghĩa là 'ai'." },
    { question: "Từ để hỏi 'ở đâu' là gì?", options: ["Who", "What", "Where", "Why"], correctIndex: 2, explanation: "'Where' nghĩa là 'ở đâu'." },
    { question: "'What is this?' nghĩa là gì?", options: ["Đây là ai?", "Đây là cái gì?", "Đây ở đâu?", "Đây là khi nào?"], correctIndex: 1, explanation: "Câu này nghĩa là 'Đây là cái gì?'" },
    { question: "'Where do you live?' nghĩa là gì?", options: ["Bạn tên là gì?", "Bạn sống ở đâu?", "Bạn bao nhiêu tuổi?", "Bạn học lớp mấy?"], correctIndex: 1, explanation: "Câu này hỏi về nơi sinh sống." },
  ]),
  "tieng-anh:3:van-dung-question-words-when-why-how": practiceContent("Vận dụng", "Question Words: When, Why, How", "Hãy nhớ lại: when (khi nào), why (tại sao), how (như thế nào).", [
    { question: "Từ để hỏi 'khi nào' là gì?", options: ["Why", "How", "When", "What"], correctIndex: 2, explanation: "'When' nghĩa là 'khi nào'." },
    { question: "Từ để hỏi 'tại sao' là gì?", options: ["Why", "Who", "Where", "When"], correctIndex: 0, explanation: "'Why' nghĩa là 'tại sao'." },
    { question: "'How do you feel?' nghĩa là gì?", options: ["Bạn tên là gì?", "Bạn cảm thấy thế nào?", "Bạn ở đâu?", "Bạn bao nhiêu tuổi?"], correctIndex: 1, explanation: "Câu này hỏi về cảm xúc." },
    { question: "'When is your birthday?' nghĩa là gì?", options: ["Sinh nhật bạn khi nào?", "Bạn tên là gì?", "Bạn thích gì?", "Bạn ở đâu?"], correctIndex: 0, explanation: "Câu này hỏi về ngày sinh nhật." },
  ]),
  "tieng-anh:3:tro-choi-on-tap-my-favourite-colour": practiceContent("Trò chơi ôn tập", "My Favourite Colour", "Hãy nhớ lại từ vựng màu sắc: red, blue, green, yellow, purple, pink.", [
    { question: "'Yellow' nghĩa là gì?", options: ["Đỏ", "Vàng", "Xanh lá", "Tím"], correctIndex: 1, explanation: "'Yellow' nghĩa là 'Vàng'." },
    { question: "'Purple' nghĩa là gì?", options: ["Tím", "Hồng", "Xanh dương", "Đỏ"], correctIndex: 0, explanation: "'Purple' nghĩa là 'Tím'." },
    { question: "'Green' nghĩa là gì?", options: ["Xanh lá", "Xanh dương", "Vàng", "Hồng"], correctIndex: 0, explanation: "'Green' nghĩa là 'Xanh lá'." },
    { question: "'My favourite colour is blue.' nghĩa là gì?", options: ["Màu yêu thích của em là màu đỏ.", "Màu yêu thích của em là màu xanh dương.", "Màu yêu thích của em là màu vàng.", "Em không thích màu nào."], correctIndex: 1, explanation: "Câu này nghĩa là 'Màu yêu thích của em là màu xanh dương.'" },
  ]),
  "tieng-anh:3:thu-thach-nho-my-favourite-animal": practiceContent("Thử thách nhỏ", "My Favourite Animal", "Hãy nhớ lại cách nói con vật yêu thích và lý do bằng 'because'.", [
    { question: "'My favourite animal is the panda.' nghĩa là gì?", options: ["Em không thích gấu trúc.", "Con vật yêu thích của em là gấu trúc.", "Gấu trúc rất to.", "Em có một con gấu trúc."], correctIndex: 1, explanation: "Câu này nghĩa là 'Con vật yêu thích của em là gấu trúc.'" },
    { question: "'Because' nghĩa là gì?", options: ["Nhưng", "Vì", "Và", "Hoặc"], correctIndex: 1, explanation: "'Because' nghĩa là 'Vì'." },
    { question: "'Cute' nghĩa là gì?", options: ["Đáng sợ", "Dễ thương", "To lớn", "Nguy hiểm"], correctIndex: 1, explanation: "'Cute' nghĩa là 'Dễ thương'." },
    { question: "'It is black and white.' nghĩa là gì?", options: ["Nó có màu đỏ và vàng.", "Nó có màu đen và trắng.", "Nó có màu xanh.", "Nó không có màu."], correctIndex: 1, explanation: "Câu này nghĩa là 'Nó có màu đen và trắng.'" },
  ]),
  "tieng-anh:3:thuc-hanh-asking-for-help-politely": practiceContent("Thực hành", "Asking for Help Politely", "Hãy nhớ lại cách nhờ giúp đỡ lịch sự với 'please' và 'could you'.", [
    { question: "'Could you help me, please?' nghĩa là gì?", options: ["Bạn có khoẻ không?", "Bạn có thể giúp em không ạ?", "Bạn tên là gì?", "Bạn ở đâu?"], correctIndex: 1, explanation: "Câu này là lời đề nghị giúp đỡ lịch sự." },
    { question: "Từ nào giúp câu nói trở nên lịch sự hơn?", options: ["Please", "No", "Stop", "Never"], correctIndex: 0, explanation: "'Please' làm câu nói lịch sự hơn." },
    { question: "Khi được giúp đỡ, em nên nói gì?", options: ["Goodbye", "Sorry", "Thank you", "No"], correctIndex: 2, explanation: "'Thank you' dùng để cảm ơn." },
    { question: "'Can you open the door, please?' nghĩa là gì?", options: ["Bạn đóng cửa giúp em được không?", "Bạn mở cửa giúp em được không?", "Cửa ở đâu?", "Bạn có cửa không?"], correctIndex: 1, explanation: "Câu này nghĩa là lời nhờ mở cửa lịch sự." },
  ]),
  "tieng-anh:3:luyen-tap-making-simple-requests": practiceContent("Luyện tập", "Making Simple Requests", "Hãy nhớ lại cách dùng 'can I' và 'I want' để đưa ra yêu cầu.", [
    { question: "'Can I have some water, please?' nghĩa là gì?", options: ["Cho em xin ít nước ạ.", "Nước ở đâu?", "Em không muốn uống nước.", "Bạn có nước không?"], correctIndex: 0, explanation: "Câu này là lời yêu cầu xin nước." },
    { question: "'I want to go outside.' nghĩa là gì?", options: ["Em muốn ở trong nhà.", "Em muốn ra ngoài.", "Em muốn đi ngủ.", "Em muốn ăn cơm."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em muốn ra ngoài.'" },
    { question: "'Can I...?' dùng để làm gì?", options: ["Đưa ra lời khen", "Đưa ra yêu cầu, xin phép", "Chào hỏi", "Tạm biệt"], correctIndex: 1, explanation: "'Can I...?' dùng để xin phép hoặc đưa ra yêu cầu." },
    { question: "'Sure, here you are.' dùng để làm gì?", options: ["Từ chối yêu cầu", "Đồng ý và đưa vật gì đó", "Hỏi lại", "Xin lỗi"], correctIndex: 1, explanation: "Câu này dùng để đồng ý và trao đồ vật." },
  ]),
  "tieng-anh:3:van-dung-telling-a-short-story": practiceContent("Vận dụng", "Telling a Short Story", "Hãy nhớ lại từ nối: first, then, next, finally.", [
    { question: "'First' nghĩa là gì?", options: ["Cuối cùng", "Đầu tiên", "Sau đó", "Tiếp theo"], correctIndex: 1, explanation: "'First' nghĩa là 'Đầu tiên'." },
    { question: "'Finally' nghĩa là gì?", options: ["Đầu tiên", "Sau đó", "Cuối cùng", "Bây giờ"], correctIndex: 2, explanation: "'Finally' nghĩa là 'Cuối cùng'." },
    { question: "'Then' nghĩa là gì?", options: ["Sau đó", "Trước đó", "Không bao giờ", "Luôn luôn"], correctIndex: 0, explanation: "'Then' nghĩa là 'Sau đó'." },
    { question: "Từ nào giúp câu chuyện có trình tự rõ ràng?", options: ["First, then, finally", "Red, blue, green", "Big, small, tall", "Happy, sad, angry"], correctIndex: 0, explanation: "Các từ chỉ trình tự giúp câu chuyện mạch lạc." },
  ]),
  "tieng-anh:3:tro-choi-on-tap-days-and-dates": practiceContent("Trò chơi ôn tập", "Days and Dates", "Hãy nhớ lại tên các ngày trong tuần.", [
    { question: "'Monday' nghĩa là gì?", options: ["Thứ Hai", "Thứ Ba", "Chủ nhật", "Thứ Bảy"], correctIndex: 0, explanation: "'Monday' nghĩa là 'Thứ Hai'." },
    { question: "'Sunday' nghĩa là gì?", options: ["Thứ Bảy", "Chủ nhật", "Thứ Sáu", "Thứ Hai"], correctIndex: 1, explanation: "'Sunday' nghĩa là 'Chủ nhật'." },
    { question: "Ngày nào đến sau 'Friday'?", options: ["Thursday", "Saturday", "Sunday", "Monday"], correctIndex: 1, explanation: "Sau 'Friday' (thứ Sáu) là 'Saturday' (thứ Bảy)." },
    { question: "'What day is it today?' dùng để hỏi điều gì?", options: ["Hỏi hôm nay là thứ mấy", "Hỏi thời tiết", "Hỏi giờ", "Hỏi tháng"], correctIndex: 0, explanation: "Câu này hỏi về ngày trong tuần." },
  ]),
  "tieng-anh:3:thu-thach-nho-months-of-the-year-review": practiceContent("Thử thách nhỏ", "Months of the Year Review", "Hãy nhớ lại tên 12 tháng trong tiếng Anh.", [
    { question: "'January' là tháng mấy?", options: ["Tháng 1", "Tháng 2", "Tháng 12", "Tháng 6"], correctIndex: 0, explanation: "'January' là 'Tháng 1'." },
    { question: "'December' là tháng mấy?", options: ["Tháng 10", "Tháng 11", "Tháng 12", "Tháng 1"], correctIndex: 2, explanation: "'December' là 'Tháng 12'." },
    { question: "Một năm có bao nhiêu tháng?", options: ["10", "11", "12", "13"], correctIndex: 2, explanation: "Một năm có 12 tháng." },
    { question: "'My birthday is in June.' nghĩa là gì?", options: ["Sinh nhật em vào tháng Sáu.", "Sinh nhật em vào tháng Bảy.", "Em không có sinh nhật.", "Sinh nhật em vào tháng Một."], correctIndex: 0, explanation: "Câu này nghĩa là 'Sinh nhật em vào tháng Sáu.'" },
  ]),
  "tieng-anh:3:thuc-hanh-my-dream-house": practiceContent("Thực hành", "My Dream House", "Hãy nhớ lại cách dùng 'would like' để nói về mong muốn.", [
    { question: "'Garden' nghĩa là gì?", options: ["Vườn", "Bếp", "Phòng ngủ", "Bể bơi"], correctIndex: 0, explanation: "'Garden' nghĩa là 'Vườn'." },
    { question: "'Swimming pool' nghĩa là gì?", options: ["Vườn", "Bể bơi", "Sân chơi", "Ga ra"], correctIndex: 1, explanation: "'Swimming pool' nghĩa là 'Bể bơi'." },
    { question: "'I would like...' dùng để diễn tả điều gì?", options: ["Mệnh lệnh", "Mong muốn", "Câu hỏi", "Lời xin lỗi"], correctIndex: 1, explanation: "'I would like...' dùng để diễn tả mong muốn một cách lịch sự." },
    { question: "'I would like a house with a garden.' nghĩa là gì?", options: ["Em không thích vườn.", "Em muốn có một ngôi nhà có vườn.", "Nhà em có vườn rồi.", "Em muốn có bể bơi."], correctIndex: 1, explanation: "Câu này nghĩa là mong muốn có nhà với vườn." },
  ]),
  "tieng-anh:3:luyen-tap-healthy-food": practiceContent("Luyện tập", "Healthy Food", "Hãy nhớ lại từ vựng: vegetables, fruit, fish, water.", [
    { question: "'Vegetables' nghĩa là gì?", options: ["Trái cây", "Rau củ", "Bánh kẹo", "Nước ngọt"], correctIndex: 1, explanation: "'Vegetables' nghĩa là 'Rau củ'." },
    { question: "'Fruit' nghĩa là gì?", options: ["Trái cây", "Rau", "Thịt", "Cá"], correctIndex: 0, explanation: "'Fruit' nghĩa là 'Trái cây'." },
    { question: "Loại thực phẩm nào tốt cho sức khoẻ?", options: ["Candy", "Vegetables", "Soda", "Chips"], correctIndex: 1, explanation: "'Vegetables' (rau củ) tốt cho sức khoẻ." },
    { question: "'Vegetables are good for health.' nghĩa là gì?", options: ["Rau củ không tốt cho sức khoẻ.", "Rau củ tốt cho sức khoẻ.", "Em không thích rau củ.", "Rau củ rất đắt."], correctIndex: 1, explanation: "Câu này nghĩa là 'Rau củ tốt cho sức khoẻ.'" },
  ]),
  "tieng-anh:3:van-dung-unhealthy-food": practiceContent("Vận dụng", "Unhealthy Food", "Hãy nhớ lại từ vựng: candy, soda, chips, fast food.", [
    { question: "'Candy' nghĩa là gì?", options: ["Rau", "Kẹo", "Cá", "Trái cây"], correctIndex: 1, explanation: "'Candy' nghĩa là 'Kẹo'." },
    { question: "'Fast food' nghĩa là gì?", options: ["Đồ ăn nhanh", "Đồ ăn chậm", "Rau củ", "Trái cây tươi"], correctIndex: 0, explanation: "'Fast food' nghĩa là 'Đồ ăn nhanh'." },
    { question: "'Soda is not good for teeth.' nghĩa là gì?", options: ["Nước ngọt tốt cho răng.", "Nước ngọt không tốt cho răng.", "Em thích nước ngọt.", "Nước ngọt rất ngon."], correctIndex: 1, explanation: "Câu này nghĩa là nước ngọt không tốt cho răng." },
    { question: "'I don't eat too much candy.' nghĩa là gì?", options: ["Em ăn rất nhiều kẹo.", "Em không ăn quá nhiều kẹo.", "Em không thích kẹo.", "Em ăn kẹo mỗi ngày."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em không ăn quá nhiều kẹo.'" },
  ]),
  "tieng-anh:3:tro-choi-on-tap-at-the-doctor-s": practiceContent("Trò chơi ôn tập", "At the Doctor's", "Hãy nhớ lại từ vựng: headache, stomachache, fever, cough.", [
    { question: "'Headache' nghĩa là gì?", options: ["Đau bụng", "Đau đầu", "Sốt", "Ho"], correctIndex: 1, explanation: "'Headache' nghĩa là 'Đau đầu'." },
    { question: "'Fever' nghĩa là gì?", options: ["Sốt", "Ho", "Đau đầu", "Đau bụng"], correctIndex: 0, explanation: "'Fever' nghĩa là 'Sốt'." },
    { question: "'I have a headache.' nghĩa là gì?", options: ["Em bị đau bụng.", "Em bị đau đầu.", "Em bị sốt.", "Em bị ho."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em bị đau đầu.'" },
    { question: "'What's wrong?' dùng để hỏi điều gì?", options: ["Hỏi tên", "Hỏi bạn bị làm sao", "Hỏi tuổi", "Hỏi địa chỉ"], correctIndex: 1, explanation: "Câu này hỏi về vấn đề sức khoẻ." },
  ]),
  "tieng-anh:3:thu-thach-nho-feelings-and-emotions": practiceContent("Thử thách nhỏ", "Feelings and Emotions", "Hãy nhớ lại từ vựng cảm xúc: happy, sad, angry, tired, excited.", [
    { question: "'Happy' nghĩa là gì?", options: ["Buồn", "Vui", "Giận", "Mệt"], correctIndex: 1, explanation: "'Happy' nghĩa là 'Vui'." },
    { question: "'Angry' nghĩa là gì?", options: ["Vui", "Giận", "Hào hứng", "Buồn"], correctIndex: 1, explanation: "'Angry' nghĩa là 'Giận'." },
    { question: "'Tired' nghĩa là gì?", options: ["Mệt", "Vui", "Hào hứng", "Buồn"], correctIndex: 0, explanation: "'Tired' nghĩa là 'Mệt'." },
    { question: "'I am happy today.' nghĩa là gì?", options: ["Hôm nay em buồn.", "Hôm nay em vui.", "Hôm nay em mệt.", "Hôm nay em giận."], correctIndex: 1, explanation: "Câu này nghĩa là 'Hôm nay em vui.'" },
  ]),
  "tieng-anh:3:thuc-hanh-making-new-friends": practiceContent("Thực hành", "Making New Friends", "Hãy nhớ lại mẫu câu làm quen: What's your name? Where are you from?", [
    { question: "'What's your name?' dùng để hỏi điều gì?", options: ["Hỏi tuổi", "Hỏi tên", "Hỏi địa chỉ", "Hỏi sở thích"], correctIndex: 1, explanation: "Câu này hỏi về tên của người khác." },
    { question: "'Nice to meet you!' nghĩa là gì?", options: ["Tạm biệt bạn!", "Rất vui được gặp bạn!", "Xin lỗi bạn!", "Cảm ơn bạn!"], correctIndex: 1, explanation: "Câu này dùng khi mới gặp ai đó lần đầu." },
    { question: "'Where are you from?' dùng để hỏi điều gì?", options: ["Hỏi bạn đến từ đâu", "Hỏi bạn đi đâu", "Hỏi bạn làm gì", "Hỏi bạn thích gì"], correctIndex: 0, explanation: "Câu này hỏi về quê quán, nơi xuất thân." },
    { question: "Khi làm quen bạn mới, em nên có thái độ như thế nào?", options: ["Lạnh lùng", "Thân thiện, cởi mở", "Im lặng", "Trốn tránh"], correctIndex: 1, explanation: "Thái độ thân thiện giúp dễ dàng kết bạn." },
  ]),
  "tieng-anh:3:luyen-tap-school-rules": practiceContent("Luyện tập", "School Rules", "Hãy nhớ lại: must (phải), mustn't (không được).", [
    { question: "'Must' nghĩa là gì?", options: ["Không được", "Phải", "Có thể", "Không cần"], correctIndex: 1, explanation: "'Must' nghĩa là 'Phải'." },
    { question: "'Mustn't' nghĩa là gì?", options: ["Phải", "Không được", "Có thể", "Nên"], correctIndex: 1, explanation: "'Mustn't' nghĩa là 'Không được'." },
    { question: "'You must be on time.' nghĩa là gì?", options: ["Bạn không cần đúng giờ.", "Bạn phải đúng giờ.", "Bạn có thể đến muộn.", "Bạn không được đến."], correctIndex: 1, explanation: "Câu này nghĩa là 'Bạn phải đúng giờ.'" },
    { question: "'You mustn't run in the corridor.' nghĩa là gì?", options: ["Bạn phải chạy trong hành lang.", "Bạn không được chạy trong hành lang.", "Bạn có thể chạy ở bất cứ đâu.", "Không có hành lang ở trường."], correctIndex: 1, explanation: "Câu này nghĩa là quy định cấm chạy trong hành lang." },
  ]),
  "tieng-anh:3:van-dung-my-neighbourhood-review": practiceContent("Vận dụng", "My Neighbourhood Review", "Hãy nhớ lại từ vựng: park, market, hospital, post office.", [
    { question: "'Park' nghĩa là gì?", options: ["Chợ", "Công viên", "Bệnh viện", "Bưu điện"], correctIndex: 1, explanation: "'Park' nghĩa là 'Công viên'." },
    { question: "'Hospital' nghĩa là gì?", options: ["Bệnh viện", "Trường học", "Công viên", "Chợ"], correctIndex: 0, explanation: "'Hospital' nghĩa là 'Bệnh viện'." },
    { question: "'Post office' nghĩa là gì?", options: ["Bưu điện", "Bệnh viện", "Trường học", "Siêu thị"], correctIndex: 0, explanation: "'Post office' nghĩa là 'Bưu điện'." },
    { question: "'There is a park near my house.' nghĩa là gì?", options: ["Không có công viên gần nhà em.", "Có một công viên gần nhà em.", "Công viên rất xa nhà em.", "Em không thích công viên."], correctIndex: 1, explanation: "Câu này nghĩa là 'Có một công viên gần nhà em.'" },
  ]),
  "tieng-anh:3:tro-choi-on-tap-shopping-for-school-supplies": practiceContent("Trò chơi ôn tập", "Shopping for School Supplies", "Hãy nhớ lại từ vựng: notebook, pencil case, ruler, eraser.", [
    { question: "'Notebook' nghĩa là gì?", options: ["Vở", "Bút", "Thước kẻ", "Cục tẩy"], correctIndex: 0, explanation: "'Notebook' nghĩa là 'Vở'." },
    { question: "'Eraser' nghĩa là gì?", options: ["Thước kẻ", "Cục tẩy", "Bút chì", "Vở"], correctIndex: 1, explanation: "'Eraser' nghĩa là 'Cục tẩy'." },
    { question: "'Pencil case' nghĩa là gì?", options: ["Hộp bút", "Cặp sách", "Bàn học", "Ghế ngồi"], correctIndex: 0, explanation: "'Pencil case' nghĩa là 'Hộp bút'." },
    { question: "'I need a new notebook.' nghĩa là gì?", options: ["Em cần một quyển vở mới.", "Em có nhiều vở.", "Em không cần vở.", "Vở của em rất đẹp."], correctIndex: 0, explanation: "Câu này nghĩa là 'Em cần một quyển vở mới.'" },
  ]),
  "tieng-anh:3:thu-thach-nho-describing-a-picture": practiceContent("Thử thách nhỏ", "Describing a Picture", "Hãy nhớ lại cách dùng 'there is/there are' để mô tả tranh.", [
    { question: "'There is' dùng khi nào?", options: ["Khi nói về nhiều vật", "Khi nói về một vật", "Khi hỏi câu hỏi", "Không dùng khi nào"], correctIndex: 1, explanation: "'There is' dùng với danh từ số ít." },
    { question: "'There are' dùng khi nào?", options: ["Khi nói về một vật", "Khi nói về nhiều vật", "Không dùng khi nào", "Chỉ dùng với người"], correctIndex: 1, explanation: "'There are' dùng với danh từ số nhiều." },
    { question: "'There is a dog in the picture.' nghĩa là gì?", options: ["Không có con chó nào trong tranh.", "Có một con chó trong bức tranh.", "Có hai con chó trong tranh.", "Con chó không có trong tranh."], correctIndex: 1, explanation: "Câu này nghĩa là 'Có một con chó trong bức tranh.'" },
    { question: "'The children are happy.' nghĩa là gì?", options: ["Hai đứa trẻ đang buồn.", "Hai đứa trẻ đang vui vẻ.", "Không có đứa trẻ nào.", "Đứa trẻ đang ngủ."], correctIndex: 1, explanation: "Câu này nghĩa là 'Hai đứa trẻ đang vui vẻ.'" },
  ]),
  "tieng-anh:3:thuc-hanh-short-dialogues-practice": practiceContent("Thực hành", "Short Dialogues Practice", "Hãy nhớ lại mẫu hội thoại: How are you? I'm fine, thanks. And you?", [
    { question: "'I'm fine, thanks. And you?' nghĩa là gì?", options: ["Em khoẻ, cảm ơn. Còn bạn thì sao?", "Em không khoẻ.", "Tạm biệt bạn.", "Bạn tên là gì?"], correctIndex: 0, explanation: "Câu này là câu trả lời và hỏi lại lịch sự." },
    { question: "'And you?' dùng để làm gì?", options: ["Hỏi lại người kia", "Kết thúc hội thoại", "Từ chối trả lời", "Không có tác dụng"], correctIndex: 0, explanation: "'And you?' dùng để hỏi lại đối phương câu hỏi tương tự." },
    { question: "Luyện tập hội thoại theo cặp giúp ích gì?", options: ["Không có ích gì", "Phản xạ giao tiếp nhanh hơn", "Làm mất thời gian", "Không liên quan đến nói"], correctIndex: 1, explanation: "Luyện tập theo cặp giúp phản xạ giao tiếp nhanh hơn." },
    { question: "Khi luyện hội thoại, em nên chú ý điều gì?", options: ["Nói thật nhanh không cần hiểu", "Phát âm rõ ràng, tự tin", "Không cần nhìn bạn", "Chỉ đọc theo sách"], correctIndex: 1, explanation: "Phát âm rõ ràng, tự tin giúp giao tiếp hiệu quả hơn." },
  ]),
  "tieng-anh:3:luyen-tap-listening-for-key-words": practiceContent("Luyện tập", "Listening for Key Words", "Hãy nhớ lại: tập trung vào từ khoá quan trọng khi nghe.", [
    { question: "Từ khoá trong câu nói giúp ích điều gì?", options: ["Không có ích gì", "Hiểu ý chính dù không nghe hết", "Làm bài khó hơn", "Không liên quan đến nghe hiểu"], correctIndex: 1, explanation: "Từ khoá giúp hiểu ý chính dù không nghe rõ hết câu." },
    { question: "Trong câu 'I have a red bike.', từ nào là từ khoá quan trọng?", options: ["I, have", "Red, bike", "A", "Không có từ khoá nào"], correctIndex: 1, explanation: "'Red' và 'bike' là các từ mang thông tin chính." },
    { question: "Khi luyện nghe, em nên làm gì nếu không hiểu hết câu?", options: ["Dừng lại không nghe nữa", "Tập trung vào từ khoá đã nghe được", "Đoán bừa không cần nghe", "Bỏ qua hoàn toàn"], correctIndex: 1, explanation: "Nên tập trung vào từ khoá thay vì cố hiểu từng từ." },
    { question: "Kỹ năng nghe bắt từ khoá hữu ích khi nào?", options: ["Khi nghe hội thoại tiếng Anh tốc độ nhanh", "Không hữu ích khi nào", "Chỉ khi đọc sách", "Chỉ khi viết bài"], correctIndex: 0, explanation: "Kỹ năng này đặc biệt hữu ích khi nghe hội thoại tốc độ nhanh." },
  ]),
  "tieng-anh:3:van-dung-simple-songs-and-chants": practiceContent("Vận dụng", "Simple Songs and Chants", "Hãy nhớ lại bài hát 'Head, shoulders, knees and toes'.", [
    { question: "Bài hát tiếng Anh giúp ích điều gì cho việc học?", options: ["Không có ích gì", "Ghi nhớ từ vựng dễ dàng hơn", "Làm mất thời gian", "Không liên quan đến học tiếng Anh"], correctIndex: 1, explanation: "Bài hát giúp ghi nhớ từ vựng và mẫu câu tự nhiên hơn." },
    { question: "'Head, shoulders, knees and toes' là bài hát về chủ đề gì?", options: ["Màu sắc", "Bộ phận cơ thể", "Con vật", "Thức ăn"], correctIndex: 1, explanation: "Bài hát này liệt kê các bộ phận cơ thể." },
    { question: "'Shoulders' nghĩa là gì?", options: ["Vai", "Đầu gối", "Ngón chân", "Đầu"], correctIndex: 0, explanation: "'Shoulders' nghĩa là 'Vai'." },
    { question: "Vì sao giai điệu lặp lại giúp học tốt hơn?", options: ["Không có lý do gì", "Giúp não bộ ghi nhớ dễ dàng qua lặp lại", "Làm bài hát dài hơn", "Không liên quan đến trí nhớ"], correctIndex: 1, explanation: "Sự lặp lại giúp não bộ ghi nhớ thông tin tốt hơn." },
  ]),
  "tieng-anh:3:tro-choi-on-tap-vocabulary-game-word-match": practiceContent("Trò chơi ôn tập", "Vocabulary Game: Word Match", "Hãy nhớ lại cách ghép từ tiếng Anh với nghĩa tiếng Việt.", [
    { question: "Trò chơi ghép từ giúp ích điều gì?", options: ["Không có ích gì", "Củng cố trí nhớ từ vựng", "Làm bài khó hơn", "Không liên quan đến từ vựng"], correctIndex: 1, explanation: "Trò chơi ghép từ giúp củng cố trí nhớ từ vựng." },
    { question: "'Cat' ghép với nghĩa tiếng Việt nào?", options: ["Con chó", "Con mèo", "Con cá", "Con thỏ"], correctIndex: 1, explanation: "'Cat' nghĩa là 'Con mèo'." },
    { question: "'Bird' ghép với nghĩa tiếng Việt nào?", options: ["Con chim", "Con cá", "Con mèo", "Con chó"], correctIndex: 0, explanation: "'Bird' nghĩa là 'Con chim'." },
    { question: "Chơi trò chơi từ vựng thường xuyên mang lại lợi ích gì?", options: ["Nhớ từ lâu hơn, phản xạ nhanh hơn", "Không có lợi ích gì", "Làm quên từ nhanh hơn", "Không liên quan đến ghi nhớ"], correctIndex: 0, explanation: "Luyện tập thường xuyên giúp nhớ từ lâu hơn và phản xạ nhanh." },
  ]),
  "tieng-anh:3:thu-thach-nho-review-colours-numbers-animals": practiceContent("Thử thách nhỏ", "Review: Colours, Numbers, Animals", "Hãy ôn lại từ vựng về màu sắc, số đếm, con vật.", [
    { question: "'Red' nghĩa là gì?", options: ["Xanh", "Đỏ", "Vàng", "Tím"], correctIndex: 1, explanation: "'Red' nghĩa là 'Đỏ'." },
    { question: "Số 'five' là số mấy?", options: ["3", "4", "5", "6"], correctIndex: 2, explanation: "'Five' là số 5." },
    { question: "'Elephant' nghĩa là gì?", options: ["Voi", "Sư tử", "Hổ", "Khỉ"], correctIndex: 0, explanation: "'Elephant' nghĩa là 'Voi'." },
    { question: "'Green' nghĩa là gì?", options: ["Xanh lá", "Đỏ", "Vàng", "Nâu"], correctIndex: 0, explanation: "'Green' nghĩa là 'Xanh lá'." },
  ]),
  "tieng-anh:3:thuc-hanh-review-family-and-friends": practiceContent("Thực hành", "Review: Family and Friends", "Hãy ôn lại từ vựng về gia đình và bạn bè.", [
    { question: "'Father' nghĩa là gì?", options: ["Mẹ", "Bố", "Anh", "Em"], correctIndex: 1, explanation: "'Father' nghĩa là 'Bố'." },
    { question: "'Best friend' nghĩa là gì?", options: ["Bạn thân nhất", "Bạn cùng lớp", "Người lạ", "Hàng xóm"], correctIndex: 0, explanation: "'Best friend' nghĩa là 'Bạn thân nhất'." },
    { question: "'Sister' nghĩa là gì?", options: ["Anh trai", "Chị/em gái", "Bố", "Ông"], correctIndex: 1, explanation: "'Sister' nghĩa là 'Chị/em gái'." },
    { question: "'Classmate' nghĩa là gì?", options: ["Bạn cùng lớp", "Giáo viên", "Hiệu trưởng", "Người lạ"], correctIndex: 0, explanation: "'Classmate' nghĩa là 'Bạn cùng lớp'." },
  ]),
  "tieng-anh:3:luyen-tap-review-food-and-drinks": practiceContent("Luyện tập", "Review: Food and Drinks", "Hãy ôn lại từ vựng về món ăn, đồ uống.", [
    { question: "'Rice' nghĩa là gì?", options: ["Bánh mì", "Cơm", "Mì", "Trái cây"], correctIndex: 1, explanation: "'Rice' nghĩa là 'Cơm'." },
    { question: "'Milk' nghĩa là gì?", options: ["Nước", "Sữa", "Trà", "Nước ép"], correctIndex: 1, explanation: "'Milk' nghĩa là 'Sữa'." },
    { question: "'Noodles' nghĩa là gì?", options: ["Mì", "Cơm", "Bánh mì", "Bánh ngọt"], correctIndex: 0, explanation: "'Noodles' nghĩa là 'Mì'." },
    { question: "'Juice' nghĩa là gì?", options: ["Nước ép", "Sữa", "Trà", "Nước lọc"], correctIndex: 0, explanation: "'Juice' nghĩa là 'Nước ép'." },
  ]),
  "tieng-anh:3:van-dung-mid-term-review-1": practiceContent("Vận dụng", "Mid-term Review 1", "Hãy ôn lại kiến thức giữa học kỳ 1: greetings, family, school, numbers.", [
    { question: "'Hello' nghĩa là gì?", options: ["Tạm biệt", "Xin chào", "Cảm ơn", "Xin lỗi"], correctIndex: 1, explanation: "'Hello' nghĩa là 'Xin chào'." },
    { question: "'School' nghĩa là gì?", options: ["Nhà", "Trường học", "Công viên", "Bệnh viện"], correctIndex: 1, explanation: "'School' nghĩa là 'Trường học'." },
    { question: "'Mother' nghĩa là gì?", options: ["Bố", "Mẹ", "Anh", "Chị"], correctIndex: 1, explanation: "'Mother' nghĩa là 'Mẹ'." },
    { question: "'Three' là số mấy?", options: ["1", "2", "3", "4"], correctIndex: 2, explanation: "'Three' là số 3." },
  ]),
  "tieng-anh:3:tro-choi-on-tap-end-of-term-1-review": practiceContent("Trò chơi ôn tập", "End of Term 1 Review", "Hãy ôn lại toàn bộ chủ đề học kỳ 1.", [
    { question: "'House' nghĩa là gì?", options: ["Nhà", "Trường học", "Công viên", "Chợ"], correctIndex: 0, explanation: "'House' nghĩa là 'Nhà'." },
    { question: "'Hobby' nghĩa là gì?", options: ["Sở thích", "Công việc", "Bài tập", "Kỳ nghỉ"], correctIndex: 0, explanation: "'Hobby' nghĩa là 'Sở thích'." },
    { question: "'Weather' nghĩa là gì?", options: ["Thời tiết", "Thời gian", "Mùa", "Ngày tháng"], correctIndex: 0, explanation: "'Weather' nghĩa là 'Thời tiết'." },
    { question: "'Friend' nghĩa là gì?", options: ["Bạn bè", "Gia đình", "Thầy cô", "Hàng xóm"], correctIndex: 0, explanation: "'Friend' nghĩa là 'Bạn bè'." },
  ]),
  "tieng-anh:3:thu-thach-nho-mid-term-review-2": practiceContent("Thử thách nhỏ", "Mid-term Review 2", "Hãy ôn lại: can/can't, prepositions, this/that, jobs.", [
    { question: "'Doctor' nghĩa là gì?", options: ["Giáo viên", "Bác sĩ", "Nông dân", "Kỹ sư"], correctIndex: 1, explanation: "'Doctor' nghĩa là 'Bác sĩ'." },
    { question: "'I can swim.' nghĩa là gì?", options: ["Em không thể bơi.", "Em có thể bơi.", "Em thích bơi.", "Em sợ nước."], correctIndex: 1, explanation: "'Can' nghĩa là 'có thể'." },
    { question: "'Under' nghĩa là gì?", options: ["Trên", "Dưới", "Bên cạnh", "Ở giữa"], correctIndex: 1, explanation: "'Under' nghĩa là 'Dưới'." },
    { question: "'Bus' nghĩa là gì?", options: ["Xe buýt", "Xe đạp", "Tàu hoả", "Máy bay"], correctIndex: 0, explanation: "'Bus' nghĩa là 'Xe buýt'." },
  ]),
  "tieng-anh:3:thuc-hanh-reading-short-stories": practiceContent("Thực hành", "Reading Short Stories", "Hãy nhớ lại cách đọc hiểu: xem tiêu đề, tranh, trả lời Who/What/Where.", [
    { question: "Trước khi đọc truyện, em nên làm gì?", options: ["Đọc ngay không cần chuẩn bị", "Xem tiêu đề và tranh minh hoạ", "Bỏ qua tiêu đề", "Không cần làm gì"], correctIndex: 1, explanation: "Xem tiêu đề và tranh giúp đoán trước nội dung." },
    { question: "Câu hỏi 'Who?' dùng để hỏi về điều gì trong truyện?", options: ["Nhân vật", "Địa điểm", "Thời gian", "Màu sắc"], correctIndex: 0, explanation: "'Who?' hỏi về nhân vật trong truyện." },
    { question: "Câu hỏi 'Where?' dùng để hỏi về điều gì?", options: ["Địa điểm", "Nhân vật", "Thời gian", "Hành động"], correctIndex: 0, explanation: "'Where?' hỏi về địa điểm trong truyện." },
    { question: "Đọc truyện ngắn giúp ích điều gì cho việc học tiếng Anh?", options: ["Không có ích gì", "Mở rộng vốn từ và khả năng đọc hiểu", "Làm mất thời gian", "Không liên quan đến tiếng Anh"], correctIndex: 1, explanation: "Đọc truyện giúp mở rộng vốn từ và khả năng đọc hiểu." },
  ]),
  "tieng-anh:3:luyen-tap-writing-short-sentences": practiceContent("Luyện tập", "Writing Short Sentences", "Hãy nhớ lại cấu trúc câu: Subject + Verb + Object.", [
    { question: "Câu tiếng Anh cơ bản có cấu trúc nào?", options: ["Verb + Subject + Object", "Subject + Verb + Object", "Object + Subject + Verb", "Không có cấu trúc cố định"], correctIndex: 1, explanation: "Cấu trúc câu cơ bản là Subject + Verb + Object." },
    { question: "Câu tiếng Anh cần bắt đầu bằng gì?", options: ["Chữ thường", "Chữ hoa", "Dấu chấm", "Dấu phẩy"], correctIndex: 1, explanation: "Câu tiếng Anh luôn bắt đầu bằng chữ hoa." },
    { question: "'I like apples.' có cấu trúc nào?", options: ["Subject (I) + Verb (like) + Object (apples)", "Chỉ có Subject", "Chỉ có Verb", "Không theo cấu trúc nào"], correctIndex: 0, explanation: "Câu này đúng cấu trúc Subject + Verb + Object." },
    { question: "Câu tiếng Anh thường kết thúc bằng dấu gì?", options: ["Dấu phẩy", "Dấu chấm", "Dấu ngoặc", "Dấu gạch ngang"], correctIndex: 1, explanation: "Câu thường kết thúc bằng dấu chấm." },
  ]),
  "tieng-anh:3:van-dung-my-favourite-season": practiceContent("Vận dụng", "My Favourite Season", "Hãy nhớ lại cách nói mùa yêu thích và lý do bằng 'because'.", [
    { question: "'My favourite season is summer.' nghĩa là gì?", options: ["Mùa yêu thích của em là mùa đông.", "Mùa yêu thích của em là mùa hè.", "Em không thích mùa nào.", "Mùa yêu thích của em là mùa xuân."], correctIndex: 1, explanation: "Câu này nghĩa là 'Mùa yêu thích của em là mùa hè.'" },
    { question: "'I can swim.' nghĩa là gì?", options: ["Em không thể bơi.", "Em có thể bơi.", "Em thích bơi.", "Em sợ nước."], correctIndex: 1, explanation: "Câu này nghĩa là 'Em có thể bơi.'" },
    { question: "'Because' dùng để làm gì trong câu?", options: ["Nêu lý do", "Nêu kết quả", "Phủ định câu", "Đặt câu hỏi"], correctIndex: 0, explanation: "'Because' dùng để nêu lý do." },
    { question: "Mùa nào thường có tuyết rơi ở nhiều nước?", options: ["Summer", "Spring", "Winter", "Autumn"], correctIndex: 2, explanation: "'Winter' (mùa đông) thường có tuyết rơi." },
  ]),
  "tieng-anh:3:tro-choi-on-tap-describing-my-classroom": practiceContent("Trò chơi ôn tập", "Describing My Classroom", "Hãy nhớ lại từ vựng: desk, chair, blackboard, window.", [
    { question: "'Blackboard' nghĩa là gì?", options: ["Bảng đen", "Cửa sổ", "Bàn học", "Ghế ngồi"], correctIndex: 0, explanation: "'Blackboard' nghĩa là 'Bảng đen'." },
    { question: "'Desk' nghĩa là gì?", options: ["Ghế", "Bàn học", "Cửa sổ", "Bảng"], correctIndex: 1, explanation: "'Desk' nghĩa là 'Bàn học'." },
    { question: "'Window' nghĩa là gì?", options: ["Cửa sổ", "Cửa ra vào", "Tường", "Trần nhà"], correctIndex: 0, explanation: "'Window' nghĩa là 'Cửa sổ'." },
    { question: "'There is a blackboard in my classroom.' nghĩa là gì?", options: ["Không có bảng đen trong lớp.", "Có một bảng đen trong lớp học.", "Bảng đen ở ngoài sân.", "Em không thích bảng đen."], correctIndex: 1, explanation: "Câu này nghĩa là 'Có một bảng đen trong lớp học của em.'" },
  ]),
  "tieng-anh:3:thu-thach-nho-talking-about-my-town": practiceContent("Thử thách nhỏ", "Talking About My Town", "Hãy nhớ lại cách nói về nơi mình sống.", [
    { question: "'I live in Hanoi.' nghĩa là gì?", options: ["Em sống ở Hà Nội.", "Em sống ở Huế.", "Em không sống ở đâu.", "Em thích Hà Nội."], correctIndex: 0, explanation: "Câu này nghĩa là 'Em sống ở Hà Nội.'" },
    { question: "'Town' nghĩa là gì?", options: ["Thị trấn/thị xã", "Ngôi nhà", "Trường học", "Công viên"], correctIndex: 0, explanation: "'Town' nghĩa là 'Thị trấn/thị xã'." },
    { question: "'Lake' nghĩa là gì?", options: ["Hồ", "Sông", "Biển", "Núi"], correctIndex: 0, explanation: "'Lake' nghĩa là 'Hồ'." },
    { question: "'My town has a big lake.' nghĩa là gì?", options: ["Thị trấn của em không có hồ.", "Thị trấn của em có một hồ lớn.", "Thị trấn của em có một ngọn núi.", "Thị trấn của em rất nhỏ."], correctIndex: 1, explanation: "Câu này nghĩa là 'Thị trấn của em có một hồ lớn.'" },
  ]),
  "tieng-anh:3:thuc-hanh-simple-role-play-at-the-shop": practiceContent("Thực hành", "Simple Role-play: At the Shop", "Hãy nhớ lại hội thoại: Can I help you? I want..., Here you are.", [
    { question: "'Can I help you?' dùng để làm gì?", options: ["Người bán hỏi khách cần gì", "Khách hỏi giá", "Từ chối bán hàng", "Chào tạm biệt"], correctIndex: 0, explanation: "Câu này người bán hàng thường nói để hỏi khách cần gì." },
    { question: "'I want a notebook, please.' nghĩa là gì?", options: ["Em không cần gì.", "Em muốn mua một quyển vở ạ.", "Vở này rất đẹp.", "Em không thích vở."], correctIndex: 1, explanation: "Câu này nghĩa là yêu cầu mua một quyển vở." },
    { question: "'Here you are.' dùng để làm gì?", options: ["Đưa đồ vật cho ai đó", "Hỏi giá tiền", "Từ chối", "Chào hỏi"], correctIndex: 0, explanation: "Câu này dùng khi đưa đồ vật cho người khác." },
    { question: "Đóng vai tình huống mua sắm giúp ích điều gì?", options: ["Không có ích gì", "Luyện phản xạ giao tiếp thực tế", "Làm mất thời gian", "Không liên quan đến tiếng Anh"], correctIndex: 1, explanation: "Đóng vai giúp luyện phản xạ giao tiếp trong tình huống thực tế." },
  ]),
  "tieng-anh:3:luyen-tap-simple-role-play-at-school": practiceContent("Luyện tập", "Simple Role-play: At School", "Hãy nhớ lại hội thoại: Good morning, class! Open your books, please.", [
    { question: "'Good morning, class!' do ai nói?", options: ["Học sinh", "Giáo viên", "Phụ huynh", "Bảo vệ"], correctIndex: 1, explanation: "Câu này thường do giáo viên nói khi vào lớp." },
    { question: "'Open your books, please.' nghĩa là gì?", options: ["Đóng sách lại", "Mở sách ra", "Cất sách đi", "Đọc to sách"], correctIndex: 1, explanation: "Câu này nghĩa là 'Mở sách ra'." },
    { question: "Khi giáo viên chào, học sinh nên đáp lại như thế nào?", options: ["Im lặng", "Chào lại lịch sự", "Bỏ đi", "Nói chuyện riêng"], correctIndex: 1, explanation: "Học sinh nên chào lại lịch sự khi giáo viên chào." },
    { question: "Đóng vai tình huống ở trường giúp ích điều gì?", options: ["Không có ích gì", "Luyện giao tiếp trong môi trường học đường", "Làm mất thời gian", "Không liên quan đến học tập"], correctIndex: 1, explanation: "Giúp luyện giao tiếp tiếng Anh trong môi trường học đường." },
  ]),
  "tieng-anh:3:van-dung-fun-with-rhymes": practiceContent("Vận dụng", "Fun with Rhymes", "Hãy nhớ lại vần điệu 'Rain, rain, go away'.", [
    { question: "'Rain, rain, go away!' nghĩa là gì?", options: ["Mưa ơi, đến đi!", "Mưa ơi, đi đi!", "Trời nắng quá!", "Trời lạnh quá!"], correctIndex: 1, explanation: "Câu này nghĩa là 'Mưa ơi, đi đi!' (mong mưa tạnh)." },
    { question: "'Go away' nghĩa là gì?", options: ["Đến đây", "Đi đi/biến đi", "Ở lại", "Ngủ đi"], correctIndex: 1, explanation: "'Go away' nghĩa là 'Đi đi/biến đi'." },
    { question: "Vần điệu (rhyme) giúp ích điều gì cho việc học?", options: ["Không có ích gì", "Ghi nhớ từ vựng dễ dàng, vui nhộn", "Làm khó hiểu hơn", "Không liên quan đến học"], correctIndex: 1, explanation: "Vần điệu giúp ghi nhớ từ vựng dễ dàng và vui nhộn hơn." },
    { question: "Đặc điểm của một bài vần điệu (rhyme) là gì?", options: ["Các từ cuối câu có âm giống nhau", "Không có quy luật nào", "Luôn buồn bã", "Luôn rất dài"], correctIndex: 0, explanation: "Vần điệu có các từ cuối câu vần với nhau." },
  ]),
  "tieng-anh:3:tro-choi-on-tap-spelling-practice": practiceContent("Trò chơi ôn tập", "Spelling Practice", "Hãy nhớ lại cách đánh vần từng chữ cái để ghi nhớ chính tả.", [
    { question: "Đánh vần từ 'CAT' theo từng chữ cái là gì?", options: ["C-A-T", "K-A-T", "C-A-D", "C-E-T"], correctIndex: 0, explanation: "'CAT' được đánh vần là C-A-T." },
    { question: "Luyện đánh vần giúp ích điều gì?", options: ["Không có ích gì", "Ghi nhớ chính xác cách viết từ", "Làm quên từ nhanh hơn", "Không liên quan đến viết"], correctIndex: 1, explanation: "Luyện đánh vần giúp ghi nhớ chính xác cách viết từ." },
    { question: "Cách nào giúp ghi nhớ chính tả một từ mới?", options: ["Viết một lần rồi quên", "Viết đi viết lại và đọc to", "Không cần viết", "Chỉ cần nhìn qua"], correctIndex: 1, explanation: "Viết đi viết lại và đọc to giúp ghi nhớ tốt hơn." },
    { question: "Thi đánh vần (spelling bee) là hoạt động phổ biến ở đâu?", options: ["Trường học tại nhiều nước nói tiếng Anh", "Không phổ biến ở đâu", "Chỉ ở Việt Nam", "Chỉ trong gia đình"], correctIndex: 0, explanation: "Thi đánh vần là hoạt động phổ biến ở các trường học nói tiếng Anh." },
  ]),
  "tieng-anh:3:thu-thach-nho-final-review-my-english-journey": practiceContent("Thử thách nhỏ", "Final Review: My English Journey", "Hãy ôn lại toàn bộ kiến thức tiếng Anh đã học trong năm.", [
    { question: "'Hello' nghĩa là gì?", options: ["Tạm biệt", "Xin chào", "Cảm ơn", "Xin lỗi"], correctIndex: 1, explanation: "'Hello' nghĩa là 'Xin chào'." },
    { question: "Để giỏi tiếng Anh, em nên làm gì?", options: ["Chỉ học một lần rồi thôi", "Luyện tập đều đặn mỗi ngày", "Không cần luyện tập", "Chỉ học ngữ pháp"], correctIndex: 1, explanation: "Luyện tập đều đặn giúp tiếng Anh ngày càng tiến bộ." },
    { question: "'Thank you' nghĩa là gì?", options: ["Xin lỗi", "Cảm ơn", "Tạm biệt", "Xin chào"], correctIndex: 1, explanation: "'Thank you' nghĩa là 'Cảm ơn'." },
    { question: "Kỹ năng nào quan trọng khi học một ngôn ngữ mới?", options: ["Chỉ cần nghe", "Nghe, nói, đọc, viết", "Chỉ cần viết", "Không cần kỹ năng nào"], correctIndex: 1, explanation: "Cần rèn luyện đầy đủ 4 kỹ năng: nghe, nói, đọc, viết." },
  ]),

};

export function getLessonContent(subject: string, grade: number, lessonSlug: string) {
  return lessonContent[`${subject}:${grade}:${lessonSlug}`];
}
