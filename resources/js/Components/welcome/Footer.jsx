import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { Link } from "@inertiajs/react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-center py-16 border-t border-white/10 overflow-hidden">
      
      {/* Efecto de resplandor sutil de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_#00f2ff]"></div>

      <div className="container mx-auto px-6">
        
        {/* Logo / Nombre de Marca */}
        <h2 className="text-2xl font-black tracking-tighter text-white mb-2 uppercase">
          AUTOMATIZANDO<span className="text-cyan-500">.</span>
        </h2>
        <p className="text-gray-500 text-sm mb-8 max-w-xs mx-auto">
          Transformando negocios mediante soluciones digitales de alto impacto.
        </p>

        {/* Redes Sociales */}
        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://www.instagram.com/tu_cuenta_automatizando" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 border border-white/5"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://wa.me/56978843627" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-green-400 hover:bg-white/10 transition-all duration-300 border border-white/5"
          >
            <FaWhatsapp size={22} />
          </a>
          <a
            href="#" 
            className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-blue-500 hover:bg-white/10 transition-all duration-300 border border-white/5"
          >
            <FaLinkedinIn size={22} />
          </a>
        </div>

        {/* Contacto y Enlaces Legales */}
        <div className="space-y-6">
          <div>
            <p className="text-xs font-bold text-cyan-500 uppercase tracking-[0.2em] mb-2">Contacto Directo</p>
            <p className="text-xl text-white font-light tracking-widest">+56 9 7884 3627</p>
          </div>

          <div className="flex justify-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-tighter">
            <Link href="/politicas-privacidad" className="hover:text-white transition-colors">
              Privacidad
            </Link>
            <span>|</span>
            <Link href="/terminos-servicio" className="hover:text-white transition-colors">
              Términos
            </Link>
          </div>

          <div className="pt-8 border-t border-white/5">
            <p className="text-[10px] text-gray-600 font-medium uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} Automatizando — Concepción, Chile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}