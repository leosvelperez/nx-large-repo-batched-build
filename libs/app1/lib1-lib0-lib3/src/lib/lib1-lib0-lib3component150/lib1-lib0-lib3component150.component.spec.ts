import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib3component150Component } from './lib1-lib0-lib3component150.component';

describe('Lib1Lib0Lib3component150Component', () => {
  let component: Lib1Lib0Lib3component150Component;
  let fixture: ComponentFixture<Lib1Lib0Lib3component150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib3component150Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib3component150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
