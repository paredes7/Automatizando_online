import { router } from '@inertiajs/react';
import StoreHeader from './StoreHeader';
import StoreCard from './StoreCard';
import { useState } from 'react';
import { productService } from '@/Services/productService';
import Pagination from './Pagination';

export default function TiendaShow({ initialProducts, initialFilters }) {
    // Manejamos los productos y filtros en el estado local para mayor velocidad
    const [products, setProducts] = useState(initialProducts);
    const [filters, setFilters] = useState(initialFilters);
    const [loading, setLoading] = useState(false);

    // Definición correcta: extraemos el array del objeto paginado de Laravel
    const productsList = products?.data || [];

    const updateFilters = async (newFilters) => {
        const updatedFilters = { ...filters, ...newFilters };
        setFilters(updatedFilters);
        setLoading(true);

        try {
            // Petición asíncrona mediante el servicio de Axios
            const data = await productService.getAll(updatedFilters);
            setProducts(data);
        } catch (error) {
            console.error("Error al actualizar productos:", error);
        } finally {
            setLoading(false);
        }
    };


    // Función para manejar el cambio de página
    const handlePageChange = async (url) => {
        if (!url) return;

        setLoading(true);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Feedback de usuario

        try {
            // Usamos axios para pedir la URL específica de la página (ej: /tienda/json?page=2)
            const response = await axios.get(url, {
                params: filters // Mantenemos búsqueda y orden actuales
            });
            setProducts(response.data);
        } catch (error) {
            console.error("Error al paginar:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#030c1a] min-h-screen py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <StoreHeader
                    filters={filters}
                    onSearchChange={(val) => updateFilters({ search: val })}
                    onSortChange={(val) => updateFilters({ sort: val })}
                />

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {productsList.map(product => (
                                <StoreCard key={product.id} product={product} />
                            ))}
                        </div>

                        {/* CORRECCIÓN: Usamos productsList.length directamente */}
                        {productsList.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-gray-400 text-xl font-medium">
                                    No encontramos productos que coincidan con tu búsqueda.
                                </p>
                            </div>
                        )}

                        {/* Paginación */}
                        {products?.links && (
                            <Pagination links={products.links} onPageChange={handlePageChange} />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}