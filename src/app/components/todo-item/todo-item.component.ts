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
  editting = false;

  constructor() {
  }

  deleteTodo(): void {
    this.itemRemove.emit(this.todoItem.Id);
  }

  changeState() {
    this.updateTodo();
  }

  updateTodo() {
    this.itemUpdate.emit(this.todoItem);
  }

  edit() {
    this.editting = true;
  }

  stopEditting() {
    this.editting = false;
    this.itemUpdate.emit(this.todoItem);
  }

  cancelEditting() {
    this.editting = false;
  }

  ngOnInit() {
  }
}
