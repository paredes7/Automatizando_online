import TestimonialCarousel from "./TestimonialCarousel";
import dataTestimonials from "./DataTestimonials";
import SectionHeader from "./SectionHeader";

export default function TestimonialPage() {
    return (
        <>
            <SectionHeader
                className="py-7 "
                title="Casos de Éxito"
                subtitle="Lo que nuestros clientes dicen sobre la transformación digital de sus negocios."
                size="sm"
            />
            <TestimonialCarousel testimonials={dataTestimonials} />
        </>

    );
}