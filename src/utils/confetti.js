import confetti from "canvas-confetti";

export function celebrate() {

  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });

  setTimeout(() => {

    confetti({
      particleCount: 150,
      angle: 60,
      spread: 70,
      origin: { x: 0 }
    });

    confetti({
      particleCount: 150,
      angle: 120,
      spread: 70,
      origin: { x: 1 }
    });

  },500);

}