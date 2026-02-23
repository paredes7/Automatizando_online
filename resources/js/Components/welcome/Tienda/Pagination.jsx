import React from 'react';

export default function Pagination({ links, onPageChange }) {
    // Si solo hay una página, no mostramos nada
    if (links.length <= 3) return null;
    console.log("Links de paginación recibidos:", links);

    return (
        <div className="flex flex-wrap justify-center gap-2 mt-12 pb-10">
            {links.map((link, index) => {
                // Laravel devuelve etiquetas como "&laquo; Previous" o "Next &raquo;"
                // y los números de página.
                const isPageNumber = !isNaN(link.label);
                
                return (
                    <button
                        key={index}
                        disabled={!link.url || link.active}
                        onClick={() => onPageChange(link.url)}
                        className={`
                            px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300
                            ${link.active 
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                                : 'bg-[#051124] text-gray-400 hover:bg-[#0a1d3a] hover:text-white border border-white/5'}
                            ${!link.url ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer active:scale-95'}
                        `}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                );
            })}
        </div>
    );
}