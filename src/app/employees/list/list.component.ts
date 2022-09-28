import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //empList: Employees[]=[];
  empList: any = [];
  first = 0;
  rows = 10;
  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
       this.get();
  }

  get() {

    this.employeeService.GetList().subscribe(response => {
      console.log(response);
      this.empList = response;
      
    })
    //this.allEmployees = this.employeeService.getEmployees();
  }


  //****************PrimeNG DataTable Pagination method Start*********************** */
  //***************Reference: https://primefaces.org/primeng/showcase/#/table/page********** */
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.empList ? this.first === (this.empList.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.empList ? this.first === 0 : true;
  }
  //****************PrimeNG DataTable Pagination Method End*********************** */


  remove(id: number) {
    // this.employeeService.DeleteById(id);
    this.employeeService.DeleteById(id).subscribe(response => {
      // this.empList = response;
      this.get();
    })
    // this.employeeService.GetList().subscribe(response => {
    //   this.empList = response;
    // })

  }


}
