import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4component182Component } from './lib1-lib4component182.component';

describe('Lib1Lib4component182Component', () => {
  let component: Lib1Lib4component182Component;
  let fixture: ComponentFixture<Lib1Lib4component182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4component182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4component182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
