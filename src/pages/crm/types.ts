export interface Lead {
  id: number;
  nombre: string;
  telefono: string;
  email: string;
  empresa: string;
  origen: string;
  destino: string;
  fecha: string;
  hora: string;
  pasajeros: number;
  tipovehiculo: string;
  tiposervicio: string;
  esperaendestino: boolean;
  requisitos?: string;
  etapa: Stage;
  fechacreacion: string;
  fechaactualizacion: string;
  costo?: number;
  precioventa?: number;
  porcentajeIncremento?: number;
}

export type Stage =
  | "Sin contactar"
  | "Calificado para comprar"
  | "Cotizacion enviada"
  | "Pendiente de cierre"
  | "Cierre ganado"
  | "Cierre perdido"
  | "Descalificado";

export const STAGES: Stage[] = [
  "Sin contactar",
  "Calificado para comprar",
  "Cotizacion enviada",
  "Pendiente de cierre",
  "Cierre ganado",
  "Cierre perdido",
  "Descalificado",
];

export const VEHICLE_TYPES = [
  "Duster 4 Pax",
  "Van H1 8 Pax",
  "Van Master 15 Pax",
  "Van Sprinter 19 Pax",
  "Bus 30 Pax",
  "Bus 40 Pax",
] as const;

export const SERVICE_TYPES = ["Solo Ida", "Ida y Regreso"] as const;
