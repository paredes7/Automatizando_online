
import Layout from '@/Layouts/MainLayout';
import Banner from '@/Components/welcome/Banner';
import { CodeRainEffect } from '@/Components/ButtonEfect/CodeRainEffect';
import Servicios from '@/Components/welcome/Servicios/Servicios';
import DataService from '@/Components/welcome/Servicios/DataService';

export default function Services({ auth }) {

    return (
        <Layout title="Servicios" auth={auth}>
            <Banner
                img="https://res.cloudinary.com/dcyx3nqj5/image/upload/v1771640879/6c76b409889af498e7718476dcdb7e82_a4ma0b.jpg"
                titleTop="Nuestros Servicios"
                titleBottom="No hacemos webs, creamos experiencias digitales"
                subtitle="Diseñamos y desarrollamos sitios web personalizados, optimizados para SEO y adaptados a tus necesidades comerciales."
                height="h-[360px] md:h-[440px] mt-9 "
                showButton={false}
                positionImage='center 1%'
                EffectComponent={CodeRainEffect}
            />

            <Servicios services={DataService}/>
        </Layout>
    );
}
