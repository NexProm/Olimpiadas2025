import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/Header/header.component';
import { PaqueteComponent } from './views/Section/paquete.component'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, PaqueteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Project';
}
