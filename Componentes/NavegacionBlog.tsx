import Link from "next/link";
import { Entradas } from "../Data/Entradas";

// Este componente representa la barra lateral en las entradas del blog, desde la cual se puede acceder a las demás
export default function NavegacionBlog() {
    const entradasBlog = Entradas;

    return (
        <aside className="hidden md:block w-[260px] shrink-0">
            <div className="sticky top-20">
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3">
                    Entradas
                </h3>

                {/* Listado de todas las entradas publicadas */}
                <nav className="flex flex-col border-l border-gray-300">
                    {entradasBlog.map((entrada, index) => (
                        <Link href={`/blog/${entrada.enlace}`} target="_self" rel="noopener noreferrer" key={index}
                            className="pl-4 py-3 text-sm text-gray-700 hover:text-black hover:border-black border-l-2 border-transparent">
                            <h4>{entrada.titulo}</h4>
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
