import Products from '@/Components/welcome/Products';
import Layout from '@/Layouts/MainLayout';
import Videos from '@/Components/welcome/Videos';
import Banner from '@/Components/welcome/Banner';
import BannerVideo from '@/Components/welcome/BannerVideo';
import Servicios from '@/Components/welcome/Servicios/Servicios';
import { CircuitEffect } from '@/Components/ButtonEfect/CircuitEffect';
import RocketButtonProMax from '@/Components/ButtonEfect/RockerButtonProMax';
import RocketButton from '@/Components/ButtonEfect/RockerButton';
import TestimonialPage from '@/Components/welcome/TestimonialCarrousel/TestimonialPage';
import ServicesInicio from '@/Components/welcome/Servicios/ServicesInicio';

export default function Welcome({ auth, categories, search, page, hasMore }) {

    return (
        <Layout title="Automatizando | Inicio" auth={auth}>
            <Banner
                titleTop="Impulsa tu negocio"
                titleBottom="con soluciones digitales efectivas."
                subtitle="Diseñamos webs que venden, estrategias que convierten."
                height="h-[390px] md:h-[410px]"
                buttonText="Contactanos"
                onButtonClick={() => window.location.href = '/Politicas'}
                EffectComponent={CircuitEffect}
                ButtonComponent={RocketButton}
                positionImage='center 62%'
            />

            <Servicios services={ServicesInicio} spaceVertical="py-10"/>

            <BannerVideo
                video="https://res.cloudinary.com/dcyx3nqj5/video/upload/v1771695266/PinDown.io__Celebrityfactswebsite_1771695198_xedylh.mp4"
                titleTop="Tu próximo cliente a un click."
                titleBottom="Estás listo?"
                buttonText="Empieza tu proyecto ahora"
                height="h-[360px] md:h-[440px]"
                onButtonClick={() => window.location.href = '/Servicios'}
                ButtonComponent={RocketButtonProMax}
            />

             <TestimonialPage/>
          
            <Products
                categories={categories}
                search={search}
                page={page}
                hasMore={hasMore}
            />
        </Layout>
    );
}
