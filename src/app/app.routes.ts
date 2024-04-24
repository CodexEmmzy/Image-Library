import { Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { PhotosComponent } from './component/photos/photos.component';
import { FavoritesComponent } from './component/favorites/favorites.component';
import { SinglePhotoComponent } from './component/single-photo/single-photo.component';


export const routes: Routes = [
    { path: '', title:"Photos Page", component: PhotosComponent },
    { path: 'photos/:id', title:`Single Image`, component: SinglePhotoComponent },
    { path: 'favorites', title:"Favorites Page", component: FavoritesComponent },
];
