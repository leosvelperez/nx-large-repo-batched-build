import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component41Component } from './lib0-lib1-lib4component41.component';

describe('Lib0Lib1Lib4component41Component', () => {
  let component: Lib0Lib1Lib4component41Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component41Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
