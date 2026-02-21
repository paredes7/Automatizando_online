
import Layout from '@/Layouts/MainLayout';
import TermsContent from '@/Components/welcome/Politicas/TermsContent';
import Banner from '@/Components/welcome/Banner';

export default function Condiciones({ auth }) {

    return (
        <Layout title="Condiciones" auth={auth}>
            <Banner
                img="https://res.cloudinary.com/dcyx3nqj5/image/upload/v1771640879/a452eb31c39335b6d5b39fe9a8e0989e_tcha4m.jpg"
                titleTop="Condiciones de"
                titleBottom="Nuestros Servicios"
                subtitle="El marco legal que garantiza la calidad de su proyecto digital."
                  height="h-[330px] md:h-[460px] mt-3"
                showButton={false} // Ocultamos el botón para este caso
                positionImage='center 60%'
            />
            <TermsContent />


        </Layout>
    );
}
