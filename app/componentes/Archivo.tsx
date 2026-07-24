import Link from "next/link";
import { PUBLICACIONES } from "@/data/Publicaciones";
import { BLOG } from "@/data/Blog";
import { OTROS } from "@/data/Otros";

export default function Archivo() {
    const SECCIONES = [
        {
            titulo: "Publicaciones",
            contenido: PUBLICACIONES
        },
        {
            titulo: "Otros",
            contenido: OTROS
        }
    ];

    return (
        <article className="bg-[#DDD] flex flex-col gap-6 rounded-lg text-sm px-4 py-5">
            {SECCIONES.map(seccion => (
                <section key={seccion.titulo}>
                    <h3 className="text-base mb-1">{seccion.titulo}</h3>

                    {seccion.contenido.map(elemento => (
                        <p key={elemento.nombre}>
                            {elemento.anio}:

                            <Link href={elemento.enlace} target="_blank" rel="noopener noreferrer">
                                <span> {elemento.nombre}</span>
                            </Link>
                        </p>
                    ))}
                </section>
            ))}

            <section className="flex flex-col gap-2">
                <h3 className="text-base">Óbice y antonomasia (Blog)</h3>

                {Object.entries(BLOG).sort(([a], [b]) => Number(b) - Number(a)).map(([anio, entradas]) => (
                    <div key={anio}>
                        <h3>{anio}</h3>

                        {entradas.map(entrada => (
                            <Link key={entrada.titulo} href={`/blog/${entrada.enlace}`} target="_blank" rel="noopener noreferrer">
                                <p className="ml-2">
                                    {entrada.titulo}
                                </p>
                            </Link>
                        ))}
                    </div>
                ))}
            </section>
        </article>
    );
}
