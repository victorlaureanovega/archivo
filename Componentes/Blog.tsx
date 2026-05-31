import Link from "next/link";
import { Entradas } from "../Data/Entradas";
import type { ArchivoBlog } from "../Data/Interfaces"

/*
Este componente muestra cada entrada del blog, con su nombre y fecha de publicación.
*/
export default function Blog({ activo }: ArchivoBlog) {
    const entradasBlog = Entradas;

    return (
        <main>
            {activo === "blog" && (
                <section className="flex flex-col gap-4">
                    {entradasBlog.map((entrada, index) => (
                        <Link href={`/blog/${entrada.enlace}`} target="_blank" rel="noopener noreferrer" key={index}
                            className="flex justify-between bg-[#DDD] p-4.5 rounded-lg text-sm hover:cursor-pointer"
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
