import { createReducer, on } from '@ngrx/store';
import * as TodosActions from './todos.actions';

export interface TodosState {
  items: { id: number; title: string; completed: boolean }[];
  loading: boolean;
  error: string | null;
}

export const initialState: TodosState = {
  items: [],
  loading: false,
  error: null,
};

let nextId = 1;

export const todosReducer = createReducer(
  initialState,
  on(TodosActions.loadTodos, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TodosActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    items: todos,
    loading: false,
  })),
  on(TodosActions.loadTodosFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(TodosActions.addTodoValue, (state, { title }) => ({
    ...state,
    items: [
      ...state.items,
      { id: nextId++, title, completed: false },
    ],
  })),
  on(TodosActions.addTodoObject, (state, { todo }) => ({
    ...state,
    items: [...state.items, todo],
  }))
);
