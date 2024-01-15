import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  applyForm = new FormGroup({
    user : new FormControl(''),
    password : new FormControl(''),
  });

  constructor(private router: Router){

  }
  
  checkValue(){
    if(this.applyForm.value.user == 'hernan' && this.applyForm.value.password == '123'){
      this.router.navigate(['/home'])
    }
  }

}
