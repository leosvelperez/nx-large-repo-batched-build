import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib2component168Component } from './lib0-lib4-lib2component168.component';

describe('Lib0Lib4Lib2component168Component', () => {
  let component: Lib0Lib4Lib2component168Component;
  let fixture: ComponentFixture<Lib0Lib4Lib2component168Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib2component168Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib2component168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
