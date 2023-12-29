import { Component,signal,computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})

export class TodolistComponent {
  // --- Declaraciones ---
  indice:number = -1;

  buttons = {'colorPalette': false,
              'filters': false,      
  };

  colors = signal([
  'bg-pink-200',
  'bg-blue-200',
  'bg-green-200',
  'bg-yellow-200',
  'bg-purple-200',
  'bg-orange-200',
  'bg-indigo-200',
  'bg-teal-200',
  'bg-red-200',
  'bg-cyan-200']);
  colorChange:string = '';

  tasks = signal([{
      taskname: 'T1',
      date : new Date,
      completed: false
  }]);

  filter = signal('all'); // Declaracion del filtro con valor por defecto 'all'

  tasksByFilter = computed(() =>{
    const filter = this.filter() // auxiliar del estado actual del filtro
    const tasks = this.tasks() //auxiliar del estado actual de las Tasks 
    let value:any = [];
    if(filter === 'pending'){
      value = tasks.filter(task => !task.completed) // filtra para cada tarea del array el estado de completado en 'falso'
    }else if(filter === 'completed'){
      value = tasks.filter(task => task.completed) // Filtra para cada tarea del array el estado de completado en 'true'
    }else{
      value = tasks
    }
    return value
  })

  constructor(){
    //this.tasks().pop()
  }

  FormCtrl = new FormControl('',{
    // Validadores
    nonNullable : true,
    validators : [Validators.required]
  })

  newTasks() { //Recibe el evento
    if(this.FormCtrl.valid && this.FormCtrl.value.trim() !== ''){
      let newObj = {
      taskname: this.FormCtrl.value,
      date: new Date,
      completed: false
      }
      this.tasks.update((tasks) => [...tasks, newObj]);
      this.FormCtrl.setValue('');
    }
  }

  showElement(i : number){
    this.indice = i;
  }
  
  hideElement(){
    this.indice = -1;
  }

  DeleteTask(event : Event,i : number){
    let input = event.target as HTMLInputElement;
    this.tasks.update((tasks) => tasks.filter((_,posicion) => posicion !== i));
  }

  showHoursAndMinutes(i:number){
    let hours = this.tasks()[i].date.getHours();
    let minutes = this.tasks()[i].date.getMinutes()
    if(minutes - 10 < 0){
      let minutesFixed= "0" + minutes.toString();
      return(hours + ":" + minutesFixed)
    }else{
      return(hours + ":" + minutes)
    }
  }

  colorManager(i:number){
    this.colorChange = this.colors()[i];
  }

  filterHandler(filter:string){
    this.filter.set(filter);
  }
  
  buttonsHandler(name : string){
    let keys = Object.keys(this.buttons);
    let nombre = keys.filter((key => key === name));
    
    switch(name){
      case 'colorPalette': {
        this.buttons.colorPalette = !this.buttons.colorPalette;
        break;
      }
      case 'filters' : {
        this.buttons.filters = !this.buttons.filters;
        break;
      }
      default: {
        console.log('no se encontro el boton ' + name)
      }
    }
    
  }
  
}