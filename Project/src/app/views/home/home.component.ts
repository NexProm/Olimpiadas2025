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
        titulo: "Disfrutá de una escapada inolvidable a San Carlos de Bariloche. Incluye 3 noches en hotel 3★ con desayuno, vista al lago y Wi-Fi gratuito. Ideal para parejas o familias que buscan naturaleza y tranquilidad. ",
        price: 5000000
      },
      {
        id: 2,
        titulo: "Pasaje aéreo ida y vuelta en clase económica con equipaje de mano incluido. Salida desde Aeroparque Jorge Newbery con destino a Mendoza. Perfecto para una escapada de fin de semana a la tierra del vino.",
        price: 786430
      },
      {
        id: 3,
        titulo: "Paquete numero 3 de todaAuto categoría económica (Chevrolet Onix o similar) con kilometraje libre, seguro básico incluido y retiro en el aeropuerto de Córdoba. Ideal para recorrer las sierras con libertad y comodidad. la tienda",
        price: 245900
      }
    ]

    CartService = inject(CartService)

    addCart(product:any){
      this.CartService.updateCart(product)
    }
}
