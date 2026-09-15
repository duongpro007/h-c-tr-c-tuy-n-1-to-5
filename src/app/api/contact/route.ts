import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
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

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Học Mà Chơi - Liên hệ" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[Liên hệ website] Tin nhắn từ ${name}`,
      text: `Họ tên: ${name}\nEmail: ${email}\n\nNội dung:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Gửi email thất bại:", err);
    return NextResponse.json({ error: "Không thể gửi tin nhắn lúc này. Vui lòng thử lại sau." }, { status: 500 });
  }
}
