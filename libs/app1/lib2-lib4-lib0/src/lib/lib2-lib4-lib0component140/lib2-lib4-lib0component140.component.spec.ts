import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib0component140Component } from './lib2-lib4-lib0component140.component';

describe('Lib2Lib4Lib0component140Component', () => {
  let component: Lib2Lib4Lib0component140Component;
  let fixture: ComponentFixture<Lib2Lib4Lib0component140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib0component140Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib0component140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});