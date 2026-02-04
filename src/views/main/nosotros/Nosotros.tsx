import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Nosotros: React.FC = () => {
  return (
    <main className="bg-brand-dark min-h-screen text-white pt-24 overflow-x-hidden">
      
      {/* ===== 1. HERO: LA ESENCIA ===== */}
      <section className="px-6 md:px-[100px] mb-32">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-block px-4 py-1 rounded-full border border-brand/30 bg-brand/10 text-brand text-sm font-bold uppercase tracking-widest">
              Sobre Luxentium
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Diseñamos el <br />
              <span className="text-brand italic">Futuro Digital</span>.
            </h1>
            <p className="text-[#888] text-xl leading-relaxed">
              ¿Tu negocio aún no tiene página web o la que tienes no genera clientes?
              En Luxentium creamos sitios web modernos, rápidos y optimizados para convertir visitas en ventas. 
              Dale a tu marca la presencia profesional que necesita para crecer en internet.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="3.png" 
              alt="Luxentium Studio" 
              className="relative rounded-2xl border border-white/10 transition-all duration-700 group-hover:scale-[1.02]"
              /* Eliminado grayscale para que siempre sea a color */
            />
          </motion.div>
        </div>
      </section>

      {/* ===== 2. MISIÓN & VISIÓN ===== */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border-y border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-dark p-12 md:p-24 space-y-6"
        >
          <span className="material-symbols-outlined text-brand text-5xl">rocket_launch</span>
          <h2 className="text-3xl font-bold">Nuestra Misión</h2>
          <p className="text-[#888] text-lg leading-relaxed">
            Democratizar el acceso a software de alta gama. Dotamos a emprendedores 
            de herramientas digitales que antes solo estaban al alcance de corporaciones.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-brand-dark p-12 md:p-24 space-y-6"
        >
          <span className="material-symbols-outlined text-brand text-5xl">visibility</span>
          <h2 className="text-3xl font-bold">Nuestra Visión</h2>
          <p className="text-[#888] text-lg leading-relaxed">
            Para el 2028, Luxentium será el referente principal en desarrollo de experiencias 
            digitales premium, rompiendo la barrera entre funcionalidad y arte.
          </p>
        </motion.div>
      </section>

      {/* ===== 3. FILOSOFÍA ===== */}
      <section className="py-32 px-6 md:px-[100px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Filosofía de Trabajo</h2>
            <div className="w-20 h-1 bg-brand mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[ 
              { num: "01", tit: "CALIDAD TOTAL", desc: "Limitamos los proyectos para garantizar total capacidad creativa." },
              { num: "02", tit: "ESTÉTICA REAL", desc: "Entregamos sistemas que son hermosos y funcionalmente perfectos." },
              { num: "03", tit: "EVOLUCIÓN", desc: "Dedicamos tiempo semanal a investigar nuevas tecnologías." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4 p-6 border border-white/5 rounded-xl hover:bg-white/5 transition-colors"
              >
                <h3 className="text-brand font-mono text-lg">{item.num} / {item.tit}</h3>
                <p className="text-[#666]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. MANIFIESTO: EFECTO ESCRIBIR/BORRAR ===== */}
      <section className="bg-brand py-24 px-6 md:px-[100px] text-[#0f0f0f] min-h-[400px] flex items-center">
        <div className="max-w-[1000px] mx-auto text-center space-y-12">
          <div className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight min-h-[150px] md:min-h-[120px]">
            <Typewriter
              options={{
                strings: [
                  'Transformamos ideas en experiencias digitales.',
                  'Creamos sitios web modernos y rápidos.',
                  'Impulsamos el crecimiento de tu negocio.'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="font-bold text-3xl">03</p>
              <p className="text-xs uppercase font-bold opacity-80">Especialistas</p>
            </div>
            <div>
              <p className="font-bold text-3xl">100%</p>
              <p className="text-xs uppercase font-bold opacity-80">Potencial</p>
            </div>
            <div>
              <p className="font-bold text-3xl">Máxima</p>
              <p className="text-xs uppercase font-bold opacity-80">Protección</p>
            </div>
            <div>
              <p className="font-bold text-3xl">Total</p>
              <p className="text-xs uppercase font-bold opacity-80">Garantía</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. CTA FINAL ===== */}
      <section className="py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">¿Listo para elevar tu marca?</h2>
          <Link 
            to="/contacto" 
            className="px-10 py-4 bg-transparent border-2 border-brand text-brand font-bold rounded-full hover:bg-brand hover:text-black transition-all duration-300"
          >
            Hablemos de tu proyecto
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default Nosotros;