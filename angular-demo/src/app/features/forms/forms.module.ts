import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { ReactiveFormDemoComponent } from './components/reactive-form-demo/reactive-form-demo.component';
import { TemplateFormDemoComponent } from './components/template-form-demo/template-form-demo.component';
import { ReactiveFormsModule,FormsModule as NgFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReactiveFormDemoComponent,
    TemplateFormDemoComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    NgFormsModule
  ]
})
export class FormsModule { }
