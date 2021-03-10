import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/employees.model';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-getemployee',
  templateUrl: './getemployee.component.html',
  styleUrls: ['./getemployee.component.css']
})
export class GetemployeeComponent implements OnInit {
  
  employee:Employees;
  constructor(private employeeService:EmployeesService) { }

  ngOnInit(): void {
    //console.log(this.employeeService.getEmployeeById(this.employeeService.getIndex()));
    this.employee=this.employeeService.getEmployeeById(this.employeeService.getIndex());
  }

}
