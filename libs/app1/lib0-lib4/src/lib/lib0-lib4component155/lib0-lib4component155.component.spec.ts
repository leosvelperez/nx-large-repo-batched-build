import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4component155Component } from './lib0-lib4component155.component';

describe('Lib0Lib4component155Component', () => {
  let component: Lib0Lib4component155Component;
  let fixture: ComponentFixture<Lib0Lib4component155Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4component155Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4component155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
