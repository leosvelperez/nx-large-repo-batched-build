import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib0component131Component } from './lib1-lib1-lib0component131.component';

describe('Lib1Lib1Lib0component131Component', () => {
  let component: Lib1Lib1Lib0component131Component;
  let fixture: ComponentFixture<Lib1Lib1Lib0component131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib0component131Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib0component131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
