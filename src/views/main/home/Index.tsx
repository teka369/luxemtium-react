import { 
  Code2, 
  Globe, 
  Cpu, 
  Smartphone, 
  Layout, 
  Database, 
  Cloud, 
  ShieldCheck,
  Zap,
  Palette,
} from 'lucide-react';

import { 
  SiHtml5, SiCss3, SiTailwindcss, SiReact, 
  SiTypescript, SiNodedotjs, SiExpress, SiNestjs, SiPostgresql 
} from 'react-icons/si';


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Interfaz para los datos de las tarjetas
interface PilarProps {
  icon: string;
  title: string;
  description: string;
}

interface TechProps {
  name: string;
  icon: string;
  color: string;
  description: string;
}

const Index: React.FC = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [typedText, setTypedText] = useState('');
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

  

  const handlePortfolioClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsNavigating(true);

    setTimeout(() => {
      window.location.href = '/portafolio';
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
      <main className="relative flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-[100px] md:py-[80px] min-h-[85vh] text-center md:text-left gap-10 md:gap-0 overflow-hidden">
        
        {/* Partículas de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand/5 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Texto Hero */}
        <div className="flex-1 md:pr-[50px] animate-fade-in-up relative z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-brand/10 border border-brand/30 rounded-full">
            <span className="text-brand text-sm font-semibold">✨ Desarrollo Web Premium</span>
          </div>
          
          <h1 className="text-[45px] md:text-[70px] leading-[1.1] mb-6 font-bold">
            Luxentium <span className="text-brand relative">
              Developing
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand to-transparent"></span>
            </span>
          </h1>
          
          <p className="text-[18px] md:text-[22px] text-[#ccc] mb-[35px] leading-relaxed max-w-[600px]">
            Soluciones digitales de <span className="text-white font-semibold">alto impacto</span>. Creamos el futuro de tu presencia web con tecnologías avanzadas y diseños innovadores.
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
              onClick={handlePortfolioClick}
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
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand/20 to-transparent rounded-[30px] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50 group-hover:opacity-100"></div>
            
            <img 
              src="desarrollo.png" 
              alt="Desarrollo Web Luxentium" 
              className="w-full max-w-[550px] rounded-[20px] drop-shadow-[0_0_30px_rgba(255,122,0,0.3)] animate-float [animation-delay:1.2s] relative z-10 border border-brand/20"
            />
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-brand/30 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand/20 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </main>

      {/* ===== PILARES SECTION ===== */}
      <section className="px-6 py-[100px] md:px-[100px] bg-gradient-to-b from-brand-dark to-[#0a0a0a] text-center relative">
        {/* Decoración de fondo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-[900px] mx-auto mb-[60px] relative z-10">
          <span className="inline-block px-4 py-2 bg-brand/10 border border-brand/30 rounded-full text-brand text-sm font-semibold mb-6">
            Nuestra Filosofía
          </span>
          
          <h2 className="text-[42px] md:text-[52px] font-extrabold mb-6 text-white">
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
              className="group bg-gradient-to-br from-brand-card to-brand-card/50 p-[45px_35px] rounded-[25px] flex-1 min-w-[300px] max-w-[380px] text-center border border-brand/10 transition-all duration-500 hover:-translate-y-3 hover:border-brand/50 hover:shadow-[0_20px_60px_rgba(255,122,0,0.2)] relative overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Glow effect en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/0 via-brand/5 to-brand/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Contenido */}
              <div className="relative z-10">
                <div className="inline-block p-4 bg-brand/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <span className="material-symbols-outlined !text-[55px] text-brand block">
                    {pilar.icon}
                  </span>
                </div>
                
                <h3 className="text-[24px] text-white tracking-wide mb-[15px] font-bold group-hover:text-brand transition-colors duration-300">
                  {pilar.title}
                </h3>
                
                <p className="text-[#ccc] leading-[1.8] text-[16px]">
                  {pilar.description}
                </p>
              </div>

              {/* Decoración esquina */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECCIÓN DE CÓDIGO PROFESIONAL ===== */}
<section className="px-6 py-[120px] md:px-[100px] bg-[#0a0a0a] relative overflow-hidden">
  {/* Fondo decorativo con grid */}
  <div className="absolute inset-0 opacity-[0.03]">
    <div className="absolute inset-0" style={{
      backgroundImage: `linear-gradient(rgba(255,140,0,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,140,0,0.1) 1px, transparent 1px)`,
      backgroundSize: '50px 50px'
    }}></div>
  </div>

  <div className="absolute inset-0 opacity-5">
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand rounded-full blur-[200px]"></div>
    <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand rounded-full blur-[180px]"></div>
  </div>

  <div className="max-w-[1400px] mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      
      {/* Lado izquierdo - Texto */}
      <div className="relative z-10 text-center md:text-left order-2 md:order-1">
        <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-brand/20 to-brand/5 border border-brand/40 rounded-full text-brand text-sm font-bold mb-8 shadow-[0_0_20px_rgba(255,140,0,0.2)]">
          <span className="inline-block w-2 h-2 bg-brand rounded-full mr-2 animate-pulse"></span>
          Código de Élite
        </span>
        
        <h2 className="text-[45px] md:text-[62px] font-extrabold mb-8 text-white leading-[1.1]">
          Páginas Web{' '}
          <span className="relative inline-block">
            <span className="text-brand relative z-10">Profesionales</span>
            {/* Subrayado animado */}
            <svg 
              className="absolute -bottom-2 left-0 w-full text-brand" 
              viewBox="0 0 300 12" 
              fill="none"
              preserveAspectRatio="none"
            >
              <path 
                d="M2 6 Q 75 2, 150 6 T 298 6" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none"
                className="animate-draw-line"
              />
            </svg>
            {/* Partículas alrededor */}
            <span className="absolute -top-2 -right-2 w-3 h-3 bg-brand rounded-full animate-ping"></span>
            <span className="absolute -bottom-2 -left-2 w-2 h-2 bg-brand/60 rounded-full animate-pulse"></span>
          </span>
        </h2>
        
        <p className="text-[#aaa] text-[19px] md:text-[21px] leading-relaxed mb-10 max-w-[550px] mx-auto md:mx-0">
          Cada línea de código está pensada para crear{' '}
          <span className="text-white font-semibold">experiencias digitales excepcionales</span>. 
          Desarrollo limpio, escalable y optimizado al máximo.
        </p>

        {/* Features mejoradas */}
<div className="space-y-6 mb-10">
  {/* Velocidad */}
  <div className="flex items-start gap-4 group">
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand/20 to-brand/5 border border-brand/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
      <Zap className="text-brand w-7 h-7" strokeWidth={1.5} />
    </div>
    <div className="text-left flex-1">
      <h4 className="text-white font-bold text-lg mb-1.5 group-hover:text-brand transition-colors">
        Velocidad que Vende
      </h4>
      <p className="text-gray-400 text-[15px] leading-relaxed">
        Nadie espera una web lenta. Optimizamos tu sitio para que cargue al instante, evitando que tus clientes se vayan a la competencia.
      </p>
    </div>
  </div>

  {/* Diseño */}
  <div className="flex items-start gap-4 group">
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand/20 to-brand/5 border border-brand/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
      <Palette className="text-brand w-7 h-7" strokeWidth={1.5} />
    </div>
    <div className="text-left flex-1">
      <h4 className="text-white font-bold text-lg mb-1.5 group-hover:text-brand transition-colors">
        Imagen Profesional Única
      </h4>
      <p className="text-gray-400 text-[15px] leading-relaxed">
        Tu marca merece verse impecable. Creamos interfaces atractivas que generan confianza y proyectan la calidad de tus servicios.
      </p>
    </div>
  </div>

  {/* Estabilidad */}
  <div className="flex items-start gap-4 group">
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand/20 to-brand/5 border border-brand/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
      <ShieldCheck className="text-brand w-7 h-7" strokeWidth={1.5} />
    </div>
    <div className="text-left flex-1">
      <h4 className="text-white font-bold text-lg mb-1.5 group-hover:text-brand transition-colors">
        Tecnología sin Fallos
      </h4>
      <p className="text-gray-400 text-[15px] leading-relaxed">
        Construimos sobre bases sólidas y seguras para que nunca tengas que preocuparte por caídas o errores técnicos mientras creces.
      </p>
    </div>
  </div>
</div>

        {/* Estadísticas enfocadas al cliente */}
<div className="grid grid-cols-3 gap-6 p-6 bg-gradient-to-r from-brand/5 to-transparent rounded-2xl border border-brand/20">
  
  {/* Disponibilidad */}
  <div className="text-center">
    <div className="text-3xl font-bold text-brand mb-1">99.9%</div>
    <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide font-semibold">
      Negocio <br className="md:hidden" /> Siempre Online
    </div>
  </div>

  {/* Velocidad */}
  <div className="text-center border-x border-brand/20 px-2">
    <div className="text-3xl font-bold text-brand mb-1">&lt;1s</div>
    <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide font-semibold">
      Respuesta <br className="md:hidden" /> Al Instante
    </div>
  </div>

  {/* Visibilidad */}
  <div className="text-center">
    <div className="text-3xl font-bold text-brand mb-1">A+</div>
    <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide font-semibold">
      excelente <br className="md:hidden" /> Visibilidad Google
    </div>
  </div>
</div>
      </div>

      {/* Lado derecho - Editor de código mejorado */}
      <div className="relative z-10 order-1 md:order-2">
        <div className="relative">
          {/* Glow effect principal */}
          <div className="absolute -inset-6 bg-gradient-to-r from-brand/30 via-brand/10 to-transparent rounded-3xl blur-3xl animate-pulse"></div>
          
          {/* Editor */}
          <div className="relative bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.6)] border border-brand/30">
            
            {/* Header del editor */}
            <div className="bg-gradient-to-r from-[#2d2d2d] to-[#252525] px-5 py-3.5 flex items-center gap-3 border-b border-brand/20">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:brightness-110 transition-all cursor-pointer shadow-lg"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] hover:brightness-110 transition-all cursor-pointer shadow-lg"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] hover:brightness-110 transition-all cursor-pointer shadow-lg"></div>
              </div>
              <div className="flex-1 flex items-center justify-center gap-2">
                <span className="text-gray-400 text-sm font-medium">LuxentiumHomePage.tsx</span>
                <div className="w-2 h-2 bg-brand rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 bg-brand/20 rounded text-brand text-xs font-bold">
                  TSX
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-[#252525] px-4 py-2 flex gap-3 border-b border-brand/10 overflow-x-auto">
              <div className="px-3 py-1.5 bg-[#1e1e1e] rounded-t text-white text-xs font-medium flex items-center gap-2 border-t-2 border-brand whitespace-nowrap">
                <span>📄</span> LuxentiumHomePage.tsx
              </div>
              <div className="px-3 py-1.5 text-gray-500 text-xs font-medium flex items-center gap-2 hover:text-gray-300 transition-colors whitespace-nowrap">
                <span>🎨</span> styles.css
              </div>
              <div className="px-3 py-1.5 text-gray-500 text-xs font-medium flex items-center gap-2 hover:text-gray-300 transition-colors whitespace-nowrap">
                <span>⚙️</span> config.ts
              </div>
            </div>

            {/* Contenido del código - Estructura real de tu página */}
            <div className="p-6 font-mono text-[13px] h-[480px] overflow-auto bg-[#1e1e1e] custom-scrollbar">
              <pre className="text-left leading-relaxed">
                <code>
                  {/* Línea 1 */}
                  <div className="flex hover:bg-white/5 transition-colors">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">1</span>
                    <span className="text-[#c586c0]">import</span>
                    <span className="text-[#d4d4d4]"> React </span>
                    <span className="text-[#c586c0]">from</span>
                    <span className="text-[#ce9178]"> 'react'</span>
                    <span className="text-[#d4d4d4]">;</span>
                  </div>

                  {/* Línea 2 */}
                  <div className="flex hover:bg-white/5 transition-colors">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">2</span>
                    <span className="text-gray-600">// Componentes principales de Luxentium</span>
                  </div>

                  {/* Línea 3 - vacía */}
                  <div className="flex">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">3</span>
                  </div>

                  {/* Línea 4 */}
                  <div className="flex hover:bg-white/5 transition-colors">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">4</span>
                    <span className="text-[#c586c0]">const</span>
                    <span className="text-[#4fc1ff]"> LuxentiumHomePage</span>
                    <span className="text-[#d4d4d4]"> = () </span>
                    <span className="text-[#c586c0]">=&gt;</span>
                    <span className="text-[#d4d4d4]"> {'{'}</span>
                  </div>

                  {/* Línea 5 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-4">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">5</span>
                    <span className="text-[#c586c0]">return</span>
                    <span className="text-[#d4d4d4]"> (</span>
                  </div>

                  {/* Línea 6 - Hero Section */}
                  <div className="flex hover:bg-white/5 transition-colors pl-8">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">6</span>
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#4ec9b0]">main</span>
                    <span className="text-[#9cdcfe]"> className</span>
                    <span className="text-[#d4d4d4]">=</span>
                    <span className="text-[#ce9178]">"hero-section"</span>
                    <span className="text-[#808080]">&gt;</span>
                  </div>

                  {/* Línea 7 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-12">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">7</span>
                    <span className="text-gray-600">{'{'}</span>
                    <span className="text-[#ce9178]">/* Título principal con animación */</span>
                    <span className="text-gray-600">{'}'}</span>
                  </div>

                  {/* Línea 8 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-12">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">8</span>
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#4ec9b0]">h1</span>
                    <span className="text-[#9cdcfe]"> className</span>
                    <span className="text-[#d4d4d4]">=</span>
                    <span className="text-[#ce9178]">"gradient-text animate-fade-in"</span>
                    <span className="text-[#808080]">&gt;</span>
                  </div>

                  {/* Línea 9 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-16">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">9</span>
                    <span className="text-[#d4d4d4]">Luxentium </span>
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#4ec9b0]">span</span>
                    <span className="text-[#808080]">&gt;</span>
                    <span className="text-brand font-bold">Developing</span>
                    <span className="text-[#808080]">&lt;/</span>
                    <span className="text-[#4ec9b0]">span</span>
                    <span className="text-[#808080]">&gt;</span>
                  </div>

                  {/* Línea 10 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-12">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">10</span>
                    <span className="text-[#808080]">&lt;/</span>
                    <span className="text-[#4ec9b0]">h1</span>
                    <span className="text-[#808080]">&gt;</span>
                  </div>

                  {/* Línea 11 - vacía */}
                  <div className="flex">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">11</span>
                  </div>

                  {/* Línea 12 - Descripción */}
                  <div className="flex hover:bg-white/5 transition-colors pl-12">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">12</span>
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#4ec9b0]">p</span>
                    <span className="text-[#9cdcfe]"> className</span>
                    <span className="text-[#d4d4d4]">=</span>
                    <span className="text-[#ce9178]">"hero-description"</span>
                    <span className="text-[#808080]">&gt;</span>
                  </div>

                  {/* Línea 13 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-16">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">13</span>
                    <span className="text-[#d4d4d4]">Soluciones digitales de alto impacto</span>
                  </div>

                  {/* Línea 14 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-12">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">14</span>
                    <span className="text-[#808080]">&lt;/</span>
                    <span className="text-[#4ec9b0]">p</span>
                    <span className="text-[#808080]">&gt;</span>
                  </div>

                  {/* Línea 15 - vacía */}
                  <div className="flex">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">15</span>
                  </div>

                  {/* Línea 16 - CTAs */}
                  <div className="flex hover:bg-white/5 transition-colors pl-12">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">16</span>
                    <span className="text-gray-600">{'{'}</span>
                    <span className="text-[#ce9178]">/* Botones de acción */</span>
                    <span className="text-gray-600">{'}'}</span>
                  </div>

                  {/* Línea 17 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-12">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">17</span>
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#4ec9b0]">div</span>
                    <span className="text-[#9cdcfe]"> className</span>
                    <span className="text-[#d4d4d4]">=</span>
                    <span className="text-[#ce9178]">"cta-buttons"</span>
                    <span className="text-[#808080]">&gt;</span>
                  </div>

                  {/* Línea 18 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-16">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">18</span>
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#4ec9b0]">Button</span>
                    <span className="text-[#9cdcfe]"> variant</span>
                    <span className="text-[#d4d4d4]">=</span>
                    <span className="text-[#ce9178]">"primary"</span>
                    <span className="text-[#808080]">&gt;</span>
                    <span className="text-[#d4d4d4]">Cotizar</span>
                    <span className="text-[#808080]">&lt;/</span>
                    <span className="text-[#4ec9b0]">Button</span>
                    <span className="text-[#808080]">&gt;</span>
                  </div>

                  {/* Línea 19 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-16">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">19</span>
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#4ec9b0]">Button</span>
                    <span className="text-[#9cdcfe]"> variant</span>
                    <span className="text-[#d4d4d4]">=</span>
                    <span className="text-[#ce9178]">"outline"</span>
                    <span className="text-[#808080]">&gt;</span>
                    <span className="text-[#d4d4d4]">Portafolio</span>
                    <span className="text-[#808080]">&lt;/</span>
                    <span className="text-[#4ec9b0]">Button</span>
                    <span className="text-[#808080]">&gt;</span>
                  </div>

                  {/* Línea 20 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-12">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">20</span>
                    <span className="text-[#808080]">&lt;/</span>
                    <span className="text-[#4ec9b0]">div</span>
                    <span className="text-[#808080]">&gt;</span>
                  </div>

                  {/* Línea 21 - vacía */}
                  <div className="flex">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">21</span>
                  </div>

                  {/* Línea 22 - Stats */}
                  <div className="flex hover:bg-white/5 transition-colors pl-12">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">22</span>
                    <span className="text-gray-600">{'{'}</span>
                    <span className="text-[#ce9178]">/* Estadísticas impactantes */</span>
                    <span className="text-gray-600">{'}'}</span>
                  </div>

                  {/* Línea 23 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-12">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">23</span>
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#4ec9b0]">StatsSection</span>
                    <span className="text-[#808080]"> /&gt;</span>
                  </div>

                  {/* Línea 24 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-8">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">24</span>
                    <span className="text-[#808080]">&lt;/</span>
                    <span className="text-[#4ec9b0]">main</span>
                    <span className="text-[#808080]">&gt;</span>
                  </div>

                  {/* Línea 25 - vacía */}
                  <div className="flex">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">25</span>
                  </div>

                  {/* Línea 26 - Pilares */}
                  <div className="flex hover:bg-white/5 transition-colors pl-8">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">26</span>
                    <span className="text-gray-600">{'{'}</span>
                    <span className="text-[#ce9178]">/* Sección de Pilares */</span>
                    <span className="text-gray-600">{'}'}</span>
                  </div>

                  {/* Línea 27 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-8">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">27</span>
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#4ec9b0]">section</span>
                    <span className="text-[#9cdcfe]"> className</span>
                    <span className="text-[#d4d4d4]">=</span>
                    <span className="text-[#ce9178]">"pilares-section"</span>
                    <span className="text-[#808080]">&gt;</span>
                  </div>

                  {/* Línea 28 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-12">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">28</span>
                    <span className="text-gray-600">{'{'}</span>
                    <span className="text-[#dcdcaa]">pilares</span>
                    <span className="text-[#d4d4d4]">.</span>
                    <span className="text-[#dcdcaa]">map</span>
                    <span className="text-[#d4d4d4]">((</span>
                    <span className="text-[#9cdcfe]">pilar</span>
                    <span className="text-[#d4d4d4]">) </span>
                    <span className="text-[#c586c0]">=&gt;</span>
                    <span className="text-[#d4d4d4]"> (</span>
                  </div>

                  {/* Línea 29 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-16">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">29</span>
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#4ec9b0]">PilarCard</span>
                    <span className="text-[#9cdcfe]"> key</span>
                    <span className="text-[#d4d4d4]">=</span>
                    <span className="text-gray-600">{'{'}</span>
                    <span className="text-[#9cdcfe]">pilar</span>
                    <span className="text-[#d4d4d4]">.</span>
                    <span className="text-[#9cdcfe]">id</span>
                    <span className="text-gray-600">{'}'}</span>
                    <span className="text-[#808080]"> /&gt;</span>
                  </div>

                  {/* Línea 30 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-12">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">30</span>
                    <span className="text-[#d4d4d4]">))</span>
                    <span className="text-gray-600">{'}'}</span>
                  </div>

                  {/* Línea 31 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-8">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">31</span>
                    <span className="text-[#808080]">&lt;/</span>
                    <span className="text-[#4ec9b0]">section</span>
                    <span className="text-[#808080]">&gt;</span>
                  </div>

                  {/* Línea 32 - vacía */}
                  <div className="flex">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">32</span>
                  </div>

                  {/* Línea 33 - Tecnologías */}
                  <div className="flex hover:bg-white/5 transition-colors pl-8">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">33</span>
                    <span className="text-gray-600">{'{'}</span>
                    <span className="text-[#ce9178]">/* Stack Tecnológico */</span>
                    <span className="text-gray-600">{'}'}</span>
                  </div>

                  {/* Línea 34 */}
                  <div className="flex hover:bg-white/5 transition-colors pl-8">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">34</span>
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#4ec9b0]">TechStack</span>
                    <span className="text-[#9cdcfe]"> technologies</span>
                    <span className="text-[#d4d4d4]">=</span>
                    <span className="text-gray-600">{'{'}</span>
                    <span className="text-[#9cdcfe]">techList</span>
                    <span className="text-gray-600">{'}'}</span>
                    <span className="text-[#808080]"> /&gt;</span>
                  </div>

                  {/* Línea 35 - Cierre */}
                  <div className="flex hover:bg-white/5 transition-colors pl-4">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">35</span>
                    <span className="text-[#d4d4d4]">);</span>
                  </div>

                  {/* Línea 36 */}
                  <div className="flex hover:bg-white/5 transition-colors">
                    <span className="text-gray-500 select-none mr-6 text-right w-8">36</span>
                    <span className="text-[#d4d4d4]">{'}'}</span>
                    <span className="animate-blink inline-block ml-1 w-2 h-5 bg-white"></span>
                  </div>
                </code>
              </pre>
            </div>

            {/* Footer del editor */}
            <div className="bg-gradient-to-r from-[#007acc] to-[#005a9e] px-5 py-2.5 flex items-center justify-between text-xs border-t border-brand/20">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">TypeScript React</span>
                </div>
                <span className="text-white/70">UTF-8</span>
                <span className="text-white/70">LF</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white/70">Ln 36, Col 2</span>
                <span className="text-white font-semibold flex items-center gap-2">
                  <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Building...
                </span>
              </div>
            </div>
          </div>

          
        </div>
      </div>

    </div>
  </div>

  {/* CSS adicional para el scrollbar personalizado y animación de cursor */}
  <style>{`
    .custom-scrollbar::-webkit-scrollbar {
      width: 10px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #1e1e1e;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(255, 140, 0, 0.3);
      border-radius: 5px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 140, 0, 0.5);
    }

    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }

    .animate-blink {
      animation: blink 1s infinite;
    }

    @keyframes draw-line {
      from {
        stroke-dasharray: 300;
        stroke-dashoffset: 300;
      }
      to {
        stroke-dasharray: 300;
        stroke-dashoffset: 0;
      }
    }

    .animate-draw-line {
      animation: draw-line 2s ease-out infinite;
    }
  `}</style>
</section>

      {/* ===== TECNOLOGÍAS SECTION ===== */}
      <section className="px-6 py-[120px] md:px-[100px] text-center relative overflow-hidden">
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <span className="inline-block px-4 py-2 bg-brand/10 border border-brand/30 rounded-full text-brand text-sm font-semibold mb-6">
            Stack Tecnológico
          </span>
          
          <h2 className="text-[42px] md:text-[56px] font-extrabold mb-6 text-white leading-tight">
            Tecnologías <span className="text-brand">de Vanguardia</span>
          </h2>

          {/* Grid Principal */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {technologies.map((tech, index) => (
              <div key={index} className="group relative bg-[#151515] p-8 rounded-2xl border border-brand/10 hover:border-brand/40 transition-all duration-500">
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ===== CARRUSEL INFINITO ===== */}
          <div className="relative mt-20">
            <h4 className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-10">Herramientas que dominamos</h4>
            
            {/* Contenedor del Carrusel */}
            <div className="flex overflow-hidden group py-4">
              {/* Duplicamos el contenido para que el loop sea infinito */}
              <div className="flex animate-marquee whitespace-nowrap group-hover:pause-animation">
                {[...techStack, ...techStack].map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 mx-8 md:mx-12 opacity-50 hover:opacity-100 transition-opacity duration-300"
                    style={{ color: tech.color }}
                  >
                    <span className="text-4xl md:text-5xl">{tech.icon}</span>
                    <span className="text-white font-bold text-xl md:text-2xl tracking-tight">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Degradados laterales para ocultar el corte */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
          </div>
        </div>
      </section>
    
  );

      {/* CSS Personalizado para animaciones */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Index;