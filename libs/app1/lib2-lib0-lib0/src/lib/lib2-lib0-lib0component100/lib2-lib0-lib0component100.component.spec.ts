import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib0component100Component } from './lib2-lib0-lib0component100.component';

describe('Lib2Lib0Lib0component100Component', () => {
  let component: Lib2Lib0Lib0component100Component;
  let fixture: ComponentFixture<Lib2Lib0Lib0component100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib0component100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib0component100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
