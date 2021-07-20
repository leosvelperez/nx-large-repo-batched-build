import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib4component90Component } from './lib1-lib1-lib4component90.component';

describe('Lib1Lib1Lib4component90Component', () => {
  let component: Lib1Lib1Lib4component90Component;
  let fixture: ComponentFixture<Lib1Lib1Lib4component90Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib4component90Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib4component90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
