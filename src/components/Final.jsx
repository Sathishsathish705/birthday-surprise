import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { FaPlay, FaPause } from "react-icons/fa";
import "../styles/final.css";

export default function Final({ onNext }) {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const width = window.innerWidth;
  const height = window.innerHeight;

  const fullLetter = `
My Dearest Love ❤️,

Happy Birthday to the most beautiful person in my life.

Every smile of yours makes my world brighter.

Thank you for coming into my life.

I promise to support you,
care for you,
and stand beside you forever.

No matter what happens,
you will always be my favorite person.

❤️ I Love You Forever ❤️

— Yours,
Mama ❤️
`;

  const photos = [
  "/photos/1.jpg",
  "/photos/2.jpg",
  "/photos/3.jpg",
  "/photos/4.jpg",
  "/photos/5.jpg",
  "/photos/6.jpg",
  "/photos/7.jpg",
  "/photos/8.jpg",
  "/photos/9.jpg",
  "/photos/10.jpg",
  "/photos/11.jpg",
  "/photos/12.jpg",
];
  // Music
  useEffect(() => {
    audioRef.current = new Audio("/music/final.mp3");

    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    audioRef.current.play().catch(() => {
      console.log("Autoplay blocked");
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  // Typewriter
 useEffect(() => {

  const startTyping = setTimeout(() => {

    let index = 0;

    const typing = setInterval(() => {

      setDisplayText(fullLetter.slice(0, index));

      index++;

      if (index > fullLetter.length) {
        clearInterval(typing);
      }

    }, 80); // Typing speed (smaller = faster)

  }, 1000); // Wait 1 second before typing starts

  return () => {
    clearTimeout(startTyping);
  };

}, []);

  // Slideshow
  useEffect(() => {
  const slide = setInterval(() => {
    setCurrentPhoto((prev) => {

      // Last photo vandha apram
      if (prev === photos.length - 1) {

        clearInterval(slide);

        setTimeout(() => {
          onNext();   // MemoryStory page-ku pogum
        }, 2000);

        return prev;
      }

      return prev + 1;
    });
  }, 3000);

  return () => clearInterval(slide);
}, [onNext, photos.length]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  const replay = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    window.location.reload();
  };

  return (
    <div className="final-page">

  {/* 🎆 Fireworks */}
  <Confetti
    width={width}
    height={height}
    recycle={true}
    numberOfPieces={180}
  />

  {/* 🌹 Rose Petals */}
  <div className="petals">
   {Array.from({ length: 8 }).map((_, i) => (
      <span
        key={i}
        className="petal"
        style={{
  left: `${Math.random() * 100}%`,
animationDelay: `${Math.random() * 12}s`,
  animationDuration: `${20 + Math.random() * 10}s`,
}}
      >
        🌹
      </span>
    ))}
  </div>

  {/* ❤️ Floating Hearts */}
  <div className="hearts">
    {Array.from({ length: 20 }).map((_, i) => (
      <span
        key={i}
        className="heart"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${4 + Math.random() * 4}s`,
        }}
      >
        ❤️
      </span>
    ))}
  </div>

  {/* 🎵 Music Button */}
  <button
    className="music-btn"
    onClick={toggleMusic}
  >
    {playing ? <FaPause /> : <FaPlay />}
  </button>

  {/* 💖 Birthday Card */}
  

  {/* 💌 + 📸 Split Screen */}
  <div className="content-section">

    {/* Left */}
    <motion.div
      className="love-letter"
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>💌 A Letter For You</h2>

      <pre>{displayText}</pre>

    </motion.div>

    {/* Right */}
    <motion.div
      className="memory-slider"
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      <h2>📸 Our Beautiful Memories ❤️</h2>

      <motion.img
        key={currentPhoto}
        src={photos[currentPhoto]}
        className="memory-photo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

    </motion.div>

  </div>

  {/* ❤️ Ending */}
  <motion.div
  className="made-by"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>

  <h2>Made with ❤️ by Sathish</h2>

</motion.div>

</div>
  );
}