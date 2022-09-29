import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from './employees';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  GetList(){
    return this.http.get('https://localhost:7032/api/Employee');
  }

 GetById(Id:number){
  return this.http.get(`https://localhost:7032/api/Employee/${Id}`)
 }
 
 Add(employee: Employees){
  return this.http.post('https://localhost:7032/api/Employee',employee);
}

 Update(Id:number,employee:Employees){
  return this.http.put(`https://localhost:7032/api/Employee/${Id}`,employee)
 }

 DeleteById(Id:number){
  return this.http.delete(`https://localhost:7032/api/Employee/${Id}`);
 }
  
}
