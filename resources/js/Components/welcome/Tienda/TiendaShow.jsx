import { router } from '@inertiajs/react';
import StoreHeader from './StoreHeader';
import StoreCard from './StoreCard';
import Pagination from './Pagination';

export default function TiendaShow({ products, filters }) {

    // Definición correcta: extraemos el array del objeto paginado de Laravel
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
        // Al usar router.get sobre una URL de Laravel, Inertia ya sabe qué hacer
        router.visit(url, {
            preserveState: true,
            preserveScroll: false // Aquí sí queremos que suba al inicio de la tienda
        });
    };

    return (
        <div className="bg-[#030c1a] min-h-screen py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <StoreHeader
                    filters={filters}
                    onSearchChange={(val) => performQuery({ search: val })}
                    onSortChange={(val) => performQuery({ sort: val })}
                />

                {/* 🛡️ CORRECCIÓN: Eliminamos la referencia a 'loading' que causaba el error */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {productsList.map(product => (
                        <StoreCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Mensaje de no resultados */}
                {productsList.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-xl font-medium">
                            No encontramos productos que coincidan con tu búsqueda.
                        </p>
                    </div>
                )}

                {/* Paginación nativa vinculada a los links de Laravel */}
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