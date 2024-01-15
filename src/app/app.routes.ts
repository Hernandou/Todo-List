import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AnualViewComponent } from './components/Containers/anual-view/anual-view.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component : AnualViewComponent}
];
