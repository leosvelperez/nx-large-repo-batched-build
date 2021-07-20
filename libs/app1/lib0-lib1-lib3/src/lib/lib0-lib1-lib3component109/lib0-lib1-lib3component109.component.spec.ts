import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib3component109Component } from './lib0-lib1-lib3component109.component';

describe('Lib0Lib1Lib3component109Component', () => {
  let component: Lib0Lib1Lib3component109Component;
  let fixture: ComponentFixture<Lib0Lib1Lib3component109Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib3component109Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib3component109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
