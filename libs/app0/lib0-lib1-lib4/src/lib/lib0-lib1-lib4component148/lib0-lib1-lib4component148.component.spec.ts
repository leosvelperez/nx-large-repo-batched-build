import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component148Component } from './lib0-lib1-lib4component148.component';

describe('Lib0Lib1Lib4component148Component', () => {
  let component: Lib0Lib1Lib4component148Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component148Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component148Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});