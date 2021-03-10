export class Employees{
    constructor(
                public id:number,
                public employee_name:string,
                public employee_age:number,
                public employee_salary:number,
                
                public createdAt:Date,
                public updatedAt:Date
                )
                {}
  }
// export class Beer{
//     constructor(
//                 public imagePath:string,
//                 public abv:string,
//                 public ibu:string,
//                 public id:number,
//                 public name:string,
//                 public style:string,
//                 public ounces:number
//                 )
//                 {}
//   }