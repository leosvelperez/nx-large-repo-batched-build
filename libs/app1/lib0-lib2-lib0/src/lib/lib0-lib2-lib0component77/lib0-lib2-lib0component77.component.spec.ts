import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib0component77Component } from './lib0-lib2-lib0component77.component';

describe('Lib0Lib2Lib0component77Component', () => {
  let component: Lib0Lib2Lib0component77Component;
  let fixture: ComponentFixture<Lib0Lib2Lib0component77Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib0component77Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib0component77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
