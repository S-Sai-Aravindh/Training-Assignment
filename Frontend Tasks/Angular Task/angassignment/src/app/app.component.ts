import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleimgComponent } from './toggleimg/toggleimg.component';
import { SwitchcontComponent } from './switchcont/switchcont.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    ToggleimgComponent,SwitchcontComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angassignment';
}
