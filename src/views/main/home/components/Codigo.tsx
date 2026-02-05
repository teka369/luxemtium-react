import React, { useState, useEffect } from 'react';
import { Zap, Palette, ShieldCheck } from 'lucide-react';

const Codigo = () => {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(50);

  // El código que queremos mostrar
  const codeSnippet = `import React from 'react';

const Luxentium = () => {
  return (
    <div className="elite">
      <Hero premium={true} />
      <Speed velocity="100%" />
    </div>
  );
};

export default Luxentium;`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && index < codeSnippet.length) {
        setDisplayText((prev) => prev + codeSnippet[index]);
        setIndex((prev) => prev + 1);
        setTypingSpeed(40);
      } else if (isDeleting && index > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
        setTypingSpeed(20);
      } else if (!isDeleting && index === codeSnippet.length) {
        setTimeout(() => setIsDeleting(true), 3000); // Pausa al terminar
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, codeSnippet, typingSpeed]);

  // Función para dar color a las palabras clave dinámicamente
  const renderColoredCode = (text: string) => {
    return text.split(/(\s+|[(){}[\]<>=";:.']|import|from|const|return|export|default|div|className)/).map((part, i) => {
      if (['import', 'from', 'const', 'return', 'export', 'default'].includes(part)) {
        return <span key={i} className="text-[#c586c0]">{part}</span>;
      }
      if (['Luxentium', 'Hero', 'Speed', 'React'].includes(part)) {
        return <span key={i} className="text-[#4ec9b0]">{part}</span>;
      }
      if (part.startsWith('"') || part.startsWith("'") || part.endsWith('"') || part.endsWith("'")) {
        return <span key={i} className="text-[#ce9178]">{part}</span>;
      }
      if (['div', 'className', 'premium', 'velocity'].includes(part)) {
        return <span key={i} className="text-[#9cdcfe]">{part}</span>;
      }
      if (['{', '}', '(', ')', '<', '>', '=', ';'].includes(part)) {
        return <span key={i} className="text-[#d4d4d4]">{part}</span>;
      }
      return <span key={i} className="text-[#9cdcfe]">{part}</span>;
    });
  };

  return (
    <section className="px-6 py-[120px] md:px-[100px] bg-transparent relative overflow-hidden">
      
      {/* Fondo Grid Decorativo */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,140,0,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,140,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* TEXTO IZQUIERDA */}
          <div className="relative z-10 text-center md:text-left order-2 md:order-1">
            <span className="inline-block px-5 py-2.5 bg-brand/10 backdrop-blur-md border border-brand/40 rounded-full text-brand text-sm font-bold mb-8">
              <span className="inline-block w-2 h-2 bg-brand rounded-full mr-2 animate-pulse"></span>
              Código de Élite
            </span>
            
            <h2 className="text-[45px] md:text-[62px] font-extrabold mb-8 text-white leading-[1.1]">
              Páginas Web <span className="text-brand">Profesionales</span>
            </h2>
            
            <p className="text-[#aaa] text-[19px] md:text-[21px] leading-relaxed mb-10 max-w-[550px] mx-auto md:mx-0">
              Desarrollo limpio, escalable y optimizado al máximo para <span className="text-white font-semibold">resultados reales</span>.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <Zap className="text-brand w-7 h-7" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="text-white font-bold text-lg mb-1.5">Velocidad que Vende</h4>
                  <p className="text-gray-400 text-[15px]">Sitios web que cargan en menos de un segundo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <Palette className="text-brand w-7 h-7" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="text-white font-bold text-lg mb-1.5">Diseño Premium</h4>
                  <p className="text-gray-400 text-[15px]">Interfaces modernas que captan la atención.</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-brand/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand mb-1">100%</div>
                <div className="text-[10px] text-gray-400 uppercase font-bold">Seguro</div>
              </div>
              <div className="text-center border-x border-brand/20">
                <div className="text-3xl font-bold text-brand mb-1">&lt;1s</div>
                <div className="text-[10px] text-gray-400 uppercase font-bold">Carga inmediata</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand mb-1">Alta</div>
                <div className="text-[10px] text-gray-400 uppercase font-bold">visualisacion en Google</div>
              </div>
            </div>
          </div>

          {/* EDITOR DERECHA */}
          <div className="relative z-10 order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-6 bg-brand/10 rounded-3xl blur-3xl group-hover:bg-brand/20 transition-all"></div>
              
              <div className="relative bg-[#1e1e1e]/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <div className="bg-white/5 px-5 py-3.5 flex items-center gap-3 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <span className="flex-1 text-center text-gray-400 text-sm font-mono">Luxentium.tsx</span>
                </div>

                <div className="p-6 font-mono text-[14px] h-[380px] overflow-hidden bg-transparent">
                  <pre className="text-left leading-relaxed whitespace-pre-wrap">
                    <code>
                      {renderColoredCode(displayText)}
                      <span className="animate-blink inline-block ml-1 w-2.5 h-5 bg-brand align-middle"></span>
                    </code>
                  </pre>
                </div>

                <div className="bg-brand/20 backdrop-blur-md px-5 py-2.5 flex items-center justify-between text-[10px] border-t border-white/10">
                  <span className="text-white font-semibold">LIVE_EDITOR</span>
                  <span className="text-white/70">TypeScript React</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
        .animate-blink { animation: blink 0.8s infinite; }
      `}</style>
    </section>
  );
};

export default Codigo;