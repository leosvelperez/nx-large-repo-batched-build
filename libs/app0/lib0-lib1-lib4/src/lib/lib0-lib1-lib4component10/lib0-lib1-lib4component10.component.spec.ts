import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component10Component } from './lib0-lib1-lib4component10.component';

describe('Lib0Lib1Lib4component10Component', () => {
  let component: Lib0Lib1Lib4component10Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
