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
import { Subscription }   from 'rxjs/Subscription';

describe('AstronautInformationComponent', () => {
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


  it('check rendered URLs', inject([HelperService], (service: HelperService) => {
    const fixture = TestBed.createComponent(AstronautInformationComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    app.helperService.setSelectedAstronaut('foobar');
    expect(app.name).toEqual("foobar");
    expect(app.imagesLink).toEqual("http://google.com/images?q=foobar");
    expect(app.searchLink).toEqual("http://google.com/search?q=foobar");
  }));

  it('check functioning of ngOnInit', inject([HelperService], (service: HelperService) => {
    const fixture = TestBed.createComponent(AstronautInformationComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    app.helperService.setSelectedAstronaut('foobar');
    expect(app.name).toEqual("foobar");
  }));

});
