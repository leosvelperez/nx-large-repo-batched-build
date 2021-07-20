import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib3component74Component } from './lib1-lib0-lib3component74.component';

describe('Lib1Lib0Lib3component74Component', () => {
  let component: Lib1Lib0Lib3component74Component;
  let fixture: ComponentFixture<Lib1Lib0Lib3component74Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib3component74Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib3component74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
