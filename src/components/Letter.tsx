import { motion } from "motion/react";

const PARAGRAPHS = [
  "Khushi, I don't really know how to start a letter like this, so I'll just start the way we always do: in the middle of a conversation, like no time has passed at all.",
  "You came into my life quietly. No big announcement, no grand entrance. Just a first meeting at DLF Mall, a nervous laugh, and somehow the whole day feeling lighter than it had in months.",
  "Since then it's been burgers we swore we wouldn't finish and finished anyway, momos we shared, cold drinks and ice cream I got to have because of your sore throat, voice notes I replay when the day is too loud, and video calls that stretched past midnight because neither of us wanted to hang up first.",
  "None of it was dramatic. That's the part I love. You quietly became a part of me: the ordinary, everyday, unglamorous, permanent kind of part.",
  "So this isn't a grand gesture. It's just a page in a book I'm still writing about you. Happy Girlfriend's Day, my Khushi.",
];

export function Letter() {
  return (
    <section className="relative mx-auto w-full max-w-3xl px-5 py-8">
      <motion.article
        className="paper-surface relative rounded-[3px] px-7 py-12 sm:px-16 sm:py-16"
        initial={{ opacity: 0, y: 40, rotate: 0.8 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0.4 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
      >
        <div className="pointer-events-none absolute inset-3 rounded-[2px] border border-blush/40" />
        <h2 className="font-hand mb-2 text-center text-5xl text-ink">My Khushi,</h2>
        <div className="mb-8 flex justify-center text-rose/70">
          <span className="font-hand text-lg">⊹ ✿ ⊹</span>
        </div>
        <div className="font-serif-body space-y-6 text-[1.15rem] leading-[1.9] text-ink-soft">
          {PARAGRAPHS.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 26, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {p}
            </motion.p>
          ))}
        </div>
        <p className="font-hand mt-10 text-right text-3xl text-berry">Rishu</p>
      </motion.article>
    </section>
  );
}

export function PullQuote({ children }: { children: string }) {
  return (
    <motion.blockquote
      className="font-hand mx-auto max-w-2xl px-6 py-14 text-center text-4xl leading-snug text-berry sm:text-5xl"
      initial={{ opacity: 0, y: 24, filter: "blur(7px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1 }}
    >
      “{children}”
    </motion.blockquote>
  );
}