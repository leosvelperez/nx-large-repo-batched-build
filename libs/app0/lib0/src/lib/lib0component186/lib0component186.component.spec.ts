import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component186Component } from './lib0component186.component';

describe('Lib0component186Component', () => {
  let component: Lib0component186Component;
  let fixture: ComponentFixture<Lib0component186Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component186Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
