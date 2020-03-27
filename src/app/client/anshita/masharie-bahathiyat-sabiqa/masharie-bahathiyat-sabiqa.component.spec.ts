import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasharieBahathiyatSabiqaComponent } from './masharie-bahathiyat-sabiqa.component';

describe('MasharieBahathiyatSabiqaComponent', () => {
  let component: MasharieBahathiyatSabiqaComponent;
  let fixture: ComponentFixture<MasharieBahathiyatSabiqaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasharieBahathiyatSabiqaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasharieBahathiyatSabiqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
