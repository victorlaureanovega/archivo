import Link from "next/link";
import { RECIENTE } from "@/data/Constantes";

export default function Reciente() {
    return (
        <section className="bg-neutral-100 my-12 mx-8 md:mx-20 p-5 rounded-lg">
            <h3 className="text-lg tracking-widest text-center text-neutral-700 uppercase mb-4 md:mb-6">Reciente</h3>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-4">
                {RECIENTE.map(item => (
                    <Link key={item.encabezado} href={item.contenido.enlace} target="_blank" rel="noopener noreferrer"
                        className="bg-white border border-neutral-300 flex flex-col gap-3 py-3 md:py-4 px-3 rounded-lg"
                    >
                        <h4 className="font-medium text-neutral-500 text-right text-xs uppercase">{item.encabezado}</h4>
                        <p className="text-sm text-neutral-900 md:text-base]">{item.contenido.nombre}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
