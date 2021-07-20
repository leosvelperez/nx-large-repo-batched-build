import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib0component145Component } from './lib2-lib1-lib0component145.component';

describe('Lib2Lib1Lib0component145Component', () => {
  let component: Lib2Lib1Lib0component145Component;
  let fixture: ComponentFixture<Lib2Lib1Lib0component145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib0component145Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib0component145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
