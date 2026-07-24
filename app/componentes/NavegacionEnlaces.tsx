import Image from "next/image";
import Link from "next/link";
import { ENLACES } from "@/data/Enlaces";

// Muestra los logos de las plataformas a las que se redirige desde el sitio
export default function NavegacionEnlaces() {
    return (
        <nav className="bg-black py-12 md:p-2 md:mt-6 pb-0 flex flex-row items-center justify-center gap-6">
          {ENLACES.map((enlace) => (
            <Link key={enlace.nombre} href={enlace.enlace} target="_blank" rel="noopener noreferrer">
              <Image src={`/assets/${enlace.nombre}.svg`} alt={enlace.nombre} width={30} height={30} />
            </Link>
          ))}
        </nav>
    );
}
