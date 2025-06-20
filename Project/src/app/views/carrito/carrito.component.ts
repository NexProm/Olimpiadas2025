import { RouterModule } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CompraComponent } from '../compra/compra.component';

@Component({
  selector: 'app-carrito',
  imports: [RouterModule, CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  constructor(private dialog: MatDialog) {}
  CartService = inject(CartService)
  usuario: any = null;
  ngOnInit(): void {
    const guardado = localStorage.getItem('usuario');
    if (guardado) {
      this.usuario = JSON.parse(guardado);
    }
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
    width: '1000px'
  });

  dialogRef.afterClosed().subscribe(resultado => {

  });
}
}
