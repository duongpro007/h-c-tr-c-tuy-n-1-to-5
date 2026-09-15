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

### Thêm / chỉnh sửa nội dung giáo trình

1. **Thêm bài học mới vào một chương đã có**: mở `src/content/curriculum.ts`, tìm biến chương
   tương ứng (ví dụ `toan1` cho Toán lớp 1) và thêm một dòng `L("Tên bài học", "Mô tả ngắn")` vào
   mảng lessons.
2. **Soạn nội dung chi tiết cho một bài học** (để bài học chuyển từ "sắp ra mắt" sang có thể học
   được): thêm `ready: true` vào lesson trong `curriculum.ts`, sau đó thêm nội dung đầy đủ (mục
   tiêu, các phần bài giảng, câu hỏi kiểm tra) vào `src/content/lessons.ts` theo khoá
   `"<mon>:<lop>:<slug-bai-hoc>"`.
3. **Gắn trò chơi vào bài học**: thêm `gameSlug: "do-vui-toan-hoc"` (hoặc trò chơi khác) khi tạo
   lesson trong `curriculum.ts`.

Toàn bộ trang giáo trình (247+ trang) được tạo tĩnh (Static Generation) tại thời điểm build, nên
sau khi chỉnh nội dung cần chạy lại `npm run build` để cập nhật.

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
