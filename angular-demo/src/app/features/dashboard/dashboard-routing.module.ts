import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsDemoComponent } from './components/signals-demo/signals-demo.component';
import { SubjectsDemoComponent } from './components/subjects-demo/subjects-demo.component';
import { RxjsOperatorsDemoComponent } from './components/rxjs-operators-demo/rxjs-operators-demo.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,   // ⬅ default for /dashboard
    children: [
      {
        path: 'signals',
        component: SignalsDemoComponent,
      },
      {
        path: 'subjects',
        component: SubjectsDemoComponent,
      },
      {
        path: 'rxjs',
        component: RxjsOperatorsDemoComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
