import React from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-6 py-3 bg-[#111] border-b border-[rgba(255,140,0,0.3)] relative z-10 animate-slide-down md:px-[100px]">
      
      {/* Logo */}
      <div className="flex items-center gap-[15px]">
        <img 
          src="logo.png" 
          alt="Logo Luxentium" 
          className="w-[120px] md:w-[150px] transition-all duration-300" 
        />
        <h1 className="text-white text-[24px] md:text-[30px] tracking-[3px] font-bold">
          LUX<span className="text-brand">ENTIUM</span>
        </h1>
      </div>

      {/* Componente Navbar */}
      <Navbar />

      {/* Botones Escritorio */}
      <div className="hidden md:block">
        <a 
          href="/contacto" 
          className="bg-brand px-[30px] py-[14px] rounded-lg text-white font-bold text-[18px] transition-all duration-300 hover:bg-[#ff9500] hover:scale-105 inline-block"
        >
          Contacto
        </a>
      </div>
    </header>
  );
};

export default Header;