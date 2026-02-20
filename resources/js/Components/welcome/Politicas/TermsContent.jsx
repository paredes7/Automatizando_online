import { motion } from "framer-motion";

export default function TermsContent() {
  const sections = [
    {
      id: "01",
      title: "Aceptación de los Términos",
      content: "Al contratar nuestros servicios de desarrollo web, usted acepta cumplir con estos términos. Estos rigen la relación entre el cliente y nuestra agencia para asegurar un flujo de trabajo transparente y profesional."
    },
    {
      id: "02",
      title: "Propiedad Intelectual",
      content: "Una vez liquidado el pago total del proyecto, el código fuente y los activos visuales pasan a ser propiedad del cliente. Nos reservamos el derecho de mostrar el proyecto en nuestro portafolio, salvo acuerdo de confidencialidad previo."
    },
    {
      id: "03",
      title: "Proceso de Desarrollo y Cambios",
      content: "Trabajamos mediante hitos definidos. Cualquier cambio fuera del alcance inicial (Scope) después de la aprobación de los requerimientos podría incurrir en costos adicionales y ajustes en los tiempos de entrega."
    },
    {
      id: "04",
      title: "Garantía y Soporte",
      content: "Ofrecemos una garantía de 30 días posteriores al lanzamiento para corregir cualquier error técnico derivado del código original. El soporte para nuevas funcionalidades se cotizará de manera independiente."
    },
    {
      id: "05",
      title: "Limitación de Responsabilidad",
      content: "No nos hacemos responsables por pérdidas económicas derivadas del mal uso del software por parte del cliente, ataques externos (hacking) una vez entregado el sitio, o caídas del servicio de hosting de terceros."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Columna Izquierda: Título Fijo en Desktop */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Términos y <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                  Condiciones
                </span>
              </h2>
              <div className="mt-6 h-1 w-20 bg-blue-600 rounded-full"></div>
              <p className="mt-8 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Nuestros términos están diseñados para proteger tanto su inversión como nuestra integridad creativa. Por favor, lea detenidamente cada sección.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Secciones de Contenido */}
          <div className="lg:col-span-2 space-y-12">
            {sections.map((section, index) => (
              <motion.div 
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative pl-16"
              >
                {/* Indicador de número flotante */}
                <span className="absolute left-0 top-0 text-5xl font-black text-gray-100 dark:text-white/5 group-hover:text-blue-600/10 transition-colors">
                  {section.id}
                </span>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Informativo */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-gray-100 dark:border-white/5 text-center"
        >
          <p className="text-gray-500 dark:text-gray-500 text-sm italic">
            El uso continuado de nuestros servicios tras cualquier modificación en estos términos constituye la aceptación de los mismos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

