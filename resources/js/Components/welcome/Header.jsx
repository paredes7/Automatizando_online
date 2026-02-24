import { Link, usePage } from "@inertiajs/react";
import { useState, useEffect, useMemo} from "react";
import NavLink from "./Header/Navlink";
import { NAV_LINKS } from "./Header/nav-config";
import { User, ShoppingCart, Menu, X , LogOut} from "lucide-react";
import UserMenu from "./Header/UserMenu";

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

            <div className="flex justify-start">
              <Link href="/" className="transition-all hover:scale-105 active:scale-95">
                <img
                  src="https://res.cloudinary.com/dcyx3nqj5/image/upload/v1771532553/Captura_de_pantalla_2026-02-19_161704-removebg-preview_kgxbzn.png"
                  alt="Automatizando Online Logo"
                  className={`transition-all duration-500 object-contain ${isScrolled ? "h-8" : "h-10"
                    }`}
                />
              </Link>
            </div>

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

            <div className="flex items-center justify-end gap-3 md:gap-6">
              <div className="hidden sm:block">
                <UserMenu />
              </div>

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

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isScrolled={isScrolled}
      />
    </>
  );
}

function MobileMenu({ isOpen, onClose, isScrolled }) {
  const { auth } = usePage().props;
  const user = auth.user;

  return (
    <div className="lg:hidden">
      <div className={`fixed inset-0 backdrop-blur-sm z-[80] transition-opacity duration-600 ${isOpen ? "opacity-0" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

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

          {/* Sección de Cuenta en Responsive */}
          <div className="mt-1 pt-2 border-t border-white/5 flex flex-col gap-4">

            {user ? (
              /* MODO: USUARIO AUTENTICADO */
              <div className="flex flex-col gap-4">
                <div className="flex flex-col text-center">
                  <p className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                    Cuenta Activa
                  </p>
                  <p className="text-white text-lg font-bold">{user.name}</p>
                  <p className="text-white text-sm font-normal">{user.email}</p>
                </div>

                <Link
                  href="/logout"
                  method="post"
                  as="button"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 w-full py-3
                   mx-auto w-full max-w-[200px] 
                   bg-red-500/10 border border-red-500/20 rounded-xl
                    text-red-500 text-[14px] font-black uppercase
                     tracking-widest hover:bg-red-500/20 transition-all"
                >
                  <LogOut className="w-5 h-5" />
                  Cerrar Sesión
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 
    mx-auto w-full max-w-[200px] 
    py-3 bg-yellow-500 rounded-xl 
    text-black text-[15px] font-black uppercase tracking-widest 
    hover:bg-yellow-400 transition-all active:scale-95"
                >
                  <User className="w-5 h-5" />
                  Iniciar Sesión
                </Link>

                <Link
                  href="/register"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 
  mx-auto w-full max-w-[200px] 
  py-3 bg-yellow-500 rounded-xl 
  text-black text-[15px] font-black uppercase tracking-widest 
  hover:bg-yellow-400 transition-all active:scale-95"                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}