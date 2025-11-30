import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { MsalFacadeService } from '../services/msal-facade.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private msal: MsalFacadeService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    if (this.msal.isAuthenticated()) {
      return true;
    }
    return this.router.parseUrl('/dashboard'); // redirect if not auth
  }
}
