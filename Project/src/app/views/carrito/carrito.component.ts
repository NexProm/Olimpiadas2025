import { ClienteService } from './../../services/cliente.service';
import { Router, RouterModule } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CompraComponent } from '../compra/compra.component';
import { PedidosService } from '../../services/pedidos.service';
import { Pedido } from '../../models/pedido.model';

@Component({
  selector: 'app-carrito',
  imports: [RouterModule, CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  constructor(private dialog: MatDialog) {}
  CartService = inject(CartService)
  pedidosService = inject(PedidosService)
  clienteService = inject(ClienteService)
  usuario: any = null;
  router = inject(Router)
  ngOnInit(): void {
    this.clienteService.usuario$.subscribe(user => {
    this.usuario = user;
    console.log(' Usuario cargado:', this.usuario);
  });
  }

  abrirCompra() {
  if (!this.usuario) {
    alert('Debés iniciar sesión para continuar con la compra');
    return;
  }

  if (this.CartService.total <= 0) {
    alert('No tenés productos en el carrito');
    return;
  }

  const dialogRef = this.dialog.open(CompraComponent, {
    data: { carrito: this.CartService.cart, total: this.CartService.total },
    width: '100%',
    maxWidth: '60vw',

  });

  dialogRef.afterClosed().subscribe(resultado => {
  if (resultado) {
    const pedido: Pedido = {
    clientesId: this.usuario.id,
    total: this.CartService.total,
    productos: this.CartService.cart.map(x => ({
    productoId: x.id as number,
    cantidad: x.cant
  }))
};
    console.log('Pedido que se enviará:', pedido);
    this.pedidosService.enviarPedido(pedido).subscribe({
      next: (re) => {
        alert(re.mensaje)
        this.CartService.vaciarCarrito();
        this.router.navigate(['/pedidos']);

      },
      error: err => {
         alert('Error al registrar el pedido: ' + (err?.message));
      }
    });
  }
});

}
}
