import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib0component171Component } from './lib2-lib1-lib0component171.component';

describe('Lib2Lib1Lib0component171Component', () => {
  let component: Lib2Lib1Lib0component171Component;
  let fixture: ComponentFixture<Lib2Lib1Lib0component171Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib0component171Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib0component171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});