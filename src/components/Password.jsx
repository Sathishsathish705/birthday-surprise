import { celebrate } from "../utils/confetti";
import { Howl } from "howler";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLock, FaHeart } from "react-icons/fa";

export default function Password({ onSuccess }) {

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [correct, setCorrect] = useState(false);

  const checkPassword = () => {
    const unlockSound = new Howl({
  src:["/music/unlock.mp3"]
});
   if(password.trim()==="15/06/2026"){

unlockSound.play();

celebrate();

setCorrect(true);

setMessage("💖 Correct Ammu... Loading your next surprise...");

setTimeout(()=>{

onSuccess();

},2500);

}else {

      setCorrect(false);
      setMessage(" 🤔 Hmm... Konjam yosichu paaru ❤️");

    }

  };

  return (

    <div className="password-page">

      <div className="password-hearts">
        {[...Array(15)].map((_, i) => (
          <FaHeart
            key={i}
            className="password-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <motion.div
        className="password-card"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >

        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaLock className="lock-icon"/>
        </motion.div>

        <h1>Welcome Back Ammu ❤️</h1>

        <p>💖Enter Our First Meet Date✨💖🥰</p>

        <input
  type="text"
  placeholder="💖 Enter the date ✨ Our first meet date...🎉"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

        <button onClick={checkPassword}>
          Unlock ❤️
        </button>

        {message && (
  <motion.p
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      duration: 0.5,
      type: "spring",
      stiffness: 180
    }}
    className={correct ? "success" : "error"}
  >
    {message}
  </motion.p>
)}

      </motion.div>

    </div>

  );

}