import { motion } from "framer-motion";

export default function FeatureSection(
  { title,
    description,
    image,
    reverse = false,
    spaceVertical = "py-5",
  }) {
  return (
    <div
      className={`flex flex-col 
  ${reverse ? "md:flex-row-reverse" : "md:flex-row"} 
  items-center justify-between gap-3 md:gap-12 
  ${spaceVertical} 
  px-6 md:px-14 max-w-7xl mx-auto`}
    >
      <motion.div
        className="w-full md:w-[390px] flex justify-center"
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/20 rounded-2xl blur-lg group-hover:blur-xl transition duration-500"></div>
          {image && (
            <img
              src={image}
              alt={title}
              className="relative rounded-2xl shadow-2xl object-cover w-[385px] max-w-[500px] h-[240px] transform transition duration-500 group-hover:scale-[1.02]"
            />
          )}
        </div>
      </motion.div>

      <motion.div
        className="w-full space-y-2 "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-1.5 rounded-full">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-[26px] md:text-4xl font-bold tracking-tight 
bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 
bg-clip-text text-transparent">
            {title}
          </h2>
        </div>

        <div className="text-lg leading-relaxed font-light text-white/90">
          {Array.isArray(description) ? (
            <ul className="space-y-1 mt-2">
              {description.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  {item}
                </motion.li>
              ))}
            </ul>
          ) : (
            description && <p>{description}</p>
          )}
        </div>

      </motion.div>
    </div>
  );
};

