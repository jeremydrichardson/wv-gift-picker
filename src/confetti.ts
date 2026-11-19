import confetti from 'canvas-confetti';

const FESTIVE = ['#e63946', '#2a9d8f', '#f9c74f', '#ffffff', '#43aa8b'];
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function sparkle(origin?: { x: number; y: number }) {
  if (reducedMotion()) return;
  confetti({ particleCount: 40, spread: 60, startVelocity: 25, scalar: 0.8, colors: FESTIVE, origin });
}

export function celebrate() {
  if (reducedMotion()) return;
  const end = Date.now() + 900;
  const frame = () => {
    confetti({ particleCount: 6, angle: 60, spread: 70, origin: { x: 0, y: 0.7 }, colors: FESTIVE });
    confetti({ particleCount: 6, angle: 120, spread: 70, origin: { x: 1, y: 0.7 }, colors: FESTIVE });
    if (Date.now() < end) requestAnimationFrame(frame);
  };
  frame();
}
