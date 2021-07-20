import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib0component32Component } from './lib2-lib0-lib0component32.component';

describe('Lib2Lib0Lib0component32Component', () => {
  let component: Lib2Lib0Lib0component32Component;
  let fixture: ComponentFixture<Lib2Lib0Lib0component32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib0component32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib0component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
