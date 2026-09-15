export function Mascot({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      role="img"
      aria-label="Cú Thông Thái - linh vật của Học Mà Chơi, Chơi Mà Học"
    >
      <ellipse cx="120" cy="215" rx="55" ry="10" fill="#0f172a" opacity="0.08" />
      {/* wings */}
      <ellipse cx="62" cy="140" rx="20" ry="34" fill="#F59E0B" transform="rotate(-18 62 140)" />
      <ellipse cx="178" cy="140" rx="20" ry="34" fill="#F59E0B" transform="rotate(18 178 140)" />
      {/* body */}
      <ellipse cx="120" cy="135" rx="72" ry="80" fill="#EC4899" />
      <ellipse cx="120" cy="150" rx="50" ry="58" fill="#FEF3C7" />
      {/* feet */}
      <path d="M96 208 92 224M96 208 100 224" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
      <path d="M144 208 140 224M144 208 148 224" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
      {/* graduation cap */}
      <g transform="translate(120 46)">
        <path d="M-46 4 0 -16 46 4 0 24Z" fill="#2563EB" />
        <path d="M-24 12v18c0 8 48 8 48 0V12" fill="none" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" />
        <circle cx="46" cy="4" r="4" fill="#0f172a" />
        <path d="M46 4v22" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* eyes */}
      <circle cx="94" cy="128" r="26" fill="#ffffff" stroke="#0f172a" strokeWidth="4" />
      <circle cx="146" cy="128" r="26" fill="#ffffff" stroke="#0f172a" strokeWidth="4" />
      <circle cx="98" cy="130" r="10" fill="#2563EB" />
      <circle cx="150" cy="130" r="10" fill="#2563EB" />
      <circle cx="101" cy="127" r="3" fill="#ffffff" />
      <circle cx="153" cy="127" r="3" fill="#ffffff" />
      {/* beak */}
      <path d="M112 148 120 162 128 148Z" fill="#F59E0B" />
      {/* cheeks */}
      <circle cx="76" cy="150" r="9" fill="#EC4899" opacity="0.55" />
      <circle cx="164" cy="150" r="9" fill="#EC4899" opacity="0.55" />
      {/* eyebrows */}
      <path d="M78 104q16-12 30 0" fill="none" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
      <path d="M132 104q16-12 30 0" fill="none" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function MascotWave({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <path
        d="M30 5c8 0 12 8 10 14 6 2 9 9 5 15 4 5 1 13-6 14-2 6-10 9-15 5-6 3-13-1-14-8-7-1-10-9-6-15-4-5-1-13 6-14 1-7 9-12 20-11Z"
        fill="#FEF3C7"
      />
    </svg>
  );
}
