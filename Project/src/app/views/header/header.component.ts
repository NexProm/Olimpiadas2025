import { ClienteService } from './../../services/cliente.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router, private clienteService: ClienteService) {}
  usuario: any = null;
  mostrarMenu: boolean = false

  toggleMenu(): void {
    this.mostrarMenu = !this.mostrarMenu;
  }
  ngOnInit(): void {
    this.clienteService.usuario$.subscribe(user => {
      this.usuario = user;
      this.mostrarMenu = false
    });
    this.clienteService.cargarDesdeLocalStorage();
  }
  cerrarSesion(): void {
    localStorage.removeItem('usuario');
    this.usuario = null;
    this.mostrarMenu = false;
    this.router.navigate(['/']);
  }
}
