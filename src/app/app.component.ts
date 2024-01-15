import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AnualViewComponent } from './components/Containers/anual-view/anual-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AnualViewComponent],
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'nombreAplicacion';
}
