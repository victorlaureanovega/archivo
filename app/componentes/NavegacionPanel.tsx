import Link from "next/link";
import { usePathname } from "next/navigation";

// Este componente representa la barra de navegación del panel lateral (en el que puede alternarse entre el archivo y el blog)
export default function NavegacionPanel() {
    const pathname = usePathname();
    
    return (
        <nav className="flex gap-6 mb-4 text-[#EEE] justify-center">
            <ul className="flex gap-16 py-6 md:py-8 font-semibold">
                <li className="hover:cursor-pointer flex flex-col items-center">
                    <Link href="/">
                        Archivo
                    </Link>

                    <span className={`h-[1.5px] bg-white mt-1 transition-all duration-300 ${pathname === "/" ? "w-full" : "w-0"}`} />
                </li>

                <li className="hover:cursor-pointer flex flex-col items-center">
                    <Link href="/blog">
                        Óbice y antonomasia
                    </Link>

                    <span className={`h-[1.5px] bg-white mt-1 transition-all duration-300 ${pathname === "/blog" ? "w-full" : "w-0"}`} />
                </li>
            </ul>
        </nav>
    );
}
