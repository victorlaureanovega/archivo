'use client';

import { useState } from "react";
import Archivo from "@/app/componentes/Archivo";
import Blog from "@/app/componentes/Blog";
import Diario from "@/app/componentes/Diario";
import { DESTACADO } from "@/data/Destacado";
import NavegacionPanel from "@/app/componentes/NavegacionPanel";
import NavegacionEnlaces from "@/app/componentes/NavegacionEnlaces";
import Cargando from "@/app/componentes/Cargando";

/*

*/
export default function Home() {
  const [cargando, setCargando] = useState(true);

  return (
    <main className="flex flex-col md:grid md:grid-cols-[1fr_0.4fr] md:h-screen bg-neutral-700">
      <div className="md:grid md:grid-rows-[2fr_1fr]">
        {/* Destacado */}
        <section className="relative bg-neutral-700 p-8 md:p-6 overflow-hidden flex items-center justify-center md:py-8">
          {/* Antes de que se renderice el video, se muestra un círculo de carga */}
          {cargando && <Cargando tipo="cortometraje" color="white" />}

          {/* El iframe se renderiza desde el principio (aunque se mantiene invisible) para evitar el efecto de fade in */}
          <iframe className={`h-65  md:h-full w-[100%] md:w-[75%] ${cargando ? "invisible" : "visible"}`}
            src={DESTACADO}
            title="Cortometraje de Péndulo a media oscuridad"
            allowFullScreen onLoad={() => setCargando(false)}
          />
        </section>
      </div>

      <section className="bg-black flex flex-col p-10">
        <div className="flex flex-1 items-center">
          <Archivo />
        </div>
        
        <NavegacionEnlaces />
      </section>

      {/* Sección lateral */}
      {/*<section className="bg-black pt-24 p-8 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-auto">
          <Archivo />
        </div>

        <NavegacionEnlaces />
      </section>*/}
    </main>
  );
}
