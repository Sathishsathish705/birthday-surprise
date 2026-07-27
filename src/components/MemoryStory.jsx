import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/memoryStory.css";

export default function MemoryStory({ onFinish }) {

  const memories = [
    {
      image: "/photos/12.jpg",
      title: "❤️ The Beginning",
      message:
        "Every great love story starts with a small moment… a simple hello, a beautiful smile, and a feeling that slowly became something special. From that first meeting, our journey began — two hearts, one story, and countless memories waiting to be created. ✨💖"
    },

    {
      image: "/photos/10.jpg",
      title: "😊 Your Smile",
      message:
        "Your smile was the little spark that made ordinary moments feel special. It brought happiness, comfort, and a feeling I never wanted to forget. Among all the beautiful memories, your smile will always be my favorite one. 😊❤️"
    },

    {
      image: "/photos/3.jpg",
      title: "💖 Beautiful Memories",
      message:
        "Some moments become memories, and some memories become treasures. Every laugh, every conversation, and every little moment we shared created a beautiful story that will always stay close to my heart. ❤️✨"
    },

    {
      image: "/photos/1.jpg",
      title: "🌹 Sweet Moments",
      message:
       "The sweetest moments in life are the ones we never planned. Every smile, every laugh, and every second we spent together became a memory I'll always cherish. No matter how much time passes, these beautiful moments will forever bloom in my heart. 🌹❤️"
    },

    {
      image: "/photos/5.jpg",
      title: "✨ My Happiness",
      message:
        "You are the little reason behind my biggest smiles. Every moment with you brings a special kind of happiness that words can never fully describe. The memories we create together are the treasures I will always keep in my heart. ✨❤️"
    },

    {
      image: "/photos/11.jpg",
      title: "🥰 Together",
      message:
      "Together, we created moments that turned into beautiful memories. Every laugh, every smile, and every little adventure became a part of our special story. No matter where life takes us, these memories will always remind us of the happiness we shared. ❤️✨"
       },

    {
      image: "/photos/10.jpg",
      title: "💕 Forever",
      message:
        "Some connections are made to be remembered forever. Every moment, every smile, and every memory we shared will always have a special place in my heart. Our story is a beautiful chapter that I will cherish forever. 💕✨"
     },

    {
      image: "/photos/6.jpg",
      title: "🎂 Birthday",
      message:
        
        "Unnodaya smile enakku romba special. Un life la neraya happiness, success, and beautiful moments varanum nu manasara wish panren. Nee eppovum happy-aa irukkanum. En life la nee oru special person ah irukkuradhukku thanks. ✨❤️"},

    {
      image: "/photos/7.jpg",
      title: "❤️ My Favorite Person",
      message:
        "You are not just a part of my memories, you are the reason behind many of my happiest moments. Your kindness, your smile, and the little things you do make you someone truly special in my life. ❤️✨"
    },

    {
      image: "/photos/8.jpg",
      title: "💍 Forever Together",
      message:
       "Some journeys are special because they are shared with someone who makes every moment beautiful. Together, we create memories filled with smiles, love, and happiness. No matter what comes our way, these precious moments will always remain a beautiful part of our story. 💍❤️"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [typedText, setTypedText] = useState("");
  const audioRef = useRef(null);
  const memory = memories[current];

  useEffect(() => {

    setTypedText("");

    let index = 0;

    const typing = setInterval(() => {

      setTypedText(
        memories[current].message.slice(0, index)
      );

      index++;

      if (index > memories[current].message.length) {
        clearInterval(typing);
      }

    }, 40);

    return () => clearInterval(typing);

  }, [current]);

  useEffect(() => {

  audioRef.current = new Audio("/music/memory.mp3");

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

  const nextMemory = () => {
    if (current < memories.length - 1) {
      setCurrent(current + 1);
    }
  };

  const previousMemory = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };
    return (
    <div className="story-page">

      <motion.h1
        className="story-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        🥰 Our Beautiful Memories ✨💖
      </motion.h1>

      <AnimatePresence mode="wait">

        <motion.div
          key={current}
          className="story-card"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >

          {/* LEFT SIDE - PHOTO */}

          <div className="photo-side">

            <div className="photo-frame">

              <img
                src={memory.image}
                alt={memory.title}
                className="story-image"
              />

            </div>

          </div>

          {/* RIGHT SIDE - MESSAGE */}

          <div className="text-side">

            <h3 className="memory-count">
              Memory {current + 1} / {memories.length}
            </h3>

            <h2 className="memory-title">
              {memory.title}
            </h2>

            <p className="memory-message">
              {typedText}
            </p>

            <div className="story-buttons">

              <button
                onClick={previousMemory}
                disabled={current === 0}
              >
                ⬅ Previous
              </button>

              {current < memories.length - 1 ? (

                <button onClick={nextMemory}>
                  ❤️ Next ❤️
                </button>

              ) : (

               <button
  onClick={onFinish}
>
  🌌 Final Surprise ❤️
</button>

              )}

            </div>

          </div>

        </motion.div>

      </AnimatePresence>

    </div>
  );

}