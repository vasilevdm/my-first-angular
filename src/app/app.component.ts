@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
    .blue {
      background: cornflowerblue;
    }
    .white {
      color: white;
    }
  `]
})
export class AppComponent {
  title = 'This great code';
  clicks = [];

  showPassword = false;

  toggleDetails() {
    this.showPassword = ! this.showPassword;
    this.clicks.push( this.clicks.length )
  }
}

import { Component } from '@angular/core';
