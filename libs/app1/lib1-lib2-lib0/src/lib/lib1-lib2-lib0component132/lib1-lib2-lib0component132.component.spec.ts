import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib0component132Component } from './lib1-lib2-lib0component132.component';

describe('Lib1Lib2Lib0component132Component', () => {
  let component: Lib1Lib2Lib0component132Component;
  let fixture: ComponentFixture<Lib1Lib2Lib0component132Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib0component132Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib0component132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
