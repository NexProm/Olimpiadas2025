import { CommonModule } from '@angular/common';

import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  imports:[FormsModule, CommonModule],
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent {
  metodoPago: string = '';
  datosTarjeta = {
    nombre: '',
    numero: '',
    vencimiento: '',
    cvv: ''
  };


  constructor(
    public dialogRef: MatDialogRef<CompraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  seleccionarMetodo(metodo: string): void {
    this.metodoPago = metodo;
  }

  confirmarCompra(): void {
    if (this.metodoPago === 'tarjeta') {

      const { nombre, numero, vencimiento, cvv } = this.datosTarjeta;
      if (!nombre || !numero || !vencimiento || !cvv) {
        alert('Completá todos los campos de la tarjeta');
        return;
      }
    }

    this.dialogRef.close({
      metodo: this.metodoPago,
      datos: this.metodoPago === 'tarjeta' ? this.datosTarjeta : null
    });
  }

  cerrar(): void {
    this.dialogRef.close();
  }
}
