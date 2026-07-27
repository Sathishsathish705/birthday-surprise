import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function QuizIntro({ onStart }) {
  return (
    <div className="quiz-intro">

      {/* Floating Hearts */}
      <div className="quiz-hearts">
        {[...Array(15)].map((_, index) => (
          <FaHeart
            key={index}
            className="quiz-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <motion.div
        className="intro-card"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          💖 A Little Love 💖 Quiz 
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Before I give you my heart once again... 💖
          <br />
          <br />
          Every question is a memory we created together... ✨
Let's see if your heart still remembers them all. ❤️
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
        >
          ❤️ Start Quiz ❤️
        </motion.button>
      </motion.div>

    </div>
  );
}