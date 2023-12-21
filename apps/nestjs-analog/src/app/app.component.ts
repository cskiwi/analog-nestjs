import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'client-analog-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<h1>Hello from analog</h1><router-outlet></router-outlet>`,
  styles: [
    `
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent {}
