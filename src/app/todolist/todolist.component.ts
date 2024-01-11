import { Component,signal,EventEmitter, Output } from '@angular/core';
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
  indice:number = -1;
  button:boolean = false;
  colors = signal([
  'bg-pink-300',
  'bg-blue-300',
  'bg-green-300',
  'bg-yellow-300',
  'bg-purple-300',
  'bg-orange-300',
  'bg-indigo-300',
  'bg-teal-300',
  'bg-red-300',
  'bg-cyan-300']);

  colorChange:string = 'bg-EDB099';
  @Output() colorSelected = new EventEmitter<string>();

  tasks = signal([{
      taskname: 'T1',
      date : new Date,
      completed: false
  }]);

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

  openAndClose(){
      if(this.button){
        this.button = false;
      }else{
        this.button = true;
      }
      return(this.button)
  }
  colorManager(color:string){
    this.colorChange = color
    this.colorSelected.emit(color);
  }

  editTask(event : Event,i:number){
    let input = event.target as HTMLInputElement;
    this.tasks()[i].taskname = input.value;
  }

  getTextColor(){
    return(this.colorChange)
  }


}