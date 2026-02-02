import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-6 py-3 bg-[#111] border-b border-[rgba(255,140,0,0.3)] relative z-10 animate-slide-down md:px-[100px]">
      
      {/* Logo - Recomendado: Envolverlo en un Link a "/" */}
      <Link to="/" className="flex items-center gap-[15px] hover:opacity-90 transition-opacity">
        <img 
          src="logo.png" 
          alt="Logo Luxentium" 
          className="w-[120px] md:w-[150px] transition-all duration-300" 
        />
        <h1 className="text-white text-[24px] md:text-[30px] tracking-[3px] font-bold">
          LUX<span className="text-brand">ENTIUM</span>
        </h1>
      </Link>

      {/* Componente Navbar */}
      <Navbar />

      {/* Botones Escritorio */}
      <div className="hidden md:block">
        <Link 
          to="/contacto" 
          className="bg-brand px-[30px] py-[14px] rounded-lg text-white font-bold text-[18px] transition-all duration-300 hover:bg-[#ff9500] hover:scale-105 inline-block"
        >
          Contacto
        </Link>
      </div>
    </header>
  );
};

export default Header;