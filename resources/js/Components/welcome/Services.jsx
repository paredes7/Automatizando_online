import FeatureSection from "./FeatureSection";

export default function Services() {
  const services = [
    {
      title: "Tienda Online",
      description: "Lleva tu negocio al siguiente nivel con una tienda virtual profesional, accesible las 24 horas y pasarela de pagos segura. Completamente diseñada para vender más.",
      image: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1740000000/tienda_online.jpg",
      reverse: false // Imagen a la IZQUIERDA
    },
    {
      title: "Web Personalizada",
      description: "Creamos páginas web únicas adaptadas a tus necesidades, con diseño moderno, funcional y centrado en tus objetivos. Transformamos tu idea en realidad.",
      image: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1740000001/web_personalizada.jpg",
      reverse: true // Imagen a la DERECHA
    }
  ];

  return (
    <section className="bg-white">
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