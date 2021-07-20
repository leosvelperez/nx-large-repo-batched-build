import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component67Component } from './lib0-lib1-lib4component67.component';

describe('Lib0Lib1Lib4component67Component', () => {
  let component: Lib0Lib1Lib4component67Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component67Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component67Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
