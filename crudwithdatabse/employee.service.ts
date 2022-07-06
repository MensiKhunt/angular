import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student, Subject } from './form/form.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";
  private URL = "http://localhost:8080/api/v1/subject"
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Student[]>{
  return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }
  // getEmployeeSubject():Observable<Subject[]>{
  //   return this.httpClient.get<Subject[]>(`${this.URL}`);
  // }

  createEmployee(employee: Student): Observable<Object>{ 
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id:number): Observable<object>{
    return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee : Student) :Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${ id}`,employee)
  }

  deleteEmployee(id:number) :Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
  deleteSubject(subjectId:number) :Observable<object>{
    return this.httpClient.delete(`${this.URL}/${subjectId}`);
   }

  
}

