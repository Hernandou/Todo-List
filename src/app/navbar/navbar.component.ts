import { Component, HostBinding} from '@angular/core';
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
  burgerFlag:boolean = false;


  changeBurgerFlag(){ 
    if(this.burgerFlag){
      this.burgerFlag = false;
    }else{
      this.burgerFlag = true;
    }

  }


}
