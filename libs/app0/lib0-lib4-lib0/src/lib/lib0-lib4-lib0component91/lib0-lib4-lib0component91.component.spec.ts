import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib0component91Component } from './lib0-lib4-lib0component91.component';

describe('Lib0Lib4Lib0component91Component', () => {
  let component: Lib0Lib4Lib0component91Component;
  let fixture: ComponentFixture<Lib0Lib4Lib0component91Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib0component91Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib0component91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
