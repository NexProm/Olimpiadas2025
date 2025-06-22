import { Component, inject } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { AgregarProductosService } from '../../services/agregar-productos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PedidoPendiente } from '../../models/pedido-pendiente.model';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-jefes',
  imports: [CommonModule, FormsModule],
  templateUrl: './jefes.component.html',
  styleUrl: './jefes.component.scss'
})
export class JefesComponent {
  producto: Producto = {
    nombre: '',
    descripcion: '',
    precioUnitario: 0
  };
  productos: Producto[] = [];
  pedidos: PedidoPendiente[] = [];
  agregarProductosService = inject(AgregarProductosService)
  pedidosService = inject(PedidosService);
  guardarProducto() {
    this.agregarProductosService.crearProducto(this.producto).subscribe({
      next: res => alert('Producto guardado correctamente'),
      error: err => alert('Error al guardar producto')
    });
  }
  ngOnInit(): void {
  this.agregarProductosService.listarProductos().subscribe({
    next: (data) => this.productos = data,
    error: (err) => console.error('Error al cargar productos:', err)
  });

  this.pedidosService.mostrarPedidosPendientes().subscribe({
    next: (data) => this.pedidos = data,
    error: (err) => console.error('Error al cargar pedidos pendientes:', err)
  });
  }

  eliminarProducto(id: number): void {
  if (!confirm('¿Eliminar Producto?')) return;

  this.agregarProductosService.eliminarProducto(id).subscribe({
    next: () => {
      this.productos = this.productos.filter(p => p.id !== id);
      alert('Producto eliminado correctamente');
    },
    error: err => {
      alert('Hubo un error al eliminar el producto');
    }
  });
  }
  cambiarEstado(id: number, estado: string): void {
  this.pedidosService.actualizarEstadoPedido(id, estado).subscribe({
    next: () => {
      this.pedidos = this.pedidos.filter(p => p.id !== id); // lo sacás de la tabla
      alert(`Pedido marcado como ${estado}`);
    },
    error: () => alert('Error al actualizar estado del pedido')
  });
  }

}
