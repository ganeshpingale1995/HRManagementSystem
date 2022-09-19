import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';
declare var window: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  allEmployees: Employees[]=[];
  deleteModal: any;
  idTodelete: number = 0;
  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {

    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );

       this.get();
  }

  get() {
    this.employeeService.get().subscribe((data) => {
      this.allEmployees = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.employeeService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allEmployees = this.allEmployees.filter(_ => _.Id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

}
