
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface LoginRequest{
  email: string
  password: string
}
export interface LoginResponse{
  id: number;
  mensaje: string;
  email: string;
  rol: string
  nombre: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:8080/api/login'
  constructor(private http: HttpClient) { }

  login(data: LoginRequest): Observable <LoginResponse>{
    return this.http.post<LoginResponse>(this.url, data)
  }
}
