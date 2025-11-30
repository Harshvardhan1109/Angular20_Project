// src/app/app.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MsalFacadeService, MsalUser } from './core/services/msal-facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'advanced-angular20-demo';

  // user$ comes from MSAL facade
  user$: Observable<MsalUser | null> = this.msal.user$;

  constructor(
    private msal: MsalFacadeService,
    private router: Router
  ) {}

  onLogin(): void {
    // fake login, then navigate to default feature
    this.msal.login().subscribe(() => {
      this.router.navigateByUrl('/dashboard');
    });
  }

  onLogout(): void {
    this.msal.logout();
    this.router.navigateByUrl('/'); // go back to root
  }
}
