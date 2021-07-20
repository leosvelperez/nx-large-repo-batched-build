import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib0component15Component } from './lib0-lib2-lib0component15.component';

describe('Lib0Lib2Lib0component15Component', () => {
  let component: Lib0Lib2Lib0component15Component;
  let fixture: ComponentFixture<Lib0Lib2Lib0component15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib0component15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib0component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
