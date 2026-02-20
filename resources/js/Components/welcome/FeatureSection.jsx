import { motion } from "framer-motion";

export default function FeatureSection({ title, description, image, reverse = false }){
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-10 py-16 px-6 md:px-12 max-w-7xl mx-auto`}>
      
      {/* Contenedor de Imagen */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative group">
          {/* Sutil resplandor de fondo para dar profundidad */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-lg group-hover:blur-xl transition duration-500"></div>
          <img 
            src={image} 
            alt={title} 
            className="relative rounded-2xl shadow-2xl object-cover w-full max-w-[500px] h-auto transform transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </motion.div>

      {/* Contenedor de Texto */}
      <motion.div 
        className="w-full md:w-1/2 space-y-5"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            {title}
          </h2>
        </div>
        
        <p className="text-lg text-gray-600 leading-relaxed font-light">
          {description}
        </p>
        
        {/* Opcional: Botón de acción */}
        <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2 group">
          Saber más 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </motion.div>
    </div>
  );
};

