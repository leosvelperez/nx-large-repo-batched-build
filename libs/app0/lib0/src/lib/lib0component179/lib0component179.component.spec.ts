import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component179Component } from './lib0component179.component';

describe('Lib0component179Component', () => {
  let component: Lib0component179Component;
  let fixture: ComponentFixture<Lib0component179Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component179Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
