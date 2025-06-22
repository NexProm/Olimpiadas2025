import { CartService } from './../../services/cart.service';
import { Component, inject } from '@angular/core';
import { ProductComponent } from "../../components/product/product.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  CartService = inject(CartService);
  Indexactual = 0;

  products = [
    {
      id: 1,
      titulo: "Disfrutá de una escapada inolvidable a San Carlos de Bariloche...",
      price: 5000000
    },
    {
      id: 2,
      titulo: "Pasaje aéreo ida y vuelta en clase económica...",
      price: 786430
    },
    {
      id: 3,
      titulo: "Auto categoría económica (Chevrolet Onix o similar)...",
      price: 245900
    }
  ];

  paquetes = [
    {
      id: 1,
      img: '/images/Brasil.jpg',
      titulo: 'Paquetes a Rio de Janeiro',
      descripcion: ['Saliendo desde Buenos Aires', 'Hotel + Vuelo'],
      precio: '$712.342',
      calificacion: 0
    },
    {
      id: 2,
      img: '/images/holanda.jpg',
      titulo: 'Paquetes a Amsterdam',
      descripcion: ['Saliendo desde Buenos Aires', 'Hotel + Vuelo'],
      precio: '$912.342',
      calificacion: 0
    },
    {
      id: 3,
      img: '/images/nyc.jpg',
      titulo: 'Paquetes a Nueva York',
      descripcion: ['Saliendo desde Buenos Aires', 'Hotel + Vuelo'],
      precio: '$854.198',
      calificacion: 0
    },
    {
      id: 4,
      img: '/images/venecia.jpg',
      titulo: 'Paquetes a Venecia',
      descripcion: ['Saliendo desde Buenos Aires', 'Hotel + Vuelo'],
      precio: '$867.204',
      calificacion: 0
    },
    {
      id: 5,
      img: '/images/paris.jpg',
      titulo: 'Paquetes a Paris',
      descripcion: ['Saliendo desde Buenos Aires', 'Hotel + Vuelo'],
      precio: '$947.531',
      calificacion: 0
    },
    {
      id: 6,
      img: '/images/santiago.jpg',
      titulo: 'Paquetes a Santiago de Chile',
      descripcion: ['Saliendo desde Buenos Aires', 'Hotel + Vuelo'],
      precio: '$653.402',
      calificacion: 0
    },
    {
      id: 7,
      img: '/images/estambul.jpg',
      titulo: 'Paquetes a Estambul',
      descripcion: ['Saliendo desde Buenos Aires', 'Hotel + Vuelo'],
      precio: '$986.971',
      calificacion: 0
    }
  ];
  addCart(product: any) {
    this.CartService.updateCart(product);
  }
  addCartPaquete(paquete: any) {
    this.CartService.updateCart(paquete);
  }

  calificacionpaquete(pack: any, rate: number) {
    pack.calificacion = rate;
  }

  sliderscroll(direccion: number) {
    const contenedor = document.querySelector('.carrusel') as HTMLElement;
    const tarjeta = document.querySelector('.imagenes');

    if (contenedor && tarjeta) {
      const estilo = getComputedStyle(tarjeta as HTMLElement);
      const margenIzq = parseInt(estilo.marginLeft, 10);
      const margenDer = parseInt(estilo.marginRight, 10);
      const ancho = (tarjeta as HTMLElement).offsetWidth + margenIzq + margenDer;

      this.Indexactual += direccion;
      const visible = 3.75;

      if (this.Indexactual < 0) this.Indexactual = 0;
      if (this.Indexactual > this.paquetes.length - visible) {
        this.Indexactual = this.paquetes.length - visible;
      }

      contenedor.style.transition = 'transform 0.4s ease-out';
      contenedor.style.transform = `translateX(${-this.Indexactual * ancho}px)`;
    }
  }
}
