import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FavoriteService } from '../favorites/favorite.service';
import { Photo } from './photo.model';



@Component({
  selector: 'app-photos',
  standalone: true,
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  imports: [CommonModule],
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading: boolean = false;
  favorites: Photo[] = []; // Assuming favorites are stored in this array
  
  constructor(private http: HttpClient, private favoriteService: FavoriteService)  {}

  ngOnInit(): void {
    this.getPhotos();
  }


  addToFavorites(photo: Photo) {
    this.favoriteService.addToFavorites(photo);
  }

  getPhotos() {
    this.loading = true;
    this.http.get('https://picsum.photos/v2/list?page=1&limit=20').subscribe((data: any) => {
      this.photos = data.map((item: any) => ({
        id: item.id,
        url: item.download_url,
      }));
      this.loading = false;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.loadMorePhotos();
    }
  }

  loadMorePhotos() {
    if (!this.loading) {
      this.loading = true;
      // Assuming you have a variable to track the current page
      const nextPage = 2; // Example: increment the page number
      this.http
        .get(`https://picsum.photos/v2/list?page=${nextPage}&limit=20`)
        .subscribe((data: any) => {
          const newPhotos = data.map((item: any) => ({
            id: item.id,
            url: item.download_url,
          }));
          this.photos = [...this.photos, ...newPhotos];
          this.loading = false;
        });
    }
  }
}
