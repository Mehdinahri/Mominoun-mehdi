import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnshitaComponent } from './anshita.component';

describe('AnshitaComponent', () => {
  let component: AnshitaComponent;
  let fixture: ComponentFixture<AnshitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnshitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnshitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
