import axios from 'axios';

export const productService = {
    async getAll(params = {}) {
        try {
            const response = await axios.get('/tienda/json', { 
                params,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest', // Indica que es una petición AJAX
                    'Accept': 'application/json'          // Indica que quieres JSON
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error al obtener productos:", error);
            throw error;
        }
    }
};