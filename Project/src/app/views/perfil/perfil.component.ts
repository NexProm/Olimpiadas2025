import { ClienteService } from './../../services/cliente.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  mostrarcontenido: string = 'cuenta'
  usuario: any = null
  club: any = null;
 constructor() {
      const clubData = localStorage.getItem('Miembro');
      this.club = clubData ? JSON.parse(clubData) : null;
  }

  clienteService = inject(ClienteService)
  router = inject(Router)
  activarContenido(valor:string) {
    this.mostrarcontenido = valor
  }
  ngOnInit(): void {
    this.clienteService.usuario$.subscribe(user => {
      this.usuario = user
    })
    this.clienteService.cargarDesdeLocalStorage();
  }
  cerrarSesion(): void {
    this.clienteService.limpiarUsuario()
    this.router.navigate(['/'])
  }
  
  verificarMembresia(): void {
    if(!this.club){
      this.club = { tiempo: new Date() }; 
      localStorage.setItem('Miembro', JSON.stringify(this.club));
      alert('Gracias por sumarte al Club')
    }
  }
  cancelarMembresia(): void {
    this.club = localStorage.removeItem('Miembro');
  }
}
