import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'client-angular-root',
  template: `<h1>Hello from angular</h1><router-outlet></router-outlet>`,
})
export class AppComponent {}
