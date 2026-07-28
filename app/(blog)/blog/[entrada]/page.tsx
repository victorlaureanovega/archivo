import { BLOG } from "@/data/Blog";
import NavegacionBlog from "@/app/componentes/NavegacionBlog";
import NotFound from "@/app/not-found";

export default async function Entrada({ params }: { params: { entrada: string } }) {
  const { entrada: ruta } = await params;
  const entrada = Object.values(BLOG).flat().find(e => e.ruta === ruta);
  let Texto;  // Componente que representa el contenido de cada entrada

  try {
    Texto = (await import(`@/entradas/${ruta}.mdx`)).default;
  }
  catch {
    return <NotFound />;
  }

  return (
    <article>
      {/* Encabezado */}
      <div className="bg-[#444]">
        {/* Título de la entrada */}
        <div className="text-[#EEE] max-w-[53.5em] mx-8 pt-34 md:mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">{entrada?.nombre}</h1>
          <p className="text-sm pb-6">Publicado el {entrada?.fecha}</p>
        </div>
      </div>

      {/* Barra lateral y entrada del blog */}
      <div className="max-w-[90rem] mx-auto flex gap-26 mt-10 md:mt-20 px-8">
        <NavegacionBlog />

        <div className="flex-1 max-w-[51em] pb-[80px] text-[14.5px] md:text-[15px] leading-loose space-y-4">
          <Texto />
        </div>
      </div>
    </article>
  );
}
