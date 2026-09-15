import { ReactNode } from "react";
import { AccentColor, colorClasses } from "@/lib/colors";

export function Badge({
  children,
  color = "blue",
  icon,
  className = "",
}: {
  children: ReactNode;
  color?: AccentColor;
  icon?: ReactNode;
  className?: string;
}) {
  const c = colorClasses[color];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold ${c.bgSoft} ${c.text} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="font-display text-sm font-bold uppercase tracking-wide text-accent mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
        {title}
      </h2>
      {description && <p className="mt-3 text-muted-foreground text-lg">{description}</p>}
    </div>
  );
}
