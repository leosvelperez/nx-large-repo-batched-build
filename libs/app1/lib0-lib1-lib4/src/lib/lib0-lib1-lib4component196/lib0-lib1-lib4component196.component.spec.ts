import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component196Component } from './lib0-lib1-lib4component196.component';

describe('Lib0Lib1Lib4component196Component', () => {
  let component: Lib0Lib1Lib4component196Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component196Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component196Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
