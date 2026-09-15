"use client";

import { FormEvent, useState } from "react";
import { IconCheck } from "@/components/icons";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          honeypot: data.get("company"),
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Có lỗi xảy ra, vui lòng thử lại.");
        setStatus("error");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setError("Không thể kết nối tới máy chủ. Vui lòng thử lại.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="clay bg-card p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success text-white">
          <IconCheck className="h-7 w-7" />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold">Đã gửi thành công!</h3>
        <p className="mt-2 text-muted-foreground">Cảm ơn bạn đã liên hệ, chúng tôi sẽ phản hồi sớm nhất có thể.</p>
        <button
          onClick={() => setStatus("idle")}
          className="clay-btn mt-5 cursor-pointer rounded-full bg-muted px-5 py-2.5 font-display font-semibold"
        >
          Gửi tin nhắn khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="clay bg-card p-6 sm:p-8 space-y-5">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div>
        <label htmlFor="name" className="font-display font-semibold text-sm">
          Họ và tên
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          className="clay-sm mt-1.5 w-full border-3 border-border bg-background px-4 py-3 focus:border-primary outline-none"
          placeholder="Nguyễn Văn A"
        />
      </div>
      <div>
        <label htmlFor="email" className="font-display font-semibold text-sm">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={150}
          className="clay-sm mt-1.5 w-full border-3 border-border bg-background px-4 py-3 focus:border-primary outline-none"
          placeholder="ban@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="font-display font-semibold text-sm">
          Nội dung
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={3000}
          rows={5}
          className="clay-sm mt-1.5 w-full border-3 border-border bg-background px-4 py-3 focus:border-primary outline-none resize-none"
          placeholder="Bạn cần hỗ trợ điều gì?"
        />
      </div>
      {error && <p className="text-sm font-semibold text-destructive">{error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="clay-btn cursor-pointer w-full rounded-full bg-primary px-6 py-3 font-display font-semibold text-primary-foreground disabled:opacity-60"
      >
        {status === "sending" ? "Đang gửi..." : "Gửi tin nhắn"}
      </button>
    </form>
  );
}
