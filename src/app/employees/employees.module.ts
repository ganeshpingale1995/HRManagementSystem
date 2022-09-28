import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesRoutingModule } from './employees-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EmployeesRoutingModule,
    FormsModule,
    BrowserModule,
    // BrowserAnimations Modules
    BrowserAnimationsModule,
    //  PrimeNG  Modules
    ButtonModule,
    TableModule,
    CalendarModule,
    SliderModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class EmployeesModule { }
