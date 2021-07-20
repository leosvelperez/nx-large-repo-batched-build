import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib0component6Component } from './lib1-lib2-lib0component6.component';

describe('Lib1Lib2Lib0component6Component', () => {
  let component: Lib1Lib2Lib0component6Component;
  let fixture: ComponentFixture<Lib1Lib2Lib0component6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib0component6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib0component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
