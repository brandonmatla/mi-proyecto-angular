import { Component ,ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./componentes/nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent {
  title = 'orientando-me';
}
