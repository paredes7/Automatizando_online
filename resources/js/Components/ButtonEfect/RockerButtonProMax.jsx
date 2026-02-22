import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../css/RockerButtonProMax.css";

export default function RocketButtonProMax({
  children,
  onClick,
  animation = "ufo",
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="ufo-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatePresence>
        {hover && animation === "ufo" && (
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.8 }}
            animate={{ y: -160, opacity: 1, scale: 1 }}
            exit={{ y: -260, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="ufo-launch"
          >
            <div className="ufo">
              <div className="ufo-glow"></div>
              <div className="ufo-dome"></div>
              <div className="ufo-body"></div>
              <div className="ufo-ring"></div>
              <div className="ufo-lights"></div>
              <div className="ufo-beam"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.96 }}
        className="ufo-button "
      >
        <span>{children}</span>
      </motion.button>
    </div>
  );
}