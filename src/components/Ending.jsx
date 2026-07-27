import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "../styles/ending.css";

const message = `Every memory with you...

became one of the most beautiful chapters
of my life...💕

Thank you for every smile,
every laugh,
every little moment.

No matter what happens,
you will always have
a special place in my heart.

Happy Birthday Ammu 💖

I Love You Forever 💗💝`;

export default function Ending({ onReplay }) {

  const [text, setText] = useState("");

  // ✅ Audio Ref
  const audioRef = useRef(null);

  // Typing Effect
  useEffect(() => {

    let index = 0;

    const typing = setInterval(() => {

      setText(message.slice(0, index));

      index++;

      if (index > message.length) {
        clearInterval(typing);
      }

    }, 45);

    return () => clearInterval(typing);

  }, []);

  // Music
  useEffect(() => {

  const audio = new Audio("/music/end.mp3");

  audio.loop = true;

  audio.volume = 0;

  audioRef.current = audio;

  audio.play().catch(() => {});

  // Fade In
  const fade = setInterval(() => {

    if (audio.volume < 0.6) {

      audio.volume = Math.min(audio.volume + 0.05, 0.6);

    } else {

      clearInterval(fade);

    }

  }, 200);

  return () => {

    clearInterval(fade);

    audio.pause();

    audio.currentTime = 0;

  };

}, []);
  return (

   <div className="ending-page">

  {/* Stars */}
  <div className="stars"></div>

  {/* Nebula */}
  <div className="nebula one"></div>
  <div className="nebula two"></div>
  <div className="nebula three"></div>

  {/* Clouds */}
  <div className="cloud one"></div>
  <div className="cloud two"></div>
  <div className="cloud three"></div>

  {/* Big Stars */}
  <div className="big-stars">
    {[...Array(18)].map((_, i) => (
      <span
        key={i}
        className="big-star"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      />
    ))}
  </div>

  {/* Glass Heart Ball */}
  <motion.img
    src="/images/glass-heart.png"
    className="glass-heart"
    initial={{
      y: -800,
      rotate: -20,
      opacity: 0,
      scale: 0.5,
    }}
    animate={{
      y: [0, -12, 0],
      rotate: [0, 2, 0],
      opacity: 1,
      scale: 1,
    }}
    transition={{
      y: {
        duration: 3,
        type: "spring",
        bounce: 0.45,
        repeat: Infinity,
        repeatType: "reverse",
      },
      rotate: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }}
  />

  {/* Fireworks */}
  <div className="fireworks">

        {[...Array(25)].map((_, i) => (

          <span
            key={i}
            className="spark"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />

        ))}

        <div className="shooting-stars">

          {[...Array(6)].map((_, i) => (

            <span
              key={i}
              className="shooting-star"
              style={{
                animationDelay: `${i * 2}s`
              }}
            />

          ))}

        </div>

      </div>

      {/* Floating Hearts */}

      <div className="floating-hearts">

        {[...Array(20)].map((_, i) => (

          <span
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`
            }}
          >
            ❤️
          </span>

        ))}

      </div>

      {/* Title */}

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🌌 The End... 💖
      </motion.h1>

      {/* Letter */}

      <motion.div
        className="ending-letter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .5 }}
      >

        <p>{text}</p>

      </motion.div>

      {/* Forever */}

      <motion.h2
        className="forever"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay:  0.5 }}
      >
        💝 I Love You Forever Ammu 💖
      </motion.h2>

      {/* Credit */}

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay:  1}}
      >
        Made by ✨💕  your Mama
      </motion.h3>

      {/* Replay */}

     <motion.button

  className="replay-btn"

  whileHover={{ scale: 1.08 }}

  whileTap={{ scale: .95 }}

  transition={{ delay: 1.5 }}

  onClick={onReplay}

>

  ❤️ Replay Our Story ❤️

</motion.button>

    </div>

  );

}