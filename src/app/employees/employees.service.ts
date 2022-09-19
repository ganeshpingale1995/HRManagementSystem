import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from './employees';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Employees[]>('http://localhost:3000/employees');
  }

  create(payload: Employees) {
    console.log("service::"+payload);
    return this.http.post<Employees>('http://localhost:3000/employees', payload);
  }

  getById(id: number) {
    return this.http.get<Employees>(`http://localhost:3000/employees/${id}`);
   }
    
   update(payload:Employees){
    return this.http.put(`http://localhost:3000/employees/${payload.Id}`,payload);
   }

   delete(id:number){
    return this.http.delete<Employees>(`http://localhost:3000/fruits/${id}`);
 }
}
