import { Component } from '@angular/core';
import { MsalFacadeService, MsalUser } from '../../core/services/msal-facade.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone:false
})
export class DashboardComponent {
user$: Observable<MsalUser | null> = this.msal.user$;

  constructor(
    private msal: MsalFacadeService,
    private router: Router
  ) {}

}
