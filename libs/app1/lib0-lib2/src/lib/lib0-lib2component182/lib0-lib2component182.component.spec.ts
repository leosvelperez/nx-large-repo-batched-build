import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2component182Component } from './lib0-lib2component182.component';

describe('Lib0Lib2component182Component', () => {
  let component: Lib0Lib2component182Component;
  let fixture: ComponentFixture<Lib0Lib2component182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2component182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2component182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
