import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<{ id: number; title: string; completed: boolean }[]> {
    return of([
      { id: 1, title: 'From API: Learn NgRx', completed: false },
      { id: 2, title: 'From API: Build app', completed: true },
    ]).pipe(delay(800));
  }
}
