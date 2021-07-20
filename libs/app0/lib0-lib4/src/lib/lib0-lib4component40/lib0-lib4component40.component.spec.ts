import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4component40Component } from './lib0-lib4component40.component';

describe('Lib0Lib4component40Component', () => {
  let component: Lib0Lib4component40Component;
  let fixture: ComponentFixture<Lib0Lib4component40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4component40Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
