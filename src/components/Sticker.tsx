import { motion } from "motion/react";
import type { ReactNode } from "react";

type StickerProps = {
  src?: string;
  alt?: string;
  children?: ReactNode;
  className?: string;
  rotate?: number;
  delay?: number;
  float?: number;
};

export function Sticker({
  src,
  alt = "",
  children,
  className = "",
  rotate = -6,
  delay = 0,
  float = 10,
}: StickerProps) {
  return (
    <motion.div
      aria-hidden={!alt}
      className={`pointer-events-none select-none drop-shadow-[0_10px_18px_rgba(90,61,67,0.18)] ${className}`}
      initial={{ opacity: 0, scale: 0.8, rotate }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -float, 0], rotate: [rotate, rotate + 2.5, rotate] }}
        transition={{ duration: 7 + float / 3, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {src ? <img src={src} alt={alt} className="h-full w-full object-contain" /> : children}
      </motion.div>
    </motion.div>
  );
}