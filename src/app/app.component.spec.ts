import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { TableComponent } from './table/table.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InfoComponent,
        TableComponent
      ],
    }).compileComponents();
  }));

  it('should create a dependency between the main table and info table', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const table = fixture.debugElement.queryAll(By.directive(TableComponent))[0];
    const but = table.queryAll(By.css('#cristiana-ronaldinho'))[0].nativeElement;
    but.click();
    fixture.detectChanges();
    const info = fixture.debugElement.queryAll(By.directive(InfoComponent))[0];
    const custInfo = info.queryAll(By.css('tr'))[1].nativeElement.innerHTML.replace(/<!--[\s\S]*?-->/g, "").replace(/\r?\n|\r/g, "").replace(/ /g,'');
    expect(custInfo).toBe('<td>Cristiana</td><td>Ronaldinho</td><td>15</td><td>Portugalia</td><td>Female</td><td>3178</td><td>Portugal</td><td>LB</td>');
  }));

});
