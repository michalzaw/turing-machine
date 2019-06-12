import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapeElementComponent } from './tape-element.component';

describe('TapeElementComponent', () => {
  let component: TapeElementComponent;
  let fixture: ComponentFixture<TapeElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapeElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
