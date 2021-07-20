import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component178Component } from './lib0-lib1-lib4component178.component';

describe('Lib0Lib1Lib4component178Component', () => {
  let component: Lib0Lib1Lib4component178Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component178Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component178Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
