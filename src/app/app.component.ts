import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent,TodolistComponent,CalendarComponent],
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'nombreAplicacion';
}
