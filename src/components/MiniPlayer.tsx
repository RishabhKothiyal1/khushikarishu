import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const COVER = "https://cdn.cutiepage.in/template-seeds/girlfriends-day/gallery1.jpeg";

// soft piano-style arpeggio (frequencies in Hz)
const MELODY = [
  392.0, 523.25, 659.25, 783.99, 659.25, 523.25, 587.33, 698.46, 880.0, 698.46, 587.33, 523.25,
  440.0, 523.25, 659.25, 880.0, 659.25, 523.25, 349.23, 440.0, 523.25, 659.25, 523.25, 440.0,
];
const STEP = 0.42;

export function MiniPlayer() {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
      ctxRef.current?.close();
      ctxRef.current = null;
      return;
    }

    const ctx = new AudioContext();
    ctxRef.current = ctx;
    const master = ctx.createGain();
    master.gain.value = 0.16;
    master.connect(ctx.destination);

    let index = 0;
    const note = (freq: number, time: number) => {
      [1, 2].forEach((harm, h) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq * harm;
        const peak = h === 0 ? 0.5 : 0.12;
        gain.gain.setValueAtTime(0.0001, time);
        gain.gain.exponentialRampToValueAtTime(peak, time + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, time + 1.6);
        osc.connect(gain).connect(master);
        osc.start(time);
        osc.stop(time + 1.7);
      });
    };

    const tick = () => {
      const now = ctx.currentTime + 0.05;
      for (let i = 0; i < 4; i++) {
        note(MELODY[(index + i) % MELODY.length]!, now + i * STEP);
      }
      index = (index + 4) % MELODY.length;
    };

    tick();
    timerRef.current = window.setInterval(tick, STEP * 4 * 1000);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
      ctx.close();
    };
  }, [playing]);

  return (
    <motion.div
      className="paper-surface fixed bottom-4 left-4 z-30 flex items-center gap-3 rounded-[4px] p-2 pr-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <span className="washi-tape absolute -top-3 left-6 h-6 w-16 -rotate-6 rounded-[2px]" />
      <img
        src={COVER}
        alt="Song cover"
        className="h-14 w-14 rounded-[3px] object-cover"
      />
      <div className="flex flex-col">
        <span className="font-marker text-[0.6rem] uppercase tracking-[0.2em] text-ink-soft">
          {playing ? "now playing" : "tap play"}
        </span>
      </div>
      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? "Pause the song" : "Play the song"}
        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-berry text-paper-warm"
      >
        {playing ? "❚❚" : "▶"}
      </button>
    </motion.div>
  );
}
