import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib0component44Component } from './lib1-lib4-lib0component44.component';

describe('Lib1Lib4Lib0component44Component', () => {
  let component: Lib1Lib4Lib0component44Component;
  let fixture: ComponentFixture<Lib1Lib4Lib0component44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib0component44Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib0component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
