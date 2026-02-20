import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RocketButtonProMax({ children, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.7 }}
            animate={{ y: -160, opacity: 1, scale: 1 }}
            exit={{ y: -280, opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          >
            <div className="relative flex flex-col items-center">

              <div className="absolute w-64 h-64 bg-yellow-400/10 blur-3xl rounded-full" />

              <svg width="120" height="220" viewBox="0 0 120 220">
                
                <defs>
                  <linearGradient id="goldBody" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#fde68a" />
                    <stop offset="50%" stopColor="#facc15" />
                    <stop offset="100%" stopColor="#ca8a04" />
                  </linearGradient>
                  <linearGradient id="goldDark" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#78350f" />
                  </linearGradient>
                </defs>

                <path
                  d="M60 0 C80 30, 80 30, 60 50 C40 30, 40 30, 60 0 Z"
                  fill="url(#goldBody)"
                />

                <rect
                  x="30"
                  y="40"
                  width="60"
                  height="120"
                  rx="30"
                  fill="url(#goldBody)"
                />

                <rect
                  x="48"
                  y="70"
                  width="24"
                  height="40"
                  rx="12"
                  fill="#ffffffcc"
                />

                <path
                  d="M30 130 Q10 150 20 180 Q40 160 40 130 Z"
                  fill="url(#goldDark)"
                />
                <path
                  d="M90 130 Q110 150 100 180 Q80 160 80 130 Z"
                  fill="url(#goldDark)"
                />

                <rect
                  x="45"
                  y="150"
                  width="30"
                  height="30"
                  rx="10"
                  fill="#78350f"
                />
              </svg>

              <motion.div
                animate={{
                  scaleY: [1, 1.8, 1],
                  opacity: [0.7, 1, 0.6],
                }}
                transition={{
                  duration: 0.2,
                  repeat: Infinity,
                }}
                className="w-8 h-20 bg-gradient-to-t from-orange-600 via-yellow-400 to-transparent blur-md rounded-full -mt-4"
              />

              <motion.div
                animate={{
                  y: [0, 40],
                  opacity: [0.5, 0],
                  scale: [0.8, 1.5],
                }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                }}
                className="absolute -bottom-14 w-16 h-16 bg-yellow-200/20 rounded-full blur-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.96 }}
        className="relative z-10 px-10 py-4 
        bg-[#0a0a0a] border border-yellow-500/30 
        rounded-3xl text-yellow-400 font-bold uppercase tracking-[0.2em]
        overflow-hidden group transition-all duration-300
        hover:border-yellow-400 hover:shadow-[0_0_60px_rgba(234,179,8,0.35)]"
      >
        {/* shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.2s_infinite]" />

        <span className="relative z-20">{children}</span>
      </motion.button>
    </div>
  );
}