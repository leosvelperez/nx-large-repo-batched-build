import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component182Component } from './lib0component182.component';

describe('Lib0component182Component', () => {
  let component: Lib0component182Component;
  let fixture: ComponentFixture<Lib0component182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
