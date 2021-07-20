import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component196Component } from './lib0component196.component';

describe('Lib0component196Component', () => {
  let component: Lib0component196Component;
  let fixture: ComponentFixture<Lib0component196Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component196Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
