import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib1component182Component } from './lib2-lib0-lib1component182.component';

describe('Lib2Lib0Lib1component182Component', () => {
  let component: Lib2Lib0Lib1component182Component;
  let fixture: ComponentFixture<Lib2Lib0Lib1component182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib1component182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib1component182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});