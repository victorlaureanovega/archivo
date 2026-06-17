import { Entradas } from "@/data/Entradas";
import NavegacionBlog from "@/componentes/NavegacionBlog";
import NotFound from "@/app/not-found";

/*
En este componente se renderizan todas las entradas del blog (lo cual ocurre en el div con dangerouslySetInnerHTML).
Por lo mismo, todas las entradas comparten el mismo encabezado y, en general, el mismo formato
*/
export default async function Entrada({ params }: { params: { entrada: string } }) {
  const { entrada: enlace } = await params;
  const entrada = Entradas.find(e => e.enlace === enlace);
  let Texto;  // Componente que representa el contenido de cada entrada

  try {
    Texto = (await import(`@/app/blog/entradas/${enlace}.mdx`)).default;
  }
  catch {
    return <NotFound />;
  }

  return (
    <section>
      <article>
        {/* Encabezado */}
        <div className="bg-[#444]">
          {/* Título de la entrada */}
          <div className="text-[#EEE] max-w-[55em] mx-8 pt-34 md:mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">{entrada?.titulo}</h1>
            <p className="text-sm pb-6">Publicado el {entrada?.fecha} {entrada?.nota && `${entrada.nota}`}</p>
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
    </section>
  );
}
