
export interface DetallePedido {
  productoId: number;
  cantidad: number;
}

export interface Pedido {
  clientesId: number;
  total: number;
  productos: DetallePedido[];
}
