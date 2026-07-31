import { motion } from "motion/react";
import type { ReactNode } from "react";

export function ScrapbookPage({
  kicker,
  title,
  icon,
  children,
  aside,
  rotate = -0.8,
  reverse = false,
}: {
  kicker: string;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  aside?: ReactNode;
  rotate?: number;
  reverse?: boolean;
}) {
  return (
    <motion.section
      className="relative mx-auto w-full max-w-4xl px-5"
      initial={{ opacity: 0, y: 48, rotate: rotate - 1.5, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, rotate, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="paper-surface notebook-lines relative rounded-[3px] px-6 py-10 sm:px-12 sm:py-14">
        <span className="washi-tape absolute -left-3 -top-4 h-8 w-28 -rotate-6 rounded-[2px]" />
        <span className="washi-tape absolute -bottom-4 -right-3 h-8 w-24 rotate-6 rounded-[2px]" />
        <div
          className={`flex flex-col gap-8 ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} sm:items-start sm:gap-12`}
        >
          <div className="flex-1">
            <div className="mb-3 flex items-center gap-2">
              {icon}
              <span className="font-marker text-[0.7rem] uppercase tracking-[0.25em] text-rose">
                {kicker}
              </span>
            </div>
            <h2 className="font-hand text-4xl leading-tight text-ink sm:text-5xl">{title}</h2>
            <div className="font-serif-body mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
              {children}
            </div>
          </div>
          {aside ? <div className="flex shrink-0 justify-center sm:pt-6">{aside}</div> : null}
        </div>
      </div>
    </motion.section>
  );
}