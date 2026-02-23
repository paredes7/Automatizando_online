import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function SortDropdown({ currentSort, onSortChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const options = [
        { value: 'latest', label: 'Novedades' },
        { value: 'price_asc', label: 'Precio: Menor a Mayor' },
        { value: 'price_desc', label: 'Precio: Mayor a Menor' },
        { value: 'name_asc', label: 'Nombre: A-Z' },
    ];

    const currentLabel =
        options.find(opt => opt.value === currentSort)?.label || 'Novedades';

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Botón principal */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    group flex items-center justify-between gap-3
                    px-6 py-3.5 rounded-2xl
                    bg-gradient-to-br from-[#0a1d3a] to-[#051124]
                    border border-white/10
                    text-white w-full sm:min-w-[240px]
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10
                    active:scale-[0.98]
                    ${isOpen ? 'ring-4 ring-blue-500/10 border-blue-500/50 shadow-lg shadow-blue-500/20' : ''}
                `}
            >
                <span className="text-sm font-semibold tracking-wide">
                    {currentLabel}
                </span>

                <ChevronDown
                    size={18}
                    className={`
                        transition-all duration-300
                        ${isOpen ? 'rotate-180 text-blue-400' : 'text-gray-400 group-hover:text-white'}
                    `}
                />
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div
                    className="
                        absolute right-0 mt-4 w-full min-w-[260px]
                        z-50 overflow-hidden
                        rounded-3xl
                        bg-gradient-to-br from-[#0b1f3f]/95 to-[#071427]/95
                        backdrop-blur-2xl
                        border border-white/10
                        shadow-2xl shadow-black/40
                        animate-in fade-in zoom-in-95 duration-200
                    "
                >
                    <div className="py-3">
                        {options.map((option) => {
                            const isActive = currentSort === option.value;

                            return (
                                <button
                                    key={option.value}
                                    onClick={() => {
                                        onSortChange(option.value);
                                        setIsOpen(false);
                                    }}
                                    className={`
                                        relative w-full flex items-center justify-between
                                        px-6 py-3 text-sm
                                        transition-all duration-200
                                        ${isActive
                                            ? 'text-blue-400 font-semibold'
                                            : 'text-gray-300 hover:text-white'}
                                    `}
                                >
                                    {/* Fondo animado activo */}
                                    {isActive && (
                                        <span className="absolute inset-0 bg-blue-600/10 rounded-xl" />
                                    )}

                                    <span className="relative z-10">
                                        {option.label}
                                    </span>

                                    {isActive && (
                                        <Check
                                            size={16}
                                            className="relative z-10 text-blue-400"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}