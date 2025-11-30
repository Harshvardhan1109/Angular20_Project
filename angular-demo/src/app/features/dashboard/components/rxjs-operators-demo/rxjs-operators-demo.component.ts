import { Component, OnDestroy } from '@angular/core';
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  of,
  delay,
  mergeMap,
  concatMap,
  exhaustMap,
  Observable,
} from 'rxjs';
import { DashboardDataService } from '../../services/dashboard-data.service';

@Component({
  selector: 'app-rxjs-operators-demo',
  templateUrl: './rxjs-operators-demo.component.html',
  styleUrls: ['./rxjs-operators-demo.component.scss'],
  standalone:false
})
export class RxjsOperatorsDemoComponent implements OnDestroy {
  searchInput$ = new Subject<string>();
  searchResults$!: Observable<string[]>;

  logs: string[] = [];

  constructor(private dataService: DashboardDataService) {
    // debounce + switchMap (typical search)
    this.searchResults$ = this.searchInput$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term =>
        this.dataService.fakeSearch(term).pipe(
          delay(500) // simulate network latency
        )
      )
    );

    // Example streams for mergeMap/concatMap/exhaustMap demo
    const click$ = new Subject<'merge' | 'concat' | 'exhaust'>();

    click$.pipe(
      mergeMap(type => this.dataService.fakeRequest(type, 'mergeMap'))
    ).subscribe(res => this.logs.push(res));

    click$.pipe(
      concatMap(type => this.dataService.fakeRequest(type, 'concatMap'))
    ).subscribe(res => this.logs.push(res));

    click$.pipe(
      exhaustMap(type => this.dataService.fakeRequest(type, 'exhaustMap'))
    ).subscribe(res => this.logs.push(res));

    // simple bindings
    this.onMergeClick = () => click$.next('merge');
    this.onConcatClick = () => click$.next('concat');
    this.onExhaustClick = () => click$.next('exhaust');
  }

  onSearch(term: string): void {
    this.searchInput$.next(term);
  }

  onMergeClick!: () => void;
  onConcatClick!: () => void;
  onExhaustClick!: () => void;

  trackByIndex = (i: number) => i;

  ngOnDestroy(): void {
    this.searchInput$.complete();
  }
}
