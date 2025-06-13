import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CarritoComponent } from './views/carrito/carrito.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'carrito',
    component: CarritoComponent
  }
];
