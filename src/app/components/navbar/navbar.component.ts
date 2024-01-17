import { Component,Input, OnChanges, SimpleChanges, signal} from '@angular/core';
import { CommonModule} from '@angular/common';
import { TodolistComponent } from '../todolist/todolist.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,TodolistComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnChanges{
  burgerFlag:boolean = false;
  @Input() colorInput:string = '';

  
  constructor(private router: Router){

  }
  

  changeBurgerFlag(){ 
    console.log('Estado de la burgir: ',this.burgerFlag)
    this.burgerFlag = !this.burgerFlag
    return(this.burgerFlag);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Hola amigo') //Queda pendiente realizar el input del emitter
  }

  changeTitleColor(event : any){

    //this.colorInput = color;
  }

  redirectTo(route:string, event: Event){

    switch(route){

      case 'home':{
        this.router.navigate(['/'+route]);
        break;
      }

      case 'organizador': {
        this.router.navigate(['/'+route])
        break;
      }

      case 'recordatorios': {
        this.router.navigate(['/'+route])
        break;
      }

      case 'profile': {
        this.router.navigate(['/'+route])
        break;
      }

    }

  }

}
