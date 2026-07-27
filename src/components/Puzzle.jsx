import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import PuzzleBoard from "./PuzzleBoard";
import {
  shuffleTiles,
  formatTime,
} from "../utils/shuffle";

import "../styles/puzzle.css";

export default function Puzzle({ onNext }) {

  const [tiles, setTiles] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTiles(shuffleTiles());
  }, []);

// Puzzle complete → 5 seconds → Next page
useEffect(() => {
  if (completed) {
    const timer = setTimeout(() => {
      onNext();
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }
}, [completed, onNext]);

  return (

    <div className="puzzle-page">

      <motion.div
        className="puzzle-container"
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
      >

        <h1>🧩 Memory Puzzle ❤️</h1>

        <p>Arrange our beautiful memory.</p>

        <div className="top-info">

          <span>⏱️ {formatTime(time)}</span>

          <span>🎯 {moves} Moves</span>

        </div>

        <PuzzleBoard
          tiles={tiles}
          setTiles={setTiles}
          setMoves={setMoves}
          completed={completed}
          setCompleted={setCompleted}
        />

        {completed && (
  <motion.div
    className="success-box"
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2>🎉 Puzzle Completed ❤️</h2>

    <p>You completed our beautiful memory.</p>

    <p>⏱️ Time : {formatTime(time)}</p>

    <p>🎯 Moves : {moves}</p>

    <p style={{ marginTop: "20px", color: "#ff2f85", fontWeight: "bold" }}>
      ❤️ Loading next surprise...
    </p>
  </motion.div>
)}

      </motion.div>

    </div>

  );
}