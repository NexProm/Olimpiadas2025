import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-package',
  imports: [CommonModule],
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent {
  Indexactual = 0;
  
  buscados = [
    {
      img: '/images/Playabrasil.jpg',
      des: 'BRASIL'
    },
     {
      img: '/images/Caribeplaya.jpg',
      des: 'CARIBE'
    },
     {
      img: '/images/Mexicoplaya.jpg',
      des: 'MÉXICO'
    },
     {
      img: '/images/Filipinasplaya.jpg',
      des: 'FILIPINAS'
   }
  ]

  paquetes = [
    {
    img: '/images/Brasil.jpg',
    titulo: 'Paquetes a Rio de Janeiro',
    descripcion: ['Saliendo desde Buenos Aires', 'Hotel + Vuelo'],
    precio: '$712.342',
    calificacion: 0
    },
    {
    img: '/images/holanda.jpg',
    titulo: 'Paquetes a Amsterdam',
    descripcion: ['Saliendo desde Buenos Aires', 'Hotel + Vuelo'],
    precio: '$912.342',
    calificacion: 0
    },
    {
    img: '/images/nyc.jpg',
    titulo: 'Paquetes a Nueva York',
    descripcion: ['Saliendo desde Buenos Aires', 'Hotel + Vuelo'],
    precio: '$854.198',
    calificacion: 0
    },
    {
    img: '/images/venecia.jpg',
    titulo: 'Paquetes a Venecia',
    descripcion: ['Saliendo desde Buenos Aires', 'Hotel + Vuelo'],
    precio: '$867.204',
    calificacion: 0
    },
    {
    img: '/images/paris.jpg',
    titulo: 'Paquetes a Paris',
    descripcion: ['Saliendo desde Buenos Aires', 'Hotel + Vuelo'],
    precio: '$947,531',
    calificacion: 0
    },
    {
    img: '/images/santiago.jpg',
    titulo: 'Paquetes a Santiago de Chile',
    descripcion: ['Saliendo desde Buenos Aires', 'Hotel + Vuelo'],
    precio: '$653,402',
    calificacion: 0
    },
    {
    img: '/images/estambul.jpg',
    titulo: 'Paquetes a Estambul',
    descripcion: ['Saliendo desde Buenos Aires', 'Hotel + Vuelo'],
    precio: '$986,971',
    calificacion: 0
    }
  ]
  calificacionpaquete(pack: any, rate: number){
    pack.calificacion = rate;
  }

  
  sliderscroll(direccion: number){
    const contenedor = document.querySelector('.carrusel') as HTMLElement;
    const tarjeta = document.querySelector('.imagenes')

    if(contenedor && tarjeta){

      const estilo = getComputedStyle(tarjeta as HTMLElement);
      const margenIzq = parseInt(estilo.marginLeft, 10);
      const margenDer = parseInt(estilo.marginRight, 10);
      const ancho = (tarjeta as HTMLElement).offsetWidth + margenIzq + margenDer;

      this.Indexactual += direccion;
      const visible = 3.75;

    if (this.Indexactual < 0) this.Indexactual = 0;
    if (this.Indexactual > this.paquetes.length - visible) this.Indexactual = this.paquetes.length - visible;

      contenedor.style.transition = 'transform 0.4s ease-out';
      contenedor.style.transform = `translateX(${-this.Indexactual * ancho}px)`;
    }
  }
}
