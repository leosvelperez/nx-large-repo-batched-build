import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib0component126Component } from './lib1-lib2-lib0component126.component';

describe('Lib1Lib2Lib0component126Component', () => {
  let component: Lib1Lib2Lib0component126Component;
  let fixture: ComponentFixture<Lib1Lib2Lib0component126Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib0component126Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib0component126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
