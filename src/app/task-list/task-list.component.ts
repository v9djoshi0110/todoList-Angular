import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  date:Date = new Date();
  newTask : string = "";
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.date = new Date(this.route.snapshot.params['date']);
  }
  
  sayHello() {
    console.log('Hey, from method..')
  }

  todos: Task[] = [ new Task('Go to Gym'),
  new Task('Learn Angular'), 
  new Task('Call home'),
  new Task('Wash clothes')
];

add = ()=>{
  if(this.newTask){
    this.todos.push(new Task(this.newTask));
    this.newTask = "";
  }else{
    alert('enter proper data!')
  }
}

remove(removeTodo:Task){
 // this.todos = this.todos.filter(todo => todo !== removeTodo);
 let isConfirmed = confirm(`Are you sure to remove the task: "${removeTodo.title}" from ToDo list ?`);
 if(isConfirmed){
   this.todos.splice(this.todos.indexOf(removeTodo),1);
 }
}
}

class Task {
  constructor(public title:string){
  }
  isDone:boolean = false;
 
  toggleDone(){
    this.isDone = !this.isDone;
  }
}
