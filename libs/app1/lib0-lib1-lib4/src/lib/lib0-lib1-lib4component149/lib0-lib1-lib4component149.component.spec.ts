import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component149Component } from './lib0-lib1-lib4component149.component';

describe('Lib0Lib1Lib4component149Component', () => {
  let component: Lib0Lib1Lib4component149Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component149Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component149Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
