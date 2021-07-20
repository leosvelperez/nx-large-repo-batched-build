import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib4component140Component } from './lib0-lib3-lib4component140.component';

describe('Lib0Lib3Lib4component140Component', () => {
  let component: Lib0Lib3Lib4component140Component;
  let fixture: ComponentFixture<Lib0Lib3Lib4component140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib4component140Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib4component140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
