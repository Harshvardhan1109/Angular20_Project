import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from './pipes/highlight-pipe';
import { RoleListPipe } from './pipes/role-list-pipe';



@NgModule({
  declarations: [
    HighlightPipe,
    RoleListPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
