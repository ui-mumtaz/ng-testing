import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { Subscription }   from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, Response, HttpModule, BaseRequestOptions, ResponseOptions } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { AstronautTableComponent } from '../astrotable.component';
import { AstronautInformationComponent } from '../astroinfo.component';
import { HelperService } from '../shared/helper.service';


const jsonMockData = {
  "people": [
    {
      "craft": "ISS",
      "name": "Lionel Messi"
    }, {
      "craft": "ISS",
      "name": "Cristiano Ronaldo"
    }, {
      "craft": "ISS",
      "name": "Neymar Junior"
    }, {
      "craft": "ISS",
      "name": "Anthony Martial"
    }, {
      "craft": "ISS",
      "name": "Michael Jordan"
    }, {
      "craft": "ISS",
      "name": "Larry Bird"
    }, {
      "craft": "ISS",
      "name": "Chris Bosch"
    }, {
      "craft": "ISS",
      "name": "Lebron James"
    }, {
      "craft": "ISS",
      "name": "Dwayne Wade"
    }, {
      "craft": "ISS",
      "name": "Dwight Howard"
    }, {
      "craft": "ISS",
      "name": "Stephen Curry"
    }

  ],
  "message": "success",
  "number": 11
};

describe('AstronautTableComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AstronautTableComponent,
        AstronautInformationComponent
      ],
      imports: [
        BrowserModule,
        HttpModule
      ],
      providers: [HelperService]
    }).compileComponents();
  }));

  it('should pass the observable to other component', inject([HelperService], (service: HelperService) => {
    const fixture = TestBed.createComponent(AstronautTableComponent);
    const app = fixture.componentInstance;

    spyOn(service.selectedName, 'next').and.callThrough;

    service.setSelectedAstronaut('Random Name');
    expect(service.selectedName.next).toHaveBeenCalled();
  }));

  it('should render the data for astronauts', () => {
    const fixture = TestBed.createComponent(AstronautTableComponent);
    const astronautTableComponet = fixture.componentInstance;
    astronautTableComponet.astronauts = jsonMockData.people;
    fixture.detectChanges();
    const astronautTable = fixture.debugElement.nativeElement;
    expect(astronautTable.querySelectorAll('table tr').length - 1).toBe(jsonMockData.people.length);
  });

});
