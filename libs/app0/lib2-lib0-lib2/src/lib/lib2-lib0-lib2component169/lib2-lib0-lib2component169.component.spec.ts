import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib2component169Component } from './lib2-lib0-lib2component169.component';

describe('Lib2Lib0Lib2component169Component', () => {
  let component: Lib2Lib0Lib2component169Component;
  let fixture: ComponentFixture<Lib2Lib0Lib2component169Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib2component169Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib2component169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});