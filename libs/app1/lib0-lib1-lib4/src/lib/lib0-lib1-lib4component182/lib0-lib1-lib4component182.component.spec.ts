import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component182Component } from './lib0-lib1-lib4component182.component';

describe('Lib0Lib1Lib4component182Component', () => {
  let component: Lib0Lib1Lib4component182Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});