import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClockerComponent } from './clocker.component';

describe('ClockerComponent', () => {
  let component: ClockerComponent;
  let fixture: ComponentFixture<ClockerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
