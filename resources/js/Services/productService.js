import axios from 'axios';

/**
 * Servicio encargado de la comunicación con el catálogo de productos
 */
export const productService = {
    /**
     * Obtiene los productos filtrados y paginados
     * @param {Object} params - Filtros como search, sort, min_price, etc.
     */
    async getAll(params = {}) {
        try {
            // Usamos la URL que definiste en tus rutas web para la tienda
            const response = await axios.get('/tienda/json', { params });
            return response.data;
        } catch (error) {
            console.error("Error al obtener productos:", error);
            throw error;
        }
    }
};