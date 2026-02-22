import FeatureSection from "./FeatureSection";

export default function Servicios({services, spaceVertical}) {


  return (
    <section className="bg-[#030c1a]">
      {services.map((service, index) => (
        <FeatureSection
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
          reverse={service.reverse}
          spaceVertical={spaceVertical}
        />
      ))}
    </section>
  );
}