import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib4component113Component } from './lib0-lib3-lib4component113.component';

describe('Lib0Lib3Lib4component113Component', () => {
  let component: Lib0Lib3Lib4component113Component;
  let fixture: ComponentFixture<Lib0Lib3Lib4component113Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib4component113Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib4component113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
