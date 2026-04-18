import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  BarChart3,
  Bot,
  Globe
} from 'lucide-react';

// IMPORTACIÓN DE IMAGEN
import imgRec from '../../../assets/portafolio/rec.png';

const TuSaaS: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const features = [
    {
      icon: <Layers className="text-brand" size={32} />,
      title: "Arquitectura Escalable",
      desc: "Diseñamos sistemas que crecen con tu negocio, soportando desde 100 hasta millones de usuarios."
    },
    {
      icon: <ShieldCheck className="text-brand" size={32} />,
      title: "Seguridad Robusta",
      desc: "Implementamos los estándares de seguridad más altos para proteger los datos de tus clientes."
    },
    {
      icon: <BarChart3 className="text-brand" size={32} />,
      title: "Analítica Avanzada",
      desc: "Dashboards personalizados para que tomes decisiones basadas en datos reales en tiempo real."
    },
    {
      icon: <Bot className="text-brand" size={32} />,
      title: "IA Integrada",
      desc: "Potenciamos tu SaaS con algoritmos de inteligencia artificial para automatizar procesos."
    }
  ];

  return (
    <div className="bg-transparent min-h-screen text-white font-sans overflow-x-hidden">

      {/* ===== BARRIDO OVERLAY (SALIDA) ===== */}
      <div
        className={`fixed inset-0 h-screen w-full bg-brand flex justify-center items-center z-[99999] transition-[left] duration-800 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${isExiting ? 'left-full' : 'left-0'
          }`}
      >
        <div className={`text-center transition-all duration-400 ${isExiting ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
          <h1 className="text-5xl md:text-[5rem] font-bold tracking-[15px] text-white">
            TU <span className="text-[#111]">SAAS</span>
          </h1>
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative px-6 py-24 md:px-[100px] md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-brand rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-brand rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <span className="inline-block px-5 py-2.5 bg-brand/10 backdrop-blur-md border border-brand/40 rounded-full text-brand text-sm font-bold mb-8 shadow-[0_0_20px_rgba(255,140,0,0.2)] animate-fade-in-up">
            <Rocket className="inline-block w-4 h-4 mr-2" />
            Construcción de Software como Servicio
          </span>

          <h1 className="text-5xl md:text-[75px] font-extrabold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Transformamos tu Idea <br />
            <span className="relative inline-block">
              <span className="text-brand relative z-10">en un SaaS</span>
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

          <p className="text-[#aaa] text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Desarrollo de plataformas digitales robustas, escalables y diseñadas para dominar el mercado.
          </p>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <main className="max-w-[1400px] mx-auto px-6 pb-24 md:px-[100px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div 
              key={i}
              className="p-8 bg-white/[0.03] backdrop-blur-xl rounded-[2rem] border border-white/10 hover:border-brand/40 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${300 + (i * 100)}ms` }}
            >
              <div className="mb-6 p-4 bg-brand/10 rounded-2xl inline-block">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ===== MOCKUP SECTION (CASO DE ÉXITO) ===== */}
        <div className="mt-32 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-center underline decoration-brand underline-offset-[12px]">Caso de Éxito: Recedu</h2>
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-3xl shadow-2xl">
              <div className="aspect-video w-full bg-black/40 flex items-center justify-center relative">
                <img 
                  src={imgRec} 
                  alt="Recedu SaaS Preview" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-end gap-6">
                  <div>
                    <div className="inline-block px-4 py-1.5 bg-brand/20 border border-brand/40 rounded-full text-brand text-xs font-black mb-4 uppercase tracking-[0.2em]">
                      SaaS Educativo Premium
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">Recedu</h2>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
                      La solución definitiva en gestión académica para colegios en Colombia. 
                      Simplificando el futuro de la educación.
                    </p>
                  </div>
                  <a 
                    href="https://recedu.co" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-brand text-white font-black text-lg py-5 px-12 rounded-2xl hover:scale-110 transition-all flex items-center gap-3 shadow-[0_0_40px_rgba(255,140,0,0.3)] hover:shadow-[0_0_60px_rgba(255,140,0,0.5)]"
                  >
                    Explorar Recedu.co
                    <Globe className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Global */}
        <div className="mt-32 p-12 md:p-20 bg-gradient-to-br from-brand/20 to-transparent backdrop-blur-2xl rounded-[3rem] border-2 border-brand/20 text-center relative overflow-hidden group animate-fade-in-up" style={{ animationDelay: '900ms' }}>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8">¿Listo para construir <br /> <span className="text-brand">tu próximo éxito?</span></h2>
            <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
              Llevemos tu idea desde el concepto hasta una plataforma productiva en tiempo récord.
            </p>
            <Link 
              to="/contacto"
              className="inline-flex items-center gap-4 bg-brand text-white font-black text-xl py-5 px-14 rounded-[2rem] hover:shadow-[0_0_50px_rgba(255,140,0,0.4)] hover:scale-110 transition-all"
            >
              Empezar Ahora
              <Cpu className="w-6 h-6" />
            </Link>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand/10 rounded-full blur-[100px]"></div>
        </div>

      </main>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
      `}</style>
    </div>
  );
};

export default TuSaaS;
