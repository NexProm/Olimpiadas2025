import { Producto } from "./producto.model";

export interface ProductoCarrito extends Producto {
  cant: number;
  price: number;
}
