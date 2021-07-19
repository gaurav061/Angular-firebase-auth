import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  public isLoggedIn: Subject<boolean> = new Subject<boolean>();

  constructor(
    private firebaseAuth: AngularFireAuth,
    private Http: HttpClient,
    private router: Router
  ) {
    this.isLoggedIn.next(false);
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
    }
  }

  signin(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.isLoggedIn.next(true);
        this.router.navigateByUrl('/home');
        this.Http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(
          (data) => console.log('data', data)
        );
      });
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn.next(true);
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }

  logout() {
    this.firebaseAuth.signOut().then(() => {
      this.isLoggedIn.next(false);
      localStorage.removeItem('user');
    });
  }
}
