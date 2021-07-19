import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardServiceService {
  constructor(private firebase: FirebaseService) {}

  getToken() {
    return !!localStorage.getItem('user');
  }
}
