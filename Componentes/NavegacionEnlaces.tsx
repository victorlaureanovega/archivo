import Image from "next/image";
import Link from "next/link";
import { Enlaces } from "../Data/Enlaces";

// Muestra los logos de las plataformas a las que se redirige desde el sitio
export default function NavegacionEnlaces() {
    return (
        <nav className="bg-black py-12 md:p-4 pb-0 flex flex-row items-center justify-center gap-6">
          {Enlaces.map((enlace, index) => (
            <Link key={index} href={enlace.enlace} target="_blank" rel="noopener noreferrer">
              <Image src={`/Assets/${enlace.nombre}.svg`} alt={enlace.nombre} width={30} height={30} />
            </Link>
          ))}
        </nav>
    );
}
