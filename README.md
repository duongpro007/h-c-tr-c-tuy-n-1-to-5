# Học Mà Chơi, Chơi Mà Học

Nền tảng học trực tuyến dành cho học sinh Tiểu học Việt Nam (lớp 1 - lớp 5), kết hợp giáo trình
bám sát chương trình GDPT 2018 với trò chơi tương tác vui nhộn. Xây dựng bằng **Next.js
(Node.js)**, không cần tài khoản đăng nhập, không thu thập dữ liệu cá nhân của trẻ em.

## Công nghệ sử dụng

- **Next.js 16** (App Router, React Server Components) + TypeScript
- **Tailwind CSS v4** — hệ thống thiết kế Claymorphism (bo tròn, màu sắc tươi vui)
- **Nodemailer** — gửi email từ form Liên hệ qua SMTP
- Tiến độ học tập & điểm trò chơi lưu trên `localStorage` (không cần tài khoản/CSDL)

## Bắt đầu phát triển

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

Sao chép `.env.example` thành `.env.local` và điền thông tin SMTP nếu muốn thử form Liên hệ ở môi
trường local:

```bash
cp .env.example .env.local
```

## Cấu trúc thư mục chính

```
src/
  app/                     Các route (App Router) — trang chủ, chương trình học, trò chơi...
  components/              Component UI dùng chung (Header, Footer, thẻ môn học, trò chơi...)
  content/
    subjects.ts            Danh sách môn học, khối lớp, trò chơi
    curriculum.ts           Toàn bộ cấu trúc giáo trình: chương, bài học theo từng lớp/môn
    lessons.ts              Nội dung chi tiết (mục tiêu, bài giảng, câu hỏi) của các bài học mẫu
  lib/                      Types, helper màu sắc, tiến độ học tập (localStorage)
```

### Cấu trúc "30 bài / môn / lớp"

Mỗi môn học ở mỗi khối lớp có đúng **30 bài**: 15 chủ đề lõi (`topic(...)`) và mỗi chủ đề tự động
sinh thêm 1 bài thực hành/luyện tập đi kèm ngay sau (luân phiên 5 kiểu: Thực hành, Luyện tập, Vận
dụng, Trò chơi ôn tập, Thử thách nhỏ) — nên bạn **chỉ cần khai báo 15 chủ đề lõi**, phần còn lại
được `unit()`/`grade30()` trong `curriculum.ts` tự ghép.

### Thêm / chỉnh sửa nội dung giáo trình

1. **Thêm/sửa một chủ đề bài học**: mở `src/content/curriculum.ts`, tìm mảng topics tương ứng
   (ví dụ `toan1Topics` cho Toán lớp 1 — đặt tên theo mẫu `<mon><lop>Topics`) và thêm/sửa một dòng
   `topic("Tên bài học", "Mô tả ngắn")`. Mỗi mảng nên giữ đúng 15 phần tử để tổng vẫn là 30 bài;
   nếu thêm/bớt chủ đề, chương sẽ tự phân bổ lại theo `grade30()` (chia đều 5 chủ đề/chương).
2. **Soạn nội dung chi tiết cho một bài học lõi** (để bài học chuyển từ "sắp ra mắt" sang có thể
   học được): thêm `{ ready: true }` làm tham số thứ 3 của `topic(...)`, sau đó thêm nội dung đầy
   đủ (mục tiêu, các phần bài giảng, câu hỏi kiểm tra) vào `src/content/lessons.ts` theo khoá
   `"<mon>:<lop>:<slug-bai-hoc>"`. Các bài "Thực hành/Luyện tập..." tự sinh không cần nội dung
   riêng trong `lessons.ts`.
3. **Gắn trò chơi vào một bài học lõi**: thêm `{ gameSlug: "do-vui-toan-hoc" }` (hoặc trò chơi
   khác) vào tham số thứ 3 của `topic(...)`.
4. **Đổi tên/mô tả 3 chương của một môn**: sửa hằng số `..._CHAPTERS` tương ứng (ví dụ
   `TOAN_CHAPTERS`) — dùng chung cho cả 5 khối lớp của môn đó.

Toàn bộ trang giáo trình (~950 trang, gồm 900 bài học) được tạo tĩnh (Static Generation) tại thời
điểm build, nên sau khi chỉnh nội dung cần chạy lại `npm run build` để cập nhật.

## Kiểm tra chất lượng trước khi triển khai

```bash
npm run lint
npm run build
```

## Đưa mã nguồn lên GitHub

```bash
git init
git add .
git commit -m "Khởi tạo nền tảng Học Mà Chơi, Chơi Mà Học"
git branch -M main
git remote add origin https://github.com/<ten-tai-khoan>/<ten-repo>.git
git push -u origin main
```

> Thay `<ten-tai-khoan>/<ten-repo>` bằng repository GitHub bạn đã tạo. Nếu chưa có repo, tạo mới
> tại https://github.com/new (để trống, không khởi tạo README/gitignore để tránh xung đột).

## Triển khai lên Hostinger VPS

Yêu cầu: gói **VPS** hoặc **Cloud Hosting** của Hostinger (hỗ trợ chạy Node.js liên tục qua SSH).
Gói Shared/Business hosting thông thường **không** chạy được server Node.js thường trực.

### 1. Chuẩn bị VPS (một lần)

SSH vào VPS rồi cài Node.js 20, PM2 và Nginx:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt-get install -y nodejs nginx
sudo npm install -g pm2
```

### 2. Lấy mã nguồn về VPS

```bash
git clone https://github.com/<ten-tai-khoan>/<ten-repo>.git /var/www/hoc-ma-choi
cd /var/www/hoc-ma-choi
cp .env.example .env.local   # rồi điền SMTP_*, CONTACT_TO_EMAIL, NEXT_PUBLIC_SITE_URL thật
```

### 3. Build và chạy bằng PM2

```bash
npm ci
npm run build      # tự động sao chép public/ + .next/static vào .next/standalone
pm2 start ecosystem.config.js
pm2 save
pm2 startup        # làm theo hướng dẫn để PM2 tự khởi động cùng VPS
```

Ứng dụng chạy ở cổng nội bộ `3000` (đổi bằng biến môi trường `PORT` nếu cần).

### 4. Cấu hình tên miền + Nginx + SSL

1. Trỏ bản ghi DNS **A** của `hocmachoi.vn` (và `www`) về địa chỉ IP của VPS Hostinger (thực hiện
   trong hPanel > Domains > DNS Zone Editor).
2. Sao chép cấu hình mẫu tại [`deploy/nginx.conf.example`](deploy/nginx.conf.example) vào
   `/etc/nginx/sites-available/hocmachoi.vn`, sửa lại tên miền nếu khác, rồi:

   ```bash
   sudo ln -s /etc/nginx/sites-available/hocmachoi.vn /etc/nginx/sites-enabled/
   sudo nginx -t && sudo systemctl reload nginx
   ```

3. Cấp SSL miễn phí bằng Let's Encrypt:

   ```bash
   sudo apt-get install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d hocmachoi.vn -d www.hocmachoi.vn
   ```

### 5. Cập nhật mỗi khi có thay đổi mới

```bash
cd /var/www/hoc-ma-choi
git pull
npm ci
npm run build
pm2 reload ecosystem.config.js
```

### 6. (Tuỳ chọn) Tự động triển khai bằng GitHub Actions

File [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) đã được chuẩn bị sẵn để tự
động build và đồng bộ lên VPS mỗi khi push vào nhánh `main`. Để bật tính năng này, vào
**Settings → Secrets and variables → Actions** trên GitHub repo và thêm 4 secrets:

| Secret         | Giá trị                                              |
| -------------- | ----------------------------------------------------- |
| `VPS_HOST`     | Địa chỉ IP hoặc domain của VPS                        |
| `VPS_USER`     | Tên user SSH (ví dụ `root` hoặc user triển khai)       |
| `VPS_SSH_KEY`  | Private key SSH (dạng PEM) có quyền truy cập VPS       |
| `VPS_APP_PATH` | Đường dẫn thư mục ứng dụng trên VPS, ví dụ `/var/www/hoc-ma-choi` |

Không thêm secrets thì workflow tự bỏ qua bước deploy một cách an toàn (chỉ còn lại CI build kiểm
tra ở `ci.yml`).

## Biến môi trường

Xem đầy đủ trong [`.env.example`](.env.example):

- `NEXT_PUBLIC_SITE_URL` — URL công khai của site, dùng cho sitemap/SEO.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` — thông tin SMTP để gửi email từ form Liên hệ.
- `CONTACT_TO_EMAIL` — email nhận tin nhắn liên hệ.
- `PORT` — cổng chạy server Node.js (mặc định 3000).

Nếu chưa cấu hình SMTP, form Liên hệ vẫn hoạt động bình thường nhưng sẽ báo lỗi thân thiện thay vì
gửi được email — không làm sập ứng dụng.

**Không commit `SMTP_PASS` thật vào Git** — `.env.local` đã được `.gitignore` loại trừ sẵn, chỉ
điền giá trị thật vào đó trên máy của bạn hoặc trực tiếp trên VPS, không đưa vào `.env.example`.

## Cấu hình hệ thống gửi email (SMTP)

Hệ thống gửi email của form Liên hệ (`src/app/api/contact/route.ts`) đã có sẵn đầy đủ:

- Gửi tin nhắn của người dùng đến `CONTACT_TO_EMAIL` (hộp thư quản trị).
- Tự động gửi email xác nhận đã nhận được tin nhắn cho chính người gửi.
- Honeypot chống bot, validate dữ liệu đầu vào, giới hạn tối đa **5 lượt gửi / 10 phút / mỗi IP**
  (`src/lib/rateLimit.ts`) để chống spam.
- Nếu chưa cấu hình SMTP, trả lỗi thân thiện thay vì làm sập ứng dụng.

Bạn chỉ cần điền 5 biến `SMTP_*` và `CONTACT_TO_EMAIL` thật vào `.env.local` (local) hoặc file môi
trường trên VPS. Chọn một trong hai cách sau để lấy thông tin SMTP:

### Cách 1 — Gmail (nhanh, phù hợp để chạy thử ngay)

1. Bật xác minh 2 bước cho tài khoản Gmail tại https://myaccount.google.com/security (nếu chưa bật).
2. Vào https://myaccount.google.com/apppasswords, tạo một **App Password** mới (chọn ứng dụng
   "Mail", thiết bị tuỳ chọn) — Google sẽ cho ra một mã 16 ký tự, đây chính là `SMTP_PASS` (**không
   phải** mật khẩu đăng nhập Gmail thông thường).
3. Điền vào `.env.local`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=duongpro007@gmail.com
   SMTP_PASS=<mã app password 16 ký tự>
   CONTACT_TO_EMAIL=duongpro007@gmail.com
   ```

### Cách 2 — Hostinger Email (khuyến nghị khi đã có domain riêng, ví dụ `noreply@hocmachoi.vn`)

1. Trong **hPanel → Emails**, tạo một hộp thư mới thuộc domain của bạn (ví dụ `noreply@hocmachoi.vn`)
   và đặt mật khẩu cho hộp thư đó.
2. Hostinger hiển thị sẵn thông tin SMTP tại trang quản lý email đó, thường là:
   ```
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=587
   SMTP_USER=noreply@hocmachoi.vn
   SMTP_PASS=<mật khẩu hộp thư bạn vừa đặt>
   CONTACT_TO_EMAIL=duongpro007@gmail.com
   ```

### Áp dụng cấu hình

- **Local**: tạo/sửa file `.env.local` ở thư mục gốc dự án với 5 dòng ở trên, rồi chạy lại
  `npm run dev`.
- **Trên VPS**: SSH vào VPS, `nano /var/www/hoc-ma-choi/.env.local`, dán 5 dòng trên (thay giá trị
  thật), lưu lại, rồi `pm2 reload ecosystem.config.js --update-env`.
- Kiểm tra hoạt động: gửi thử một tin nhắn tại trang **Liên hệ** của site — nếu thấy thông báo
  "Đã gửi thành công!" và nhận được cả email ở hộp thư quản trị lẫn email xác nhận ở hộp thư người
  gửi là hệ thống đã hoạt động đúng. Nếu lỗi, xem log: `pm2 logs hoc-ma-choi` (VPS) hoặc terminal
  chạy `npm run dev` (local) để biết nguyên nhân cụ thể (sai mật khẩu, sai host/port, tài khoản
  chặn đăng nhập từ ứng dụng lạ...).
