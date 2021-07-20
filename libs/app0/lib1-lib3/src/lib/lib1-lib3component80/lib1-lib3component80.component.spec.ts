import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3component80Component } from './lib1-lib3component80.component';

describe('Lib1Lib3component80Component', () => {
  let component: Lib1Lib3component80Component;
  let fixture: ComponentFixture<Lib1Lib3component80Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3component80Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3component80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
