import { Component,signal,computed, Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './todolist.component.html',
  styles: `
    #text{
      text-decotarion: line-trough ;
    }

  `
})

export class TodolistComponent {
  // --- Declaraciones ---

  @Output() colorEmiter = new EventEmitter();
  @Output() tasksEmiter = new EventEmitter();

  checkBx = true;
  textThrought = '';
  indice:number = -1;
  colorChange:string = 'bg-EDB099'
  buttons = {'colorPalette': false,
              'filters': false,      
  };

  colors = signal([
  'bg-pink-300',
  'bg-blue-300',
  'bg-EDB099',
  'bg-green-300',
  'bg-yellow-300',
  'bg-purple-300',
  'bg-orange-300',
  'bg-indigo-300',
  'bg-teal-300',
  'bg-red-300',
  'bg-cyan-300']);

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

  FormCtrl = new FormControl('',{
    // Validadores
    nonNullable : true,
    validators : [Validators.required]
  })

  newTasks() { 
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
    console.log(this.colors()[i])
    this.colorChange = this.colors()[i];
    this.colorEmiter.emit(this.colorChange);
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

  emitChanges(){
    let tasksConfirmed = this.tasks();
    this.tasksEmiter.emit(tasksConfirmed);
  }
  
  //Pendiente arreglar
  checkedTask(event: Event, i: number) {
    let input = event.target as HTMLInputElement;
  
    if(!this.tasks()[i].completed){
    // Alternar el estado completado de la tarea
    this.tasks()[i].completed = !this.tasks()[i].completed;
    // Actualizar el estilo de tachado basado en el estado completado
    this.textThrought = this.tasks()[i].completed ? 'line-through' : '';
    }else{
      input.checked = false;
    }
  }
  
}