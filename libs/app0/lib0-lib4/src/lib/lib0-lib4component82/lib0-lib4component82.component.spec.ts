import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4component82Component } from './lib0-lib4component82.component';

describe('Lib0Lib4component82Component', () => {
  let component: Lib0Lib4component82Component;
  let fixture: ComponentFixture<Lib0Lib4component82Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4component82Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4component82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
