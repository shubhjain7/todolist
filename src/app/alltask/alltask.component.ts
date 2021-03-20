import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskModel } from '../task.model';

@Component({
  selector: 'app-alltask',
  templateUrl: './alltask.component.html',
  styleUrls: ['./alltask.component.css']
})
export class AlltaskComponent implements OnInit {
  form :  FormGroup;
  constructor( private taskService:TaskService) { }
  allTask:TaskModel[]=[];

  ngOnInit(): void {
    this.form = new FormGroup({
      'task': new FormControl(null,{validators:[Validators.required]})
    });
    
    this.allTask = this.taskService.getAllTask();
    //console.log(this.allTask);
  }


  addTask(){
    //console.log(this.form.value);
    this.taskService.addTask(this.form.value);
    this.form.reset();
  }

  deleteTask(index){
    //console.log(index);
    this.taskService.deleteTask(index);
  }

  markTask(index){
    this.taskService.markTask(index);
    this.deleteTask(index);
  }

  completeTask(index){
    this.taskService.completeTask(index);
    this.deleteTask(index);
  }
}
