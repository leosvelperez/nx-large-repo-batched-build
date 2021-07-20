import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib3component18Component } from './lib2-lib1-lib3component18.component';

describe('Lib2Lib1Lib3component18Component', () => {
  let component: Lib2Lib1Lib3component18Component;
  let fixture: ComponentFixture<Lib2Lib1Lib3component18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib3component18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib3component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
