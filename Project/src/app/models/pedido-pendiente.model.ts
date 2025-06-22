export interface PedidoPendiente {
  id: number;
  clienteNombre: string;
  productos: string[]; // o number[], según lo que mande el backend
}
