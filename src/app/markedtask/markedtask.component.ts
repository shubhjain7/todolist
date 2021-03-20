import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../task.model';
import { MarkTaskService } from '../marktask.service';

@Component({
  selector: 'app-markedtask',
  templateUrl: './markedtask.component.html',
  styleUrls: ['./markedtask.component.css']
})
export class MarkedtaskComponent implements OnInit {
  name="Todo1";
  marktask:TaskModel[]=[];
  constructor(private marktaskService:MarkTaskService) {
    
   }

  ngOnInit(): void {
    console.log(this.marktask);
   // this.taskService.sharedParam.subscribe(data=>this.marktask=data);
    this.marktaskService.getMarkTasks().subscribe(data=>{
      this.marktask= data;
    })
  }


  unmarkTask(i){
    
  }


}
