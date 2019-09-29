import {Component, Input, OnInit} from '@angular/core';
import { HelperService } from './shared/helper.service';


@Component({
  selector: 'astro-table',
  templateUrl: './astrotable.component.html'
})
export class AstronautTableComponent implements OnInit {
  astronauts: Array<Astro> = [];
  people:any;

  constructor(public helperService: HelperService) {
  }

  ngOnInit(): void {
    this.fetchInfo();
  };

  fetchInfo() {
    this.helperService.getAstronautsAPI().subscribe((response) => {
      //console.log(response)
      if(response['message'] === 'success') {
        this.astronauts = response['people'];
      }
    })
  }
  getInfo(name: string) {
    console.log(name)
  }

}

class Astro {
  name: string;
  craft: string;
}
