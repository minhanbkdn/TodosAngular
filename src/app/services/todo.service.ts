import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TodoItem} from '../entities/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'http://178.128.114.26:1234/api/todos';
  private readonly httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) {
  }

  updateToDoItem(item: TodoItem): Observable<any> {
    console.log(item);
    return this.httpClient.put(this.url, item, this.httpOptions);
  }


  getTodos(): Observable<TodoItem[]> {
    return this.httpClient.get<TodoItem[]>(this.url);
  }

  deleteTodo(todo: TodoItem | number): Observable<object> {
    const id = typeof todo === 'number' ? todo : todo.Id;
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  addTodo(todo: TodoItem): Observable<TodoItem> {
    return this.httpClient.post<TodoItem>(this.url, todo, this.httpOptions);
  }
}
