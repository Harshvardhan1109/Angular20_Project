import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TodosActions from './todos.actions';
import { ApiService } from '../../../core/services/api.service';
import { catchError, map, mergeMap, of, tap } from 'rxjs';

@Injectable()
export class TodosEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.loadTodos),
      mergeMap(() =>
        this.api.getTodos().pipe(
          map(todos => TodosActions.loadTodosSuccess({ todos })),
          catchError(err =>
            of(TodosActions.loadTodosFailure({ error: String(err) }))
          )
        )
      )
    )
  );

  // side effect (no new action)
  logSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodosActions.loadTodosSuccess),
        tap(() => console.log('Todos loaded successfully'))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private api: ApiService) {}
}
