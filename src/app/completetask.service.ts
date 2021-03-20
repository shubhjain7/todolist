import {Injectable } from '@angular/core';
import {TaskModel} from './task.model';
import {  Observable, Subject } from 'rxjs';

 import { of } from 'rxjs';

 @Injectable()
 export class CompleteTaskService{
private compTasks:TaskModel[]=[];
compTasksChanged = new Subject<TaskModel[]>();



addCompTask(compTask:TaskModel[]){
        this.compTasks=compTask;

        this.compTasksChanged.next(this.compTasks.slice());
        console.log(this.compTasks);
    }

    getCompTasks():Observable<TaskModel[]>{
        console.log(this.compTasks);
        return of(this.compTasks);
    }
 }