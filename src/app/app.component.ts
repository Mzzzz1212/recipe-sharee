import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, RouterOutlet],
  template: `
    <div class="min-h-screen flex flex-col bg-gray-50">
      <app-header></app-header>
      <main class="flex-1">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-share';
}
