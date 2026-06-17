import type { CirculoCarga } from "@/data/Interfaces";

// Círculo de carga animado que indica que se muestra antes que algún contenido
export default function Cargando({ tipo, color }: CirculoCarga) {
    return (
        <div className={`absolute inset-0 flex flex-col items-center justify-center gap-4 text-${color}`}>
            <svg className="animate-spin h-8 w-8" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>

            <span>Cargando {tipo}...</span>
        </div>
    );
}
