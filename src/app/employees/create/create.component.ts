import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  id: number = 0;
  employeeForm: FormGroup;
    
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private employeeService: EmployeesService
  ) {

    //**************Create Reactive Form with validation********************* */
    this.employeeForm = this.fb.group({
      id: [0, [Validators.required]],
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      gender: ['', [Validators.required]],
      dob: [null, [Validators.required]],
      isActive: [true],
       role: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {
    
     //**************Get User ID On Edit********************* */
     this.route.params.subscribe(params => {
      this.id = params['id'];
      if (params['id'] != null) {
        this.employeeForm.get('id')?.setValue(params['id']);
        // const data = this.employeeService.getEmployeesByID(this.id);
        // if (data) {
        //   this.employeeForm.setValue(data);
        // }

        this.employeeService.GetById(this.id).subscribe(response=>{
          //this.employee = response;
          console.log(response);
           this.employeeForm.setValue(response);
         })
      }
    });
  }

  save()
  {
    if (this.employeeForm.invalid) // true if any form validation fail
      return

      if (this.employeeForm.get('id')?.value === 0) 
      {
           this.employeeService.Add(this.employeeForm.value).subscribe(response=>{
           console.log(response); 
           this.router.navigate(['/employees/list']);
           });
      }
      else 
     {
       //this.employeeService.Update(this.employeeForm.value);
       //debugger;
       this.employeeService.Update(this.employeeForm.value.id,this.employeeForm.value).subscribe(response=>{
        console.log(response); 
        this.router.navigate(['/employees/list']);
        });
    }
       
  }


   

  

}
