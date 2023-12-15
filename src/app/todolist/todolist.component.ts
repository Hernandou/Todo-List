import { Component,signal } from '@angular/core';
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

  tasks = signal([{
      taskname: 'T1',
      date : new Date,
      completed: false
  }]);

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

  ShowElement(i : number){
    this.indice = i;
  }
  
  HideElement(){
    this.indice = -1;
  }

  DeleteTask(event : Event,i : number){
    let checkbox = event.target as HTMLInputElement;
    if(checkbox.checked == true){
      this.tasks.update((tasks) => tasks.filter((_,posicion) => posicion !== i));
    }
  }
}