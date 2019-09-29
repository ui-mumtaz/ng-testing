import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectedSlug: string;
  public sendSlug(e: Event) {
    this.selectedSlug = e.toString();
  }
}
