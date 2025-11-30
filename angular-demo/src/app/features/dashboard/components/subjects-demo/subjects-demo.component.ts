import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-subjects-demo',
  templateUrl: './subjects-demo.component.html',
  styleUrls: ['./subjects-demo.component.scss'],
  standalone:false
})
export class SubjectsDemoComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  // BehaviorSubject (state)
  currentFilter$ = new BehaviorSubject<string>('all');

  // Subject (fire-and-forget events)
  clickEvents$ = new Subject<string>();

  // ReplaySubject (replay last 2 logs to late subscribers)
  logs$ = new ReplaySubject<string>(2);

  private subs = new Subscription();

  constructor() {
    this.subs.add(
      this.clickEvents$.subscribe(msg => this.logs$.next(`Click: ${msg}`))
    );

    this.subs.add(
      this.currentFilter$.subscribe(f => this.logs$.next(`Filter set: ${f}`))
    );
  }

  setFilter(filter: string): void {
    this.currentFilter$.next(filter);
  }

  emitClick(eventName: string): void {
    this.clickEvents$.next(eventName);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.subs.unsubscribe();
  }
}
