import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employees } from 'src/app/employees.model';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddemployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employees ,private employeeService:EmployeesService) { }

  form:FormGroup;
  employee:Employees;
  loading=false;
  formValid=true;
  ngOnInit(): void {
    this.form = new FormGroup({
      'id': new FormControl(null,{validators:[Validators.required]}),
      'employee_name': new FormControl(null,{validators:[Validators.required]}),
      'employee_salary': new FormControl(null,{validators:[Validators.required]}),
      'employee_age': new FormControl(null,{validators:[Validators.required]}),
      'createdAt': new FormControl(null,{validators:[Validators.required]}),
      'updatedAt': new FormControl(null,{validators:[Validators.required]})
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(){
      this.loading = true;
        
          this.employeeService.addEmployee(this.form.value);
          
        this.loading = false;
        this.form.reset();
       // this.employeeService.getAllEmployees().subscribe
        
    this.onNoClick();
  }
}
