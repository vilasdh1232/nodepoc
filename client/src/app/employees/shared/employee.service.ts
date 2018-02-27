import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Employee} from './employee.model';
@Injectable()
export class EmployeeService {
 employeeList: Employee;
 selectedEmployee: Employee = new Employee();
 constructor(private firebase :AngularFireDatabase ) { }

 getData(){
   this.employeeList = this.firebase.list('employees');
   return this.employeeList;
 }

 insertEmployee(employee : Employee)
 {

  this.http.post('http://localhost:5000/book', this.book)
  .subscribe(res => {
      let id = res['_id'];
      this.router.navigate(['/book-details', id]);
    }, (err) => {
      console.log(err);
    }
  );
   /* this.employeeList.push({
     name: employee.name,
     position: employee.position,
     office: employee.office,
     salary: employee.salary
   }); */
 }

 updateEmployee(employee : Employee){
   this.employeeList.update(employee.$key,
     {
       name: employee.name,
       position: employee.position,
       office: employee.office,
       salary: employee.salary
     });
 }

 deleteEmployee($key : string){
   this.employeeList.remove($key);
 }

}