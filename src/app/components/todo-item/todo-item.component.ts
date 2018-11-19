import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from '../../entities/todo-item';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: TodoItem;
  @Output() itemRemove = new EventEmitter();
  @Output() itemUpdate = new EventEmitter();

  constructor() {
  }

  deleteTodo(): void {
    this.itemRemove.next(this.todoItem.Id);
  }

  changeState() {
    this.updateTodo();
  }

  updateTodo() {
    this.itemUpdate.next(this.todoItem);
  }

  ngOnInit() {
  }
}
