import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  @Input() remainingItem: number;
  @Input() completedItem: number;
  @Output() removeCompleted = new EventEmitter();
  @Output() filterTodoItem = new EventEmitter();
  currentStatus = 0;

  constructor() {
  }

  clearCompleted() {
    this.removeCompleted.emit();
  }

  filters(status: number) {
    this.currentStatus = status;
    this.filterTodoItem.emit(status);
  }

  ngOnInit() {
  }

}
