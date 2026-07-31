type P = { className?: string };
const base = "stroke-berry fill-none";

export function PinDoodle({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} strokeWidth="1.4">
      <path className={base} d="M12 22s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" strokeLinejoin="round" />
      <circle className={base} cx="12" cy="11" r="2.4" />
    </svg>
  );
}

export function HeartDoodle({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} strokeWidth="1.4">
      <path
        className={base}
        d="M12 20s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MomoDoodle({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} strokeWidth="1.4">
      <path className={base} d="M4 17c0-5 3.6-9 8-9s8 4 8 9Z" strokeLinejoin="round" />
      <path className={base} d="M7.4 13.2c1-1.6 2-1.6 3 0m2.2 0c1-1.6 2-1.6 3 0" strokeLinecap="round" />
    </svg>
  );
}

export function BurgerDoodle({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} strokeWidth="1.4">
      <path className={base} d="M4 9.5C4 6.9 7.6 5 12 5s8 1.9 8 4.5Z" strokeLinejoin="round" />
      <path className={base} d="M4 12.4h16M4.6 15.4h14.8" strokeLinecap="round" />
      <path className={base} d="M4.5 17.6h15c0 1.4-1.2 2.4-2.6 2.4H7.1c-1.4 0-2.6-1-2.6-2.4Z" strokeLinejoin="round" />
    </svg>
  );
}

export function WaveDoodle({ className = "" }: P) {
  return (
    <svg viewBox="0 0 60 24" className={`h-6 w-16 ${className}`} strokeWidth="1.6" strokeLinecap="round">
      {([
        [4, 6],
        [10, 12],
        [16, 18],
        [22, 9],
        [28, 20],
        [34, 8],
        [40, 14],
        [46, 6],
        [52, 10],
      ] as const).map(([x, h]) => (
        <path key={x} className={base} d={`M${x} ${12 - h / 2}V${12 + h / 2}`} />
      ))}
    </svg>
  );
}

export function MoonDoodle({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} strokeWidth="1.4">
      <path className={base} d="M19 14.5A8 8 0 0 1 9.2 4.8a8 8 0 1 0 9.8 9.7Z" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneDoodle({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} strokeWidth="1.4">
      <rect className={base} x="6" y="2.8" width="12" height="18.4" rx="2.4" />
      <path className={base} d="M10.4 5.4h3.2" strokeLinecap="round" />
      <circle className={base} cx="12" cy="18.2" r="1.1" />
    </svg>
  );
}

export function HomeDoodle({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} strokeWidth="1.4">
      <path className={base} d="M3.6 11 12 4.2 20.4 11" strokeLinejoin="round" strokeLinecap="round" />
      <path className={base} d="M5.8 10.2V20h12.4v-9.8" strokeLinejoin="round" />
      <path className={base} d="M10.2 20v-5h3.6v5" strokeLinejoin="round" />
    </svg>
  );
}

export function StarDoodle({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} strokeWidth="1.4">
      <path className={base} d="M12 3.5c.6 4.6 3.9 7.9 8.5 8.5-4.6.6-7.9 3.9-8.5 8.5-.6-4.6-3.9-7.9-8.5-8.5 4.6-.6 7.9-3.9 8.5-8.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function FlowerDoodle({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} strokeWidth="1.4">
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} className={base} cx="12" cy="7.4" rx="2.5" ry="4" transform={`rotate(${a} 12 12)`} />
      ))}
      <circle className={base} cx="12" cy="12" r="1.6" />
    </svg>
  );
}