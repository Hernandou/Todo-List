import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from '../components/todolist/todolist.component'
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';
 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodolistComponent,
    NavbarComponent,
    CalendarComponent
  ],exports: [TodolistComponent,NavbarComponent,CalendarComponent]
})
export class ComponentsModule { }
