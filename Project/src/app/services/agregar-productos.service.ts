import { Producto } from '../models/producto.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoPendiente } from '../models/pedido-pendiente.model';


@Injectable({
  providedIn: 'root'
})
export class AgregarProductosService {
  private url = 'http://localhost:8080/api/productos';

  constructor(private http: HttpClient) {}

  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, producto);
  }

  listarProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }
  eliminarProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }



}
