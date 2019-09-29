import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  }));

  it('should return slug on button click', () => {
    fixture = TestBed.createComponent(TableComponent);
    let table = fixture.componentInstance;
    fixture.detectChanges();
    let but = fixture.debugElement.query(By.css('#michael-platini')).nativeElement;
    but.click();
    fixture.whenStable().then(() => {
      expect(table.getSlug()).toEqual('michael-platini');
    });
  });

  it('should display all the customers', () => {
    fixture = TestBed.createComponent(TableComponent);
    let table = fixture.componentInstance;
    fixture.detectChanges();
    let num = fixture.debugElement.queryAll(By.css('tr')).length;
    expect(num).toEqual(6);
  });

  
});
