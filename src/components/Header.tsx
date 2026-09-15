"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { IconMenu, IconClose, IconGamepad } from "@/components/icons";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/chuong-trinh-hoc", label: "Chương trình học" },
  { href: "/tro-choi", label: "Trò chơi" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/lien-he", label: "Liên hệ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-3 border-border bg-background/90 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2 font-display font-extrabold text-xl">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground clay-sm">
            <IconGamepad className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block text-primary">Học Mà Chơi</span>
            <span className="block text-sm text-accent -mt-1">Chơi Mà Học</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Điều hướng chính">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 font-display font-semibold text-foreground/80 hover:bg-muted hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LinkButton href="/chuong-trinh-hoc" size="sm">
            Bắt đầu học
          </LinkButton>
        </div>

        <button
          className="lg:hidden cursor-pointer rounded-xl border-3 border-border bg-card p-2"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="lg:hidden border-t-3 border-border bg-card">
          <Container className="flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-display font-semibold text-foreground/80 hover:bg-muted hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <LinkButton href="/chuong-trinh-hoc" className="mt-2 justify-center">
              Bắt đầu học
            </LinkButton>
          </Container>
        </div>
      )}
    </header>
  );
}
