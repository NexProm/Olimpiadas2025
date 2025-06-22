import { AgregarProductosService } from './../../services/agregar-productos.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subir-productos',
  imports: [CommonModule, FormsModule],
  templateUrl: './subir-productos.component.html',
  styleUrl: './subir-productos.component.scss'
})
export class SubirProductosComponent {
  producto: Producto = {
    nombre: '',
    descripcion: '',
    precioUnitario: 0
  };
  agregarProductosService = inject(AgregarProductosService)
  guardarProducto() {
  this.agregarProductosService.crearProducto(this.producto).subscribe({
      next: res => alert('Producto guardado correctamente'),
      error: err => alert('Error al guardar producto')
    });
  }
}
