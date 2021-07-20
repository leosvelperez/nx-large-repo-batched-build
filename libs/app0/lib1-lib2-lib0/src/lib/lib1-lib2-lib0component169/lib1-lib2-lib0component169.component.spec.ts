import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib0component169Component } from './lib1-lib2-lib0component169.component';

describe('Lib1Lib2Lib0component169Component', () => {
  let component: Lib1Lib2Lib0component169Component;
  let fixture: ComponentFixture<Lib1Lib2Lib0component169Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib0component169Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib0component169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
