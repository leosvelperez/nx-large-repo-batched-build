import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component83Component } from './lib0-lib1-lib4component83.component';

describe('Lib0Lib1Lib4component83Component', () => {
  let component: Lib0Lib1Lib4component83Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component83Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component83Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});