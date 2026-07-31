import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Polaroid({
  caption,
  rotate = -3,
  children,
  className = "",
}: {
  caption: string;
  rotate?: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.figure
      className={`relative w-[15rem] paper-surface p-3 pb-10 sm:w-[17rem] ${className}`}
      initial={{ opacity: 0, y: -40, rotate: rotate - 8 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 90, damping: 12 }}
      whileHover={{ rotate: 0, scale: 1.03, y: -6 }}
    >
      <span className="washi-tape absolute -top-4 left-1/2 h-7 w-24 -translate-x-1/2 -rotate-3 rounded-[2px]" />
      <div className="flex aspect-square items-center justify-center overflow-hidden bg-paper-deep">
        {children}
      </div>
      <figcaption className="font-hand absolute inset-x-0 bottom-2 text-center text-xl text-ink-soft">
        {caption}
      </figcaption>
    </motion.figure>
  );
}