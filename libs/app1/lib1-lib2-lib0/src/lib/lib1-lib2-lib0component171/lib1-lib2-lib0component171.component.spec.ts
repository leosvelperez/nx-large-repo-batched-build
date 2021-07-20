import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib0component171Component } from './lib1-lib2-lib0component171.component';

describe('Lib1Lib2Lib0component171Component', () => {
  let component: Lib1Lib2Lib0component171Component;
  let fixture: ComponentFixture<Lib1Lib2Lib0component171Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib0component171Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib0component171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
