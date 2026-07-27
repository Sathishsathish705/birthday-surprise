import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Welcome({ onNext }) {

  return (

    <div className="welcome-page">

      {/* Floating Hearts */}

      <div className="floating-hearts">

        {[...Array(20)].map((_, i) => (

          <FaHeart
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 5}s`
            }}
          />

        ))}

      </div>

      <motion.div

        className="glass-card"

        initial={{ opacity: 0, y: 80 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}

      >

        <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.7 }}
>
  My Dearest Love... ❤️

  <br /><br />

  Today isn't just another day...
  It's the day the most beautiful person in my life was born. 🎂💖

  <br /><br />

  I created this little surprise with all my love,
  just to see your beautiful smile. 🥹❤️

  <br /><br />

  Every click will take us through the memories we've created together,
  one beautiful moment at a time. 🌹✨

  <br /><br />

  So take my hand... 🤝❤️

  <br /><br />

  <strong>Let's begin our beautiful love story. 💕</strong>
</motion.p>

        <motion.button

          whileHover={{ scale: 1.08 }}

          whileTap={{ scale: .95 }}

          onClick={onNext}

        >

          ❤️ Start Our Journey ❤️

        </motion.button>

      </motion.div>

    </div>

  );

}