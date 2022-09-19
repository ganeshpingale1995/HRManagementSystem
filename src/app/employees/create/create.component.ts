import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  employeeForm: Employees = {
    Id: 0,
    Name: '',
    MobileNumber: 0,
  };
  constructor(
    private employeeService:EmployeesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    
  }

  create(){
    console.log("component::"+this.employeeForm);
    this.employeeService.create(this.employeeForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/employees/list"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
