import { motion } from "framer-motion";

export default function PrivacyContent() {
    const sections = [
        {
            title: "1. Información que Recopilamos",
            content: "Recopilamos información personal que usted nos proporciona directamente, como nombre, correo electrónico, número de contacto, empresa y detalles del proyecto. Esta información se obtiene a través de formularios de contacto, contratación de servicios o comunicación directa con nuestro equipo. Asimismo, podemos recopilar datos técnicos como dirección IP, tipo de navegador, dispositivo y comportamiento de navegación dentro de nuestro sitio web."
        },
        {
            title: "2. Uso de la Información",
            content: "Utilizamos la información recopilada para brindar, mejorar y personalizar nuestros servicios de desarrollo web, diseño de sistemas y soluciones digitales. Esto incluye la gestión de proyectos, soporte técnico, atención al cliente, análisis de rendimiento y envío de comunicaciones relacionadas con nuestros servicios. En ningún caso utilizamos sus datos para fines distintos sin su consentimiento."
        },
        {
            title: "3. Base Legal para el Tratamiento",
            content: "El tratamiento de sus datos personales se realiza bajo las siguientes bases legales: ejecución de un contrato (prestación de servicios), consentimiento del usuario y cumplimiento de obligaciones legales. Nos comprometemos a tratar su información de manera transparente, legítima y proporcional."
        },
        {
            title: "4. Protección y Seguridad de Datos",
            content: "Implementamos medidas de seguridad técnicas y organizativas para proteger su información, incluyendo cifrado SSL, almacenamiento seguro y control de accesos. Aunque aplicamos altos estándares de seguridad, ningún sistema es completamente invulnerable, por lo que no podemos garantizar seguridad absoluta frente a amenazas externas."
        },
        {
            title: "5. Compartición de Datos",
            content: "No vendemos ni compartimos su información personal con terceros, excepto cuando sea necesario para la prestación del servicio (por ejemplo, proveedores de hosting, herramientas de desarrollo o servicios en la nube) o cuando la ley lo requiera. Todos nuestros proveedores cumplen con estándares de protección de datos."
        },
        {
            title: "6. Cookies y Tecnologías de Seguimiento",
            content: "Nuestro sitio web utiliza cookies y tecnologías similares para mejorar la experiencia del usuario, analizar el tráfico y optimizar el rendimiento del sitio. Usted puede configurar su navegador para rechazar las cookies; sin embargo, algunas funcionalidades podrían verse afectadas."
        },
        {
            title: "7. Derechos del Usuario",
            content: "Usted tiene derecho a acceder, rectificar, actualizar o eliminar sus datos personales, así como a limitar u oponerse a su tratamiento. También puede solicitar la portabilidad de sus datos. Para ejercer estos derechos, puede contactarnos a través de nuestros canales oficiales."
        },
        {
            title: "8. Retención de Datos",
            content: "Conservamos su información personal únicamente durante el tiempo necesario para cumplir con los fines descritos en esta política o mientras exista una relación comercial activa. Posteriormente, los datos serán eliminados o anonimizados de forma segura."
        },
        {
            title: "9. Servicios de Terceros",
            content: "Nuestro sitio puede contener enlaces o integraciones con servicios de terceros (como plataformas de pago, analítica o APIs externas). No nos hacemos responsables de las políticas de privacidad de dichos servicios, por lo que recomendamos revisarlas de forma independiente."
        },
        {
            title: "10. Modificaciones a la Política",
            content: "Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento para adaptarla a cambios legales, técnicos o de negocio. Las modificaciones serán publicadas en esta misma página con su respectiva fecha de actualización."
        }
    ];
    return (
        <section className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-[#111] p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-white/5"
                >
                    <header className="mb-12 border-b border-gray-100 dark:border-white/10 pb-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Políticas de Privacidad
                        </h2>
                    </header>

                    <div className="space-y-10">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-semibold text-blue-600 dark:text-cyan-400 mb-3">
                                    {section.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                                    {section.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <footer className="mt-16 p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-800/20">
                        <p className="text-blue-800 dark:text-blue-300 text-sm text-center">
                            Para consultas legales o sobre el uso de sus datos, contáctenos en{" "}
                            <strong>https://automatizando.online/</strong> o a través de nuestros canales oficiales.
                        </p>
                    </footer>
                </motion.div>
            </div>
        </section>
    );
};

