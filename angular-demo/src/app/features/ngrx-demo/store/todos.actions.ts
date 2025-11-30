import { createAction, props } from '@ngrx/store';

export const loadTodos = createAction('[Todos] Load Todos');
export const loadTodosSuccess = createAction(
  '[Todos] Load Todos Success',
  props<{ todos: { id: number; title: string; completed: boolean }[] }>()
);
export const loadTodosFailure = createAction(
  '[Todos] Load Todos Failure',
  props<{ error: string }>()
);

// Value type (simple string)
export const addTodoValue = createAction(
  '[Todos] Add Todo Value',
  props<{ title: string }>()
);

// Object type
export const addTodoObject = createAction(
  '[Todos] Add Todo Object',
  props<{ todo: { id: number; title: string; completed: boolean } }>()
);
