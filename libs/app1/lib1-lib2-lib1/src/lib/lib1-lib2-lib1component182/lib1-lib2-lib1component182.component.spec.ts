import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib1component182Component } from './lib1-lib2-lib1component182.component';

describe('Lib1Lib2Lib1component182Component', () => {
  let component: Lib1Lib2Lib1component182Component;
  let fixture: ComponentFixture<Lib1Lib2Lib1component182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib1component182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib1component182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
