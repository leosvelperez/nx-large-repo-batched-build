import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib4component142Component } from './lib1-lib0-lib4component142.component';

describe('Lib1Lib0Lib4component142Component', () => {
  let component: Lib1Lib0Lib4component142Component;
  let fixture: ComponentFixture<Lib1Lib0Lib4component142Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib4component142Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib4component142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
