import Link from "next/link";
import { BLOG } from "@/data/Blog";

// Este componente representa la barra lateral en las entradas del blog, desde la cual se puede acceder a las demás
export default function NavegacionBlog() {
    return (
        <aside className="hidden md:block w-[260px] shrink-0 border-r border-gray-300">
            <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3">
                    Óbice y antonomasia
                </h3>

                {/* Listado de todas las entradas publicadas */}
                <nav className="flex flex-col border-l border-gray-300">
                    {Object.values(BLOG).flat().map((entrada) => (
                        <Link href={entrada.enlace} target="_self" rel="noopener noreferrer" key={entrada.nombre}
                            className="pl-4 py-3 text-sm text-gray-700 hover:text-black hover:border-black border-l-2 border-transparent">
                            <h4>{entrada.nombre}</h4>
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
