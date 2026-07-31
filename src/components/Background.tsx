export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-paper">
      <div className="grid-paper absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,color-mix(in_oklab,var(--color-paper-warm)_95%,transparent),transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 h-[45vh] bg-[radial-gradient(60%_60%_at_20%_0%,color-mix(in_oklab,var(--color-blush)_28%,transparent),transparent_70%)] blur-2xl" />
      <div className="absolute inset-x-0 bottom-0 h-[45vh] bg-[radial-gradient(60%_60%_at_80%_100%,color-mix(in_oklab,var(--color-rose)_18%,transparent),transparent_70%)] blur-2xl" />
    </div>
  );
}