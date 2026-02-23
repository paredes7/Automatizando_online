import { Search, Filter } from 'lucide-react';
import SortDropdown from './SortDropdown';
import '../../../../css/search-animated.css'

export default function StoreHeader({ filters, onSearchChange, onSortChange }) {
    const particles = [
        { id: 1, type: "magnifier", delay: 0 },
        { id: 2, type: "feather", delay: 1.2 },
        { id: 3, type: "magnifier", delay: 2.2 },
        { id: 4, type: "feather", delay: 3 }
    ];
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-7 md:mb-8">
            {/* Buscador Estilo Glassmorphism */}
            <div className="relative w-full md:w-1/2 group search-wrapper">
                <Search className="main-search-icon text-gray-400 transition-all" size={20} />

                <input
                    type="text"
                    placeholder="Busca servicios web, trading o automatizaciones..."
                    defaultValue={filters.search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full bg-[#051124] border border-white/10 text-white pl-12 pr-4 py-3 rounded-2xl outline-none transition-all" />

                <div className="magnifier-particles">
                    {particles.map((item) => (
                        <div
                            key={item.id}
                            className="particle"
                            style={{ animationDelay: `${item.delay}s` }}
                        >
                            {item.type === "magnifier" ? (
                                <svg viewBox="0 0 24 24">
                                    <circle cx="11" cy="11" r="7" />
                                    <line
                                        x1="16.65"
                                        y1="16.65"
                                        x2="21"
                                        y2="21"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24">
                                    <path d="M20 2C12 4 4 12 2 20c8-2 16-10 18-18z" />
                                </svg>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Selector de Ordenamiento */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                <div className="flex items-center justify-center sm:justify-start gap-2 
                text-gray-400 bg-white/5 px-3 py-3 rounded-xl 
                border border-white/5 w-full sm:w-auto">
                    <Filter size={16} />
                    <span className="text-xs font-bold uppercase tracking-widest">Ordenar</span>
                </div>

                <SortDropdown
                    currentSort={filters.sort || 'latest'}
                    onSortChange={onSortChange}
                />
            </div>
        </div>
    );
}