import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import CarouselArrow from "./CarrouselArrow";

export default function TestimonialCarousel({ testimonials, autoPlay = true, interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1 === testimonials.length ? 0 : prev + 1));
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(nextStep, interval);
    return () => clearInterval(timer);
  }, [index, autoPlay, interval]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full h-[450px] md:h-[400px] flex items-center justify-center bg-[#030c1a]  py-24 px-4">
      <div className="relative w-full max-w-5xl mx-auto">

        <div className="relative h-[480px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={`bg-${index}`}
              className="absolute inset-0 bg-cover bg-center brightness-[0.4] scale-105" 
              style={{ backgroundImage: `url(${testimonials[index].bgImage})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>

          <div className=" inset-0 bg-black/70 backdrop-blur-md" />

          <CarouselArrow
            direction="left"
            onClick={prevStep}
          />

          <CarouselArrow
            direction="right"
            onClick={nextStep}
          />

          <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 md:p-16">


            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center max-w-2xl"
              >
                <FaQuoteLeft className="text-yellow-500/30 text-5xl md:text-6xl mb-6 drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]" />
                <p className="text-lg md:text-2xl text-white leading-relaxed italic mb-8 px-4 font-medium [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)]">                  {testimonials[index].message}
                </p>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-yellow-500/60 p-1 mb-4 shadow-[0_0_20px_rgba(234,179,8,0.2)]">                    <img
                    src={testimonials[index].avatar}
                    alt={testimonials[index].author}
                    className="w-full h-full rounded-full object-cover"
                  />
                  </div>

                  <h4 className="text-white font-black tracking-[0.25em] uppercase text-sm md:text-base drop-shadow-md">
                    {testimonials[index].author}
                  </h4>

                  <div className="w-8 h-[1px] bg-yellow-500 my-2" />

                  <span className="text-yellow-400 font-bold text-[11px] uppercase tracking-[0.3em] drop-shadow-sm">
                    {testimonials[index].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>


          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-1 rounded-full transition-all duration-500 ${i === index
                  ? "w-6 bg-yellow-500"
                  : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}