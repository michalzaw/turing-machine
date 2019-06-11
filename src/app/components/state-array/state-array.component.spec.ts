import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateArrayComponent } from './state-array.component';

describe('StateArrayComponent', () => {
  let component: StateArrayComponent;
  let fixture: ComponentFixture<StateArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
