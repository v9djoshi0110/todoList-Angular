import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TaskListModule { }
