import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido.model';
import { PedidoPendiente } from '../models/pedido-pendiente.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private url = 'https://conexionbd-production-e8c2.up.railway.app/api/pedido'
  constructor(private http: HttpClient) { }
  enviarPedido(pedido: Pedido): Observable<any> {
    console.log('Pedido que se envía:', pedido);
    return this.http.post(this.url, pedido);
  }
  actualizarEstadoPedido(id: number, estado: string): Observable<any> {
    return this.http.put(`https://conexionbd-production-e8c2.up.railway.app/api/pedido/${id}/estado`, { estado });
  }
  mostrarPedidosPendientes(): Observable<PedidoPendiente[]> {
    return this.http.get<PedidoPendiente[]>('https://conexionbd-production-e8c2.up.railway.app/api/pedido/pendientes');
  }
}
