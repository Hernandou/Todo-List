import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})

export class CalendarComponent{

  @Input() tasksFromTodo = [];

  date = new Date();
  months =[{
    name : 'Enero',
    tasks : []
  },{
    name : 'Febrero',
    tasks : []
  },{
    name : 'Marzo',
    tasks : []
  },{
    name : 'Abril',
    tasks : []
  },{
    name : 'Mayo',
    tasks : []
  },{
    name : 'Junio',
    tasks : []
  },{
    name : 'Julio',
    tasks : []
  },{
    name : 'Agosto',
    tasks : []
  },{
    name : 'Septiembre',
    tasks : []
  },{
    name : 'Octubre',
    tasks : []
  },{
    name : 'Noviembre',
    tasks : []
  },{
    name : 'Diciembre',
    tasks : []
  }

]

  constructor(){
  }

  storageTask(){
    


  }

  

}
