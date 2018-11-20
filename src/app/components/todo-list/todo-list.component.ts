import {Component, OnInit} from '@angular/core';
import {TodoItem} from '../../entities/todo-item';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: TodoItem[];
  newTodo: TodoItem;

  constructor(private todoService: TodoService) {
  }

  async addTodo() {
    const todo = await this.todoService.addTodo(this.newTodo).toPromise();
    if (todo.Description !== '') {
      this.todoList.push(todo);
      this.newTodo.Description = '';
    }
  }

  async deleteTodo(id) {
    await this.todoService.deleteTodo(id).toPromise();
    this.todoList = this.todoList.filter(value => value.Id !== id);
  }

  async updateTodo(todoItem) {
    console.log(todoItem);
    await this.todoService.updateToDo(todoItem).subscribe(
      item => todoItem = (<TodoItem>item),
      error => console.log(error)
    );
  }

  ngOnInit() {
    this.newTodo = new TodoItem('');
    this.todoService.getTodos().subscribe(
      todos => this.todoList = todos,
      error => console.log(error)
    );
  }
}
