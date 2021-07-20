import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0component0Component } from './lib2-lib0component0.component';

describe('Lib2Lib0component0Component', () => {
  let component: Lib2Lib0component0Component;
  let fixture: ComponentFixture<Lib2Lib0component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
