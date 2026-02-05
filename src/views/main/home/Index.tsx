import { 
  Code2, 
  Globe, 
  Cpu, 
  Smartphone,
} from 'lucide-react';

import { 
  SiHtml5, SiCss3, SiTailwindcss, SiReact, 
  SiTypescript, SiNodedotjs, SiExpress, SiNestjs, SiPostgresql 
} from 'react-icons/si';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Codigo from './components/Codigo';

// Interfaz para los datos de las tarjetas
interface PilarProps {
  icon: string;
  title: string;
  description: string;
}

const Index: React.FC = () => {
  const [isNavigating] = useState(false);
  const [_, setTypedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);

  // Código para la animación del editor
  const codeLines = [
    'const Website = () => {',
    '  return (',
    '    <div className="professional">',
    '      <Header />',
    '      <Hero animated />',
    '      <Content responsive />',
    '      <Footer />',
    '    </div>',
    '  );',
    '};'
  ];

  // Efecto de escritura de código
  useEffect(() => {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine];
      let charIndex = 0;

      const interval = setInterval(() => {
        if (charIndex <= line.length) {
          setTypedText(prev => prev + (line[charIndex] || '\n'));
          charIndex++;
        } else {
          clearInterval(interval);
          setCurrentLine(prev => prev + 1);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [currentLine]);

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
      icon: 'ads_click',
      title: 'Fácil de Usar',
      description: 'Diseñamos pensando en tus usuarios. Interfaces intuitivas que guían al cliente hacia el objetivo con el menor esfuerzo posible.'
    }
  ];

  const technologies = [
    { name: "React.js", icon: <Code2 size={48} strokeWidth={1.5} />, description: "Interfaces dinámicas y escalables.", color: "#61DAFB" },
    { name: "Web Apps", icon: <Globe size={48} strokeWidth={1.5} />, description: "Soluciones web de alto rendimiento.", color: "#FF7A00" },
    { name: "Sistemas Core", icon: <Cpu size={48} strokeWidth={1.5} />, description: "Arquitecturas robustas.", color: "#A855F7" },
    { name: "Mobile First", icon: <Smartphone size={48} strokeWidth={1.5} />, description: "Experiencias optimizadas.", color: "#22C55E" },
  ];

  const techStack = [
    { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <SiCss3 />, name: "CSS3", color: "#1572B6" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
    { icon: <SiReact />, name: "React", color: "#61DAFB" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <SiNodedotjs />, name: "Node.js", color: "#339933" },
    { icon: <SiExpress />, name: "Express", color: "#ffffff" },
    { icon: <SiNestjs />, name: "NestJS", color: "#E0234E" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
  ];

  return (
    /* CAMBIO: bg-transparent para ver las partículas de tsparticles */
    <div className="bg-transparent min-h-screen text-white overflow-x-hidden font-sans">
      
      {/* ===== BARRIDO OVERLAY ===== */}
      <div 
        className={`fixed inset-0 h-screen w-full bg-brand flex justify-center items-center z-[99999] transition-[left] duration-700 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${
          isNavigating ? 'left-0' : '-left-full'
        }`}
      >
        <div className="text-center">
          <h1 className={`text-6xl md:text-[5rem] font-bold tracking-[15px] text-white transition-all duration-400 delay-300 ${isNavigating ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            LUX<span className="text-[#111]">ENTIUM</span>
          </h1>
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <main className="relative flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-[100px] md:py-[80px] min-h-[85vh] text-center md:text-left gap-10 md:gap-0 overflow-hidden">
        
        {/* Luces decorativas (Glows) suaves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Texto Hero */}
        <div className="flex-1 md:pr-[50px] animate-fade-in-up relative z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-brand/10 border border-brand/30 rounded-full backdrop-blur-md">
            <span className="text-brand text-sm font-semibold">✨ Desarrollo Web Premium</span>
          </div>
          
          <h1 className="text-[45px] md:text-[70px] leading-[1.1] mb-6 font-bold">
            Luxentium <br />
            <span className="text-brand relative italic">
              Developing
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand to-transparent"></span>
            </span>
          </h1>
          
          <p className="text-[18px] md:text-[22px] text-[#ccc] mb-[35px] leading-relaxed max-w-[600px]">
            Soluciones digitales de <span className="text-white font-semibold">alto impacto</span>. Creamos el futuro de tu presencia web con tecnologías avanzadas.
          </p>
          
          <div className="flex gap-5 justify-center md:justify-start opacity-0 animate-fade-in-up [animation-delay:400ms] fill-mode-forwards flex-wrap">

            <Link 

              to="/contacto" 

              className="group relative bg-gradient-to-r from-brand to-[#ff9500] hover:shadow-[0_0_40px_rgba(255,122,0,0.5)] text-white font-bold text-lg py-[14px] px-[35px] rounded-xl transition-all duration-300 inline-block overflow-hidden"

            >

              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

              <span className="relative flex items-center gap-2">

                Cotizar Proyecto

                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />

                </svg>

              </span>

            </Link>

            

            <Link 

              to="/portafolio" 

              

              className="group border-2 border-brand text-white hover:bg-brand/10 hover:scale-105 font-bold py-[14px] px-[35px] rounded-xl transition-all duration-300 inline-block relative overflow-hidden"

            >

              <span className="relative flex items-center gap-2">

                Ver Portafolio

                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />

                </svg>

              </span>

            </Link>

          </div>

            {/* Stats */}
          <div className="flex gap-8 justify-center md:justify-start mt-12 opacity-0 animate-fade-in-up [animation-delay:600ms] fill-mode-forwards">
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-brand">Máxima</div>
              <div className="text-sm text-gray-400">Protección</div>
            </div>
            <div className="w-px bg-brand/30"></div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-brand">100%</div>
              <div className="text-sm text-gray-400">Satisfacción</div>
            </div>
            <div className="w-px bg-brand/30"></div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-brand">24/7</div>
              <div className="text-sm text-gray-400">Soporte</div>
            </div>
          </div>

        </div>

        {/* Imagen Hero */}
        <div className="flex-1 flex justify-center animate-fade-in-right w-full relative z-10">
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand/20 rounded-[30px] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50"></div>
            <img 
              src="desarrollo.png" 
              alt="Desarrollo Web Luxentium" 
              className="w-full max-w-[550px] rounded-[20px] drop-shadow-[0_0_30px_rgba(255,122,0,0.2)] animate-float relative z-10 border border-white/10"
            />
          </div>
        </div>
      </main>

      {/* ===== PILARES SECTION ===== */}
      <section className="px-6 py-[100px] md:px-[100px] text-center relative">
        <div className="max-w-[900px] mx-auto mb-[60px] relative z-10">
          <span className="inline-block px-4 py-2 bg-brand/10 border border-brand/30 rounded-full text-brand text-sm font-semibold mb-6 backdrop-blur-md">
            Nuestra Filosofía
          </span>
          <h2 className="text-[42px] md:text-[52px] font-extrabold mb-6 text-white leading-tight">
            ¿Por qué trabajar con <span className="text-brand">Luxentium</span>?
          </h2>
          <p className="text-[#999] text-[18px] md:text-[20px] leading-relaxed">
            No solo entregamos código; construimos herramientas diseñadas para que tu negocio destaque en un entorno digital competitivo.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[30px] relative z-10">
          {pilares.map((pilar, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-md p-[45px_35px] rounded-[25px] flex-1 min-w-[300px] max-w-[380px] border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:border-brand/50 hover:shadow-[0_20px_60px_rgba(249,115,22,0.1)] relative"
            >
              <div className="relative z-10">
                <div className="inline-block p-4 bg-brand/10 rounded-2xl mb-6 text-brand">
                  <span className="material-symbols-outlined !text-[55px] block">{pilar.icon}</span>
                </div>
                <h3 className="text-[24px] text-white font-bold mb-[15px] group-hover:text-brand transition-colors">{pilar.title}</h3>
                <p className="text-[#aaa] leading-[1.8] text-[16px]">{pilar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECCIÓN DE CÓDIGO (Componente Externo) ===== */}
      <div className="relative z-10 opacity-90">
         <Codigo />
      </div>

      {/* ===== TECNOLOGÍAS SECTION ===== */}
      <section className="px-6 py-[120px] md:px-[100px] text-center relative">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <span className="inline-block px-4 py-2 bg-brand/10 border border-brand/30 rounded-full text-brand text-sm font-semibold mb-6">
            Stack Tecnológico
          </span>
          <h2 className="text-[42px] md:text-[56px] font-extrabold mb-6 text-white leading-tight">
            Tecnologías <span className="text-brand">de Vanguardia</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {technologies.map((tech, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand/40 transition-all duration-500">
                <div className="flex flex-col items-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Carrusel Infinito */}
          <div className="relative mt-20">
            <h4 className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-10">Herramientas que dominamos</h4>
            <div className="flex overflow-hidden group py-4">
              <div className="flex animate-marquee whitespace-nowrap group-hover:pause-animation">
                {[...techStack, ...techStack].map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 mx-8 md:mx-12 opacity-50 hover:opacity-100 transition-opacity duration-300" style={{ color: tech.color }}>
                    <span className="text-4xl md:text-5xl">{tech.icon}</span>
                    <span className="text-white font-bold text-xl md:text-2xl">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
        .pause-animation { animation-play-state: paused; }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fade-in-right 0.8s ease-out; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .fill-mode-forwards { animation-fill-mode: forwards; }
      `}</style>
    </div>
  );
};

export default Index;