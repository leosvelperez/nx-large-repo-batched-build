import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib0component114Component } from './lib1-lib2-lib0component114.component';

describe('Lib1Lib2Lib0component114Component', () => {
  let component: Lib1Lib2Lib0component114Component;
  let fixture: ComponentFixture<Lib1Lib2Lib0component114Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib0component114Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib0component114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
