import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { Background } from "@/components/Background";
import { Divider } from "@/components/Divider";
import { EndingCard } from "@/components/EndingCard";
import { Envelope } from "@/components/Envelope";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Letter, PullQuote } from "@/components/Letter";
import { MiniPlayer } from "@/components/MiniPlayer";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { Polaroid } from "@/components/Polaroid";
import dlfMallFirstTimeAsset from "@/assets/dlf-mall-first-time.jpeg.asset.json";
import usVideoAsset from "@/assets/us-video.mp4.asset.json";
import usVideo2Asset from "@/assets/us-video-2.mp4.asset.json";
import auntyMomosAsset from "@/assets/aunty-momos.jpeg.asset.json";
import eveningOutAsset from "@/assets/evening-out.jpeg.asset.json";
import snacksAsset from "@/assets/snacks.jpeg.asset.json";
import badIdeasAsset from "@/assets/bad-ideas-good-stories.jpeg.asset.json";
import khushiPurseAsset from "@/assets/khushi-purse.jpeg.asset.json";
import khushiFrockAsset from "@/assets/khushi-frock.jpeg.asset.json";
import khushiHandsAsset from "@/assets/khushi-hands.jpeg.asset.json";
import { ScrapbookPage } from "@/components/ScrapbookPage";
import { Sticker } from "@/components/Sticker";
import {
  BurgerDoodle,
  FlowerDoodle,
  HeartDoodle,
  HomeDoodle,
  MomoDoodle,
  MoonDoodle,
  PhoneDoodle,
  PinDoodle,
  StarDoodle,
  WaveDoodle,
} from "@/components/Doodles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Handmade Girlfriend's Day Scrapbook" },
      {
        name: "description",
        content:
          "A handmade paper scrapbook for Khushi: first dates, momos, midnight calls, and a letter from Rishu for Girlfriend's Day.",
      },
      { property: "og:title", content: "For My Khushi · A Handmade Scrapbook" },
      {
        property: "og:description",
        content:
          "Envelope, polaroids, doodles and a handwritten letter: a Girlfriend's Day memory book made by hand.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Background />
      <NoiseOverlay />
      {opened && <FloatingParticles />}
      {opened && <MiniPlayer />}

      <AnimatePresence>
        {!opened && <Envelope key="envelope" onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 pb-10"
        >
          {/* header */}
          <header className="relative mx-auto max-w-4xl px-5 pb-4 pt-24 text-center sm:pt-32">
            <Sticker
              className="absolute -left-2 top-8 h-24 w-24 sm:left-2 sm:h-32 sm:w-32"
              src="/stickers/teddy.avif"
              rotate={-9}
              float={9}
            />
            <Sticker
              className="absolute -right-1 top-4 h-24 w-24 sm:right-4 sm:h-32 sm:w-32"
              src="/stickers/balloons.avif"
              rotate={7}
              delay={0.2}
              float={13}
            />
            <p className="font-marker text-[0.7rem] uppercase tracking-[0.35em] text-rose">
              a scrapbook of us
            </p>
            <h1 className="font-hand mt-4 text-6xl leading-none text-ink sm:text-7xl">
              For My Khushi
            </h1>
            <p className="font-serif-body mx-auto mt-5 max-w-md text-lg italic text-ink-soft">
              Turn the pages slowly. Everything in here actually happened.
            </p>
          </header>

          <Divider />

          <ScrapbookPage
            kicker="first date"
            title="DLF Mall, and a whole day gone"
            icon={<PinDoodle />}
            rotate={-0.9}
            aside={
              <div className="relative">
                <Polaroid caption="the first time" rotate={-4}>
                  <img
                    src={dlfMallFirstTimeAsset.url}
                    alt="DLF Mall of India, Noida, the day of our first date"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </Polaroid>
                <Sticker className="absolute -bottom-6 -left-6 h-10 w-10" rotate={-14} delay={0.3}>
                  <FlowerDoodle className="h-10 w-10" />
                </Sticker>
                <div className="mt-10 flex justify-center">
                  <Polaroid caption="that whole day ♡" rotate={3}>
                    <video
                      src={usVideo2Asset.url}
                      className="h-full w-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  </Polaroid>
                </div>
              </div>
            }
          >
            <p>
              We met at DLF Mall and I remember checking the time once, near the beginning, and then
              never again. Somewhere between walking in circles and pretending we knew where we were
              going, the day just disappeared.
            </p>
            <p>
              I went home that night replaying small things: how you laughed a beat before the joke
              landed, how easy the silences were.
            </p>
            <Sticker className="mt-6 h-24 w-24" rotate={-6} delay={0.2}>
              <img
                src="https://res.cloudinary.com/dt94eifov/image/upload/v1778092640/lovely/defaults/template_assets/curious_in_confuse_01.gif"
                alt="A curious little cat"
                className="h-24 w-24 object-contain"
              />
            </Sticker>
          </ScrapbookPage>

          <Divider offset={1} />

          <ScrapbookPage
            kicker="first kiss"
            title="The quietest loud moment"
            icon={<HeartDoodle />}
            rotate={0.7}
            reverse
            aside={
              <Polaroid caption="us ♡" rotate={5}>
                <video
                  src={usVideoAsset.url}
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </Polaroid>
            }
          >
            <p>
              Nothing around us changed. No music swelled. But something inside me rearranged itself
              permanently, and I've never once wanted to put it back.
            </p>
            <Sticker className="mt-6 h-24 w-24" rotate={6} delay={0.2}>
              <img
                src="https://cdn.cutiepage.in/template-seeds/brothers-day/cat.gif"
                alt="A little cat"
                className="h-24 w-24 object-contain"
              />
            </Sticker>
          </ScrapbookPage>

          <PullQuote>You quietly became a part of me.</PullQuote>

          <ScrapbookPage
            kicker="burgers & momos"
            title="Half of everything, always"
            icon={<BurgerDoodle />}
            rotate={-0.6}
            aside={
              <div className="flex flex-col items-center gap-6">
                <Sticker className="h-16 w-16" rotate={-8}>
                  <BurgerDoodle className="h-16 w-16" />
                </Sticker>
                <Sticker className="h-16 w-16" rotate={9} delay={0.15}>
                  <MomoDoodle className="h-16 w-16" />
                </Sticker>
                <Sticker className="h-24 w-24" rotate={-4} delay={0.3}>
                  <img
                    src="https://media.tenor.com/JYS6f27lUiYAAAAi/peach-goma-love-heart-dance.gif"
                    alt="Peach and Goma dancing with a heart"
                    className="h-24 w-24 object-contain"
                  />
                </Sticker>
              </div>
            }
          >
            <p>
              Burgers we swore we were too full for, and finished anyway. Momos we shared plate after
              plate, never once fighting over them.
            </p>
            <p>
              And because your throat was sore, the cold drink and the ice cream quietly became mine.
              Best sore throat that ever happened to me.
            </p>
            <div className="mt-10 flex flex-wrap items-start justify-center gap-8 sm:gap-10">
              <Polaroid caption="aunty momos ♡" rotate={-4}>
                <img
                  src={auntyMomosAsset.url}
                  alt="Aunty Momos stall glowing pink at night"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Polaroid>
              <Polaroid caption="that blue evening" rotate={3}>
                <img
                  src={eveningOutAsset.url}
                  alt="Evening street lights outside the mall"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Polaroid>
              <Polaroid caption="half of everything" rotate={-2}>
                <img
                  src={snacksAsset.url}
                  alt="A plate of snacks with chutney we shared"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Polaroid>
              <Polaroid caption="good ideas and good stories onlyyy" rotate={4}>
                <img
                  src={badIdeasAsset.url}
                  alt="Bad Ideas Good Stories bag with sunflowers"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Polaroid>
            </div>
          </ScrapbookPage>

          <Divider offset={2} />

          <ScrapbookPage
            kicker="voice notes"
            title="Your voice, saved for later"
            icon={<WaveDoodle className="h-5 w-12" />}
            rotate={0.9}
            reverse
            aside={
              <Sticker className="h-20 w-40" rotate={-4}>
                <WaveDoodle className="h-20 w-40" />
              </Sticker>
            }
          >
            <p>
              Two-minute voice notes that turn into eight. Half sentences, laughing at yourself
              mid-story, the background noise of your whole day.
            </p>
            <p>I keep them. On loud days I replay them just to make the room feel less empty.</p>
          </ScrapbookPage>

          <ScrapbookPage
            kicker="late night calls"
            title="Neither of us hanging up first"
            icon={<MoonDoodle />}
            rotate={-1}
            aside={
              <div className="relative flex items-center gap-4">
                <Sticker className="h-16 w-16" rotate={-10}>
                  <PhoneDoodle className="h-16 w-16" />
                </Sticker>
                <Sticker className="h-12 w-12" rotate={12} delay={0.2}>
                  <MoonDoodle className="h-12 w-12" />
                </Sticker>
                <Sticker className="absolute -right-6 -top-6 h-8 w-8" rotate={0} delay={0.4}>
                  <StarDoodle className="h-8 w-8" />
                </Sticker>
                <Sticker className="h-24 w-24" rotate={5} delay={0.5}>
                  <img
                    src="https://media.tenor.com/5hNFjHWQYKQAAAAi/bubu-dudu-sseeyall.gif"
                    alt="Bubu and Dudu waving goodnight"
                    className="h-24 w-24 object-contain"
                  />
                </Sticker>
              </div>
            }
          >
            <p>
              Video calls past midnight, both of us half asleep, saying "okay, goodnight" four times
              before actually meaning it.
            </p>
            <Sticker className="mt-6 h-24 w-24" rotate={-7} delay={0.2}>
              <img
                src="https://cdn.cutiepage.in/template-seeds/brothers-day/cat.gif"
                alt="A sleepy little cat"
                className="h-24 w-24 object-contain"
              />
            </Sticker>
          </ScrapbookPage>

          <Divider offset={3} />

          <section className="relative mx-auto max-w-4xl px-5 py-16 text-center">
            <h2 className="font-hand text-5xl leading-tight text-black sm:text-6xl">
              choti si khushi
            </h2>
            <div className="mt-12 flex flex-wrap items-start justify-center gap-8 sm:gap-10">
              <Polaroid caption="baddie since childhood" rotate={-4}>
                <img
                  src={khushiPurseAsset.url}
                  alt="Little Khushi holding a purse in a yellow frock"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Polaroid>
              <Polaroid caption="don khushi" rotate={3}>
                <img
                  src={khushiFrockAsset.url}
                  alt="Little Khushi in a pink frock standing on grass"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Polaroid>
              <Polaroid caption="pyaara bchha" rotate={-2}>
                <img
                  src={khushiHandsAsset.url}
                  alt="Baby Khushi smiling with her hands up"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Polaroid>
            </div>
            <p className="font-serif-body mx-auto mt-12 max-w-2xl text-left text-lg italic leading-relaxed text-ink-soft">
              this damn chotu sa bchha got my whole heart and mind and i can tell one thing for sure
              that this bchha looks so adorable when smile ki ye kuch bhi baat manwa skti h kisi se
              bhi anywayss bchha look at urself bhyi looking damn adorable like bhyi kya hi smile aa
              rhi h aapke face pe oyehoye mtlb bilkul hi pyaareee
            </p>
          </section>

          <Divider offset={5} />

          <section className="relative mx-auto max-w-3xl px-5 py-16 text-center">
            <Sticker className="mx-auto mb-6 h-14 w-14" rotate={-5}>
              <HomeDoodle className="h-14 w-14" />
            </Sticker>
            <h2 className="font-hand text-6xl leading-tight text-ink sm:text-7xl">
              You&apos;re home.
            </h2>
            <p className="font-serif-body mx-auto mt-6 max-w-lg text-lg italic text-ink-soft">
              Not a place I visit. A place I return to.
            </p>
          </section>

          <Divider offset={4} />

          <Letter />

          <EndingCard />
        </motion.div>
      )}
    </main>
  );
}
