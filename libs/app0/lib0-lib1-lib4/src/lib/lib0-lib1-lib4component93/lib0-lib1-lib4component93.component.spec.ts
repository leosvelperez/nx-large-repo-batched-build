import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component93Component } from './lib0-lib1-lib4component93.component';

describe('Lib0Lib1Lib4component93Component', () => {
  let component: Lib0Lib1Lib4component93Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component93Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component93Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
