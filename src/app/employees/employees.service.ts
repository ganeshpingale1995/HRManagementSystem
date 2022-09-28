import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from './employees';
import { getLocaleFirstDayOfWeek } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  // private emplist: Employees[]=[];

  // private empList: Employees[] = [
  //   { id: 1, name: 'Ankit Sahu', dob: new Date('08/31/1992'), email: 'ankit@gmail.com', gender: 'Male', mobile: '8978786933', isActive: true, role: 'Admin' }
  // ];

  constructor(private http: HttpClient) { }
 
  

  // getEmployees() {
  //    return this.empList
  // }

  // getEmployeesByID(id: number) {
  //   return this.empList.find(x => x.id == id)
  // }

  // addEmployee(employee: Employees) {
  //   employee.id = new Date().getTime();
  //   this.empList.push(employee);
  // }

  // updateEmployee(employee: Employees) {
  //   const empIndex = this.empList.findIndex(x => x.id == employee.id);
  //   if (empIndex != null && empIndex != undefined) {
  //     this.empList[empIndex] = employee;
  //   }
  // }

  // removeEmployee(id: number) {
  //   this.empList = this.empList.filter(x => x.id != id);
  // }
  
  GetList(){
    return this.http.get('https://localhost:7032/api/Employee');
  }

 GetById(Id:number){
  return this.http.get(`https://localhost:7032/api/Employee/${Id}`)
 }
 
 Add(employee: Employees){
  debugger
  return this.http.post('https://localhost:7032/api/Employee',employee);
}

 Update(Id:number,employee:Employees){
  debugger;
  return this.http.put(`https://localhost:7032/api/Employee/${Id}`,[Id,employee])
 }

 DeleteById(Id:number){
  return this.http.delete(`https://localhost:7032/api/Employee/${Id}`);
 }
  
  //   constructor(private http: HttpClient) {}

//   get() {
//     return this.http.get<Employees[]>('http://localhost:3000/employees');
//   }

//   create(payload: Employees) {
//     console.log("service::"+payload);
//     return this.http.post<Employees>('http://localhost:3000/employees', payload);
//   }

//   getById(id: number) {
//     return this.http.get<Employees>(`http://localhost:3000/employees/${id}`);
//    }
    
//    update(payload:Employees){
//     return this.http.put(`http://localhost:3000/employees/${payload.id}`,payload);
//    }

//    delete(id:number){
//     return this.http.delete<Employees>(`http://localhost:3000/employees/${id}`);
//  }
}
