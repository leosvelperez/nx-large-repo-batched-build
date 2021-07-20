import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib3component117Component } from './lib2-lib1-lib3component117.component';

describe('Lib2Lib1Lib3component117Component', () => {
  let component: Lib2Lib1Lib3component117Component;
  let fixture: ComponentFixture<Lib2Lib1Lib3component117Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib3component117Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib3component117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
