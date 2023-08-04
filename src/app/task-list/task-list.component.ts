import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

add = (taskNgform: NgForm)=>{

 if(taskNgform.untouched===true){
  return;
 }
if(taskNgform.valid===false){
  return;
}
    this.todos.push(new Task(this.newTask));
    taskNgform.reset({date: this.date});
 
}

remove(removeTodo:Task){
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
