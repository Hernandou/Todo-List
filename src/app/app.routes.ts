import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AnualViewComponent } from './components/Containers/anual-view/anual-view.component';
import { OrganizadorViewComponent } from './components/Containers/organizador-view/organizador-view.component';
import { RecordatoriosViewComponent } from './components/Containers/recordatorios-view/recordatorios-view.component';
import { ProfileViewComponent } from './components/Containers/profile-view/profile-view.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component : AnualViewComponent},
    {path: 'organizador', component: OrganizadorViewComponent},
    {path: 'recordatorios', component: RecordatoriosViewComponent},
    {path: 'profile',component: ProfileViewComponent}

];
