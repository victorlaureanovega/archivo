'use client';

import { useState } from "react";
import Archivo from "@/componentes/Archivo";
import Blog from "@/componentes/Blog";
import Diario from "@/componentes/Diario";
import NavegacionPanel from "@/componentes/NavegacionPanel";
import NavegacionEnlaces from "@/componentes/NavegacionEnlaces";
import Cargando from "@/componentes/Cargando";

/*
Página principal del sitio. Consta de tres secciones: contenido destacado, noticias de Oztotlán y una barra lateral donde visualizar
el archivo de proyectos y el blog
*/
export default function Home() {
  const [activo, setActivo] = useState("archivo");
  const [cargando, setCargando] = useState(true);

  return (
    <main className="flex flex-col md:grid md:grid-cols-[1fr_0.4fr] md:h-screen">
      <div className="md:grid md:grid-rows-[2fr_1fr]">
        {/* Destacado */}
        <section className="relative bg-neutral-700 p-8 md:p-6 overflow-hidden flex items-center justify-center md:py-8">
          {/* Antes de que se renderice el video, se muestra un círculo de carga */}
          {cargando && <Cargando tipo="cortometraje" color="white" />}

          {/* El iframe se renderiza desde el principio (aunque se mantiene invisible) para evitar el efecto de fade in */}
          <iframe className={`h-65  md:h-full w-[100%] md:w-[75%] ${cargando ? "invisible" : "visible"}`}
            src="https://www.youtube.com/embed/z6mUjEQjh_g"
            title="Cortometraje de Péndulo a media oscuridad"
            allowFullScreen onLoad={() => setCargando(false)}
          />
        </section>

        {/* Noticia */}
        <Diario />
      </div>

      {/* Sección lateral */}
      <section className="bg-black p-6 flex flex-col overflow-hidden">
        {/* Barra de navegación entre el archivo y el blog */}
        <NavegacionPanel activo={activo} setActivo={setActivo} />

        <div className="flex-1 overflow-auto">
          <Archivo activo={activo} />
          <Blog activo={activo} />
        </div>

        {/* Enlaces personales */}
        <NavegacionEnlaces />
      </section>
    </main>
  );
}
