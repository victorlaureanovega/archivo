import Link from "next/link";
import { ENTRADAS } from "@/data/Blog";
import type { ArchivoBlog } from "@/app/utilidades/Interfaces"

/*
Este componente muestra cada entrada del blog, con su nombre y fecha de publicación.
*/
export default function Blog({ activo }: ArchivoBlog) {
    return (
        <main>
            {activo === "blog" && (
                <section className="flex flex-col gap-3">
                    {ENTRADAS.map((entrada) => (
                        <Link href={`/blog/${entrada.enlace}`} target="_blank" rel="noopener noreferrer" key={entrada.titulo}
                            className="flex justify-between bg-[#DDD] p-4 rounded-lg text-sm hover:cursor-pointer"
                        >
                            <h4>{entrada.titulo}</h4>
                            <p>{entrada.fecha}</p>
                        </Link>
                    ))}
                </section>
            )}
        </main>
    );
}
