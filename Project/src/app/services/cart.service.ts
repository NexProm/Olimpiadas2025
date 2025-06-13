import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any = []
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
        this.cart.push(product)
      }
       this.calPrice()
       localStorage.setItem('products', JSON.stringify(this.cart))

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
}
