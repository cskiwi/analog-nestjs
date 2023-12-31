import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'analog-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <analog-analog-welcome/>
  `,
})
export default class HomeComponent {
}
