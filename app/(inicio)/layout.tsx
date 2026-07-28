'use client';
import { useState } from "react";
import Cargando from "@/app/componentes/Cargando";
import NavegacionPanel from "@/app/componentes/NavegacionPanel";
import NavegacionEnlaces from "@/app/componentes/NavegacionEnlaces";
import Reciente from "../componentes/Reciente";
import { DESTACADO } from "@/data/Constantes";

export default function InicioLayout({ children }: { children: React.ReactNode }) {
    const [cargando, setCargando] = useState(true);

    return (
        <main className="flex flex-col md:grid md:grid-cols-[1fr_0.45fr] md:h-screen bg-neutral-700">
              <div className="md:grid md:grid-rows-[1.7fr_1.2fr]">
                {/* Destacado */}
                <section className="relative bg-neutral-700 p-8 md:p-6 overflow-hidden flex items-center justify-center md:py-2">
                  {cargando && <Cargando tipo="cortometraje" color="white" />}
        
                  {/* El iframe se renderiza desde el principio (aunque se mantiene invisible) para evitar el efecto de fade in */}
                  <iframe className={`h-65  md:h-full w-[100%] md:w-[75%] ${cargando ? "invisible" : "visible"}`}
                    src={DESTACADO}
                    title="Cortometraje de Péndulo a media oscuridad"
                    allowFullScreen onLoad={() => setCargando(false)}
                  />
                </section>

                <Reciente />
              </div>
        
              {/* Sección lateral */}
              <section className="bg-black p-6 flex flex-col overflow-hidden">
                {/* Barra de navegación entre el archivo y el blog */}
                <NavegacionPanel />
        
                <div className="flex-1 overflow-auto">
                  {children}
                </div>
        
                {/* Enlaces personales */}
                <NavegacionEnlaces />
              </section>
            </main>
    );
}
