import React from 'react';
import { 
  Code2, 
  Palette, 
  TrendingUp, 
  Workflow, 
  ShieldCheck, 
  Clock, 
  LifeBuoy, 
  Heart, 
  Lock, 
  LineChart,
  ChevronRight,
  Zap
} from 'lucide-react';

interface Servicio {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  icono: React.ReactNode;
  caracteristicas: string[];
  destacado?: boolean;
  color: string;
}

interface Garantia {
  icono: React.ReactNode;
  titulo: string;
  descripcion: string;
  color: string;
}

const Servicios: React.FC = () => {
  const listaServicios: Servicio[] = [
    {
      id: 1,
      titulo: 'Desarrollo Web Premium',
      descripcion: 'No solo creamos webs, construimos motores de venta rápidos, seguros y diseñados para convertir visitas en clientes.',
      imagen: 'web-dev.jpg',
      icono: <Code2 size={32} strokeWidth={1.5} />,
      color: "#61DAFB",
      caracteristicas: [
        'Carga Instantánea',
        'Diseño para Móviles',
        'Google-Friendly (SEO)',
        'Panel Autoadministrable'
      ]
    },
    {
      id: 2,
      titulo: 'Diseño UX/UI Profesional',
      descripcion: 'Interfaces que enamoran a primera vista. Creamos experiencias visuales que proyectan la máxima calidad de tu marca.',
      imagen: 'smart_toybase.png',
      icono: <Palette size={32} strokeWidth={1.5} />,
      color: "#EC4899",
      caracteristicas: [
        'Imagen Exclusiva',
        'Fácil de Navegar',
        'Prototipos Previos',
        'Identidad de Marca'
      ]
    },
    {
      id: 3,
      titulo: 'Estrategia de Crecimiento SEO',
      descripcion: 'Hacemos que tus clientes ideales te encuentren antes que a nadie. Escalamos posiciones en Google para dominar tu sector.',
      imagen: 'seo.png',
      icono: <LineChart size={32} strokeWidth={1.5} />,
      color: "#22C55E",
      caracteristicas: [
        'Atracción de Clientes',
        'Análisis de Competencia',
        'Contenido que Vende',
        'Reportes Mensuales'
      ]
    },
    {
      id: 4,
      titulo: 'Automatización con n8n',
      descripcion: 'Tu negocio trabajando en piloto automático 24/7. Conectamos tus herramientas para que ahorres horas de trabajo manual cada día.',
      imagen: 'n8n.jpg',
      icono: <Workflow size={40} strokeWidth={1.5} />,
      color: "#FF7A00",
      destacado: true,
      caracteristicas: [
        'Ahorro de Tiempo Real',
        'Conexión de Aplicaciones',
        'Cero Errores Humanos',
        'Control Total del Flujo'
      ]
    }
  ];

  const garantias: Garantia[] = [
    {
      icono: <ShieldCheck size={48} strokeWidth={1.2} />,
      titulo: 'Calidad de Clase Mundial',
      descripcion: 'Recibe un producto impecable, desarrollado bajo los más altos estándares internacionales.',
      color: "#FF7A00"
    },
    {
      icono: <Clock size={48} strokeWidth={1.2} />,
      titulo: 'Puntualidad Rigurosa',
      descripcion: 'Sabemos que tu tiempo es oro. Entregamos resultados exactamente en la fecha prometida.',
      color: "#FF7A00"
    },
    {
      icono: <LifeBuoy size={48} strokeWidth={1.2} />,
      titulo: 'Soporte Post-Lanzamiento',
      descripcion: 'No te dejamos solo. Tienes 30 días de asistencia técnica gratuita para tu tranquilidad.',
      color: "#FF7A00"
    },
    {
      icono: <Heart size={48} strokeWidth={1.2} />,
      titulo: 'Satisfacción Total',
      descripcion: 'Ajustamos cada detalle hasta que estés 100% orgulloso del resultado final.',
      color: "#FF7A00"
    },
    {
      icono: <Lock size={48} strokeWidth={1.2} />,
      titulo: 'Seguridad Blindada',
      descripcion: 'Protegemos tu activo más valioso: la información de tu negocio y la de tus clientes.',
      color: "#FF7A00"
    },
    {
      icono: <TrendingUp size={48} strokeWidth={1.2} />,
      titulo: 'Crecimiento sin Límites',
      descripcion: 'Nuestras soluciones crecen contigo, soportando miles de usuarios sin complicaciones.',
      color: "#FF7A00"
    }
  ];

  return (
    <main className="bg-brand-dark min-h-screen text-white overflow-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:px-[100px] md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-brand rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-brand rounded-full blur-[180px] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <span className="inline-flex items-center px-5 py-2.5 bg-brand/10 border border-brand/30 rounded-full text-brand text-sm font-bold mb-8">
            <Zap size={14} className="mr-2 fill-brand" />
            Servicios Profesionales de Alto Impacto
          </span>
          
          <h1 className="text-5xl md:text-[65px] font-extrabold mb-6 leading-tight">
            Tecnología que Hace <br />
            <span className="text-brand">Crecer tu Negocio</span>
          </h1>
          
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Creamos soluciones digitales potentes que eliminan la fricción técnica para que tú te enfoques en lo que mejor haces: vender.
          </p>

          
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="px-6 py-20 md:px-[100px] relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {listaServicios.filter(s => !s.destacado).map((servicio, index) => (
              <div 
                key={servicio.id}
                className="group relative bg-[#151515] rounded-3xl overflow-hidden border border-white/5 hover:border-brand/40 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative h-[220px] overflow-hidden bg-[#0a0a0a]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] z-10"></div>
                  <img 
                    src={servicio.imagen} 
                    alt={servicio.titulo}
                    className="w-full h-full object-cover opacity-40 transition-all duration-700 group-hover:scale-110"
                  />
                  <div 
                    className="absolute top-4 right-4 w-14 h-14 bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center z-20"
                    style={{ color: servicio.color }}
                  >
                    {servicio.icono}
                  </div>
                </div>

                <div className="relative p-8 z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand transition-colors">
                    {servicio.titulo}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
                    {servicio.descripcion}
                  </p>

                  <div className="space-y-3 mb-8">
                    {servicio.caracteristicas.map((caracteristica, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: servicio.color }}></div>
                        <span>{caracteristica}</span>
                      </div>
                    ))}
                  </div>

                  
                </div>
              </div>
            ))}
          </div>

          {/* Destacado: n8n */}
          {listaServicios.filter(s => s.destacado).map((servicio) => (
            <div 
              key={servicio.id}
              className="group relative bg-gradient-to-br from-brand/10 to-transparent rounded-[2.5rem] overflow-hidden border-2 border-brand/20 hover:border-brand/50 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row min-h-[450px]">
                <div className="relative md:w-[40%] w-full h-[300px] md:h-auto overflow-hidden bg-black">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111] z-10"></div>
                  <img 
                    src={servicio.imagen} 
                    alt={servicio.titulo}
                    className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                </div>

                <div className="relative md:w-[60%] p-10 md:p-16 flex flex-col justify-center z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-20 h-20 bg-brand/10 border border-brand/30 rounded-2xl flex items-center justify-center text-brand">
                      {servicio.icono}
                    </div>
                    <div>
                      <span className="text-brand font-black text-sm uppercase tracking-[0.2em]">Efficiency First</span>
                      <h3 className="text-4xl md:text-5xl font-black text-white">{servicio.titulo}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg mb-10 max-w-xl">
                    {servicio.descripcion}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {servicio.caracteristicas.map((caracteristica, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                        <CheckBadge color={servicio.color} />
                        <span className="text-white font-medium">{caracteristica}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-5 flex-wrap">
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Garantías */}
      <section className="px-6 py-24 md:px-[100px] relative">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">Tranquilidad <span className="text-brand">Garantizada</span></h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">No somos solo proveedores, somos tus aliados tecnológicos. Tu inversión está protegida por nuestras promesas de valor.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {garantias.map((garantia, index) => (
              <div
                key={index}
                className="group p-10 rounded-[2rem] bg-[#111] border border-white/5 hover:border-brand/40 transition-all duration-500"
              >
                <div className="text-brand mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {garantia.icono}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{garantia.titulo}</h3>
                <p className="text-gray-400 leading-relaxed">{garantia.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Botón flotante para el Check decorativo */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      `}</style>
    </main>
  );
};

// Componente auxiliar para los checks
const CheckBadge = ({color}: {color: string}) => (
  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: `${color}20`}}>
    <div className="w-2 h-2 rounded-full" style={{backgroundColor: color}}></div>
  </div>
);

export default Servicios;