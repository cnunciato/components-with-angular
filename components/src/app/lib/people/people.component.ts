import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  @Input() people: any[];
}
