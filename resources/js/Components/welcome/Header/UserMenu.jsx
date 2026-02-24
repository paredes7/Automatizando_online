import React, { useState, useRef, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react'; // Importamos usePage
import { User, LogIn, UserPlus, LifeBuoy, LogOut, CircleHelp } from 'lucide-react'; 

export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    
    const { auth } = usePage().props;
    const user = auth.user;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={menuRef}>

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2
                    ${isOpen 
                        ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)]' 
                        : 'text-white/70 hover:text-yellow-500 hover:bg-white/5'}
                `}
            >
                <User className="w-5 h-5" />
                {user && <span className="text-xs font-black uppercase hidden md:block">{user.name.split(' ')[0]}</span>}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-4 w-64 z-[110] overflow-hidden
                                bg-[#0a111f]/95 backdrop-blur-xl border border-white/10 
                                rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] 
                                animate-in fade-in zoom-in slide-in-from-top-2 duration-300">
                    
                    <div className="px-5 py-4 border-b border-white/5 bg-white/5">
                        <p className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.2em] mb-1">
                            {user ? 'Cuenta Activa' : 'Bienvenido'}
                        </p>
                        <p className="text-white text-xs font-bold truncate">
                            {user ? user.email : 'Gestiona tus servicios digitales'}
                        </p>
                    </div>

                    <div className="p-2">
                        {user ? (
                            <>
                                <MenuLink href="/soporte" icon={<CircleHelp size={16} />} label="Ayuda" />
                                <div className="my-2 border-t border-white/5" />

                                <Link
                                    method="post"
                                    href="/logout"
                                    as="button"
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-400 hover:bg-red-500/10 transition-all duration-300"
                                >
                                    <LogOut size={16} />
                                    Cerrar Sesión
                                </Link>
                            </>
                        ) : (

<>
                                <MenuLink href="/login" icon={<LogIn size={16} />} label="Iniciar Sesión" />
                                <MenuLink href="/register" icon={<UserPlus size={16} />} label="Registrarse" primary />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

function MenuLink({ href, icon, label, primary = false }) {
    return (
        <Link 
            href={href}
            className={`
                flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300
                ${primary 
                    ? 'text-yellow-500 hover:bg-yellow-500/10' 
                    : 'text-white/80 hover:bg-white/5 hover:text-white'}
            `}
        >
            {icon}
            <span>{label}</span>
        </Link>
    );
}