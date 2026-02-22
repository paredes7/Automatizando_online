
import Layout from '@/Layouts/MainLayout';
import Banner from '@/Components/welcome/Banner';
import { LegalRainEffect } from '@/Components/ButtonEfect/LegalRainEffect';
import TestimonialPage from '@/Components/welcome/TestimonialCarrousel/TestimonialPage';

export default function Nosotros({ auth }) {

    return (
        <Layout title="Nosotros" auth={auth}>
            <Banner
                img="https://res.cloudinary.com/dcyx3nqj5/image/upload/v1771713700/Beautiful_New_York_s_Sunset_ihosab.jpg"
                titleTop="Sobre Nosotros..."
                //   titleBottom="Protegiendo tu información con transparencia y compromiso."
                subtitle="Somos una empresa especializada en soluciones tecnológicas a medida, desde automatizaciones hasta sistemas de trading e inteligencia artificial."
                height="h-[360px] md:h-[440px] mt-9 "
                showButton={false}
                positionImage='center 43%'
                showEffect={true}
                EffectComponent={LegalRainEffect}
            />

            <TestimonialPage/>

        </Layout>
    );
}
