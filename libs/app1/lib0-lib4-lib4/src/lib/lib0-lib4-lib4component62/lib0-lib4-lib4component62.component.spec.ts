import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib4component62Component } from './lib0-lib4-lib4component62.component';

describe('Lib0Lib4Lib4component62Component', () => {
  let component: Lib0Lib4Lib4component62Component;
  let fixture: ComponentFixture<Lib0Lib4Lib4component62Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib4component62Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib4component62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
