import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../employees.service';
import {Employees} from '../employees.model';
import { MatDialog } from '@angular/material/dialog';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { GetemployeeComponent } from './getemployee/getemployee.component';
import { PageEvent } from '@angular/material/paginator';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css']
})
export class AllemployeesComponent implements OnInit {
  loading = true;
  spinload=false;
  url:string;
  
   displayedColumns: string[] = ['id','employee_name', 'employee_salary', 'employee_age','createdAt','updatedAt','action'];
  
  employees:Employees[]=[];
  index=0;
  newEmps:Employees[]=[];
  totalEmps =33;
    empsPerPage =5;
    pageSizeOptions = [5,10,20,30];
    public pageSlice = this.employees.slice(0,10);
    sortedData: Employees[];
  employee:Employees;
  brand='';
  loadEmp=false;
  constructor(public dialog: MatDialog,private employeeService:EmployeesService) { this.sortedData = this.employees.slice(); }

  ngOnInit(): void {
   
    
    if(!this.loadEmp ){
      this.loading=false;
      this.spinload=true;
      this.employeeService.getAllEmployees().subscribe(
      (data)=>{
        this.loading = true;
        this.spinload=false;
            let employees = data['allEmployees'];
        this.employees=employees;
        this.employeeService.setEmployees(this.employees);
        this.sortedData=this.employees;
        console.log(this.employees);
        this.loading=false;
        //console.log(this.beers);
      });
    }

    else{
      //console.log(this.employeeService.getLoadEmp());
      this.employees=this.employeeService.getLoadEmp();
      this.employees=this.pageSlice;
      this.employeeService.setEmployees(this.employees);
      this.sortedData=this.employees;
      
    }    
    
  }
  
  showEmployee(){

  }


  getEmployee(index){
    console.log("Employee:"+index );
    const dialogRef = this.dialog.open(GetemployeeComponent, {
      width: '400px',
      height:"400px",
      data: {employee:this.employeeService.getEmployeeById(index)}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.employee= result;
    });
  }


  addEmployee(){
    const dialogRef = this.dialog.open(AddemployeeComponent, {
      width: '600px',
      height:"400px",
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.employee= result;
    });
  }

  onChangePage(pageData:PageEvent){
    console.log(pageData);
    const startIndex=pageData.pageIndex * pageData.pageSize;
    let endIndex = startIndex + pageData.pageSize;
    if(endIndex>this.employees.length){
      endIndex=this.employees.length;
    }
    this.pageSlice = this.employees.slice(startIndex,endIndex)
    this.employees=this.pageSlice;
     console.log(this.pageSlice);
     this.loadEmp=true;
     this.ngOnInit();
  }

  sortData(sort: Sort) {
    const data = this.employees.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'employee_name': return compare(a.employee_name, b.employee_name, isAsc);
        case 'employee_salary': return compare(a.employee_salary, b.employee_salary, isAsc);
        case 'employee_age': return compare(a.employee_age, b.employee_age, isAsc);
        default: return 0;
      }
    });

}

searchBrand(){
  if(this.brand==" "){
    this.ngOnInit();
  }
  
  else{
    this.employees=this.employees.filter(res=>{
      return res.employee_name.toLocaleLowerCase().match(this.brand.toLocaleLowerCase());
    })
  }
  console.log(this.brand);
}
 
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
