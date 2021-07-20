import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component163Component } from './lib0component163.component';

describe('Lib0component163Component', () => {
  let component: Lib0component163Component;
  let fixture: ComponentFixture<Lib0component163Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component163Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
