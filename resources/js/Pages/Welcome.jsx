import Products from '@/Components/welcome/Products';
import Layout from '@/Layouts/MainLayout';
import Videos from '@/Components/welcome/Videos';
import Banner from '@/Components/welcome/Banner';
import Services from '@/Components/welcome/Services';
import RocketButtonV4 from '@/Components/ButtonEfect/RockerButton';

export default function Welcome({ auth, categories, search, page, hasMore }) {

    return (
        <Layout title="Automatizando | Inicio" auth={auth}>
            <Banner
                titleTop="Impulsa tu negocio"
                titleBottom="con soluciones digitales efectivas."
                subtitle="Diseñamos webs que venden, estrategias que convierten."
                height="h-[360px] md:h-[470px]"
                buttonText="Contactanos"
                onButtonClick={() => window.location.href = '/Politicas'}
            />

            <Services />
            <Products
                categories={categories}
                search={search}
                page={page}
                hasMore={hasMore}
            />
        </Layout>
    );
}
