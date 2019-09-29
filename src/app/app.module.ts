import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HelperService } from './shared/helper.service';

// import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AstronautTableComponent } from './astrotable.component';
import { AstronautInformationComponent } from './astroinfo.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HelperService],
  declarations: [
    AppComponent,
    AstronautTableComponent,
    AstronautInformationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
