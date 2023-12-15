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
  isMobile:boolean = false;
 @HostBinding('class.flex-col') isCol:boolean = false;


  detector(){
    
  }


}
