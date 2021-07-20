import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component109Component } from './lib0component109.component';

describe('Lib0component109Component', () => {
  let component: Lib0component109Component;
  let fixture: ComponentFixture<Lib0component109Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component109Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
