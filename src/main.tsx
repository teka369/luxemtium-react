import '@fortawesome/fontawesome-free/css/all.min.css';
import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4';

import Header from './views/main/layouts/Header'
import Index from './views/main/home/Index'
import Portafolio from './views/main/portafolio/Portafolio'
import Servicios from './views/main/servicios/Servicios'
import Contacto from './views/admin/contacto/Contacto'
import Footer from './views/main/layouts/Footer'
import Nosotros from './views/main/nosotros/Nosotros';
import './css/globals.css'

// 1. IMPORTA EL FONDO (Asegúrate de que la ruta sea correcta)
import ParticlesBackground from './components/ParticlesBackground'; // <--- NUEVO

ReactGA.initialize('G-LFEKT6RDBM');

const AnalyticsTracker = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search 
    });
  }, [location]);
  return null;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AnalyticsTracker />
      
      {/* 2. PON EL FONDO AQUÍ */}
      {/* Al estar fuera del div de contenido y tener 'fixed', se queda quieto siempre */}
      <ParticlesBackground /> 

      {/* 3. ENVUELVE TU CONTENIDO REAL */}
      {/* Usamos 'relative z-10' para asegurar que el texto/botones estén ENCIMA del fondo */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        <Header />

        {/* El flex-grow empuja el footer hacia abajo si hay poco contenido */}
        <div className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
        </div>

        <Footer />
        
      </div>

    </BrowserRouter>
  </StrictMode>
)