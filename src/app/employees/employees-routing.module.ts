import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {
    path: 'employees/list',
    component: ListComponent,
  },
  {
    path: 'employees/create',
    component: CreateComponent,
  },
  {
    path:'employees/edit/:id',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
