import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./features/forms/forms.module').then(m => m.FormsModule),
  },
  {
    path: 'ngrx',
    loadChildren: () =>
      import('./features/ngrx-demo/ngrx-demo.module').then(m => m.NgrxDemoModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile-standalone',
    // Only standalone component in the app
    loadComponent: () =>
      import('./shared/standalone-profile/standalone-profile.component')
        .then(c => c.StandaloneProfileComponent),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
