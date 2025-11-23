import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Data } from './data';

const routes: Routes = [{ path: '', component: Data }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
