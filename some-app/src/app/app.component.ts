import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  people = [
    {
      last: 'Nunciato',
      first: 'Oliver'
    },
    {
      last: 'Nunciato',
      first: 'Sam'
    },
    {
      last: 'Nunciato',
      first: 'Rosie'
    }
  ];
}
