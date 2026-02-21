import FeatureSection from "./FeatureSection";

export default function Services() {
  const services = [
    {
      title: "Beneficios de Automatizar",
      description: [
        "Sitios veloces y optimizados",
        "Acompañamiento personalizado",
        "Experiencia en distintos rubros",
        "Diseño 100% a medida"
      ],
      image: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1771539647/descarga_ip1yg8.jpg",
      reverse: false // Imagen a la IZQUIERDA
    },

    /**{
      title: "Tienda Online",
      // FORMATO: Párrafo normal
      description: "Lleva tu negocio al siguiente nivel con una tienda virtual profesional, accesible las 24 horas y pasarela de pagos segura.",
      image: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1771539647/tienda_online_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1.jpg",
      reverse: true
    },*/
  ];

  return (
    <section className="dark:bg-[#0a0a0a]">
      {services.map((service, index) => (
        <FeatureSection
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
          reverse={service.reverse}
        />
      ))}
    </section>
  );
}