import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component144Component } from './lib0-lib1-lib4component144.component';

describe('Lib0Lib1Lib4component144Component', () => {
  let component: Lib0Lib1Lib4component144Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component144Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component144Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
