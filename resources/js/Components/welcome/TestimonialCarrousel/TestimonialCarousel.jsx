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
    <section className="relative w-full h-[410px] md:h-[400px] flex items-center justify-center bg-[#030c1a]  py-24 px-4">
      <div className="relative w-full max-w-5xl mx-auto">

        <div className="relative h-[430px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
         
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={`bg-${index}`}
              className="absolute inset-0 bg-cover bg-center"
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
                <FaQuoteLeft className="text-yellow-500/20 text-6xl mb-6" />

                <p className="text-lg md:text-xl text-gray-200 leading-relaxed italic mb-10 px-4">
                  {testimonials[index].message}
                </p>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-yellow-500/40 p-1 mb-4">
                    <img
                      src={testimonials[index].avatar}
                      alt={testimonials[index].author}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  <h4 className="text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                    {testimonials[index].author}
                  </h4>

                  <div className="w-8 h-[1px] bg-yellow-500 my-2" />

                  <span className="text-yellow-400/80 text-[10px] uppercase tracking-widest">
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