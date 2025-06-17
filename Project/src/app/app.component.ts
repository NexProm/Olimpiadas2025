import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./views/header/header.component";
import { FooterComponent } from "./views/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule, HeaderComponent, FooterComponent],
import { PackageComponent } from './views/package/package.component';
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Project';
}
