import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators'
import { Employees } from './employees.model';
import { ActivatedRoute, Router } from '@angular/router';
//import { Beer } from './employees.model';

@Injectable({providedIn:"root"})
export class EmployeesService{
    
    private index:number;
    private emps:Employees[]=[];

    loadEmp=false;
    
    empsChanged = new Subject<Employees[]>();

    constructor(private http:HttpClient,private router:Router, private route:ActivatedRoute){
    }

    getIndex(){
        return this.index;
    }

    setEmployees(emps:Employees[]){
        this.emps=emps;
    }

    getloadEmp(){
        return this.loadEmp;
    }

    getAllEmployees(){
        
      return   this.http.get('http://www.appgrowthcompany.com:5069/api/v1/employee/getAll');

    }

    getEmployeeById(index:number){
        this.index=index;
        //console.log(this.emps[index]);
         return this.emps[index];
    }

    addEmployee(employee:Employees){
        
        //     this.emps.push(employee);
        //      this.empsChanged.next([...this.emps]);
        //     console.log(this.emps);
        this.loadEmp=true;
        this.http.post<{emps:Employees}>('http://www.appgrowthcompany.com:5069/api/v1/employee/create',employee).subscribe(
      (myData)=>{
        
        this.emps.push(employee);
        this.empsChanged.next([...this.emps]);
        console.log(myData);
        this.router.navigate(['/'],{relativeTo:this.route});
      }
    );

    }


   getLoadEmp(){
       return this.emps;
   }

   
}