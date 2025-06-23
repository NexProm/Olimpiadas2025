import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { AgregarProductosService } from '../../services/agregar-productos.service';
import { ProductoCarrito } from '../../models/producto-carrito.model';
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
      img: 'images/Playabrasil.jpg',
      des: 'BRASIL'
    },
     {
      img: 'images/Caribeplaya.jpg',
      des: 'CARIBE'
    },
     {
      img: 'images/Mexicoplaya.jpg',
      des: 'MÉXICO'
    },
     {
      img: 'images/Filipinasplaya.jpg',
      des: 'FILIPINAS'
   }
  ]

  paquetes: {
    id: number;
    img: string;
    titulo: string;
    descripcion: string[];
    precio: string;
    calificacion: number;
  } []= [
    
  ]
  calificacionpaquete(pack: any, rate: number){
    pack.calificacion = rate;
  }
  CartService = inject(CartService)
  agregarProductosService = inject(AgregarProductosService);

  addCart(paquete:any){
    const producto: ProductoCarrito = {
      id: paquete.id,
  nombre: paquete.titulo,
  descripcion: paquete.descripcion.join(', '),
  precioUnitario: typeof paquete.precio === 'string'
    ? this.CartService.parsePrecio(paquete.precio)
    : paquete.precio,
  calificacion: paquete.calificacion,
  img: paquete.img,
  price: typeof paquete.precio === 'string'
    ? this.CartService.parsePrecio(paquete.precio)
    : paquete.precio,
  cant: 1
    };
    this.CartService.updateCart(producto)
  }

  asignarImagen(): string {
    return 'images/avion.jpg';
  }
   ngOnInit(): void {
  this.agregarProductosService.listarProductos().subscribe({
    next: (res) => {
      const nuevosPaquetes = res
      .filter(p => typeof p.id === 'number')
      .map((p) => ({
        id: p.id!,
        img: p.img || this.asignarImagen(),
        titulo: `Paquetes a ${p.nombre}`,
        descripcion: [p.descripcion, 'Hotel + Vuelo'],
        precio: p.precioUnitario.toLocaleString(),
        calificacion: 0
      }));

      this.paquetes = this.paquetes.concat(nuevosPaquetes);
    },
    error: (err) => console.error('Error al obtener productos', err)
  });
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
