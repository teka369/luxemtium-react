import React, { useEffect, useRef, useState } from 'react';

interface Proyecto {
  id: number;
  video: string;
  titulo: string;
  subtitulo: string;
}

const Portafolio: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const proyectos: Proyecto[] = [
    { id: 1, video: 'portafolio/1.mp4', titulo: 'Desarrollo E-commerce', subtitulo: 'Web de alto rendimiento' },
    { id: 2, video: 'portafolio/2.mp4', titulo: 'Plataforma Digital', subtitulo: 'Experiencia de usuario premium' },
    { id: 3, video: 'portafolio/3.mp4', titulo: 'Diseño UX/UI', subtitulo: 'Interfaces modernas y fluidas' },
    { id: 4, video: 'portafolio/4.mp4', titulo: 'Web ecomerce', subtitulo: 'Interfaces modernas y fluidas' },
  ];

  useEffect(() => {
    // 1. Lógica del Barrido de salida
    // Inicia en left-0 y después de un micro-delay se mueve a left-full (100%)
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 50);

    // 2. Lógica del Intersection Observer para Videos
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {}); // catch para evitar errores de políticas de autotransmisión
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans overflow-x-hidden">
      
      {/* ===== BARRIDO OVERLAY (SALIDA) ===== */}
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

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <main className="max-w-[1600px] mx-auto px-6 py-20 md:px-[100px] min-h-[80vh]">
        <h2 className="text-center text-3xl md:text-[48px] mb-[70px] tracking-[4px] font-black uppercase">
          PORTAFOLIO <span className="text-brand">LUXENTIUM</span>
        </h2>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-10">
          {proyectos.map((proyecto, index) => (
            <div 
              key={proyecto.id}
              className="bg-brand-card rounded-[20px] overflow-hidden border border-[rgba(255,122,0,0.1)] flex flex-col transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-translate-y-[15px] hover:border-brand hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(255,122,0,0.1)] group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="overflow-hidden bg-black">
                <video 
                  ref={(el) => (videoRefs.current[index] = el!)}
                  src={proyecto.video}
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full aspect-video object-cover block border-b-4 border-brand transition-transform duration-500 group-hover:scale-[1.03] will-change-transform"
                />
              </div>

              <div className="p-[30px] flex-grow flex flex-col justify-center">
                <h3 className="text-brand text-2xl mb-3 uppercase tracking-wider font-bold">
                  {proyecto.titulo}
                </h3>
                <p className="text-[#bbbbbb] text-base leading-relaxed">
                  {proyecto.subtitulo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portafolio;