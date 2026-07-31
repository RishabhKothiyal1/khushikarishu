export function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.14] mix-blend-multiply"
      style={{ backgroundImage: 'url("/noise.jpeg")', backgroundSize: "300px" }}
    />
  );
}