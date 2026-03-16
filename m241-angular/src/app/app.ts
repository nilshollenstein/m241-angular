import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Home} from './home/home';

@Component({
  selector: 'app-root',
  imports: [Home, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('m241-angular');
}
