import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPreferncesService {

  USER_PREFERENCES_KEY = 'USER_PREFERNCES';

  constructor() { }

  saveToStorage(object: any) {
    localStorage.setItem(this.USER_PREFERENCES_KEY, JSON.stringify(object));
  }

  getFromStorage() {
    return JSON.parse(localStorage.getItem(this.USER_PREFERENCES_KEY));
  }
}
