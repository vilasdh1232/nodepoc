import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
const API_URL = environment.apiUrl;

import { Employee } from './employee.model';
@Injectable()
export class EmployeeService {

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  constructor(private http: Http) { }
  selectedEmployee: any= {};
  public getAllEmployees():  Observable<Employee[]> {
    this.http.get(API_URL + '/employees').map(response => {
      const employees = response.json();
      return employees.map(employee => new Employee());
    }).catch(this.handleError);

  }

  public getEmployeeById(employeeId: number): Observable<Employee> {
    return this.http
      .get(API_URL + '/employees/' + employeeId)
      .map(response => {
        return new Employee(response.json());
      })
      .catch(this.handleError);
  }

  public createEmployee(employee: Employee): Observable<Employee> {
    return this.http
      .post(API_URL + '/employees', employee)
      .map(response => {
        return new Employee(response.json());
      })
      .catch(this.handleError);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http
      .put(API_URL + '/employees/' + employee.id, employee)
      .map(response => {
        return new Employee(response.json());
      })
      .catch(this.handleError);
  }

  public deleteEmployeeById(employeeId: string): Observable<null> {
    return this.http
      .delete(API_URL + '/employees/' + employeeId)
      .map(response => null)
      .catch(this.handleError);
  }

}