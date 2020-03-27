import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMenuContentComponent } from './item-menu-content.component';

describe('ItemMenuContentComponent', () => {
  let component: ItemMenuContentComponent;
  let fixture: ComponentFixture<ItemMenuContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMenuContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMenuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
