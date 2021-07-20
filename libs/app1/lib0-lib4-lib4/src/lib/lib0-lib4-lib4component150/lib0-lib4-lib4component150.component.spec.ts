import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib4component150Component } from './lib0-lib4-lib4component150.component';

describe('Lib0Lib4Lib4component150Component', () => {
  let component: Lib0Lib4Lib4component150Component;
  let fixture: ComponentFixture<Lib0Lib4Lib4component150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib4component150Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib4component150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
