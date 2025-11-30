// src/app/features/dashboard/components/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  goToSignals(event: Event): void {
    this.router.navigate(['./signals'], { relativeTo: this.router.routerState.root.firstChild });
  }

  goToSubjects(event:Event): void {
    this.router.navigate(['./subjects'], { relativeTo: this.router.routerState.root.firstChild });
  }

  goToRxjs(event: Event): void {
    // (event.target as HTMLButtonElement).value;
    this.router.navigate(['./rxjs'], { relativeTo: this.router.routerState.root.firstChild });
  }
}
