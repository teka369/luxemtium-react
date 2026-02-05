import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Globe, 
  TrendingUp, 
  Gem, 
  Rocket,  
  Mail, 
  Clock, 
  Send, 
  CheckCircle2,
  Target
} from 'lucide-react';

import { Link } from 'react-router-dom';

interface Beneficio {
  icono: React.ReactNode;
  titulo: string;
  descripcion: string;
}

const Contacto: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    const SERVICE_ID = 'service_o1fj75h';
    const TEMPLATE_ID = 'template_ik8crgq';
    const PUBLIC_KEY = 'n3jBQO_cVjXXY003A';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log('Mensaje enviado:', result.text);
          setIsSubmitted(true);
      }, (error) => {
          console.log('Error al enviar:', error.text);
          alert("Hubo un error al enviar el mensaje, por favor intenta de nuevo.");
      })
      .finally(() => {
          setIsSending(false);
      });
  };

  const beneficios: Beneficio[] = [
    {
      icono: <Globe className="text-brand" size={40} strokeWidth={1.5} />,
      titulo: 'Presencia Digital',
      descripcion: 'Una web profesional te posiciona como líder indiscutible en tu industria.'
    },
    {
      icono: <TrendingUp className="text-brand" size={40} strokeWidth={1.5} />,
      titulo: 'Más Clientes',
      descripcion: 'Aumenta tu alcance y atrae clientes 24/7 desde cualquier lugar del mundo.'
    },
    {
      icono: <Gem className="text-brand" size={40} strokeWidth={1.5} />,
      titulo: 'Credibilidad',
      descripcion: 'Proyecta la confianza y el profesionalismo que tus clientes potenciales buscan.'
    },
    {
      icono: <Rocket className="text-brand" size={40} strokeWidth={1.5} />,
      titulo: 'Crecimiento',
      descripcion: 'Escala tu negocio sin límites con herramientas digitales diseñadas para ganar.'
    }
  ];

  return (
    /* CAMBIO: bg-transparent para ver el fondo de partículas */
    <div className="bg-transparent min-h-screen text-white overflow-hidden selection:bg-brand/30">
      
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:px-[100px] md:py-32 overflow-hidden">
        {/* Luces decorativas simplificadas para no tapar partículas */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-brand rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-brand rounded-full blur-[180px] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <span className="inline-flex items-center px-5 py-2.5 bg-brand/10 backdrop-blur-md border border-brand/30 rounded-full text-brand text-sm font-bold mb-8 animate-fade-in-up">
            <Mail size={16} className="mr-2" />
            Hablemos de tu Proyecto
          </span>
          
          <h1 className="text-5xl md:text-[65px] font-extrabold mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '100ms'}}>
            Impulsa tu{' '}
            <span className="relative inline-block">
              <span className="text-brand relative z-10">Negocio Online</span>
              <svg className="absolute -bottom-2 left-0 w-full text-brand/50" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                <path d="M2 6 Q 75 2, 150 6 T 298 6" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-[#aaa] text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '200ms'}}>
            Da el paso que tu competencia ya dio. Una presencia digital profesional no es un lujo, es la base de tu éxito futuro.
          </p>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section className="px-6 py-16 md:px-[100px]">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Tarjeta Motivacional - Ahora con backdrop-blur */}
          <div className="mb-16 p-8 md:p-12 bg-white/[0.03] backdrop-blur-md rounded-3xl border border-brand/20 relative overflow-hidden group">
            <div className="relative z-10 text-center">
              <div className="inline-flex p-5 bg-brand/20 rounded-2xl mb-6 text-brand">
                <Target size={48} strokeWidth={1.5} className="animate-pulse" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Dedicación Total a tus Objetivos
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                <span className="text-brand font-bold">El 81% de los consumidores</span> investiga online antes de comprar. 
                Nuestra misión es que cuando te encuentren, vean la mejor versión de tu empresa. 
                <span className="text-white font-semibold italic"> ¿Estás listo para dominar el mercado?</span>
              </p>
            </div>
          </div>

          {/* Grid de Beneficios - Tarjetas transparentes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="group bg-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-brand/40 transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500">
                  {beneficio.icono}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand transition-colors">
                  {beneficio.titulo}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {beneficio.descripcion}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="px-6 py-16 md:px-[100px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                  Tu visión, <br />
                  <span className="text-brand uppercase">Tu web</span>
                </h2>
                <p className="text-gray-400 text-xl leading-relaxed">
                  Cuéntanos tu idea. Te contactaremos en menos de 24 horas para dar el primer paso hacia tu nueva identidad digital.
                </p>
              </div>

              <div className="space-y-5">
                <Link to="mailto:luxentium1@gmail.com" className="group flex items-center gap-5 p-5 bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-brand/40 transition-all duration-300">
                  <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center text-brand group-hover:scale-110 transition-transform">
                    <Mail size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Escríbenos</p>
                    <p className="text-white font-bold text-lg">luxentium1@gmail.com</p>
                  </div>
                </Link>

                <div className="flex items-center gap-5 p-5 bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl">
                  <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center text-brand">
                    <Clock size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Atención</p>
                    <p className="text-white font-bold text-lg">24/7</p>
                  </div>
                </div>
              </div>

              {/* Stats Rápidas */}
              <div className="grid grid-cols-3 gap-6 p-8 bg-brand/10 backdrop-blur-md rounded-3xl border border-brand/20">
                <div className="text-center">
                  <div className="text-3xl font-black text-white mb-1">&lt;24h</div>
                  <div className="text-[10px] text-brand font-bold uppercase tracking-tighter">Respuesta</div>
                </div>
                <div className="text-center border-x border-white/10">
                  <div className="text-3xl font-black text-white mb-1">100%</div>
                  <div className="text-[10px] text-brand font-bold uppercase tracking-tighter">Gratis</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white mb-1">Cero</div>
                  <div className="text-[10px] text-brand font-bold uppercase tracking-tighter">Compromiso</div>
                </div>
              </div>
            </div>

            {/* Formulario Glassmorphism */}
            <div className="relative">
              <div className="absolute -inset-4 bg-brand/20 rounded-[2rem] blur-3xl opacity-20"></div>
              <div className="relative bg-white/[0.03] backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl">
                
                {!isSubmitted ? (
                  <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                    <div className="text-center mb-10">
                      <h3 className="text-3xl font-bold text-white mb-2">Empieza Ahora</h3>
                      <p className="text-gray-500">Tu transformación digital está a un clic</p>
                    </div>

                    <div className="space-y-4">
                      <input
                        name="user_name"
                        type="text"
                        placeholder="Nombre Completo"
                        required
                        className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
                      />
                      <input
                        name="user_email"
                        type="email"
                        placeholder="Tu Correo Electrónico"
                        required
                        className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
                      />
                      <input
                        name="user_tel"
                        type="tel"
                        placeholder="Número Telefónico (WhatsApp)"
                        required
                        className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
                      />
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Cuéntanos brevemente sobre tu proyecto..."
                        required
                        className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full bg-brand hover:bg-[#ff9500] text-white font-black py-5 rounded-xl transition-all duration-300 flex justify-center items-center gap-3 shadow-xl shadow-brand/20 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isSending ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          ENVIANDO...
                        </span>
                      ) : (
                        <>
                          ENVIAR SOLICITUD
                          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center animate-fade-in-up">
                    <div className="flex justify-center mb-8">
                      <div className="p-6 bg-brand/10 rounded-full">
                        <CheckCircle2 size={80} className="text-brand" strokeWidth={1} />
                      </div>
                    </div>
                    <h2 className="text-4xl font-black mb-4">¡Recibido!</h2>
                    <p className="text-gray-400 text-lg mb-8">
                      Hemos recibido tu mensaje. Nos pondremos en contacto contigo en tiempo récord.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="text-brand font-bold hover:text-white transition-colors">
                      ← ENVIAR OTRO MENSAJE
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Contacto;