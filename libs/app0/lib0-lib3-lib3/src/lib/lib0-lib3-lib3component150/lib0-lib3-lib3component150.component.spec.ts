import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib3component150Component } from './lib0-lib3-lib3component150.component';

describe('Lib0Lib3Lib3component150Component', () => {
  let component: Lib0Lib3Lib3component150Component;
  let fixture: ComponentFixture<Lib0Lib3Lib3component150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib3component150Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib3component150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
