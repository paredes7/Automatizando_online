import { motion } from "framer-motion";
import philosophyData from "./PhilosophyData";
import SectionHeader from "../TestimonialCarrousel/SectionHeader";
import "../../../../css/PhilosophyCards.css";

export default function PhilosophySection() {
    const handleMouseMove = (e) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        currentTarget.style.setProperty("--mouse-x", `${x}px`);
        currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <section className="relative bg-[#030c1a] py-5 px-4 md:px-6 overflow-hidden">
            <SectionHeader
                title="Nuestra Filosofía"
                subtitle="Transformamos la complejidad en simplicidad mediante ingeniería de software de alto nivel."
                size="sm"
            />

            <div className="w-full md:w-7xl mx-auto relative z-10 mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                {philosophyData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            onMouseMove={handleMouseMove}
                            className="card-container group rounded-[2rem] p-[2px]"
                        >

                            <div className="border-beam" />

                            <div className="glass-layer relative h-full w-full p-4 rounded-[1.9rem] flex flex-col items-center text-center z-10">

                                <div className="inner-glow" />

                                <div className="card-shine" />

                                <motion.span
                                    initial={{ y: -40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 0.08 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                     className="card-number pointer-events-none select-none">
                                    {String(index + 1).padStart(2, "0")}
                                </motion.span>

                                <div className="relative mb-4">
                                    <div className={`absolute inset-0 blur-3xl opacity-30 bg-gradient-to-br ${item.color}`} />
                                    <div className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} relative inline-flex bg-[#0a1a35] border border-white/10 text-3xl shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                        <Icon className="w-8 h-8 text-white stroke-[1.5]" />
                                    </div>
                                </div>

                                <h3 className="text-lg font-black text-white tracking-[0.15em] uppercase italic">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed text-lg font-light italic">
                                    {item.text}
                                </p>

                                <div className="relative mt-4 w-24 h-[3px] bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 1.5, delay: 1 }}
                                        className={`h-full bg-gradient-to-r ${item.color}`}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}