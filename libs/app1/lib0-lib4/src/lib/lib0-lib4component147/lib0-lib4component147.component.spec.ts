import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4component147Component } from './lib0-lib4component147.component';

describe('Lib0Lib4component147Component', () => {
  let component: Lib0Lib4component147Component;
  let fixture: ComponentFixture<Lib0Lib4component147Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4component147Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4component147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
