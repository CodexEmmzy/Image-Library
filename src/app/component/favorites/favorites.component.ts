import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { FavoriteService } from './favorite.service';
import { Photo } from '../photos/photo.model';

@Component({
  selector: 'app-favorites',
  standalone: true,
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  imports: [CommonModule]
})
export class FavoritesComponent implements OnInit {
  favoritePhotos: Photo[] = [];
  favoritePhoto: Photo | null = null;
  selectedPhotoId: string | null = null;



  constructor(private favoriteService: FavoriteService, private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.favoriteService.favorites$.subscribe(favorites => {
      this.favoritePhotos = favorites;
    });

    this.favoriteService.favorite$.subscribe(favorite => {
      this.favoritePhoto = favorite;
    });
  }

  selectPhoto(photoId: string) {
    this.selectedPhotoId = photoId;
    console.log(this.selectedPhotoId);
    this.router.navigate(['photos/', photoId]);

  }
}
