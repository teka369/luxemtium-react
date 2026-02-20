import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Proyecto {
  id: number;
  imagen: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  tecnologias: string[];
  url?: string;
  categoria: string;
}

const Portafolio: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);

  const proyectos: Proyecto[] = [
    {
      id: 1,
      imagen: 'public/portafolio/abogados.png',
      titulo: 'Estudio Jurídico Digital',
      subtitulo: 'Presencia online profesional',
      descripcion: 'Sitio web para estudio jurídico con foco en confianza, claridad de servicios y captación de clientes.',
      tecnologias: ['React', 'TypeScript', 'TailwindCSS'],
      url: undefined,
      categoria: 'Servicios profesionales'
    },
    {
      id: 2,
      imagen: 'public/portafolio/dusklight.png',
      titulo: 'Landing Page Creativa',
      subtitulo: 'Marca moderna y dinámica',
      descripcion: 'Landing page visualmente llamativa orientada a conversión y captación de leads.',
      tecnologias: ['React', 'Framer Motion', 'TailwindCSS'],
      url: undefined,
      categoria: 'Landing Page'
    },
    {
      id: 3,
      imagen: 'public/portafolio/provedor.png',
      titulo: 'Plataforma de Proveedores',
      subtitulo: 'Gestión y catálogo digital',
      descripcion: 'Interfaz clara para mostrar catálogo de servicios y contacto directo con proveedores.',
      tecnologias: ['React', 'API REST', 'UI personalizada'],
      url: undefined,
      categoria: 'Plataforma B2B'
    },
    {
      id: 4,
      imagen: 'public/portafolio/sunny.png',
      titulo: 'Marca Digital Sunny',
      subtitulo: 'Identidad cálida y cercana',
      descripcion: 'Sitio web vibrante para marca digital con enfoque en storytelling visual.',
      tecnologias: ['React', 'CSS modular', 'Animaciones'],
      url: undefined,
      categoria: 'Branding'
    },
  ];

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    /* CAMBIO: bg-transparent para dejar pasar las partículas */
    <div className="bg-transparent min-h-screen text-white font-sans overflow-x-hidden">
      
      {/* ===== BARRIDO OVERLAY (SALIDA) - Se mantiene sólido para el efecto de impacto ===== */}
      <div 
        className={`fixed inset-0 h-screen w-full bg-brand flex justify-center items-center z-[99999] transition-[left] duration-800 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${
          isExiting ? 'left-full' : 'left-0'
        }`}
      >
        <div className={`text-center transition-all duration-400 ${isExiting ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
          <h1 className="text-5xl md:text-[5rem] font-bold tracking-[15px] text-white">
            LUX<span className="text-[#111]">ENTIUM</span>
          </h1>
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative px-6 py-24 md:px-[100px] md:py-32 overflow-hidden">
        {/* Glow decorativo suave */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-brand rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-brand rounded-full blur-[180px] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <span className="inline-block px-5 py-2.5 bg-brand/10 backdrop-blur-md border border-brand/40 rounded-full text-brand text-sm font-bold mb-8 shadow-[0_0_20px_rgba(255,140,0,0.2)] animate-fade-in-up">
            <span className="inline-block w-2 h-2 bg-brand rounded-full mr-2 animate-pulse"></span>
            💼 Nuestro Trabajo
          </span>
          
          <h1 className="text-5xl md:text-[65px] font-extrabold mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '100ms'}}>
            Portafolio{' '}
            <span className="relative inline-block">
              <span className="text-brand relative z-10">Premium</span>
              <svg 
                className="absolute -bottom-2 left-0 w-full text-brand/50" 
                viewBox="0 0 300 12" 
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M2 6 Q 75 2, 150 6 T 298 6" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-[#aaa] text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '200ms'}}>
            Proyectos que transforman ideas en experiencias digitales excepcionales
          </p>
        </div>
      </section>

      {/* ===== GRID DE PROYECTOS ===== */}
      <main className="max-w-[1600px] mx-auto px-6 pb-24 md:px-[100px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {proyectos.map((proyecto, index) => (
            <div 
              key={proyecto.id}
              /* CAMBIO: bg-white/[0.03] y backdrop-blur para el efecto cristal */
              className="group relative bg-white/[0.03] backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-brand/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(255,122,0,0.15)] flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/0 via-brand/5 to-brand/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Badge de categoría */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-brand/90 backdrop-blur-sm rounded-full text-white text-[10px] font-bold shadow-lg uppercase tracking-wider">
                {proyecto.categoria}
              </div>

              {/* Video Container */}
              <div className="relative overflow-hidden bg-black/40">
                <img 
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full aspect-video object-cover block transition-transform duration-700 group-hover:scale-110 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Contenido */}
              <div className="relative p-8 flex-grow flex flex-col z-10">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-brand transition-colors duration-300">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-brand/80 text-sm font-semibold uppercase tracking-wider">
                    {proyecto.subtitulo}
                  </p>
                </div>

                <p className="text-[#bbb] text-[15px] leading-relaxed mb-6 flex-grow">
                  {proyecto.descripcion}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proyecto.tecnologias.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-xs font-medium group-hover:border-brand/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botón de acción */}
                <div className="flex gap-3">
                  {proyecto.url && (
                    <a 
                      href={proyecto.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative overflow-hidden flex-1 bg-brand text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Visitar Web
                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final Glassmorphism */}
        <div className="mt-20 p-10 md:p-14 bg-white/[0.03] backdrop-blur-xl rounded-3xl border-2 border-brand/20 relative overflow-hidden group">
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Únete a nuestros clientes satisfechos y lleva tu negocio al siguiente nivel
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/contacto"
                className="group/btn relative overflow-hidden bg-brand hover:shadow-[0_0_40px_rgba(255,140,0,0.4)] text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Iniciar Proyecto</span>
                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Portafolio;
