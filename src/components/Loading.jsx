import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Loading({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loading-screen">
      
      {/* Floating Hearts */}

<div className="hearts">
  {Array.from({ length: 25 }).map((_, i) => (
    <span
      key={i}
      className="floating-heart"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${5 + Math.random() * 5}s`,
      }}
    >
      ❤️
    </span>
  ))}
</div>
      <motion.div
        className="heart"
        animate={{
          scale: [1, 1.25, 1],
          rotate: [0, 8, -8, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5
        }}
      >
        ❤️
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Happy Birthday Ammu
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .5 }}
      >
        Preparing your surprise...
      </motion.p>

      <div className="loader">
        <motion.div
          className="loader-fill"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 4 }}
        />
      </div>

    </div>
  );
}