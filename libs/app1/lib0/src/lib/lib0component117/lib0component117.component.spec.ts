import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component117Component } from './lib0component117.component';

describe('Lib0component117Component', () => {
  let component: Lib0component117Component;
  let fixture: ComponentFixture<Lib0component117Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component117Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
