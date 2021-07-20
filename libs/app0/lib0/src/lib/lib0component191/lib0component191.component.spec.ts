import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component191Component } from './lib0component191.component';

describe('Lib0component191Component', () => {
  let component: Lib0component191Component;
  let fixture: ComponentFixture<Lib0component191Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component191Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
