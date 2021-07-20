import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib0component131Component } from './lib2-lib1-lib0component131.component';

describe('Lib2Lib1Lib0component131Component', () => {
  let component: Lib2Lib1Lib0component131Component;
  let fixture: ComponentFixture<Lib2Lib1Lib0component131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib0component131Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib0component131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
