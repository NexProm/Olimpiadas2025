import { Injectable } from '@angular/core';
import { ProductoCarrito } from '../models/producto-carrito.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart: ProductoCarrito[] = [];
  total = 0
  constructor() {
    let cart = localStorage.getItem('products')
    if(cart) this.cart = JSON.parse(cart);
    this.calPrice()
  }
  updateCart(product: any){
      const found = this.cart.find((x: any)=> x.id == product.id)
      if(found){
        found.cant++
      }
      else{
        product.cant = 1
        if(typeof product.precio === 'string'){
          product.price = this.parsePrecio(product.precio);
        }
        this.cart.push(product)
      }
       this.calPrice()
       localStorage.setItem('products', JSON.stringify(this.cart))

  }
  parsePrecio(precio: string): number {
    return parseInt(precio.replace(/\D/g, ''), 10);
  }
  deleteCart(product:any){
    this.cart = this.cart.filter((z: any)=> z.id != product.id)
    this.calPrice()
    localStorage.setItem('products', JSON.stringify(this.cart))
  }
  calPrice(){
    let total = 0
    for(let i = 0; i < this.cart.length; i++){
      total += this.cart[i].price * this.cart[i].cant
    }
    this.total = total
  }
  vaciarCarrito() {
    this.cart = [];
    this.total = 0;
    localStorage.removeItem('products');
  }

}
