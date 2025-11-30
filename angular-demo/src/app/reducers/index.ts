import { ActionReducerMap } from '@ngrx/store';
import { todosReducer, TodosState } from '../features/ngrx-demo/store/todos.reducers';

export interface AppState {
  todos: TodosState;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: todosReducer,
};
