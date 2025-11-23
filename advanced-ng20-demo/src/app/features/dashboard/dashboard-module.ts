import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { Dashboard } from './dashboard';
import { DashboardHome } from './components/dashboard-home/dashboard-home';
import { ReactiveFormDemo } from './components/reactive-form-demo/reactive-form-demo';
import { TemplateFormDemo } from './components/template-form-demo/template-form-demo';


@NgModule({
  declarations: [
    Dashboard,
    DashboardHome,
    ReactiveFormDemo,
    TemplateFormDemo
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
