import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TodolistComponent } from '../../todolist/todolist.component';
import { CalendarComponent } from '../../calendar/calendar.component';
@Component({
  selector: 'app-anual-view',
  standalone: true,
  imports: [TodolistComponent,NavbarComponent,CalendarComponent],
  templateUrl: './anual-view.component.html',
  styleUrl: './anual-view.component.css'
})
export class AnualViewComponent {
  
}
