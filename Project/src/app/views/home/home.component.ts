import { CartService } from './../../services/cart.service';
import { Component, inject } from '@angular/core';
import { ProductComponent } from "../../components/product/product.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ProductComponent, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    products = [
      {
        id: 1,
        description: "Paquete numero 1 de toda la tienda",
        price: 500
      },
      {
        id: 2,
        description: "Paquete numero 2 de toda la tienda",
        price: 1000
      },
      {
        id: 3,
        description: "Paquete numero 3 de toda la tienda",
        price: 100
      }
    ]

    CartService = inject(CartService)

    addCart(product:any){
      this.CartService.updateCart(product)
    }
}
