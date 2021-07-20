import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib4component140Component } from './lib1-lib1-lib4component140.component';

describe('Lib1Lib1Lib4component140Component', () => {
  let component: Lib1Lib1Lib4component140Component;
  let fixture: ComponentFixture<Lib1Lib1Lib4component140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib4component140Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib4component140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
