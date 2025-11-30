import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodosActions from '../../store/todos.actions';
import { selectTodos, selectTodosLoading, selectTodosError } from '../../store/todos.selectors';

@Component({
  selector: 'app-ngrx-todos',
  templateUrl: './ngrx-todos.component.html',
  styleUrls: ['./ngrx-todos.component.scss'],
  standalone:false
})
export class NgrxTodosComponent implements OnInit {
  todos$ = this.store.select(selectTodos);
  loading$ = this.store.select(selectTodosLoading);
  error$ = this.store.select(selectTodosError);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(TodosActions.loadTodos());
  }

  addSimpleTodo(titleInput: HTMLInputElement): void {
    const title = titleInput.value.trim();
    if (!title) return;
    this.store.dispatch(TodosActions.addTodoValue({ title }));
    titleInput.value = '';
  }

  addObjectTodo(): void {
    this.store.dispatch(
      TodosActions.addTodoObject({
        todo: {
          id: Date.now(),
          title: 'Object type todo',
          completed: false,
        },
      })
    );
  }
}
