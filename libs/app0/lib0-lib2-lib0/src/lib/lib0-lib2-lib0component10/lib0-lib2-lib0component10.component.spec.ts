import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib0component10Component } from './lib0-lib2-lib0component10.component';

describe('Lib0Lib2Lib0component10Component', () => {
  let component: Lib0Lib2Lib0component10Component;
  let fixture: ComponentFixture<Lib0Lib2Lib0component10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib0component10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib0component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});