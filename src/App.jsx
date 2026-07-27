import { useState } from "react";

// Components
import Loading from "./components/Loading";
import Welcome from "./components/Welcome";
import Password from "./components/Password";
import QuizIntro from "./components/QuizIntro";
import Quiz from "./components/Quiz";
import QuizResult from "./components/QuizResult";
import Puzzle from "./components/Puzzle";
import CatchHearts from "./components/CatchHearts";
import Final from "./components/Final";
import MemoryStory from "./components/MemoryStory";

import Ending from "./components/Ending";

// Styles
import "./styles/loading.css";
import "./styles/welcome.css";
import "./styles/password.css";
import "./styles/quiz.css";
import "./styles/puzzle.css";
import "./styles/catchHearts.css";
import "./styles/final.css";
import "./styles/MemoryStory.css";


function App() {
  const [page, setPage] = useState("loading");
  const [quizScore, setQuizScore] = useState(0);

  return (
    <>
      {/* Loading */}
      {page === "loading" && (
        <Loading
          onFinish={() => setPage("welcome")}
        />
      )}

      {/* Welcome */}
      {page === "welcome" && (
        <Welcome
          onNext={() => setPage("password")}
        />
      )}

      {/* Password */}
      {page === "password" && (
        <Password
          onSuccess={() => setPage("quiz")}
        />
      )}

      {/* Quiz Intro */}
      {page === "quiz" && (
        <QuizIntro
          onStart={() => setPage("quizGame")}
        />
      )}

      {/* Quiz */}
      {page === "quizGame" && (
        <Quiz
          onFinish={(score) => {
            setQuizScore(score);
            setPage("result");
          }}
        />
      )}

      {/* Quiz Result */}
      {page === "result" && (
        <QuizResult
          score={quizScore}
          total={11}
          onNext={() => setPage("puzzle")}
        />
      )}

      {/* Puzzle */}
      {page === "puzzle" && (
        <Puzzle
          onNext={() => setPage("catch")}
        />
      )}

      {/* Catch Hearts */}
      {page === "catch" && (
        <CatchHearts
          onNext={() => setPage("final")}
        />
      )}

      {/* Final Surprise */}
      {page === "final" && (
  <Final
    onNext={() => setPage("MemoryStory")}
  />
)}

{page === "MemoryStory" && (
  <MemoryStory
  onFinish={() => setPage("ending")}
  />
)}

{page === "ending" && (
  <Ending
    onReplay={() => window.location.reload()}
  />
)}
    </>
  );
}

export default App;