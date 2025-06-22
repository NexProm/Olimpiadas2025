import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private url = 'http://localhost:8080/api/pedido'
  constructor(private http: HttpClient) { }
  enviarPedido(pedido: Pedido): Observable<any> {
    console.log('Pedido que se envía:', pedido);
    return this.http.post(this.url, pedido);
  }
}
