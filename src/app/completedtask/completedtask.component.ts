import { Component, OnInit } from '@angular/core';
import { CompleteTaskService } from '../completetask.service';
import { TaskModel } from '../task.model';

@Component({
  selector: 'app-completedtask',
  templateUrl: './completedtask.component.html',
  styleUrls: ['./completedtask.component.css']
})
export class CompletedtaskComponent implements OnInit {
comptask:TaskModel[]=[];

  constructor(private comptaskService:CompleteTaskService) { }

  ngOnInit(): void {

    this.comptaskService.getCompTasks().subscribe(data=>{
      this.comptask= data;
    })
  }

}
