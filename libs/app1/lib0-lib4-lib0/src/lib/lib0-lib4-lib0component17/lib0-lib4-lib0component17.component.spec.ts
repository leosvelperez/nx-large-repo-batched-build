import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib0component17Component } from './lib0-lib4-lib0component17.component';

describe('Lib0Lib4Lib0component17Component', () => {
  let component: Lib0Lib4Lib0component17Component;
  let fixture: ComponentFixture<Lib0Lib4Lib0component17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib0component17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib0component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});