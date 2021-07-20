import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib3component18Component } from './lib0-lib4-lib3component18.component';

describe('Lib0Lib4Lib3component18Component', () => {
  let component: Lib0Lib4Lib3component18Component;
  let fixture: ComponentFixture<Lib0Lib4Lib3component18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib3component18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib3component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
