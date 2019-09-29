import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HelperService {

  private apiPath = 'https://api.jsonbin.io/b/5a38d131f086f95991cdb6a7';
  selectedName = new Subject<string>();
  selectedName$ = this.selectedName.asObservable();

  constructor(private http: HttpClient) { }

  getAstronautsAPI(){
    return this.http.get(this.apiPath).pipe(map(response => response));
  }

  setSelectedAstronaut(data: string) {
    
  }
}
