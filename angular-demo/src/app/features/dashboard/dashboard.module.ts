import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SignalsDemoComponent } from './components/signals-demo/signals-demo.component';
import { SubjectsDemoComponent } from './components/subjects-demo/subjects-demo.component';
import { RxjsOperatorsDemoComponent } from './components/rxjs-operators-demo/rxjs-operators-demo.component';


@NgModule({
  declarations: [
    SignalsDemoComponent,
    SubjectsDemoComponent,
    RxjsOperatorsDemoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
