import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "accent" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
  outline: "bg-card text-foreground border-foreground/15",
  ghost: "bg-transparent text-foreground shadow-none border-transparent",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  icon,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`clay-btn cursor-pointer inline-flex items-center justify-center font-display font-semibold ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  icon,
}: CommonProps & { href: string }) {
  return (
    <Link
      href={href}
      className={`clay-btn cursor-pointer inline-flex items-center justify-center font-display font-semibold ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
      {icon}
    </Link>
  );
}
