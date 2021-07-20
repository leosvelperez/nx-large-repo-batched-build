import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib3component182Component } from './lib0-lib3-lib3component182.component';

describe('Lib0Lib3Lib3component182Component', () => {
  let component: Lib0Lib3Lib3component182Component;
  let fixture: ComponentFixture<Lib0Lib3Lib3component182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib3component182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib3component182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
