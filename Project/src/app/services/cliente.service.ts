import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export interface RegisterRequest {
  nombre: string;
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private usuarioSubject = new BehaviorSubject<any>(null);
  usuario$ = this.usuarioSubject.asObservable();
  constructor(private http: HttpClient) { }

  registrarCliente(data: RegisterRequest): Observable<string> {
      return this.http.post('http://localhost:8080/api/registrar', data, {
      responseType: 'text'
    });
  }
  setUsuario(usuario: any) {
    this.usuarioSubject.next(usuario);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
  limpiarUsuario() {
    this.usuarioSubject.next(null);
    localStorage.removeItem('usuario');
  }
  cargarDesdeLocalStorage() {
    const guardado = localStorage.getItem('usuario');
    if (guardado) {
      this.usuarioSubject.next(JSON.parse(guardado));
    }
  }
}
