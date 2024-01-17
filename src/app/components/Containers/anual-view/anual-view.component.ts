import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TodolistComponent } from '../../todolist/todolist.component';
import { CalendarComponent } from '../../calendar/calendar.component';
import { PruebaComponent } from '../../prueba/prueba.component';
@Component({
  selector: 'app-anual-view',
  standalone: true,
  imports: [TodolistComponent,NavbarComponent,CalendarComponent,PruebaComponent],
  templateUrl: './anual-view.component.html',
  styleUrl: './anual-view.component.css'
})

export class AnualViewComponent {
  @Input() todoTasks = [];
  @Output() sendToCalendar = new EventEmitter();
  
  taskRecivedFromTodo(task:any){
    this.todoTasks = task
  }

  emitTaskToCalendar(){
    this.sendToCalendar.emit(this.todoTasks)
  }

  mostrar(){
    console.log(this.todoTasks)
  }
}
