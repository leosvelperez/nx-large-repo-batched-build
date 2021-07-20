import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4component176Component } from './lib0-lib4component176.component';

describe('Lib0Lib4component176Component', () => {
  let component: Lib0Lib4component176Component;
  let fixture: ComponentFixture<Lib0Lib4component176Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4component176Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4component176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
