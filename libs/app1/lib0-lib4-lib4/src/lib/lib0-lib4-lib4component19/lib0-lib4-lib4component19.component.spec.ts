import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib4component19Component } from './lib0-lib4-lib4component19.component';

describe('Lib0Lib4Lib4component19Component', () => {
  let component: Lib0Lib4Lib4component19Component;
  let fixture: ComponentFixture<Lib0Lib4Lib4component19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib4component19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib4component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});