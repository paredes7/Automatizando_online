import { router } from '@inertiajs/react';
import StoreHeader from './StoreHeader';
import StoreCard from './StoreCard';
import Pagination from './Pagination';
import SectionHeader from '../TestimonialCarrousel/SectionHeader';
import "../../../../css/ProductCardEffects.css";

export default function TiendaShow({ products, filters }) {

    const productsList = products?.data || [];

    const performQuery = (newFilters) => {
        router.get(route('tienda.index'),
            { ...filters, ...newFilters },
            {
                preserveState: true, // Mantiene el scroll y el texto del input
                replace: true,       // No llena el historial del navegador al escribir
                preserveScroll: true // Evita que la página salte al inicio bruscamente
            }
        );
    };


    // Función para manejar el cambio de página
    const handlePageChange = (url) => {
        if (!url) return;
        router.visit(url, {
            preserveState: true,
            preserveScroll: false // Aquí sí queremos que suba al inicio de la tienda
        });
    };

    return (


        <div className="bg-[#030c1a] min-h-screen py-6 md:py-6 px-6">


            <div className="max-w-7xl mx-auto">

                <div className="mb-5 md:mb-6">
                    <SectionHeader
                        title="Explora Nuestra Tienda"
                        subtitle="Descubre una amplia gama de productos digitales diseñados para potenciar tu negocio. Desde automatizaciones hasta sistemas de trading e inteligencia artificial, tenemos todo lo que necesitas para llevar tu emprendimiento al siguiente nivel."
                        size='sm'
                    />
                </div>

                <StoreHeader
                    filters={filters}
                    onSearchChange={(val) => performQuery({ search: val })}
                    onSortChange={(val) => performQuery({ sort: val })}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 md:mb-8 mb-8">
                    {productsList.map(product => (
                        <StoreCard key={product.id} product={product} />
                    ))}
                </div>

                {productsList.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-xl font-medium">
                            No encontramos productos que coincidan con tu búsqueda.
                        </p>
                    </div>
                )}

                {products?.links && (
                    <Pagination
                        links={products.links}
                        onPageChange={handlePageChange}
                    />
                )}
            </div>
        </div>
    );
}