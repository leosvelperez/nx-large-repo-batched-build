import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4component0Component } from './lib0-lib4component0.component';

describe('Lib0Lib4component0Component', () => {
  let component: Lib0Lib4component0Component;
  let fixture: ComponentFixture<Lib0Lib4component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
