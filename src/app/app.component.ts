import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { FavoritesComponent } from './component/favorites/favorites.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, FavoritesComponent, CommonModule, RouterLink, HttpClientModule]
})
export class AppComponent {
  title = 'Image-Library';
}
