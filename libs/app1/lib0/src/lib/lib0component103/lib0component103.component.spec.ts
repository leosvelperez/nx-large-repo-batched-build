import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component103Component } from './lib0component103.component';

describe('Lib0component103Component', () => {
  let component: Lib0component103Component;
  let fixture: ComponentFixture<Lib0component103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component103Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
