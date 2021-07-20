import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component169Component } from './lib0component169.component';

describe('Lib0component169Component', () => {
  let component: Lib0component169Component;
  let fixture: ComponentFixture<Lib0component169Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component169Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
