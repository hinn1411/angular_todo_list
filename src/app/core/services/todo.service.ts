import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: ITodo[] = [
    {
      id: 1,
      title: 'Test title',
      description: 'Test description',
      status: 'OPEN',
    },
  ];
  constructor() {}
  getAllTodo() {
    return this.todos
  }
}
