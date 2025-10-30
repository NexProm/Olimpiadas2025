import { ClienteService } from './../../services/cliente.service';

import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FormService } from '../../services/form.service';
import { CommonModule } from '@angular/common';
import { RegisterRequest } from '../../services/cliente.service';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent implements OnInit{
  Form!: FormGroup
  form= new FormService();
  router = inject(Router)
  nombre = ''
  email = ''
  password = ''

  ngOnInit(): void {
    this.Form = new FormGroup({
      nombre: new FormControl( "",[Validators.required, Validators.maxLength(20)]),
      email: new FormControl("", [Validators.required, Validators.maxLength(100), Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    });

  }


  clienteService = inject(ClienteService);
  registrar(){
     if (this.Form.invalid) {

      this.Form.markAllAsTouched();
      return;
    }

    const datos: RegisterRequest = this.Form.value;
    console.log('Datos a enviar:', datos)
    this.clienteService.registrarCliente(datos).subscribe({

      next: (res) => {
        alert(res);
        this.router.navigate(['/inicio-sesion']);
      },
      error: (err) => {
        console.error('Error al registrar:', err);
        alert("Hubo un error al registrarte.");
      }
    })

  }

}
