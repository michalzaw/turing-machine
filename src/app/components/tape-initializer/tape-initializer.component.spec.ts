import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapeInitializerComponent } from './tape-initializer.component';

describe('TapeInitializerComponent', () => {
  let component: TapeInitializerComponent;
  let fixture: ComponentFixture<TapeInitializerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapeInitializerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapeInitializerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
