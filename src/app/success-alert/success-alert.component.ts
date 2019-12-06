import { Component } from '@angular/core';

@Component({
  selector: '[app-success-alert]',
  template: `
    <p>This is success warning!</p>
  `,
  styles: [`
    p {
      color: green;
      padding: 10px;
      background: lightgreen;
      border: 1px solid green;
    }
  `]
})
export class SuccessAlertComponent {}
