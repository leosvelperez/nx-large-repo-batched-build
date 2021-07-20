import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component150Component } from './lib0component150.component';

describe('Lib0component150Component', () => {
  let component: Lib0component150Component;
  let fixture: ComponentFixture<Lib0component150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component150Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
