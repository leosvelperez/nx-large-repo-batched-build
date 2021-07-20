import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component139Component } from './lib0component139.component';

describe('Lib0component139Component', () => {
  let component: Lib0component139Component;
  let fixture: ComponentFixture<Lib0component139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component139Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
