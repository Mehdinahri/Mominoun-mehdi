import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnshitatSabqaComponent } from './anshitat-sabqa.component';

describe('AnshitatSabqaComponent', () => {
  let component: AnshitatSabqaComponent;
  let fixture: ComponentFixture<AnshitatSabqaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnshitatSabqaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnshitatSabqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
