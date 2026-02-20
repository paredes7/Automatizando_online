
import Layout from '@/Layouts/MainLayout';
import TermsContent from '@/Components/welcome/Politicas/TermsContent';
import Banner from '@/Components/welcome/Banner';

export default function Condiciones({ auth, categories, search, page, hasMore }) {

    return (
        <Layout title="Condiciones" auth={auth}>
            <Banner
                titleTop="Condiciones de"
                titleBottom="Nuestros Servicios"
                subtitle="El marco legal que garantiza la calidad de su proyecto digital."
                showButton={false} // Ocultamos el botón para este caso
            />
            <TermsContent />


        </Layout>
    );
}
