import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component54Component } from './lib0-lib1-lib4component54.component';

describe('Lib0Lib1Lib4component54Component', () => {
  let component: Lib0Lib1Lib4component54Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component54Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
