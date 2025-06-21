import { LoginService } from './../../services/login.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../../services/form.service';
import { CommonModule } from '@angular/common';
import { LoginRequest } from '../../services/login.service';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-inicio-sesion',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.scss'
})
export class InicioSesionComponent implements OnInit {
  Form!: FormGroup
  form= new FormService();
  router = inject(Router)
  clienteService = inject(ClienteService);
  loginService = inject(LoginService)
  ngOnInit(): void {
    this.Form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.maxLength(100), Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    });

  }
  inicioDeSesion(): void{
    if(this.Form.invalid){
      alert('Faltan campos por rellenar')
      return;
    }
    const datos: LoginRequest = this.Form.value

    this.loginService.login(datos).subscribe({
      next: (res) =>{
        const usuario = {
          nombre: res.nombre,
          email: this.Form.value.email
        };
        alert(res.mensaje + ", " + res.nombre);
        this.clienteService.setUsuario(usuario);
        this.router.navigate(['/'])
      },
      error: (err) =>{
        alert(err.error?.mensaje ||'Error al iniciar sesión' )
      }
    })
  }
 }
