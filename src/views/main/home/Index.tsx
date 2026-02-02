import React, { useState } from 'react';

// Interfaz para los datos de las tarjetas (TypeScript)
interface PilarProps {
  icon: string;
  title: string;
  description: string;
}

const Index: React.FC = () => {
  // Estado para controlar la animación del Overlay
  const [isNavigating, setIsNavigating] = useState(false);

  // Función que replica el script original de transición
  const handlePortfolioClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsNavigating(true); // Activa la clase 'active' del overlay

    // Simula la redirección después de la animación (1s)
    setTimeout(() => {
      window.location.href = '/portafolio.html'; // O usa router.push('/portafolio') si usas Next.js/React Router
    }, 1000);
  };

  const pilares: PilarProps[] = [
    {
      icon: 'rocket_launch',
      title: 'Sitios Rápidos',
      description: 'Tu web cargará en un parpadeo. Nadie espera una página lenta; nos aseguramos de que la tuya vuele y retenga a tus clientes.'
    },
    {
      icon: 'devices',
      title: 'Adaptabilidad Total',
      description: 'Desde smartphones hasta pantallas de escritorio; tu marca siempre mantendrá una apariencia profesional, organizada y fluida.'
    },
    {
      icon: 'ads_click', // Corregido a minúsculas estándar de Material Icons
      title: 'Fácil de Usar',
      description: 'Diseñamos pensando en tus usuarios. Interfaces intuitivas que guían al cliente hacia el objetivo con el menor esfuerzo posible.'
    }
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-white overflow-x-hidden font-sans">
      
      {/* ===== BARRIDO OVERLAY ===== */}
      <div 
        className={`fixed inset-0 h-screen w-full bg-brand flex justify-center items-center z-[99999] transition-[left] duration-700 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${
          isNavigating ? 'left-0' : '-left-full'
        }`}
      >
        <div className="text-center">
          <h1 
            className={`text-6xl md:text-[5rem] font-bold tracking-[15px] text-white transition-all duration-400 delay-300 ${
              isNavigating ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            LUX<span className="text-[#111]">ENTIUM</span>
          </h1>
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <main className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-[100px] md:py-[80px] min-h-[85vh] text-center md:text-left gap-10 md:gap-0">
        
        {/* Texto Hero */}
        <div className="flex-1 md:pr-[50px] animate-fade-in-up">
          <h1 className="text-[45px] md:text-[65px] leading-[1.1] mb-5 font-bold">
            Luxentium <span className="text-brand">Developing</span>
          </h1>
          <p className="text-[18px] md:text-[22px] text-[#ccc] mb-[35px] leading-relaxed">
            Soluciones digitales de alto impacto. Creamos el futuro de tu presencia web con tecnologías avanzadas y diseños innovadores.
          </p>
          
          <div className="flex gap-5 justify-center md:justify-start opacity-0 animate-fade-in-up [animation-delay:400ms] fill-mode-forwards">
            <a 
              href="#" 
              className="bg-brand hover:bg-[#ff9500] hover:scale-105 text-white font-bold text-lg py-[14px] px-[30px] rounded-lg transition-all duration-300 inline-block"
            >
              Cotizar Proyecto
            </a>
            <a 
              href="/portafolio.html" 
              onClick={handlePortfolioClick}
              className="border border-brand text-white hover:bg-[rgba(255,122,0,0.1)] hover:scale-105 font-bold py-[14px] px-[30px] rounded-lg transition-all duration-300 inline-block"
            >
              Saber Más
            </a>
          </div>
        </div>

        {/* Imagen Hero */}
        <div className="flex-1 flex justify-center animate-fade-in-right w-full">
          <img 
            src="desarrollo.png" 
            alt="Desarrollo Web Luxentium" 
            className="w-full max-w-[550px] rounded-[20px] drop-shadow-[0_0_30px_rgba(255,122,0,0.3)] animate-float [animation-delay:1.2s]"
          />
        </div>
      </main>

      {/* ===== PILARES SECTION ===== */}
      <section className="px-6 py-[100px] md:px-[100px] bg-brand-dark text-center">
        <div className="max-w-[800px] mx-auto mb-[60px]">
          <h2 className="text-[42px] font-extrabold mb-5 text-white">
            ¿Por qué trabajar con <span className="text-brand">Luxentium</span>?
          </h2>
          <p className="text-[#888] text-[18px] leading-relaxed">
            No solo entregamos código; construimos herramientas diseñadas para que tu negocio destaque en un entorno digital competitivo. Nos enfocamos en los tres puntos clave que garantizan resultados.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[30px]">
          {pilares.map((pilar, index) => (
            <div 
              key={index}
              className="bg-brand-card p-[45px_35px] rounded-[20px] flex-1 min-w-[300px] max-w-[380px] text-center border border-[rgba(255,122,0,0.1)] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-translate-y-2.5 hover:border-brand hover:shadow-[0_15px_40px_rgba(255,122,0,0.15)]"
            >
              {/* Nota: Requiere link a Google Fonts Material Symbols en index.html */}
              <span className="material-symbols-outlined !text-[55px] text-brand mb-[25px] block">
                {pilar.icon}
              </span>
              <h3 className="text-[24px] text-white tracking-wide mb-[15px] font-bold">
                {pilar.title}
              </h3>
              <p className="text-[#ccc] leading-[1.7] text-[16px]">
                {pilar.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;