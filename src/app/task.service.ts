import {Injectable } from '@angular/core';
import {TaskModel} from './task.model';
import {  Subject } from 'rxjs';
import {MarkTaskService} from './marktask.service';
import {CompleteTaskService} from './completetask.service';
@Injectable()
export class TaskService{

    constructor(private markService:MarkTaskService ,private compService:CompleteTaskService){}
    alltask:TaskModel[]=[];
    alltaskChanged = new Subject<TaskModel[]>();

    marktask:TaskModel[]=[];

    comptask:TaskModel[]=[];
    

    onetask:TaskModel;
    getAllTask(){
       // console.log(this.alltask);
        return this.alltask;
    }

    getCompltedTask(){

    }

    getMarkedTask(){
        //console.log(this.marktask);
        return this.marktask;
    }

    addTask(task:TaskModel){
        this.alltask.push(task);
        
        this.alltaskChanged.next([...this.alltask]);
       
    }

    getTaskByid(i){
        return this.alltask[i];
    }

    deleteTask(index){
        this.alltask.splice(index,1);
        this.alltaskChanged.next([...this.alltask]);
    }

    markTask(index){
        this.onetask= this.getTaskByid(index);
        this.marktask.push(this.onetask);
        
        console.log(this.marktask);

        this.markService.addMarkTask(this.marktask);
        
    }

    completeTask(index){
        this.onetask= this.getTaskByid(index);
        this.comptask.push(this.onetask);
        
        console.log(this.comptask);

        this.compService.addCompTask(this.comptask);
    }
}