import { NavegacionPanelLateral } from "../Data/Interfaces";

// Este componente representa la barra de navegación del panel lateral (en el que puede alternarse entre el Blog y el Archivo)
export default function NavegacionPanel({ activo, setActivo }: NavegacionPanelLateral) {
    return (
        <nav className="flex gap-6 mb-4 text-[#EEE] justify-center">
            <ul className="flex gap-16 py-6 md:py-8 font-semibold">
                <li className="hover:cursor-pointer flex flex-col items-center" onClick={() => setActivo("archivo")}>
                    Archivo
                    
                    <span className={`h-[1.5px] bg-white mt-1 transition-all duration-300 ${activo === "archivo" ? "w-full" : "w-0"}`} />
                </li>

                <li className="hover:cursor-pointer flex flex-col items-center" onClick={() => setActivo("blog")}>
                    Óbice y antonomasia
                    
                    <span className={`h-[1.5px] bg-white mt-1 transition-all duration-300 ${activo === "blog" ? "w-full" : "w-0"}`} />
                </li>
            </ul>
        </nav>
    );
}
