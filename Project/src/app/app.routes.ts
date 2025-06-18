import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CarritoComponent } from './views/carrito/carrito.component';
import { PackageComponent } from './views/package/package.component';
import { InicioSesionComponent } from './views/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './views/registro/registro.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'carrito',
    component: CarritoComponent
  },
  {
    path:'package',
    component: PackageComponent
  },
  {
    path: 'inicio-sesion',
    component: InicioSesionComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
];
