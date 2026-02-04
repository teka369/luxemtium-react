import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Portafolio', href: '/portafolio' },
  ];

  const services = [
    'Desarrollo Web',
    'Diseño UX/UI',
    'Optimización SEO',
    'Flujos n8n',
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] to-[#050505] border-t border-brand/20 overflow-hidden">
      
      {/* Patrón de fondo decorativo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,140,0,0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Contenido Principal del Footer */}
      <div className="relative z-10 px-6 py-16 md:px-[100px] md:py-20">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Grid Principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Columna 1: Branding y Descripción */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                <img 
                  src="logo.png" 
                  alt="Luxentium Logo" 
                  className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 drop-shadow-[0_0_10px_rgba(255,140,0,0.5)]"
                />
                <h2 className="text-white text-2xl font-bold tracking-widest">
                  LUX<span className="text-brand">ENTIUM</span>
                </h2>
              </Link>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Transformamos ideas en experiencias digitales excepcionales. Desarrollo web premium con tecnología de vanguardia.
              </p>

              {/* Redes Sociales - CORREGIDO AQUÍ */}
              <div className="flex gap-3">
                
                <Link 
                  to="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center text-gray-400 hover:border-brand hover:text-brand transition-all duration-300 hover:scale-110 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-300"></span>
                  <i className="fab fa-instagram relative z-10 text-lg"></i>
                </Link>
                
                <Link 
                  to="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center text-gray-400 hover:border-brand hover:text-brand transition-all duration-300 hover:scale-110 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-300"></span>
                  <i className="fab fa-linkedin-in relative z-10 text-lg"></i>
                </Link>

                <Link 
                  to="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center text-gray-400 hover:border-brand hover:text-brand transition-all duration-300 hover:scale-110 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-300"></span>
                  <i className="fab fa-github relative z-10 text-lg"></i>
                </Link>

                <Link 
                  to="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center text-gray-400 hover:border-brand hover:text-brand transition-all duration-300 hover:scale-110 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-300"></span>
                  <i className="fab fa-twitter relative z-10 text-lg"></i>
                </Link>
              </div>
            </div>

            {/* Columna 2: Enlaces Rápidos */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
                Enlaces Rápidos
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-brand"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="group text-gray-400 hover:text-brand transition-colors duration-300 flex items-center gap-2 text-sm"
                    >
                      <span className="w-0 h-0.5 bg-brand group-hover:w-4 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3: Servicios */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
                Nuestros Servicios
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-brand"></span>
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-brand mt-1">▸</span>
                    <span className="text-gray-400">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 4: Contacto */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
                Contacto
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-brand"></span>
              </h3>
              
              <div className="space-y-4">

                {/* Email */}
                <Link 
                  to="mailto:luxentium1@gmail.com"
                  className="group flex items-start gap-3 text-gray-400 hover:text-brand transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 group-hover:border-brand/50 transition-all duration-300">
                    <span className="material-symbols-outlined text-brand !text-[20px]">mail</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-0.5">Escríbenos</p>
                    <p className="text-sm font-medium break-all">luxentium1@gmail.com</p>
                  </div>
                </Link>

                {/* CTA Propuesta */}
                <Link
                  to="/contacto"
                  className="group flex items-start gap-3 text-gray-400 hover:text-brand transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 group-hover:border-brand/50 transition-all duration-300">
                    <span className="material-symbols-outlined text-brand !text-[20px]">edit_note</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-0.5">Solicita tu</p>
                    <p className="text-sm font-medium">Propuesta Gratis →</p>
                  </div>
                </Link>
              </div>
            </div>

          </div>

          {/* Separador */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent mb-8"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="text-gray-500 text-sm text-center md:text-left">
              <p>
                © {currentYear} <span className="text-brand font-semibold">Luxentium Developing</span>. 
                Todos los derechos reservados.
              </p>
            </div>

            {/* Badge "Hecho con amor" */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Hecho con</span>
              <span className="text-red-500 animate-pulse text-lg">🎯</span>
              <span>en Colombia</span>
            </div>
          </div>

        </div>
      </div>

      

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-brand/20 backdrop-blur-sm border border-brand/40 rounded-full flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Volver arriba"
      >
        <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

    </footer>
  );
};

export default Footer;