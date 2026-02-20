import Products from '@/Components/welcome/Products';
import Layout from '@/Layouts/MainLayout';
import Videos from '@/Components/welcome/Videos';
import Banner from '@/Components/welcome/Banner';
import Services from '@/Components/welcome/Services';

export default function Welcome({ auth, categories, search, page, hasMore }) {

    return (
        <Layout title="Maro|Inicio" auth={auth}>
            <Banner
                titleTop="Impulsa tu negocio"
                titleBottom="con soluciones digitales efectivas."
                subtitle="Diseñamos webs que venden, estrategias que convierten."
                buttonText="Contactanos"
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
