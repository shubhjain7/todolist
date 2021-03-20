import {Injectable } from '@angular/core';
import {TaskModel} from './task.model';
import {  Observable, Subject } from 'rxjs';

import { of } from 'rxjs';

@Injectable()
export class MarkTaskService{
private markTasks:TaskModel[]=[];
markTasksChanged = new Subject<TaskModel[]>();



    addMarkTask(markTask:TaskModel[]){
        this.markTasks=markTask;

        this.markTasksChanged.next(this.markTasks.slice());
        console.log(this.markTasks);
    }

    getMarkTasks():Observable<TaskModel[]>{
        console.log(this.markTasks);
        return of(this.markTasks);
    }
}