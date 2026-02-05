import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10 h-full w-full"
      options={{
        // 1. Fondo: Un color casi negro con un toque de café/naranja oscuro
        background: {
          color: { value: "#0c0a09" }, 
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 180,
              // Color de la línea cuando pasas el mouse
              links: { opacity: 0.8, color: "#f97316" }, 
            },
          },
        },
        particles: {
          // 2. Color de los puntos: Naranja brillante (Orange 500 de Tailwind)
          color: { value: "#f97316" },
          links: {
            // 3. Color de las conexiones: Naranja un poco más suave
            color: "#fb923c", 
            distance: 150,
            enable: true,
            opacity: 0.2, // Opacidad baja para que sea sutil
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            density: { enable: true },
            value: 70, // Bajamos un poco la densidad para que sea más elegante
          },
          opacity: {
            value: { min: 0.3, max: 0.7 },
          },
          size: {
            value: { min: 1, max: 2.5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;