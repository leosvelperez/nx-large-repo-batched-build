import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib4component23Component } from './lib1-lib0-lib4component23.component';

describe('Lib1Lib0Lib4component23Component', () => {
  let component: Lib1Lib0Lib4component23Component;
  let fixture: ComponentFixture<Lib1Lib0Lib4component23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib4component23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib4component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});