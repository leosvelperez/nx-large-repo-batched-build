import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib3component74Component } from './lib0-lib1-lib3component74.component';

describe('Lib0Lib1Lib3component74Component', () => {
  let component: Lib0Lib1Lib3component74Component;
  let fixture: ComponentFixture<Lib0Lib1Lib3component74Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib3component74Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib3component74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
