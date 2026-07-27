import { useState } from "react";
import quizData from "../data/quizData";

import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";

const levels = [
  
  "💝 Level 1 - Sweet Beginning",
  "💕 Level 2 - The day I Meet My Queen",
  "🌸 Level 3 - Our Love Story",
  "💖 Level 4 - Beautiful Memories",
  "🌹 Level 5 - Colors of Love",
  "🍫 Level 6 - Sweet Moments",
  "🍕 Level 7 - Our Favorite Things",
  "🌍 Level 8 - Dreams Together",
  "🎂 Level 9 - Special Days",
  "💞 Level 10 - Heart Connection",
  "👑 Final Level - Queen of My Heart ❤️"

];

export default function Quiz({ onFinish }) {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {

    if (selectedAnswer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onFinish(score + (selectedAnswer === quizData[currentQuestion].answer ? 1 : 0));
    }

  };

  return (

    <div className="quiz-page">

      <ProgressBar
        current={currentQuestion + 1}
        total={quizData.length}
      />

      <QuestionCard
        level={levels[currentQuestion]}
        question={quizData[currentQuestion].question}
        options={quizData[currentQuestion].options}
        onAnswer={handleAnswer}
      />

      <div className="score-box">
        ⭐ Score : {score} / {quizData.length}
      </div>

    </div>

  );

}