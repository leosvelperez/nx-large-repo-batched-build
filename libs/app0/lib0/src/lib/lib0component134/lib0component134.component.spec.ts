import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component134Component } from './lib0component134.component';

describe('Lib0component134Component', () => {
  let component: Lib0component134Component;
  let fixture: ComponentFixture<Lib0component134Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component134Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
