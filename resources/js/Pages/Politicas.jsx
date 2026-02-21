
import Layout from '@/Layouts/MainLayout';
import PrivacyContent from '@/Components/welcome/Politicas/PrivacyContent';
import Banner from '@/Components/welcome/Banner';
import { LegalRainEffect } from '@/Components/ButtonEfect/LegalRainEffect';

export default function Politicas({ auth }) {

    return (
        <Layout title="Políticas" auth={auth}>
            <Banner
                img="https://res.cloudinary.com/dcyx3nqj5/image/upload/v1771640878/dee8cd2bd6d0741f047029ef11dcf6e7_yxncgb.jpg"
                titleTop="Políticas de Privacidad"
                titleBottom="Protegiendo tu información con transparencia y compromiso."
                subtitle="Conoce cómo recopilamos, usamos y protegemos tus datos personales."
                height="h-[360px] md:h-[440px] mt-9 "
                showButton={false}
                positionImage='center 43%'
                showEffect={true}
                EffectComponent={LegalRainEffect}
            />
            <PrivacyContent />

        </Layout>
    );
}
