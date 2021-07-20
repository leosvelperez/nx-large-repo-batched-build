import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib2component182Component } from './lib2-lib2-lib2component182.component';

describe('Lib2Lib2Lib2component182Component', () => {
  let component: Lib2Lib2Lib2component182Component;
  let fixture: ComponentFixture<Lib2Lib2Lib2component182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib2component182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib2component182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
