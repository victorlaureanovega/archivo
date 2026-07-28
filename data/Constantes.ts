import { PUBLICACIONES } from "./Publicaciones";
import { BLOG } from "./Blog";
import { OTROS } from "./Otros";

export const DESTACADO = "https://www.youtube.com/embed/z6mUjEQjh_g";

export const SECCIONES = [
    {
        titulo: "Publicaciones",
        contenido: PUBLICACIONES
    },
    {
        titulo: "Otros",
        contenido: OTROS
    }
];

// De acuerdo con la longitud de este arreglo hay que actualizar el número de columnas en la novena línea de Reciente.tsx
export const RECIENTE = [
    {
        encabezado: "Del blog",
        contenido: Object.values(BLOG).flat()[0]
    },
    {
        encabezado: "Otros",
        contenido: Object.values(OTROS).flat()[0]
    },
];
