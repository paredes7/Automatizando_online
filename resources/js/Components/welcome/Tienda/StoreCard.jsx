import { ShoppingCart, Eye } from 'lucide-react';

export default function StoreCard({ product }) {
    const mainImage = product.multimedia?.[0]?.url || "/placeholder.jpg";

    return (
        <div className="group bg-[#051124] border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-xl">
            {/* Contenedor de Imagen */}
            <div className="relative aspect-square overflow-hidden">
                <img 
                    src={mainImage} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="bg-white text-black p-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                        <ShoppingCart size={20} />
                    </button>
                    <button className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/40 transition-colors">
                        <Eye size={20} />
                    </button>
                </div>
            </div>

            {/* Información del Producto */}
            <div className="p-6">
                <span className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2 block">
                    {product.category?.name}
                </span>
                <h3 className="text-white text-xl font-bold mb-3 truncate">
                    {product.name}
                </h3>
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-gray-500 text-xs line-through mb-1">
                            S/ {(product.price * 1.2).toFixed(2)}
                        </p>
                        <p className="text-white text-2xl font-black">
                            S/ {product.price}
                        </p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all transform active:scale-95">
                        Añadir
                    </button>
                </div>
            </div>
        </div>
    );
}