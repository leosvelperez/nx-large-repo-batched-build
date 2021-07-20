import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib0component70Component } from './lib2-lib0-lib0component70.component';

describe('Lib2Lib0Lib0component70Component', () => {
  let component: Lib2Lib0Lib0component70Component;
  let fixture: ComponentFixture<Lib2Lib0Lib0component70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib0component70Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib0component70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
