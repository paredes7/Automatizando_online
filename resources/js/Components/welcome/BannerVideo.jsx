import { useState, useEffect, useMemo } from "react";

export default function BannerVideo(
    { video,
        titleTop = "Impulsa tu negocio",
        titleBottom = "con soluciones digitales efectivas.",
        subtitle = "",
        buttonText = "Contáctanos",
        onButtonClick = () => { },
        height = "h-[360px] md:h-[470px]",
        showButton = true,
        positionImage = "center 70%",
        ButtonComponent = null

    }) {
    return (
        <section className={`relative w-full ${height} overflow-hidden bg-[#0a0a0a] flex items-center justify-center`}>

            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ objectPosition: positionImage }}
                >
                    <source src={video} type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[0px]"></div>
            </div>


            <div className="container relative z-10 px-6 mx-auto text-center -mt-4 flex flex-col items-center">

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