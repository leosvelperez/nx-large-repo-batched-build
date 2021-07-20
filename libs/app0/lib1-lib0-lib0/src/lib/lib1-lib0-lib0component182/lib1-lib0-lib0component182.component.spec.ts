import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib0component182Component } from './lib1-lib0-lib0component182.component';

describe('Lib1Lib0Lib0component182Component', () => {
  let component: Lib1Lib0Lib0component182Component;
  let fixture: ComponentFixture<Lib1Lib0Lib0component182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib0component182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib0component182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
