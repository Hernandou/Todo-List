import { Component,Input} from '@angular/core';
import { CommonModule} from '@angular/common';
import { TodolistComponent } from '../todolist/todolist.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,TodolistComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
  burgerFlag:boolean = false;
  @Input() colorInput:string = '';

  changeBurgerFlag(){ 
    if(this.burgerFlag){
      this.burgerFlag = false;
    }else{
      this.burgerFlag = true;
    }
  }

  changeTitleColor(color: string){
    this.colorInput = color;
  }

}
