import { Component, computed, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-signals-demo',
  templateUrl: './signals-demo.component.html',
  styleUrls: ['./signals-demo.component.scss'],
  standalone:false
})
export class SignalsDemoComponent {
  counter = signal<number>(0);                     // value type
  user = signal<{ name: string; role: string }>({  // object type
    name: 'Harsh',
    role: 'Admin',
  });

  todos: WritableSignal<Todo[]> = signal<Todo[]>([
    { id: 1, title: 'Learn Signals', completed: false },
    { id: 2, title: 'Play Football', completed: true },
  ]);

  // Derived state with computed
  completedCount = computed(
    () => this.todos().filter(t => t.completed).length
  );

  nextId = 3;

  // Events
  increment(): void {
    this.counter.update(v => v + 1);
  }

  reset(): void {
    this.counter.set(0);
  }

  setUserAdmin(): void {
    this.user.set({ name: 'Harsh', role: 'Admin' });
  }

  patchUserName(newName: string): void {
    this.user.update(u => ({ ...u, name: newName }));
  }

  addTodo(title: string): void {
    if (!title.trim()) return;

    this.todos.update(list => [
      ...list,
      { id: this.nextId++, title, completed: false },
    ]);
  }

  toggleTodo(id: number): void {
    this.todos.update(list =>
      list.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  deleteTodo(id: number): void {
    // delete via filter
    this.todos.update(list => list.filter(t => t.id !== id));
  }

  trackTodo = (_: number, item: Todo) => item.id;
}
