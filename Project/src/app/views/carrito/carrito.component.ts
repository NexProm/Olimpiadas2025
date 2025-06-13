import { RouterModule } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  imports: [RouterModule, CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
    CartService = inject(CartService)
}
