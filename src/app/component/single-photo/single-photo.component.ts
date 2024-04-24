import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../photos/photo.model';
import { FavoriteService } from '../favorites/favorite.service';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss'],
})
export class SinglePhotoComponent implements OnInit {
  photoId: string | undefined;
  photoUrl: string | undefined;
  photo: Photo | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.photoId = params['id'];
      this.loadPhoto(this.photoId);
    });
  }

  addToFavorite(photo: Photo) {
    this.favoriteService.addToFavorites(photo);
  }

  removeFromFavorites() {
    // Add logic to remove photo from favorites
    // Then navigate back to favorites page
    this.router.navigate(['/favorites']);
  }

  loadPhoto(id: any) {
    console.log("Load photo", id)
    // Construct the URL for the image using the photoId
    this.photoUrl = `https://picsum.photos/id/${id}/200/300`;
  }
}
