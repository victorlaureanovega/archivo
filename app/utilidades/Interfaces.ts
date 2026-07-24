// Para el círculo de carga
export interface CirculoCarga {
    tipo: string,
    color: string       // Este parámetro sirve para establecer un color para el círculo, dependiendo del fondo sobre el que va a mostrarse
}

export interface IMesa {
    tipo: "editorial" | "visual";
    titulo: string;
    enlace?: string;

}
