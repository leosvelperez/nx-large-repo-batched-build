import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component178Component } from './lib0component178.component';

describe('Lib0component178Component', () => {
  let component: Lib0component178Component;
  let fixture: ComponentFixture<Lib0component178Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component178Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
