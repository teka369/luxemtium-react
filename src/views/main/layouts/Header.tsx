import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header 
      className="
        flex justify-between items-center 
        px-6 py-4 md:px-[100px]
        bg-gradient-to-b from-[#111] to-[#0a0a0a]
        border-b border-[rgba(255,140,0,0.3)]
        relative z-10
        animate-slide-down
        shadow-[0_4px_20px_rgba(255,140,0,0.1)]
      "
    >
      
      {/* Logo con efectos mejorados */}
      <Link 
        to="/" 
        className="flex items-center gap-3 md:gap-4 group relative"
      >
        {/* Glow effect detrás del logo */}
        <div className="absolute -inset-2 bg-gradient-to-r from-brand/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative">
          <img 
            src="logo.png" 
            alt="Logo Luxentium" 
            className="w-[100px] md:w-[130px] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative z-10 drop-shadow-[0_0_15px_rgba(255,140,0,0.5)]" 
          />
          {/* Anillo animado alrededor del logo */}
          <div className="absolute inset-0 rounded-full border-2 border-brand/0 group-hover:border-brand/50 scale-110 group-hover:scale-125 transition-all duration-500"></div>
        </div>
        
        <h1 className="text-white text-[20px] md:text-[28px] tracking-[2px] md:tracking-[3px] font-bold relative">
          <span className="inline-block transition-all duration-300 group-hover:tracking-[4px]">
            LUX
          </span>
          <span className="text-brand inline-block transition-all duration-300 group-hover:tracking-[4px] relative">
            ENTIUM
            {/* Underline animado */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brand to-transparent group-hover:w-full transition-all duration-500"></span>
          </span>
          {/* Partículas flotantes */}
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
        </h1>
      </Link>

      {/* Navbar Component */}
      <Navbar />

      {/* Botón Contacto Mejorado - Desktop */}
      <div className="hidden md:block">
        <Link 
          to="/contacto" 
          className="
            relative overflow-hidden
            bg-gradient-to-r from-brand to-[#ff9500]
            px-8 py-3.5 rounded-xl
            text-white font-bold text-[17px]
            transition-all duration-300
            hover:shadow-[0_0_30px_rgba(255,140,0,0.6)]
            hover:scale-105
            group
            inline-block
          "
        >
          {/* Efecto de brillo que se mueve */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          
          {/* Texto */}
          <span className="relative z-10 flex items-center gap-2">
            Contacto
            {/* Icono de flecha animado */}
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          
          {/* Borde animado */}
          <span className="absolute inset-0 rounded-xl border-2 border-white/0 group-hover:border-white/40 transition-all duration-300"></span>
        </Link>
      </div>
    </header>
  );
};

export default Header;