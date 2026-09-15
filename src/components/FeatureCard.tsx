import { ReactNode } from "react";
import { AccentColor, colorClasses } from "@/lib/colors";

export function FeatureCard({
  icon,
  title,
  description,
  color = "blue",
}: {
  icon: ReactNode;
  title: string;
  description: string;
  color?: AccentColor;
}) {
  const c = colorClasses[color];
  return (
    <div className="clay clay-float p-6">
      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white ${c.bg}`}>
        {icon}
      </span>
      <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export function StatBadge({ value, label, color = "blue" }: { value: string; label: string; color?: AccentColor }) {
  const c = colorClasses[color];
  return (
    <div className="clay-sm bg-card px-5 py-4 text-center">
      <p className={`font-display text-3xl font-extrabold ${c.text}`}>{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
