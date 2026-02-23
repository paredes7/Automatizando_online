import { Search, Filter } from 'lucide-react';

export default function StoreHeader({ filters, onSearchChange, onSortChange }) {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            {/* Buscador Estilo Glassmorphism */}
            <div className="relative w-full md:w-1/2 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={20} />
                <input 
                    type="text"
                    placeholder="Busca servicios web, trading o automatizaciones..."
                    defaultValue={filters.search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full bg-[#051124] border border-white/10 text-white pl-12 pr-4 py-3 rounded-2xl outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
            </div>

            {/* Selector de Ordenamiento */}
            <div className="flex items-center gap-3 w-full md:w-auto">
                <Filter size={18} className="text-gray-400" />
                <select 
                    onChange={(e) => onSortChange(e.target.value)}
                    className="bg-[#051124] text-white border border-white/10 rounded-xl px-4 py-2 outline-none cursor-pointer hover:border-white/20 transition-colors"
                >
                    <option value="latest">Novedades</option>
                    <option value="price_asc">Precio: Menor a Mayor</option>
                    <option value="price_desc">Precio: Mayor a Menor</option>
                    <option value="name_asc">Nombre: A-Z</option>
                </select>
            </div>
        </div>
    );
}