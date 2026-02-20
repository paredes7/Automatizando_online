
import Layout from '@/Layouts/MainLayout';
import PrivacyContent from '@/Components/welcome/Politicas/PrivacyContent';
import Banner from '@/Components/welcome/Banner';

export default function Politicas({ auth, categories, search, page, hasMore }) {

    return (
        <Layout title="Políticas" auth={auth}>
            <Banner
                titleTop="Políticas de Privacidad"
                titleBottom="Protegiendo tu información con transparencia y compromiso."
                subtitle="En Automatizando Online, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Nuestra política de privacidad detalla cómo recopilamos, usamos y protegemos tu información para brindarte una experiencia segura y confiable."
                showButton={false}
            />
            <PrivacyContent />

        </Layout>
    );
}
