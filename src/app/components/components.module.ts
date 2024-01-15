import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from '../components/todolist/todolist.component'
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodolistComponent,
    NavbarComponent,
    CalendarComponent,
    DragDropModule,
  ],exports: [TodolistComponent,NavbarComponent,CalendarComponent]
})
export class ComponentsModule { 

  constructor(private router: Router){
    
  }


 }
