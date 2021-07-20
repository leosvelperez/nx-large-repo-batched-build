import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib2component169Component } from './lib1-lib0-lib2component169.component';

describe('Lib1Lib0Lib2component169Component', () => {
  let component: Lib1Lib0Lib2component169Component;
  let fixture: ComponentFixture<Lib1Lib0Lib2component169Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib2component169Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib2component169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
