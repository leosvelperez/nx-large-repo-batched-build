import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib4component198Component } from './lib0-lib3-lib4component198.component';

describe('Lib0Lib3Lib4component198Component', () => {
  let component: Lib0Lib3Lib4component198Component;
  let fixture: ComponentFixture<Lib0Lib3Lib4component198Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib4component198Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib4component198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});