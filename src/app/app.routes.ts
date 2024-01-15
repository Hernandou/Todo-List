import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD

export const routes: Routes = [
    {path : '', component: LoginComponent},
=======
import { AnualViewComponent } from './components/Containers/anual-view/anual-view.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component : AnualViewComponent}
>>>>>>> 7daa813557439865b1d02607820b68c51e97f8cb
];
