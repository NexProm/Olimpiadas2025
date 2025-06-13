import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input('data') product: any
  @Output('addToCart') addToCart = new EventEmitter()

  addCart(){
    this.addToCart.emit(this.product)
  }
}
