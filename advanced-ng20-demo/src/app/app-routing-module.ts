import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./features/auth/auth-module').then(m => m.AuthModule) }, { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule) }, { path: 'data', loadChildren: () => import('./features/data/data-module').then(m => m.DataModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
