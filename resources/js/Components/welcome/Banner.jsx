import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import RocketButtonProMax from "../ButtonEfect/RockerButton";

export default function Banner({ img,
  titleTop = "Impulsa tu negocio",
  titleBottom = "con soluciones digitales efectivas.",
  subtitle = "Diseñamos webs que venden, estrategias que convierten.",
  buttonText = "Contáctanos",
  onButtonClick = () => { },
  height = "h-[360px] md:h-[470px]",
  showButton = true

}) {
  return (
    <section className={`relative w-full ${height} overflow-hidden bg-[#0a0a0a] flex items-center justify-center`}>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${img || "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1771539647/descarga_ip1yg8.jpg"})`,

          backgroundPosition: "center 70%",


        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>


      <div className="absolute bottom-0 left-0 w-full h-[130px] pointer-events-none">
        <svg
          viewBox="0 0 1400 180"
          className="absolute bottom-0 w-full h-full opacity-70"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <linearGradient id="line-grad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#00f2ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#00f2ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#00f2ff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[...Array(12)].map((_, i) => {
            const xBase = i * 120 + 50;
            const path = `M ${xBase} 180 V ${140 - (i % 3) * 20} H ${xBase + 40} V ${40 + (i % 2) * 30}`;

            return (
              <g key={i}>
                <path
                  d={path}
                  fill="none"
                  stroke="#00f2ff"
                  strokeWidth="0.5"
                  className="opacity-20"
                />

                <motion.path
                  d={path}
                  fill="none"
                  stroke="url(#line-grad)"
                  strokeWidth="1.5"
                  filter="url(#neon-glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 1],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                />

                <motion.circle
                  cx={xBase + 40}
                  cy={40 + (i % 2) * 30}
                  r="2.5"
                  fill="#fff"
                  filter="url(#neon-glow)"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 1, 0.3],
                    boxShadow: ["0 0 5px #00f2ff", "0 0 15px #00f2ff", "0 0 5px #00f2ff"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4
                  }}
                />
              </g>
            );
          })}
        </svg>

        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#00f2ff]/30 to-transparent blur-xl"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center mt-20 flex flex-col items-center">

        <div className="max-w-3xl animate-fade-in-up">

          <h1 className="mb-3 mt-2 font-extrabold leading-[1.1] text-white tracking-tight">
            <span className="block text-2xl md:text-6xl lg:text-[30px]">
              {titleTop}
            </span>
            <span className="block mt-2 text-2xl md:text-5xl lg:text-[30px] text-white/90">
              {titleBottom}
            </span>
          </h1>

          <p className="max-w-xl mx-auto mb-12 text-[13px] md:text-[15px] font-medium leading-relaxed text-gray-300">
            {subtitle}
          </p>

          {showButton && (
            <div className="flex items-center justify-center gap-5 -mt-6">

              <RocketButtonProMax onClick={onButtonClick}>
                {buttonText}
              </RocketButtonProMax>

            </div>
          )}
        </div>
      </div>

    </section>
  );
}