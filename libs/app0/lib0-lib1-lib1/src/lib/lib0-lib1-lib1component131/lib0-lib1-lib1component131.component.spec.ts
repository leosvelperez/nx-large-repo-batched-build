import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib1component131Component } from './lib0-lib1-lib1component131.component';

describe('Lib0Lib1Lib1component131Component', () => {
  let component: Lib0Lib1Lib1component131Component;
  let fixture: ComponentFixture<Lib0Lib1Lib1component131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib1component131Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib1component131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
