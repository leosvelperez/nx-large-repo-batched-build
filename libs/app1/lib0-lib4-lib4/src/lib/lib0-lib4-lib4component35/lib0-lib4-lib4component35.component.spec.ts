import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib4component35Component } from './lib0-lib4-lib4component35.component';

describe('Lib0Lib4Lib4component35Component', () => {
  let component: Lib0Lib4Lib4component35Component;
  let fixture: ComponentFixture<Lib0Lib4Lib4component35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib4component35Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib4component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});