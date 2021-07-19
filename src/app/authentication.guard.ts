import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthguardServiceService } from './services/authguard-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private Authguardservice: AuthguardServiceService,
    private router: Router
  ) {}
  canActivate(): boolean {
    if (!this.Authguardservice.getToken()) {
      this.router.navigateByUrl('/login');
    }
    return this.Authguardservice.getToken();
  }
}
