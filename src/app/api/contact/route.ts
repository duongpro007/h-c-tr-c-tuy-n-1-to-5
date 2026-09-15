import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { isRateLimited } from "@/lib/rateLimit";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Bạn đã gửi quá nhiều lần. Vui lòng thử lại sau ít phút." },
      { status: 429 }
    );
  }

  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Dữ liệu không hợp lệ." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field, bots often do.
  if (body.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Vui lòng điền đầy đủ thông tin." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Địa chỉ email không hợp lệ." }, { status: 400 });
  }
  if (name.length > 100 || email.length > 150 || message.length > 3000) {
    return NextResponse.json({ error: "Nội dung quá dài." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    console.warn("[contact] SMTP chưa được cấu hình — xem README để thiết lập biến môi trường.");
    return NextResponse.json(
      { error: "Hệ thống gửi email chưa được cấu hình. Vui lòng thử lại sau." },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    // 1) Gửi tin nhắn của người dùng đến hộp thư quản trị.
    await transporter.sendMail({
      from: `"Học Mà Chơi - Liên hệ" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[Liên hệ website] Tin nhắn từ ${name}`,
      text: `Họ tên: ${name}\nEmail: ${email}\nIP: ${ip}\n\nNội dung:\n${message}`,
    });
  } catch (err) {
    console.error("[contact] Gửi email đến quản trị thất bại:", err);
    return NextResponse.json({ error: "Không thể gửi tin nhắn lúc này. Vui lòng thử lại sau." }, { status: 500 });
  }

  try {
    // 2) Gửi email tự động xác nhận cho người dùng (không chặn phản hồi thành công nếu bước này lỗi).
    await transporter.sendMail({
      from: `"Học Mà Chơi, Chơi Mà Học" <${SMTP_USER}>`,
      to: email,
      subject: "Đã nhận được tin nhắn của bạn — Học Mà Chơi, Chơi Mà Học",
      text: `Chào ${name},\n\nCảm ơn bạn đã liên hệ với Học Mà Chơi, Chơi Mà Học. Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi sớm nhất có thể.\n\nNội dung bạn đã gửi:\n${message}\n\nTrân trọng,\nĐội ngũ Học Mà Chơi, Chơi Mà Học`,
      html: `<p>Chào ${escapeHtml(name)},</p><p>Cảm ơn bạn đã liên hệ với <strong>Học Mà Chơi, Chơi Mà Học</strong>. Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi sớm nhất có thể.</p><p><strong>Nội dung bạn đã gửi:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p><p>Trân trọng,<br/>Đội ngũ Học Mà Chơi, Chơi Mà Học</p>`,
    });
  } catch (err) {
    console.error("[contact] Gửi email xác nhận cho người dùng thất bại (bỏ qua, không ảnh hưởng người dùng):", err);
  }

  return NextResponse.json({ ok: true });
}
