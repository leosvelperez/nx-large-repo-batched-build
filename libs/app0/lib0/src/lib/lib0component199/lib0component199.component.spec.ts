import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component199Component } from './lib0component199.component';

describe('Lib0component199Component', () => {
  let component: Lib0component199Component;
  let fixture: ComponentFixture<Lib0component199Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component199Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
