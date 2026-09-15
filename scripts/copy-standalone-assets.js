// Sao chép thư mục public/ và .next/static/ vào .next/standalone/ sau khi build,
// theo đúng khuyến nghị của Next.js để "node .next/standalone/server.js" phục vụ
// được file tĩnh (CSS, JS, hình ảnh) khi chạy production trên VPS.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const standaloneDir = path.join(root, ".next", "standalone");

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (!fs.existsSync(standaloneDir)) {
  console.warn("[postbuild] Không tìm thấy .next/standalone — kiểm tra next.config.ts có output: 'standalone'.");
  process.exit(0);
}

copyDir(path.join(root, "public"), path.join(standaloneDir, "public"));
copyDir(path.join(root, ".next", "static"), path.join(standaloneDir, ".next", "static"));

console.log("[postbuild] Đã sao chép public/ và .next/static/ vào .next/standalone/");
