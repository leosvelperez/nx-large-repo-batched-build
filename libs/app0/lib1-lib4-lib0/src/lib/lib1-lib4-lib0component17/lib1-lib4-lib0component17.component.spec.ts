import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib0component17Component } from './lib1-lib4-lib0component17.component';

describe('Lib1Lib4Lib0component17Component', () => {
  let component: Lib1Lib4Lib0component17Component;
  let fixture: ComponentFixture<Lib1Lib4Lib0component17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib0component17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib0component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
