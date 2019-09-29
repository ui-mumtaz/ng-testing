import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InfoComponent } from './info.component';
import { TableComponent } from '../table/table.component';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;
  let fixture2: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoComponent, TableComponent ]
    })
    .compileComponents();
  }));

  it('should render all the information fields', () => {
    fixture = TestBed.createComponent(InfoComponent);
    let info = fixture.componentInstance;
    fixture.detectChanges();
    info.customerSlug = "henry-gerard";
    fixture.detectChanges();
    let x = fixture.debugElement.queryAll(By.css('td')).length;
    expect(x).toEqual(8);
  });

  it('should change fields with button click', () => {
    fixture = TestBed.createComponent(InfoComponent);
    let info = fixture.componentInstance;
    fixture.detectChanges();
    info.customerSlug = "henry-gerard";
    fixture.detectChanges();
    let x = fixture.debugElement.queryAll(By.css('tr'))[1].nativeElement.innerHTML.replace(/<!--[\s\S]*?-->/g, "").replace(/\r?\n|\r/g, "").replace(/ /g,'');
    expect(x).toBe('<td>Henry</td><td>Gerard</td><td>21</td><td>Livershool</td><td>Male</td><td>3123</td><td>India</td><td>TN</td>');

    info.customerSlug = "louis-figo";
    fixture.detectChanges();
    let y = fixture.debugElement.queryAll(By.css('tr'))[1].nativeElement.innerHTML.replace(/<!--[\s\S]*?-->/g, "").replace(/\r?\n|\r/g, "").replace(/ /g,'');
    expect(y).toBe('<td>Louis</td><td>Figo</td><td>37</td><td>RealaMadrida</td><td>Male</td><td>3176</td><td>France</td><td>PA</td>');
  });
});
