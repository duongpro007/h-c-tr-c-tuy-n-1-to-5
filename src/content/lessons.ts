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

};

export function getLessonContent(subject: string, grade: number, lessonSlug: string) {
  return lessonContent[`${subject}:${grade}:${lessonSlug}`];
}
