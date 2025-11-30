import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DashboardDataService {
  constructor(private http: HttpClient) {}

  // Dummy observable search
  fakeSearch(term: string): Observable<string[]> {
    if (!term.trim()) return of([]);
    const all = ['Angular', 'React', 'Vue', 'Svelte', 'Next.js'];
    const filtered = all.filter(v =>
      v.toLowerCase().includes(term.toLowerCase())
    );
    return of(filtered).pipe(delay(300));
  }

  // For mergeMap / concatMap / exhaustMap demo
  fakeRequest(type: string, op: string): Observable<string> {
    return of(`Request for ${type} via ${op} completed`).pipe(delay(1000));
  }

  // Example HTTP call returning observable (dummy URL)
  getItems(): Observable<{ id: number; name: string }[]> {
    // In real app: return this.http.get<...>('api/items');
    return of([
      { id: 1, name: 'Item A' },
      { id: 2, name: 'Item B' },
    ]).pipe(delay(500));
  }
}
