import { Component } from '@angular/core';
<<<<<<< HEAD

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
=======
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
>>>>>>> 7daa813557439865b1d02607820b68c51e97f8cb
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
<<<<<<< HEAD
=======
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
>>>>>>> 7daa813557439865b1d02607820b68c51e97f8cb

}
