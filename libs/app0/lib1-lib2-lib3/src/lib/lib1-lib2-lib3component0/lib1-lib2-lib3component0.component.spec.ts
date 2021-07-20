import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib3component0Component } from './lib1-lib2-lib3component0.component';

describe('Lib1Lib2Lib3component0Component', () => {
  let component: Lib1Lib2Lib3component0Component;
  let fixture: ComponentFixture<Lib1Lib2Lib3component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib3component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib3component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
