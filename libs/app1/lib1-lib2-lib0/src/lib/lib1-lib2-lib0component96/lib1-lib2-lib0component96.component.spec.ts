import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib0component96Component } from './lib1-lib2-lib0component96.component';

describe('Lib1Lib2Lib0component96Component', () => {
  let component: Lib1Lib2Lib0component96Component;
  let fixture: ComponentFixture<Lib1Lib2Lib0component96Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib0component96Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib0component96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
