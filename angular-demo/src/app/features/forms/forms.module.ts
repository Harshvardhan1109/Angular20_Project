import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { ReactiveFormDemoComponent } from './components/reactive-form-demo/reactive-form-demo.component';
import { TemplateFormDemoComponent } from './components/template-form-demo/template-form-demo.component';


@NgModule({
  declarations: [
    ReactiveFormDemoComponent,
    TemplateFormDemoComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
