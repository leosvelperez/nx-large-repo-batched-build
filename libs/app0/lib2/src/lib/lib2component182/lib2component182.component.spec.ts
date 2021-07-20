import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component182Component } from './lib2component182.component';

describe('Lib2component182Component', () => {
  let component: Lib2component182Component;
  let fixture: ComponentFixture<Lib2component182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
