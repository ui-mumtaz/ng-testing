import {Component, OnInit} from '@angular/core';
import { HelperService } from './shared/helper.service';

@Component({
  selector: 'astro-info',
  providers: [],
  templateUrl: './astroinfo.component.html'
})

export class AstronautInformationComponent implements OnInit {
  apiData:any;
  name = '';
  searchLink = '';
  imagesLink = '';

  constructor(public helperService: HelperService) {}

  ngOnInit() {
   //this.helperService.getAstronautsAPI;
   this.helperService.setData.subscribe(x => {
    // console.log('Inner ', x)
     this.name = x
   })
  }
}

