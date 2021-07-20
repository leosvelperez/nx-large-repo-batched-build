import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component124Component } from './lib0component124.component';

describe('Lib0component124Component', () => {
  let component: Lib0component124Component;
  let fixture: ComponentFixture<Lib0component124Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component124Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
