import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';
import { StatusFilterPipe } from './pipes/status-filter.pipe';



@NgModule({
  declarations: [
    TruncatePipe,
    StatusFilterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
