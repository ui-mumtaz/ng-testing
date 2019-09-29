import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, Response, HttpModule, BaseRequestOptions, ResponseOptions } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { AstronautTableComponent } from '../astrotable.component';
import { AstronautInformationComponent } from '../astroinfo.component';
import { HelperService } from '../shared/helper.service';

describe('Service: HelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpModule
      ],
      declarations: [
        AppComponent, AstronautTableComponent, AstronautInformationComponent
      ],
      providers: [
        HelperService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('dependency injections are added successfully', inject([HelperService], (service: HelperService) => {
    expect(service).toBeTruthy();

    const fixture1 = TestBed.createComponent(AstronautTableComponent);
    const astronautTable = fixture1.debugElement.componentInstance;
    expect(astronautTable).toBeTruthy();

    const fixture2 = TestBed.createComponent(AstronautInformationComponent);
    const astronautInfo = fixture2.debugElement.componentInstance;
    expect(astronautInfo).toBeTruthy();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should call the API that returns an object', inject([HelperService], (service: HelperService) => {
    expect(typeof service.getAstronautsAPI()).toBe('object');
  }));

  it('should utilize the HTTP module for requesting the API', inject([HelperService], (service: HelperService) => {
    spyOn(service['http'], "get").and.callThrough();
    service.getAstronautsAPI();
    expect(service['http'].get).toHaveBeenCalled();
  }));
});
