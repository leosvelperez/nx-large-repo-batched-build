import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2component182Component } from './lib1-lib2component182.component';

describe('Lib1Lib2component182Component', () => {
  let component: Lib1Lib2component182Component;
  let fixture: ComponentFixture<Lib1Lib2component182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2component182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2component182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
