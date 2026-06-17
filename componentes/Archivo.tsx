import Link from "next/link";
import { Proyectos } from "@/data/Proyectos";
import type { ArchivoBlog } from "@/data/Interfaces"

/*
Este componente es el archivo de proyectos, donde se muestra una tarjeta de acordeón por cada año, junto con los proyectos
que fueron publicados en el curso de este
*/
export default function Archivo({ activo }: ArchivoBlog) {
    return (
        <main>
            {activo === "archivo" &&
                <article className="flex flex-col gap-4">
                    {Proyectos.map((proyecto) => {
                        return (
                            <Link href={proyecto.enlace} target="_blank" rel="noopener noreferrer" key={proyecto.nombre}
                                className="flex bg-[#DDD] p-4.5 rounded-lg text-sm hover:cursor-pointer"
                            >
                                <p>{proyecto.nombre}</p>
                            </Link>
                        );
                    })}
                </article>}
        </main>
    );
}
