import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'customer-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Output() eventClicked = new EventEmitter<string>();

  selectedSlug: string = "";
  constructor() { }
  customers = [
    { firstName: "Henry", lastName: "Gerard", age: 21, slug: 'henry-gerard' },
    { firstName: "Michael", lastName: "Platini", age: 40, slug: 'michael-platini' },
    { firstName: "Louis", lastName: "Figo", age: 37, slug: 'louis-figo' },
    { firstName: "Cristiana", lastName: "Ronaldinho", age: 15, slug: 'cristiana-ronaldinho' },
    { firstName: "Leonardo", lastName: "Messiah", age: 25, slug: 'leonardo-messiah' }
  ]

  setSlug(slug) {
    console.log('slug :::::: ', slug)
    this.selectedSlug = slug;
    this.eventClicked.emit(this.selectedSlug);
  }

  getSlug() {
    // slug getter function 
    // return "random string";
  }
}
