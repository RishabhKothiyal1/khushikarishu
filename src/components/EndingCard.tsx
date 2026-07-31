import { motion } from "motion/react";
import { useState } from "react";

import ringCatAsset from "@/assets/ring-cat.png.asset.json";

export function EndingCard() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-5 py-24">
      <p className="font-hand mb-3 text-4xl text-rose">khushi ka rishu</p>
      <p className="font-marker mb-8 text-xs uppercase tracking-[0.3em] text-rose">
        one last thing
      </p>
      <div className="relative w-[20rem] max-w-[88vw] sm:w-[26rem]" style={{ perspective: 1400 }}>
        {/* inside */}
        <div className="paper-surface flex min-h-[17rem] flex-col items-center justify-center gap-3 rounded-[3px] px-8 py-12 text-center">
          <motion.span
            className="text-4xl text-berry"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 0 12px color-mix(in oklab, var(--color-blush) 80%, transparent))" }}
          >
            ♥
          </motion.span>
          <p className="font-hand text-3xl leading-snug text-ink">
            keep scrolling,
            <br />
            there&apos;s more below
          </p>
          <span className="font-marker mt-2 text-[0.65rem] uppercase tracking-[0.25em] text-ink-soft">
            ↓
          </span>
        </div>

        {/* front cover */}
        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open the card"
          className="paper-surface absolute inset-0 flex origin-left cursor-pointer flex-col items-center justify-center gap-3 rounded-[3px] px-8 text-center"
          style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
          animate={open ? { rotateY: -160 } : { rotateY: 0 }}
          whileHover={open ? {} : { rotateY: -12 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="washi-tape absolute -top-3 left-1/2 h-7 w-24 -translate-x-1/2 rotate-2 rounded-[2px]" />
          <span className="font-hand text-3xl text-ink">A card for you</span>
          <span className="font-hand text-2xl text-rose">♡</span>
          <span className="font-marker text-[0.65rem] uppercase tracking-[0.25em] text-ink-soft">
            {open ? "" : "tap to open"}
          </span>
        </motion.button>
      </div>

      {open && (
        <div className="mt-20 flex w-full flex-col items-center gap-20">
          {[
            {
              src: "https://mobigram.s3.amazonaws.com/production/suggested_mobigram/cover_image/7735/Every-Universe-GIF-1.gif",
              alt: "Me and you in every universe",
              rotate: -1.5,
            },
            {
              src: "https://mobigram.s3.amazonaws.com/production/suggested_mobigram/cover_image/7725/Worm-Girlfriends-Day-GIF-3.gif",
              alt: "I would still love you if you were a worm",
              rotate: 1.5,
            },
          ].map((g) => (
            <motion.figure
              key={g.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="paper-surface relative w-full max-w-md rounded-[4px] p-3"
              style={{ rotate: `${g.rotate}deg` }}
            >
              <span className="washi-tape absolute -top-3 left-1/2 h-7 w-24 -translate-x-1/2 -rotate-2 rounded-[2px]" />
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full rounded-[3px] object-contain"
              />
            </motion.figure>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="font-hand text-4xl leading-tight text-ink sm:text-6xl">
              Happy Girlfriend&apos;s Day
              <br />
              Khushi ❤️
            </h2>
            <motion.img
              src={ringCatAsset.url}
              alt="A cat offering a heart-shaped ring box"
              className="mt-6 h-40 w-auto object-contain sm:h-52"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="font-serif-body mt-6 text-lg italic text-ink-soft">Love,</p>
            <p className="font-hand text-3xl text-berry">Rishu</p>
            <p className="font-serif-body mt-16 text-sm italic text-ink-soft/80">
              made by hand, page by page, for you
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
}