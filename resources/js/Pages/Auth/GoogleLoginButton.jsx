import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleLoginButton() {
  return (
    <a
      href={route("google.redirect")}
      className="w-full flex items-center justify-center gap-3 px-5 py-3 rounded-xl
border border-blue-600/40 bg-slate-900
text-blue-400 font-semibold tracking-wide
hover:bg-blue-600 hover:text-white
transition-all duration-300 ease-out
shadow-md hover:shadow-lg hover:shadow-blue-900/30
active:scale-[0.98]
focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
    >
      {/* Fondo blanco sutil tras el icono para que resalte en el fondo oscuro */}
      <div className="bg-white rounded-full p-1 flex items-center justify-center">
        <FcGoogle className="text-xl" />
      </div>

      <span className="font-bold text-sm sm:text-base tracking-wide uppercase">
        Continuar con Google
      </span>
    </a>
  );
}