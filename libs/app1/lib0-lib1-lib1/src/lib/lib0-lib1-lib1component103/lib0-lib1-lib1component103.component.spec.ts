import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib1component103Component } from './lib0-lib1-lib1component103.component';

describe('Lib0Lib1Lib1component103Component', () => {
  let component: Lib0Lib1Lib1component103Component;
  let fixture: ComponentFixture<Lib0Lib1Lib1component103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib1component103Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib1component103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
