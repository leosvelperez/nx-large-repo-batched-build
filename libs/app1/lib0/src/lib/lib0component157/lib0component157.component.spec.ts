import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component157Component } from './lib0component157.component';

describe('Lib0component157Component', () => {
  let component: Lib0component157Component;
  let fixture: ComponentFixture<Lib0component157Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component157Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
