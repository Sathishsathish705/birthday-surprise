import { motion } from "framer-motion";

export default function QuestionCard({
  level,
  question,
  options,
  onAnswer,
}) {
  return (
    <motion.div
      className="question-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="level-badge">
        {level}
      </div>

      <h2>{question}</h2>

      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            className="option-btn"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  );
}