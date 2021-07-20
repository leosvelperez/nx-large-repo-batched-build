import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib0component60Component } from './lib1-lib4-lib0component60.component';

describe('Lib1Lib4Lib0component60Component', () => {
  let component: Lib1Lib4Lib0component60Component;
  let fixture: ComponentFixture<Lib1Lib4Lib0component60Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib0component60Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib0component60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
