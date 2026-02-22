import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

export default function Banner(
  { img,
    titleTop = "Impulsa tu negocio",
    titleBottom = "",
    subtitle = "",
    buttonText = "Contáctanos",
    onButtonClick = () => { },
    height = "h-[360px] md:h-[470px]",
    showButton = true,
    positionImage = "center 70%",
    showEffect = true,
    EffectComponent: Effect = null,
    ButtonComponent = null

  }) {
  return (
    <section className={`relative w-full ${height} overflow-hidden bg-[#0a0a0a] flex items-center justify-center`}>

      <div
        className="absolute inset-0 bg-cover bg-center  brightness-[0.8] bg-no-repeat"
        style={{
          backgroundImage: `url(${img || "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1771539647/descarga_ip1yg8.jpg"})`,

          backgroundPosition: positionImage,


        }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[0px]"></div>
      </div>

      {showEffect && Effect && <Effect />}

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

              <ButtonComponent onClick={onButtonClick}>
                {buttonText}
              </ButtonComponent>

            </div>
          )}
        </div>
      </div>

    </section>
  );
}