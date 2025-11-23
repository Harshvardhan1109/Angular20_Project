import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { Auth } from './auth';
import { Login } from './components/login/login';
import { AuthStatus } from './components/auth-status/auth-status';


@NgModule({
  declarations: [
    Auth,
    Login,
    AuthStatus
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
