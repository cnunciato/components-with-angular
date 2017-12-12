import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input() person: any;
}
