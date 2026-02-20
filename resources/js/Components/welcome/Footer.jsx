import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { Link } from "@inertiajs/react";

export default function Footer() {
  return (
<footer className="relative bg-[#040404] text-white py-5 md:py-6 pb-32 border-t border-yellow-500/10">
      {/* Línea superior dorada glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent blur-[1px]"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">

          {/* IZQUIERDA */}
          <div className="max-w-sm">
            <Link href="/" className="group">
              <h2 className="text-3xl font-black tracking-tight mb-4 uppercase">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent group-hover:opacity-80 transition">
                  AUTOMATIZANDO
                </span>
                <span className="text-yellow-500">.</span>
              </h2>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Expertos en ingeniería de sistemas y desarrollo web. Transformamos
              ideas complejas en soluciones digitales de alto impacto.
            </p>

            {/* Línea decorativa */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-yellow-500 to-transparent"></div>
          </div>

          {/* DERECHA */}
          <div className="grid grid-cols-2 gap-12 w-full md:w-auto">

            {/* Legal */}
            <div>
              <h3 className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-6">
                Legal
              </h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <Link href="/politicas-privacidad" className="hover:text-yellow-400 transition">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos-servicio" className="hover:text-yellow-400 transition">
                    Términos de Servicio
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-yellow-400 transition">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-6">
                Contacto
              </h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex flex-col">
                  <span className="text-white font-medium">Llámanos</span>
                  <a
                    href="tel:+56978843627"
                    className="hover:text-yellow-400 transition"
                  >
                    +56 9 7884 3627
                  </a>
                </li>
                <li className="flex flex-col">
                  <span className="text-white font-medium">Ubicación</span>
                  <span className="text-gray-400">
                    Concepción, Chile 🇨🇱
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-6 pt-6 border-t border-yellow-500/10 
flex flex-col md:flex-row 
justify-between items-center md:items-center 
gap-4 text-center md:text-left">

          {/* Redes */}
          <div className="flex gap-4 order-1 md:order-2">
            {[
              {
                icon: <FaInstagram />,
                href: "#",
                hover: "hover:text-pink-400"
              },
              {
                icon: <FaWhatsapp />,
                href: "https://wa.me/56978843627",
                hover: "hover:text-green-400"
              },
              {
                icon: <FaLinkedinIn />,
                href: "#",
                hover: "hover:text-blue-400"
              }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-yellow-500/10 text-gray-400 ${social.hover}
        hover:border-yellow-400/40 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]
        transition-all duration-300`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Texto */}
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] order-2 md:order-1">
            © {new Date().getFullYear()} Automatizando — Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
}