import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasharieBahathiyatQadimaComponent } from './masharie-bahathiyat-qadima.component';

describe('MasharieBahathiyatQadimaComponent', () => {
  let component: MasharieBahathiyatQadimaComponent;
  let fixture: ComponentFixture<MasharieBahathiyatQadimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasharieBahathiyatQadimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasharieBahathiyatQadimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
