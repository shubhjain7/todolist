import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule} from '@angular/material/input';
import { MatExpansionModule }from '@angular/material/expansion';
import { MatCardModule }from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule }from '@angular/material/toolbar';
import { MatProgressSpinnerModule }   from '@angular/material/progress-spinner';
import { MatPaginatorModule }   from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import { Routes, RouterModule } from '@angular/router';
import { AlltaskComponent } from './alltask/alltask.component';
import { CompletedtaskComponent } from './completedtask/completedtask.component';
import { MarkedtaskComponent } from './markedtask/markedtask.component';
import { TaskService } from './task.service';
import { MarkTaskService } from './marktask.service';
import { CompleteTaskService } from './completetask.service';
//import {CdkTableModule} from '@angular/cdk/table';
const routes:Routes=[];

@NgModule({
  declarations: [
    AppComponent,
    AlltaskComponent,
    CompletedtaskComponent,
    MarkedtaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
    MatSortModule,
    [RouterModule.forRoot(routes)],
    //CdkTableModule
  ],
  providers: [TaskService,MarkTaskService,CompleteTaskService],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
