import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib4component98Component } from './lib0-lib0-lib4component98.component';

describe('Lib0Lib0Lib4component98Component', () => {
  let component: Lib0Lib0Lib4component98Component;
  let fixture: ComponentFixture<Lib0Lib0Lib4component98Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib4component98Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib4component98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
