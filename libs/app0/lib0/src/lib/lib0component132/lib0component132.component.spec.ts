import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component132Component } from './lib0component132.component';

describe('Lib0component132Component', () => {
  let component: Lib0component132Component;
  let fixture: ComponentFixture<Lib0component132Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component132Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
