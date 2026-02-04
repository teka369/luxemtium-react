import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Inicio', href: '/', icon: '🏠' },
    { name: 'Nosotros', href: '/nosotros', icon: '👥' },
    { name: 'Servicios', href: '/servicios', icon: '⚡' },
    { name: 'Proyectos', href: '/portafolio', icon: '💼' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Botón Hamburguesa Mejorado */}
      <button 
        className="flex flex-col gap-[5px] cursor-pointer z-[1001] md:hidden group p-2 relative" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {/* Glow effect */}
        <span className={`absolute inset-0 bg-brand/30 rounded-lg blur-lg transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></span>
        
        <span className={`w-[28px] h-[3px] bg-gradient-to-r from-white to-brand rounded-full transition-all duration-300 relative ${isOpen ? 'translate-y-[8px] rotate-45' : 'group-hover:w-[32px]'}`}></span>
        <span className={`w-[28px] h-[3px] bg-gradient-to-r from-white to-brand rounded-full transition-all duration-300 relative ${isOpen ? 'opacity-0 scale-0' : 'group-hover:w-[24px]'}`}></span>
        <span className={`w-[28px] h-[3px] bg-gradient-to-r from-white to-brand rounded-full transition-all duration-300 relative ${isOpen ? '-translate-y-[8px] -rotate-45' : 'group-hover:w-[32px]'}`}></span>
      </button>

      {/* Overlay con blur */}
      <div 
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] transition-opacity duration-500 md:hidden
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* Menú de Navegación Mejorado */}
      <nav className={`
        fixed top-0 right-0 w-full h-screen 
        bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]
        flex flex-col items-center justify-center 
        transition-all duration-500 ease-out z-[1000]
        md:static md:w-auto md:h-auto md:bg-transparent md:flex-row md:transition-none md:translate-x-0
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        
        {/* Patrón de fondo animado - solo móvil */}
        <div className="absolute inset-0 opacity-10 md:hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-brand rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-brand rounded-full blur-[100px] animate-pulse animation-delay-2000"></div>
        </div>

        {/* Links */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-2 md:gap-1">
          {navLinks.map((link, index) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`
                group relative
                text-white text-2xl md:text-[17px] 
                font-medium px-6 py-3 md:px-4 md:py-2
                transition-all duration-300
                ${isActive(link.href) ? 'text-brand' : 'hover:text-brand'}
              `}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isOpen ? 'slideInRight 0.5s ease-out forwards' : 'none'
              }}
            >
              {/* Icono solo en móvil */}
              <span className="inline md:hidden mr-3 text-2xl group-hover:scale-125 transition-transform duration-300 inline-block">
                {link.icon}
              </span>
              
              {/* Texto */}
              <span className="relative">
                {link.name}
                
                {/* Underline animado */}
                <span className={`
                  absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-brand to-transparent rounded-full
                  transition-all duration-300
                  ${isActive(link.href) 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                  }
                `}></span>
                
                {/* Glow effect */}
                <span className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 blur-xl transition-all duration-300 rounded-lg"></span>
              </span>

              {/* Indicador activo - Desktop */}
              {isActive(link.href) && (
                <span className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-1.5 h-1.5 bg-brand rounded-full animate-pulse"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Botón Contacto - Solo Móvil Mejorado */}
        <Link 
          to="/contacto" 
          className="
            relative overflow-hidden mt-10 md:hidden
            bg-gradient-to-r from-brand to-[#ff9500]
            px-10 py-4 rounded-2xl
            text-white font-bold text-xl
            shadow-[0_0_30px_rgba(255,140,0,0.4)]
            hover:shadow-[0_0_50px_rgba(255,140,0,0.6)]
            hover:scale-105
            transition-all duration-300
            group
          "
          style={{
            animationDelay: '400ms',
            animation: isOpen ? 'slideInRight 0.5s ease-out forwards' : 'none'
          }}
        >
          {/* Efecto de brillo */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
          
          <span className="relative z-10 flex items-center gap-2">
            Contacto
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </Link>
      </nav>

      {/* CSS Animations */}
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
};

export default Navbar;