import '@fortawesome/fontawesome-free/css/all.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './views/main/layouts/Header'
import Index from './views/main/home/Index'
import Portafolio from './views/main/portafolio/Portafolio'
import Servicios from './views/main/servicios/Servicios'
import Contacto from './views/admin/contacto/Contacto'
import Footer from './views/main/layouts/Footer'
import Nosotros from './views/main/nosotros/Nosotros';


import './css/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </StrictMode>
)
