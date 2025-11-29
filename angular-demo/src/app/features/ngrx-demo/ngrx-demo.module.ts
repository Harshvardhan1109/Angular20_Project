import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxDemoRoutingModule } from './ngrx-demo-routing.module';
import { NgrxTodosComponent } from './components/ngrx-todos/ngrx-todos.component';


@NgModule({
  declarations: [
    NgrxTodosComponent
  ],
  imports: [
    CommonModule,
    NgrxDemoRoutingModule
  ]
})
export class NgrxDemoModule { }
