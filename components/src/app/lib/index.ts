import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PersonComponent,
    PeopleComponent
  ],
  exports: [
    PersonComponent,
    PeopleComponent
  ]
})
export class LibModule { }
