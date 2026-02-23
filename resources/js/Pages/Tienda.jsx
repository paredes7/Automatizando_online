
import Layout from '@/Layouts/MainLayout';
import Banner from '@/Components/welcome/Banner';
import { LegalRainEffect } from '@/Components/ButtonEfect/LegalRainEffect';
import TiendaShow from '@/Components/welcome/Tienda/TiendaShow';

export default function Tienda({ auth, products, filters }) {

    return (
        <Layout title="Tienda" auth={auth}>
            <Banner
                img="https://res.cloudinary.com/dcyx3nqj5/image/upload/v1771822398/E_Commerce_Taobao_Food_Promotion_Banner_E_Commerce_Taobao_Summer_Background_Image_And_Wallpaper_for_Free_Download_wtqjmw.jpg"
                titleTop="Nuestra Tienda..."
                subtitle="Explora nuestra tienda de productos digitales, desde automatizaciones hasta sistemas de trading e inteligencia artificial, diseñados para transformar tu negocio."
                height="h-[360px] md:h-[440px] mt-9 "
                showButton={false}
                positionImage='center 43%'
                showEffect={true}
                EffectComponent={LegalRainEffect}
            />

            <TiendaShow products={products} filters={filters} />


        </Layout>
    );
}
