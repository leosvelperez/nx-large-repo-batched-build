import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib0component124Component } from './lib0-lib2-lib0component124.component';

describe('Lib0Lib2Lib0component124Component', () => {
  let component: Lib0Lib2Lib0component124Component;
  let fixture: ComponentFixture<Lib0Lib2Lib0component124Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib0component124Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib0component124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
