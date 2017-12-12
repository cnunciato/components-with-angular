import { Component } from '@angular/core';

@Component({
  selector: 'co-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  people = [
    {
      last: 'Nunciato',
      first: 'Chris'
    },
    {
      last: 'Nunciato',
      first: 'Rebecca'
    }
  ];
}
