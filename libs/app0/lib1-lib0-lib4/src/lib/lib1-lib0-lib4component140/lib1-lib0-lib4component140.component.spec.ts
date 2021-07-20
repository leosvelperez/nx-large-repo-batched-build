import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib4component140Component } from './lib1-lib0-lib4component140.component';

describe('Lib1Lib0Lib4component140Component', () => {
  let component: Lib1Lib0Lib4component140Component;
  let fixture: ComponentFixture<Lib1Lib0Lib4component140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib4component140Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib4component140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
