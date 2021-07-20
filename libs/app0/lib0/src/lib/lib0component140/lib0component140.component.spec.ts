import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component140Component } from './lib0component140.component';

describe('Lib0component140Component', () => {
  let component: Lib0component140Component;
  let fixture: ComponentFixture<Lib0component140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component140Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
