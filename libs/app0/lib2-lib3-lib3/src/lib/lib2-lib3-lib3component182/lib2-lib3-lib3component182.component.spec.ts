import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib3component182Component } from './lib2-lib3-lib3component182.component';

describe('Lib2Lib3Lib3component182Component', () => {
  let component: Lib2Lib3Lib3component182Component;
  let fixture: ComponentFixture<Lib2Lib3Lib3component182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib3component182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib3component182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
