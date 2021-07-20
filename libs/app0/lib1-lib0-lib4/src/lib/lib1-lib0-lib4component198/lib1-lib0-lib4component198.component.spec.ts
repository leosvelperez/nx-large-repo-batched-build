import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib4component198Component } from './lib1-lib0-lib4component198.component';

describe('Lib1Lib0Lib4component198Component', () => {
  let component: Lib1Lib0Lib4component198Component;
  let fixture: ComponentFixture<Lib1Lib0Lib4component198Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib4component198Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib4component198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
