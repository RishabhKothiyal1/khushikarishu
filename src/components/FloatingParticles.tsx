import { motion } from "motion/react";

const SEEDS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: (i * 37) % 100,
  size: 3 + ((i * 7) % 6),
  delay: (i * 1.3) % 9,
  duration: 16 + ((i * 5) % 14),
  drift: ((i % 5) - 2) * 40,
  petal: i % 3 === 0,
}));

export function FloatingParticles() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {SEEDS.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.left}%`,
            width: s.petal ? s.size * 2.4 : s.size,
            height: s.petal ? s.size * 1.5 : s.size,
            borderRadius: s.petal ? "60% 20% 60% 20%" : "9999px",
            background: s.petal
              ? "color-mix(in oklab, var(--color-blush) 70%, transparent)"
              : "color-mix(in oklab, var(--color-berry) 28%, transparent)",
          }}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{
            y: "-15vh",
            x: [0, s.drift, 0],
            opacity: [0, 0.75, 0.75, 0],
            rotate: s.petal ? [0, 180, 360] : 0,
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}