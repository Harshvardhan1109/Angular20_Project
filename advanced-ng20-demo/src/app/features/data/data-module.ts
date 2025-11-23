import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing-module';
import { Data } from './data';
import { DataList } from './components/data-list/data-list';
import { DataDetail } from './components/data-detail/data-detail';


@NgModule({
  declarations: [
    Data,
    DataList,
    DataDetail
  ],
  imports: [
    CommonModule,
    DataRoutingModule
  ]
})
export class DataModule { }
