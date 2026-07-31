const GLYPHS = ["♡", "✿", "✦", "⋆", "⊹"];

export function Divider({ offset = 0 }: { offset?: number }) {
  const glyphs = GLYPHS.slice(offset % GLYPHS.length).concat(
    GLYPHS.slice(0, offset % GLYPHS.length),
  );
  return (
    <div className="flex items-center justify-center gap-4 py-14 text-rose/80">
      {glyphs.map((g, i) => (
        <span
          key={g}
          className="font-hand"
          style={{
            fontSize: `${1 + (i % 3) * 0.35}rem`,
            opacity: 0.5 + (i % 3) * 0.2,
            transform: `rotate(${(i - 2) * 7}deg)`,
          }}
        >
          {g}
        </span>
      ))}
    </div>
  );
}