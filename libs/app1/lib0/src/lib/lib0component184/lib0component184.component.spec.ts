import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component184Component } from './lib0component184.component';

describe('Lib0component184Component', () => {
  let component: Lib0component184Component;
  let fixture: ComponentFixture<Lib0component184Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component184Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
