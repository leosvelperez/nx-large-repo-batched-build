import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4component4Component } from './lib0-lib4component4.component';

describe('Lib0Lib4component4Component', () => {
  let component: Lib0Lib4component4Component;
  let fixture: ComponentFixture<Lib0Lib4component4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4component4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});