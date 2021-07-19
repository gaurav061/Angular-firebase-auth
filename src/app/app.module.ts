import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { CookieModule } from 'ngx-cookie';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppHttpInterceptor } from './AppHttpInterceptor';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import { LoginSignupComponent } from './login-signup/login-signup.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginSignupComponent],
  imports: [
    BrowserModule,
    CookieModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBAg7KfGqfohJSbyd5wmpLypmtfsWJmWec',
      authDomain: 'auth-test-project-2cb53.firebaseapp.com',
      projectId: 'auth-test-project-2cb53',
      storageBucket: 'auth-test-project-2cb53.appspot.com',
      messagingSenderId: '1007803562962',
      appId: '1:1007803562962:web:5acfffbfaa487dc6c2e60b',
      measurementId: 'G-GR20JSM3G0',
    }),
  ],
  providers: [
    FirebaseService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
