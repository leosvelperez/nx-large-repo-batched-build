import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib3component114Component } from './lib1-lib0-lib3component114.component';

describe('Lib1Lib0Lib3component114Component', () => {
  let component: Lib1Lib0Lib3component114Component;
  let fixture: ComponentFixture<Lib1Lib0Lib3component114Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib3component114Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib3component114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
