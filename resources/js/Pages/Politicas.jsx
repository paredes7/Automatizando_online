
import Layout from '@/Layouts/MainLayout';
import PrivacyContent from '@/Components/welcome/Politicas/PrivacyContent';
import Banner from '@/Components/welcome/Banner';

export default function Politicas({ auth, categories, search, page, hasMore }) {

    return (
        <Layout title="Políticas" auth={auth}>
            <Banner
                titleTop="Políticas de Privacidad"
                titleBottom="Protegiendo tu información con transparencia y compromiso."
                subtitle="Conoce cómo recopilamos, usamos y protegemos tus datos personales."
                height="h-[360px] md:h-[440px] mt-9 "
                showButton={false}
            />
            <PrivacyContent />

        </Layout>
    );
}
