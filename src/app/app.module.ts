import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllemployeesComponent } from './allemployees/allemployees.component';
import { GetemployeeComponent } from './allemployees/getemployee/getemployee.component';
import { AddemployeeComponent } from './allemployees/addemployee/addemployee.component';
import {CategoryPipe} from './employee.pipe';

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
//import {CdkTableModule} from '@angular/cdk/table';
const routes:Routes=[];

@NgModule({
  declarations: [
    AppComponent,
    AllemployeesComponent,
    GetemployeeComponent,
    AddemployeeComponent,
    CategoryPipe
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
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
