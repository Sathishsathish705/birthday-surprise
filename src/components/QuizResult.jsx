import { motion } from "framer-motion";
import { FaTrophy, FaCrown, FaHeart } from "react-icons/fa";

export default function QuizResult({ score, total, onNext }) {

  const percentage = Math.round((score / total) * 100);

  let message = "You're Always My Queen ❤️";

  if (percentage === 100) {
    message = "💞Our Memories Live Beautifully In Your Heart...💖";
  } else if (percentage >= 80) {
    message = "🥰 Amazing! You Remember Almost Everything ❤️";
  } else if (percentage >= 60) {
    message = "💕 Super! Our Memories Are Beautiful ❤️";
  } else {
    message = "💖 No Problem... We Will Create More Memories Together ❤️";
  }

  return (
    <div className="result-page">

      <motion.div
        className="result-card"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >

        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaTrophy className="trophy-icon" />
        </motion.div>

        <h1>💖You Know My Heart Perfectly...</h1>

        <FaCrown className="crown-icon" />

        <h2>💖 Every answer reminded me why I fell in love with you...💘💝</h2>

        <div className="score-circle">

          <h1>{score}/{total}</h1>

        </div>

        <p className="result-message">

          {message}

        </p>

        <button
          className="continue-btn"
          onClick={onNext}
        >
          🎁 Open Your Birthday Gift 💝
        </button>

      </motion.div>

    </div>
  );

}