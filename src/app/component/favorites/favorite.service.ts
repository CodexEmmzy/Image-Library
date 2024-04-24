// favorite.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Photo } from '../photos/photo.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private _favorites: BehaviorSubject<Photo[]> = new BehaviorSubject<Photo[]>([]);
  private _favorite: BehaviorSubject<Photo | null> = new BehaviorSubject<Photo | null>(null);

  favorites$ = this._favorites.asObservable();

  constructor() {}
  favorite$ = this._favorite.asObservable();


  addToFavorites(photo: Photo) {
    const currentFavorites = this._favorites.getValue();
    if (!currentFavorites.find(favorite => favorite.id === photo.id)) {
      this._favorites.next([...currentFavorites, photo]);
    }
  }

  addToFavorite(photo: Photo) {
    this._favorite.next(photo);
  }

  removeFromFavorite() {
    this._favorite.next(null);
  }
}
