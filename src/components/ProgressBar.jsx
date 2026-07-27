import { motion } from "framer-motion";

export default function ProgressBar({
  current,
  total
}) {

  const progress = (current / total) * 100;

  return (

    <div className="progress-container">

      <div className="progress-info">

        <span>
          Question {current} / {total}
        </span>

        <span>
          {Math.round(progress)}%
        </span>

      </div>

      <div className="progress-track">

        <motion.div

          className="progress-fill"

          initial={{ width: 0 }}

          animate={{ width: `${progress}%` }}

          transition={{ duration: .5 }}

        />

      </div>

    </div>

  );

}