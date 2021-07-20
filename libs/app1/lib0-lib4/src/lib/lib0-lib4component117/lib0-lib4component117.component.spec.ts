import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4component117Component } from './lib0-lib4component117.component';

describe('Lib0Lib4component117Component', () => {
  let component: Lib0Lib4component117Component;
  let fixture: ComponentFixture<Lib0Lib4component117Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4component117Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4component117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
