import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';
  
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employeeForm: Employees = {
    Id: 0,
    Name: '',
    MobileNumber: 0,
  };
  constructor(
    private employeeService:EmployeesService,
    private route: ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });

  }

  getById(id: number) {
    this.employeeService.getById(id).subscribe((data) => {
      this.employeeForm = data;
    });
  }

  update() {
    this.employeeService.update(this.employeeForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/employees/list"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
