import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0b0b] border-t border-[rgba(255,122,0,0.2)] py-12 px-6 md:px-[100px]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Lado Izquierdo: Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-2xl font-bold tracking-widest mb-2">
            LUX<span className="text-brand">ENTIUM</span>
          </h2>
          <p className="text-[#666] text-sm">© 2026 Luxentium Developing.<br/>Todos los derechos reservados.</p>
        </div>

        {/* Lado Centro: Información de Contacto */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="material-symbols-outlined text-brand text-xl">call</span>
            <h2 className="text-[#ccc] text-lg font-medium">+57 3206609029</h2>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="material-symbols-outlined text-brand text-xl">mail</span>
            <h2 className="text-[#ccc] text-lg font-medium">luxentium1@gmail.com</h2>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="material-symbols-outlined text-brand text-xl">edit_note</span>
            <h2 className="text-[#ccc] text-lg font-medium">
              Solicita tu propuesta <a href="/contacto" className="text-brand hover:underline underline-offset-4">aquí</a>
            </h2>
          </div>
        </div>

        {/* Lado Derecho: Redes Sociales (Opcional pero recomendado) */}
        <div className="flex gap-5">
           <a href="#" className="w-10 h-10 rounded-full border border-[rgba(255,122,0,0.3)] flex items-center justify-center text-[#888] hover:border-brand hover:text-brand transition-all">
             <i className="fab fa-instagram"></i>
           </a>
           <a href="#" className="w-10 h-10 rounded-full border border-[rgba(255,122,0,0.3)] flex items-center justify-center text-[#888] hover:border-brand hover:text-brand transition-all">
             <i className="fab fa-linkedin-in"></i>
           </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;