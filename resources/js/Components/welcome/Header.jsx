import { Link } from "@inertiajs/react";
import { useState, useEffect, useMemo } from "react";
import NavLink from "./Header/Navlink";
import { NAV_LINKS } from "./Header/nav-config";
import { User, ShoppingCart, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = useMemo(() => {
    const base = "w-full bg-[#050a12] backdrop-blur-md fixed top-0 z-[100] transition-all shadow-2xl duration-500 border-b border-white/10 ease-in-out";
    if (isScrolled)
      return `${base} bg-[#050a12] py-4 shadow-2xl backdrop-blur-md border-b border-white/10`;
    return `${base} py-7`;
  }, [isScrolled]);

  return (
    <>
      <header className={headerClasses}>
        <div className="container px-6 mx-auto">
          <div className="flex items-center justify-between lg:grid lg:grid-cols-3">
            
            {/* --- LOGO --- */}
            <div className="flex justify-start">
              <Link href="/" className="transition-all hover:scale-105 active:scale-95">
                <img
                  src="https://res.cloudinary.com/dcyx3nqj5/image/upload/v1771532553/Captura_de_pantalla_2026-02-19_161704-removebg-preview_kgxbzn.png"
                  alt="InnoClinica Logo"
                  className={`transition-all duration-500 object-contain ${
                    isScrolled ? "h-8" : "h-10"
                  }`}
                />
              </Link>
            </div>

            {/* --- NAV DESKTOP --- */}
            <nav className="items-center justify-center hidden gap-10 lg:flex">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  className="text-[12px] font-bold tracking-[0.2em] text-white uppercase transition-all hover:text-yellow-500"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* --- ACCIONES --- */}
            <div className="flex items-center justify-end gap-3 md:gap-6">
              <button className="hidden transition-all text-white/70 hover:text-yellow-500 sm:block hover:scale-110">
                <User className="w-5 h-5" />
              </button>

              <button className="relative p-2.5 text-black transition-all bg-yellow-500 rounded-lg active:scale-90 hover:bg-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-white text-black text-[9px] font-black px-1.5 rounded-full border-2 border-yellow-500">
                  0
                </span>
              </button>

              <button
                className="p-2 text-white transition-all lg:hidden active:scale-75"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-8 h-8 text-yellow-500" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MENÚ MÓVIL PROFESIONAL */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        isScrolled={isScrolled}
      />
    </>
  );
}

function MobileMenu({ isOpen, onClose, isScrolled }) {
  return (
    <div className="lg:hidden">
      {/* Backdrop: Oscurece el fondo para que el menú resalte */}
      <div 
        className={`fixed inset-0 backdrop-blur-sm z-[80] transition-opacity duration-600 ${
          isOpen ? "opacity-0" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Contenedor del Menú */}
      <div
        className={`
          fixed left-0 w-full z-[90] bg-[#080e1a] 
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          border-b border-white/10 shadow-2xl
          ${isScrolled ? "top-[65px]" : "top-[88px]"} 
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >
        <nav className="flex flex-col py-4">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`
                group flex items-center justify-between px-8 py-3
                text-[12px] font-bold tracking-[0.1em] uppercase
                text-white/90 
                transition-all duration-500
                hover:bg-white/[0.03] hover:text-yellow-500
                ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span>{link.label}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 opacity-0 group-hover:opacity-100 transition-all transform scale-0 group-hover:scale-100" />
            </Link>
          ))}
          
          {/* Item Extra: Login/User en Móvil */}
          <Link
            href="/login"
            className="flex items-center gap-3 px-8 py-3 text-[13px] font-bold tracking-widest text-yellow-500 uppercase transition-all rounded-full hover:bg-yellow-500 hover:text-white w-max"
          >
            <User className="w-4 h-4" />
            Mi Cuenta
          </Link>
        </nav>
      </div>
    </div>
  );
}