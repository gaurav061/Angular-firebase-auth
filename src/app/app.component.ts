import { Component, OnInit } from '@angular/core';

import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isSignedIn = false;
  isLogin: boolean = true;
  constructor(public firebaseService: FirebaseService) {}
  ngOnInit() {
    this.firebaseService.isLoggedIn.subscribe(
      (loginState) => (this.isSignedIn = loginState)
    );
  }
  onSignup(email: string, password: string) {
    this.firebaseService.signup(email, password);
  }
  onSignin(email: string, password: string) {
    this.firebaseService.signin(email, password);
  }
  handleLogout() {
    this.isSignedIn = false;
  }
}
