import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component151Component } from './lib0component151.component';

describe('Lib0component151Component', () => {
  let component: Lib0component151Component;
  let fixture: ComponentFixture<Lib0component151Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component151Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
