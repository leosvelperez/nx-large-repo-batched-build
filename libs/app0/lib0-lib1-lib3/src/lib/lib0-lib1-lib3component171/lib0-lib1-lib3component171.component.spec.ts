import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib3component171Component } from './lib0-lib1-lib3component171.component';

describe('Lib0Lib1Lib3component171Component', () => {
  let component: Lib0Lib1Lib3component171Component;
  let fixture: ComponentFixture<Lib0Lib1Lib3component171Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib3component171Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib3component171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
