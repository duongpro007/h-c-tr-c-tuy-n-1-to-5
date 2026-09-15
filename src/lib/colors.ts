export type AccentColor = "blue" | "amber" | "pink" | "green" | "purple" | "cyan";

export const colorClasses: Record<
  AccentColor,
  { bg: string; bgSoft: string; text: string; border: string; ring: string; fromTo: string }
> = {
  blue: {
    bg: "bg-[var(--color-blue)]",
    bgSoft: "bg-[var(--color-blue-soft)]",
    text: "text-[var(--color-blue)]",
    border: "border-[var(--color-blue)]",
    ring: "ring-[var(--color-blue)]",
    fromTo: "from-[var(--color-blue)] to-[var(--color-purple)]",
  },
  amber: {
    bg: "bg-[var(--color-amber)]",
    bgSoft: "bg-[var(--color-amber-soft)]",
    text: "text-[var(--color-amber)]",
    border: "border-[var(--color-amber)]",
    ring: "ring-[var(--color-amber)]",
    fromTo: "from-[var(--color-amber)] to-[var(--color-pink)]",
  },
  pink: {
    bg: "bg-[var(--color-pink)]",
    bgSoft: "bg-[var(--color-pink-soft)]",
    text: "text-[var(--color-pink)]",
    border: "border-[var(--color-pink)]",
    ring: "ring-[var(--color-pink)]",
    fromTo: "from-[var(--color-pink)] to-[var(--color-amber)]",
  },
  green: {
    bg: "bg-[var(--color-green)]",
    bgSoft: "bg-[var(--color-green-soft)]",
    text: "text-[var(--color-green)]",
    border: "border-[var(--color-green)]",
    ring: "ring-[var(--color-green)]",
    fromTo: "from-[var(--color-green)] to-[var(--color-cyan)]",
  },
  purple: {
    bg: "bg-[var(--color-purple)]",
    bgSoft: "bg-[var(--color-purple-soft)]",
    text: "text-[var(--color-purple)]",
    border: "border-[var(--color-purple)]",
    ring: "ring-[var(--color-purple)]",
    fromTo: "from-[var(--color-purple)] to-[var(--color-pink)]",
  },
  cyan: {
    bg: "bg-[var(--color-cyan)]",
    bgSoft: "bg-[var(--color-cyan-soft)]",
    text: "text-[var(--color-cyan)]",
    border: "border-[var(--color-cyan)]",
    ring: "ring-[var(--color-cyan)]",
    fromTo: "from-[var(--color-cyan)] to-[var(--color-blue)]",
  },
};
