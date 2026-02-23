import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import SectionHeader from "../TestimonialCarrousel/SectionHeader";
import '../../../../css/ProductCardEffects.css';
import { Link } from "@inertiajs/react";

export default function ProductCarousel({ categories }) {
    const data = categories.data || categories;

    return (
        <div className="bg-[#030c1a]  py-3 md:py-6 space-y-6 md:space-y-10 overflow-hidden">
            {data.map((category) => (
                <CategorySlider key={category.id} category={category} />
            ))}
        </div>
    );
}

function CategorySlider({ category }) {
    const sliderRef = useRef(null);
    const speedRef = useRef(0.8); // 🔥 velocidad (ajústala
    const scrollAmountRef = useRef(0);

    const isDragging = useRef(false);
    const lastX = useRef(0);

    // 🔁 Animación de desplazamiento automático


    useEffect(() => {
        const slider = sliderRef.current;
        let animationFrame;

        const animate = () => {
            if (slider && !isDragging.current) {
                scrollAmountRef.current += speedRef.current;
                slider.scrollLeft = scrollAmountRef.current;

                if (scrollAmountRef.current >= slider.scrollWidth / 2) {
                    scrollAmountRef.current = 0;
                    slider.scrollLeft = 0;
                }
            }

            animationFrame = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrame);
    }, []);


    const handleTouchStart = (e) => {
        isDragging.current = true;
        lastX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        if (!isDragging.current) return;

        const currentX = e.touches[0].clientX;
        const delta = currentX - lastX.current;

        scrollAmountRef.current -= delta * 1;
        sliderRef.current.scrollLeft = scrollAmountRef.current;

        lastX.current = currentX;
    };

    const handleTouchEnd = () => {
        isDragging.current = false;
    };

    // 🔁 duplicamos productos para loop infinito
    const productsLoop = [...category.products, ...category.products];

    return (
        <section className="w-full">
            <div className="max-w-7xl mx-auto mb-2 md:mb-3">
                <SectionHeader
                    title={category.name}
                    subtitle={category.description}
                    align="center"
                    size="sm"
                />
            </div>

            <div
                ref={sliderRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="flex gap-1 md:gap-2 px-6 overflow-hidden cursor-grab active:cursor-grabbing select-none"
            >
                {productsLoop.map((product, index) => (
                    <a
                        key={`${product.id}-${index}`}
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-container rounded-[8rem] flex-none w-[250px] sm:w-[260px] md:w-[350px] aspect-[16/10]"    >

                        <div className="border-beam" />

                        <div className="glass-layer w-full h-full overflow-hidden group">

                            <img
                                src={product.multimedia?.[0]?.url || "/placeholder.jpg"}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                            <div className="absolute top-6 left-1/2 -translate-x-1/2">
                                <span className="text-white font-bold uppercase tracking-widest text-xs md:text-sm">
                                    {product.name}
                                </span>
                            </div>

                            <div className="absolute bottom-6 right-6 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <button className="bg-white text-black p-3 rounded-full hover:bg-lime-400 transition-colors">
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}