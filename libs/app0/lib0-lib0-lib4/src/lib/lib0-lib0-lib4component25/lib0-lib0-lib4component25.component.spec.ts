import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib4component25Component } from './lib0-lib0-lib4component25.component';

describe('Lib0Lib0Lib4component25Component', () => {
  let component: Lib0Lib0Lib4component25Component;
  let fixture: ComponentFixture<Lib0Lib0Lib4component25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib4component25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib4component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
