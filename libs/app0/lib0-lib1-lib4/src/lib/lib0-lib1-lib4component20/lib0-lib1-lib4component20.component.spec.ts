import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component20Component } from './lib0-lib1-lib4component20.component';

describe('Lib0Lib1Lib4component20Component', () => {
  let component: Lib0Lib1Lib4component20Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
