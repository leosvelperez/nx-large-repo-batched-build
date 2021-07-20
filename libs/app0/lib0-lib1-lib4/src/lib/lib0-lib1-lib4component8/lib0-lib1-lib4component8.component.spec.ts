import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component8Component } from './lib0-lib1-lib4component8.component';

describe('Lib0Lib1Lib4component8Component', () => {
  let component: Lib0Lib1Lib4component8Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
