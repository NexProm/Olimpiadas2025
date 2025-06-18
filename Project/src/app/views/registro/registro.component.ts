
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../../services/form.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registro',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent implements OnInit{
  Form!: FormGroup
  form= new FormService();
  router = inject(Router)

  ngOnInit(): void {
    this.Form = new FormGroup({
      name: new FormControl( "",[Validators.required, Validators.maxLength(20)]),
      email: new FormControl("", [Validators.required, Validators.maxLength(100), Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    });

  }

  validation() {

    if(!this.Form.valid){
      alert("Faltan datos para llenar");
      return;
    }

    this.router.navigate(['/gratitude']);

}}
