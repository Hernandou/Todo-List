import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodolistComponent } from './components/todolist/todolist.component';
<<<<<<< HEAD
import {CalendarComponent} from './components/calendar/calendar.component'
import { LoginComponent } from './components/login/login.component'
=======
import { CalendarComponent } from './components/calendar/calendar.component';
>>>>>>> 7daa813557439865b1d02607820b68c51e97f8cb

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, RouterOutlet, NavbarComponent, TodolistComponent,CalendarComponent,LoginComponent],
=======
  imports: [CommonModule, RouterOutlet, NavbarComponent,TodolistComponent,CalendarComponent],
>>>>>>> 7daa813557439865b1d02607820b68c51e97f8cb
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'nombreAplicacion';
}
