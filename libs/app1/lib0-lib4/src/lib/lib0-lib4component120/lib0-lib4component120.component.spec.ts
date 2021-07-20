import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4component120Component } from './lib0-lib4component120.component';

describe('Lib0Lib4component120Component', () => {
  let component: Lib0Lib4component120Component;
  let fixture: ComponentFixture<Lib0Lib4component120Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4component120Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4component120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
