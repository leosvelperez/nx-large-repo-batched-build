import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4component194Component } from './lib0-lib4component194.component';

describe('Lib0Lib4component194Component', () => {
  let component: Lib0Lib4component194Component;
  let fixture: ComponentFixture<Lib0Lib4component194Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4component194Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4component194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});