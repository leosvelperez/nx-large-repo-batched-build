import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib0component187Component } from './lib1-lib2-lib0component187.component';

describe('Lib1Lib2Lib0component187Component', () => {
  let component: Lib1Lib2Lib0component187Component;
  let fixture: ComponentFixture<Lib1Lib2Lib0component187Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib0component187Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib0component187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
