export interface Producto {
  id?: number;
  nombre: string;
  descripcion: string;
  precioUnitario: number;
  calificacion?: number;
  img?: string;
  categoria?: string;
}
