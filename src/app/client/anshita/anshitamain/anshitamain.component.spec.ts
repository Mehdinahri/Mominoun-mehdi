import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnshitamainComponent } from './anshitamain.component';

describe('AnshitamainComponent', () => {
  let component: AnshitamainComponent;
  let fixture: ComponentFixture<AnshitamainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnshitamainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnshitamainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
