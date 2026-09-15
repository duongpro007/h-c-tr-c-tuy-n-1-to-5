// Cấu hình PM2 để chạy ứng dụng Next.js (standalone build) trên VPS Hostinger.
// Chạy `npm run build` trước (script postbuild sẽ tự sao chép public/ và
// .next/static/ vào .next/standalone/), sau đó `pm2 start ecosystem.config.js`.
// Xem hướng dẫn triển khai chi tiết trong README.md.
const path = require("path");

module.exports = {
  apps: [
    {
      name: "hoc-ma-choi",
      script: "server.js",
      cwd: path.join(__dirname, ".next", "standalone"),
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3000,
      },
      autorestart: true,
      max_memory_restart: "300M",
      watch: false,
    },
  ],
};
