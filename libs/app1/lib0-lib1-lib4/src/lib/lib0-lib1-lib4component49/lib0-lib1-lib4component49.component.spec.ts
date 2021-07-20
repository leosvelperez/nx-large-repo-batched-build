import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component49Component } from './lib0-lib1-lib4component49.component';

describe('Lib0Lib1Lib4component49Component', () => {
  let component: Lib0Lib1Lib4component49Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component49Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
