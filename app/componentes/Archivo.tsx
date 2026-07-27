import Link from "next/link";
import { SECCIONES } from "@/data/Constantes";

export default function Archivo() {
    return (
        <article className="bg-[#DDD] flex flex-col gap-6 rounded-lg text-sm px-4 py-5">
            {SECCIONES.map((seccion) => (
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
        </article>
    );
}
