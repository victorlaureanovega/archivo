// Para los componentes de Archivo y Blog del panel lateral
export interface ArchivoBlog {
  activo: string;
};

// Para el círculo de carga
export interface CirculoCarga {
    tipo: string,
    color: string       // Este parámetro sirve para establecer un color para el círculo, dependiendo del fondo sobre el que va a mostrarse
}

// Para la barra de navegación del panel lateral (es decir, para visualizar el Archivo o el Blog)
export interface NavegacionPanelLateral {
    activo: string;
    setActivo: (valor: string) => void;
};
