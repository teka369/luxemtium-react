import React from 'react';

interface Servicio {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  icono: string;
}

const Servicios: React.FC = () => {
  const listaServicios: Servicio[] = [
    {
      id: 1,
      titulo: 'Desarrollo Web Premium',
      descripcion: 'Creamos sitios robustos, rápidos y escalables utilizando las últimas tecnologías del mercado.',
      imagen: 'web-dev.jpg',
      icono: 'code'
    },
    {
      id: 2,
      titulo: 'Diseño UX/UI',
      descripcion: 'Interfaces intuitivas centradas en el usuario que garantizan una experiencia de navegación inolvidable.',
      imagen: 'smart_toybase.png',
      icono: 'palette'
    },
    {
      id: 3,
      titulo: 'Optimización SEO',
      descripcion: 'Posicionamos tu marca en los primeros resultados de búsqueda para atraer tráfico de calidad.',
      imagen: 'seo.png',
      icono: 'trending_up'
    }
  ];

  return (
    <main className="bg-brand-dark min-h-screen text-white">
      <section className="px-6 py-20 md:px-[100px]">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header de la sección */}
          <div className="text-center mb-[60px] animate-fade-in-up">
            <h2 className="text-4xl md:text-[45px] font-bold mb-[15px]">
              Nuestros <span className="text-brand">Servicios</span>
            </h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              Soluciones integrales diseñadas para potenciar tu presencia digital.
            </p>
          </div>

          {/* Grid de Servicios */}
          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10">
            {listaServicios.map((servicio) => (
              <div 
                key={servicio.id}
                className="group bg-[#161616] rounded-[20px] overflow-hidden border border-[rgba(255,122,0,0.05)] transition-all duration-400 hover:-translate-y-2.5 hover:border-brand hover:shadow-[0_10px_30px_rgba(255,122,0,0.1)]"
              >
                {/* Imagen del Servicio */}
                <div className="w-full h-[200px] bg-[#222] overflow-hidden">
                  <img 
                    src={servicio.imagen} 
                    alt={servicio.titulo}
                    className="w-full h-full object-cover opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
                  />
                </div>

                {/* Información del Servicio */}
                <div className="p-[30px] text-left">
                  <span 
                    className="material-symbols-outlined text-brand !text-[40px] mb-[15px] block"
                  >
                    {servicio.icono}
                  </span>
                  <h3 className="text-[22px] font-bold text-white mb-[10px]">
                    {servicio.titulo}
                  </h3>
                  <p className="text-[#aaa] leading-relaxed">
                    {servicio.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Servicios;