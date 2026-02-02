import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacto: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    // REEMPLAZA ESTOS 3 VALORES CON LOS DE TU PANEL DE EMAILJS
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

  return (
    <section className="w-full px-5 py-10 bg-brand-dark min-h-screen flex items-center justify-center">
      <div className="max-w-[600px] w-full bg-brand-card p-8 md:p-[50px] rounded-[20px] border border-[rgba(255,122,0,0.1)] text-center">
        
        {!isSubmitted ? (
          <>
            <h1 className="text-[28px] md:text-[32px] font-bold mb-[10px] tracking-[2px] text-white">
              CONTACTO <span className="text-brand">LUXENTIUM</span>
            </h1>
            <p className="text-[#888] mb-10">Atención personalizada en menos de 24 horas.</p>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-[25px]">
              <div className="text-left">
                <label className="block text-brand text-sm font-bold mb-2 uppercase">Correo electrónico</label>
                <input
                  name="user_email" // Este nombre debe coincidir con tu plantilla de EmailJS
                  type="email"
                  placeholder="ejemplo@gmail.com"
                  required
                  className="w-full p-[15px] bg-brand-dark border border-[#333] rounded-lg text-white focus:border-brand outline-none transition-all"
                />
              </div>

              <div className="text-left">
                <label className="block text-brand text-sm font-bold mb-2 uppercase">Número telefónico</label>
                <input
                  name="user_tel"
                  type="tel"
                  placeholder="3104567890"
                  required
                  className="w-full p-[15px] bg-brand-dark border border-[#333] rounded-lg text-white focus:border-brand outline-none transition-all"
                />
              </div>

              <div className="text-left">
                <label className="block text-brand text-sm font-bold mb-2 uppercase">Tu Solicitud</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="¿En qué podemos ayudarte?"
                  required
                  className="w-full p-[15px] bg-brand-dark border border-[#333] rounded-lg text-white focus:border-brand outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full ${isSending ? 'bg-gray-600' : 'bg-brand hover:bg-[#e66e00]'} text-white p-[15px] rounded-lg text-lg font-bold flex justify-center items-center gap-[10px] transition-all cursor-pointer`}
              >
                {isSending ? 'Enviando...' : 'Enviar Solicitud'}
                {!isSending && <span className="material-symbols-outlined">send</span>}
              </button>
            </form>
          </>
        ) : (
          <div className="p-8 rounded-lg bg-[rgba(255,122,0,0.1)] text-brand border border-brand animate-fade-in-up">
            <span className="material-symbols-outlined text-6xl mb-4">check_circle</span>
            <h2 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h2>
            <p className="text-white opacity-80">Revisaremos tu solicitud y te escribiremos pronto.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-6 text-sm underline opacity-50 hover:opacity-100"
            >
              Enviar otro mensaje
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contacto;