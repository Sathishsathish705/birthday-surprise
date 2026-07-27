import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/catchHearts.css";

export default function CatchHearts({ onNext }) {

  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [hearts, setHearts] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const TOTAL_HEARTS = 110;
const [createdHearts, setCreatedHearts] = useState(0);

  const audioRef = useRef(null);

    const startGame = () => {

    setGameStarted(true);

    audioRef.current = new Audio("/music/love.mp3");

    audioRef.current.loop = true;

    audioRef.current.volume = 0.5;

    audioRef.current.play().catch(() => {
      console.log("Autoplay blocked");
    });

  };

    useEffect(() => {

    if (!gameStarted || time <= 0) return;

    const createHeart = () => {

      const id = Date.now() + Math.random();

      setHearts((prev) => [
        ...prev,
        {
          id,
          left: Math.random() * 90,
          duration: 10 + Math.random() * 4,
        },
      ]);

    };

    // First hearts immediately
    for (let i = 0; i < 5; i++) {
      createHeart();
    }

    const spawn = setInterval(() => {
      createHeart();
    }, 1200);

    return () => clearInterval(spawn);

  }, [gameStarted, time]);

    useEffect(() => {

    if (!gameStarted || time <= 0) return;

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);

  }, [gameStarted, time]);

    useEffect(() => {

    if (time === 0 && audioRef.current) {

      audioRef.current.pause();

      audioRef.current.currentTime = 0;

    }

  }, [time]);

    const catchHeart = (id) => {

    setScore((prev) => prev + 1);

    setHearts((prev) =>
      prev.filter((heart) => heart.id !== id)
    );

  };

    return (
    <div className="catch-page">

      {/* Start Screen */}
      {!gameStarted && (
        <div className="start-screen">

          <h1>❤️ Catch My Love ❤️</h1>

          <p className="catch-text">
      💕 Ammu... Indha game-la catch panradhu hearts illa... <br /><br />

      Naan un mela vachirukka mudivilladha love-ah dhaan...💕💝 <br /><br />

      Ellathayum catch pannidu, chellam!...❤️🌹🥰
</p>

          <button
            className="start-btn"
            onClick={startGame}
          >
            ▶️ Start Game ❤️
          </button>

        </div>
      )}

      {/* Game Screen */}
      {gameStarted && (
        <>
          <h1>❤️ Catch My Love ❤️</h1>

          <div className="top-bar">
            <span>❤️ Score: {score}</span>
            <span>⏱️ {time}s</span>
          </div>

          {/* Falling Hearts */}
          {time > 0 &&
            hearts.map((heart) => (
              <motion.div
                key={heart.id}
                className="heart"
                style={{
                  left: `${heart.left}%`,
                }}
                initial={{
                  y: -100,
                  opacity: 1,
                }}
                animate={{
                  y: window.innerHeight + 100,
                  opacity: 1,
                }}
                transition={{
                  duration: heart.duration,
                  ease: "linear",
                }}
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{
                  scale: 0.8,
                }}
                onClick={() => catchHeart(heart.id)}
              >
                ❤️
              </motion.div>
            ))}

          {/* Result Screen */}
          {time === 0 && (
            <motion.div
              className="result"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <h2>🎉 Time Over ❤️</h2>

              <h3>You Caught</h3>

              <h1>{score} ❤️</h1>

              <button onClick={onNext}>
                Continue ❤️
              </button>
            </motion.div>
          )}
        </>
      )}

    </div>
  );
}