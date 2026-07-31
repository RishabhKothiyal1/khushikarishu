import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

import catCoupleAsset from "@/assets/pinterest-cat-couple.png.asset.json";
import helloKittyAsset from "@/assets/hello-kitty-pixel-transparent.png.asset.json";
import { Sticker } from "@/components/Sticker";

export function Envelope({ onOpen }: { onOpen: () => void }) {
  const [opened, setOpened] = useState(false);

  const open = () => {
    if (opened) return;
    setOpened(true);
    window.setTimeout(onOpen, 1500);
  };

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden bg-paper px-6"
      initial={{ opacity: 1 }}
      animate={{ opacity: opened ? 0 : 1 }}
      transition={{ duration: 0.7, delay: opened ? 0.9 : 0 }}
    >
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative flex flex-col items-center">
        {/* greeting sticker */}
        <Sticker
          className="absolute -left-24 -top-4 h-24 w-24 sm:-left-32 sm:h-28 sm:w-28"
          rotate={-12}
          float={8}
        >
          <img
            src={catCoupleAsset.url}
            alt="Two cute cats with flowers and a heart"
            className="h-full w-full object-contain"
          />
        </Sticker>

        {/* cover photo sticker */}
        <Sticker
          className="absolute -right-20 top-20 h-20 w-20 sm:-right-28 sm:h-24 sm:w-24"
          rotate={10}
          float={10}
          delay={0.2}
        >
          <img
            src={helloKittyAsset.url}
            alt="Pixel Hello Kitty in pink"
            className="h-full w-full object-contain"
          />
        </Sticker>

        <motion.button
          type="button"
          onClick={open}
          aria-label="Open the letter"
          className="relative h-[15rem] w-[22rem] max-w-[88vw] cursor-pointer"
          initial={{ y: 30, opacity: 0, rotate: -2 }}
          animate={{ y: 0, opacity: 1, rotate: -1.5 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02, rotate: 0 }}
        >
          {/* letter sliding out */}
          <motion.div
            className="paper-surface absolute inset-x-6 bottom-6 top-8 flex flex-col items-center justify-center gap-2 rounded-sm px-6"
            animate={opened ? { y: -170, rotate: 1, opacity: 1 } : { y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-hand text-2xl text-rose">a little something…</p>
            <p className="font-serif-body text-sm italic text-ink-soft">written slowly, meant deeply</p>
          </motion.div>

          {/* envelope body */}
          <div className="absolute inset-0 rounded-md bg-paper-warm shadow-[var(--shadow-lift)]" />
          <div className="absolute inset-0 overflow-hidden rounded-md">
            <div
              className="absolute inset-0 opacity-[0.18] mix-blend-multiply"
              style={{ backgroundImage: 'url("/noise.jpeg")', backgroundSize: "260px" }}
            />
            <div className="absolute -bottom-24 -left-10 h-48 w-64 rotate-[18deg] bg-paper-deep/70" />
            <div className="absolute -bottom-24 -right-10 h-48 w-64 -rotate-[18deg] bg-paper-deep/70" />
          </div>

          {/* flap */}
          <motion.div
            className="absolute inset-x-0 top-0 origin-top"
            style={{ transformStyle: "preserve-3d", perspective: 900 }}
            animate={opened ? { rotateX: -170 } : { rotateX: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className="h-[7.5rem] w-full bg-paper-deep"
              style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
            />
          </motion.div>

          {/* wax seal */}
          <motion.div
            className="absolute left-1/2 top-[6.2rem] z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-berry text-3xl text-paper-warm shadow-[inset_0_-3px_8px_rgba(0,0,0,0.25),0_8px_16px_rgba(90,61,67,0.3)]"
            animate={opened ? { scale: 0.6, opacity: 0, y: 10 } : { scale: [1, 1.05, 1] }}
            transition={opened ? { duration: 0.4 } : { duration: 3.5, repeat: Infinity }}
          >
            ♥
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {!opened && (
            <motion.div
              className="mt-10 flex flex-col items-center gap-1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h1 className="font-hand text-4xl text-ink sm:text-5xl">For My Khushi ❤️</h1>
              <motion.p
                className="font-marker mt-2 text-sm tracking-wide text-ink-soft"
                animate={{ opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 2.6, repeat: Infinity }}
              >
                Tap to Open
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}