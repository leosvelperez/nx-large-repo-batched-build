import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib3component87Component } from './lib1-lib2-lib3component87.component';

describe('Lib1Lib2Lib3component87Component', () => {
  let component: Lib1Lib2Lib3component87Component;
  let fixture: ComponentFixture<Lib1Lib2Lib3component87Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib3component87Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib3component87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
