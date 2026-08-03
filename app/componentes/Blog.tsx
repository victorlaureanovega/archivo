import Link from "next/link";
import { BLOG } from "@/data/Blog";

export default function Blog() {
    return (
        <section className="flex flex-col gap-3">
            {Object.values(BLOG).flat().map((entrada) => (
                <Link href={entrada.enlace} key={entrada.nombre}
                    className="flex justify-between items-center bg-[#DDD] p-4 rounded-lg text-sm hover:cursor-pointer"
                >
                    <h4>{entrada.nombre}</h4>
                    <p>{entrada.fecha}</p>
                </Link>
            ))}
        </section>
    );
}
