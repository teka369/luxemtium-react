import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Proyectos', href: '/portafolio' },
  ];

  return (
    <>
      {/* Botón Hamburguesa (Solo visible en móvil) */}
      <div 
        className="flex flex-col gap-[6px] cursor-pointer z-[1001] md:hidden" 
        onClick={toggleMenu}
      >
        <span className={`w-[30px] h-[3px] bg-white transition-all duration-300 rounded-lg ${isOpen ? 'translate-y-[9px] rotate-45' : ''}`}></span>
        <span className={`w-[30px] h-[3px] bg-white transition-all duration-300 rounded-lg ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-[30px] h-[3px] bg-white transition-all duration-300 rounded-lg ${isOpen ? '-translate-y-[9px] -rotate(-45deg)' : ''}`}></span>
      </div>

      {/* Menú de Navegación */}
      <nav className={`
        fixed top-0 w-full h-screen bg-[rgba(15,15,15,0.98)] flex flex-col items-center justify-center transition-all duration-400 ease-in-out z-[1000]
        md:static md:w-auto md:h-auto md:bg-transparent md:flex-row md:transition-none
        ${isOpen ? 'left-0' : '-left-full md:left-0'}
      `}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="text-white text-2xl my-5 font-medium transition-colors duration-300 hover:text-brand md:text-[18px] md:mx-[15px] md:my-0"
          >
            {link.name}
          </a>
        ))}
        {/* Botón Contacto Solo Móvil */}
        <a href="/contacto" className="bg-brand px-[25px] py-[10px] rounded-md text-white mt-5 md:hidden">
          Contacto
        </a>
      </nav>
    </>
  );
};

export default Navbar;