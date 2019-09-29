import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'info-table',
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnInit {
  @Input() customerSlug: string;
  public customerData: any;
  showDetailFlag: boolean;
  // customerSlug: string = ""; // slug instance variable of InfoComponent
  customers = {
    'henry-gerard':
      ["Henry", "Gerard", 21, 'Livershool', 'Male', '3123', 'India', 'TN'],
    'michael-platini':
      ["Michael", "Platini", 40, 'Czecha', 'Male', '3198', 'USA', 'SF'],
    'louis-figo':
      ["Louis", "Figo", 37, 'Reala Madrida', 'Male', '3176', 'France', 'PA'],
    'cristiana-ronaldinho':
      ["Cristiana", "Ronaldinho", 15, 'Portugalia', 'Female', '3178', 'Portugal', 'LB'],
    'leonardo-messiah':
      ["Leonardo", "Messiah", 25, 'Barceloja', 'Female', '3165', 'Argentina', 'BA']
  }

  constructor() {
  }
  ngOnInit() {
    this.showDetailFlag = false;
  }
  ngOnChanges(changes: SimpleChanges) {
    this.showDetails(changes.customerSlug.currentValue);
  }
  public showDetails(slug: string) {
    this.showDetailFlag = true;
    this.customerData = this.customers[slug];
  }
}
