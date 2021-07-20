import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component171Component } from './lib0component171.component';

describe('Lib0component171Component', () => {
  let component: Lib0component171Component;
  let fixture: ComponentFixture<Lib0component171Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component171Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
