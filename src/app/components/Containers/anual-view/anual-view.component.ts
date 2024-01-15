import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TodolistComponent } from '../../todolist/todolist.component';
import { CalendarComponent } from '../../calendar/calendar.component';
import { PruebaComponent } from '../../prueba/prueba.component';
import {DragDropModule} from '@angular/cdk/drag-drop'
@Component({
  selector: 'app-anual-view',
  standalone: true,
  imports: [TodolistComponent,DragDropModule,NavbarComponent,CalendarComponent,PruebaComponent],
  templateUrl: './anual-view.component.html',
  styleUrl: './anual-view.component.css'
})
export class AnualViewComponent {

  
}
