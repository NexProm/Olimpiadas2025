import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CarritoComponent } from './views/carrito/carrito.component';
import { PackageComponent } from './views/package/package.component';
import { InicioSesionComponent } from './views/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './views/registro/registro.component';
import { CompraComponent } from './views/compra/compra.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { AlojamientosComponent } from './views/alojamientos/alojamientos.component';
import { VuelosComponent } from './views/vuelos/vuelos.component';
import { AlquileresComponent } from './views/alquileres/alquileres.component';
import { AutosComponent } from './views/autos/autos.component';
import { AsistenciaComponent } from './views/asistencia/asistencia.component';
import { MicrosComponent } from './views/micros/micros.component';
import { SubirProductosComponent } from './views/subir-productos/subir-productos.component';
import { JefesComponent } from './views/jefes/jefes.component';
import { PedidosComponent } from './views/pedidos/pedidos.component';
import { SuscribirseComponent } from './views/suscribirse/suscribirse.component';
import { AboutComponent } from './views/about/about.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'package', component: PackageComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'compra', component: CompraComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'alojamientos', component: AlojamientosComponent },
  { path: 'vuelos', component: VuelosComponent },
  { path: 'alquileres', component: AlquileresComponent },
  { path: 'autos', component: AutosComponent },
  { path: 'asistencia', component: AsistenciaComponent },
  { path: 'micros', component: MicrosComponent },
  { path: 'agregar-producto', component: SubirProductosComponent },
  { path: 'jefes', component: JefesComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'suscribirse', component: SuscribirseComponent },
  { path: 'about', component: AboutComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
