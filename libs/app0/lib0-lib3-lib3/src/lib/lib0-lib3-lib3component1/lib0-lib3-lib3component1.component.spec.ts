import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib3component1Component } from './lib0-lib3-lib3component1.component';

describe('Lib0Lib3Lib3component1Component', () => {
  let component: Lib0Lib3Lib3component1Component;
  let fixture: ComponentFixture<Lib0Lib3Lib3component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib3component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});