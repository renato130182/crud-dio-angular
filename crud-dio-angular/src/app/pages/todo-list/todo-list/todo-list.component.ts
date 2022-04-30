import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = [];
  constructor() { }
  todo: Todo = {id:0,title:'',done:false}
  ngOnInit(): void {
    let i:any = localStorage.getItem('todos')
    let todos = JSON.parse(i);
    if(!todos){
      this.todos = [];
    }else{
      this.todos = todos;
    }
  }

  addTodo(title: string){
    let id = this.todos.length + 1;
    this.todos.push({
      id:id,
      title:title,
      done:false
    });
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }

  removeTodo(todo:Todo){
    let i = this.todos.indexOf(todo);
    this.todos.splice(i,1);
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }

}
